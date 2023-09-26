import type { Metadata } from "next";
import GetAllUsers from "@/lib/getAllUsers";

export const metadata: Metadata = {
  title: "Users",
};

import React from "react";
import Link from "next/link";
import { User } from "@/types";

// Creating a Users page and fetching its data from an API
export default async function Users() {
  const userData: Promise<User[]> = GetAllUsers();
  const users = await userData;

  const content = (
    <section>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return content;
}
