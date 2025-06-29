import React from 'react';
import { Star, Users, MessageCircle, Camera, Music, Book, Gamepad2, Mountain } from 'lucide-react';

const CommunitySection = () => {
  const testimonials = [
    {
      name: "שרה כהן",
      hobby: "צילום",
      text: "מצאתי קבוצת צלמים מדהימה דרך חיבור. עכשיו אנחנו יוצאים לטיולי צילום כל שבוע!",
      avatar: "ש"
    },
    {
      name: "דוד לוי",
      hobby: "טיולים",
      text: "הכרתי חברים חדשים שאוהבים טיולים כמוני. כבר טיילנו יחד בצפון ובדרום!",
      avatar: "ד"
    },
    {
      name: "מיכל רוזן",
      hobby: "קריאה",
      text: "הצטרפתי למועדון קריאה דרך האפליקציה והכרתי אנשים נפלאים עם אותו טעם בספרים.",
      avatar: "מ"
    }
  ];

  const hobbies = [
    { icon: Camera, name: "צילום", count: "2.5K+" },
    { icon: Music, name: "מוזיקה", count: "3.2K+" },
    { icon: Book, name: "קריאה", count: "1.8K+" },
    { icon: Gamepad2, name: "גיימינג", count: "4.1K+" },
    { icon: Mountain, name: "טיולים", count: "2.9K+" },
    { icon: Users, name: "ספורט", count: "3.7K+" }
  ];

  return (
    <section id="hobbies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            מה אומרים <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">המשתמשים</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            סיפורי הצלחה של אנשים שמצאו חברויות אמיתיות דרך התחביבים שלהם
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg ml-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-purple-600">{testimonial.hobby}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        {/* Popular Hobbies */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">תחביבים פופולריים</h3>
          <p className="text-lg text-gray-600">הצטרף לקהילות התחביבים הפעילות ביותר</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {hobbies.map((hobby, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                <hobby.icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{hobby.name}</h4>
              <p className="text-purple-600 text-sm">{hobby.count} חברים</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
