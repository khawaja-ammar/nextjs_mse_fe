import Image from "next/image";

type Props = {
  page: "Home" | "Search"; //Home = 100 | Search = 35
};
export default function LogoText({ page }: Props) {
  return (
    <div
      className={`flex items-center gap-[0.1em] leading-none  ${
        page === "Home"
          ? "text-[50px] sm:text-[75px] md:text-[100px]"
          : "text-[32px]"
      }`}
    >
      <div
        className={`relative ${
          page === "Home"
            ? "h-[50px] w-[50px] sm:h-[75px] sm:w-[75px] md:h-[100px] md:w-[100px]"
            : "h-[32px] w-[32px]"
        }`}
      >
        <Image src="/images/logo.svg" fill alt="Company logo" priority />
      </div>
      <p>TravelMandi</p>
    </div>
  );
}
