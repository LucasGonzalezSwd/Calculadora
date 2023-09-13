"use client"
import '../../app/globals.css'
import { DisplayProps } from '../../types'


export default function Display ({value} : DisplayProps) {
    return (
      <div className='bg-[#8ca992] w-[80%] h-[4rem] items-center flex justify-end text-4xl rounded-xl shadow-lg shadow-gray-900/40 drop-shadow-2xl   border-[0.001rem] border-[#16171a] mt-[0.3rem]' data-testid="display-component">
        <div>
          <h1 className='letraD pr-[0.5rem]'>{value}</h1></div>
      </div>
    )
}