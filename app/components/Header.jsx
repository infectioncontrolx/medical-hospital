'use client';

import feedbackImg from '@/public/OIP.jpeg';
import logoImg from '@/public/waaw2021.png';
import Image from 'next/image';
import Link from 'next/link';

import { useParams, usePathname } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import FeedBackModal from './FeedBackModal';

export default function Header() {
  const [lang, setLang] = useState('English');
  const [modelOpened, setModelOpened] = useState(false);
  const path = usePathname();
  const router = useParams();
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const currentLanguageFullName = useSelector(
    (state) => state.language.currentLanguageFullName
  );

  const appTitle = {
    en: 'AI Infection Prevention & Control Assistant for Healthcare Professionals',
    ar: 'المثقف الصحي لضيوف الرحمن',
    bn: 'আল্লাহর অতিথিদের জন্য এআই স্বাস্থ্য সহকারী',
    bm: 'Pembantu Kesihatan Kecerdasan Buatan untuk Tetamu Allah',
    ud: 'اللہ کے مہمانوں کے لیے اے آئی ہیلتھ اسسٹنٹ',
    fr: "Assistant Santé AI pour les Invités d'Allah",
    in: 'Asisten Kesehatan AI untuk Tamu Allah',
    tr: "Allah'ın Misafirleri için AI Sağlık Asistanı",
    hn: 'अल्लाह के मेहमानों के लिए एआई स्वास्थ्य सहायक',
    ks: 'Msaidizi wa Afya wa AI kwa Wageni wa Allah',
    fa: 'دستیار سلامت هوش مصنوعی برای مهمانان الله',
  };

  if (router?.id && path.startsWith('/healthcare')) {
    return null;
  }

  return (
    <div className=" shadow-sm flex gap-2 relative flex-col  pb-4  items-center bg-white">
      <div className="flex items-center justify-center w-full ">
        <Link
          href="/"
          // className="w-[50%] "
        >
          <Image
            src="/logo-new.png"
            // height={400}
            // width={400}
            height={120}
            width={120}
            alt="logo"
            // className=" mt-4 mb-2 w-full "
            className=" mt-4 mb-2 w-44"
            priority
          />
        </Link>
      </div>
      <h1 className=" leading-7 sm:leading-8 my-1 text-[#0CAFB8] px-2 font-bold break-words text-lg text-center max-w-[99%] mx-auto">
        {/* {appTitle[currentLanguage]} */}
        AI Assistant for Infection Prevention & Control for Healthcare
        Professionals
      </h1>

      <div className="px-4 w-full">
        <div className="p-3 w-full flex justify-evenly flex-row items-center">
          <Image
            src={logoImg}
            // height={400}
            // width={400}
            height={120}
            width={120}
            alt="logo"
            // className=" mt-4 mb-2 w-full "
            className=" mt-4 mb-2 w-36"
            priority
          />
          <h1 className=" leading-7 my-1 text-red-500 px-2 font-bold text-lg text-center">
            {/* {appTitle[currentLanguage]} */}
            WAAW 2024 Special Edition
          </h1>
          <div className="cursor-pointer " onClick={() => setModelOpened(true)}>
            <Image
              src={feedbackImg}
              height={35}
              width={35}
              alt="logo"
              // className=" mt-4 mb-2 "
              priority
            />
          </div>
        </div>
      </div>

      <FeedBackModal setIsOpen={setModelOpened} isOpen={modelOpened} />
    </div>
  );
}
