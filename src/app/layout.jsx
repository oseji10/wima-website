import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/scss/modal-video.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

import InitializeAOS from "@/helper/InitializeAOS";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import ColorPalate from "@/helper/ColorPalate";

export const metadata = {
 title: {
    default: 'Women In Mechanized Agriculture - WIMA', // Default title for all pages
    template: '%s | Women In Mechanized Agriculture - WIMA', // Template for page-specific titles
  },
  description: "WIMA is the first and only women-led agricultural mechanization association in Nigeria, dedicated to empowering women farmers through access to modern farming",
  keywords: ['WIMA', 'women in agriculture', 'women in nigeria', 'mechanized agriculture', 'mechanized agriculture in nigeria', 
    'nigerian women', 'farming women', 'tractor', 'women in tractor', 'tractor nigerai', 'hello tractor'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'WIMA | Women in Mechanized Agriculture',
    description: 'WIMA is the first and only women-led agricultural mechanization association in Nigeria, dedicated to empowering women farmers through access to modern farming',
    url: 'https://wimanigeria.com',
    siteName: 'Women In Mechanized Agriculture',
    images: [
      {
        url: 'https://new.wimanigeria.com/assets/images/wima-base.png',
        width: '100%',
        height:  '100%',
        alt: 'WIMA Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WIMA | Women In Mechanized Agriculture',
    description: 'WIMA is the first and only women-led agricultural mechanization association in Nigeria, dedicated to empowering women farmers through access to modern farming',
    images: ['https://new.wimanigeria.com/assets/images/wima-base.png'],
  },

  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@400..700&family=Hubot+Sans:ital,wght@0,200..900;1,200..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/assets/fonts/css/all.min.css" />
        <link rel="stylesheet" href="/assets/fonts/css/flag-icons.min.css" />
        <link rel="stylesheet" href="/assets/fonts/css/charifund.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />

        <link
          rel="stylesheet"
          href="/assets/css/default-theme.css"
          id="switch-color"
        />
        <link rel="stylesheet" href="/assets/css/sticky-header.css" />
        <link rel="stylesheet" href="/assets/css/box-layout.css" />
        <link rel="stylesheet" href="/assets/css/flag-icons.min.css" />
        <link rel="stylesheet" href="/assets/css/dark-mode.css" />
      </head>
      <body suppressHydrationWarning={true}>
        <InitializeAOS />
        <RouteScrollToTop />
        {/* <ColorPalate /> */}

        {children}

        <script src="/assets/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
