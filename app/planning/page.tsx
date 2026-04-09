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

export default function Planning() {
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

  const planningSteps = [
    {
      titel: "Stap 1: Breng het proces en knelpunten in kaart",
      beschrijving: "Identificeer waar problemen ontstaan, zoals:",
      punten: [
        "Lange wachttijden",
        "Inefficiënte volgordes",
        "Te veel handmatige herplanning",
      ],
    },
    {
      titel: "Stap 2: Verzamel data via technologie",
      beschrijving: "Verzamel realtime data over:",
      punten: [
        "Openstaande orders",
        "Actuele doorlooptijden",
        "Beschikbare machinecapaciteit",
        "Historische storingen",
      ],
    },
    {
      titel: "Stap 3: Analyse en optimalisatie met AI",
      beschrijving: "Gebruik Reinforcement Learning om:",
      punten: [
        "Leren van eerdere planningsbeslissingen",
        "Schema's automatisch optimaliseren",
        "Direct aanpassen bij verstoringen",
      ],
    },
    {
      titel: "Stap 4: Integreer in het planningssysteem",
      beschrijving: "Koppel AI aan bestaande software zodat:",
      punten: [
        "Realtime updates direct zichtbaar zijn",
        "Planners dashboards krijgen met AI-advies",
        "Besluitvorming datagedreven wordt",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Gebruik AI-inzichten voor:",
      punten: [
        "Structurele verkorting van doorlooptijden",
        "Hogere flexibiliteit bij spoedorders",
        "Optimale machinebenutting",
      ],
    },
  ];

  const StepCarousel = ({ data }: { data: typeof planningSteps }) => (
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
      {/* HEADER */}
      <header className="relative flex items-center justify-center border-b overflow-hidden h-80">
        <Image
          src="/Banner planning.png"
          alt="banner planning"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            Planning
          </h1>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            <a
              href="#ai-planning"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              1. AI productie planning
            </a>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="m-16 flex flex-col gap-4">
        <div className="flex flex-col gap-4 pb-4">
          <h2 id="ai-planning" className="text-2xl font-bold pb-4">
            1. AI productie planning
          </h2>

          <section className="flex flex-row items-start">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">
                Wat is AI productie planning?
              </h3>
              <p>
                Productieplanningen worden steeds complexer bij moderne
                fabrieken door dynamische omstandigheden, zoals wisselende
                vraag, variabele doorlooptijden en onverwachte verstoringen
                (bijvoorbeeld machine-uitval). Traditionele planningsmethoden
                zijn vaak gebaseerd op vaste regels en statische schema’s,
                waardoor zij onvoldoende in staat zijn om flexibel in te spelen
                op veranderingen.
              </p>
              <p>
                Binnen deze context wordt reinforcement learning (RL)
                geintroduceerd als een geavanceerde AI-techniek voor
                productieplanning. Reinforcement learning is een vorm van
                kunstmatige intelligentie waarbij een systeem leert door
                ervaring: het neemt beslissingen, ontvangt feedback over de
                uitkomst en past zijn strategie continu aan om betere resultaten
                te behalen.
              </p>
              <p>
                In plaats van een statische planning te gebruiken, ontwikkelt AI
                een zelflerend systeem dat continu optimale beslissingen maakt
                op basis van actuele data. Hierdoor kan het systeem automatisch
                bepalen welke orders prioriteit krijgen, hoe machines worden
                ingezet en hoe verstoringen het beste kunnen worden opgevangen.
              </p>
              <p>
                Bij SmartBikes kan dit bijvoorbeeld worden toegepast door een
                AI-systeem te gebruiken dat realtime bepaalt welke fietsen
                geproduceerd moeten worden, rekening houdend met
                orderprioriteit, beschikbare capaciteit en verstoringen in het
                productieproces.
              </p>
            </div>

            <div className="relative h-100 w-auto flex-1"></div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">
                Waarom AI productie planning?
              </h3>
              <p>
                Het toepassen van AI binnen de planningsafdeling helpt bedrijven
                om beter om te gaan met de dynamiek en onzekerheid van moderne
                productieprocessen. In traditionele situaties is planning vaak
                een handmatig en star proces, waardoor bedrijven moeite hebben
                om snel te reageren op veranderingen zoals spoedorders,
                vertragingen of machine-uitval.
              </p>
              <p>
                AI maakt het mogelijk om productieplanning continu aan te passen
                op basis van real-time informatie. Hierdoor worden beslissingen
                niet langer alleen gebaseerd op ervaring of vaste regels, maar
                op data en leerervaringen van het systeem zelf.
              </p>
              <p>
                Daarnaast zorgt AI ervoor dat planningen efficiënter worden
                ingericht. Wachttijden worden verminderd, machines worden beter
                benut en bottlenecks worden sneller herkend. Dit leidt tot
                kortere doorlooptijden en een betrouwbaarder productieproces.
              </p>
              <p>
                Voor SmartBikes betekent dit dat de planning automatisch wordt
                aangepast wanneer er veranderingen optreden. Hierdoor kan het
                bedrijf flexibeler produceren, leverbetrouwbaarheid verhogen en
                kosten verlagen. Dit resulteert in een efficiënter en stabieler
                productieproces.
              </p>
            </div>

            <div className="relative h-100 w-auto flex-1"></div>
          </section>

          <section className="flex items-start flex-col pb-4">
            <h3 className="font-semibold text-lg">
              Hoe gebruik je AI Productie Planning?
            </h3>
            <StepCarousel data={planningSteps} />
          </section>

          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>

            <Link
              className="text-blue-500 hover:underline"
              href="https://doi.org/10.1007/s10845-025-02585-6"
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
