import React from 'react'
import pic from '../assets/bulb.png'

export default function Home() {
    return (
        <div className='bg-green-50'>
            <div className='grid w-full  lg:grid-cols-2 sm:grid-cols-1 '>
            <div className='w-100 h-100 '>
                <img src={pic} className='w-56 h-30 m-auto mt-9' />
                </div>
                <div className=' w-full p-3 text-left justify-center items-center flex-col flex'>
                    <h2 className='text-xl font-bold mb-2 '>Skills makes information useful, and enables people
                        to apply knowledge
                        to make things better</h2>
                    <p className='text-xl'>
                        The purpose of the EdTech Platform membership is to connect educators and other individuals who are passionate about tech-enabled education with a community that shares their interests and goals.
                        The program aims to provide a platform for members to share their knowledge and expertise with others, collaborate on projects and initiatives that can make a real difference in education, and access a range of educational resources and professional development opportunities. Ultimately, the program seeks to improve the learning experience for students and make a positive impact on the wider community.
                        Whether you’re an experienced educator or just starting out, we welcome your participation in our community.
                    </p>
                    <button className='text-sm font-bold  mt-5 hover:text-lg text-left border border-slate-950 px-5 py-1 rounded-xl text-blue-900'>Become a Member</button>
                </div>
            </div>
        </div>
    )
}

