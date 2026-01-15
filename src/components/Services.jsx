const Services = () => {
  const services = [
    {
      title: "Creative Visual Design",
      description: "Blending expertise in graphic design, motion graphics, web design, and 3D visualization, I craft visual experiences that unite creativity with technical precision. My work spans branding, digital campaigns, and immersive visual storytelling.",
      icon: "🎨"
    },
    {
      title: "Brand Identity & Strategy",
      description: "Developing comprehensive brand identities that communicate core values and connect with target audiences through strategic visual direction and consistent brand deployment.",
      icon: "🏷️"
    },
    {
      title: "Motion Graphics & 3D",
      description: "Creating dynamic motion graphics and 3D visualizations that bring concepts to life, from product animations to immersive digital experiences.",
      icon: "🎬"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What I Do</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;