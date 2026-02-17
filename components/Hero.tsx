interface HeroProps {
  openChat: () => void;
}

export default function Hero({ openChat }: HeroProps) {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-6xl font-bold mb-6">
        Software Engineer
      </h1>

      <p className="text-gray-400 max-w-2xl mb-8">
      Focused on building reliable, maintainable backend systems using microservices architecture and cloud-native tools.
      </p>

      <div className="flex gap-4">
        <button
          onClick={openChat}
          className="bg-blue-600 px-6 py-3 rounded-xl"
        >
          Talk to My AI
        </button>

        <a
          href="/resume.pdf"
          className="border border-gray-600 px-6 py-3 rounded-xl"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
