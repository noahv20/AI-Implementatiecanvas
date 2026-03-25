import HomeButton from "@/components/homeButton";
import Image from "next/image";

export default function Kwaliteit() {
  return (
    <div>
      <header className="flex items-center p-2 text-bold text-2xl border-b relative">
        <div className="flex-1 flex justify-start">
          <HomeButton />
        </div>

        <h1 className="flex-none text-center">Kwaliteit</h1>

        <div className="flex-1"></div>
      </header>

      <main className="m-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">
            Vision AI: visuele kwaliteitscontrole door AI-gestuurde beeldanalyse
          </h2>
          <section className="flex flex-row items-center">
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
          <section className="flex flex-row-reverse items-center pb-4">
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
            <h3 className="font-semibold text-lg">Hoe gebruik je Vision AI?</h3>

            <p className="max-w-1/2 pb-4">
              De implementatie van Vison-AI binnen de kwaliteitsafdeling
              verloopt stapsgewijs en begint met het identificeren van kritische
              controlepunten in het productieproces. Voor het fietsenbedrijf kan
              dit als volgt worden aangepakt:
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="border-3 rounded-lg border-black">
                <h4 className="font-semibold">
                  Stap 1: Bepaal kritische kwaliteitsmomenten
                </h4>
                <p>Identificeer waar fouten het meest voorkomen, zoals:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Montage van remmen</li>
                  <li>Uitlijning van wielen</li>
                  <li>Bevestiging van onderdelen</li>
                </ul>
              </div>
              <div className="border-3 rounded-lg border-black">
                <h4 className="font-semibold">
                  Stap 2: Verzamel data via technologie
                </h4>
                <p>
                  {" "}
                  Installeer sensoren en camera’s op deze punten om data te
                  verzamelen over:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>productafmetingen</li>
                  <li>montagekwaliteit</li>
                  <li>procesparameters</li>
                </ul>
              </div>
              <div className="border-3 rounded-lg border-black">
                <h4 className="font-semibold">Stap 3: Analyse met AI</h4>
                <p>Gebruik AI-software om deze data te analyseren en:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Afwijkingen automatisch te detecteren</li>
                  <li>Patronen te herkennen</li>
                  <li>Risico’s te voorspellen</li>
                </ul>
              </div>
              <div className="border-3 rounded-lg border-black">
                <h4 className="font-semibold">
                  Stap 4: Integreer in het proces
                </h4>
                <p>Koppel het AI-systeem aan de productielijn zodat: </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Fouten direct worden gesignaleerd</li>
                  <li>Processen automatisch kunnen worden bijgestuurd</li>
                  <li>Operatoren realtime inzicht krijgen</li>
                </ul>
              </div>
              <div className="border-3 rounded-lg border-black">
                <h4 className="font-semibold">Stap 5: Continu verbeteren</h4>
                <p>
                  Gebruik de verzamelde data om processen structureel te
                  optimaliseren en kwaliteitsstandaarden verder te
                  verhogen.{" "}
                </p>
              </div>
            </div>
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
