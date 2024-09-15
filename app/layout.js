import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import UserContextProvider from "@/context/userContext";

const geistSans = localFont({ src: "./fonts/GeistVF.woff", variable: "--font-geist-sans", weight: "100 900" });
const geistMono = localFont({ src: "./fonts/GeistMonoVF.woff", variable: "--font-geist-mono", weight: "100 900" });

export const metadata = {
    title: "Admin Interface",
    description: "This is an admin interface UI demo"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body >
                <ThemeProvider
                    attribute='class'
                    defaultTheme='light'
                    enableSystem={false}
                    storageKey='dashboard-theme'>
                    <UserContextProvider>
                        <Navbar />
                        <div className="flex">
                            <div className="hidden  md:block h-[100vh] w-[300px]">
                                <Sidebar />
                            </div>
                            <div className="w-full p-5 md:max-w-[1140px]">
                                {children}
                            </div>
                        </div>
                        <Toaster />
                    </UserContextProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
