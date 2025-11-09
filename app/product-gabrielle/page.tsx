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
      className={`${montserrat.variable} font-montserrat text-black bg-[hsl(30,38%,92%)] min-h-screen flex flex-col items-center md:justify-center justify-between rounded-lg `}
    >
      <div
        className={
          "md:w-[640px] flex flex-col md:flex-row  rounded-xl overflow-hidden mx-3 my-5"
        }
      >
        <div className={"md:min-w-[320px] "}>
          <Image
            src={"/gabrielle/image-product-desktop.jpg"}
            alt={"Desktop image"}
            width={320}
            height={600}
            className={"hidden md:block"}
          />
          <Image
            src={"/gabrielle/image-product-mobile.jpg"}
            alt={"Desktop image"}
            width={650}
            height={300}
            className={"md:hidden block"}
          />
        </div>
        <div
          className={
            "md:min-w-[320px] font-montserrat bg-white p-8 flex flex-col items-stretch justify-between gap-4"
          }
        >
          <h3
            className={
              "text-[hsl(228,12%,48%)] md:text-base text-sm uppercase tracking-[.25em] "
            }
          >
            Perfume
          </h3>
          <h2
            className={`${fraunches.variable} font-fraunches md:text-4xl text-4xl font-black`}
          >
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className={"text-[hsl(228,12%,48%)] text-base"}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className={"flex items-center gap-4"}>
            <p
              className={`${fraunches.variable} font-fraunches md:text-4xl text-3xl flex items-center justify-between text-[hsl(158,36%,37%)]`}
            >
              $149.99
            </p>
            <p
              className={
                "md:text-lg text-sm text-[hsl(228,12%,48%)] line-through"
              }
            >
              $169.99
            </p>
          </div>

          <Button
            className={
              "  hover:bg-[hsl(158,42%,18%)] bg-[hsl(158,36%,37%)] py-6 text-base cursor-pointer"
            }
          >
            <Image
              src={"/gabrielle/icon-cart.svg"}
              width={15}
              alt={"Icon cart"}
              height={15}
            />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductGabrielle;
