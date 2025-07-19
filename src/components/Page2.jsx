import React from 'react';

function Page2() {
  return (
    <div className="w-full min-h-screen bg-white px-4 py-8 flex flex-col lg:flex-row items-center lg:items-start gap-8">

      <div className="w-full lg:w-1/2">
        <img
          src="https://creativeclickmedia.com/wp-content/uploads/2024/11/full-service-digital-marketing-agency.webp"
          alt="Creative Click Media"
          className="w-full h-auto rounded-lg"
        />
      </div>

      <div className="w-full lg:w-1/2 space-y-4">
        <h3 className="text-blue-600 text-xl sm:text-2xl font-semibold">
          About Creative Click Media
        </h3>
        <h1 className="text-2xl sm:text-4xl font-bold">
          Your Partner for Success
        </h1>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Creative Click Media is a full-service digital marketing agency dedicated to helping businesses like yours thrive in today's competitive online marketplace. As leaders in SEO, web design, ecommerce, conversion rate optimization, and internet marketing services, we're committed to driving traffic, converting visitors, and delivering tangible results for our clients.
          <br /><br />
          Our full-service digital marketing solutions have helped hundreds of businesses in New Jersey and nationwide generate more leads, calls, and revenue, with an ever-expanding trophy cabinet to show for it.
          <br /><br />
          We're in the business of helping businesses like yours find success online, and we're committed to staying at the forefront of digital marketing innovation. Your journey to digital marketing success starts here. Contact Creative Click Media today to discover how our comprehensive digital marketing solutions can help you boost your bottom line and build your brand on the web and beyond.
        </p>
      </div>
    </div>
  );
}

export default Page2;
