"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { twMerge } from "tailwind-merge";

export const Footer = ({
  modal,
  setModal,
}: {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [doModal, setDoModal] = useState(false);
  return (
    <>
      <div className="mt-[130px] bg-[#1E212C] w-full flex justify-center text-white py-20">
        <div className="max-w-[1235px] w-full flex justify-between items-center">
          <p className="max-w-[281px] w-full text-white opacity-60">
            Комплексная поддержка и обеспечение бесперебойной работы
            IT-инфраструктуры вашей компании. Улучшение производительности
            информационной системы.
          </p>
          <div>
            <p className="font-bold">КОНТАКТЫ</p>
            <a
              href="tel:09388"
              className="flex items-center mt-3 gap-2.5 opacity-60"
            >
              <Image src={"/icons/phone.svg"} alt="qw" width={16} height={16} />
              <p>09388</p>
            </a>
          </div>
          <button
            onClick={() => setModal(true)}
            className="bg-[#7772F1] px-10 py-2 rounded-[4px]"
          >
            Оставить заявку
          </button>
        </div>
      </div>
      <div
        className={twMerge(
          "fixed z-[100] top-0 left-0 w-screen h-screen flex items-center bg-black bg-opacity-35 justify-center opacity-0 pointer-events-none duration-300",
          modal && "opacity-100 pointer-events-auto"
        )}
      >
        <div className="max-w-[718px] w-full p-4 rounded-[4px] bg-white">
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold">Укажите ваши данные</p>
            <Image
              onClick={() => setModal(false)}
              className="cursor-pointer"
              src={"/icons/cross.svg"}
              alt="cross"
              width={45}
              height={45}
            />
          </div>
          <p className="text-xl text-gray-500 mt-4">
            После того, как вы оставите заявку, с вами свяжется менеджер для
            уточнения и подтверждения информации о подключении новой услуги.
          </p>
          <div className="flex flex-col gap-5 mt-4">
            <input type="text" placeholder="Контактное лицо" />
            <input type="text" placeholder="Город, улица, номер дома" />
            <input type="text" placeholder="Номер телефона" />
            <textarea placeholder="Комментарий"></textarea>
            <button
              onClick={() => {
                setModal(false);
                setDoModal(true);
              }}
              className="w-full bg-[#7772F1] py-3 rounded-[4px] text-white"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
      <div
        className={twMerge(
          "fixed z-[100] top-0 left-0 w-screen h-screen flex items-center bg-black bg-opacity-35 justify-center opacity-0 pointer-events-none duration-300",
          doModal && "opacity-100 pointer-events-auto"
        )}
      >
        <div className="max-w-[718px] w-full p-4 rounded-[4px] bg-white">
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold">
              Ваша заявка успешно отправлена менеджерам, с вами свяжутся в
              ближайшее время
            </p>
            <Image
              onClick={() => setDoModal(false)}
              className="cursor-pointer"
              src={"/icons/cross.svg"}
              alt="cross"
              width={45}
              height={45}
            />
          </div>
        </div>
      </div>
    </>
  );
};
