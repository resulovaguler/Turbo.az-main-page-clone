module.exports = {
  content: [
    './src/**/*.{htm,js,css}',
    './index.htm', 
    './src/**/*script.js',
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '986px',
        'desktop': '1200px',
      },
    },
  },
  plugins: [],
}

