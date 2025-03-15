import React from 'react';
import { Bell, MessageCircle, PenTool as Tool, ShoppingBag, Clock } from 'lucide-react';

interface Notification {
  id: string;
  type: 'repair' | 'message' | 'system' | 'purchase';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

function Notifications() {
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'repair',
      title: '修理状況の更新',
      message: 'お預かりしているスニーカーの修理が完了しました。',
      time: '1時間前',
      read: false
    },
    {
      id: '2',
      type: 'message',
      title: '新着メッセージ',
      message: '佐藤職人からメッセージが届いています。',
      time: '3時間前',
      read: false
    },
    {
      id: '3',
      type: 'purchase',
      title: '商品発送のお知らせ',
      message: 'ご購入いただいた商品を発送いたしました。',
      time: '1日前',
      read: true
    },
    {
      id: '4',
      type: 'system',
      title: 'システムメンテナンス',
      message: '明日午前2時から4時までメンテナンスを実施します。',
      time: '2日前',
      read: true
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'repair':
        return <Tool className="w-6 h-6 text-emerald-500" />;
      case 'message':
        return <MessageCircle className="w-6 h-6 text-blue-500" />;
      case 'purchase':
        return <ShoppingBag className="w-6 h-6 text-purple-500" />;
      default:
        return <Bell className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <div className="pt-16">
      <div className="bg-emerald-50 min-h-screen py-8">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">お知らせ</h1>
          
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-white rounded-xl p-4 shadow-sm ${
                  !notification.read ? 'border-l-4 border-emerald-500' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">
                        {notification.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{notification.time}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{notification.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;