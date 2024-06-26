import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-Montserrat"
});

export const metadata = {
  title: "Jasur Khamzayev - Software Engineer",
  description: "Generated by Jasur Portfolio App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
