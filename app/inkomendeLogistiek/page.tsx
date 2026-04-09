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

export default function InkomendeLogistiekPage() {
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

  const logistiekSteps = [
    {
      titel: "Stap 1: Breng het logistieke proces in kaart",
      beschrijving: "Identificeer waar knelpunten ontstaan, zoals:",
      punten: [
        "Onbetrouwbare levertijden",
        "Tekorten of overschotten in voorraad",
        "Slechte afstemming met de productie",
        "Gebrek aan inzicht in leveranciersprestaties",
      ],
    },
    {
      titel: "Stap 2: Verzamel data via technologie",
      beschrijving: "Verzamel relevante data voor AI-modellen:",
      punten: [
        "Leveranciersdata (levertijden, betrouwbaarheid)",
        "Historische voorraadniveaus",
        "Actuele vraagvoorspellingen",
        "Bestel- en leveringshistorie",
      ],
    },
    {
      titel: "Stap 3: Analyse en voorspelling met AI",
      beschrijving: "Optimaliseer logistieke stromen met machine learning:",
      punten: [
        "Levertijden en mogelijke vertragingen voorspellen",
        "Optimale voorraadniveaus berekenen",
        "Automatische bestelmomenten bepalen",
        "Risico's in de supply chain vroegtijdig detecteren",
      ],
    },
    {
      titel: "Stap 4: Integreer in ERP-systemen",
      beschrijving: "Koppel AI aan logistieke software voor:",
      punten: [
        "Realtime inzicht in inkomende goederenstromen",
        "Automatische alerts bij dreigende voorraadtekorten",
        "Dashboards met aanbevelingen voor planners",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Gebruik AI-inzichten voor procesoptimalisatie:",
      punten: [
        "Voorraadstrategieën aanscherpen",
        "Leveranciersselectie verbeteren op basis van data",
        "Verspilling en opslagkosten minimaliseren",
      ],
    },
  ];

  const StepCarousel = ({ data }: { data: typeof logistiekSteps }) => (
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
          alt="banner inkomende logistiek"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            Inkomende Logistiek
          </h1>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            <a
              href="#ai-inkomende-logistiek"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              1. AI Inkomende Logistiek
            </a>
          </div>
        </div>
      </header>

      <main className="m-16 flex flex-col gap-4">
        <div className="flex flex-col gap-4 pb-4">
          <h2 id="ai-inkomende-logistiek" className="text-2xl font-bold pb-4">
            1. AI Inkomende Logistiek
          </h2>

          <section className="flex flex-row items-start">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">
                Wat is AI Inkomende Logistiek?
              </h3>
              <p>
                Inkomende logistiek omvat het ontvangen, opslaan en beheren van
                grondstoffen en componenten. Dit proces wordt steeds uitdagender
                door wisselende levertijden en verstoringen in de wereldwijde
                keten. Waar traditionele methoden vertrouwen op vaste
                bestelpunten, maakt AI gebruik van machine learning om patronen
                te herkennen in grote hoeveelheden data.
              </p>
              <br />
              <p>
                Voor SmartBikes betekent dit een verschuiving naar een
                zelflerend systeem. De AI voorspelt exact wanneer onderdelen
                zoals frames of batterijen zullen arriveren en bepaalt volledig
                automatisch het optimale moment voor nieuwe bestellingen,
                rekening houdend met de actuele vraag en
                leveranciersbetrouwbaarheid.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/logistiek-1.png"
                alt="AI Inkomende Logistiek Concept"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">
                Waarom AI in de logistiek?
              </h3>
              <p>
                Het toepassen van AI helpt bedrijven om proactief om te gaan met
                onzekerheden. In plaats van te reageren op een leeg magazijn,
                voorspelt het systeem toekomstige tekorten en past het de
                logistieke stroom daarop aan. Dit resulteert in een stabielere
                supply chain en nauwkeurigere planningen.
              </p>
              <p className="mt-4 font-medium">Voor SmartBikes levert dit op:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  Onderdelen zijn altijd op tijd beschikbaar voor productie
                </li>
                <li>Lagere voorraadkosten door minder 'dood kapitaal'</li>
                <li>
                  Minder productiestilstand door tijdige signalering van
                  risico's
                </li>
                <li>Hogere leverbetrouwbaarheid naar de eindklant</li>
              </ul>
            </div>

            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/logistiek-efficiency.png"
                alt="Voordelen van AI Logistiek"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold pb-4 text-lg">
              Hoe gebruik je AI inkomende logistiek?
            </h3>
            <StepCarousel data={logistiekSteps} />
          </section>

          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link
              className="text-blue-500 hover:underline"
              href="https://doi.org/10.63332/joph.v5i12.3860"
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
