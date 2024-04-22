import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        <div className="md:hidden w-full h-screnn flex items-center justify-center">
          <h1 className="text-4xl">
            Unfortunately,the Teacher Panel cannot pe accessed from mobile
            devices.
          </h1>
        </div>
        <div className="hidden md:block">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
