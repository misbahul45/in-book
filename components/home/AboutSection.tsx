import { GOALS } from '@/constans'
import React from 'react'
import Marquee from 'react-fast-marquee';

const AboutSection = () => {
  return (
    <div>
        <div className="text-center my-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                🚀 Our <span className="text-blue-600">Goals</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-500">
                Together, we strive to inspire, innovate, and elevate literacy for a brighter future. 💡
            </p>
        </div>
        <div className='rotate-[-0.5deg]'>
            <Marquee speed={100} gradient={false} pauseOnHover className="w-full max-w-6xl mx-auto p-4 my-4 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
                {GOALS.map((goal) => (
                    <div
                    key={goal.id}
                    className="px-4 py-2 mx-2 bg-slate-600 shadow-lg rounded-lg p-6 hover:shadow-2xl hover:bg-blue-950 transition-all duration-300"
                    >
                    <h3 className="md:text-xl text-lg font-bold text-center text-slate-100 mb-3 mx-6">
                        {goal.title}
                    </h3>
                    <p className="text-gray-100 text-center text-sm">{goal.description}</p>
                    </div>
                ))}
            </Marquee>
        </div>

    </div>
  )
}

export default AboutSection