
const Packages = () => {
  const cakes = [
    {
      name: "Wedding Dream Cake",
      description: "Elegant multi-tier wedding cake with custom design and fresh flowers",
      price: "$299",
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=1920&h=1080&fit=crop&q=80"
    },
    {
      name: "Red Velvet Delight",
      description: "Classic red velvet cake with cream cheese frosting and berry garnish",
      price: "$45",
      image: "https://www.simplytrinicooking.com/wp-content/uploads/red-velvet-cake.jpg.webp"
    },
    {
      name: "Chocolate Truffle Tower",
      description: "Rich chocolate cake layered with truffle ganache and gold accents",
      price: "$65",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&h=1080&fit=crop&q=80"
    },
    {
      name: "Vanilla Bean Classic",
      description: "Traditional vanilla sponge with vanilla bean buttercream frosting",
      price: "$35",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1920&h=1080&fit=crop&q=80"
    },
    {
      name: "Strawberry Shortcake",
      description: "Fresh strawberries and whipped cream on light vanilla sponge",
      price: "$40",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1920&h=1080&fit=crop&q=80"
    },
    {
      name: "Artisan Croissants",
      description: "Buttery, flaky croissants baked fresh daily - pack of 6",
      price: "$18",
      // image: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      image: "https://images.ctfassets.net/uexfe9h31g3m/4P9VPYGG5Qg8Am9CDKSHO1/e6271c64235fea35e2133d7ec4440553/Air_Fryer_Croissant_1024x768.jpg?w=1920&h=1080&fit=crop&q=80"
    },
    {
      name: "Birthday Celebration",
      description: "Colorful birthday cake with custom message and fun decorations",
      price: "$55",
      image: "https://images.squarespace-cdn.com/content/v1/5d7e54dc2377f72a157751c6/1707838416676-ATU608K2UULF4EOJXT2L/1D93D654-DB68-4EE5-A8B6-744ECC4F734C?format=2500w"
    },
    {
      name: "Artisan Ice Cream",
      description: "Handcrafted vanilla bean ice cream - 1 pint container",
      price: "$12",
      // image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      image: "https://c4.wallpaperflare.com/wallpaper/946/557/290/ice-cream-food-colorful-wallpaper-preview.jpg"
    },
    {
      name: "French Cookies",
      description: "Delicate french cookies in assorted flavors - box of 12",
      price: "$24",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1920&h=1080&fit=crop&q=80"
    },
    {
      name: "Artisan Cupcakes",
      description: "Gourmet cupcakes with premium frosting - pack of 6",
      price: "$28",
      image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=1920&h=1080&fit=crop&q=80"
    }
  ];

  return (
    <section id="packages" className="py-20 bg-soft-pink/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Cakes & Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our signature creations, from elegant wedding cakes to delightful everyday treats. Each item is crafted with premium ingredients and artistic flair.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cakes.map((cake, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold">
                  {cake.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {cake.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cake.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Order Your Favorites
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
