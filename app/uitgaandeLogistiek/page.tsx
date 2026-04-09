"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UitgaandeLogistiekPage() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (window.history.pushState) {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  const scoAiSteps = [
    {
      titel: "Stap 1: Breng het distributieproces in kaart",
      beschrijving: "Identificeer hoe producten worden verzonden:",
      punten: [
        "Leveringsroutes en transportmiddelen",
        "Klantlocaties en afleverpunten",
        "Doorlooptijden van bestellingen",
      ],
    },
    {
      titel: "Stap 2: Verzamel data uit bronnen",
      beschrijving: "Zorg dat diverse datastromen beschikbaar zijn:",
      punten: [
        "Orderinformatie en klantvraag",
        "Actuele voorraad en verzendmomenten",
        "Verkeerssituaties en externe factoren",
        "Historische transportprestaties",
      ],
    },
    {
      titel: "Stap 3: Analyse met SCO-AI",
      beschrijving: "Gebruik predictive analytics om te voorspellen:",
      punten: [
        "Bepalen van de meest optimale routes",
        "Nauwkeurige levertijden voorspellen",
        "Vraag en distributie op elkaar afstemmen",
        "Verstoringen vroegtijdig signaleren",
      ],
    },
    {
      titel: "Stap 4: Integreer in logistieke processen",
      beschrijving: "Koppel AI aan de operatie voor automatisering:",
      punten: [
        "Automatische aanpassing van transportplanning",
        "Realtime route-optimalisatie",
        "Datagedreven besluitvorming bij verzending",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Optimaliseer de keten op basis van AI-inzichten:",
      punten: [
        "Structureel verlagen van transportkosten",
        "Verhogen van de leverbetrouwbaarheid",
        "Flexibiliteit in distributie vergroten",
      ],
    },
  ];

  const StepCarousel = ({ data }: { data: typeof scoAiSteps }) => (
    <div className="px-12 w-full">
      <Carousel opts={{ align: "start" }} className="w-full mx-auto">
        <CarouselContent>
          {data.map((stap, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2 h-full">
                <div className="border-3 rounded-lg border-black p-6 h-full flex flex-col bg-card">
                  <h4 className="font-semibold mb-2">{stap.titel}</h4>
                  <p className="text-sm mb-2">{stap.beschrijving}</p>
                  <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
                    {stap.punten.map((punt, i) => (
                      <li key={i}>{punt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          size="icon-lg"
          variant="ghost"
          className="border-black border-3"
        />
        <CarouselNext
          size="icon-lg"
          variant="ghost"
          className="border-black border-3"
        />
      </Carousel>
    </div>
  );

  return (
    <div>
      <header className="relative flex items-center justify-center border-b overflow-hidden h-80">
        <Image
          src="/Banner inkomende logistiek.png"
          alt="banner uitgaande logistiek"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            Uitgaande Logistiek
          </h1>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            <a
              href="#sco-ai"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              1. SCO-AI
            </a>
          </div>
        </div>
      </header>

      <main className="m-16 flex flex-col gap-4">
        <div className="flex flex-col gap-4 pb-4">
          <h2 id="sco-ai" className="text-2xl font-bold pb-4">
            1. SCO-AI (Predictive Analytics)
          </h2>

          <section className="flex flex-row items-start">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">Wat is de techniek?</h3>
              <p>
                SCO-AI (Supply Chain Optimization using AI) maakt gebruik van
                predictive analytics om logistieke processen aan te sturen op
                basis van realtime data. In plaats van statische schema's,
                analyseert het systeem continu data uit bronnen zoals
                verkeersinformatie, orderstatussen en externe factoren om een
                dynamisch en zelflerend distributienetwerk te vormen.
              </p>
              <br />
              <p>
                Bij SmartBikes wordt SCO-AI ingezet om de levering van
                stadsfietsen, e-bikes en racefietsen te optimaliseren. Het
                systeem bepaalt automatisch welke routes het meest efficiënt
                zijn en wanneer producten verzonden moeten worden om
                vertragingen te voorkomen.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/uitgaand-1.png"
                alt="SCO-AI Technologie"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">
                Waarom SCO-AI toepassen?
              </h3>
              <p>
                Traditionele uitgaande logistiek is vaak reactief, waardoor
                onverwachte verkeersdrukte of pieken in de vraag direct leiden
                tot vertragingen. Door vooruit te kijken met AI kunnen
                transportmiddelen optimaal worden benut en worden routes
                realtime bijgestuurd. Dit zorgt voor een sneller en
                betrouwbaarder leveringsproces.
              </p>
              <p className="mt-4 font-medium">Voor SmartBikes betekent dit:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Fietsen zijn sneller bij de klant of dealer</li>
                <li>
                  Lagere transportkosten door efficiëntere belading en routes
                </li>
                <li>
                  Hogere leverbetrouwbaarheid, ook tijdens drukke seizoenen
                </li>
                <li>
                  Een adaptieve keten die direct reageert op marktveranderingen
                </li>
              </ul>
            </div>

            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/uitgaand-efficiency.png"
                alt="Voordelen SCO-AI"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold pb-4 text-lg">
              Hoe implementeer je SCO-AI?
            </h3>
            <StepCarousel data={scoAiSteps} />
          </section>

          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link
              className="text-blue-500 hover:underline"
              href="https://doi.org/10.56294/dm2024395"
            >
              Lees meer over Supply Chain Optimization...
            </Link>
          </section>
        </div>
      </main>

      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed top-8 right-1/2 cursor-pointer z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center border-2 border-blue-400"
          aria-label="Terug naar boven"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
