import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Price() {
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
      </div>
      <div className="max-w-[1550px] w-full mx-auto mt-10 grid grid-cols-4 gap-10">
        <div className="border border-gray-400 p-[25px] h-[400px]">
          <p className="font-bold text-3xl mb-[25px]">Персональный компьютер</p>
          <div className="flex gap-2 items-center">
            <Image
              src={
                "https://www.ufanet.ru/media/uploads/2023/07/27/icon-pc-01.svg"
              }
              alt="qw"
              width={20}
              height={20}
            />
            <div>
              <p className="font-bold">1 компьютер</p>
              <p className="text-[12px]">ежемесячное обслуживание</p>
            </div>
          </div>
          <p className="text-3xl font-bold mt-5">800 ₽/мес</p>
        </div>
        <div className="border border-gray-400 p-[25px]">
          <p className="font-bold text-3xl mb-[25px]">Сервер</p>
          <div className="flex gap-2 items-center">
            <Image
              src={
                "https://www.ufanet.ru/media/uploads/2023/07/27/icon-server-01.svg"
              }
              alt="qw"
              width={20}
              height={20}
            />
            <div>
              <p className="font-bold">1 сервер</p>
              <p className="text-[12px]">ежемесячное обслуживание</p>
            </div>
          </div>
          <p className="text-3xl font-bold mt-5">4 000 ₽/мес</p>
        </div>
        <div className="border border-gray-400 p-[25px]">
          <p className="font-bold text-3xl mb-[25px]">Виртуальный сервер</p>
          <div className="flex gap-2 items-center">
            <Image
              src={
                "https://www.ufanet.ru/media/uploads/2023/07/27/icon-pc-01.svg"
              }
              alt="qw"
              width={20}
              height={20}
            />
            <div>
              <p className="font-bold">1 виртуальный сервер</p>
              <p className="text-[12px]">ежемесячное обслуживание</p>
            </div>
          </div>
          <p className="text-3xl font-bold mt-5">3 000 ₽/мес</p>
        </div>
        <div className="border border-gray-400 p-[25px]">
          <p className="font-bold text-3xl mb-[25px]">Локальная сеть</p>
          <div className="flex gap-2 items-center">
            <Image
              src={
                "https://www.ufanet.ru/media/uploads/2023/07/27/icon-network-01.svg"
              }
              alt="qw"
              width={20}
              height={20}
            />
            <div>
              <p className="font-bold">1 сетевое оборудование</p>
              <p className="text-[12px]">ежемесячное обслуживание</p>
            </div>
          </div>
          <p className="text-3xl font-bold mt-5">1 500 ₽/мес</p>
        </div>
        <div className="border border-gray-400 p-[25px]">
          <p className="font-bold text-3xl mb-[25px]">Сетевое хранилище</p>
          <div className="flex gap-2 items-center">
            <Image
              src={
                "https://www.ufanet.ru/media/uploads/2023/07/27/icon-network-01.svg"
              }
              alt="qw"
              width={20}
              height={20}
            />
            <div>
              <p className="font-bold">1 сетевое хранилище</p>
              <p className="text-[12px]">ежемесячное обслуживание</p>
            </div>
          </div>
          <p className="text-3xl font-bold mt-5">3 000 ₽/мес</p>
        </div>
        <div className="border border-gray-400 p-[25px]">
          <p className="font-bold text-3xl mb-[25px]">АТС</p>
          <div className="flex gap-2 items-center">
            <Image
              src={
                "https://www.ufanet.ru/media/uploads/2023/07/27/icon-ats-01.svg"
              }
              alt="qw"
              width={20}
              height={20}
            />
            <div>
              <p className="font-bold">1 телефонная станция</p>
              <p className="text-[12px]">ежемесячное обслуживание</p>
            </div>
          </div>
          <p className="text-3xl font-bold mt-5">4 000 ₽/мес</p>
        </div>
        <div className="border border-gray-400 p-[25px]">
          <p className="font-bold text-3xl mb-[25px]">Видеонаблюдение</p>
          <div className="flex gap-2 items-center">
            <Image
              src={
                "https://www.ufanet.ru/media/uploads/2021/05/31/camera_icon.svg"
              }
              alt="qw"
              width={20}
              height={20}
            />
            <div>
              <p className="font-bold">Видеорегистраторы и камеры</p>
              <p className="text-[12px]">ежемесячное обслуживание</p>
            </div>
          </div>
          <p className="text-3xl font-bold mt-5">3 000 ₽</p>
          <p className="text-[12px] opacity-60">за 1 видеорегистратор</p>
          <p className="text-3xl font-bold mt-5">200 ₽</p>
          <p className="text-[12px] opacity-60">за 1 камеру на высоте до 3 м</p>
          <p className="text-3xl font-bold mt-5">350 ₽</p>
          <p className="text-[12px] opacity-60">за 1 камеру на высоте от 3 м</p>
        </div>
        <div className="border border-gray-400 p-[25px]">
          <p className="font-bold text-3xl mb-[25px]">1С: Предприятие</p>
          <div className="flex gap-2 items-center">
            <Image
              src={
                "https://www.ufanet.ru/media/uploads/2023/07/27/icon-server-01.svg"
              }
              alt="qw"
              width={20}
              height={20}
            />
            <div>
              <p className="font-bold">1 информационная база</p>
              <p className="text-[12px]">ежемесячное обслуживание</p>
            </div>
          </div>
          <p className="text-3xl font-bold mt-5">7 000 ₽</p>
          <p className="text-[12px] opacity-60">до 10 пользователей</p>
          <p className="text-3xl font-bold mt-5">10 000 ₽</p>
          <p className="text-[12px] opacity-60">до 20 пользователей</p>
          <p className="text-3xl font-bold mt-5">12 000 ₽</p>
          <p className="text-[12px] opacity-60">21 пользователь и более</p>
        </div>
      </div>
      <h1 className="text-center text-[60px] font-bold mt-[76px]">
        Проектные <br /> работые
      </h1>
      <p className="max-w-[568px] w-full text-center mt-6 mx-auto">
        Выполняем проектную работу любого уровня. Разработка и внедрение новых
        технологий, оптимизация процессов, улучшение безопасности и надежности
        инфраструктуры, а также обучение персонала.
      </p>
      <Footer />
    </>
  );
}
