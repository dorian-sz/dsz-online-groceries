import Navbar from "@/components/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" h-screen overflow-auto relative bg-zinc-100">
      <nav className="flex flex-col z-50 fixed w-full h-32 md:h-56 bg-white">
        <Navbar />
      </nav>
      <main className="pt-36 w-full md:w-3/4 md:mx-auto md:pt-60">
        {children}
      </main>
    </div>
  );
}
