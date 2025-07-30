'use client';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Provider } from 'react-redux';
import store from './Store/store';
import Navbar from '@/components/Navbar';
import { Silkscreen } from 'next/font/google';

const silkscreen = Silkscreen({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta name="theme-color" content="#22c55e" />
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="mx-auto w-[80%] py-10 select-none">
              <main className={silkscreen.className}>
                <Navbar />
                {children}
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </Provider>
  );
}
