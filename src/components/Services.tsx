
import { Cake, Users, Coffee, GraduationCap, IceCream, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Cake className="w-8 h-8" />,
      title: "Custom Cake Orders",
      description: "Personalized cakes for weddings, birthdays, and special celebrations. Made to your exact specifications with premium ingredients."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Event Catering",
      description: "Complete catering services for corporate events, parties, and gatherings. Fresh pastries, sandwiches, and dessert platters."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Fresh Snacks",
      description: "Daily fresh croissants, muffins, cookies, and savory snacks. Perfect for your morning coffee or afternoon treat."
    },
    {
      icon: <IceCream className="w-8 h-8" />,
      title: "Artisan Ice Cream",
      description: "Handcrafted ice cream in unique flavors. Made with natural ingredients and no artificial preservatives."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Baking Classes",
      description: "Learn the art of baking from our master bakers. Classes for beginners to advanced techniques in a fun environment."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Special Occasions",
      description: "Anniversary cakes, graduation celebrations, and custom desserts for life's most precious moments."
    }
  ];

  return (
    <section id="services" className="py-20 bg-soft-pink/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From custom cakes to baking classes, we offer a complete range of services to satisfy your sweet cravings and make your celebrations memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
