import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <Link to={link} className="block">
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

export default ServiceCard;