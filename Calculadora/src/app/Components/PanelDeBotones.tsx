"use client"
import Button from "./Button"
import { PanelDeBotonesProps } from "../../types"
import '../../app/globals.css'

export default function PanelDeBotones ({clickHandle}:PanelDeBotonesProps ) {
  
    const handleClick = (nombreDeBoton: string) => {
      clickHandle(nombreDeBoton)
    }
    
    return (
        <div className="flex mt-[0.5rem] flex-col w-full  " data-testid="panel-component" >
          <div className="w-full flex ">
            <Button  name="AC" clickHandle={handleClick}/>
            <Button name="+/-" clickHandle={handleClick}/>
            <Button name="%" clickHandle={handleClick}/>
            <Button name="/" clickHandle={handleClick}/>
          </div>
          <div className="w-full flex">
            <Button name="7" clickHandle={handleClick} />
            <Button name="8" clickHandle={handleClick} />
            <Button name="9" clickHandle={handleClick} />
            <Button  name="x" clickHandle={handleClick}/>
          </div>
          <div className="w-full flex">
            <Button name="4" clickHandle={handleClick} />
            <Button name="5" clickHandle={handleClick} />
            <Button name="6" clickHandle={handleClick} />
            <Button name="-" clickHandle={handleClick}/>
          </div>
          <div className="w-full flex">
            <div className="w-full">
            <Button name="1" clickHandle={handleClick} />
            </div>
            <div className="w-full">
            <Button name="2" clickHandle={handleClick} />         
            </div>
            <div className="w-full">
            <Button name="3" clickHandle={handleClick} />
            </div>
            <div className="w-full ">
            <Button name="+" clickHandle={handleClick} />
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-1/4"><Button name="0" clickHandle={handleClick} /></div>
            <div className="w-1/4"> <Button name="." clickHandle={handleClick} /></div>
            <div className="w-1/4"> <Button name="=" clickHandle={handleClick}/></div>
            
           
           
          </div>
        </div>
      );
  }