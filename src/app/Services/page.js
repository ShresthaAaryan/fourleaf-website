// pages/services.tsx
import React from 'react';

const services = [
  {
    title: 'Client Servicing & Counselling',
    description: `One of our key functions is to provide information to the clients through our information centre. We set up information sessions for the clients through our team of experts to provide in-depth information including entry requirements, course options, and cost involved. One to one interaction is an important part of our lead conversion process.`,
  },
  {
    title: 'Social Media and Email Marketing + Content, SEO, Google Ads',
    description: `We work closely with our clients to understand their marketing goals and objectives and run targeted ad campaigns. This includes campaigns on social media, content marketing, SEO, Google ads and mass email campaigns to promote colleges and courses.`,
  },
  {
    title: 'Lead Generation and Conversion',
    description: `Our targeted marketing campaigns help to generate high quality leads at a lower cost. The leads are carefully assisted in different levels throughout the sales funnel. From the first contact, we guide them through the application process, provide relevant course options and promote your institution. Over the years we have been able to achieve a conversion rate of 30% on average.`,
  },
  {
    title: 'Accounting',
    description: `The accounting team manages the bookkeeping for the businesses. We communicate closely with your accounts department to verify and maintain the records of all the transactions. Further, we track the fee.`,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-center text-green-400 mb-12">
          Our Services
        </h1>
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-green-400 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
