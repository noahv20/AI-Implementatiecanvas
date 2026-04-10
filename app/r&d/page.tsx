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

export default function NPDPage() {
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

  const generativeDesignSteps = [
    {
      titel: "Stap 1: Breng het NPD-proces in kaart",
      beschrijving:
        "Identificeer de belangrijkste fases binnen productontwikkeling, zoals:",
      punten: [
        "Idee- en conceptontwikkeling",
        "Ontwerp van producten (bijv. frame en componenten)",
        "Simulatie en testing",
        "Validatie en optimalisatie",
      ],
    },
    {
      titel: "Stap 2: Verzamel en structureer ontwikkeldata",
      beschrijving:
        "Zorg dat relevante data beschikbaar en bruikbaar is, zoals:",
      punten: [
        "CAD-modellen en ontwerpdata",
        "Test- en simulatiegegevens",
        "Historische productinformatie",
        "Klantfeedback en gebruiksdata",
      ],
    },
    {
      titel: "Stap 3: Analyse en ontwerp met Generative Design",
      beschrijving: "Gebruik Generative Design om deze data te analyseren en:",
      punten: [
        "Nieuwe ontwerpvarianten te genereren",
        "Ontwerpen te optimaliseren op prestaties en kosten",
        "Simulaties uit te voeren en resultaten te voorspellen",
        "Ontwerpkeuzes beter te onderbouwen",
      ],
    },
    {
      titel: "Stap 4: Integreer in ontwikkeltools en processen",
      beschrijving:
        "Koppel Generative Design aan bestaande engineeringtools zodat:",
      punten: [
        "Ontwerpen automatisch kunnen worden aangepast",
        "Simulaties sneller en vaker uitgevoerd worden",
        "Engineers realtime inzichten krijgen",
        "Data uit verschillende ontwikkelfases met elkaar verbonden wordt",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Gebruik de inzichten om:",
      punten: [
        "Het ontwikkelproces te versnellen",
        "Innovatie te stimuleren",
        "Ontwerpprocessen te optimaliseren",
        "Kennis en data structureel te benutten",
      ],
    },
  ];

  const nmtSteps = [
    {
      titel: "Stap 1: Identificeer relevante kennisbronnen",
      beschrijving:
        "Breng in kaart welke informatie wordt gebruikt binnen R&D, zoals:",
      punten: [
        "Onderzoeksrapporten en wetenschappelijke artikelen",
        "Technische documentatie van leveranciers",
        "Internationale standaarden en richtlijnen",
      ],
    },
    {
      titel: "Stap 2: Verzamel en structureer data",
      beschrijving: "Zorg dat deze informatie centraal beschikbaar is, zoals:",
      punten: [
        "Digitale documentatie en databronnen",
        "Interne kennis en eerdere projecten",
        "Externe onderzoeks- en marktinformatie",
      ],
    },
    {
      titel: "Stap 3: Implementatie van AI (NMT)",
      beschrijving: "Gebruik NMT om deze informatie te vertalen en:",
      punten: [
        "Documentatie automatisch toegankelijk te maken",
        "Internationale kennis sneller te verwerken",
        "Samenwerking tussen teams te ondersteunen",
        "Informatie direct bruikbaar te maken binnen projecten",
      ],
    },
    {
      titel: "Stap 4: Integratie in R&D-processen",
      beschrijving: "Koppel het systeem aan ontwikkeltools en workflows zodat:",
      punten: [
        "Vertalingen direct beschikbaar zijn voor engineers",
        "Documentatie centraal wordt beheerd",
        "Kennisdeling binnen teams wordt verbeterd",
        "Besluitvorming wordt ondersteund door meer informatie",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Gebruik de inzichten om:",
      punten: [
        "Kennisprocessen te optimaliseren",
        "Innovatie te versnellen",
        "Samenwerking te verbeteren",
        "Vertalingen nauwkeuriger te maken",
      ],
    },
  ];

  const StepCarousel = ({
    data,
  }: {
    data: typeof generativeDesignSteps | typeof nmtSteps;
  }) => (
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
          src="/Banner rd.png"
          alt="banner new product development"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            Research & Development
          </h1>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            <a
              href="#generative-design"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              1. Generative Design
            </a>
            <a
              href="#nmt"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              2. Neural Machine Translation (NMT)
            </a>
          </div>
        </div>
      </header>

      <main className="m-16 flex flex-col gap-4">
        <div className="flex flex-col gap-4 pb-4">
          <h2 id="generative-design" className="text-2xl font-bold pb-4">
            1. Generative Design (AI-gedreven productontwikkeling)
          </h2>

          <section className="flex flex-row items-start pb-8">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">
                Wat is Generative Design?
              </h3>
              <p>
                Generative Design (AI-gedreven productontwikkeling) binnen New
                Product Development (NPD) is een techniek waarbij kunstmatige
                intelligentie wordt ingezet om het ontwikkelen van nieuwe
                producten te ondersteunen en te versnellen. In plaats van dat
                engineers volledig handmatig ontwerpen en testen, gebruikt AI
                data uit eerdere ontwerpen, simulaties en gebruiksinformatie om
                nieuwe productoplossingen te genereren en te optimaliseren.
              </p>
              <p>
                Binnen deze toepassing worden verschillende fasen van
                productontwikkeling met elkaar verbonden. Generative Design
                analyseert ontwerpdata (zoals CAD-modellen), simulatieresultaten
                en testdata en gebruikt deze om voorspellingen te doen over
                prestaties, kosten en haalbaarheid van nieuwe ontwerpen.
                Daarnaast kan de techniek automatisch meerdere ontwerpvarianten
                genereren en vergelijken, waardoor sneller de beste oplossing
                wordt gevonden.
              </p>
              <p>
                Bij SmartBikes kan deze techniek bijvoorbeeld worden toegepast
                bij het ontwikkelen van nieuwe fietsmodellen. Generative Design
                kan verschillende frame-ontwerpen genereren, rekening houdend
                met factoren zoals gewicht, sterkte en materiaalgebruik.
                Vervolgens kan het systeem simuleren hoe deze ontwerpen
                presteren, zodat engineers direct inzicht krijgen in welke
                variant het beste voldoet aan de eisen.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/npd-1.png"
                alt="Generative Design"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-8">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">
                Waarom zouden bedrijven dit moeten toepassen?
              </h3>
              <p>
                Het toepassen van Generative Design binnen NPD maakt het
                mogelijk om productontwikkeling sneller, efficiënter en
                innovatiever te maken. Traditionele ontwikkelprocessen bestaan
                vaak uit veel iteraties waarbij ontwerpen telkens opnieuw moeten
                worden getest en aangepast, wat veel tijd en kosten met zich
                meebrengt.
              </p>
              <p>
                Generative Design versnelt dit proces door automatisch
                ontwerpvarianten te genereren en te analyseren. Hierdoor kunnen
                bedrijven sneller tot een optimaal ontwerp komen en wordt de
                time-to-market verkort. Daarnaast helpt de techniek bij het
                maken van beter onderbouwde beslissingen doordat het grote
                hoeveelheden data kan verwerken en verbanden kan herkennen die
                voor mensen moeilijk zichtbaar zijn.
              </p>
              <p>Voor SmartBikes betekent dit bijvoorbeeld dat:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>nieuwe fietsmodellen sneller ontwikkeld kunnen worden</li>
                <li>
                  ontwerpen beter worden geoptimaliseerd op prestaties, gewicht
                  en kosten
                </li>
                <li>
                  minder fysieke prototypes nodig zijn door gebruik van
                  simulaties
                </li>
              </ul>
              <p>
                Daarnaast zorgt deze aanpak ervoor dat kennis uit eerdere
                ontwikkelprojecten wordt hergebruikt, waardoor het
                ontwikkelproces steeds slimmer en efficiënter wordt.
              </p>
            </div>

            <div className="relative flex-1 h-80 w-auto">
              <Image
                src="/npd-2.png"
                alt="Waarom Generative Design"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold text-center w-full pb-1 text-lg">
              Hoe implementeer je Generative Design?
            </h3>
            <p className="text-center w-full pb-2">Bekijk deze 5 stappen:</p>

            <StepCarousel data={generativeDesignSteps} />
          </section>

          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link
              className="text-blue-500 hover:underline"
              href="https://www.ptc.com/en/resources/cad/white-paper/ai-in-new-product-development"
            >
              Lees meer...
            </Link>
          </section>
        </div>

        <div className="flex flex-col gap-4 pb-4">
          <h2 id="nmt" className="text-2xl font-bold pb-4">
            2. Neural Machine Translation (NMT)
          </h2>

          <section className="flex flex-row items-start pb-8">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Wat is de techniek?</h3>
              <p>
                Neural Machine Translation (NMT) is een AI-techniek die wordt
                gebruikt om teksten en technische informatie automatisch te
                vertalen naar verschillende talen. Binnen Research & Development
                wordt deze techniek ingezet om kennis uit verschillende bronnen
                toegankelijk te maken en internationale samenwerking te
                ondersteunen.
              </p>
              <p>
                In het kader van New Product Development (NPD) speelt toegang
                tot informatie een belangrijke rol. Bedrijven maken gebruik van
                internationale onderzoeksrapporten, technische documentatie en
                samenwerking met buitenlandse partners. NMT maakt het mogelijk
                om deze informatie snel en efficiënt te vertalen, waardoor
                engineers en ontwikkelaars direct toegang hebben tot relevante
                kennis.
              </p>
              <p>
                Bij SmartBikes kan deze techniek bijvoorbeeld worden toegepast
                bij het analyseren van internationale innovaties op het gebied
                van fietsontwerp, materialen en technologieën. Denk aan het
                vertalen van technische specificaties, onderzoeksrapporten of
                documentatie van leveranciers, zodat deze direct gebruikt kunnen
                worden in het ontwikkelproces.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto"></div>
          </section>

          <section className="flex flex-row-reverse items-start pb-8">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">
                Waarom zouden bedrijven dit moeten toepassen?
              </h3>
              <p>
                Het toepassen van NMT binnen de R&amp;D-afdeling maakt het
                mogelijk om sneller toegang te krijgen tot internationale kennis
                en innovaties. Traditioneel kost het veel tijd om documenten
                handmatig te vertalen of om afhankelijk te zijn van medewerkers
                met specifieke taalvaardigheden.
              </p>
              <p>
                Met AI-gedreven vertaling kunnen bedrijven deze informatie
                direct gebruiken, waardoor het ontwikkelproces wordt versneld.
                Daarnaast maakt het internationale samenwerking eenvoudiger,
                omdat communicatie tussen teams in verschillende landen soepeler
                verloopt.
              </p>
              <p>Voor SmartBikes betekent dit bijvoorbeeld dat:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  nieuwe technologieën en innovaties sneller kunnen worden
                  toegepast
                </li>
                <li>
                  internationale samenwerking met leveranciers en partners wordt
                  verbeterd
                </li>
                <li>
                  ontwikkelteams efficiënter kunnen werken met buitenlandse
                  documentatie
                </li>
              </ul>
              <p>
                Daarnaast zorgt deze techniek ervoor dat kennis beter wordt
                benut, omdat informatie niet langer beperkt wordt door
                taalbarrières.
              </p>
              <p>
                Wel is het belangrijk om rekening te houden met beperkingen van
                AI, zoals het minder goed begrijpen van technische nuances of
                context. Daarom blijft controle door engineers belangrijk bij
                complexe of kritische informatie.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto"></div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold text-center w-full pb-1 text-lg">
              Hoe implementeer je NMT?
            </h3>
            <p className="text-center w-full pb-2">Bekijk deze 5 stappen:</p>

            <StepCarousel data={nmtSteps} />
          </section>
          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link
              href=" https://egarp.lt/index.php/aghel/article/view/105/108"
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
