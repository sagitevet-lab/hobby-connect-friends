import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Download, QrCode } from 'lucide-react';

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-300/15 rounded-full blur-3xl animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              התחל את המסע שלך
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                עוד היום
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              הורד את האפליקציה וצא למסע מרתק של הכרות חדשות וחברויות משמעותיות
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg">הורדה חינמית לחלוטין</span>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg">זמין ב-iOS ו-Android</span>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg">הרשמה מהירה בדקה אחת</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                הורד מ-App Store
              </Button>
              
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                הורד מ-Google Play
              </Button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="text-center lg:text-right">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-white mb-8">המספרים מדברים</h3>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-2">50K+</div>
                  <div className="text-blue-100">משתמשים</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-pink-300 mb-2">1M+</div>
                  <div className="text-blue-100">הודעות נשלחו</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-green-300 mb-2">15K+</div>
                  <div className="text-blue-100">מפגשים אורגנו</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-300 mb-2">200+</div>
                  <div className="text-blue-100">תחביבים שונים</div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-blue-100 text-lg italic">
                  "האפליקציה שמחברת לבבות ויוצרת חברויות לכל החיים"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
