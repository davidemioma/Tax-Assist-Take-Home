"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import useAttendance from "@/hooks/use-attendance";

export default function User({
  params: { username },
}: {
  params: { username: string };
}) {
  const { users, updateUserStatus } = useAttendance();

  const formattedUsername = username.replace(/%20/g, " ");

  const user = users.find(
    (user) => user.username.toLowerCase() === formattedUsername.toLowerCase()
  );

  if (!user) {
    notFound();
  }

  return (
    <div
      className="w-screen h-screen flex items-center justify-center px-5"
      data-cy="user-page"
    >
      <main className="w-full max-w-2xl">
        <Link href="/users" className="flex items-center gap-2 mb-3">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="w-full flex items-center justify-between gap-3 border rounded-lg p-5 shadow-sm">
          <h2 className="text-xl font-bold">{user.username}</h2>

          <div className="flex items-center gap-2">
            <Switch
              checked={user.status === "Present"}
              onCheckedChange={() =>
                updateUserStatus(
                  user.username,
                  user.status === "Absent" ? "Present" : "Absent"
                )
              }
              data-cy="status-switch"
            />

            <p className="text-sm font-semibold" data-cy="status-text">
              {user.status}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
