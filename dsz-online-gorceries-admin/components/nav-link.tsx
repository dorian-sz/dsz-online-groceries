import Link from "next/link";

interface NavLinkProps {
  label: string;
  active: boolean;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, active, href }) => {
  return (
    <div
      className={`font-bold border-b-4 cursor-pointer border-b-transparent hover:border-b-orange-600 ${
        active ? "border-b-orange-600" : ""
      }`}
    >
      <Link href={href}>{label}</Link>
    </div>
  );
};

export default NavLink;
