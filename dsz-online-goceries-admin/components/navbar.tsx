import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import NavRoutes from "./nav-routes";
import Logo from "./ui/logo";

const Navbar = () => {
  return (
    <nav className="h-20 p-4 w-full bg-white">
      <div className="flex items-center mx-auto w-1/2">
        <div className="flex w-1/2 justify-between items-center">
          <div className="flex items-center">
            <Logo width={140} height={70} />
          </div>
          <NavRoutes />
        </div>
        <div className="ml-auto">
          <SignOutButton>
            <Button>Logout</Button>
          </SignOutButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
