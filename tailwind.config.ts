import type { Config } from "tailwindcss";

// all in fixtures is set to tailwind v3 as interims solutions

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["var(--font-sans)"],
  			display: ["var(--font-display)"],
  		},
  		colors: {
  			herbal: {
  				mint: "#eefbf2",
  				"mint-dark": "#dcefe0",
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'herb-float': {
  				'0%, 100%': {
  					transform: 'translateY(0) rotate(0deg)'
  				},
  				'33%': {
  					transform: 'translateY(-18px) rotate(6deg)'
  				},
  				'66%': {
  					transform: 'translateY(-8px) rotate(-4deg)'
  				}
  			},
  			'float-slow': {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-10px)' }
  			},
  			'pulse-soft': {
  				'0%, 100%': { opacity: '0.6' },
  				'50%': { opacity: '1' }
  			},
  			marquee: {
  				'0%': { transform: 'translateX(0)' },
  				'100%': { transform: 'translateX(-50%)' }
  			},
  			'fade-up': {
  				'0%': { opacity: '0', transform: 'translateY(12px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			},
  			wiggle: {
  				'0%, 100%': { transform: 'rotate(-3deg)' },
  				'50%': { transform: 'rotate(3deg)' }
  			},
  			'blob-drift': {
  				'0%, 100%': { transform: 'translate(0, 0) scale(1)' },
  				'50%': { transform: 'translate(24px, -18px) scale(1.06)' }
  			},
  			shimmer: {
  				'0%': { backgroundPosition: '200% center' },
  				'100%': { backgroundPosition: '-200% center' }
  			},
  			'nav-underline': {
  				'0%': { transform: 'scaleX(0)' },
  				'100%': { transform: 'scaleX(1)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'herb-float': 'herb-float 7s ease-in-out infinite',
  			'float-slow': 'float-slow 5s ease-in-out infinite',
  			'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
  			marquee: 'marquee 35s linear infinite',
  			'fade-up': 'fade-up 0.6s ease-out forwards',
  			wiggle: 'wiggle 0.5s ease-in-out',
  			'blob-drift': 'blob-drift 12s ease-in-out infinite',
  			shimmer: 'shimmer 3s linear infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
