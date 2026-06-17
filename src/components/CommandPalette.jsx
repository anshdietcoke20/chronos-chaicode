"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const router = useRouter();

useEffect(() => {
  const down = (e) => {
    const target = e.target;

    const isTyping =
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target.isContentEditable;

    if (isTyping) return;

    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setOpen((open) => !open);
    }

    if (e.key === "i") {
      router.push("/inbox");
    }

    if (e.key === "a") {
      router.push("/agent");
    }

    if (e.key === "c") {
      router.push("/calendar");
    }

    if (e.key === "d") {
      router.push("/dashboard");
    }
  };

  window.addEventListener("keydown", down);

  return () => window.removeEventListener("keydown", down);
}, [router]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-start pt-32 z-50"
      onClick={() => setOpen(false)}
    >
      <Command
        className="bg-white rounded-xl shadow-xl w-150 p-4"
        onClick={(e) => e.stopPropagation()}
      >
<Command.Input
  value={search}
  onValueChange={setSearch}
  placeholder="Type a command..."
  className="w-full border-b pb-2 outline-none"
/>
        <Command.List className="mt-4">
            <Command.Item
  onSelect={async () => {
    await navigator.clipboard.writeText(
      `Meeting Agenda

1. Updates
2. Discussion
3. Action Items`
    );

    alert("Copied!");
  }}
>
  📋 Copy Meeting Template
</Command.Item>

          <Command.Item
            onSelect={() => router.push("/agent")}
          >
            🤖 Open Agent
          </Command.Item>

          <Command.Item
            onSelect={() => router.push("/inbox")}
          >
            📧 Inbox
          </Command.Item>

          <Command.Item
            onSelect={() => router.push("/calendar")}
          >
            📅 Calendar
          </Command.Item>


          <Command.Item
            onSelect={() => router.push("/logout")}
          >
            🚪 Logout
          </Command.Item>
        </Command.List>
      </Command>
    </div>
  );
}