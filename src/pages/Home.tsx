import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ShoppingBag, Users, DollarSign, Palette, MessageCircle, Bell, Search, ThumbsUp, Eye } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import RepairRequestCard from '../components/RepairRequestCard';
import ProductCard from '../components/ProductCard';

function Home() {
  const communityPosts = [
    {
      title: "古い革財布の補修方法について",
      author: "レザーケア職人",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      content: "革製品の経年劣化は避けられませんが、適切なケアで長く使い続けることができます。今回は、革財布のお手入れ方法と、簡単にできる補修方法をご紹介します。",
      likes: 124,
      comments: 32,
      views: 1205
    },
    {
      title: "デニムの色落ち補正テクニック",
      author: "デニムマスター",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      content: "デニムの色落ちは着用感を出す重要な要素ですが、過度な色落ちは防ぎたいものです。プロが実践している色落ち防止と、万が一の場合の補正方法をお伝えします。",
      likes: 98,
      comments: 25,
      views: 856
    },
    {
      title: "アンティーク家具の修復秘訣",
      author: "木工職人",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content: "長年使われてきたアンティーク家具には、それぞれの物語があります。今回は、価値を損なわずに修復する技術と、日々のケア方法についてお話しします。",
      likes: 156,
      comments: 45,
      views: 1567
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            修理で、新しい価値を。
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            持続可能な社会へ。あなたの大切なものに、新しい命を。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/repair"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium transition"
            >
              修理を依頼する
            </Link>
            <Link
              to="/category-search"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-medium transition"
            >
              商品を探す
            </Link>
            <Link
              to="/professional-register"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition"
            >
              職人として登録
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">主なサービス</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            icon={<Wrench className="w-8 h-8" />}
            title="修理依頼"
            description="プロの修理職人があなたの大切なものを修理します。修理の見積もりから完了までサポートします。"
            link="/repair"
          />
          <ServiceCard 
            icon={<ShoppingBag className="w-8 h-8" />}
            title="修理品販売"
            description="修理・メンテナンス済みの商品を購入できます。品質保証付きで安心してお買い物ができます。"
            link="/shop"
          />
          <ServiceCard 
            icon={<DollarSign className="w-8 h-8" />}
            title="不用品売却"
            description="不用品を適正価格で買取します。専門スタッフが丁寧に査定し、最適な価格を提案します。"
            link="/sell"
          />
          <ServiceCard 
            icon={<Users className="w-8 h-8" />}
            title="修理職人"
            description="経験豊富な修理職人を探せます。評価やレビューを参考に、信頼できる職人を見つけられます。"
            link="/professionals"
          />
          <ServiceCard 
            icon={<Palette className="w-8 h-8" />}
            title="リメイク作品"
            description="職人によってリメイクされた一点物の作品を展示販売。独創的なアップサイクル作品をご覧いただけます。"
            link="/remake"
          />
          <ServiceCard 
            icon={<MessageCircle className="w-8 h-8" />}
            title="コミュニティ"
            description="修理やリメイクに関する情報交換の場。プロからアドバイスをもらったり、経験を共有できます。"
            link="/community"
          />
          <ServiceCard 
            icon={<Search className="w-8 h-8" />}
            title="商品検索"
            description="修理品やリメイク作品を詳細な条件で検索。お気に入りの商品や職人を簡単に見つけられます。"
            link="/category-search"
          />
          <ServiceCard 
            icon={<Bell className="w-8 h-8" />}
            title="お知らせ"
            description="修理状況や新着商品、メッセージの通知をリアルタイムで受け取れます。重要な情報を見逃しません。"
            link="/notifications"
          />
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">修理コミュニティ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-4 mb-4">
                  <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.author}</h3>
                    <p className="text-sm text-gray-500">修理のプロフェッショナル</p>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                <div className="flex items-center gap-6 text-gray-500">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-5 h-5" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
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
          <div className="text-center mt-8">
            <Link to="/community" className="btn btn-primary">
              コミュニティを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Repair Requests */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">新着の修理依頼</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RepairRequestCard 
              image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
              title="ヘッドホンの音声が片側しか出ません"
              category="電化製品"
              budget="¥3,000 - ¥5,000"
              location="東京都"
              urgency="通常"
            />
            <RepairRequestCard 
              image="https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
              title="ソファの張り替えをお願いしたいです"
              category="家具"
              budget="¥20,000 - ¥30,000"
              location="大阪府"
              urgency="急ぎ"
            />
            <RepairRequestCard 
              image="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f"
              title="ジーンズの裾上げ修理"
              category="衣類"
              budget="¥2,000 - ¥3,000"
              location="福岡県"
              urgency="通常"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">おすすめの修理済み商品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </section>

      {/* New Used Items */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">新着の不用品商品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard 
              image="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc"
              title="アンティークテーブル"
              price="¥15,000"
              condition="中古"
              description="使用期間3年。傷や汚れは少なめです。"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1517705008128-361805f42e86"
              title="ヴィンテージ食器セット"
              price="¥8,000"
              condition="中古"
              description="昭和時代の食器セット。状態は良好です。"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1452780212940-6f5c0d14d848"
              title="レトロカメラ"
              price="¥12,000"
              condition="中古"
              description="動作確認済み。レトロな雰囲気が魅力です。"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe"
              title="アンティーク照明"
              price="¥18,000"
              condition="中古"
              description="1960年代のペンダントライト。動作確認済み。"
            />
          </div>
        </div>
      </section>

      {/* Featured Remake Items */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">おすすめのリメイク作品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard 
              image="https://images.unsplash.com/photo-1544816155-12df9643f363"
              title="デニムリメイクバッグ"
              price="¥12,800"
              condition="リメイク"
              description="古着デニムを使用したハンドメイドバッグ"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15"
              title="ガラス瓶ペンダントライト"
              price="¥15,600"
              condition="リメイク"
              description="ワインボトルを再利用した照明"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc"
              title="木材モザイクテーブル"
              price="¥45,000"
              condition="リメイク"
              description="廃材を組み合わせたアート作品のような家具"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9"
              title="レザーリメイクウォレット"
              price="¥9,800"
              condition="リメイク"
              description="古い革製品を再構築した財布"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;