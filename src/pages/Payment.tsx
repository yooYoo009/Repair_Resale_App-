import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreditCard, Calendar, Lock } from 'lucide-react';

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state?.item;

  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: '',
    address: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 実際の決済処理はここに実装
    alert('決済が完了しました！');
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!item) {
    return <div>商品情報が見つかりません</div>;
  }

  return (
    <div className="pt-16">
      <div className="min-h-[calc(100vh-4rem)] bg-emerald-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">決済情報入力</h1>

            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">購入商品</h2>
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.artist}</p>
                  <p className="text-lg font-bold text-emerald-600 mt-2">{item.price}</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    カード番号
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="4242 4242 4242 4242"
                      className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      required
                    />
                    <CreditCard className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      有効期限
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                        required
                      />
                      <Calendar className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      セキュリティコード
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="123"
                        className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                        required
                      />
                      <Lock className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    カード名義人
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="TARO YAMADA"
                    className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    配送先住所
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="東京都渋谷区..."
                    className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <button type="submit" className="w-full btn btn-primary">
                  決済を完了する
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;