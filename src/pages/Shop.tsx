import React from 'react';
import { Filter, Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';

function Shop() {
  return (
    <div className="pt-16">
      <div className="bg-emerald-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="商品を検索..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <button className="btn btn-secondary flex items-center gap-2">
              <Filter className="w-5 h-5" />
              フィルター
            </button>
          </div>
          
          <div className="flex gap-6">
            <div className="w-64 hidden lg:block">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-4">カテゴリー</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-emerald-500" />
                    <span>電化製品</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-emerald-500" />
                    <span>家具</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-emerald-500" />
                    <span>衣類</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-emerald-500" />
                    <span>アクセサリー</span>
                  </label>
                </div>
                
                <h3 className="font-medium text-gray-900 mt-6 mb-4">価格帯</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-emerald-500" />
                    <span>¥5,000以下</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-emerald-500" />
                    <span>¥5,000 - ¥10,000</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-emerald-500" />
                    <span>¥10,000 - ¥30,000</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-emerald-500" />
                    <span>¥30,000以上</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
}

export default Shop;