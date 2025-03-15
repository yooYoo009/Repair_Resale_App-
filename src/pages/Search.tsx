import React, { useState } from 'react';
import { Search as SearchIcon, Filter, Tag } from 'lucide-react';
import ProductCard from '../components/ProductCard';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'repair', name: '修理品' },
    { id: 'remake', name: 'リメイク作品' },
    { id: 'professional', name: '修理職人' }
  ];

  return (
    <div className="pt-16">
      <div className="bg-emerald-50 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">商品検索</h1>
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

          <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Tag className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCard 
              image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              title="Nike スニーカー"
              price="¥12,800"
              condition="修理済み"
              description="ソール交換済み、クリーニング完了"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1486916856992-e4db22c8df33"
              title="アンティーク時計"
              price="¥35,000"
              condition="修理済み"
              description="機械部分オーバーホール済み"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1507764923504-cd90bf7da772"
              title="レザーバッグ"
              price="¥28,000"
              condition="修理済み"
              description="革の補修・メンテナンス済み"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1524532787116-e70228437bbe"
              title="デニムジャケット"
              price="¥8,800"
              condition="修理済み"
              description="ボタン交換・破れ修理済み"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;