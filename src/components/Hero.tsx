
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Heart, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-300/15 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 lg:px-12">
        <div className="flex items-center space-x-6">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-purple-600" />
          </div>
          <span className="text-2xl font-bold text-white">חיבור</span>
        </div>
        <div className="hidden md:flex space-x-8 text-white">
          <a href="#" className="hover:text-purple-200 transition-colors">מצא חברים</a>
          <a href="#" className="hover:text-purple-200 transition-colors">תחביבים</a>
          <a href="#" className="hover:text-purple-200 transition-colors">הורדה</a>
          <a href="#" className="hover:text-purple-200 transition-colors">יצירת קשר</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-in">
              פגוש חברים חדשים
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                במקום חדש
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 animate-fade-in animation-delay-300">
              צור חברויות חדשות וגלה מקומות חדשים דרך תחביבים משותפים
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-500">
              <Button 
                size="lg" 
                onClick={() => navigate('/signup')}
                className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Users className="w-5 h-5 ml-2" />
                התחל עכשיו
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToFeatures}
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                למד עוד
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-blue-200">משתמשים פעילים</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-blue-200">תחביבים</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15</div>
                <div className="text-blue-200">ערים</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative lg:scale-110 animate-fade-in animation-delay-700">
            <div className="relative mx-auto w-80 h-[640px] bg-gray-900 rounded-[3rem] shadow-2xl">
              {/* Improved phone top design */}
              <div className="absolute inset-x-0 top-0 h-8 bg-gray-900 rounded-t-[3rem] flex items-center justify-center">
                <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
              </div>
              <div className="absolute top-8 inset-x-4 bottom-4 bg-gradient-to-b from-blue-500 to-purple-600 rounded-[2.3rem] overflow-hidden">
                
                {/* Status Bar */}
                <div className="flex justify-between items-center p-4 text-white text-sm">
                  <span>9:30</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* Chat Interface */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">א</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 text-white">
                      היי, קוראים לי אדם
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-pink-500 rounded-2xl px-4 py-2 text-white max-w-xs">
                      שלום! אני מוניקה
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">א</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 text-white">
                      את גרה בתל אביב?
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-pink-500 rounded-2xl px-4 py-2 text-white">
                      אולי ניפגש? :)
                    </div>
                  </div>
                </div>

                {/* Friends Suggestion */}
                <div className="absolute bottom-20 left-4 right-4 bg-white/15 backdrop-blur-md rounded-2xl p-4">
                  <h3 className="text-white font-semibold mb-3">מצא חבר וצ'אט בחינם</h3>
                  <div className="flex justify-between">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-full mb-2 flex items-center justify-center">
                        <span className="text-purple-600 font-bold">ד</span>
                      </div>
                      <span className="text-white text-sm">דניאל</span>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-full mb-2 flex items-center justify-center">
                        <span className="text-purple-600 font-bold">ג</span>
                      </div>
                      <span className="text-white text-sm">גליה</span>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-full p-2 flex items-center">
                  <input 
                    className="flex-1 px-4 py-2 bg-transparent outline-none text-gray-700" 
                    placeholder="שלח הודעה"
                  />
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
