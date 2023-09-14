import Navbar from "@/components/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full relative bg-zinc-100">
      <nav className="flex flex-col fixed w-full h-24 md:h-56 bg-white">
        <Navbar />
      </nav>
      <main className="pt-24 px-4 w-full md:w-3/5 md:mx-auto md:pt-56 md:px-2">
        {children}
      </main>
    </div>
  );
}
