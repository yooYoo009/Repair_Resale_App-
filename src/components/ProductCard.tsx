import React from 'react';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  condition: string;
  description: string;
}

function ProductCard({ image, title, price, condition, description }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="h-48 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm hover:bg-gray-50">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
        <span className="absolute top-3 left-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          {condition}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="text-xl font-bold text-emerald-600">{price}</div>
      </div>
    </div>
  );
}

export default ProductCard;