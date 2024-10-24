import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Status = "Present" | "Absent";

type User = {
  username: string;
  status: Status;
};

type Props = {
  users: User[];
  addUser: (user: User) => void;
  updateUserStatus: (username: string, status: Status) => void;
};

const useAttendance = create<Props>()(
  persist(
    (set) => ({
      users: [],
      addUser(user: User) {
        set((state) => {
          const userExists = state.users.some(
            (existingUser) =>
              existingUser.username.toLowerCase() ===
              user.username.toLowerCase()
          );

          if (userExists) {
            return state;
          }

          return {
            users: [...state.users, user],
          };
        });
      },
      updateUserStatus(username: string, status: Status) {
        set((state) => {
          const userToUpdate = state.users.find(
            (user) => user.username.toLowerCase() === username.toLowerCase()
          );

          if (!userToUpdate) {
            return state;
          }

          return {
            users: state.users.map((user) =>
              user.username === username ? { ...userToUpdate, status } : user
            ),
          };
        });
      },
    }),
    {
      name: "attendance",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAttendance;
