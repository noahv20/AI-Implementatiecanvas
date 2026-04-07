import HomeButton from "@/components/homeButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ItPage() {
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
      titelKort: "Analyse met AI",
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
        {/* Zorg dat de knoppen in je componenten-map de onPointerDown fix hebben */}
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
      <header className="flex items-center p-2 text-bold text-2xl border-b relative">
        <div className="flex-1 flex justify-start">
          <HomeButton />
        </div>

        <h1 className="flex-none text-center">IT</h1>

        <div className="flex-1 "></div>
      </header>

      <main className="m-8">
        <div className="flex flex-col gap-4 pb-4">
          <h2 className="text-2xl font-bold pb-4">1. AI-OPS</h2>
          <section className="flex flex-row items-start">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">Wat is AI-OPS?</h3>
              <p>
                Het artikel beschrijft AI-OPS (Artificial Intelligence for IT
                Operations) als een technologie waarbij kunstmatige
                intelligentie wordt ingezet om IT-processen te automatiseren en
                te optimaliseren. Moderne IT-omgevingen, zoals ERP-systemen in
                productiebedrijven, genereren grote hoeveelheden data in de vorm
                van logs, metrics en systeemmeldingen. Door de toenemende
                complexiteit van systemen en infrastructuren wordt het steeds
                moeilijker om deze handmatig te monitoren en beheren. Binnen dit
                kader speelt AI een centrale rol doordat het deze grote
                hoeveelheden data kan analyseren en vertalen naar inzichten.
                Volgens het artikel wordt AI-OPS ingezet voor taken zoals
                incidentdetectie, foutvoorspelling, root cause analysis en het
                uitvoeren van automatische acties . Hierdoor kunnen IT-systemen
                niet alleen gemonitord worden, maar ook proactief worden
                aangestuurd en geoptimaliseerd. In een productiebedrijf met een
                ERP-systeem kan dit bijvoorbeeld betekenen dat AI continu
                logdata analyseert van servers en applicaties om afwijkingen te
                herkennen en potentiële storingen te voorspellen voordat deze
                daadwerkelijk optreden.{" "}
              </p>
            </div>
            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/IT 1.png"
                alt="AI-OPS"
                fill
                className="object-contain"
              />
            </div>
          </section>
          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">Waarom AI-OPS?</h3>
              <p>
                Het toepassen van AI binnen de IT-afdeling maakt het mogelijk om
                IT-systemen betrouwbaarder, efficiënter en minder afhankelijk
                van handmatige monitoring te maken. Traditionele IT-monitoring
                is vaak reactief en afhankelijk van menselijke interpretatie,
                waardoor problemen pas worden opgelost nadat ze zich hebben
                voorgedaan. AI-OPS biedt hier een oplossing door IT-data continu
                te analyseren en afwijkingen automatisch te detecteren. Hierdoor
                kunnen incidenten sneller worden opgespoord en zelfs worden
                voorspeld voordat ze impact hebben op de operatie . Dit is
                vooral belangrijk in productiebedrijven, waar IT-systemen zoals
                ERP direct gekoppeld zijn aan productie, voorraad en logistiek.
              </p>
              <p>Voor SmartBikes betekent dit bijvoorbeeld dat:</p>{" "}
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li> uitval van het ERP-systeem wordt voorkomen</li>{" "}
                <li> productieprocessen niet stilvallen door IT-problemen</li>{" "}
                <li>
                  {" "}
                  IT-personeel minder tijd kwijt is aan repetitieve monitoring
                </li>
              </ul>
              <p>
                Daarnaast zorgt AI ervoor dat root cause analysis sneller en
                nauwkeuriger kan worden uitgevoerd, waardoor problemen
                structureel worden opgelost in plaats van tijdelijk.
              </p>
            </div>
            <div className="relative flex-1 h-100 mr-8 w-auto">
              <Image
                src="/aiops.png"
                alt="IT 2"
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
        </div>
        <div>
          <h2 className="text-xl">
            Feature 2: Uitleg over de tweede technologie.
          </h2>
          <h3>Wat?</h3>
          <p></p>
          <h3>Hoe?</h3>
          <p></p>
        </div>
        <div>
          <h2 className="text-xl">Feature 3: En de derde beschrijving hier.</h2>
          <h3>Wat?</h3>
          <p></p>
          <h3>Hoe?</h3>
          <p></p>
        </div>
      </main>
    </div>
  );
}
