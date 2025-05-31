'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import GuidancePopup from './GuidancePopup';

const data1 = [
  {
    title: 'ICA for Permenant Hospitals',
    link: '',
  },
  {
    title: 'CEBAHI for Permanent Hospitals.',
    link: '',
  },
  {
    title: 'CEBAHI for Seasonal Hospitals',
    link: '',
  },
  // {
  //   title: 'WAAW Campaign guide',
  //   link: 'https://drive.google.com/file/d/1aSS0V9Gs-SqCHu9oZV_CYHmnPoO_Hdup/view?usp=drive_link',
  // },
  // {
  //   title: 'المحتوى التوعوي بمكافحة مقاومة مضادات الميكروبات 2024',
  //   link: 'https://docs.google.com/document/d/1-a2AQgz17sOpelh7-BGC37Ap0RENYNM7/edit?usp=drive_link&ouid=108223022301349105528&rtpof=true&sd=true',
  // },
  // {
  //   title: 'تفعيل حملة الأسبوع العالمي لمقاومة مضادات الميكروبات',
  //   link: 'https://drive.google.com/file/d/1ReE2KU8tNsOQah0UcLkEhCN13CYrIV2p/view?usp=drive_link',
  // },
  // {
  //   title: 'Antibiotic Infographic ',
  //   link: 'https://drive.google.com/file/d/1Tq6QxgMovjK4zPUBKLBlLz-2eYV3cUO1/view?usp=drive_link',
  // },
  // {
  //   title: 'CDC',
  //   link: 'https://drive.google.com/file/d/1OmEPgw0t2v0FSGLMq9d9ZK3FDNi2n6yR/view?usp=drive_link',
  // },
  // {
  //   title: 'Dentists',
  //   link: 'https://drive.google.com/file/d/1uFXS6wm9wEzXEP_sv4w3Gwv0JMhkSXAA/view?usp=drive_link',
  // },
  // {
  //   title: 'Doctors',
  //   link: 'https://drive.google.com/file/d/1-e-RCyBLbdh60f4IpU_Sn4nSPERRsl7_/view?usp=drive_link',
  // },
  // {
  //   title: 'Health workers',
  //   link: 'https://drive.google.com/file/d/1LsiRB3Tjj2ibumZlGelZVFPfa75IT28m/view?usp=drive_link',
  // },
  // {
  //   title: 'Managers',
  //   link: 'https://drive.google.com/file/d/11c8w6y-wn9d4vyg72eJuAkESln-KBFd7/view?usp=drive_link',
  // },
  // {
  //   title: 'Midwives',
  //   link: 'https://drive.google.com/file/d/1OlgxMAVPIFutTAXWwTF91bzy7kB2W05T/view?usp=drive_link',
  // },
  // {
  //   title: 'Misuse of antibiotics',
  //   link: 'https://drive.google.com/file/d/1hpPocUMF7Bj945Zmgsh7WPpckk6mskRO/view?usp=drive_link',
  // },

  // {
  //   title: 'Pharmacists ',
  //   link: 'https://drive.google.com/file/d/1G7jG1hCJveOi-2anLfYIvywA_nL5PUTk/view?usp=drive_link',
  // },
  // {
  //   title: 'Time running out',
  //   link: 'https://drive.google.com/file/d/1vD85gKp7A3ILpwNCWg1BcLO6znH7wNJN/view?usp=drive_link',
  // },
  // {
  //   title: '2024 رابط محتوى علمي وتوعوي داعم للحملة من منظمة الصحة العالمية',
  //   link: 'https://docs.google.com/document/d/1DAx72LVASCJBWOcQ8nm2r7s3OwPSh8XH/edit?usp=drive_link&ouid=108223022301349105528&rtpof=true&sd=true',
  // },
  // {
  //   title: 'سمعتوا وش يقولون عن المضادات الحيوية ',
  //   link: 'https://drive.google.com/file/d/1fl9C7pMXp7CMful91OlVyCW7tSHbxUiX/view?usp=drive_link',
  // },
  // {
  //   title: 'كتيب تلوين للأطفال',
  //   link: 'https://drive.google.com/file/d/1mBmvRHsRsVe7WoQJ2jXC5XcWNDIZq8yZ/view?usp=drive_link',
  // },
  // {
  //   title: '',
  //   link: '',
  // },
  // {
  //   title: '',
  //   link: '',
  // },
];

const data2 = [
  {
    title: 'HAND HYGIENE (HH)',
    link: '',
  },
  {
    title: 'PERSONAL PROTECTIVE EQUIPMENT (PPE)',
    link: '',
  },
  {
    title: 'BIOLOGICAL SPILL MANAGEMENT',
    link: '',
  },
  {
    title: 'SHARP INJURIES / NEEDLE STICK INJURIES (NSI) MANAGEMENT',
    link: '',
  },
  {
    title: 'TRANSMISSION BASED PRECAUTIONS',
    link: '',
  },
  {
    title: 'RESPIRATOR FIT TEST',
    link: '',
  },
  {
    title: 'POWERED AIR PURIFYING RESPIRATOR (PAPR)',
    link: '',
  },
  {
    title: 'Candida Auris Screening Procedure',
    link: '',
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
          {/* {prompts.map((prompt) => (
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
                ? 'bg-blue-50 border-[#0CAFB8]'
                : 'bg-white hover:bg-gray-50 border-gray-200'
            }
          `}
            >
              <div className="">
                <p className="text-md font-semibold text-center text-[#0CAFB8] cursor-pointer">
                  {prompt.description}
                </p>
              </div>
            </div>
          ))} */}

          <div
            onClick={(e) => handleModalOpened(data1)}
            className={`
            rounded-lg border p-6
            cursor-pointer
            transition-all duration-200
            hover:shadow-lg bg-[#0CAFB8]
            flex
            items-center
          `}
          >
            <div className="space-y-2">
              <p className="text-md text-white cursor-pointer font-semibold text-center">
                Standards & Requirements for Infection Control in Healthcare
                Facilities
              </p>
            </div>
          </div>
          <div
            className={`
            rounded-lg border p-6
            transition-all duration-200
            hover:shadow-lg bg-[#0CAFB8]
            flex
            items-center
          `}
            onClick={(e) => handleModalOpened(data2)}
          >
            <div className="space-y-2">
              <p className="text-md text-white cursor-pointer font-semibold text-center">
                Basic Infection Control Skills Liscence
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
