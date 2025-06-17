'use client'
import Feed from "@/Components/Feed";
import Sidebar from "@/Components/Sidebar";
import Widgets from "@/Components/Widgets";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
  <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
    <Head>
      <title>B or not</title>
    </Head>

    <main className="grid grid-cols-9">
      <Sidebar/>

      <Feed/>

      <Widgets/>
         </main>
    </div>
  ) 
}