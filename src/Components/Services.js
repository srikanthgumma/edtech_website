import React from 'react'

export default function Services() {
  return (
    <div className=' bg-green-50'>
      <h1 className='font-bold text-center text-4xl text-blue-900  pt-8 mb-10'>Services</h1>
      <div className='grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2'>
        <div className=' p-5 rounded-xl h-fit shadow-slate-300 hover:shadow-2xl'>
          <h4 className='font-sans mb-1 text-xs opacity-60'>Silver Services</h4>
          <h1 className='font-bold text-xl mb-1'>Education X Discpline</h1>
          <p className='text-xs font-medium'>
            Conent: Why discpline?, pros & cons,experience 0r expertise
          </p>
          <h1 className='text-xs font-bold opacity-70'>
            Price:  599/-
          </h1>
          <h1 className='text-xs font-bold opacity-70'>
            Duration: 3 Days
          </h1>
          <button className='mt-1 text-blue-900 font-bold text-sm'>Schedule  Now</button>
        </div>
        <div className=' p-5  rounded-xl h-fit shadow-slate-300 hover:shadow-2xl '>
          <h4 className='font-sans mb-1 text-xs opacity-60'>Gold Services</h4>
          <h1 className='font-bold text-xl mb-1'>Programming Skills & languages</h1>
          <p className='text-xs font-medium'>
            Conent: programming, pros & cons, technical skills,logical thinking...
          </p>
          <h1 className='text-xs font-bold opacity-70'>
            Price:  1999/-
          </h1>
          <h1 className='text-xs font-bold opacity-70'>
            Duration: 10 Days
          </h1>
          <button className='mt-1 text-blue-900 font-bold text-sm'>Schedule Now</button>
        </div>
        <div className=' p-5  rounded-xl h-fit shadow-slate-300 hover:shadow-2xl'>
          <h4 className='font-sans mb-1 text-xs opacity-60'>PLatinum Services</h4>
          <h1 className='font-bold text-xl mb-1'>Buidling An Application</h1>
          <p className='text-xs font-medium'>
            Conent: frontend, database, data analysis, API routing
          </p>
          <h1 className='text-xs font-bold opacity-70'>
            Price:  2999/-
          </h1>
          <h1 className='text-xs font-bold opacity-70'>
            Duration:  30 Days
          </h1>
          <button className='mt-1 text-blue-900 font-bold text-sm'>Schedule Now</button>
        </div>
      </div>
    </div>
  )
}

