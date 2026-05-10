import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Star, Instagram, Menu as MenuIcon, X } from 'lucide-react';

const MENU_DATA = [
  {
    category: "Первые блюда",
    items: [
      { name: "Борщ с говядиной", price: "660 ₸", description: "Классический борщ со свеклой, капустой и нежной говядиной.", image: "/images/borscht.png" },
      { name: "Солянка мясная", price: "990 ₸", description: "Густой суп с несколькими видами мяса и оливками.", image: "/images/6_1592925463-scaled.jpg" },
      { name: "Лагман", price: "1200 ₸", description: "Традиционное блюдо с домашней лапшой, мясом и овощами.", image: "/images/lagman-1300x861.jpg" }
    ]
  },
  {
    category: "Вторые блюда",
    items: [
      { name: "Манты (5 шт)", price: "1400 ₸", description: "Паровые пельмени с сочной говядиной и луком.", image: "/images/manty.png" },
      { name: "Плов по-ташкентски", price: "1350 ₸", description: "Ароматный рис с мясом, морковью и нутом.", image: "/images/plov-golden-corn-2-1.jpg" },
      { name: "Котлеты домашние с пюре", price: "1250 ₸", description: "Нежные говяжьи котлеты с картофельным пюре.", image: "/images/1fb4c2b8-7354-4ccf-be58-f50105327c06.webp" }
    ]
  },
  {
    category: "Выпечка и десерты",
    items: [
      { name: "Баурсаки (порция)", price: "450 ₸", description: "Традиционное казахское жареное тесто.", image: "/images/baursaks.png" },
      { name: "Чебурек с мясом", price: "550 ₸", description: "Хрустящее тесто с сочной мясной начинкой.", image: "/images/sochnie_chebureki_s_myasom-409433.jpg" },
      { name: "Медовик", price: "700 ₸", description: "Классический медовый торт со сметанным кремом.", image: "/images/be920e82-bfa1-4698-8cf8-8735a9f3aee9.webp" }
    ]
  }
];

const REVIEWS = [
  { name: "Айдар", rating: 5, text: "Самое лучшее место для обеда! Всегда свежее и очень вкусно, как дома.", date: "15.05.2024" },
  { name: "Елена", rating: 4, text: "Отличная столовая в центре города. Цены очень радуют, но в обед бывают очереди.", date: "02.06.2024" },
  { name: "Марат", rating: 5, text: "Работают круглосуточно, что очень удобно. Манты просто божественные!", date: "20.06.2024" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-orange-50 font-sans text-stone-800">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">И</span>
              </div>
              <span className="text-2xl font-bold text-orange-900 tracking-tight">ИЗБУШКА</span>
            </div>
            
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#hero" className="hover:text-orange-600 transition-colors">Главная</a>
              <a href="#menu" className="hover:text-orange-600 transition-colors">Меню</a>
              <a href="#reviews" className="hover:text-orange-600 transition-colors">Отзывы</a>
              <a href="#contacts" className="hover:text-orange-600 transition-colors">Контакты</a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t p-4 space-y-4 shadow-xl"
          >
            <a href="#hero" onClick={() => setIsMenuOpen(false)} className="block py-2">Главная</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block py-2">Меню</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="block py-2">Отзывы</a>
            <a href="#contacts" onClick={() => setIsMenuOpen(false)} className="block py-2">Контакты</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Interior" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Столовая "Избушка"
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light"
          >
            Домашняя кухня, уютная атмосфера и гостеприимство в самом сердце Астаны.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#menu" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
              Смотреть меню
            </a>
            <a href="#contacts" className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all">
              Найти нас
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-700">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Круглосуточно</h3>
            <p className="text-stone-500">Мы работаем для вас 24/7, чтобы вы могли вкусно поесть в любое время.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-700">
              <Star size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Халяль</h3>
            <p className="text-stone-500">Используем только свежие и качественные продукты, соответствующие стандартам Халяль.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-700">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Центр города</h3>
            <p className="text-stone-500">Удобное расположение на ул. Достык, 1, рядом с основными достопримечательностями.</p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-900 mb-4">Наше Меню</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {MENU_DATA.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-stone-700 mb-8 border-l-4 border-orange-600 pl-4">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIdx) => (
                    <motion.div 
                      key={itemIdx}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                    >
                      {item.image && (
                        <div className="h-48 overflow-hidden">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-bold text-stone-800">{item.name}</h4>
                          <span className="text-orange-700 font-bold">{item.price}</span>
                        </div>
                        <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Отзывы наших гостей</h2>
            <div className="flex justify-center gap-1 text-orange-500 mb-4">
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
            </div>
            <p className="text-stone-400">Более 2000 положительных отзывов в 2ГИС</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg">{review.name}</span>
                  <span className="text-stone-500 text-sm">{review.date}</span>
                </div>
                <div className="flex gap-1 text-orange-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="italic text-stone-300">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-orange-900 mb-8">Свяжитесь с нами</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Адрес</h4>
                    <p className="text-stone-600">г. Астана, ул. Достык, 1</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 shrink-0">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Телефон</h4>
                    <p className="text-stone-600">+7 (7172) 44-07-10</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 shrink-0">
                    <Clock />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Часы работы</h4>
                    <p className="text-stone-600">Круглосуточно (24/7)</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-bold mb-4">Мы в социальных сетях</h4>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/izbushka_kz/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="h-[450px] bg-stone-100 rounded-3xl overflow-hidden relative border-8 border-stone-100 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.148154625299!2d71.4287848769353!3d51.12411607172813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42458406f5999331%3A0xe67540243455938d!2z0YPQuy4g0JTQvtGB0YLRi9C6IDEsINCQ0YHRgtCw0L3QsCAwMTAwMDA!5e0!3m2!1sru!2skz!4v1718000000000!5m2!1sru!2skz" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-orange-700 rounded flex items-center justify-center">
              <span className="text-white font-bold">И</span>
            </div>
            <span className="text-xl font-bold tracking-tight">ИЗБУШКА</span>
          </div>
          <p className="text-stone-500 text-sm mb-8">
            © {new Date().getFullYear()} Столовая "Избушка". Все права защищены.<br/>
            Сделано с любовью к домашней кухне.
          </p>
          <div className="flex justify-center gap-6 text-stone-400 text-sm">
            <a href="#" className="hover:text-white">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white">Правила посещения</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
