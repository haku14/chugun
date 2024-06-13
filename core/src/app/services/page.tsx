"use client";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";

export default function Services() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="relative bg-[url('/images/bg4.png')] h-[653px] bg-no-repeat bg-cover">
        <Header center />
        <div className="flex gap-2 items-center w-full justify-center pt-[163px] opacity-60 text-[14px] text-white pointer-events-none">
          <Image src={"/icons/home.svg"} alt="home" width={16} height={16} />
          {">"}
          <p>Примеры работ</p>
        </div>
        <h1 className="text-[60px] font-bold text-white pt-[100px] text-center">
          Примеры работ
        </h1>
        <div className="flex flex-col items-center w-full mt-[110px] gap-[17px]">
          <div className="flex items-center gap-3">
            <Image
              src={"/icons/phone2.svg"}
              alt="phone"
              width={40}
              height={40}
            />
            <p className="text-white text-lg">09388</p>
          </div>
          <button
            onClick={() => setModal(true)}
            className="bg-[#7772F1] px-10 py-2 rounded-[4px] w-fit text-white"
          >
            Оставить заявку
          </button>
        </div>
      </div>
      <div className="mt-[170px] mx-auto max-w-[1252px] w-full px-4">
        <div className="flex items-center gap-[150px]">
          <Image
            src={"/images/img4.jpg"}
            alt="qw"
            width={609}
            height={653}
            className="min-w-[609px]"
          />
          <div>
            <p className="text-5xl font-bold">
              Срочная настройка локальной сети в новом офисе
            </p>
            <p className="mt-10 text-[#787A80]">
              Одна компания обратилась в IT сопровождение от Уфанет. За 1 вечер
              были настроены точки доступа для локальной сети, был настроен
              коммутатор для разделения в виртуальной сети, чтобы компьютеры
              сотрудников не пересекались друг с другом, также была произведена
              настройка безопасности сетевых устройств в офисе. Работа в офисе
              началась уже на следующий день.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[150px] mt-[127px]">
          <div>
            <Image
              src={"/images/img2.png"}
              alt="qw"
              width={609}
              height={523}
              className="min-w-[609px]"
            />
            <Image
              src={"/images/img3.png"}
              alt="qw"
              width={609}
              height={394}
              className="min-w-[609px]"
            />
          </div>
          <div>
            <p className="text-5xl font-bold">Настройка видеонаблюдения</p>
            <p className="mt-10 text-[#787A80]">
              Профессиональная настройка видеонаблюдения от IT-сопровождения
              является гарантией эффективного функционирования системы
              безопасности вашего предприятия. Наша команда специалистов
              предлагает полный цикл услуг по настройке и оптимизации
              видеонаблюдения, обеспечивая надежную защиту объектов и контроль
              рабочих процессов.
            </p>
          </div>
        </div>
      </div>
      <Footer modal={modal} setModal={setModal} />
    </>
  );
}
