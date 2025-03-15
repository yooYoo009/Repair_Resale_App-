import React from 'react';
import { MessageSquare, ThumbsUp, Eye } from 'lucide-react';

function Community() {
  const posts = [
    {
      title: "古い革財布の補修方法について",
      author: "レザーケア職人",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      content: "革製品の経年劣化は避けられませんが、適切なケアで長く使い続けることができます...",
      likes: 24,
      comments: 8,
      views: 156
    },
    {
      title: "デニムの色落ち補正テクニック",
      author: "デニムマスター",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      content: "デニムの色落ちは着用感を出す重要な要素ですが、過度な色落ちは防ぎたいものです...",
      likes: 31,
      comments: 12,
      views: 203
    },
    {
      title: "家電修理の基本的な安全対策",
      author: "電気修理技師",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content: "家電の修理を始める前に、必ず電源を切り、プラグを抜いてください...",
      likes: 45,
      comments: 15,
      views: 289
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-emerald-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">修理コミュニティ</h1>
              <p className="text-gray-600">修理のプロや同じ趣味を持つ仲間と知識を共有しましょう。</p>
             </div>
            <button className="btn btn-primary">
              投稿を作成
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-4 mb-4">
                  <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.author}</h3>
                    <p className="text-sm text-gray-500">修理のプロフェッショナル</p>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="flex items-center gap-6 text-gray-500">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-5 h-5" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">トピックを投稿</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  タイトル
                </label>
                <input
                  type="text"
                  placeholder="投稿のタイトルを入力"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  内容
                </label>
                <textarea
                  rows={4}
                  placeholder="投稿の内容を入力"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  画像を追加
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <button type="button" className="btn btn-secondary">
                    画像をアップロード
                  </button>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                投稿する
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;