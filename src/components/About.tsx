
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-full mb-6">
              <i className="fas fa-info-circle text-white text-2xl"></i>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              من نحن؟
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              رفقة هو فريق متخصص في تقديم خدمات الرعاية الصحية والتمريض المنزلي 
              في القاهرة، مصر. نحن نؤمن بأن كل شخص يستحق الحصول على رعاية طبية عالية الجودة 
              في راحة منزله.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نقدم خدماتنا بأسلوب يناسب احتياجاتك الخاصة، مع التركيز على الجودة والاحترافية 
              والرعاية الإنسانية. فريقنا مؤهل ومدرب على أعلى مستوى لضمان تقديم أفضل خدمة ممكنة.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-3 shadow-lg flex items-center justify-center">
                  <i className="fas fa-users text-blue-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-1">+500</h4>
                <p className="text-gray-600 text-sm">عميل راضٍ</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-3 shadow-lg flex items-center justify-center">
                  <i className="fas fa-award text-green-600 text-2xl"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-1">+5</h4>
                <p className="text-gray-600 text-sm">سنوات خبرة</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <i className="fas fa-eye text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">رؤيتنا</h3>
                    <p className="text-gray-600 text-sm">أن نكون الخيار الأول في مجال الرعاية الصحية المنزلية في مصر</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <i className="fas fa-bullseye text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">مهمتنا</h3>
                    <p className="text-gray-600 text-sm">تقديم خدمات رعاية صحية عالية الجودة مع الحفاظ على كرامة وراحة عملائنا</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <i className="fas fa-heart text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">قيمنا</h3>
                    <p className="text-gray-600 text-sm">الاحترافية، الأمانة، الرحمة، والتميز في كل ما نقدمه</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
