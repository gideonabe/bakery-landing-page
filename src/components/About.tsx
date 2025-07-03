
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2015, Sweet Delights Bakery has been a cornerstone of our community, bringing families together through the universal language of freshly baked goods. Our passion for baking began as a small family dream and has grown into a beloved local institution.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              What makes us special is our commitment to using only the finest, locally-sourced ingredients and traditional baking methods passed down through generations. Every cake, pastry, and loaf is crafted with love and attention to detail, ensuring that each bite delivers an unforgettable experience that brings joy to your special moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Unique Recipes</div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our bakery kitchen with bakers at work"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg">Est. 2015</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
