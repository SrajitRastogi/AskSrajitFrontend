"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { sendMessage } from "../lib/api";

export default function ChatPanel({ close }: { close: () => void }) {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("Recruiter");
  const sessionId = uuidv4();

  const handleSend = async () => {
    if (!input) return;

    setMessages([...messages, { role: "user", content: input }]);

    const res = await sendMessage(sessionId, input, mode);

    setMessages(prev => [
      ...prev,
      { role: "assistant", content: res.response }
    ]);

    setInput("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
      <div className="w-96 bg-[#111827] p-4 flex flex-col h-full shadow-2xl">

        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold">Ask Srajit AI</h2>
          <button onClick={close}>✕</button>
        </div>

        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setMode("Recruiter")}
            className={`px-3 py-1 rounded ${
              mode === "Recruiter"
                ? "bg-blue-600"
                : "bg-gray-700"
            }`}
          >
            Recruiter
          </button>

          <button
            onClick={() => setMode("Engineer")}
            className={`px-3 py-1 rounded ${
              mode === "Engineer"
                ? "bg-blue-600"
                : "bg-gray-700"
            }`}
          >
            Engineer
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 mb-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg ${
                m.role === "user"
                  ? "bg-blue-600 self-end"
                  : "bg-gray-700"
              }`}
            >
              {m.content}
            </div>
          ))}
        </div>

        <div className="flex">
          <input
            className="flex-1 bg-gray-800 p-2 rounded-l outline-none"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask about my backend architecture..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 px-4 rounded-r"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
}
