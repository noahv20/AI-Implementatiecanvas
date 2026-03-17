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
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 2,
      top: "62%",
      left: "31%",

      href: "/customerService",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 3,
      top: "50%",
      left: "65%",

      href: "/inkomendeLogistiek",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 4,
      top: "47%",
      left: "57%",

      href: "/inkoop",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 5,
      top: "40%",
      left: "65%",

      href: "/uitgaandeLogistiek",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 6,
      top: "37%",
      left: "31%",

      href: "/planning",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 7,
      top: "47%",
      left: "31%",

      href: "/sales",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 8,
      top: "47%",
      left: "47%",

      href: "/kwaliteit",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 9,
      top: "62%",
      left: "47%",

      href: "/hr",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },

    {
      id: 10,
      top: "63%",
      left: "40%",

      href: "/administratie",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
    {
      id: 11,
      top: "47%",
      left: "37%",

      href: "/r&d",
      info: {
        "Feature 1": "Beschrijving voor feature 1 specifiek voor productie.",
        "Feature 2": "Uitleg over de tweede technologie.",
        "Feature 3": "En de derde beschrijving hier.",
      },
    },
  ];

  return (
    <div className="max-w-3xl">
      <img
        src="Schermafbeelding 2026-03-12 104528.png"
        alt="Interactive"
        className="w-full h-auto rounded-lg "
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
                    <span className=" block">• {tech}</span>
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
