import Navbar from "@/components/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full relative bg-zinc-100">
      <nav className="flex flex-col fixed w-full h-24 md:h-48 bg-white">
        <Navbar />
      </nav>
      <main className="pt-24 px-2 w-full md:w-3/5 md:mx-auto md:pt-48 md:px-0">
        {children}
      </main>
    </div>
  );
}
