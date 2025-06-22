
import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Download, QrCode } from 'lucide-react';

const DownloadSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
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
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg">הורדה חינמית לחלוטין</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg">זמין ב-iOS ו-Android</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg">הרשמה מהירה בדקה אחת</span>
              </div>
            </div>

            {/* Download Buttons with SVG icons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-xs opacity-75">הורד מ</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </div>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-xs opacity-75">הורד מ</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </div>
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
                  <div className="text-blue-100">משתמשים פעילים</div>
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
