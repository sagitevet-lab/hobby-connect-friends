import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">חיבור</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              הפלטפורמה המובילה בישראל ליצירת חברויות חדשות דרך תחביבים משותפים. מחברים לבבות ויוצרים קהילות.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">קישורים מהירים</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">אודות</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">איך זה עובד</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">תחביבים</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">בטיחות</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">עזרה</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6">תמיכה</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">מרכז עזרה</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">צור קשר</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">דיווח על בעיה</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">הצעות</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">יצירת קשר</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">hello@hiburmedia.co.il</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">03-1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">תל אביב, ישראל</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 חיבור. כל הזכויות שמורות.
          </p>
          <div className="flex space-x-6 space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">תנאי שימוש</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">מדיניות פרטיות</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">עוגיות</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
