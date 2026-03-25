"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Hotspot = {
  id: number;
  top: string;
  left: string;
  info: Record<string, string>;
  href: string;
};

export default function InteractiveImage() {
  const hotspots: Hotspot[] = [
    {
      id: 1,
      top: "33%",
      left: "50%",

      href: "/productie",
      info: {
        "Advanced manufacturing":
          "Geavanceerde productieprocessen met AI-gestuurde automatisering en optimalisatie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 2,
      top: "80%",
      left: "10%",

      href: "/customerService",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 3,
      top: "60%",
      left: "85%",

      href: "/inkomendeLogistiek",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 4,
      top: "50%",
      left: "65%",

      href: "/inkoop",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 5,
      top: "35%",
      left: "85%",

      href: "/uitgaandeLogistiek",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 6,
      top: "33%",
      left: "10%",

      href: "/planning",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 7,
      top: "50%",
      left: "10%",

      href: "/sales",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 8,
      top: "50%",
      left: "40%",

      href: "/kwaliteit",
      info: {
        "Vision AI:":
          "Visuele kwaliteitscontrole door AI-gestuurde beeldanalyse.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 9,
      top: "70%",
      left: "40%",

      href: "/hr",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },

    {
      id: 10,
      top: "70%",
      left: "30%",

      href: "/administratie",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 11,
      top: "48%",
      left: "30%",

      href: "/r&d",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 12,
      top: "50%",
      left: "54%",
      href: "/it",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
  ];

  return (
    <div className="max-w-4xl w-full relative aspect-[1076/511]">
      <Image
        src="/plattegrond.png"
        alt="Interactive"
        fill
        className="w-full h-auto rounded-lg"
      />

      {hotspots.map((spot) => (
        <div
          key={spot.id}
          className="absolute group z-20 hover:z-50"
          style={{
            top: spot.top,
            left: spot.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Link
            href={spot.href}
            className="block w-6 h-6 bg-red-500 border-2 border-white rounded-full cursor-pointer z-10 transition-transform hover:scale-125 shadow-md"
          />

          {/* Pop-over */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 z-50 transition pointer-events-none w-64">
            <div className="bg-white shadow-xl rounded-lg p-4 border border-gray-100">
              <h2 className="font-bold mb-3 text-sm text-gray-800 border-b pb-1">
                Digitale technologieën
              </h2>

              <div className="space-y-4">
                {Object.entries(spot.info).map(([tech, description], i) => (
                  <div key={i} className="">
                    <span className=" block font-bold text-lg">• {tech}</span>
                    <p className="text-gray-700 mt-1 ml-3 text-md">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
