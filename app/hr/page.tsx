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

export default function HRPage() {
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

  const hrSteps = [
    {
      titel: "Stap 1: Breng risico’s en gedrag in kaart",
      beschrijving: "Identificeer waar verbeterpunten liggen, zoals:",
      punten: [
        "Niet dragen van PBM (helmen, brillen)",
        "Onveilig gedrag op de werkvloer",
        "Signalen van stress of vermoeidheid",
      ],
    },
    {
      titel: "Stap 2: Verzamel data via technologie",
      beschrijving: "Installeer systemen om gedrag te meten via:",
      punten: [
        "Camera’s voor PBM-detectie",
        "Sensoren voor werkomstandigheden",
        "Analyse van lichaamstaal",
        "HR-verzuimdata en feedback",
      ],
    },
    {
      titel: "Stap 3: Analyse met AI",
      beschrijving: "Gebruik AI om data te vertalen naar:",
      punten: [
        "Naleving van veiligheidsregels",
        "Herkenning van gedragspatronen",
        "Signalering van stress of lage betrokkenheid",
        "Voorspelling van uitvalrisico",
      ],
    },
    {
      titel: "Stap 4: Integreer in HR-processen",
      beschrijving: "Koppel het AI-systeem aan de werkvloer voor:",
      punten: [
        "Realtime waarschuwingen bij onveiligheid",
        "Inzichtelijke HR-dashboards",
        "Datagedreven trainingen en interventies",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Gebruik inzichten om:",
      punten: [
        "Veiligheidsbeleid structureel te verbeteren",
        "Medewerkerstevredenheid te verhogen",
        "Verzuim en incidenten te verminderen",
      ],
    },
  ];

  const trainingSteps = [
    {
      titel: "Stap 1: Analyseer de huidige trainingsstructuur",
      beschrijving:
        "Breng in kaart hoe training nu verloopt en waar knelpunten liggen:",
      punten: [
        "Welke trainingen momenteel worden gegeven",
        "Waar medewerkers moeite mee hebben",
        "Verschillen in kennisniveau en prestaties tussen medewerkers",
      ],
    },
    {
      titel: "Stap 2: Verzamel en structureer leerdata",
      beschrijving: "Zorg dat relevante leer- en prestatiedata beschikbaar is:",
      punten: [
        "Prestaties van medewerkers",
        "Klantinteracties en feedback",
        "Trainingsresultaten",
        "Inzichten in leerbehoeften",
      ],
    },
    {
      titel: "Stap 3: Implementatie van AI-educatiesysteem",
      beschrijving:
        "Gebruik AI om het leerproces te personaliseren en te verbeteren:",
      punten: [
        "Gepersonaliseerde leerpaden creëren",
        "Trainingscontent automatisch aanpassen per medewerker",
        "Interactieve en adaptieve leercontent aanbieden",
      ],
    },
    {
      titel: "Stap 4: Integratie met klantenservicesystemen",
      beschrijving: "Koppel AI aan bestaande systemen zodat:",
      punten: [
        "AI verbonden is met CRM- en ticketsystemen",
        "Medewerkers realtime ondersteuning krijgen tijdens klantcontact",
        "Leren en werken met elkaar worden gecombineerd",
      ],
    },
    {
      titel: "Stap 5: Continue optimalisatie en evaluatie",
      beschrijving:
        "Gebruik inzichten en feedback om training steeds beter te maken:",
      punten: [
        "Prestaties van medewerkers monitoren",
        "Effectiviteit van trainingen evalueren",
        "Leerpaden continu verbeteren",
        "Trainingen afstemmen op nieuwe producten, diensten en klantbehoeften",
      ],
    },
  ];

  const nmtSteps = [
    {
      titel: "Stap 1: Analyseer HR-communicatie",
      beschrijving: "Breng in kaart welke communicatie plaatsvindt, zoals:",
      punten: [
        "Vacatureteksten en sollicitatieprocessen",
        "Arbeidsovereenkomsten en HR-documenten",
        "Interne communicatie en instructies",
      ],
    },
    {
      titel: "Stap 2: Verzamel en structureer content",
      beschrijving: "Zorg dat relevante informatie beschikbaar is, zoals:",
      punten: [
        "HR-beleid en procedures",
        "Trainingsmateriaal",
        "Standaarddocumenten en communicatie",
      ],
    },
    {
      titel: "Stap 3: Implementatie van AI (NMT)",
      beschrijving: "Gebruik NMT om deze content te vertalen en:",
      punten: [
        "Meertalige vacatures te creëren",
        "Documenten automatisch te vertalen",
        "Communicatie tussen HR en medewerkers te ondersteunen",
        "Trainingen toegankelijk te maken voor alle medewerkers",
      ],
    },
    {
      titel: "Stap 4: Integratie in HR-systemen",
      beschrijving: "Koppel het AI-systeem aan HR-tools zodat:",
      punten: [
        "Vertalingen automatisch plaatsvinden",
        "Documenten centraal worden beheerd",
        "HR-processen efficiënter verlopen",
        "Medewerkers eenvoudig toegang hebben tot informatie",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Gebruik de inzichten om:",
      punten: [
        "Communicatie te verbeteren",
        "Vertalingen nauwkeuriger te maken",
        "HR-processen te optimaliseren",
        "Medewerkerstevredenheid te verhogen",
      ],
    },
  ];

  const StepCarousel = ({
    data,
  }: {
    data: typeof hrSteps | typeof trainingSteps | typeof nmtSteps;
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
          src="/Banner hr.png"
          alt="banner human resources"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            Human Resources
          </h1>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            <a
              href="#vision-ai"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              1. Vision AI
            </a>
            <a
              href="#ai-training"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              2. AI-training
            </a>
            <a
              href="#nmt"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              3. Neural Machine Translation (NMT)
            </a>
          </div>
        </div>
      </header>

      <main className="m-16 flex flex-col gap-4">
        <div className="flex flex-col gap-4 pb-4">
          <h2 id="vision-ai" className="text-2xl font-bold pb-4">
            1. Vision AI: visuele medewerkers veiligheid door AI gestuurde
            beeldanalyse
          </h2>

          <section className="flex flex-row items-start pb-8">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Wat is Vision AI?</h3>
              <p>
                De techniek betreft het gebruik van kunstmatige intelligentie
                (AI) als HR-instrument voor het analyseren en verbeteren van
                gedrag, veiligheid en welzijn van medewerkers op de werkvloer.
                Deze toepassing combineert technologieën zoals camera’s
                (computer vision), sensoren en machine learning-algoritmes om
                continu data te verzamelen en te analyseren. AI maakt het
                mogelijk om automatisch te detecteren of medewerkers zich houden
                aan veiligheidsvoorschriften, zoals het dragen van persoonlijke
                beschermingsmiddelen (PBM), en of werkzaamheden correct worden
                uitgevoerd. Daarnaast kan de technologie gedragspatronen
                herkennen en, op basis van lichaamstaal en
                gezichtsuitdrukkingen, signalen van bijvoorbeeld stress,
                vermoeidheid of betrokkenheid identificeren. Binnen deze
                toepassing vervult AI drie kernfuncties. Ten eerste monitoring:
                het continu observeren en controleren van gedrag en naleving van
                regels. Ten tweede evaluatie: het analyseren van patronen en
                structurele afwijkingen. Ten derde actie: het genereren van
                real-time waarschuwingen of signalen bij onveilig of afwijkend
                gedrag. Hierdoor ontstaat een datagedreven en proactieve
                benadering van HR en werkvloerbeheer.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/HR 1.1.png"
                alt="HR 1.1"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Waarom Vision AI?</h3>
              <p>
                Het toepassen van AI binnen HR stelt organisaties in staat om
                veiligheid, gedrag en medewerkerstevredenheid op een objectieve
                en continue manier te monitoren en te verbeteren. Traditionele
                methoden, zoals handmatige controles en observaties, zijn vaak
                subjectief, momentopnames en reactief van aard. Hierdoor worden
                problemen vaak pas gesignaleerd nadat ze zich al hebben
                voorgedaan. AI maakt het mogelijk om deze processen te
                automatiseren en te objectiveren, waardoor afwijkingen direct
                worden gedetecteerd en organisaties sneller kunnen ingrijpen.
                Dit leidt tot een hogere mate van naleving van
                veiligheidsvoorschriften en een afname van risicovol gedrag op
                de werkvloer. Daarnaast biedt AI waardevolle inzichten in
                gedragspatronen en het welzijn van medewerkers. Door vroegtijdig
                signalen van stress, vermoeidheid of lage betrokkenheid te
                herkennen, kunnen bedrijven preventieve maatregelen nemen. Dit
                draagt bij aan het verminderen van ziekteverzuim en het
                verbeteren van de algehele werkcultuur. Voor organisaties
                resulteert dit in minder arbeidsongevallen, lagere
                verzuimkosten, een hogere productiviteit en een efficiëntere
                inzet van HR-interventies. Daarmee vormt AI een strategisch
                instrument voor het realiseren van zowel operationele
                verbeteringen als duurzame inzetbaarheid van medewerkers.
              </p>
            </div>

            <div className="flex-1 relative h-80 w-auto"></div>
          </section>

          <section className="flex items-start flex-col pb-4">
            <h3 className="font-semibold pb-1 text-center w-full text-lg">
              Hoe implementeer je Vision AI binnen HR?
            </h3>
            <p className="text-center w-full pb-2">Bekijk deze 5 stappen:</p>

            <StepCarousel data={hrSteps} />
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

        <div className="flex flex-col gap-4 pb-4">
          <h2 id="ai-training" className="text-2xl font-bold pb-4">
            2. AI-gestuurde bedrijfstraining en educatienavigator
          </h2>

          <section className="flex flex-row items-start pb-8">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Wat is de techniek?</h3>
              <p>
                Binnen de klantenservice wordt het opleiden en ontwikkelen van
                medewerkers steeds complexer. Medewerkers moeten niet alleen
                productkennis hebben, maar ook beschikken over communicatieve
                vaardigheden, probleemoplossend vermogen en kennis van systemen.
                Daarnaast veranderen producten, diensten en processen continu,
                waardoor kennis snel veroudert.
              </p>
              <p>
                Een AI-gestuurde bedrijfstraining en educatienavigator speelt
                hierop in door het leerproces van medewerkers te personaliseren
                en te optimaliseren. Deze technologie maakt gebruik van
                kunstmatige intelligentie om leerbehoeften te analyseren,
                trainingen aan te passen aan het niveau van de medewerker en
                relevante content aan te bieden op het juiste moment.
              </p>
              <p>
                In plaats van standaard trainingen voor alle medewerkers,
                creëert AI een gepersonaliseerd leerpad. Het systeem analyseert
                prestaties, kennisniveau en gedrag van medewerkers en past
                daarop de leerinhoud aan. Medewerkers krijgen bijvoorbeeld extra
                uitleg bij onderwerpen waar zij moeite mee hebben, terwijl zij
                minder tijd besteden aan onderwerpen die zij al beheersen.
              </p>
              <p>
                Daarnaast kan de educatienavigator medewerkers ondersteunen
                tijdens hun werk. Door integratie met systemen kan AI realtime
                suggesties geven, bijvoorbeeld bij klantvragen, waardoor leren
                en werken met elkaar worden gecombineerd. Dit wordt ook wel
                “learning in the flow of work” genoemd.
              </p>
              <p>
                Voor een organisatie betekent dit dat training niet langer een
                losstaand proces is, maar een continu en geïntegreerd onderdeel
                van de dagelijkse werkzaamheden.
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
                Binnen de klantenservice is de kwaliteit van medewerkers direct
                bepalend voor de klanttevredenheid. Traditionele
                trainingsmethoden zijn vaak statisch, tijdrovend en onvoldoende
                afgestemd op individuele behoeften. Dit leidt tot inefficiënt
                leren en een langere inwerktijd van medewerkers.
              </p>
              <p>
                Door AI in te zetten voor training en educatie ontstaat een meer
                dynamische en effectieve leeromgeving.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  Snellere onboarding: Nieuwe medewerkers bereiken sneller het
                  gewenste kennisniveau
                </li>
                <li>
                  Hogere servicekwaliteit: Medewerkers beschikken over actuele
                  en relevante kennis
                </li>
                <li>
                  Continue ontwikkeling: Training wordt een doorlopend proces in
                  plaats van eenmalig
                </li>
                <li>
                  Efficiëntie: Minder tijd en kosten voor klassikale trainingen
                </li>
                <li>
                  Betere prestaties: Medewerkers maken minder fouten en lossen
                  klantvragen sneller op
                </li>
              </ul>
              <p>
                Daarnaast zorgt deze technologie ervoor dat kennis beter wordt
                geborgd binnen de organisatie. In plaats van afhankelijk te zijn
                van individuele medewerkers, wordt kennis vastgelegd en
                toegankelijk gemaakt via het AI-systeem.
              </p>
              <p>
                Voor de klantenservice betekent dit een verschuiving van
                reactief werken naar een proactieve en datagedreven aanpak,
                waarbij medewerkers continu worden ondersteund en verbeterd.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto"></div>
          </section>

          <section className="flex items-start flex-col pb-4">
            <h3 className="font-semibold pb-1 text-center w-full text-lg">
              Hoe implementeer je AI-training en educatie?
            </h3>
            <p className="text-center w-full pb-2">Bekijk deze 5 stappen:</p>

            <StepCarousel data={trainingSteps} />
          </section>
        </div>

        <div className="flex flex-col gap-4 pb-4">
          <h2 id="nmt" className="text-2xl font-bold pb-4">
            3. Neural Machine Translation (NMT)
          </h2>

          <section className="flex flex-row items-start pb-8">
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
                Binnen de HR-afdeling wordt NMT toegepast om communicatie met
                medewerkers en sollicitanten in verschillende talen mogelijk te
                maken. Dit kan variëren van het vertalen van vacatureteksten en
                arbeidsovereenkomsten tot interne communicatie en
                trainingsmateriaal.
              </p>
              <p>
                Bij SmartBikes kan deze techniek bijvoorbeeld worden ingezet om
                vacatures automatisch in meerdere talen beschikbaar te maken en
                sollicitanten uit verschillende landen te ondersteunen.
                Daarnaast kan interne communicatie, zoals instructies of
                HR-beleid, automatisch worden vertaald zodat alle medewerkers
                deze goed begrijpen.
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
                Het toepassen van NMT binnen HR maakt het mogelijk om een breder
                en internationaler personeelsbestand te ondersteunen. In
                productiebedrijven werken vaak medewerkers met verschillende
                taalachtergronden, wat communicatie soms lastig maakt.
              </p>
              <p>
                Met AI-gedreven vertaling kunnen bedrijven ervoor zorgen dat
                informatie voor iedereen toegankelijk is, ongeacht de taal die
                iemand spreekt. Dit draagt bij aan betere communicatie, minder
                fouten en een inclusievere werkomgeving.
              </p>
              <p>Voor SmartBikes betekent dit bijvoorbeeld dat:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>vacatures een grotere doelgroep bereiken</li>
                <li>medewerkers instructies beter begrijpen</li>
                <li>miscommunicatie op de werkvloer wordt verminderd</li>
              </ul>
              <p>
                Daarnaast zorgt deze techniek ervoor dat HR-processen
                efficiënter verlopen, doordat documenten en communicatie sneller
                vertaald kunnen worden.
              </p>
              <p>
                Wel is het belangrijk om rekening te houden met beperkingen van
                AI, zoals het minder goed begrijpen van context of juridische
                nuances. Daarom blijft menselijke controle bij belangrijke
                documenten noodzakelijk.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto"></div>
          </section>

          <section className="flex items-start flex-col pb-4">
            <h3 className="font-semibold pb-1 text-center w-full text-lg">
              Hoe implementeer je NMT binnen HR?
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
