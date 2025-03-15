import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, MessageCircle, Menu, X, Wrench, ShoppingBag, Users, Heart, DollarSign, Palette } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold text-emerald-600">
            RM
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/repair" className="text-gray-600 hover:text-gray-900">
              <Wrench className="w-5 h-5" />
            </Link>
            <Link to="/shop" className="text-gray-600 hover:text-gray-900">
              <ShoppingBag className="w-5 h-5" />
            </Link>
            <Link to="/sell" className="text-gray-600 hover:text-gray-900">
              <DollarSign className="w-5 h-5" />
            </Link>
            <Link to="/professionals" className="text-gray-600 hover:text-gray-900">
              <Users className="w-5 h-5" />
            </Link>
            <Link to="/remake" className="text-gray-600 hover:text-gray-900">
              <Palette className="w-5 h-5" />
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/category-search" className="p-2 text-gray-600 hover:text-gray-900">
            <Search className="w-5 h-5" />
          </Link>
          <Link to="/notifications" className="p-2 text-gray-600 hover:text-gray-900 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Link>
          <Link to="/community" className="p-2 text-gray-600 hover:text-gray-900">
            <MessageCircle className="w-5 h-5" />
          </Link>
          <button 
            onClick={toggleMenu}
            className="p-2 text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <Link 
                to="/repair" 
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <Wrench className="w-5 h-5" />
                <span>修理依頼</span>
              </Link>
              <Link 
                to="/shop" 
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="w-5 h-5" />
                <span>ショップ</span>
              </Link>
              <Link 
                to="/sell" 
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <DollarSign className="w-5 h-5" />
                <span>売却</span>
              </Link>
              <Link 
                to="/professionals" 
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="w-5 h-5" />
                <span>修理職人</span>
              </Link>
              <Link 
                to="/remake" 
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <Palette className="w-5 h-5" />
                <span>リメイク作品</span>
              </Link>
              <Link 
                to="/community" 
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="w-5 h-5" />
                <span>コミュニティ</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <Link 
                to="/login" 
                className="block w-full btn btn-secondary mb-3"
                onClick={() => setIsMenuOpen(false)}
              >
                ログイン
              </Link>
              <Link 
                to="/register" 
                className="block w-full btn btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                新規登録
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;