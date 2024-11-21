'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import GuidancePopup from './GuidancePopup';


const data1 = [
    {
        title: 'What are the standard Infection Prevention and Control (IPC) precautions?',
        link: 'https://drive.google.com/file/d/1mR_0jeu1U-erzvI7XlPfskC_N_2ObOOU/view?usp=drive_link',
    },
    {
        title: 'What are the standard Infection Prevention and Control (IPC) precautions?',
        link: 'https://drive.google.com/file/d/1mR_0jeu1U-erzvI7XlPfskC_N_2ObOOU/view?usp=drive_link',
    },
    {
        title: 'What are the standard Infection Prevention and Control (IPC) precautions?',
        link: 'https://drive.google.com/file/d/1mR_0jeu1U-erzvI7XlPfskC_N_2ObOOU/view?usp=drive_link',
    },
    {
        title: 'What are the standard Infection Prevention and Control (IPC) precautions?',
        link: 'https://drive.google.com/file/d/1mR_0jeu1U-erzvI7XlPfskC_N_2ObOOU/view?usp=drive_link',
    },
    {
        title: 'What are the standard Infection Prevention and Control (IPC) precautions?',
        link: 'https://drive.google.com/file/d/1mR_0jeu1U-erzvI7XlPfskC_N_2ObOOU/view?usp=drive_link',
    },
]


const data2 = [
    {
        title: 'What are the standard Infection Prevention and Control (IPC) precautions?',
        link: 'https://drive.google.com/file/d/1mR_0jeu1U-erzvI7XlPfskC_N_2ObOOU/view?usp=drive_link',
    },
    {
        title: 'What are the standard Infection Prevention and Control (IPC) precautions?',
        link: 'https://drive.google.com/file/d/1mR_0jeu1U-erzvI7XlPfskC_N_2ObOOU/view?usp=drive_link',
    },
    {
        title: 'What are the standard Infection Prevention and Control (IPC) precautions?',
        link: 'https://drive.google.com/file/d/1mR_0jeu1U-erzvI7XlPfskC_N_2ObOOU/view?usp=drive_link',
    },
    {
        title: 'What are the standard Infection Prevention and Control (IPC) precautions?',
        link: 'https://drive.google.com/file/d/1mR_0jeu1U-erzvI7XlPfskC_N_2ObOOU/view?usp=drive_link',
    },
    {
        title: 'What are the standard Infection Prevention and Control (IPC) precautions?',
        link: 'https://drive.google.com/file/d/1mR_0jeu1U-erzvI7XlPfskC_N_2ObOOU/view?usp=drive_link',
    },
]

const HealthcareSelector = ({ handleSelectQuestion }) => {
    const router = useRouter();
    const [selectedCard, setSelectedCard] = useState(null);
    const [modelOpened, setModelOpened] = useState(true);
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
    }
    const handleModalClosed = () => {
        setModelOpened(false);
    }

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
            ${selectedCard === prompt.id
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
            <GuidancePopup data={selectedGuidance} setIsOpen={setModelOpened} isOpen={modelOpened} />
        </>
    );
};

export default HealthcareSelector;
