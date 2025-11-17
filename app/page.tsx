import Image from "next/image";
import ListPages from "@/components/micro-components/main/ListPages";
const links = [
  {
    id: 1,
    title: "Responsive Qr Code Component",
    link: "/qr-code",
  },
  {
    id: 2,
    title: "Responsive Gabrielle Component",
    link: "/product-gabrielle",
  },
  {
    id: 3,
    title: "Responsive Order Component",
    link: "/order-summary",
  },
  {
    id: 4,
    title: "Responsive 3 column project",
    link: "/three-columns",
  },
];
export default function Home() {
  return (
    <div
      className={
        "bg-order-neutral-blue-950 flex flex-col min-h-screen items-center"
      }
    >
      <h1 className={"text-3xl font-extrabold text-white my-10"}>
        Eriks project
      </h1>
      <ul className={"flex gap-5 md:max-w-[700px] flex-wrap "}>
        {links.map((link) => (
          <ListPages key={link.id} title={link.title} link={link.link} />
        ))}
      </ul>
    </div>
  );
}
