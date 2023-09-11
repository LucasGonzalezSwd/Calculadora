"use client"

import React, { useState, useEffect } from "react";
import Display from "./Display";
import PanelDeBotones from "./PanelDeBotones";
import { operaciones } from "../../logic/operaciones";
import '../../app/globals.css'
import {State} from '../../types'


function App() {
  const [state, setState] =useState<State>({
    total: null,
    siguiente: null,
    operador: null,
  });

  const handleClick = (nombreDeBoton : string) => {
    setState((prevState) => {

      const newState = operaciones(prevState, nombreDeBoton);
      
      return { ...prevState, ...newState };
    });
  };
  
  //border-[#202124]
  return (
    <div className="bg-[#575757] mt-[3rem] w-[30%] rounded-2xl border-b-8  border-[#202124] h-[31rem]" data-testid="app-component">
         
        <div className="flex justify-center mt-[1rem]" data-testid="display-component">
      <Display value={state.siguiente || state.total || "0"} />
          </div>  

       <div className="flex" data-testid="panel-de-botones-component">

      <PanelDeBotones clickHandle={handleClick} />
          </div>
    </div>
  );
}

export default App;


