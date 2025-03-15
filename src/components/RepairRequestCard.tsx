import React from 'react';
import { MapPin, Clock } from 'lucide-react';

interface RepairRequestCardProps {
  image: string;
  title: string;
  category: string;
  budget: string;
  location: string;
  urgency: string;
}

function RepairRequestCard({ image, title, category, budget, location, urgency }: RepairRequestCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="h-48 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{urgency}</span>
        </div>
        <div className="text-lg font-semibold text-emerald-600">{budget}</div>
      </div>
    </div>
  );
}

export default RepairRequestCard;