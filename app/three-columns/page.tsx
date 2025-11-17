import { Lexend_Deca, Red_Hat_Display } from "next/font/google";
import { Button } from "@/components/ui/button";
import Card from "@/components/micro-components/three-columns/Card";

const lexend = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lexend",
});
const items = [
  {
    id: 1,
    img: "/three-columns/icon-sedans.svg",
    title: "Sedans",
    desc: "Choose a sedan for its affordability and excellent fuel economy.Ideal for cruising in the city or on your next road trip",
    bgColor: "gold",
  },
  {
    id: 2,
    img: "/three-columns/icon-suvs.svg",
    title: "SUVs",
    desc: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    bgColor: "cyan",
  },
  {
    id: 3,
    img: "/three-columns/icon-luxury.svg",
    title: "Luxury ",
    desc: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    bgColor: "green",
  },
];
const ThreeColumnPage = () => {
  return (
    <div>
      <div
        className={`bg-white text-three-column-neutral flex justify-center items-center  ${lexend.className} md:pt-40`}
      >
        <ul
          className={
            "flex flex-wrap md:flex-nowrap items-stretch rounded-lg overflow-hidden m-5 w-[320px] md:w-auto"
          }
        >
          {items.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              bgColor={item.bgColor}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThreeColumnPage;
