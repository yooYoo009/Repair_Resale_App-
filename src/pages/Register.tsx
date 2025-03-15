import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Phone } from 'lucide-react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 登録処理をここに実装
    console.log('Register attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16">
      <div className="min-h-[calc(100vh-4rem)] bg-emerald-50 py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">新規登録</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                アカウントを作成
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

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                修理職人として登録をご希望の方は{' '}
                <Link to="/professional-register" className="text-emerald-600 hover:text-emerald-500 font-medium">
                  こちら
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;