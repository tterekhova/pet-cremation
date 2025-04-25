import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen p-6">
      <div className="bg-[#f6f1ec] p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#89582e] font-serif">Контакты</h2>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl space-y-6">
            {/* Центрированные контактные элементы с левым выравниванием текста */}
            <div className="flex justify-center">
              <div className="flex items-center w-full max-w-xs">
                <FaPhoneAlt className="text-[#89582e] mr-4 text-2xl min-w-[24px]" />
                <p className="text-left">
                  Телефон: <span className="font-semibold text-[#89582e]">+7 (918) 000-00-00</span>
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex items-center w-full max-w-xs">
                <FaEnvelope className="text-[#89582e] mr-4 text-2xl min-w-[24px]" />
                <p className="text-left">
                  Email: <span className="font-semibold text-[#89582e]">memory@pets.ru</span>
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex items-center w-full max-w-xs">
                <FaMapMarkerAlt className="text-[#89582e] mr-4 text-2xl min-w-[24px]" />
                <p className="text-left">
                  Адрес: <span className="font-semibold text-[#89582e]">г. Краснодар, ул. Зеленая</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}