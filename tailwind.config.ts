import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        disable: "var(--disable)",
        secondary: "var(--secondary)",
        primaryGradient: "var(--primary-gradient)",
        field: "var(--bg-input)",
        subText:"#53C7EA",
        // background: 'hsl(var(--background))',
        // 	foreground: 'hsl(var(--foreground))',
        // 	primary: {
        // 		DEFAULT: 'hsl(var(--primary))',
        // 		foreground: 'hsl(var(--primary-foreground))'
        // 	},
        // 	disable: 'var(--disable)',
        // 	secondary: {
        // 		DEFAULT: 'hsl(var(--secondary))',
        // 		foreground: 'hsl(var(--secondary-foreground))'
        // 	},
        // 	primaryGradient: 'var(--primary-gradient)',
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      width: {
        pageContent: "var(--page-content-with)",
      },
      fontSize: {
        title: "var(--title-font-size)",
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(2px)" },
          "30%": { transform: "translateY(4px)" },
          "40%": { transform: "translateY(6px)" },
          "50%": { transform: "translateY(8px)" },
          "60%": { transform: "translateY(10px)" },
          "70%": { transform: "translateY(8px)" },
          "80%": { transform: "translateY(6px)" },
          "90%": { transform: "translateY(4px)" },
          "95%": { transform: "translateY(2px)" },
          "100%": { transform: "translateY(0px)" },
        },
        popup: {
          "0%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(2px)" },
          "30%": { transform: "translateY(4px)" },
          "40%": { transform: "translateY(6px)" },
          "50%": { transform: "translateY(8px)" },
          "60%": { transform: "translateY(10px)" },
        },
      },

      animation: {
        "wave-slow": "wave 4s ease-in infinite",
      },
    },
    // extend: {
    // 	colors: {
    // 		background: 'hsl(var(--background))',
    // 		foreground: 'hsl(var(--foreground))',
    // 		primary: {
    // 			DEFAULT: 'hsl(var(--primary))',
    // 			foreground: 'hsl(var(--primary-foreground))'
    // 		},
    // 		disable: 'var(--disable)',
    // 		secondary: {
    // 			DEFAULT: 'hsl(var(--secondary))',
    // 			foreground: 'hsl(var(--secondary-foreground))'
    // 		},
    // 		primaryGradient: 'var(--primary-gradient)',
    // 		card: {
    // 			DEFAULT: 'hsl(var(--card))',
    // 			foreground: 'hsl(var(--card-foreground))'
    // 		},
    // 		popover: {
    // 			DEFAULT: 'hsl(var(--popover))',
    // 			foreground: 'hsl(var(--popover-foreground))'
    // 		},
    // 		muted: {
    // 			DEFAULT: 'hsl(var(--muted))',
    // 			foreground: 'hsl(var(--muted-foreground))'
    // 		},
    // 		accent: {
    // 			DEFAULT: 'hsl(var(--accent))',
    // 			foreground: 'hsl(var(--accent-foreground))'
    // 		},
    // 		destructive: {
    // 			DEFAULT: 'hsl(var(--destructive))',
    // 			foreground: 'hsl(var(--destructive-foreground))'
    // 		},
    // 		border: 'hsl(var(--border))',
    // 		input: 'hsl(var(--input))',
    // 		ring: 'hsl(var(--ring))',
    // 		chart: {
    // 			'1': 'hsl(var(--chart-1))',
    // 			'2': 'hsl(var(--chart-2))',
    // 			'3': 'hsl(var(--chart-3))',
    // 			'4': 'hsl(var(--chart-4))',
    // 			'5': 'hsl(var(--chart-5))'
    // 		}
    // 	},
    // 	keyframes: {
    // 		wave: {
    // 			'0%': {
    // 				transform: 'translateY(0)'
    // 			},
    // 			'20%': {
    // 				transform: 'translateY(2px)'
    // 			},
    // 			'30%': {
    // 				transform: 'translateY(4px)'
    // 			},
    // 			'40%': {
    // 				transform: 'translateY(6px)'
    // 			},
    // 			'50%': {
    // 				transform: 'translateY(8px)'
    // 			},
    // 			'60%': {
    // 				transform: 'translateY(10px)'
    // 			},
    // 			'70%': {
    // 				transform: 'translateY(8px)'
    // 			},
    // 			'80%': {
    // 				transform: 'translateY(6px)'
    // 			},
    // 			'90%': {
    // 				transform: 'translateY(4px)'
    // 			},
    // 			'95%': {
    // 				transform: 'translateY(2px)'
    // 			},
    // 			'100%': {
    // 				transform: 'translateY(0px)'
    // 			}
    // 		},
    // 		popup: {
    // 			'0%': {
    // 				transform: 'translateY(0)'
    // 			},
    // 			'20%': {
    // 				transform: 'translateY(2px)'
    // 			},
    // 			'30%': {
    // 				transform: 'translateY(4px)'
    // 			},
    // 			'40%': {
    // 				transform: 'translateY(6px)'
    // 			},
    // 			'50%': {
    // 				transform: 'translateY(8px)'
    // 			},
    // 			'60%': {
    // 				transform: 'translateY(10px)'
    // 			}
    // 		}
    // 	},
    // 	animation: {
    // 		'wave-slow': 'wave 4s ease-in infinite'
    // 	},
    // 	borderRadius: {
    // 		lg: 'var(--radius)',
    // 		md: 'calc(var(--radius) - 2px)',
    // 		sm: 'calc(var(--radius) - 4px)'
    // 	}
    // }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
