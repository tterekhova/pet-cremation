module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pastel-brown': '#F5E4D7', // Пастельный коричневый
        'dark-brown': '#89582E',   // Цвет текста для навбара и других элементов
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],  // Усложненный шрифт для профессионального вида
      },
    },
  },
  plugins: [],
}