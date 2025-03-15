import React, { useState } from 'react';
import { Search as SearchIcon, Filter, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RepairRequest {
  id: string;
  title: string;
  image: string;
  category: string;
  budget: string;
  location: string;
  urgency: string;
  requester: {
    name: string;
    image: string;
  };
  description: string;
}

function RepairRequestSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'electronics', name: '電化製品' },
    { id: 'furniture', name: '家具' },
    { id: 'clothing', name: '衣類' },
    { id: 'accessories', name: 'アクセサリー' }
  ];

  const repairRequests: RepairRequest[] = [
    {
      id: '1',
      title: "ヴィンテージ時計の修理",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
      category: "アクセサリー",
      budget: "¥10,000 - ¥15,000",
      location: "東京都渋谷区",
      urgency: "通常",
      requester: {
        name: "田中 一郎",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      description: "祖父から譲り受けた懐中時計の修理をお願いしたいです。"
    },
    {
      id: '2',
      title: "アンティークチェアの張り替え",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237",
      category: "家具",
      budget: "¥20,000 - ¥30,000",
      location: "東京都新宿区",
      urgency: "急ぎ",
      requester: {
        name: "佐藤 美咲",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
      },
      description: "アンティークチェアの座面と背もたれの張り替えをお願いします。"
    },
    {
      id: '3',
      title: "ヴィンテージバッグの修復",
      image: "https://images.unsplash.com/photo-1524498250077-390f9e378fc0",
      category: "アクセサリー",
      budget: "¥15,000 - ¥25,000",
      location: "東京都目黒区",
      urgency: "通常",
      requester: {
        name: "鈴木 花子",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
      },
      description: "ブランドのヴィンテージバッグの修復をお願いしたいです。"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-emerald-50 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">修理依頼を探す</h1>
          
          <div className="mb-8">
            <div className="flex gap-4 items-center mb-6">
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

            <div className="flex gap-4 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairRequests.map((request) => (
              <div key={request.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative">
                  <img src={request.image} alt={request.title} className="w-full h-48 object-cover" />
                  <span className="absolute top-3 left-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {request.category}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={request.requester.image} alt={request.requester.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{request.requester.name}</h3>
                      <p className="text-sm text-gray-500">依頼者</p>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{request.title}</h2>
                  <p className="text-gray-600 mb-4">{request.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{request.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">希望：{request.urgency}</span>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-emerald-600 mb-4">{request.budget}</div>
                  <Link
                    to={`/chat/${request.id}`}
                    className="w-full btn btn-primary flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    依頼者に連絡
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

export default RepairRequestSearch;