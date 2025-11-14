import Image from "next/image";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import PricePlan from "@/components/micro-components/order-summary/PricePlan";
import { Red_Hat_Display } from "next/font/google";

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-red-hat-display",
});

const OrderSummaryPage = () => {
  return (
    <div
      className={`bg-[hsl(225,100%,94%)] min-h-screen bg-[url('/order/pattern-background-desktop.svg')] bg-contain bg-no-repeat flex justify-center items-start ${redHat.variable} font-red-hat px-5`}
    >
      <div className={"md:w-[450px] mt-25.5 rounded-3xl overflow-hidden "}>
        <Image
          src={"/order/illustration-hero.svg"}
          alt={"Illustration"}
          width={450}
          height={150}
        />
        <div className={"bg-white flex flex-col items-center md:gap-5 gap-3"}>
          <h2
            className={
              "md:text-[28px] text-[22px] font-extrabold md:mt-10.5 mt-5 text-order-neutral-blue-950"
            }
          >
            Order Summary
          </h2>
          <p
            className={
              "md:text-base text-sm text-center text-order-neutral-blue-600  font-medium md:mx-19.5 mx-4"
            }
          >
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <PricePlan />

          <Button
            className={
              "bg-order-primary-blue-700 rounded-lg font-semibold  md:w-[350px] py-6 cursor-pointer hover:bg-[hsl(245,75%,72%)] w-[250px] text-xs md:text-sm mt-2"
            }
          >
            {" "}
            Proceed to Payment
          </Button>
          <Button
            className={
              "font-semibold bg-transparent text-order-neutral-blue-600 hover:text-order-neutral-blue-950 hover:bg-transparent mb-10 cursor-pointer text-xs md:text-sm"
            }
          >
            Cancel Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
