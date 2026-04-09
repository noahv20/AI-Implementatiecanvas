"use client";

import HomeButton from "@/components/homeButton";
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
import { useState, useEffect } from "react";

export default function ItPage() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  // Scroll detectie voor de knop
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Vloeiend naar boven scrollen en URL opschonen
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (window.history.pushState) {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  const aiOpsSteps = [
    {
      titel: "Stap 1: Breng de IT-omgeving in kaart",
      beschrijving: "Identificeer kritische systemen zoals:",
      punten: [
        "ERP-systemen (productie, voorraad)",
        "Servers en cloudomgevingen",
        "Netwerken en databronnen",
      ],
    },
    {
      titel: "Stap 2: Verzamel data via IT-systemen",
      beschrijving: "Verzamel data uit verschillende bronnen zoals:",
      punten: [
        "Server- en applicatielogs",
        "Systeemmetrics (CPU, RAM)",
        "Foutmeldingen en incidentdata",
      ],
    },
    {
      titel: "Stap 3: Analyse met AI",
      beschrijving: "Gebruik AI om:",
      punten: [
        "Incidenten automatisch detecteren",
        "Afwijkingen herkennen",
        "Storingen voorspellen",
        "Root causes achterhalen",
      ],
    },
    {
      titel: "Stap 4: Integreer in IT-processen",
      beschrijving: "Koppel AI aan systemen zodat:",
      punten: [
        "Automatische meldingen ontstaan",
        "Systemen zichzelf herstellen",
        "Resources automatisch schalen",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Gebruik data om:",
      punten: [
        "IT-processen te optimaliseren",
        "Storingen te verminderen",
        "Performance te verbeteren",
      ],
    },
  ];

  const StepCarousel = ({ data }: { data: typeof aiOpsSteps }) => (
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
          src="/Banner IT.png"
          alt="Banner IT"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            IT Operations
          </h1>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            <a
              href="#ai-ops"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              1. AI-OPS
            </a>
          </div>
        </div>
      </header>

      <main className="m-16 flex flex-col gap-4">
        <div id="ai-ops" className="flex flex-col gap-4 pb-4">
          <h2 className="text-2xl font-bold pb-4">1. AI-OPS</h2>

          <section className="flex flex-row items-start pb-8">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Wat is AI-OPS?</h3>
              <p>
                AI-OPS (Artificial Intelligence for IT Operations) is een
                technologie waarbij kunstmatige intelligentie wordt ingezet om
                IT-processen te automatiseren en te optimaliseren. In moderne
                IT-omgevingen, zoals ERP-systemen binnen productiebedrijven,
                worden grote hoeveelheden data gegenereerd in de vorm van logs,
                metrics en systeemmeldingen.
              </p>
              <p className="mt-2">
                Kunstmatige intelligentie speelt hierin een belangrijke rol
                doordat het in staat is om deze grote hoeveelheden data te
                analyseren en om te zetten in bruikbare inzichten. Hierdoor
                worden IT-systemen niet alleen gemonitord, maar ook proactief
                aangestuurd.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/IT 1.png"
                alt="AI-OPS Visual"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Waarom AI-OPS?</h3>
              <p>
                Het toepassen van AI binnen de IT-afdeling maakt het mogelijk om
                IT-systemen betrouwbaarder en efficiënter te maken. Traditionele
                IT-monitoring is vaak reactief, terwijl AI-OPS incidenten
                sneller opspoort en zelfs voorspelt.
              </p>
              <p className="mt-2 font-medium">Voor SmartBikes betekent dit:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Uitval van het ERP-systeem wordt voorkomen</li>
                <li>Productieprocessen vallen niet stil door IT-fouten</li>
                <li>IT-personeel bespaart tijd op repetitieve taken</li>
              </ul>
            </div>
            <div className="flex-1 relative h-80 w-auto">
              <Image
                src="/aiops.png"
                alt="AI-OPS Voordelen"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold pb-4 text-lg">
              Hoe gebruik je AI-OPS?
            </h3>
            <StepCarousel data={aiOpsSteps} />
          </section>

          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link
              href="https://arxiv.org/pdf/2304.04661"
              className="text-blue-500 hover:underline"
            >
              Lees meer...
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
