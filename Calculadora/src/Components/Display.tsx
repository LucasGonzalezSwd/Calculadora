"use client"
import '../app/globals.css'
import { DisplayProps } from '../types'


export default function Display ({value} : DisplayProps) {
    return (
      <div className='bg-[#BCD0C0] w-[80%] h-[4rem] items-center flex justify-end text-4xl rounded-2xl shadow-lg shadow-gray-900/40 drop-shadow-xl mt-[0.3rem]'>
        <div className='letraD '>{value}</div>
      </div>
    )
}