"use client";

import Background from "./Components/Background";
import Cards from "./Components/Cards";
import AddCard from "./Components/AddCard";
import FileSize from "./Components/FileSize";
import { useState, useRef } from "react";

export default function Home() {
  const sectionRef = useRef(null);
  const [cardData, setCardData] = useState([
    {
      title: "Quantum Orb",
      description:
        "Enter the realm of the Quantum Orb, a captivating device that harnesses the enigmatic power of quantum mechanics. With pulsating hues and an elusive glow, it beckons explorers to uncover the mysteries of dimensional landscapes.",
    },
    {
      title: "ChronoScope",
      description:
        "Embark on a journey through time with the ChronoScope, an innovative time-tracking marvel seamlessly integrated into everyday life. Its sleek design and intuitive interface grant mastery over the temporal domain.",
    },
    {
      title: "Harmonic Resonator",
      description:
        "Dive into a symphony of frequencies with the Harmonic Resonator. Adorned with intricate coils and resonating chambers, it amplifies the essence of sound, promising an auditory experience beyond comparison.",
    },
    {
      title: "Ethereal Lens",
      description:
        "Peer into unseen realms through the Ethereal Lens. Its crystalline structure refracts light in captivating patterns, revealing hidden beauty between dimensions.",
    },
    {
      title: "Aurora Elixir Vial",
      description:
        "Contained within this vial lies the Aurora Elixir, a shimmering concoction distilled from celestial energies. Its iridescent essence promises rejuvenation and vitality, a cosmic elixir in a single drop.",
    },
    {
      title: "Cipher Lockbox",
      description:
        "Safeguarding secrets within intricate engravings and cryptic mechanisms, the Cipher Lockbox challenges those skilled in deciphering codes to unveil the treasures concealed within its secure confines.",
    },
  ]);

  return (
    <section ref={sectionRef} className="w-full h-full bg-zinc-900 ">
      <div className="fixed w-full h-screen">
        <Background />
        <FileSize cardData={cardData} />
        <AddCard cardData={cardData} setCardData={setCardData} />
      </div>
      <Cards
        setCardData={setCardData}
        cardData={cardData}
        reference={sectionRef}
      />
    </section>
  );
}
