import { auth } from "@clerk/nextjs/app-beta";
import { redirect } from "next/navigation";

import Navbar from "@/components/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }

  return (
    <div className="h-full bg-zinc-100">
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
