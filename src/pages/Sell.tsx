import React from 'react';
import { Upload, DollarSign, Clock, ThumbsUp } from 'lucide-react';

function Sell() {
  return (
    <div className="pt-16">
      <div className="bg-emerald-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">不用品を高値で売却</h1>
          <p className="text-gray-600 mb-12">あなたの不用品を、必要としている人へ。適正価格で買取いたします。</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">写真をアップロード</h3>
              <p className="text-gray-600">商品の状態がわかる写真を複数枚アップロード</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">査定結果をお待ち</h3>
              <p className="text-gray-600">専門スタッフが24時間以内に査定結果をご連絡</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">即日入金</h3>
              <p className="text-gray-600">査定額にご納得いただけましたら、即日お振込み</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  商品カテゴリー
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
                  商品名
                </label>
                <input
                  type="text"
                  placeholder="商品名を入力してください"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  商品の状態
                </label>
                <textarea
                  rows={4}
                  placeholder="商品の状態、使用年数、傷や汚れの有無などを詳しく記載してください"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  希望売却価格（任意）
                </label>
                <input
                  type="text"
                  placeholder="¥10,000"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  商品写真
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <button type="button" className="btn btn-secondary">
                    写真をアップロード
                  </button>
                  <p className="text-sm text-gray-500 mt-2">
                    または、ここにドラッグ＆ドロップ（最大10枚まで）
                  </p>
                </div>
              </div>

              <button type="submit" className="w-full btn btn-primary">
                査定を依頼する
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sell;