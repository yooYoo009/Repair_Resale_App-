import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ログイン処理をここに実装
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="pt-16">
      <div className="min-h-[calc(100vh-4rem)] bg-emerald-50 py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">ログイン</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="your@email.com"
                    required
                  />
                  <Mail className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  パスワード
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="••••••••"
                    required
                  />
                  <Lock className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500" />
                  <span className="ml-2 text-sm text-gray-600">ログイン状態を保持</span>
                </label>
                <a href="#" className="text-sm text-emerald-600 hover:text-emerald-500">
                  パスワードをお忘れですか？
                </a>
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                ログイン
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                アカウントをお持ちでない方は{' '}
                <Link to="/register" className="text-emerald-600 hover:text-emerald-500 font-medium">
                  新規登録
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;