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

export default function ProductionPage() {
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
  const stappen1 = [
    {
      titel: "Stap 1: Breng het productieproces en knelpunten in kaart",
      beschrijving:
        "Identificeer waar inefficiënties of verstoringen optreden, zoals:",
      punten: [
        "Wachttijden tussen werkstations",
        "Overbelasting van bepaalde machines (bottlenecks)",
        "Vertragingen in assemblage",
      ],
    },
    {
      titel: "Stap 2: Verzamel data via technologie",
      beschrijving:
        "Installeer sensoren en gebruik systemen om data te verzamelen over:",
      punten: [
        "Productietijden per werkstation",
        "Machineprestaties en stilstand",
        "Doorlooptijden van producten",
        "Output van de productielijn",
      ],
    },
    {
      titel: "Stap 3: Analyse met AI",
      beschrijving: "Gebruik AI-software om deze data te analyseren en:",
      punten: [
        "Bottlenecks in de productielijn te identificeren",
        "Productieprestaties te optimaliseren",
        "Storingen en onderhoud te voorspellen",
        "Productieplanning te verbeteren",
      ],
    },
    {
      titel: "Stap 4: Integreer in het productieproces",
      beschrijving: "Koppel het AI-systeem aan de productieomgeving zodat:",
      punten: [
        "Productieplanning automatisch wordt aangepast",
        "Machines efficiënter worden aangestuurd",
        "Storingen sneller worden herkend en opgelost",
        "Operators realtime inzicht krijgen in de productie",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Gebruik de verzamelde data en inzichten om:",
      punten: [
        "Productieprocessen structureel te optimaliseren",
        "Doorlooptijden te verkorten",
        "Stilstand te verminderen",
        "Efficiëntie en flexibiliteit te verhogen",
      ],
    },
  ];
  const stappen2 = [
    {
      titel: "Stap 1: Bepaal kritische onderhoudsmomenten",
      beschrijving:
        "Identificeer waar storingen het meeste impact hebben, zoals:",
      punten: [
        "Belangrijke machines in de productielijn",
        "Onderdelen die vaak kapot gaan",
        "Processen waar stilstand duur is",
      ],
    },
    {
      titel: "Stap 2: Verzamel data via sensoren",
      beschrijving:
        "Plaats sensoren op deze punten om data te verzamelen over:",
      punten: [
        "Temperatuur",
        "Trillingen",
        "Gebruik van machines",
        "Prestaties van onderdelen",
      ],
    },
    {
      titel: "Stap 3: Analyse met AI",
      beschrijving: "Gebruik software om de data te analyseren en:",
      punten: [
        "Afwijkingen te herkennen",
        "Patronen in storingen te ontdekken",
        "Te voorspellen wanneer onderhoud nodig is",
      ],
    },
    {
      titel: "Stap 4: Integreer in het onderhoudsproces",
      beschrijving: "Koppel het systeem aan de dagelijkse operatie zodat:",
      punten: [
        "Storingen vroeg worden gesignaleerd",
        "Onderhoud op tijd wordt ingepland",
        "Operators meldingen krijgen bij afwijkingen",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Gebruik de verzamelde data om:",
      punten: [
        "Onderhoudsplannen te verbeteren",
        "Oorzaken van storingen te achterhalen",
        "Processen structureel te optimaliseren",
      ],
    },
  ];

  // Data voor sectie 3
  const stappen3 = [
    {
      titel: "Stap 1: Data identificeren en verzamelen",
      beschrijving:
        "Verzamel relevante gegevens voor productkostberekening, zoals:",
      punten: [
        "Materiaalkosten (frames, wielen, etc.)",
        "Arbeidskosten per productielijn",
        "Indirecte kosten en overhead",
        "Integratie uit ERP- en MES-systemen",
      ],
    },
    {
      titel: "Stap 2: Selecteren en trainen van AI-modellen",
      beschrijving: "Gebruik AI om toekomstige productiekosten te voorspellen:",
      punten: [
        "Voorspellende algoritmen (regressie, random forests)",
        "Trainen op historische gegevens voor nauwkeurigheid",
      ],
    },
    {
      titel: "Stap 3: Integreren in bestaande systemen",
      beschrijving: "Koppel AI-modellen aan ERP zodat:",
      punten: [
        "Data realtime wordt bijgewerkt",
        "Kostprijsberekeningen automatisch geüpdatet worden",
      ],
    },
    {
      titel: "Stap 4: Dashboards en rapportages",
      beschrijving: "Visualiseer en ondersteun besluitvorming met:",
      punten: [
        "Voorspelde vs werkelijke kosten",
        "Informatie voor snelle beslissingen door planners",
      ],
    },
    {
      titel: "Stap 5: Continue evaluatie",
      beschrijving: "Monitor en verbeter AI-modellen continu zodat:",
      punten: [
        "Modellen aangepast worden aan nieuwe data",
        "Nauwkeurigheid van voorspellingen verbetert",
        "Productieplanning geoptimaliseerd wordt",
      ],
    },
  ];
  const StepCarousel = ({ data }: { data: typeof stappen1 }) => (
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
          src="/Banner prod.png"
          alt="banner productie"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            Productie
          </h1>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            <a
              href="#advanced-manufacturing"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              1. Advanced Manufacturing
            </a>
            <a
              href="#predictive-maintenance"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              2. Predictive Maintenance
            </a>
            <a
              href="#production-costing"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              3. Production Costing
            </a>
          </div>
        </div>
      </header>

      <main className="m-16 flex flex-col gap-4">
        <div className="flex flex-col gap-4 pb-4">
          <h2 id="advanced-manufacturing" className="text-2xl font-bold pb-4">
            1. Advanced manufacturing
          </h2>
          <section className="flex flex-row items-start pb-8">
            <div className="wrap-break-words flex-1 ">
              <h3 className="font-semibold text-lg">
                Wat is Advanced manufacturing?
              </h3>
              <p>
                Advanced manufacturing is een moderne vorm van productie waarin
                geavanceerde technologieën, automatisering en data-analyse
                centraal staan. Door het gebruik van sensoren, robots en
                digitale systemen worden productiesystemen steeds complexer,
                waardoor traditionele methoden vaak tekortschieten. In deze
                aanpak zijn fysieke processen en digitale informatie continu met
                elkaar verbonden om flexibiliteit, precisie en efficiëntie te
                verbeteren. Kunstmatige intelligentie speelt hierbij een
                belangrijke rol door productiegegevens te analyseren, processen
                in real time te monitoren, kwaliteit te bewaken en onderhoud te
                voorspellen, waardoor systemen zich kunnen aanpassen aan
                veranderingen en zelfs zelflerend worden. Bijvoorbeeld bij
                SmartBikes, waar sensoren data verzamelen over de assemblagelijn
                en AI deze analyseert om inzicht te krijgen in prestaties en
                verstoringen.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/Productie.png"
                alt="Advanced manufacturing"
                fill
                className="object-contain"
              />
            </div>
          </section>
          <section className="flex flex-row-reverse items-start pb-8">
            <div className="wrap-break-words flex-1 ">
              <h3 className="font-semibold text-lg">
                Waarom Advanced manufacturing?
              </h3>
              <p>
                Het toepassen van AI binnen de productieafdeling stelt bedrijven
                in staat om beter om te gaan met de toenemende complexiteit van
                moderne productieprocessen. Doordat productiesystemen bestaan
                uit veel onderling verbonden machines en processen, is het voor
                bedrijven lastig om zonder ondersteuning volledig inzicht te
                krijgen in wat er op de werkvloer gebeurt. AI biedt hier een
                oplossing door grote hoeveelheden data te analyseren en
                verborgen patronen zichtbaar te maken. Hierdoor kunnen bedrijven
                productieprocessen niet alleen monitoren, maar ook actief
                verbeteren. AI maakt het mogelijk om knelpunten in de
                productielijn te identificeren, zoals wachttijden of inefficiënt
                gebruik van machines, en om deze gericht aan te pakken.
                Daarnaast kunnen bedrijven met behulp van AI voorspellen wanneer
                storingen of vertragingen zullen optreden, waardoor zij
                proactief kunnen ingrijpen in plaats van reactief. Voor
                SmartBikes betekent dit bijvoorbeeld dat de assemblagelijn
                efficiënter kan worden ingericht, dat stilstand van machines
                wordt verminderd en dat beter kan worden ingespeeld op
                veranderingen in de vraag. Hierdoor wordt het productieproces
                betrouwbaarder en neemt de algehele efficiëntie toe.
              </p>
            </div>
            <div className="flex-1 relative h-80 w-auto">
              <Image
                src="/Productie 2.png"
                alt="Advanced manufacturing"
                fill
                className="object-contain"
              />
            </div>
          </section>
          <section className="flex items-start flex-col">
            <h3 className="font-semibold pb-4 text-lg">
              Hoe gebruik je Advanced manufacturing?
            </h3>
            <StepCarousel data={stappen1} />
          </section>
          <section className="flex flex-row gap-4 items-center">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link
              href="https://asmedigitalcollection.asme.org/manufacturingscience/article/142/11/110804/1085487/Artificial-Intelligence-in-Advanced-Manufacturing?guestAccessKey="
              className="text-blue-500 hover:underline"
            >
              Lees meer...
            </Link>
          </section>
        </div>
        <div className="flex flex-col gap-4 pb-4">
          <h2 id="predictive-maintenance" className="text-2xl font-bold pb-4">
            2. AI predictive maintenance met IoT sensoren
          </h2>
          <section className="flex flex-row items-start pb-4">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">
                Wat is AI predictive maintenance?
              </h3>
              <p>
                Binnen de onderhoudsafdeling kan kunstmatige intelligentie (AI)
                worden ingezet als een slim onderhoudssysteem dat storingen
                voorspelt voordat ze optreden. Dit wordt ook wel predictive
                maintenance genoemd.{" "}
              </p>
              <p>De techniek maakt gebruik van: </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  sensoren (IoT) die continu data verzamelen van machines{" "}
                </li>
                <li>software die deze data analyseert</li>
                <li>
                  AI-modellen die patronen herkennen en voorspellingen doen
                </li>
              </ul>
              <p>Bij een productiebedrijf kan dit systeem bijvoorbeeld:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  meten of een machine afwijkend gedrag vertoont (zoals
                  temperatuur of trillingen)
                </li>
                <li>herkennen wanneer een onderdeel begint te slijten </li>
                <li>voorspellen wanneer onderhoud nodig is </li>
              </ul>
              <p>Daarnaast kan het systeem:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li> fouten van operators signaleren </li>
                <li> alarmen omzetten in duidelijke storingen </li>
              </ul>
              <p>
                Hierdoor ontstaat een systeem dat niet alleen controleert, maar
                ook vooruitkijkt en problemen voorkomt.{" "}
              </p>
            </div>
            <div className="relative h-100 w-auto flex-1">
              <Image
                src="/Production 2.1.png"
                alt="iets"
                fill
                className="object-contain"
              />
            </div>
          </section>
          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">
                Waarom AI predictive maintenance?
              </h3>
              <p>
                Het toepassen van deze technologie binnen onderhoud biedt
                duidelijke voordelen voor productiebedrijven.
              </p>
              <p>
                Allereerst zorgt het voor minder onverwachte storingen. In
                plaats van dat een machine ineens uitvalt, wordt een probleem
                vroegtijdig herkend en kan er op tijd worden ingegrepen.
              </p>
              <p>Voor een productiebedrijf betekent dit:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>minder stilstand van machines</li>
                <li>minder verstoringen in de planning</li>
                <li>hogere leverbetrouwbaarheid</li>
              </ul>
              <p>Daarnaast leidt het tot lagere kosten:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>minder dure spoedreparaties</li>
                <li>minder verspilling van onderdelen</li>
                <li>efficiënter onderhoud</li>
              </ul>
              <p>
                Ook zorgt het voor een langere levensduur van machines, omdat
                slijtage op tijd wordt aangepakt.
              </p>
              <p>
                Verder helpt het systeem bedrijven om datagedreven te werken:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>inzicht in waar storingen ontstaan</li>
                <li>betere onderhoudsplanning</li>
                <li>continue verbetering van processen</li>
              </ul>
              <p>Tot slot draagt het bij aan:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>betere productkwaliteit</li>
                <li>minder fouten in productie</li>
                <li>hogere klanttevredenheid</li>
              </ul>
            </div>
            <div className="relative h-100 w-auto flex-1">
              <Image
                src="/Production 2.2.png"
                alt="Production 2.2"
                fill
                className="object-contain"
              />
            </div>
          </section>
          <section className="flex flex-col items-start">
            <h3 className="font-semibold pb-4 text-lg">
              Hoe gebruik je AI predictive maintenance?
            </h3>
            <StepCarousel data={stappen2} />
          </section>
          <section className="flex flex-row gap-4 items-center">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link
              className="text-blue-500 hover:underline"
              href="https://doi.org/10.1038/s41598-023-38887-z"
            >
              Lees meer...
            </Link>
          </section>
        </div>
        <div className="flex flex-col gap-4 pb-4">
          <h2 id="production-costing" className="text-2xl font-bold">
            3. Productie costing
          </h2>
          <section className="flex flex-row items-start pb-4">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">
                Wat is productie costing AI?
              </h3>
              <p>
                Voorspellende productkost AI gebruikt kunstmatige intelligentie
                en machine learning om dynamisch en nauwkeurig productiekosten
                te voorspellen. In plaats van vaste aannames en historische
                gemiddelden te gebruiken, analyseert het systeem realtime data
                zoals materiaalprijzen, arbeidskosten en machineuren. Het leert
                continu bij en past kostprijsramingen aan naarmate er nieuwe
                gegevens beschikbaar komen.{" "}
              </p>
              <p>
                Bij SmartBikes kan deze techniek worden toegepast om
                bijvoorbeeld de kosten van stadsfietsen, elektrische fietsen en
                racefietsen nauwkeuriger te berekenen, rekening houdend met
                fluctuaties in materiaalprijzen, arbeid en
                productiecapaciteit.{" "}
              </p>
            </div>
            <div className="relative h-100 w-auto flex-1">
              <Image
                src="/Productie 3.1.png"
                alt="Productie 3.1  "
                fill
                className="object-contain"
              />
            </div>
          </section>
          <section className="flex  items-start pb-4">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">
                Waarom productie costing AI?
              </h3>
              <p>
                Bedrijven profiteren van voorspellende productkost AI doordat
                het systeem realtime kostprijsberekeningen mogelijk maakt.
                Veranderingen in grondstofprijzen of arbeidskosten worden direct
                meegenomen in de voorspellingen, waardoor verkoopprijzen
                nauwkeuriger en competitiever kunnen worden vastgesteld. Dit
                verhoogt de winstaccuracy en ondersteunt strategische
                besluitvorming: management krijgt beter inzicht in de kosten per
                product en kan bepalen welke modellen het meest winstgevend zijn
                en waar optimalisatie mogelijk is. Bovendien maakt de toepassing
                het productieproces efficiënter en flexibeler; SmartBikes kan
                sneller reageren op marktveranderingen en resources optimaal
                inzetten. Voor SmartBikes betekent dit dat kosten en
                verkoopprijzen continu geoptimaliseerd kunnen worden, waardoor
                het bedrijf efficiënter en winstgevender produceert.{" "}
              </p>
            </div>
          </section>
          <section className="flex items-start flex-col pb-4">
            <h3 className="font-semibold text-lg">
              Hoe gebruik je productie costing AI?
            </h3>

            <p className="max-w-1/2 pb-4">
              Voorspellende productkost AI implementeren verloopt stapsgewijs en
              kan voor een productiebedrijf als SmartBikes als volgt worden
              aangepakt:
            </p>

            <StepCarousel data={stappen3} />
          </section>
          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link
              className="text-blue-500 hover:underline"
              href="https://www.researchgate.net/profile/Abhishek-Sanakal-2/publication/392628138_Leveraging_AI_for_Predictive_Product_Costing_in_Manufacturing/links/684b7879d0be921dfef78d40/Leveraging-AI-for-Predictive-Product-Costing-in-Manufacturing.pdf"
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
