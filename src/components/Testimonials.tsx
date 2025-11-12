
const Testimonials = () => {
  const testimonials = [
    {
      name: "أم محمد",
      text: "خدمة ممتازة وفريق محترف جداً. اهتموا بوالدي المسن بشكل رائع وأعطوه الرعاية التي يحتاجها. أنصح بهم بشدة.",
      rating: 5,
      service: "رعاية المسنين"
    },
    {
      name: "أحمد علي",
      text: "تعاملت معهم لرعاية والدتي بعد العملية، والممرضة كانت متخصصة جداً ومتفهمة لاحتياجاتها. شكراً لكم.",
      rating: 5,
      service: "التمريض المنزلي"
    },
    {
      name: "فاطمة حسن",
      text: "المربية التي جاءت لرعاية أطفالي كانت رائعة، أطفالي أحبوها كثيراً وأصبحوا متعلقين بها. خدمة ممتازة.",
      rating: 5,
      service: "رعاية الأطفال"
    },
    {
      name: "خالد محمود",
      text: "فريق الجيش الأبيض ساعدني كثيراً في رعاية والدي، وكانوا متاحين في أي وقت. مستوى الخدمة عالي جداً.",
      rating: 5,
      service: "رعاية المسنين"
    },
    {
      name: "نورا أحمد",
      text: "الممرضة التي تأتي لرعاية زوجي مريض السكري محترفة جداً وتهتم بكل التفاصيل. أشعر بالاطمئنان عليه.",
      rating: 5,
      service: "التمريض المنزلي"
    },
    {
      name: "مصطفى عبدالله",
      text: "خدمة التدبير المنزلي ممتازة، البيت أصبح نظيف ومرتب دائماً. الفريق أمين ومحترف في عمله.",
      rating: 5,
      service: "التدبير المنزلي"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-full mb-6">
            <i className="fas fa-comments text-white text-2xl"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            آراء عملائنا
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نفتخر بثقة عملائنا وآرائهم الإيجابية في خدماتنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-sm"></i>
                  ))}
                </div>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
              
              <blockquote className="text-gray-700 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-white text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">عميل سعيد</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">راضٍ عن خدمتنا؟</h3>
            <p className="mb-6">شاركنا رأيك واحصل على خصم خاص على الخدمة القادمة</p>
            <a 
              href="https://wa.me/201005210490"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
            >
              <i className="fab fa-whatsapp"></i>
              شاركنا رأيك
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
