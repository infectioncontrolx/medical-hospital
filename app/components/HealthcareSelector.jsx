'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import GuidancePopup from './GuidancePopup';

const data1 = [
  {
    title: 'AMR Awareness Week Logo',
    link: 'https://drive.google.com/file/d/1mR_0jeu1U-erzvI7XlPfskC_N_2ObOOU/view?usp=drive_link',
  },
  {
    title: 'AMR Awareness Week Logo',
    link: 'https://drive.google.com/file/d/1mR_0jeu1U-erzvI7XlPfskC_N_2ObOOU/view?usp=drive_link',
  },
  {
    title: 'AMR Awareness Week Logo',
    link: 'https://drive.google.com/file/d/1mR_0jeu1U-erzvI7XlPfskC_N_2ObOOU/view?usp=drive_link',
  },
  {
    title: 'AMR Awareness Week Logo',
    link: 'https://drive.google.com/file/d/1mR_0jeu1U-erzvI7XlPfskC_N_2ObOOU/view?usp=drive_link',
  },
  {
    title: 'AMR Awareness Week Logo',
    link: 'https://drive.google.com/file/d/1mR_0jeu1U-erzvI7XlPfskC_N_2ObOOU/view?usp=drive_link',
  },
];

const data2 = [
  {
    title: 'Proper Hand Hygiene video',
    link: 'https://youtu.be/cLZi4SkTKZ4?si=NBsmJT_Af4FtA_xx',
  },
  {
    title: "Personal Protective Equipment's Video",
    link: 'https://youtu.be/D5i8ZeBVAzM?si=t1H7J31e_gbSMzh0',
  },
  {
    title: 'Put on N95 Respirator ',
    link: 'https://youtu.be/zNV6dK6Y-Ek?si=1uTr58UpXCQkNjBp',
  },
  {
    title: 'Remove the N95 Respirator',
    link: 'https://youtu.be/Z9Pk-YqUqjc?si=mXvd2D9mj4DMhJu7',
  },
  {
    title: 'How To Use PAPR Machine? Donning, Doffing',
    link: 'https://youtu.be/fCYXqLy_kZA?si=jGepORtREmhaqH2x',
  },
  {
    title: 'Surgical Scrubbing Instructions for Clinical Staff',
    link: 'https://youtu.be/sC9vpZLLLLI?si=b-QjnwXahAvDP3aX',
  },
  {
    title: 'Biohazard Spill Kits for Infection Control - Procedure Training',
    link: 'https://youtu.be/_wq1QfL4sb0?si=0ZPExy3HRgDOnGQZ',
  },
  {
    title: 'Candida Auris Screening Procedure',
    link: 'https://youtu.be/JbD2LxMWo1c?si=yhd-Qq6_12Z96M51',
  },
];

const HealthcareSelector = ({ handleSelectQuestion }) => {
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState(null);
  const [modelOpened, setModelOpened] = useState(false);
  const [selectedGuidance, setSelectedGuidance] = useState([]);

  const prompts = [
    {
      id: 1,
      title: 'WAAW AMR',
      description: 'What is Antimicrobial Resistance (AMR)?',
    },
    {
      id: 2,
      title: 'WAAW AMR',
      description: 'What is the role of Infection Prevention in combating AMR?',
    },
    // {
    //     id: 3,
    //     title: "WAAW AMR",
    //     description: "What are AMR Awareness & Guidance Resources?",
    // },
    // {
    //     id: 4,
    //     title: "WAAW AMR",
    //     description: "What are the standard Infection Prevention and Control (IPC) precautions?",
    // }
  ];

  const handleCardClick = (e, prompt) => {
    setSelectedCard(prompt?.id === selectedCard ? null : prompt?.id);
    handleSelectQuestion(e, prompt);
  };

  const handleModalOpened = (data) => {
    setModelOpened(true);
    setSelectedGuidance(data);
  };
  const handleModalClosed = () => {
    setModelOpened(false);
  };

  return (
    <>
      <div className="w-full my-5">
        <div className="grid grid-cols-2 gap-4">
          {prompts.map((prompt) => (
            <div
              key={prompt.id}
              onClick={(e) => handleCardClick(e, prompt)}
              className={`
            rounded-lg border p-6
            cursor-pointer
            transition-all duration-200
            hover:shadow-lg
            ${
              selectedCard === prompt.id
                ? 'bg-blue-50 border-[#1d3b70]'
                : 'bg-white hover:bg-gray-50 border-gray-200'
            }
          `}
            >
              <div className="">
                <p className="text-md font-semibold text-center text-gray-600 cursor-pointer">
                  {prompt.description}
                </p>
              </div>
            </div>
          ))}
          {/* extra should be edit again */}
          <div
            onClick={(e) => handleModalOpened(data1)}
            className={`
            rounded-lg border p-6
            cursor-pointer
            transition-all duration-200
            hover:shadow-lg border-[#00b0e0]
            flex
            items-center
          `}
          >
            <div className="space-y-2">
              <p className="text-md text-[#1d3b70] cursor-pointer font-bold text-center">
                What are AMR Awareness & Guidance Resources?
              </p>
            </div>
          </div>
          <div
            className={`
            rounded-lg border p-6
            transition-all duration-200
            hover:shadow-lg border-[#00b0e0]
            flex
            items-center
          `}
            onClick={(e) => handleModalOpened(data2)}
          >
            <div className="space-y-2">
              <p className="text-md text-[#1d3b70] cursor-pointer font-bold text-center">
                What are the standard Infection Prevention and Control (IPC)
                precautions?
              </p>
            </div>
          </div>
        </div>
      </div>
      <GuidancePopup
        data={selectedGuidance}
        setIsOpen={setModelOpened}
        isOpen={modelOpened}
      />
    </>
  );
};

export default HealthcareSelector;
