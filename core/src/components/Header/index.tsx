import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  center?: boolean;
}

const Header: React.FC<Props> = ({ center = false }) => {
  return (
    <div
      className={twMerge(
        "absolute top-8 left-[26.45833333333333%] flex items-center gap-10 opacity-60 text-white text-base font-bold z-100",
        center && "left-0 w-full justify-center"
      )}
    >
      <Link href={"/price"}>Тарифы</Link>
      <Link href={"/services"}>Примеры работ</Link>
      <Link href={"/"}>О нас</Link>
    </div>
  );
};

export default Header;
