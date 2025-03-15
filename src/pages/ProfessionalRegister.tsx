import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Phone, MapPin, Briefcase, Award } from 'lucide-react';

function ProfessionalRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    specialties: [],
    experience: '',
    certification: '',
    password: '',
    confirmPassword: '',
  });

  const specialtyOptions = [
    '電化製品',
    '家具',
    '衣類',
    'アクセサリー',
    '靴',
    'バッグ',
    'その他',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 登録処理をここに実装
    console.log('Professional Register attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSpecialtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      specialties: e.target.checked
        ? [...prev.specialties, value]
        : prev.specialties.filter(specialty => specialty !== value),
    }));
  };

  return (
    <div className="pt-16">
      <div className="min-h-[calc(100vh-4rem)] bg-emerald-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">修理職人として登録</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    お名前
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="山田 太郎"
                      required
                    />
                    <User className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="your@email.com"
                      required
                    />
                    <Mail className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    電話番号
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="090-1234-5678"
                      required
                    />
                    <Phone className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    住所
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="東京都渋谷区..."
                      required
                    />
                    <MapPin className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  専門分野（複数選択可）
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {specialtyOptions.map((specialty) => (
                    <label key={specialty} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={specialty}
                        checked={formData.specialties.includes(specialty)}
                        onChange={handleSpecialtyChange}
                        className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
                      />
                      <span className="text-sm text-gray-700">{specialty}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  経験年数
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="10年"
                    required
                  />
                  <Briefcase className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  保有資格
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="certification"
                    value={formData.certification}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="電気工事士、家具製作技能士など"
                  />
                  <Award className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    パスワード
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="••••••••"
                      required
                    />
                    <Lock className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    パスワード（確認）
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="••••••••"
                      required
                    />
                    <Lock className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
                  required
                />
                <span className="ml-2 text-sm text-gray-600">
                  <a href="#" className="text-emerald-600 hover:text-emerald-500">利用規約</a>
                  と
                  <a href="#" className="text-emerald-600 hover:text-emerald-500">プライバシーポリシー</a>
                  に同意します
                </span>
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                修理職人として登録
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                すでにアカウントをお持ちの方は{' '}
                <Link to="/login" className="text-emerald-600 hover:text-emerald-500 font-medium">
                  ログイン
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalRegister;