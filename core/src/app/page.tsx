"use client";

import Image from "next/image";
import Header from "../components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="relative bg-[url('/images/bg.png')] h-[1073px] bg-no-repeat bg-cover bg-right">
        <Header center />
        <div className="h-full flex items-center pl-[14.01041666666667%]">
          <h1 className="text-[72px] font-bold text-white">
            IT сопровождение для <br /> бизнеса от Уфанет
          </h1>
        </div>
      </div>
      <div className="max-w-[1302px] w-full mx-auto flex gap-12 items-center mt-[90px]">
        <p className="text-3xl font-bold whitespace-nowrap">
          Занимайтесь бизнесом. IT мы берем на себя.
        </p>
        <div className="w-full">
          <div className="flex justify-between w-full pr-[80px]">
            <div>
              <div className="w-[90px] h-[90px] flex justify-center items-center mb-5 rounded-[100%] bg-[#FBFBFB] border border-[#BDBDBD]">
                <Image
                  src={
                    "https://www.ufanet.ru/media/core/img/blocks/free-icon-rocket-3064026.png"
                  }
                  alt="qw"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-base italic">
                Реагирование на проблему в <br /> течение одного часа
              </p>
            </div>
            <div>
              <div className="w-[90px] h-[90px] flex justify-center items-center mb-5 rounded-[100%] bg-[#FBFBFB] border border-[#BDBDBD]">
                <Image
                  src={
                    "https://www.ufanet.ru/media/core/img/blocks/free-icon-support-1067566.png"
                  }
                  alt="qw"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-base italic">
                Удаленная техническая <br /> поддержка 24/7
              </p>
            </div>
          </div>
          <div className="flex justify-between w-full mt-6">
            <div>
              <div className="w-[90px] h-[90px] flex justify-center items-center mb-5 rounded-[100%] bg-[#FBFBFB] border border-[#BDBDBD]">
                <Image
                  src={
                    "https://www.ufanet.ru/media/core/img/blocks/free-icon-favorite-4803130.png"
                  }
                  alt="qw"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-base italic">
                Более 20 квалифицированных IT <br /> -специалистов
              </p>
            </div>
            <div>
              <div className="w-[90px] h-[90px] flex justify-center items-center mb-5 rounded-[100%] bg-[#FBFBFB] border border-[#BDBDBD]">
                <Image
                  src={
                    "https://www.ufanet.ru/media/core/img/blocks/free-icon-geography-7906788.png"
                  }
                  alt="qw"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-base italic">
                Широкая география присутствия <br /> наших IT-специалистов
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[862px] mt-[220px] bg-no-repeat bg-cover bg-[url('/images/bg2.png')] bg-center relative max-w-[1920px] mx-auto">
        <div className="absolute top-[185px] left-[328px] max-w-[390px] w-full">
          <p className="text-5xl font-bold">Ежемесячное обслуживание </p>
          <p className="text-base text-[#787A80] mt-2">
            Ежемесячное сопровождение позволяет компаниям получать максимальную
            выгоду от своих IT-инфраструктур. Мы дополняем или заменяем
            системных администраторов, которые могут быть заняты другими
            задачами. Это позволяет нашим клиентам зарабатывать деньги, когда их
            IT инфраструктура работает.
          </p>
        </div>
      </div>
      <Footer modal={modal} setModal={setModal} />
    </>
  );
}
