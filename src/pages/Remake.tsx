import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface RemakeItem {
  id: string;
  title: string;
  image: string;
  price: string;
  artist: string;
  artistImage: string;
  description: string;
  materials: string[];
  likes: number;
}

function Remake() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<RemakeItem | null>(null);

  const remakeItems: RemakeItem[] = [
    {
      id: '1',
      title: "デニムリメイクバッグ",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363",
      price: "¥12,800",
      artist: "佐藤 クラフト",
      artistImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      description: "古いデニムジーンズをアップサイクルして作られたユニークなトートバッグ。内側には防水加工を施し、実用性も兼ね備えています。",
      materials: ["古着デニム", "レザー", "真鍮金具"],
      likes: 124
    },
    {
      id: '2',
      title: "ガラス瓶ペンダントライト",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15",
      price: "¥15,600",
      artist: "田中 ガラス工房",
      artistImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description: "使用済みのワインボトルを再利用して作られたペンダントライト。一点物のデザインで、温かみのある光を演出します。",
      materials: ["リサイクルガラス", "真鍮", "LED照明"],
      likes: 89
    },
    {
      id: '3',
      title: "木材モザイクテーブル",
      image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc",
      price: "¥45,000",
      artist: "木村 家具工房",
      artistImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      description: "廃材を組み合わせて作られたモザイク模様のコーヒーテーブル。様々な木材の色合いが美しいアート作品のような仕上がりです。",
      materials: ["リサイクル木材", "エポキシ樹脂", "スチール脚"],
      likes: 156
    }
  ];

  const handleContact = (sellerId: string) => {
    navigate(`/chat/${sellerId}`);
  };

  const handlePurchase = (item: RemakeItem) => {
    navigate('/payment', { state: { item } });
  };

  return (
    <div className="pt-16">
      <div className="bg-emerald-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">リメイク作品ギャラリー</h1>
          <p className="text-gray-600 mb-8">職人たちによって新しい命を吹き込まれた、唯一無二のアート作品をご覧ください。</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remakeItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={item.artistImage} alt={item.artist} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.artist}</h3>
                      <p className="text-sm text-gray-500">リメイクアーティスト</p>
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                  <p className="text-gray-600 mb-4">{item.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">使用素材：</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.materials.map((material, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-emerald-600">{item.price}</div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Heart className="w-5 h-5" />
                      <span>{item.likes}</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => handleContact(item.id)}
                      className="flex-1 btn btn-secondary flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      作家に連絡
                    </button>
                    <button
                      onClick={() => handlePurchase(item)}
                      className="flex-1 btn btn-primary"
                    >
                      購入する
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Remake;