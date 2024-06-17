import { useState, useRef, useEffect } from 'react';

import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { FAQ } from '../../constants/FaqData.constant';
interface AccordionProps {
  faqs: FAQ[];
}

const Accordion: React.FC<AccordionProps> = ({ faqs: faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [height, setHeight] = useState<number>(0);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
      setHeight(0);
    } else {
      setOpenIndex(index);
      setHeight(contentRefs.current[index]?.scrollHeight || 0);
    }
  };

  useEffect(() => {
    if (openIndex !== null) {
      setHeight(contentRefs.current[openIndex]?.scrollHeight || 0);
    }
  }, [openIndex]);

  return (
    <div className="flex flex-col items-center justify-center mx-4 mb-4 ">
      <div className="font-bold text-4xl">
        Frequently Asked Questions
        <span className=" font-normal"> (FAQ)</span>
      </div>
      <div className="w-full max-w-2xl mx-auto p-4">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className={`rounded-lg ${
                openIndex === index
                  ? 'border border-indigo-500 bg-black'
                  : 'null'
              }`}
            >
              <button
                className={`w-full text-left p-4 ${
                  openIndex === index
                    ? 'bg-black text-white rounded-t-lg'
                    : 'bg-gray-100 text-black rounded-lg border border-gray-200'
                }`}
                onClick={() => handleToggle(index)}
              >
                <span className="flex justify-between items-center">
                  {faq.question}
                  <span className="text-xl">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </span>
              </button>
              <div
                ref={el => (contentRefs.current[index] = el)}
                style={{
                  height: openIndex === index ? `${height}px` : '0px',
                  transition: 'height 0.5s ease-in-out',
                }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-black text-white border-t border-indigo-500 rounded-b-lg">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
