import Link from "next/link";
import Image from "next/image";

const PricePlan = () => {
  return (
    <div
      className={
        "bg-order-neutral-blue-50 flex justify-between md:w-[350px] rounded-lg md:px-5 md:py-6 px-5 py-4 w-[250px]"
      }
    >
      <div className={"flex gap-4"}>
        <div className={"  flex justify-center items-center rounded-full"}>
          <Image
            src={"/order/icon-music.svg"}
            width={53}
            alt={"Icon"}
            height={52}
            className={"w-10 md:w-[53px]"}
          />
        </div>
        <div className={"flex flex-col gap-1"}>
          <h3
            className={
              "text-order-neutral-blue-950 font-extrabold text-sm md:text-lg"
            }
          >
            Annual Plan
          </h3>
          <h3
            className={
              "text-order-neutral-blue-600 font-medium text-xs md:text-sm"
            }
          >
            $59.99/year
          </h3>{" "}
        </div>
      </div>
      <div className={"flex justify-center items-center"}>
        <Link
          href={"/"}
          className={"underline font-medium text-blue-500 text-sm"}
        >
          Change
        </Link>
      </div>
    </div>
  );
};

export default PricePlan;
