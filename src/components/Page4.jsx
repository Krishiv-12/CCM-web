import React, { useState } from 'react';

const faqs = [
  "Why is digital marketing important for my business?",
  "How does your digital marketing agency measure the impact of your campaigns?",
  "How long will I be locked into a contract?",
  "How much does digital marketing cost?",
  "How long does digital marketing take to see results?",
];

const Page4 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans px-10 py-8">
      

      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 md:p-10 text-white mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="text-sm font-semibold uppercase">Ready To Speak With A Marketing Expert? Give Us A Ring.</p>
          <h1 className="text-2xl md:text-4xl font-bold mt-2">Success is Just One Click Away.</h1>
          <p className="mt-1 text-lg font-semibold">877-361-8016</p>
        </div>
        <button className="bg-white text-blue-700 font-semibold py-2 px-4 rounded-md hover:bg-blue-100 transition">
          Request Proposal
        </button>
      </div>


      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Digital Marketing FAQs</h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((question, index) => (
            <div key={index} className="border rounded-md p-4 shadow-sm">
              <button
                className="w-full text-left font-medium text-gray-800 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {question}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm">
        
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, laborum!
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Page4;
