import React from 'react';

const avatars = [

  { src: 'https://randomuser.me/api/portraits/men/10.jpg', position: 'top-2 left-64' },
  { src: 'https://randomuser.me/api/portraits/women/11.jpg', position: 'top-20 left-52' },
  { src: 'https://randomuser.me/api/portraits/men/12.jpg', position: 'top-40 left-72' },
  { src: 'https://randomuser.me/api/portraits/women/13.jpg', position: 'top-60 left-48' },
  { src: 'https://randomuser.me/api/portraits/men/14.jpg', position: 'bottom-36 left-64' },

  // Right side
  { src: 'https://randomuser.me/api/portraits/women/21.jpg', position: 'top-2 right-64' },
  { src: 'https://randomuser.me/api/portraits/men/22.jpg', position: 'top-20 right-52' },
  { src: 'https://randomuser.me/api/portraits/women/23.jpg', position: 'top-40 right-72' },
  { src: 'https://randomuser.me/api/portraits/men/24.jpg', position: 'top-60 right-48' },
  { src: 'https://randomuser.me/api/portraits/women/25.jpg', position: 'bottom-36 right-64' },
];

const Page5 = () => {
  return (
    <div className="relative bg-white overflow-hidden py-20 px-6 sm:px-10 md:px-20 text-center">

      {avatars.map((avatar, idx) => (
        <img
          key={idx}
          src={avatar.src}
          alt="avatar"
          className={`w-10 h-10 md:w-14 md:h-14 rounded-full object-cover absolute ${avatar.position} hidden sm:block`}
        />
      ))}


      <div className="relative z-10 max-w-2xl mx-auto">
        <img
          src="https://randomuser.me/api/portraits/men/20.jpg"
          alt="testimonial person"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <div className="text-4xl text-blue-500 mb-4">“</div>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          "As a small business owner, I needed a strong online presence but didn’t know where to start.
          Creative Click Media designed a beautiful website, optimized it for search engines, and set up a Google Ads campaign.
          They also provided guidance on social media & email marketing, helping me engage with customers.
          Thanks to their help, my coffee shop saw a significant increase in website & foot traffic. Highly recommend!"
        </p>
        <p className="mt-4 font-semibold text-blue-700">Mark Wentz, The Daily Grind</p>
      </div>
    </div>
  );
};

export default Page5;
