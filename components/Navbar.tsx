interface NavbarProps {
  openChat: () => void;
}

export default function Navbar({ openChat }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-[#0B1120] p-6 flex justify-between items-center border-b border-gray-800">
      <h1 className="text-xl font-bold">Srajit Rastogi</h1>

      <div className="space-x-6 hidden md:block">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a
          href="https://github.com/SrajitRastogi"
          target="_blank"
          className="hover:text-blue-600 transition"
        >
          GitHub
        </a>
      </div>

      <button
        onClick={openChat}
        className="bg-blue-600 px-4 py-2 rounded-lg"
      >
        Ask AI
      </button>
    </nav>
  );
}
