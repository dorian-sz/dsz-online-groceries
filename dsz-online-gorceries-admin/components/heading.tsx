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
        <Button>
          <Link href={href}>{label}</Link>
        </Button>
      </div>
      <Separator />
      <div className="flex w-full justify-center">
        <p className="font-bold text-2xl text-stone-600">{title}</p>
      </div>
    </>
  );
};

export default Heading;
