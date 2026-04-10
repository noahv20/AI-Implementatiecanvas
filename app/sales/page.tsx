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

  const productAssistantSteps = [
    {
      titel: "Stap 1: Implementeer een MVP",
      beschrijving:
        "Start met een basisversie waarmee gebruikers toegang krijgen tot:",
      punten: [
        "Relevante productdata",
        "Technische documentatie",
        "Richtlijnen en productspecificaties",
      ],
    },
    {
      titel: "Stap 2: Integreer met PIM- en ERP-systemen",
      beschrijving: "Koppel het systeem aan bestaande databronnen voor:",
      punten: [
        "Actuele productinformatie",
        "Betere datakwaliteit",
        "Minder incomplete data in bedrijfssystemen",
      ],
    },
    {
      titel: "Stap 3: Gebruik aanbevelingssystemen",
      beschrijving: "Zet AI in binnen de chatinterface om:",
      punten: [
        "Klantbehoeften beter te begrijpen",
        "Gepersonaliseerde productopties voor te stellen",
        "Ondersteuning te bieden tijdens het productselectieproces",
      ],
    },
    {
      titel: "Stap 4: Integreer met eCommerce-platforms",
      beschrijving: "Koppel de assistent aan verkoopkanalen zodat gebruikers:",
      punten: [
        "Producten direct kunnen aankopen",
        "Producten kunnen reserveren",
        "Realtime inventaris- en prijsdata kunnen gebruiken",
      ],
    },
    {
      titel: "Stap 5: Verbeter met geavanceerde NLP",
      beschrijving: "Breid de assistent uit zodat deze beter omgaat met:",
      punten: [
        "Complexe klantvragen",
        "Genuanceerde klantvoorkeuren",
        "Natuurlijke gesprekken in de chatinterface",
      ],
    },
  ];

  const nmtSteps = [
    {
      titel: "Stap 1: Analyseer verkoopprocessen en klantcontact",
      beschrijving: "Breng in kaart welke communicatie plaatsvindt, zoals:",
      punten: [
        "Productpagina’s en marketingcontent",
        "Offertes en verkoopdocumenten",
        "Klantvragen en contactmomenten",
      ],
    },
    {
      titel: "Stap 2: Verzamel en structureer content",
      beschrijving: "Zorg dat relevante informatie beschikbaar is, zoals:",
      punten: [
        "Productinformatie en specificaties",
        "Standaard offertes en templates",
        "Klantcommunicatie en verkoopmateriaal",
      ],
    },
    {
      titel: "Stap 3: Implementatie van AI (NMT)",
      beschrijving: "Gebruik NMT om deze content te vertalen en:",
      punten: [
        "Meertalige productpagina’s te creëren",
        "Offertes automatisch te vertalen",
        "Klantcommunicatie te ondersteunen",
        "Internationale verkoop mogelijk te maken",
      ],
    },
    {
      titel: "Stap 4: Integratie in salesprocessen",
      beschrijving: "Koppel het systeem aan sales- en CRM-systemen zodat:",
      punten: [
        "Vertalingen automatisch plaatsvinden",
        "Verkoopprocessen sneller verlopen",
        "Klantinformatie centraal wordt beheerd",
        "Medewerkers efficiënter kunnen werken",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Gebruik de inzichten om:",
      punten: [
        "Verkoopprocessen te optimaliseren",
        "Klantbeleving te verbeteren",
        "Conversie te verhogen",
        "Vertalingen nauwkeuriger te maken",
      ],
    },
  ];

  const StepCarousel = ({
    data,
  }: {
    data: typeof aiSalesSteps | typeof productAssistantSteps | typeof nmtSteps;
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
            <a
              href="#product-assistant"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              2. Product Assistant
            </a>
            <a
              href="#nmt-sales"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              3. NMT
            </a>
          </div>
        </div>
      </header>

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
            <h3 className="font-semibold text-center w-full pb-1 text-lg">
              Hoe gebruik je AI Sales?
            </h3>
            <p className="text-center w-full pb-2">Bekijk deze 5 stappen:</p>

            <StepCarousel data={aiSalesSteps} />
          </section>

          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link className="text-blue-500 hover:underline" href="#">
              Lees meer...
            </Link>
          </section>
        </div>

        <div className="flex flex-col gap-4 pb-4">
          <h2 id="product-assistant" className="text-2xl font-bold pb-4">
            2. AI-gestuurde Product Assistant
          </h2>

          <section className="flex flex-row items-start">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">Wat is de techniek?</h3>
              <p>
                De AI-gestuurde Product Assistant is een AI toepassing die met
                klanten communiceert om hun behoeften, voorkeuren en beperkingen
                te begrijpen. Het maakt gebruik van een LLM (Large Language
                Model; model dat vragen begrijpt en antwoorden genereert) en een
                RAG-interface (Retrieval-Augmented Generation; koppeling met
                documentatie en handleidingen) om gepersonaliseerde
                productopties voor te stellen.
              </p>
              <p>
                De techniek maakt het mogelijk om producten te configureren en
                aan te passen via de chatinterface. In de geavanceerde fase
                wordt dit een volledig functioneel systeem dat real-time
                inventaris- en prijsdata integreert vanuit de
                eCommerce-omgeving, het PIM (Product Information Management;
                systeem voor productdata) en het ERP (Enterprise Resource
                Planning; systeem voor bedrijfsdata) voor directe aankopen of
                reserveringen.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto"></div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">
                Waarom zouden bedrijven dit moeten toepassen?
              </h3>
              <p>
                Bedrijven moeten dit toepassen omdat het onderhouden van data
                van hoge kwaliteit in PIM of ERP uitdagend is en veel middelen
                vergt. Incomplete data leidt tot slechte besluitvorming,
                verminderde operationele efficiëntie en een negatieve impact op
                klanttevredenheid.
              </p>
              <p>
                De verwachte resultaten zijn een verhoging van de conversieratio
                (aantal verkopen) met 20% en een daling van het retourpercentage
                met 15%. Volgens de radargrafiek zorgt de inzet voor een sterke
                winstverhoging en kostenreductie, met een hoog gebruiksgemak
                voor de eindgebruiker.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto"></div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold text-center w-full pb-1 text-lg">
              Hoe implementeer je de Product Assistant?
            </h3>
            <p className="text-center w-full pb-2">Bekijk deze 5 stappen:</p>

            <StepCarousel data={productAssistantSteps} />
          </section>
        </div>

        <div className="flex flex-col gap-4 pb-4">
          <h2 id="nmt-sales" className="text-2xl font-bold pb-4">
            3. Neural Machine Translation (NMT)
          </h2>

          <section className="flex flex-row items-start">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">Wat is de techniek?</h3>
              <p>
                Neural Machine Translation (NMT) is een AI-techniek die wordt
                gebruikt om teksten en communicatie automatisch te vertalen naar
                verschillende talen. Binnen de salesafdeling wordt deze techniek
                ingezet om klantgerichte communicatie en commerciële content
                toegankelijk te maken voor internationale markten.
              </p>
              <p>
                In een verkoopcontext speelt communicatie een centrale rol,
                bijvoorbeeld bij productinformatie, offertes en klantcontact.
                NMT maakt het mogelijk om deze informatie automatisch te
                vertalen, waardoor bedrijven hun producten en diensten in
                meerdere talen kunnen aanbieden zonder extra handmatig werk.
              </p>
              <p>
                Bij SmartBikes kan deze techniek bijvoorbeeld worden toegepast
                bij het vertalen van productpagina’s, offertes en
                klantcommunicatie. Hierdoor kan een klant uit Frankrijk of
                Duitsland dezelfde informatie ontvangen in zijn eigen taal, wat
                de kans op een aankoop vergroot.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto"></div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">
                Waarom zouden bedrijven dit moeten toepassen?
              </h3>
              <p>
                Het toepassen van NMT binnen sales maakt het mogelijk om nieuwe
                markten te bereiken en de klantbeleving te verbeteren.
                Taalbarrières vormen vaak een drempel voor internationale
                verkoop, omdat klanten eerder geneigd zijn te kopen wanneer
                informatie beschikbaar is in hun eigen taal.
              </p>
              <p>
                Met AI-gedreven vertaling kunnen bedrijven snel en efficiënt
                meertalige content aanbieden. Dit zorgt voor een professionelere
                uitstraling en verhoogt het vertrouwen van klanten.
              </p>
              <p>Voor SmartBikes betekent dit bijvoorbeeld dat:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>productinformatie beschikbaar is in meerdere talen</li>
                <li>internationale klanten beter worden bereikt</li>
                <li>de kans op conversie (verkoop) toeneemt</li>
              </ul>
              <p>
                Daarnaast maakt deze techniek het mogelijk om sneller te
                reageren op klantvragen en offertes op te stellen, wat een
                positief effect heeft op het verkoopproces.
              </p>
              <p>
                Wel is het belangrijk om rekening te houden met beperkingen van
                AI, zoals het minder goed vertalen van commerciële nuances of
                tone-of-voice. Daarom blijft controle bij belangrijke
                klantcommunicatie noodzakelijk.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto"></div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold text-center w-full pb-1 text-lg">
              Hoe implementeer je NMT binnen Sales?
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
