import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight, User, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    age: '',
    hobbies: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the data to a server
    alert('הרשמה בוצעה בהצלחה! ברוכים הבאים לחיבור!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-300/15 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 lg:px-12">
        <div className="flex items-center space-x-4 space-x-reverse">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-purple-600" />
          </div>
          <span className="text-2xl font-bold text-white">חיבור</span>
        </div>
        <Button 
          variant="outline"
          onClick={() => navigate('/')}
          className="border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300"
        >
          <ArrowRight className="w-4 h-4 ml-2" />
          חזור לעמוד הראשי
        </Button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              הצטרף אלינו עכשיו
            </h1>
            <p className="text-xl text-blue-100">
              מלא את הפרטים שלך ותתחיל ליצור קשרים חדשים
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">שם פרטי</label>
                  <div className="relative">
                    <User className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full pr-12 pl-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="הכנס שם פרטי"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">שם משפחה</label>
                  <div className="relative">
                    <User className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full pr-12 pl-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="הכנס שם משפחה"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">כתובת אימייל</label>
                <div className="relative">
                  <Mail className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pr-12 pl-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white/50 transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">מספר טלפון</label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pr-12 pl-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="050-1234567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">גיל</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    min="18"
                    max="99"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white/50 transition-colors"
                    placeholder="25"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">עיר מגורים</label>
                <div className="relative">
                  <MapPin className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full pr-12 pl-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white/50 transition-colors"
                    placeholder="תל אביב"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">תחביבים ותחומי עניין</label>
                <textarea
                  name="hobbies"
                  value={formData.hobbies}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-white/50 transition-colors resize-none"
                  placeholder="ספר לנו על התחביבים שלך - צילום, ספורט, מוזיקה, טיולים..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-purple-600 hover:bg-purple-50 text-xl py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                הצטרף עכשיו
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-white/80 text-sm">
                בהרשמה אתה מסכים ל
                <a href="#" className="underline hover:text-white transition-colors">תנאי השימוש</a>
                {' '}ול
                <a href="#" className="underline hover:text-white transition-colors">מדיניות הפרטיות</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
