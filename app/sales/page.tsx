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

export default function SalesPage() {
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

  const aiSalesSteps = [
    {
      titel: "Stap 1: Breng het verkoopproces in kaart",
      beschrijving: "Identificeer waar knelpunten ontstaan, zoals:",
      punten: [
        "Onnauwkeurige prijsstelling",
        "Lage marges op offertes",
        "Slechte vraagvoorspellingen",
        "Trage doorlooptijd van offertes",
      ],
    },
    {
      titel: "Stap 2: Verzamel data via technologie",
      beschrijving: "Verzamel relevante data voor AI-modellen:",
      punten: [
        "Historische verkoopcijfers",
        "Kostprijsdata (materiaal, arbeid, overhead)",
        "Klantgedrag en vraagpatronen",
        "Markt- en concurrentieprijzen",
      ],
    },
    {
      titel: "Stap 3: Analyse en voorspelling met AI",
      beschrijving: "Gebruik AI om beslissingen te optimaliseren:",
      punten: [
        "Vraag voorspellen met tijdreeksmodellen",
        "Optimale prijzen bepalen via regressie",
        "Klantsegmenten analyseren met clustering",
        "Verborgen patronen in winstgevendheid herkennen",
      ],
    },
    {
      titel: "Stap 4: Integreer in CRM-systemen",
      beschrijving: "Koppel AI aan bestaande verkoopsoftware voor:",
      punten: [
        "Realtime prijsadvies voor verkopers",
        "Automatisch genereren van offertes",
        "Dashboards met inzicht in marges en prestaties",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Optimaliseer de strategie op basis van AI-output:",
      punten: [
        "Conversie van offertes verhogen",
        "Marges structureel optimaliseren",
        "Verkoop beter afstemmen op productie en inkoop",
      ],
    },
  ];

  const StepCarousel = ({ data }: { data: typeof aiSalesSteps }) => (
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
          src="/Banner sales.png"
          alt="banner sales"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            Sales
          </h1>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            <a
              href="#ai-sales"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              1. AI Sales
            </a>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="m-16 flex flex-col gap-4">
        <div className="flex flex-col gap-4 pb-4">
          <h2 id="ai-sales" className="text-2xl font-bold pb-4">
            1. AI Sales
          </h2>

          <section className="flex flex-row items-start">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">Wat is AI Sales?</h3>
              <p>
                Moderne verkoopprocessen kampen met dynamische
                marktomstandigheden zoals wisselende klantvraag en hevige
                concurrentie. Waar traditionele methoden leunen op
                onderbuikgevoel of oude verkoopcijfers, introduceert AI een
                datagedreven aanpak. Machine Learning wordt ingezet om trends
                nauwkeurig te voorspellen, wat direct invloed heeft op
                prijsstelling, offertes en margemanagement.
              </p>
              <br />
              <p>
                In plaats van vaste prijzen hanteert AI een systeem dat continu
                leert. Voor SmartBikes betekent dit dat het systeem automatisch
                de beste verkoopprijs voor fietsen bepaalt door
                kostprijsvoorspellingen te combineren met actuele marktvraag en
                acties van concurrenten.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/sales-1.png"
                alt="AI Sales Concept"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">Waarom AI Sales?</h3>
              <p>
                Het toepassen van AI binnen Sales helpt bedrijven om
                winstgevender te opereren in een competitieve markt. Door kosten
                voor materiaal, arbeid en overhead nauwkeuriger te voorspellen,
                kan AI de ideale verkoopprijs berekenen die zowel de klant
                aanspreekt als de marge beschermt. Dit voorkomt 'underpricing'
                (omzetverlies) en 'overpricing' (verlies van deals).
              </p>
              <p className="mt-4 font-medium">
                Voor SmartBikes betekent dit dat:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Prijzen altijd marktconform en actueel zijn</li>
                <li>Marges realtime worden geoptimaliseerd</li>
                <li>
                  Offertes sneller en met hogere nauwkeurigheid worden opgesteld
                </li>
                <li>De concurrentiepositie structureel verbetert</li>
              </ul>
            </div>

            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/sales-profit.png"
                alt="AI Sales Voordelen"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold pb-4 text-lg">
              Hoe gebruik je AI Sales?
            </h3>
            <StepCarousel data={aiSalesSteps} />
          </section>

          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link className="text-blue-500 hover:underline" href="#">
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
