// pages/services.tsx
import React from 'react';
import Footer from "@/components/footer/Footer";

const services = [
  {
    title: '1. Social Media & Email Marketing ',
    description: (
      <>
        We collaborate closely with clients to understand their marketing goals and develop tailored strategies to reach their target audience. Our social media and email marketing services are designed to build brand awareness and engage potential clients. Through targeted social media campaigns across major platforms, we create engaging posts, visuals, and interactive content to keep audiences connected and informed.
        <br /><br />
        Our email marketing campaigns deliver personalized updates and promotions directly to clients’ inboxes, fostering strong connections and driving conversions. This direct communication helps our clients stay engaged with their audience, ensuring their message resonates and leads to meaningful interactions.
      </>
    ),
  },
  {
    title: '2. Client Servicing & Counselling ',
    description: (
      <>
        One of our key functions is to provide comprehensive information to clients through our information center. We organize informative sessions led by our team of experts. These sessions are tailored to address individual concerns, helping clients understand the necessary steps for a smooth transition.
        <br /><br />
        Our approach emphasizes one-on-one interaction. This personalized engagement allows us to respond to unique questions, offer customized advice, and build trust, ensuring clients feel supported and confident in their decision-making process.
      </>
    ),
  },
  {
    title: '3. Content Writing, SEO, & Google Ads ',
    description: (
      <>
        We leverage content marketing, SEO, and Google Ads to ensure our clients’ visibility in the digital landscape. Our content team develops high-quality, relevant materials that resonate with audiences while aligning with clients’ marketing objectives. This includes blog posts, articles, and other resources that provide value and encourage client engagement.
        <br /><br />
        SEO practices are applied to boost organic reach and ensure our clients’ offerings rank highly in search results. Additionally, our targeted Google Ads campaigns help attract a broader audience by strategically placing ads in front of those most likely to benefit from our clients’ services.
      </>
    ),
  },
  {
    title: '4. Lead Generation and Conversion',
    description: (
      <>
        Our targeted marketing campaigns are crafted to generate high-quality leads at a lower cost, maximizing return on investment. Once a lead is engaged, our team provides step-by-step guidance through the sales funnel, from initial contact to application assistance. We offer personalized support and tailored recommendations, ensuring leads feel informed and supported throughout their journey.
        <br /><br />
        This approach has helped us achieve an impressive conversion rate, reflecting our commitment to effective, value-driven lead nurturing and client satisfaction.
      </>
    ),
  },
  {
    title: '5. Accounting',
    description: (
      <>
        Our accounting team provides comprehensive bookkeeping services to ensure accurate and organized financial records. We work closely with your accounts department to review and verify all transaction records, ensuring consistency and transparency across your financial operations. This collaborative approach allows us to identify discrepancies early, maintain up-to-date records, and ensure compliance with financial standards.
      </>
    ),
  },
];

export default function Services () {
  return (
    <>
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto py-12">
        <h1 className="text-5xl font-bold text-center text-green-700 mb-12">
          Our Services
        </h1>
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-green-700 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};


