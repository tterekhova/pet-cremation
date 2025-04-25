import { FaFire, FaTruck, FaVideo, FaBox, FaLeaf } from "react-icons/fa";

export default function Services() {
  return (
    <div className="p-6 min-h-screen">
      <div className="bg-[#f6f1ec] p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#89582e] font-serif">Наши услуги</h2>
        <ul className="space-y-6">
          {/* Общая кремация */}
          <li className="bg-white shadow-lg rounded-2xl p-6 font-serif border border-[#e0d1b3]">
            <div className="flex items-center text-xl font-semibold text-[#89582e] mb-2">
              <FaFire className="text-[#89582e] inline-block mr-3" />
              Общая кремация
            </div>
            <div className="text-base text-gray-800 space-y-1">
              <div>Вес до 10 кг: 1500₽</div>
              <div>Вес 10-20 кг: 2500₽</div>
              <div>Вес 20-30 кг: 3500₽</div>
              <div>Вес 30-40 кг: 5000₽</div>
              <div>Вес более 40 кг: по договорённости</div>
            </div>
          </li>

          {/* Индивидуальная кремация */}
          <li className="bg-white shadow-lg rounded-2xl p-6 font-serif border border-[#e0d1b3]">
            <div className="flex items-center text-xl font-semibold text-[#89582e] mb-2">
              <FaBox className="text-[#89582e] inline-block mr-3" />
              Индивидуальная кремация
            </div>
            <div className="text-base text-gray-800 space-y-1">
              <div>Вес до 10 кг: 5000₽</div>
              <div>Вес 10-20 кг: 7000₽</div>
              <div>Вес 20-30 кг: 9000₽</div>
              <div>Вес 30-40 кг: 11000₽</div>
              <div>Вес более 40 кг: по договорённости</div>
            </div>
          </li>

          {/* Забор животного */}
          <li className="bg-white shadow-lg rounded-2xl p-6 font-serif border border-[#e0d1b3]">
            <div className="flex items-center text-xl font-semibold text-[#89582e] mb-2">
              <FaTruck className="text-[#89582e] inline-block mr-3" />
              Забор животного с адреса
            </div>
            <div className="text-base text-gray-800">1500₽</div>
          </li>

          {/* Видео фиксация */}
          <li className="bg-white shadow-lg rounded-2xl p-6 font-serif border border-[#e0d1b3]">
            <div className="flex items-center text-xl font-semibold text-[#89582e] mb-2">
              <FaVideo className="text-[#89582e] inline-block mr-3" />
              Видео фиксация процесса
            </div>
            <div className="text-base text-gray-800">По запросу</div>
          </li>

          {/* Хранение */}
          <li className="bg-white shadow-lg rounded-2xl p-6 font-serif border border-[#e0d1b3]">
            <div className="flex items-center text-xl font-semibold text-[#89582e] mb-2">
              <FaLeaf className="text-[#89582e] inline-block mr-3" />
              Хранение праха
            </div>
            <div className="text-base text-gray-800">200₽/сутки</div>
          </li>

          {/* Возврат урны */}
          <li className="bg-white shadow-lg rounded-2xl p-6 font-serif border border-[#e0d1b3]">
            <div className="flex items-center text-xl font-semibold text-[#89582e] mb-2">
              <FaTruck className="text-[#89582e] inline-block mr-3" />
              Возврат урны
            </div>
            <div className="text-base text-gray-800">от 300₽</div>
          </li>
        </ul>
      </div>
    </div>
  );
}