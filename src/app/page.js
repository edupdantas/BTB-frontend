import Cadeira from "@/components/Cadeira";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Cadeira occupied={false}/>
        <Cadeira occupied={true}/>
    </main>
  );
}
