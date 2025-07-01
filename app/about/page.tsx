import { TopBar } from "@/components";

export default function About() {
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <TopBar menuButtonColor="[#26294D]" />
        <h1 className="text-4xl font-bold">Sobre Nós</h1>
        <p className="mt-4 text-lg">
            em breve...
        </p>
    </main>
    );
}