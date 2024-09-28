import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/header/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Four Leaf Clover",
  description:
    "Four Leaf Clover Pvt. Ltd. is a business process outsourcing company that provides its clients with accounting, email and social media marketing, lead generation and conversion, content creation, and client servicing. Education organizations, schools, and universities may save expenses, offer superior customer service, and free up resources to concentrate on more important tasks by streamlining their operations. As a BPO service provider, the business closely matches its values with that of its major customer before taking on the task of providing those values to the client's client. Stated otherwise, Four Leaf Clover acts as a business entity's representative when interacting with the client's consumers, who are individual natural persons.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
