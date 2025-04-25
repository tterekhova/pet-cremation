export default function Prices() {
  return (
    <div className="p-6 min-h-screen">
      <div className="bg-[#f6f1ec] p-8 rounded-3xl shadow-xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center text-[#89582e] font-serif">Цены</h2>
          <p className="text-lg text-center mb-8 text-[#5a4430]">Цены зависят от веса питомца и типа кремации:</p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead className="bg-[#e7d6c6]">
                <tr>
                  <th className="px-6 py-3 text-left text-lg font-semibold text-[#4d3b28] border-b border-r border-[#cbb8a0] rounded-tl-lg">Вес животного</th>
                  <th className="px-6 py-3 text-center text-lg font-semibold text-[#4d3b28] border-b border-r border-[#cbb8a0]">Общая кремация</th>
                  <th className="px-6 py-3 text-center text-lg font-semibold text-[#4d3b28] border-b border-r border-[#cbb8a0] rounded-tr-lg">Индивидуальная кремация</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['до 10 кг', '1500₽', '5000₽'],
                  ['10–20 кг', '2500₽', '7000₽'],
                  ['20–30 кг', '3500₽', '9000₽'],
                  ['30–40 кг', '5000₽', '11000₽'],
                  ['Более 40 кг', 'по договорённости', 'по договорённости'],
                ].map(([weight, shared, individual]) => (
                  <tr key={weight} className="hover:bg-[#f3ebe3]">
                    <td className="px-6 py-4 border-t border-l border-b border-r border-[#cbb8a0] text-[#4d3b28]">{weight}</td>
                    <td className="px-6 py-4 text-center border-t border-b border-r border-[#cbb8a0] text-[#4d3b28]">{shared}</td>
                    <td className="px-6 py-4 text-center border-t border-b border-r border-[#cbb8a0] text-[#4d3b28]">{individual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-3 text-lg text-[#5a4430]">
            <div className="flex justify-center items-center">
              <span className="w-2 h-2 bg-[#89582e] rounded-full mr-2"></span>
              <p>Приехать и забрать животное: <span className="font-semibold text-[#89582e]">1500₽</span></p>
            </div>
            <div className="flex justify-center items-center">
              <span className="w-2 h-2 bg-[#89582e] rounded-full mr-2"></span>
              <p>Отправить урну обратно: <span className="font-semibold text-[#89582e]">от 300₽</span></p>
            </div>
            <div className="flex justify-center items-center">
              <span className="w-2 h-2 bg-[#89582e] rounded-full mr-2"></span>
              <p>Хранение: <span className="font-semibold text-[#89582e]">200₽/сутки</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}