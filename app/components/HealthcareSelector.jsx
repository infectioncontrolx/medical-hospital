"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const HealthcareSelector = ({handleSelectQuestion}) => {
    const router = useRouter();
    const [selectedCard, setSelectedCard] = useState(null);

    const prompts = [
        {
            id: 1,
            title: "WAAW ARM",
            description: "What are antimicrobial agents and antibiotics?",
        },
        {
            id: 2,
            title: "WAAW ARM",
            description: "What are antimicrobial resistance bacteria?",
        },
        {
            id: 3,
            title: "WAAW ARM",
            description: "What causes antimicrobial resistance?",
        },
        {
            id: 4,
            title: "WAAW ARM",
            description: "What are the consequences of AMR?",
        }
    ];


    const handleCardClick = (e, prompt) => {
        setSelectedCard(prompt?.id === selectedCard ? null : prompt?.id);
        handleSelectQuestion(e, prompt);
    };

    return (
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
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-gray-900 cursor-pointer">
                                {prompt.title}
                            </h3>
                            <p className="text-sm text-gray-600 cursor-pointer">
                                {prompt.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HealthcareSelector;
