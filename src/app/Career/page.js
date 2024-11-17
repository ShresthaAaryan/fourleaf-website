// pages/careers.js
import React from 'react';

export default function Careers () {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
          Careers at Four Leaf Clover Pvt. Ltd.
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Join our dedicated team at Four Leaf Clover Pvt. Ltd. We are committed to providing exceptional business process outsourcing services to our clients and are always looking for talented individuals to help us achieve our goals.
        </p>

        <div className="my-12">
          <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
            Current Openings:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600">
                  <strong>Department:</strong> {job.department}
                </p>
                <p className="text-gray-600">
                  <strong>Supervisor:</strong> {job.supervisor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const jobOpenings = [
  {
    title: 'Client Servicing Officer',
    department: 'Client Servicing',
    supervisor: 'HOD: Operations',
  },
  {
    title: 'Human Resources Intern',
    department: 'Human Resources',
    supervisor: 'Human Resources Manager',
  },
  {
    title: 'Lead Conversion Specialist',
    department: 'Lead Conversion',
    supervisor: 'HOD: Lead Conversion',
  },
];