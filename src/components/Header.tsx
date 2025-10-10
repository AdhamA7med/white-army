
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-full">
              <i className="fas fa-user-md text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">رفقة</h1>
              <p className="text-sm text-gray-600">خدمات التمريض ورعاية المسنين</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              الرئيسية
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              خدماتنا
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              من نحن
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              آراء العملاء
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              تواصل معنا
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-right">
                الرئيسية
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-right">
                خدماتنا
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-right">
                من نحن
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-right">
                آراء العملاء
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-right">
                تواصل معنا
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
