import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface IProps {
  title: string;
  link: string;
}

const ListPages = ({ title, link }: IProps) => {
  return (
    <Link href={link}>
      <Button className={"bg-order-neutral-blue-600 px-5 py-4 cursor-pointer"}>
        {title}
        <span>
          <ArrowRight />
        </span>
      </Button>
    </Link>
  );
};

export default ListPages;
