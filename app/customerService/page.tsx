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
import { useState, useEffect } from "react";

export default function CustomerServicePage() {
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
    return () => window.removeEventListener("scroll", handleScroll);
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

  const chatbotSteps = [
    {
      titel: "Stap 1: Bepaal klantbehoeften",
      beschrijving: "Identificeer veelgestelde vragen (FAQ), zoals:",
      punten: [
        "Productinformatie (modellen, specs)",
        "Levertijden en beschikbaarheid",
        "Service- en onderhoudsaanvragen",
        "Status van bestellingen en retouren",
      ],
    },
    {
      titel: "Stap 2: Verzamel en structureer informatie",
      beschrijving: "Zorg dat de AI toegang heeft tot de juiste bronnen:",
      punten: [
        "Gedetailleerde productcatalogus",
        "Bestaande FAQ-lijsten",
        "Klantprocessen (garantie, handleidingen)",
        "Interne kennisbanken",
      ],
    },
    {
      titel: "Stap 3: Ontwikkel en train de chatbot",
      beschrijving: "Gebruik NLP (Natural Language Processing) om:",
      punten: [
        "Klantvragen in natuurlijke taal te begrijpen",
        "Verschillende formuleringen te herkennen",
        "Contextueel relevante antwoorden te geven",
        "De bot te laten leren van elke interactie",
      ],
    },
    {
      titel: "Stap 4: Integreer in de website",
      beschrijving: "Plaats de chatbot strategisch zodat:",
      punten: [
        "Klanten 24/7 direct antwoord krijgen",
        "Antwoorden realtime worden gegenereerd",
        "Complexe zaken vloeiend naar medewerkers gaan",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Analyseer gespreksdata voor optimalisatie:",
      punten: [
        "Antwoorden verfijnen op basis van feedback",
        "Nieuwe onderwerpen en vragen toevoegen",
        "Servicekwaliteit en klanttevredenheid meten",
      ],
    },
  ];

  const nmtSteps = [
    {
      titel: "Stap 1: Analyseer klantcommunicatie",
      beschrijving: "Breng in kaart welke communicatie plaatsvindt, zoals:",
      punten: [
        "Veelgestelde klantvragen",
        "Websitecontent en productinformatie",
        "Klantcontact via chat of e-mail",
      ],
    },
    {
      titel: "Stap 2: Verzamel en structureer content",
      beschrijving: "Zorg dat relevante informatie beschikbaar is, zoals:",
      punten: [
        "FAQ’s en standaardantwoorden",
        "Productbeschrijvingen",
        "Klantinteracties en eerdere gesprekken",
      ],
    },
    {
      titel: "Stap 3: Implementatie van AI (NMT + chatbot)",
      beschrijving: "Gebruik NMT in combinatie met een chatbot om:",
      punten: [
        "Klantvragen automatisch te vertalen",
        "Antwoorden in de juiste taal te genereren",
        "Meertalige communicatie mogelijk te maken",
        "Realtime interactie met klanten te ondersteunen",
      ],
    },
    {
      titel: "Stap 4: Integratie in de website en systemen",
      beschrijving:
        "Koppel het systeem aan de website en customer service tools zodat:",
      punten: [
        "Klanten direct via de website geholpen worden",
        "Vertalingen automatisch plaatsvinden",
        "Medewerkers ondersteuning krijgen bij klantvragen",
        "Alle communicatie centraal wordt opgeslagen",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Gebruik de data om:",
      punten: [
        "Antwoorden te verbeteren",
        "Klantbehoeftes beter te begrijpen",
        "Vertalingen nauwkeuriger te maken",
        "De klantenservice verder te optimaliseren",
      ],
    },
  ];

  const StepCarousel = ({
    data,
  }: {
    data: typeof chatbotSteps | typeof nmtSteps;
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
          src="/Banner customer service.png"
          alt="banner Customer Service"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            Customer Service
          </h1>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            <a
              href="#ai-chatbot"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400 cursor-pointer"
            >
              1. AI-Chatbot
            </a>
            <a
              href="#nmt"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400 cursor-pointer"
            >
              2. Neural Machine Translation
            </a>
          </div>
        </div>
      </header>

      <main className="m-16 flex flex-col gap-4">
        <div id="ai-chatbot" className="flex flex-col gap-4 pb-4">
          <h2 className="text-2xl font-bold pb-4">1. AI-Chatbot</h2>

          <section className="flex flex-row items-start">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Wat is de techniek?</h3>
              <p>
                Een AI-gestuurde chatbot is een intelligent systeem dat
                gebruikmaakt van Natuurlijke Taalverwerking (NLP) om
                klantinteracties te automatiseren. In plaats van te wachten op
                een beschikbare medewerker, kunnen klanten via de website direct
                communiceren met een systeem dat hun vragen begrijpt en
                beantwoordt.
              </p>
              <p className="mt-4">
                Voor SmartBikes betekent dit dat klanten direct informatie
                kunnen opvragen over specifieke fietsmodellen, actuele
                levertijden of onderhoudsadvies. De AI leert van elke
                interactie, waardoor de chatbot steeds nauwkeuriger wordt in het
                herkennen van klantbehoeften.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/chatbot-tech.png"
                alt="AI Chatbot Technologie"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">
                Waarom AI-Chatbots toepassen?
              </h3>
              <p>
                Traditionele klantenservice is gebonden aan openingstijden en
                personele capaciteit. Een AI-chatbot lost dit op door 24/7
                direct ondersteuning te bieden. Dit verhoogt niet alleen de
                klanttevredenheid door snelle responstijden, maar vermindert ook
                de druk op het service-team.
              </p>
              <p className="mt-4 font-medium">Voor SmartBikes leidt dit tot:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Minder telefoontjes en e-mails over standaardzaken</li>
                <li>
                  Hogere efficiëntie: medewerkers focussen op complexe cases
                </li>
                <li>Consistente antwoorden en 24/7 bereikbaarheid</li>
                <li>Schaalbaarheid bij piekdrukte</li>
              </ul>
            </div>
            <div className="flex-1 relative h-80 w-auto">
              <Image
                src="/chatbot-benefits.png"
                alt="Voordelen van AI Chatbots"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold text-center w-full pb-1 text-lg">
              Hoe gebruik je AI-Chatbot?
            </h3>
            <p className="text-center w-full pb-2">Bekijk deze 5 stappen:</p>

            <StepCarousel data={chatbotSteps} />
          </section>

          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link href="#" className="text-blue-500 hover:underline">
              {/*TODO: Link toevoegen */}
              Lees meer...
            </Link>
          </section>
        </div>

        <div id="nmt" className="flex flex-col gap-4 pb-4">
          <h2 className="text-2xl font-bold pb-4">
            2. Neural Machine Translation (NMT)
          </h2>

          <section className="flex flex-row items-start">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Wat is de techniek?</h3>
              <p>
                Neural Machine Translation (NMT) is een AI-techniek die wordt
                gebruikt om teksten en communicatie automatisch te vertalen naar
                verschillende talen. Deze techniek maakt gebruik van neurale
                netwerken die volledige zinnen analyseren en vertalen, waarbij
                rekening wordt gehouden met context in plaats van losse woorden.
              </p>
              <p>
                Binnen de customer service wordt NMT toegepast om communicatie
                met klanten in verschillende talen mogelijk te maken. In
                combinatie met een AI-chatbot kan deze technologie realtime
                vragen van klanten vertalen en beantwoorden, waardoor bedrijven
                internationale klanten direct kunnen helpen.
              </p>
              <p>
                Bij SmartBikes kan deze techniek bijvoorbeeld worden ingezet op
                de website, waar een chatbot automatisch vragen van klanten
                vertaalt en beantwoordt. Een klant uit Duitsland kan
                bijvoorbeeld een vraag stellen in het Duits, waarna het systeem
                deze vertaalt, verwerkt en een passend antwoord teruggeeft in
                dezelfde taal.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto"></div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">
                Waarom zouden bedrijven dit moeten toepassen?
              </h3>
              <p>
                Het toepassen van NMT binnen de customer service maakt het
                mogelijk om klanten wereldwijd snel en efficiënt te
                ondersteunen. Traditioneel zijn bedrijven afhankelijk van
                medewerkers die meerdere talen spreken, wat tijdrovend en
                kostbaar is.
              </p>
              <p>
                Met AI-gedreven vertaling kunnen bedrijven klanten direct helpen
                in hun eigen taal, zonder vertraging. Dit verhoogt de
                klanttevredenheid en maakt het mogelijk om internationale
                markten beter te bedienen.
              </p>
              <p>Voor SmartBikes betekent dit bijvoorbeeld dat:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>klanten wereldwijd direct geholpen kunnen worden</li>
                <li>taalbarrières worden weggenomen</li>
                <li>responstijden van de klantenservice worden verkort</li>
              </ul>
              <p>
                Daarnaast zorgt deze techniek ervoor dat de communicatie
                consistenter verloopt, doordat antwoorden automatisch worden
                gegenereerd en vertaald.
              </p>
              <p>
                Wel is het belangrijk om rekening te houden met beperkingen van
                AI, zoals het minder goed begrijpen van culturele nuances of
                complexe zinnen. Daarom blijft menselijke controle bij complexe
                klantvragen belangrijk.
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
