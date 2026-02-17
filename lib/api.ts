export async function sendMessage(
    sessionId: string,
    message: string,
    mode: string
  ) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/chat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id: sessionId,
          message,
          mode,
        }),
      }
    );
  
    return res.json();
  }
  