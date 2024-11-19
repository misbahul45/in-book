import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center sm:min-h-screen sm:py-0 py-16 bg-blue-950 relative px-2 overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 gap-[2px]">
        {[...Array(300)].map((_, index) => (
          <div
            key={index}
            className="bg-blue-900 opacity-20 w-full h-full rounded hover:bg-blue-200 hover:shadow-sm transition-all duration-100"
          />
        ))}
      </div>
       <div className="text-center space-y-8 z-10">   
        <h1 className="md:text-8xl sm:text-7xl text-6xl text-white font-bold relative px-4 py-2 rounded bg-">
          In♾️Booku
        </h1>
        <p className="font-semibold text-white md:text-3xl sm:text-2xl text-lg w-full max-w-4xl mx-auto leading-8">
          Pada malam tanpa bulan yang sunyi, aku tidak merasa kesepian! Aku memiliki teman-teman terbaik - <span className="font-bold px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded backdrop-blur-md">buku-bukuku</span> yang menemaniku.
        </p>
        <div className="flex gap-4 mx-auto w-full max-w-md">
          <Link href={'/sign-in'} className="flex-1 font-bold md:py-4 py-2 text-xl bg-blue-950 text-white rounded-lg shadow-lg shadow-white/5 border-2 border-blue-950 hover:shadow-xl hover:bg-blue-950">🚀 Mulai 🚀</Link>
          <Link href={'/write'}  className="flex-1 font-bold md:py-4 py-2 text-xl bg-blue-700 text-white rounded-lg shadow-lg shadow-white/5 border-2 border-blue-800 hover:shadow-xl hover:bg-blue-800">✍️ Tulis ✍️</Link>
        </div>
       </div>
    </div>
  )
}

export default HeroSection