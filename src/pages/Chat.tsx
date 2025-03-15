import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Send, Image } from 'lucide-react';

function Chat() {
  const { sellerId } = useParams();
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // メッセージ送信処理をここに実装
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="pt-16">
      <div className="min-h-[calc(100vh-4rem)] bg-emerald-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm h-[calc(100vh-8rem)] flex flex-col">
            {/* チャットヘッダー */}
            <div className="p-4 border-b">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Seller"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-semibold text-gray-900">佐藤 クラフト</h2>
                  <p className="text-sm text-gray-500">リメイクアーティスト</p>
                </div>
              </div>
            </div>

            {/* メッセージエリア */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-gray-900">商品についてお問い合わせありがとうございます。</p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-emerald-500 text-white rounded-lg p-3 max-w-[80%]">
                  <p>この商品の制作過程について詳しく教えていただけますか？</p>
                </div>
              </div>
            </div>

            {/* メッセージ入力エリア */}
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex gap-4">
                <button type="button" className="p-2 text-gray-500 hover:text-gray-700">
                  <Image className="w-6 h-6" />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="メッセージを入力..."
                  className="flex-1 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;