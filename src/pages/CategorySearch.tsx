import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ShoppingBag, Users, Palette, Package } from 'lucide-react';

function CategorySearch() {
  const categories = [
    {
      id: 'repaired',
      name: '修理済み商品',
      icon: <ShoppingBag className="w-8 h-8" />,
      description: '専門家によって修理・メンテナンスされた商品を探す',
      link: '/shop'
    },
    {
      id: 'used',
      name: '不用品',
      icon: <Package className="w-8 h-8" />,
      description: '出品された不用品を探す',
      link: '/used-items'
    },
    {
      id: 'remake',
      name: 'リメイク作品',
      icon: <Palette className="w-8 h-8" />,
      description: '職人によってリメイクされた一点物の作品を探す',
      link: '/remake'
    },
    {
      id: 'repair-requests',
      name: '修理依頼',
      icon: <Wrench className="w-8 h-8" />,
      description: '修理依頼を探して受注する',
      link: '/repair-requests'
    },
    {
      id: 'professionals',
      name: '修理職人',
      icon: <Users className="w-8 h-8" />,
      description: '経験豊富な修理職人を探す',
      link: '/professionals'
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-emerald-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">カテゴリーから探す</h1>
          <p className="text-gray-600 mb-8">お探しの商品や修理依頼、職人を見つけましょう</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition group"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition">
                  <div className="text-emerald-600">
                    {category.icon}
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySearch;