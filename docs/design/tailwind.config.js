/**
 * Oak & Barrel - Tailwind CSS Configuration
 *
 * This config extends Tailwind with our design tokens.
 * Copy this to your project root as tailwind.config.js
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      // Colors
      colors: {
        amber: {
          DEFAULT: '#E8A54B',
          light: '#F5C670',
          deep: '#C4872F',
        },
        cream: {
          DEFAULT: '#FDF6E9',
          soft: '#FFFDF8',
        },
        sand: '#F5EBD9',
        charcoal: '#2D2926',
        'warm-gray': '#6B635A',
        'oak-brown': '#8B6914',
        success: '#5D8A4A',
        warning: '#D4A03D',
        error: '#C45B4A',
        info: '#5B7B8C',
      },

      // Typography
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        script: ['Dancing Script', 'cursive'],
        body: ['Source Sans 3', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },

      fontSize: {
        'display-xl': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-lg': ['3rem', { lineHeight: '1.15', fontWeight: '700' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', fontWeight: '500' }],
        'display-sm': ['1.75rem', { lineHeight: '1.25', fontWeight: '500' }],
        'script-lg': ['2.5rem', { lineHeight: '1.3', fontWeight: '500' }],
        'script-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
      },

      // Spacing (extends default)
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },

      // Border Radius
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },

      // Box Shadow
      boxShadow: {
        'sm': '0 1px 3px rgba(45, 41, 38, 0.08)',
        'md': '0 4px 12px rgba(45, 41, 38, 0.1)',
        'lg': '0 8px 24px rgba(45, 41, 38, 0.12)',
        'xl': '0 16px 48px rgba(45, 41, 38, 0.16)',
        'glow': '0 4px 24px rgba(232, 165, 75, 0.3)',
      },

      // Animation
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'swift': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },

      transitionDuration: {
        'instant': '100ms',
        'fast': '150ms',
        'normal': '250ms',
        'slow': '400ms',
        'slower': '600ms',
      },

      // Animation keyframes
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-10deg)' },
        },
      },

      animation: {
        'fade-in-up': 'fadeInUp 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'wave': 'wave 2s ease-in-out infinite',
      },

      // Container
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          md: '3rem',
          xl: '4rem',
        },
        screens: {
          xl: '1280px',
        },
      },
    },
  },

  plugins: [
    // Custom plugin for design system utilities
    function({ addUtilities, addComponents, theme }) {
      // Typography utilities
      addUtilities({
        '.font-display': {
          fontFamily: theme('fontFamily.display'),
        },
        '.font-script': {
          fontFamily: theme('fontFamily.script'),
        },
        '.font-body': {
          fontFamily: theme('fontFamily.body'),
        },
      });

      // Button components
      addComponents({
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: theme('fontFamily.body'),
          fontWeight: '600',
          fontSize: theme('fontSize.base'),
          padding: `${theme('spacing.3')} ${theme('spacing.8')}`,
          borderRadius: theme('borderRadius.full'),
          transition: `all ${theme('transitionDuration.fast')} ${theme('transitionTimingFunction.smooth')}`,
          cursor: 'pointer',
        },
        '.btn-primary': {
          backgroundColor: theme('colors.amber.DEFAULT'),
          color: theme('colors.white'),
          border: 'none',
          boxShadow: theme('boxShadow.sm'),
          '&:hover': {
            backgroundColor: theme('colors.amber.deep'),
            boxShadow: theme('boxShadow.glow'),
            transform: 'translateY(-1px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        '.btn-secondary': {
          backgroundColor: 'transparent',
          color: theme('colors.amber.DEFAULT'),
          border: `2px solid ${theme('colors.amber.DEFAULT')}`,
          '&:hover': {
            backgroundColor: theme('colors.amber.DEFAULT'),
            color: theme('colors.white'),
          },
        },
      });

      // Card components
      addComponents({
        '.card': {
          backgroundColor: theme('colors.cream.soft'),
          borderRadius: theme('borderRadius.xl'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.sm'),
          transition: `all ${theme('transitionDuration.normal')} ${theme('transitionTimingFunction.smooth')}`,
          '&:hover': {
            boxShadow: theme('boxShadow.md'),
            transform: 'translateY(-4px)',
          },
        },
      });
    },
  ],
};
