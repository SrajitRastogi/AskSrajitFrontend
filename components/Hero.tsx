import { Github, Download, MessageCircle } from "lucide-react";

interface HeroProps {
  openChat: () => void;
}

export default function Hero({ openChat }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-gray-100">
      <h1 className="text-6xl font-bold mb-6 tracking-tight">
        Software Engineer
      </h1>

      <p className="text-gray-600 max-w-2xl text-lg mb-10 leading-relaxed">
        I build reliable backend systems and scalable applications using
        modern microservices architecture and cloud-native technologies.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={openChat}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-white shadow-md"
        >
          <MessageCircle size={18} />
          Talk to My AI
        </button>

        <a
          href="/resume.pdf"
          className="flex items-center gap-2 border border-gray-300 hover:bg-gray-100 transition px-6 py-3 rounded-xl"
        >
          <Download size={18} />
          Download Resume
        </a>

        <a
          href="https://github.com/SrajitRastogi"
          target="_blank"
          className="flex items-center gap-2 border border-gray-300 hover:bg-gray-100 transition px-6 py-3 rounded-xl"
        >
          <Github size={18} />
          GitHub
        </a>
      </div>
    </section>
  );
}
