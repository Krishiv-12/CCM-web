import React from 'react';
import { FaCode, FaBullhorn, FaChartBar, FaDrawPolygon } from 'react-icons/fa';

const cards = [
  {
    icon: <FaCode className="text-4xl text-pink-600" />,
    title: 'I Need to Revamp My Website',
    desc: "An outdated website can deter visitors and harm your brand's credibility. We specialize in creating visually appealing and user-friendly modern websites that keep your audience engaged and impressed.",
  },
  {
    icon: <FaDrawPolygon className="text-4xl text-orange-500" />,
    title: 'I Want to Build My Brand',
    desc: "Your brand is more than just a logo or a color scheme—it's the perception that customers have of your company. We’ll help you create a strong, memorable brand identity that sets you apart from the competition.",
  },
  {
    icon: <FaChartBar className="text-4xl text-green-500" />,
    title: 'I’d Like to Generate More Traffic',
    desc: "A website that isn't generating traffic is missing out on valuable potential customers. We'll improve your website's visibility and boost your search engine rankings to ensure your online presence thrives.",
  },
  {
    icon: <FaBullhorn className="text-4xl text-purple-600" />,
    title: 'I Want to Engage My Audience',
    desc: "Building a loyal audience requires meaningful interactions. We'll develop custom content strategies and engagement tactics that resonate with your audience and will keep them coming back for more.",
  },
];

function Page3() {
  return (
    <div className="bg-white px-4 py-12 md:px-12">
      <div className="text-center max-w-3xl mx-auto">
        <h4 className="text-blue-600 font-semibold text-sm uppercase">Digital Marketing Goals</h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">What’s Your End Game?</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Our results-driven campaigns are infused with creativity and designed to address your pain points,
          optimize your strategy, and meet your digital marketing goals. No matter what your company is up against
          in the digital domain, we’re up for the challenge.
        </p>
      </div>

      <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="font-bold text-lg text-[#001135] mb-2">{card.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{card.desc}</p>
            <span className="font-semibold text-sm text-[#001135]">EXPLORE:</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page3;
