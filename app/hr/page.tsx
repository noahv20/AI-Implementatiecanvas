import HomeButton from "@/components/homeButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function HRPage() {
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
  const StepCarousel = ({ data }: { data: typeof hrSteps }) => (
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
      <header className="flex items-center p-2 text-bold text-2xl border-b relative">
        <div className="flex-1 flex justify-start">
          <HomeButton />
        </div>

        <h1 className="flex-none text-center">Human Resources</h1>

        <div className="flex-1"></div>
      </header>

      <main className="m-8 flex flex-col gap-4">
        <div className="flex flex-col gap-4 pb-4">
          <h2 className="text-2xl font-bold">
            1. Vision AI: visuele medewerkers veiligheid door AI gestuurde
            beeldanalyse
          </h2>
          <section className="flex flex-row items-start">
            <div className="wrap-break-word flex-1">
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
            <div className="relative h-100 w-auto flex-1">
              <Image
                src="/HR 1.1.png"
                alt="HR 1.1"
                fill
                className="object-contain"
              />
            </div>
          </section>
          <section className="flex flex-row-reverse items-start">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">Waarom Vision AI?</h3>
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
            <div className="relative h-100 w-auto flex-1"></div>
          </section>
          <section className="flex items-start flex-col pb-4">
            <h3 className="text-lg font-semibold">
              Hoe implementeer je Vision AI binnen HR?
            </h3>
            <StepCarousel data={hrSteps} />
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
