import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const CartHover = () => {
  return (
    <div className="flex flex-col bg-zinc-100 w-full h-[680px] shadow-2xl">
      <div className="flex justify-between w-full h-16 bg-white px-4 items-center ">
        <p className="font-extrabold text-xl">My trolley</p>
        <Button
          variant={"ghost"}
          className="text-orange-600 px-6 py-3 text-lg font-extrabold rounded-sm"
        >
          Full trolley
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-6 h-full border-b border-t overflow-auto">
        <Image
          src={"/images/emptytrolley.svg"}
          width={110}
          height={145}
          alt="emptytrolley"
        />
        <p className="text-xl font-extrabold">Your Trolley is empty</p>
        <p>Add some items to get started</p>
        <Button variant={"outline"} className="text-lg font-bold px-4">
          <Link href={"/offers"}>Start shopping</Link>
        </Button>
      </div>
      <div className="flex bg-white w-full h-24 items-center justify-between px-4">
        <p className="text-xl font-extrabold">£0.00</p>
        <Button className="font-xl font-bold w-7/12 h-2/3">Book a slot</Button>
      </div>
    </div>
  );
};

export default CartHover;
