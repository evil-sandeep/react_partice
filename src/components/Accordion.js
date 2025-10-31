import React, { useState } from "react";

const Accordion = () => {
  const data = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      title: "What is useState?",
      content: "useState is a Hook that lets you add state to functional components.",
    },
    {
      title: "What is JSX?",
      content: "JSX is a syntax extension for JavaScript used with React.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-96 mx-auto mt-10 border rounded-lg shadow-lg">
      {data.map((item, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left p-3 font-semibold flex justify-between items-center"
          >
            {item.title}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>

          {openIndex === index && (
            <div className="p-3 text-gray-700 bg-gray-50">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
