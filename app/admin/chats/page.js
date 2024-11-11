// /* eslint-disable react-hooks/exhaustive-deps */
// 'use client';
// import Loader from '@/components/Shared/Loader';
// import { Parser } from 'json2csv';
// import moment from 'moment';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import Paginate from '../../../components/Paginate/Paginate';
// import { isValidArray } from '../../../lib/func';
// import API from '../../../lib/instance/instance';

// const Chats = () => {
//   const [isReq, setIsReq] = useState(false);
//   const [chats, setChats] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);
//   const limit = 10;
//   const currentLanguage = useSelector(
//     (state) => state.language.currentLanguage
//   );
//   const fetchChats = async (page) => {
//     try {
//       setIsReq(true);
//       const res = await API.get(
//         `/api/chat?lang=${currentLanguage}&page=${page || 1}&limit=${limit}`
//       );
//       console.log(res.data.data, 'result chats');
//       if (res.data?.success) {
//         setChats(res?.data);
//       }
//       setIsReq(false);
//     } catch (error) {
//       setIsReq(false);
//     }
//   };

//   useEffect(() => {
//     fetchChats(1);
//   }, [currentLanguage]);

//   const onPageChange = async (page) => {
//     setCurrentPage(page);
//     await fetchChats(page);
//   };

//   const downloadCSV = () => {
//     if (isValidArray(chats?.data)) {
//       const fields = ['InputText', 'Lang', 'CreatedAt'];
//       const json2csvParser = new Parser({ fields });
//       const csv = json2csvParser.parse(
//         chats.data.map((chat) => ({
//           ...chat,
//           createdAt: moment(chat.createdAt).format('MMMM Do YYYY, h:mm:ss a'),
//         }))
//       );

//       const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.setAttribute('href', url);
//       link.setAttribute('download', 'feedbacks.csv');
//       link.style.visibility = 'hidden';
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//   };

//   return (
//     <div className="pb-10">
//       <div className="flex items-center justify-between gap-4">
//         <h2 className="p-4 text-2xl font-bold font-inter">All Chats</h2>
//         <button
//           onClick={downloadCSV}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md mr-6"
//         >
//           Download CSV
//         </button>
//       </div>
//       <ul className="w-full lg:w-[600px] mx-auto" id="feedback-paginate">
//         {!isReq &&
//           isValidArray(chats?.data) &&
//           chats.data.map((chat, index) => (
//             <li key={index} className="border p-4 mt-3 rounded-md">
//               <div>
//                 <p>
//                   <span className="font-bold">Input Text:</span>{' '}
//                   {chat.inputText}{' '}
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   <span className="font-bold">Lang:</span> {chat?.lang}{' '}
//                 </p>
//               </div>

//               <p>
//                 <strong>Date:</strong>{' '}
//                 <span className="text-gray-400">
//                   {' '}
//                   {moment(chat.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
//                 </span>
//               </p>
//             </li>
//           ))}

//         {isReq && (
//           <div className="flex items-center justify-center">
//             <Loader />
//           </div>
//         )}
//       </ul>
//       <div className="py-3">
//         <Paginate
//           setCurrentPage={setCurrentPage}
//           totalPages={chats?.paginate?.totalPage}
//           currentPage={currentPage}
//           onPageChange={onPageChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default Chats;

/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Loader from '@/components/Shared/Loader';
import { Parser } from 'json2csv';

import moment from 'moment';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Paginate from '../../../components/Paginate/Paginate';
import { isValidArray } from '../../../lib/func';
import API from '../../../lib/instance/instance';

const Chats = () => {
  const [isReq, setIsReq] = useState(false);
  const [chats, setChats] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const fetchChats = async (page) => {
    try {
      setIsReq(true);
      const res = await API.get(
        `/api/chat?lang=${currentLanguage}&page=${page || 1}&limit=${limit}`
      );
      console.log(res.data.data, 'result chats');
      if (res.data?.success) {
        setChats(res?.data);
      }
      setIsReq(false);
    } catch (error) {
      setIsReq(false);
    }
  };

  useEffect(() => {
    fetchChats(1);
  }, [currentLanguage]);

  const onPageChange = async (page) => {
    setCurrentPage(page);
    await fetchChats(page);
  };

  const downloadCSV = () => {
    if (isValidArray(chats?.data)) {
      const fields = ['InputText', 'Lang', 'CreatedAt'];
      const json2csvParser = new Parser({ fields });
      const csv = json2csvParser.parse(
        chats.data.map((chat) => ({
          InputText: chat.inputText,
          Lang: chat.lang,
          CreatedAt: moment(chat.createdAt).format('MMMM Do YYYY, h:mm:ss a'),
        }))
      );

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'chats.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="pb-10">
      <div className="flex items-center justify-between gap-4">
        <h2 className="p-4 text-2xl font-bold font-inter">All input:</h2>
        <button
          onClick={downloadCSV}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-6"
        >
          Download CSV
        </button>
      </div>
      <ul className="w-full lg:w-[600px] mx-auto" id="feedback-paginate">
        {!isReq &&
          isValidArray(chats?.data) &&
          chats.data.map((chat, index) => (
            <li key={index} className="border p-4 mt-3 rounded-md">
              <div>
                <p>
                  <span className="font-bold">Input Text:</span>{' '}
                  {chat.inputText}{' '}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">Lang:</span> {chat?.lang}{' '}
                </p>
              </div>

              <p>
                <strong>Date:</strong>{' '}
                <span className="text-gray-400">
                  {' '}
                  {moment(chat.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                </span>
              </p>
            </li>
          ))}

        {isReq && (
          <div className="flex items-center justify-center">
            <Loader />
          </div>
        )}
      </ul>
      <div className="py-3">
        <Paginate
          setCurrentPage={setCurrentPage}
          totalPages={chats?.paginate?.totalPage}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Chats;
