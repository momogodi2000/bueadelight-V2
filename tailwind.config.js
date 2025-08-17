/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // BueaDelights Brand Colors - Cameroon Inspired
        forest: {
          50: '#E8F5E8',
          100: '#C8E6C8',
          200: '#A4D4A4',
          300: '#81C784',
          400: '#66BB6A',
          500: '#1B5E20', // Primary Forest Green
          600: '#155415',
          700: '#0F4A0F',
          800: '#0A400A',
          900: '#053605'
        },
        golden: {
          50: '#FFFDE7',
          100: '#FFF9C4',
          200: '#FFF59D',
          300: '#FFF176',
          400: '#FFEE58',
          500: '#FFC107', // Secondary Golden Yellow
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00'
        },
        terracotta: {
          50: '#FDEFEF',
          100: '#FAD4D4',
          200: '#F5B7B7',
          300: '#F09999',
          400: '#EC7C7C',
          500: '#D84315', // Accent Terracotta
          600: '#C23616',
          700: '#A02914',
          800: '#7E1C11',
          900: '#5C0F0E'
        },
        cream: {
          50: '#FFFEF7',
          100: '#FFF8E1', // Light Cream
          200: '#FFF2CC',
          300: '#FFECB3',
          400: '#FFE599',
          500: '#FFDF80',
          600: '#FFD966',
          700: '#FFD34D',
          800: '#FFCC33',
          900: '#FFC61A'
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#BDBDBD',
          300: '#9E9E9E',
          400: '#757575',
          500: '#616161',
          600: '#424242',
          700: '#2C2C2C', // Primary Charcoal
          800: '#212121',
          900: '#000000'
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'menu': ['Poppins', 'system-ui', 'sans-serif'],
        'accent': ['Dancing Script', 'cursive']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      boxShadow: {
        'food': '0 10px 25px -5px rgba(27, 94, 32, 0.1), 0 10px 10px -5px rgba(27, 94, 32, 0.04)',
        'food-lg': '0 25px 50px -12px rgba(27, 94, 32, 0.25)',
        'golden': '0 10px 25px -5px rgba(255, 193, 7, 0.3)',
        'terracotta': '0 4px 6px -1px rgba(216, 67, 21, 0.1)'
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'dish-hover': 'dishHover 0.3s ease-out',
        'cart-add': 'cartAdd 0.6s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        dishHover: {
          '0%': { transform: 'scale(1) rotateZ(0deg)' },
          '50%': { transform: 'scale(1.05) rotateZ(1deg)' },
          '100%': { transform: 'scale(1.03) rotateZ(0deg)' }
        },
        cartAdd: {
          '0%': { transform: 'scale(1)', backgroundColor: '#FFC107' },
          '50%': { transform: 'scale(1.2)', backgroundColor: '#4CAF50' },
          '100%': { transform: 'scale(1)', backgroundColor: '#FFC107' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%231B5E20\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"30\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      },
      screens: {
        'xs': '475px',
      },
      aspectRatio: {
        'food': '4/3',
        'hero': '16/9'
      }
    },
  },
  plugins: [],
}
