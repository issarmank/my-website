'use client'; 
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        LETS BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className='py-4 text-gray-700'> 
                        Hi, I'm <span className='text-blue-500'>Issar</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>Full Stack Engineer</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        Currently interested in web dev, AI, and machine learning. 
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedin size={22}/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub size={22}/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail size={22}/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill size={22}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default Main;