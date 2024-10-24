"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import useAttendance from "@/hooks/use-attendance";

export default function Users() {
  const { users } = useAttendance();

  return (
    <main className="w-full max-w-4xl mx-auto p-5">
      <Link href="/" className="flex items-center gap-2 mb-3">
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      <h1 className="text-2xl md:text-3xl font-bold mb-5">Users</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {users.map((user) => (
          <div
            key={user.username}
            className="w-full flex items-center justify-between gap-3 border rounded-lg p-3 shadow-sm"
          >
            <Link href={`/users/${user.username}`} className="hover:underline">
              {user.username}
            </Link>

            <div className="flex items-center gap-2">
              <Switch checked={user.status === "Present"} disabled />

              <p className="text-sm font-semibold">{user.status}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
