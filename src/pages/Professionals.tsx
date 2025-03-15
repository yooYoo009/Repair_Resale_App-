import React from 'react';
import { Star, MapPin, PenTool as Tool } from 'lucide-react';

function Professionals() {
  const professionals = [
    {
      name: "田中 修理師",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      specialty: "電化製品",
      rating: 4.9,
      reviews: 156,
      location: "東京都渋谷区",
      description: "20年以上の経験を持つ家電修理のスペシャリスト。"
    },
    {
      name: "佐藤 匠",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      specialty: "家具",
      rating: 4.8,
      reviews: 98,
      location: "東京都新宿区",
      description: "伝統的な技術と現代的なアプローチを組み合わせた家具修理。"
    },
    {
      name: "鈴木 デザイナー",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      specialty: "衣類",
      rating: 4.7,
      reviews: 203,
      location: "東京都目黒区",
      description: "ファッションデザイナーとしての経験を活かした衣類の修理と リメイク。"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-emerald-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">修理のプロフェッショナル</h1>
          <p className="text-gray-600 mb-8">経験豊富な修理職人があなたの大切なものを蘇らせます。</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals.map((pro, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="h-48 relative">
                  <img src={pro.image} alt={pro.name} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {pro.specialty}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{pro.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{pro.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm">{pro.rating} ({pro.reviews}件のレビュー)</span>
                  </div>
                  <p className="text-gray-600 mb-4">{pro.description}</p>
                  <button className="w-full btn btn-primary">
                    依頼する
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professionals;