import React, { useState } from 'react';
import { Search as SearchIcon, Filter, MessageCircle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UsedItem {
  id: string;
  title: string;
  image: string;
  price: string;
  seller: {
    name: string;
    image: string;
  };
  description: string;
  condition: string;
}

function UsedItemSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const usedItems: UsedItem[] = [
    {
      id: '1',
      title: "アンティークテーブル",
      image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc",
      price: "¥15,000",
      seller: {
        name: "山田 家具店",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      description: "使用期間3年。傷や汚れは少なめです。",
      condition: "良好"
    },
    {
      id: '2',
      title: "ヴィンテージ食器セット",
      image: "https://images.unsplash.com/photo-1517705008128-361805f42e86",
      price: "¥8,000",
      seller: {
        name: "佐藤 古物商",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      description: "昭和時代の食器セット。状態は良好です。",
      condition: "良好"
    },
    {
      id: '3',
      title: "レトロカメラ",
      image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848",
      price: "¥12,000",
      seller: {
        name: "高橋 カメラ",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
      },
      description: "動作確認済み。レトロな雰囲気が魅力です。",
      condition: "動作確認済"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-emerald-50 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">不用品検索</h1>
          
          <div className="mb-8">
            <div className="flex gap-4 items-center">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="キーワードで検索..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
                <SearchIcon className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              </div>
              <button className="btn btn-secondary flex items-center gap-2">
                <Filter className="w-5 h-5" />
                詳細検索
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usedItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm hover:bg-gray-50">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={item.seller.image} alt={item.seller.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.seller.name}</h3>
                      <p className="text-sm text-gray-500">出品者</p>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                      {item.condition}
                    </span>
                    <div className="text-xl font-bold text-emerald-600">{item.price}</div>
                  </div>
                  <Link
                    to={`/chat/${item.id}`}
                    className="w-full btn btn-primary flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    出品者に連絡
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsedItemSearch;