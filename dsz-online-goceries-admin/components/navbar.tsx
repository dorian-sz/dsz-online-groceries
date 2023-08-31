import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import NavRoutes from "./nav-routes";

const Navbar = () => {
  return (
    <nav className="h-20 p-4 w-full bg-white">
      <div className="flex items-center mx-auto w-1/2">
        <NavRoutes />
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
