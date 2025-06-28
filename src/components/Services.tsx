
const Services = () => {
  const services = [
    {
      icon: "fas fa-user-nurse",
      title: "خدمات التمريض المنزلي",
      description: "فريق متخصص من الممرضين والممرضات المؤهلين لرعاية مرضاك في راحة منزلك مع توفير جميع الخدمات الطبية اللازمة",
      features: ["حقن ومحاليل", "قياس العلامات الحيوية", "العناية بالجروح", "رعاية ما بعد العمليات"],
      color: "blue"
    },
    {
      icon: "fas fa-walking",
      title: "رعاية المسنين",
      description: "نوفر رعاية شاملة ومتخصصة لكبار السن لضمان راحتهم ورفاهيتهم مع الاهتمام بجميع احتياجاتهم اليومية",
      features: ["المساعدة في الأنشطة اليومية", "مراقبة الحالة الصحية", "توفير الأدوية", "الرفقة والدعم النفسي"],
      color: "green"
    },
    {
      icon: "fas fa-baby",
      title: "رعاية الأطفال",
      description: "اطمئن على أطفالك مع مربيات محترفات ومؤهلات يوفرن رعاية تربوية وتعليمية متميزة",
      features: ["رعاية تربوية", "أنشطة تعليمية", "مراقبة صحية", "برامج ترفيهية هادفة"],
      color: "purple"
    },
    {
      icon: "fas fa-home",
      title: "التدبير المنزلي",
      description: "نوفر لك خدمة التدبير المنزلي الاحترافية لتنعم ببيئة منزلية نظيفة ومنظمة",
      features: ["تنظيف شامل", "ترتيب وتنظيم", "إعداد الوجبات", "غسيل وكي الملابس"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200",
      green: "from-green-500 to-green-600 bg-green-50 text-green-600 border-green-200",
      purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200",
      orange: "from-orange-500 to-orange-600 bg-orange-50 text-orange-600 border-orange-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-full mb-6">
            <i className="fas fa-stethoscope text-white text-2xl"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            خدماتنا المتميزة
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الطبية والرعاية المنزلية بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              <div className="p-8">
                <div className={`inline-block p-4 rounded-2xl mb-6 bg-gradient-to-r ${getColorClasses(service.color).split(' ')[0]} ${getColorClasses(service.color).split(' ')[1]} group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(service.color).split(' ')[0]} ${getColorClasses(service.color).split(' ')[1]}`}></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              لماذا تختار الجيش الأبيض؟
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 justify-center">
                <i className="fas fa-certificate text-blue-600 text-xl"></i>
                <span className="text-gray-700 font-medium">فريق مؤهل ومعتمد</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <i className="fas fa-clock text-green-600 text-xl"></i>
                <span className="text-gray-700 font-medium">خدمة 24/7</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <i className="fas fa-heart text-red-600 text-xl"></i>
                <span className="text-gray-700 font-medium">رعاية بحب واهتمام</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
