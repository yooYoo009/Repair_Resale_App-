import React from 'react';
import { Filter } from 'lucide-react';

function Repair() {
  return (
    <div className="pt-16">
      <div className="bg-emerald-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">修理依頼を作成</h1>
          <p className="text-gray-600 mb-8">あなたの大切なアイテムを、プロの職人が丁寧に修理します。</p>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  カテゴリー
                </label>
                <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500">
                  <option>電化製品</option>
                  <option>家具</option>
                  <option>衣類</option>
                  <option>その他</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  タイトル
                </label>
                <input
                  type="text"
                  placeholder="修理内容を簡潔に記載してください"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  詳細な説明
                </label>
                <textarea
                  rows={4}
                  placeholder="修理が必要な箇所や状態について詳しく記載してください"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  希望予算
                </label>
                <input
                  type="text"
                  placeholder="¥1,000 - ¥5,000"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  写真
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <button type="button" className="btn btn-secondary">
                    写真をアップロード
                  </button>
                  <p className="text-sm text-gray-500 mt-2">
                    または、ここにドラッグ＆ドロップ
                  </p>
                </div>
              </div>
              
              <button type="submit" className="w-full btn btn-primary">
                依頼を作成
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repair;