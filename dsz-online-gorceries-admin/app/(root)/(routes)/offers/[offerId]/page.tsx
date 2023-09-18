import prismadb from "@/lib/prismadb";
import OfferForm from "./components/form";

const OfferPage = async ({ params }: { params: { offerId: string } }) => {
  const offer = await prismadb.offer.findUnique({
    where: {
      id: params.offerId,
    },
  });

  return (
    <div className="flex justify-center flex-col gap-y-8">
      <OfferForm initialData={offer} />
    </div>
  );
};

export default OfferPage;
