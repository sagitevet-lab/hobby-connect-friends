
import React from 'react';
import { Users, MapPin, Heart, MessageCircle, Calendar, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "חיבור דרך תחביבים",
      description: "מצא אנשים שחולקים את התחביבים שלך - מצילום ועד טיולים"
    },
    {
      icon: MapPin,
      title: "מפגשים מקומיים",
      description: "גלה אירועים ומפגשים באזור שלך ופגוש חברים חדשים"
    },
    {
      icon: MessageCircle,
      title: "צ'אט בטוח",
      description: "תקשר עם חברים חדשים בסביבה בטוחה ומוגנת"
    },
    {
      icon: Calendar,
      title: "תכנון פעילויות",
      description: "ארגן פעילויות משותפות ובנה חברויות חדשות"
    },
    {
      icon: Heart,
      title: "קהילה תומכת",
      description: "הצטרף לקהילה חמה ותומכת של אנשים דומים לך"
    },
    {
      icon: Shield,
      title: "פרטיות מלאה",
      description: "המידע שלך מוגן ובטוח, אתה שולט על מה שאתה חושף"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            למה <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">חיבור</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            הפלטפורמה המובילה בישראל ליצירת חברויות אמיתיות דרך תחביבים משותפים
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
