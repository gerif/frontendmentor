import Image from "next/image";
import { Outfit } from "next/font/google";
const outFit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-outfit",
});
const QrCodePage = () => {
  return (
    <div
      className={`${outFit.variable} font-outfit bg-[#D5E1EF] min-h-screen flex items-center justify-center`}
    >
      <div
        className={
          "bg-white rounded-xl flex flex-col items-center justify-center text-black w-[300px] p-5 pb-10 text-center gap-5"
        }
      >
        <Image
          src={"/qr-code/image-qr-code.png"}
          alt={"QR image"}
          width={320}
          height={150}
          className={"rounded-lg"}
        />
        <h2 className={"font-extrabold text-[20px] text-[#1F314F]"}>
          Improve your front-end skills by building projects
        </h2>

        <p className={"text-[16px] text-[#7D889E]"}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default QrCodePage;
