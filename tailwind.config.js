/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
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
  			}
  		},
  		fontFamily: {
  			abeezee: ['"ABeeZee"', 'sans-serif'],
  		},
  		backgroundImage: {
  			'hero-main': "url('/terence-burke-ianPiLGoZBM-unsplash.jpg')",
  			'banking': "url('/wallet-gbe210c72b_640.jpg')",
  			'communication': "url('/skyscrapers-ge9fc59c2c_640.jpg')",
  			'electronics': "url('/sahand-babali-owjrvbyXYyc-unsplash.jpg')",
  			'consumer-goods': "url('/fikri-rasyid-ezeC8-clZSs-unsplash (1).jpg')",
  			'education': "url('/alexandre-van-thuan-mr9FouttLGY-unsplash.jpg')",
  			'construction': "url('/public/josue-isai-ramos-figueroa-qvBYnMuNJ9A-unsplash (1).jpg')",
  			'industries-process': "url('/public/mech-mind-Xl_l8laGNs0-unsplash.jpg')",
  			'insurance': "url('/public/real-estate-g3201fb00d_640.jpg')",
  			'life-science': "url('/public/female-scientist-typing-her-computer-data-from-last-scientific-tests-chemistry-lab.jpg')",
  			'media-info': "url('/public/corporate-management-strategy-solution-branding-concept.jpg')",
  			'natural-resources': "url('/public/smart-agriculture-iot-with-hand-planting-tree-background.jpg')",
  			'oil-gas': "url('/public/closeup-view-cylindrical-grinder-industrial-concept.jpg')",
  			'products-platforms': "url('/public/standard-quality-control-concept-m-1.jpg')",
  			'professional-services': "url('/public/christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg')",
  			'public-sector': "url('/public/business-people-board-room-meeting.jpg')",
  			'retail': "url('/public/family-shopping-with-face-mask.jpg')",
  			'semiconductor': "url('/public/closeup-electronic-circuit-board-with-cpu-microchip-electronic-components-background.jpg')",
  			'transportation': "url('/public//full-shot-man-walking-by-trucks-fleet.jpg')",
  			'utilities': "url('/public/sun-setting-silhouette-electricity-pylons.jpg')",
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

