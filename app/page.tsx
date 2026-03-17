import InteractiveImage from "@/components/interactiveImage";

export default function Home() {
  return (
    <main className="flex  justify-center">
      <div>
        <header className="">Home</header>
        <p>Welkom op de Home pagina!</p>
        <div>Hier staat tekst over de homepagina.</div>
        <InteractiveImage />
        <h1>Wat?</h1>
        <h2>Waar?</h2>
        <h3>Hoe?</h3>
      </div>
    </main>
  );
}
