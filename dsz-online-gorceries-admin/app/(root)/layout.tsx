import Navbar from "@/components/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="w-1/2 mx-auto pt-8">{children}</div>
    </div>
  );
};

export default MainLayout;
