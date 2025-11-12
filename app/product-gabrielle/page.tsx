import { Fraunces, Montserrat } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-montserrat",
});
const fraunches = Fraunces({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-fraunches",
});

const ProductGabrielle = () => {
  return (
    <div
      className={`${montserrat.variable} font-montserrat text-black bg-[hsl(30,38%,92%)] min-h-screen flex flex-col items-center justify-center `}
    >
      <div className={"w-[640px] flex  rounded-xl"}>
        <div className={"min-w-[320px]"}>
          <Image
            src={"/gabrielle/image-product-desktop.jpg"}
            alt={"Desktop image"}
            width={320}
            height={600}
          />
        </div>
        <div
          className={
            "min-w-[320px] font-montserrat bg-white p-8 flex flex-col items-start justify-between"
          }
        >
          <h3 className={"text-[hsl(228,12%,48%)] text-base uppercase "}>
            Perfume
          </h3>
          <h2
            className={`${fraunches.variable} font-fraunches text-4xl font-bold font-black`}
          >
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className={"text-[hsl(228,12%,48%)] text-base"}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <p className={`${fraunches.variable} font-fraunches`}>
            $149.99 <span>$169.99</span>
          </p>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductGabrielle;
