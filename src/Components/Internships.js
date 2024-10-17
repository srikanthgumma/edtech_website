import React, { useState } from 'react'

export default function Internships() {
    return (
        <div className='bg-green-50'>
            <h1 className='font-bold text-2xl text-center text-blue-900 pt-16 mb-8'>Internship Programs</h1>
            <div className=' p-3 grid xl:grid-cols-3 lg:grid-cols-2 gap-4'>
                <div className='  p-5  rounded-xl shadow-slate-300 hover:shadow-2xl'>
                    <h4 className='font-sans mb-1 text-xs opacity-60'>Build Skills That Deliver Results</h4>
                    <h1 className='font-bold text-xl mb-1 text-blue-900'>SDE Internship Program - 2024</h1>
                    <p className='text-xs'>
                        Hands-on Experience | Skill Development | Logical Thinking | Perfect Development | Networking Opportunities | Programming Skills | More...
                    </p>
                    <button className='mt-3 text-blue-900 font-bold text-xs' >Check Eligibility and Apply</button>
                </div>
                <div className=' p-5  rounded-xl h-fit shadow-slate-300 hover:shadow-2xl'>
                    <h4 className='font-sans mb-1 text-xs opacity-60'>Build Skills That Deliver Results</h4>
                    <h1 className='font-bold text-xl mb-1 text-blue-900'>Testing Internship Program - 2024</h1>
                    <p className='text-xs'>
                        Hands-on Experience | Skill Development | Logical Thinking | Perfect Development | Networking Opportunities | Programming Skills | More...
                    </p>
                    <button className='mt-3 text-blue-900 font-bold text-xs'>Check Eligibility and Apply</button>
                </div>
                <div className=' p-5  rounded-xl shadow-slate-300 hover:shadow-2xl'>
                    <h4 className='font-sans mb-1 text-xs opacity-60'>Build Skills That Deliver Results</h4>
                    <h1 className='font-bold text-xl mb-1 text-blue-900'>UI/UX Internship Program - 2024</h1>
                    <p className='text-xs'>
                        Hands-on Experience | Graphics | Creative Thinking | Perfect design | Networking Opportunities | Awesome ideas | More...
                    </p>
                    <button className='mt-3 text-blue-900 font-bold text-xs'>Check Eligibility and Apply</button>
                </div>
                <div className=' p-5  rounded-xl shadow-slate-300 hover:shadow-2xl'>
                    <h4 className='font-sans mb-1 text-xs opacity-60'>Build Skills That Deliver Results</h4>
                    <h1 className='font-bold text-xl mb-1 text-blue-900'>Data Science Internship Program - 2024</h1>
                    <p className='text-xs'>
                        Hands-on Experience | Data Development | Data Management | Perfect Development | Networking Opportunities | Programming Skills | More...
                    </p>
                    <button className='mt-3 text-blue-900 font-bold text-xs'>Check Eligibility and Apply</button>
                </div>
                <div className=' p-5  rounded-xl  shadow-slate-300 hover:shadow-2xl'>
                    <h4 className='font-sans mb-1 text-xs opacity-60'>Build Skills That Deliver Results</h4>
                    <h1 className='font-bold text-xl mb-1 text-blue-900'>Full Stack Internship Program - 2024</h1>
                    <p className='text-xs'>
                        Hands-on Experience | Skill Development | Logical Thinking | Perfect Development | Networking Opportunities | Programming Skills | More...
                    </p>
                    <button className='mt-3 text-blue-900 font-bold text-sm'>Check Eligibility and Apply</button>
                </div>
                <div className=' p-5  shadow-slate-300 hover:shadow-2xl rounded-xl'>
                    <h4 className='font-sans mb-1 text-xs opacity-60'>Build Skills That Deliver Results</h4>
                    <h1 className='font-bold text-xl mb-1 text-blue-900'>Associate Internship Program - 2024</h1>
                    <p className='text-xs'>
                        Hands-on Experience | Skill Development | Logical Thinking | Perfect Development | Networking Opportunities | Programming Skills | More...
                    </p>
                    <button className='mt-3 text-blue-900 font-bold text-xs'>Check Eligibility and Apply</button>
                </div>
            </div>
        </div>
    )
}

