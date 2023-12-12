import { useState, useEffect } from "react";

export default function AddCard({ cardData, setCardData }) {
  const [moreCards, setMoreCards] = useState([
    {
      title: "Luminous Spectrometer",
      description:
        "Delve into the enigmatic world of spectral analysis with the Luminous Spectrometer. Its radiant display and intricate prisms reveal the hidden hues of existence, illuminating the unseen threads woven into the fabric of reality.",
    },
    {
      title: "Galactic Compass",
      description:
        "Navigate the cosmic expanse with the Galactic Compass, an artifact guided by the celestial dance of stars. Its luminescent dial and celestial pointers unveil pathways through the infinite reaches of space-time.",
    },
    {
      title: "Echoing Spheroid",
      description:
        "Encounter the Echoing Spheroid, a marvel emitting resonant frequencies that echo through dimensions. Its harmonious vibrations reveal echoes of distant realms, beckoning explorers to uncover parallel existences.",
    },
    {
      title: "Astral Veil Mantle",
      description:
        "Enshroud yourself in the Astral Veil Mantle, a cloak woven from ethereal threads. It grants glimpses into astral planes, allowing wearers to traverse between the realms of dreams and reality.",
    },
    {
      title: "Chromatic Prismatizer",
      description:
        "Experience the Chromatic Prismatizer, a device that refracts reality into vibrant dimensions. Its kaleidoscopic array of colors unveils the spectrum of existence, transforming mundane sights into mesmerizing wonders.",
    },
    {
      title: "Enigmatic Chronograph",
      description:
        "Encounter the mysteries of time with the Enigmatic Chronograph. Its arcane dial and cryptic glyphs hint at temporal anomalies, inviting curious minds to decipher the secrets of time's elusive nature.",
    },
    {
      title: "Nebulous Cognition Node",
      description:
        "Dive into the nebulous depths of cognition with the Node, a cerebral interface merging mind and machine. Its pulsating synapses reveal hidden thoughts and expand cognitive boundaries.",
    },
    {
      title: "Quantum Transceiver",
      description:
        "Experience the Quantum Transceiver, a device bridging realms through quantum entanglement. Its transmissions traverse dimensions, enabling communication beyond conventional bounds.",
    },
    {
      title: "Ethereal Gauntlet",
      description:
        "Grasp the Ethereal Gauntlet, an artifact resonating with celestial energies. Its shimmering resonance grants control over ethereal forces, bending cosmic will to its bearer.",
    },
    {
      title: "Chrono-Displacement Engine",
      description:
        "Unleash the Chrono-Displacement Engine, a mechanism manipulating temporal vectors. Its intricate design unlocks gateways to temporal escapades across epochs.",
    },
    {
      title: "Nebula Harmonizer",
      description:
        "Harmonize cosmic forces with the Nebula Harmonizer. Its symphonic resonance orchestrates celestial energies, bringing cosmic elements into celestial balance.",
    },
    {
      title: "Aurora Prismatica",
      description:
        "Behold the Aurora Prismatica, a prism refracting cosmic hues. Its iridescent brilliance showcases the spectrum of cosmic colors, unveiling the artistry of the cosmos.",
    },
    {
      title: "Interstellar Codex",
      description:
        "Unlock the secrets of the Interstellar Codex, an archive of cosmic wisdom. Its enigmatic texts illuminate the cosmic tapestry, revealing insights from distant realms.",
    },
  ]);

  function addFile() {
    setMoreCards((prevCards) => {
      const extraCard = prevCards[0];
      return prevCards.slice(1); // Remove the first card from state
    });
  }

  useEffect(() => {
    if (moreCards.length > 0) {
      setCardData((prevCardData) => [...prevCardData, moreCards[0]]); // Add the removed card to card data
    }
  }, [moreCards, setCardData]);

  return (
    <div
      className="z-10 absolute bottom-4 right-4 cursor-pointer bg-gray-700 rounded-full p-3 text-sm font-semibold text-gray-700 "
      onClick={addFile}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
        className="transition-all duration-300 fill-white hover:fill-blue-400"
      >
        <path d="M440-240h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
      </svg>
    </div>
  );
}
