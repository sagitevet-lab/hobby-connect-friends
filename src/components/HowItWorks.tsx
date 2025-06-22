
import React from 'react';
import { UserPlus, Search, MessageCircle, Users } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: "הירשם בקלות",
      description: "צור פרופיל וספר על התחביבים שלך"
    },
    {
      icon: Search,
      number: "02",
      title: "מצא התאמות",
      description: "האלגוריתם שלנו ימצא לך אנשים עם תחביבים דומים"
    },
    {
      icon: MessageCircle,
      number: "03",
      title: "התחל לשוחח",
      description: "שלח הודעות ותכיר חברים חדשים"
    },
    {
      icon: Users,
      number: "04",
      title: "פגוש במציאות",
      description: "תכנן פעילויות משותפות ובנה חברויות אמיתיות"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-300/20 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            איך זה עובד?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            ארבעה שלבים פשוטים למציאת חברים חדשים
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-purple-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-purple-900 font-bold text-sm">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-blue-100 leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-white/30 transform -translate-x-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
