import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

const Cart = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Button className="gap-x-2 px-4">
      <ShoppingCart />
      <span className="font-bold text-sm">£0.00</span>
    </Button>
  );
};

export default Cart;
