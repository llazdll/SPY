"use client";  
import "./globals.css";  
import { ThemeProvider } from "@/components/ui/theme-provider";  
import { Provider } from "react-redux";  
import store from "./Store/store";  
import Navbar from "@/components/Navbar";  
import { Silkscreen } from 'next/font/google'; // Import Silkscreen  

// Initialize the Silkscreen font  
const silkscreen = Silkscreen({ subsets: ['latin'], weight: '400' })
export default function RootLayout({  
  children,  
}: Readonly<{  
  children: React.ReactNode;  
}>) {  
  return (  
    <Provider store={store}>  
      <html lang="en">  
        <body>  
          <ThemeProvider  
            attribute="class"  
            defaultTheme="system"  
            enableSystem  
            disableTransitionOnChange  
          >  
            <div className="mx-auto w-[80%] py-10">  
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