
const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full mb-6 animate-float">
              <i className="fas fa-heartbeat text-white text-4xl"></i>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="text-gradient">Health and Care</span><br />
            لخدمات التمريض ورعاية المسنين
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            خدمات رعاية منزلية متميزة بين يديك! نوفر أفضل خدمات التمريض المنزلي ورعاية المسنين 
            والأطفال مع فريق متخصص ومؤهل لضمان راحتك وراحة أحبائك في منزلك
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:01101091946"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
            >
              <i className="fas fa-phone"></i>
              اتصل بنا الآن
            </a>
            <a 
              href="https://wa.me/201101091946"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
            >
              <i className="fab fa-whatsapp"></i>
              واتساب
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <i className="fas fa-user-nurse text-blue-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-gray-800 mb-2">تمريض منزلي</h3>
              <p className="text-gray-600 text-sm">فريق متخصص لرعاية المرضى</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <i className="fas fa-walking text-green-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-gray-800 mb-2">رعاية المسنين</h3>
              <p className="text-gray-600 text-sm">رعاية شاملة لكبار السن</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <i className="fas fa-baby text-purple-600 text-3xl mb-4"></i>
              <h3 className="font-semibold text-gray-800 mb-2">رعاية الأطفال</h3>
              <p className="text-gray-600 text-sm">مربيات محترفات ومؤهلات</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
