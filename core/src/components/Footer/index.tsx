"use client";

import Image from "next/image";

export const Footer = () => {
  return (
    <div className="mt-[130px] bg-[#1E212C] w-full flex justify-center text-white py-20">
      <div className="max-w-[1235px] w-full flex justify-between items-center">
        <p className="max-w-[281px] w-full text-white opacity-60">
          Комплексная поддержка и обеспечение бесперебойной работы
          IT-инфраструктуры вашей компании. Улучшение производительности
          информационной системы.
        </p>
        <div>
          <p className="font-bold">CONTACT US</p>
          <a href="#!" className="flex items-center mt-3 gap-2.5 opacity-60">
            <Image src={"/icons/phone.svg"} alt="qw" width={16} height={16} />
            <p>09388</p>
          </a>
          <a href="#!" className="flex items-center mt-2 gap-2.5 opacity-60">
            <Image src={"/icons/mail.svg"} alt="qw" width={16} height={16} />
            <p>шынгыс.рф</p>
          </a>
        </div>
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <p>GO TO TOP</p>
          <Image
            src={"/icons/arrow.svg"}
            alt="arrow icon"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};
