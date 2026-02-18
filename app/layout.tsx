import "./globals.css";

export const metadata = {
  title: "Srajit AI Portfolio",
  description: "AI Powered Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B1120] text-white">
        {children}
      </body>
    </html>
  );
}
