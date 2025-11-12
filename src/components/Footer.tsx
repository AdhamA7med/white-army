
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-full">
                <i className="fas fa-user-md text-white text-xl"></i>
              </div>
              <div>
                <h1 className="text-xl font-bold">البدر</h1>
                <p className="text-sm text-gray-400">خدمات التمريض ورعاية المسنين</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              نقدم أفضل خدمات الرعاية الصحية المنزلية في القاهرة، مصر مع فريق متخصص ومؤهل لضمان راحتك وراحة أحبائك.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a 
                href="https://wa.me/201005210490" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a 
                href="tel:01005210490"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fas fa-user-nurse text-sm"></i>
                  خدمات التمريض المنزلي
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fas fa-walking text-sm"></i>
                  رعاية المسنين
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fas fa-baby text-sm"></i>
                  رعاية الأطفال
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <i className="fas fa-home text-sm"></i>
                  التدبير المنزلي
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-blue-400"></i>
                <div>
                  <p className="text-sm text-gray-400">الهاتف الأول</p>
                  <a href="tel:01005210490" className="text-white hover:text-blue-400 transition-colors">
                    01005210490
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-green-400"></i>
                <div>
                  <p className="text-sm text-gray-400">الهاتف الثاني</p>
                  <a href="tel:01005210490" className="text-white hover:text-green-400 transition-colors">
                    01005210490
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-purple-400"></i>
                <div>
                  <p className="text-sm text-gray-400">الموقع</p>
                  <p className="text-white">القاهرة، مصر</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-clock text-orange-400"></i>
                <div>
                  <p className="text-sm text-gray-400">ساعات العمل</p>
                  <p className="text-white">24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 الجيش الأبيض. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-400 text-sm">
              تم تطوير الموقع بواسطة{" "}
              <a 
                href="https://wa.me/201153903786" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                أدهم أحمد
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
