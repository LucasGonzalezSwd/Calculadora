"use client"
import '../../app/globals.css'
import {ButtonProps} from '../../types'

export default function Boton ({clickHandle, name} : ButtonProps) {

  const handleClick = () => clickHandle(name)

  let buttonStyle = 'bg-[#EBEBEB] w-[4rem] h-[3.5rem] rounded-xl border-b-[#a0a6a1] border-b-4 font-bold text-3xl shadow-sm shadow-black/100 max-[319px]:w-[3rem] max-[319px]:h-[2.5rem] max-[319px]:text-2xl max-[900px]:w-[3.5rem] max-[900px]:h-[3rem]';

  if (name === '=') {
    buttonStyle = 'bg-[#F7A54E]  w-[4rem] h-[3.5rem] rounded-xl border-b-[#D4852C] border-b-4 font-bold text-3xl shadow-sm shadow-black/100 max-[319px]:w-[3rem] max-[319px]:h-[2.5rem] max-[319px]:text-2xl max-[900px]:w-[3.5rem] max-[900px]:h-[3rem]';
  }

  if (name === 'AC') {
    buttonStyle = 'bg-[#c42020]   w-[4rem] h-[3.5rem] rounded-xl border-b-[#9d1919] border-b-4 font-bold text-3xl shadow-sm shadow-black/100 max-[319px]:w-[3rem] max-[319px]:h-[2.5rem] max-[319px]:text-2xl max-[900px]:w-[3.5rem] max-[900px]:h-[3rem]';
  }
  if (name === '+') {
    buttonStyle = 'bg-[#EBEBEB] w-[4rem] h-[8.6rem] rounded-xl border-b-[#a0a6a1] border-b-4 font-bold text-3xl absolute shadow-sm shadow-black/100 max-[319px]:w-[3rem] max-[319px]:h-[6.6rem] max-[319px]:text-2xl max-[900px]:w-[3.5rem] max-[900px]:h-[7.57rem]';
  }

      return (
        <div className=' w-full mt-[1.6rem] flex justify-center' data-testid="button-component">
          <button className={buttonStyle} onClick={handleClick}>{name}</button>
        </div>
      );
  }