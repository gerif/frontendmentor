"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
interface IProps {
  img: string;
  title: string;
  desc: string;
  bgColor: string;
}

const Card = ({ img, title, desc, bgColor }: IProps) => {
  return (
    <li
      className={`flex flex-col justify-between lg:gap-10 lg:w-[300px] md:min-w-[220px]  ${bgColor === "gold" ? "bg-three-column-primary-gold" : "bg-three-column-primary-cyan"}  ${bgColor === "green" ? "bg-three-column-primary-green" : ""} px-5 py-8 gap-8 lg:p-10`}
    >
      <Image src={img} alt={"Card image"} width={70} height={70} />
      <h3 className={`lg:text-4xl md:text-2xl font-bold uppercase text-2xl`}>
        {title}
      </h3>
      <p className={"md:text-sm"}>{desc}</p>
      <Button
        className={`lg:px-10 lg:py-6 md:self-center lg:self-stretch md:px-7 rounded-4xl bg-three-column-neutral  ${bgColor === "gold" ? "text-three-column-primary-gold" : "text-three-column-primary-cyan"}  ${bgColor === "green" ? "text-three-column-primary-green" : ""}  hover:text-white hover:border hover:bg-transparent hover:border-white border border-transparent text-sm self-start px-6 py-5`}
      >
        Learn more
      </Button>
    </li>
  );
};

export default Card;
