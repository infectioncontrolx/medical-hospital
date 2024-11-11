"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const HealthcareSelector = ({handleSelectQuestion}) => {
    const router = useRouter();
    const [selectedCard, setSelectedCard] = useState(null);

    const prompts = [
        {
            id: 1,
            title: "Symptoms Guide",
            description: "What are common symptoms of flu vs cold?",
        },
        {
            id: 2,
            title: "Medications",
            description: "How do antibiotics work in the body?",
        },
        {
            id: 3,
            title: "Heart Health",
            description: "What are ways to maintain heart health?",
        },
        {
            id: 4,
            title: "Mental Health",
            description: "How to manage stress and anxiety?",
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
                            <h3 className="text-lg font-semibold text-gray-900">
                                {prompt.title}
                            </h3>
                            <p className="text-sm text-gray-600">
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
