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

export default function Kwaliteit() {
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

  const visionAIData = [
    {
      titel: "Stap 1: Bepaal kritische kwaliteitsmomenten",
      beschrijving: "Identificeer waar fouten het meest voorkomen, zoals:",
      punten: [
        "Montage van remmen",
        "Uitlijning van wielen",
        "Bevestiging van onderdelen",
      ],
    },
    {
      titel: "Stap 2: Verzamel data via technologie",
      beschrijving:
        "Installeer sensoren en camera’s op deze punten om data te verzamelen over:",
      punten: ["Productafmetingen", "Montagekwaliteit", "Procesparameters"],
    },
    {
      titel: "Stap 3: Analyse met AI",
      beschrijving: "Gebruik AI-software om deze data te analyseren en:",
      punten: [
        "Afwijkingen automatisch te detecteren",
        "Patronen te herkennen",
        "Risico’s te voorspellen",
      ],
    },
    {
      titel: "Stap 4: Integreer in het proces",
      beschrijving: "Koppel het AI-systeem aan de productielijn zodat:",
      punten: [
        "Fouten direct worden gesignaleerd",
        "Processen automatisch kunnen worden bijgestuurd",
        "Operatoren realtime inzicht krijgen",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Gebruik de verzamelde data voor:",
      punten: [
        "Structurele procesoptimalisatie",
        "Verhogen van kwaliteitsstandaarden",
        "Leren van eerdere afwijkingen",
      ],
    },
  ];

  const StepCarousel = ({ data }: { data: typeof visionAIData }) => (
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
          src="/Banner kwaliteit.png"
          alt="banner kwaliteit"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            Kwaliteit
          </h1>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            <a
              href="#vision-ai"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              1. Vision AI
            </a>
          </div>
        </div>
      </header>

      <main className="m-16 flex flex-col gap-4">
        <div className="flex flex-col gap-4 pb-4">
          <h2 id="vision-ai" className="text-2xl font-bold pb-4">
            1. Vision AI: visuele kwaliteitscontrole door AI-gestuurde
            beeldanalyse
          </h2>

          <section className="flex flex-row items-start pb-8">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Wat is Vision AI?</h3>
              <p>
                Binnen de kwaliteitsafdeling kan kunstmatige intelligentie (AI)
                worden ingezet als een datagedreven controlesysteem dat
                productieprocessen continu monitort en analyseert. AI maakt
                hierbij gebruik van technologieën zoals sensoren en camera’s
                (vision-AI) om realtime data te verzamelen over producten en
                processen. Deze data wordt vervolgens automatisch geanalyseerd
                om afwijkingen, patronen en risico’s te herkennen. Bij
                SmartBikes kan AI bijvoorbeeld worden gebruikt om:{" "}
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  Via camera’s te controleren of onderdelen zoals frames of
                  wielen correct gemonteerd zijn
                </li>
                <li>
                  Via sensoren te meten of bouten met de juiste kracht worden
                  vastgezet
                </li>
                <li>
                  Afwijkingen in productkwaliteit direct te detecteren tijdens
                  de assemblage{" "}
                </li>
              </ul>{" "}
              <p>
                Hierdoor ontstaat een systeem dat niet alleen controleert, maar
                ook leert van eerdere fouten en processen continu
                verbetert.{" "}
              </p>
              <p>
                In de afbeelding rechts is te zien dat de AI bepaalde producten
                analyseert met kleuren.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Groen betekent goed.</li>
                <li>Oranje betekent menselijk laten checken</li>
                <li>Rood betekent fout.</li>
              </ul>
            </div>

            <div className="flex-1 relative h-100 w-full">
              <Image
                src="/Vision AI 3.png"
                alt="Vision AI"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Waarom Vision AI?</h3>
              <p>
                Het toepassen van Vision-AI binnen kwaliteit biedt
                productiebedrijven meerdere voordelen. Allereerst maakt AI het
                mogelijk om kwaliteitsproblemen vroegtijdig te signaleren,
                waardoor fouten niet pas aan het einde van het proces worden
                ontdekt, maar direct tijdens de productie. Dit voorkomt afkeur,
                herstelwerk en extra kosten. Voor het fietsenbedrijf betekent
                dit bijvoorbeeld:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Minder defecte fietsen aan het einde van de lijn</li>
                <li>Minder retouren van klanten</li>
                <li>Constantere productkwaliteit</li>
              </ul>{" "}
              <p>
                Daarnaast zorgt AI voor een verschuiving van reactieve naar
                proactieve kwaliteitscontrole. In plaats van problemen achteraf
                op te lossen, kunnen bedrijven risico’s voorspellen en
                voorkomen. Dit verhoogt de betrouwbaarheid van processen en
                draagt bij aan een hogere klanttevredenheid. Tot slot maakt AI
                het mogelijk om grote hoeveelheden data te analyseren, waardoor
                bedrijven beter inzicht krijgen in waar en waarom fouten
                ontstaan. Dit ondersteunt continue verbetering en
                procesoptimalisatie.{" "}
              </p>
            </div>

            <div className="relative flex-1 h-90 w-auto">
              <Image
                src="/Vision AI afbeelding 2.png"
                alt="vision ai 2"
                fill
                className="object-contain"
              />{" "}
            </div>
          </section>

          <section className="flex items-start flex-col pb-4">
            <h3 className="font-semibold pb-4 text-lg">
              Hoe gebruik je Vision AI?
            </h3>

            <p className="max-w-1/2 pb-4">
              De implementatie van Vison-AI binnen de kwaliteitsafdeling
              verloopt stapsgewijs en begint met het identificeren van kritische
              controlepunten in het productieproces. Voor het fietsenbedrijf kan
              dit als volgt worden aangepakt:
            </p>

            <StepCarousel data={visionAIData} />
          </section>

          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>

            <Link
              className="text-blue-500 hover:underline"
              href="https://doi.org/10.1016/j.tifs.2025.105050"
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
