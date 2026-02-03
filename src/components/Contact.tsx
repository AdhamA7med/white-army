
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-full mb-6">
            <i className="fas fa-phone text-white text-2xl"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            تواصل معنا
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نحن هنا لمساعدتك في أي وقت. تواصل معنا الآن للحصول على استشارة مجانية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                معلومات التواصل
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">الهاتف الأول</h4>
                    <a href="tel:01101091946" className="text-blue-600 hover:text-blue-800 transition-colors">
                      01101091946
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="bg-green-600 p-3 rounded-full">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">الهاتف الثاني</h4>
                    <a href="tel:01101091946" className="text-green-600 hover:text-green-800 transition-colors">
                      01101091946
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="bg-green-600 p-3 rounded-full">
                    <i className="fab fa-whatsapp text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">واتساب</h4>
                    <a 
                      href="https://wa.me/201101091946" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 transition-colors"
                    >
                      01101091946
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                  <div className="bg-purple-600 p-3 rounded-full">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">الموقع</h4>
                    <p className="text-purple-600">القاهرة، مصر</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                  <div className="bg-orange-600 p-3 rounded-full">
                    <i className="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">ساعات العمل</h4>
                    <p className="text-orange-600">24/7 - خدمة على مدار الساعة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                احجز خدمتك الآن
              </h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a 
                    href="tel:01005210490"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                  >
                    <i className="fas fa-phone"></i>
                    اتصل الآن
                  </a>
                  <a 
                    href="https://wa.me/201101091946"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                  >
                    <i className="fab fa-whatsapp"></i>
                    واتساب
                  </a>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-gray-800 mb-4 text-center">خدماتنا المتاحة</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-600"></i>
                      <span className="text-sm text-gray-700">تمريض منزلي</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-600"></i>
                      <span className="text-sm text-gray-700">رعاية المسنين</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-600"></i>
                      <span className="text-sm text-gray-700">رعاية الأطفال</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-600"></i>
                      <span className="text-sm text-gray-700">تدبير منزلي</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center text-sm text-gray-600 bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                  <i className="fas fa-info-circle text-yellow-600 mb-2"></i>
                  <p><strong>استشارة مجانية:</strong> احصل على استشارة مجانية لتحديد احتياجاتك</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
