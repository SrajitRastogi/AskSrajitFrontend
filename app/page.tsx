"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ChatPanel from "../components/ChatPanel";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <Navbar openChat={() => setChatOpen(true)} />
      <Hero openChat={() => setChatOpen(true)} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      {chatOpen && <ChatPanel close={() => setChatOpen(false)} />}
    </>
  );
}
