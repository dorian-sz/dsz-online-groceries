import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface HeadingProps {
  label: string;
  title: string;
  href: string;
}

const Heading: React.FC<HeadingProps> = ({ label, title, href }) => {
  return (
    <>
      <div className="flex w-full justify-start">
        <Button className="md:absolute">
          <Link href={href}>{label}</Link>
        </Button>
        <div className="mx-auto">
          <p className="font-bold text-2xl text-stone-600">{title}</p>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Heading;
