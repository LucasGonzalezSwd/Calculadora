"use client"
import '../../app/globals.css'
import {ButtonProps} from '../../types'

export default function Boton ({clickHandle, name} : ButtonProps) {

  const handleClick = () => clickHandle(name)

  let buttonStyle = 'bg-[#EBEBEB] w-[3.5rem] h-[3rem] rounded-xl border-b-[#a0a6a1] border-b-4 font-bold text-3xl';

  if (name === '=') {
    buttonStyle = 'bg-[#F7A54E] w-[3.5rem] h-[3rem] rounded-xl border-b-[#D4852C] border-b-4 font-bold text-3xl';
  }

  if (name === 'AC') {
    buttonStyle = 'bg-[#c42020]  w-[3.5rem] h-[3rem] rounded-xl border-b-[#9d1919] border-b-4 font-bold text-3xl';
  }
  if (name === '+') {
    buttonStyle = 'bg-[#EBEBEB] w-[3.5rem] h-[7.6rem] rounded-xl border-b-[#a0a6a1] border-b-4 font-bold text-3xl absolute';
  }

      return (
        <div className=' w-full mt-[1.6rem] flex justify-center'>
          <button className={buttonStyle} onClick={handleClick}>{name}</button>
        </div>
      );
  }