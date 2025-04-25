import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-pastel-brown p-4 shadow-md flex justify-between items-center">
      {/* Логотип */}
      <div className="flex items-center space-x-4">
        <img src="/images/logo.png" alt="Логотип" className="h-20" />
        <h1 className="text-3xl font-bold" style={{ color: '#89582e' }}>Прах и Память</h1>
      </div>

      {/* Кнопки навигации */}
      <div className="flex flex-grow justify-around" style={{ color: '#89582e' }}>
        <Link to="/" className="hover:text-brown">Главная</Link>
        <Link to="/services" className="hover:text-brown">Услуги</Link>
        <Link to="/prices" className="hover:text-brown">Цены</Link>
        <Link to="/about" className="hover:text-brown">О нас</Link>
        <Link to="/contact" className="hover:text-brown">Контакты</Link>
      </div>
    </nav>
  );
}
