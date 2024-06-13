"use client";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

export default function Price() {
  const [modal, setModal] = useState(false);
  const [price, setPrice] = useState(0);
  return (
    <>
      <div className="relative bg-[url('/images/bg3.png')] h-[653px] bg-no-repeat bg-cover">
        <Header center />
        <div className="flex gap-2 items-center w-full justify-center pt-[163px] opacity-60 text-[14px] text-white pointer-events-none">
          <Image src={"/icons/home.svg"} alt="home" width={16} height={16} />
          {">"}
          <p>Цены</p>
        </div>
        <h1 className="text-[60px] font-bold text-white pt-[100px] text-center">
          Тарифы на ежемесячное обслуживание
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
      <div className="max-w-[1550px] w-full mx-auto mt-10 grid grid-cols-4 gap-10">
        {DATA.map((item, i) => (
          <Item
            key={i}
            title={item.title}
            desc={item.desc}
            image={item.image}
            price={price}
            setPrice={setPrice}
            myPrice={item.price}
          />
        ))}
      </div>
      <p className="text-center mt-10 text-2xl font-semibold">
        Итого: {price}₽/мес*
      </p>
      <p className="text-center mt-1 text-base">
        *Для уточнения точной цены ежемесячного <br /> обслуживания свяжитесь с
        нами через заявку или по звонку на горячую линию
      </p>
      <h1 className="text-center text-[50px] font-bold mt-[76px]">
        Проектные <br /> работы
      </h1>
      <p className="max-w-[568px] w-full text-center mt-6 mx-auto text-2xl">
        Выполняем проектную работу любого уровня. Разработка и внедрение новых
        технологий, оптимизация процессов, улучшение безопасности и надежности
        инфраструктуры, а также обучение персонала.
      </p>
      <Footer modal={modal} setModal={setModal} />
    </>
  );
}

const Item = ({
  setPrice,
  title,
  image,
  desc,
  price,
  myPrice,
}: {
  setPrice: Dispatch<SetStateAction<number>>;
  price: number;
  title: string;
  image: string;
  desc: string;
  myPrice: number;
}) => {
  const [count, setCount] = useState(0);
  return (
    <div className="border border-gray-400 p-[25px] h-[400px] flex flex-col justify-between">
      <p className="font-bold text-3xl mb-[25px]">{title}</p>
      <div className="flex gap-2 items-center">
        <Image src={image} alt="qw" width={20} height={20} />
        <div>
          <p className="font-bold">{desc}</p>
          <p className="text-[12px]">ежемесячное обслуживание</p>
        </div>
      </div>
      <p className="text-3xl font-bold mt-5">{myPrice} ₽/мес</p>
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            setPrice(price + myPrice);
            setCount(count + 1);
          }}
          className="bg-[#7772F1] px-10 py-2 rounded-[4px] w-fit text-white"
        >
          Добавить
        </button>
        <p>{count}</p>
      </div>
    </div>
  );
};

const DATA = [
  {
    title: "Персональный компьютер",
    desc: "1 компьютер",
    image: "https://www.ufanet.ru/media/uploads/2023/07/27/icon-pc-01.svg",
    price: 800,
  },
  {
    title: "Сервер",
    desc: "1 сервер",
    image: "https://www.ufanet.ru/media/uploads/2023/07/27/icon-server-01.svg",
    price: 4000,
  },
  {
    title: "Виртуальный сервер",
    desc: "1 виртуальный сервер",
    image: "https://www.ufanet.ru/media/uploads/2023/07/27/icon-pc-01.svg",
    price: 3000,
  },
  {
    title: "Локальная сеть",
    desc: "1 сетевое оборудование",
    image: "https://www.ufanet.ru/media/uploads/2023/07/27/icon-network-01.svg",
    price: 1500,
  },
  {
    title: "Сетевое хранилище",
    desc: "1 сетевое хранилище",
    image: "https://www.ufanet.ru/media/uploads/2023/07/27/icon-network-01.svg",
    price: 3000,
  },
  {
    title: "АТС",
    desc: "1 телефонная станция",
    image: "https://www.ufanet.ru/media/uploads/2023/07/27/icon-ats-01.svg",
    price: 4000,
  },
  {
    title: "Видеонаблюдение",
    desc: "Видеорегистраторы и камеры",
    image: "https://www.ufanet.ru/media/uploads/2021/05/31/camera_icon.svg",
    price: 3000,
  },
  {
    title: "1С: Предприятие",
    desc: "1 информационная база",
    image: "https://www.ufanet.ru/media/uploads/2023/07/27/icon-server-01.svg",
    price: 7000,
  },
];
