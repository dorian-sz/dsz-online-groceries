import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import CartHover from "./cartHover";
import { useSelector } from "react-redux";

const Cart = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { loading, cartItems, totalPrice } = useSelector(
    (state: any) => state.cart
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative">
      <Button
        className="gap-x-2 px-4"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <ShoppingCart />
        <span className="font-bold text-sm">
          £{loading ? "0.00" : totalPrice.toFixed(2)}
        </span>
      </Button>
      {open && (
        <div
          className="flex items-end absolute z-50 top-10 right-0 w-[440px] h-[700px]"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <CartHover loading={loading} cartItems={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
