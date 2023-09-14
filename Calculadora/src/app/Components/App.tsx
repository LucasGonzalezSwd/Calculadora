"use client"

import React, { useState, useEffect } from "react";
import Display from "./Display";
import PanelDeBotones from "./PanelDeBotones";
import { operaciones } from "../../logic/operaciones";
import '../../app/globals.css'
import {State} from '../../types'
import { handleKeyPress } from "../../logic/operaciones";

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
  
  useEffect(() => {
    // Agrega el listener del evento de teclado cuando el componente se monta
    window.addEventListener("keydown", (event) => handleKeyPress(event, handleClick));

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("keydown", (event) => handleKeyPress(event, handleClick));
    };
  }, []);

  //border-[#202124]
  return (
    <div className="bg-[#575757] w-[25rem]  mt-[3rem] max-[320px]:w-full max-[360px]:w-full max-[450px]:w-[17rem] max-[720px]:w-[20rem] max-[900px]:w-[22rem] max-[1200px]:w-[24rem] max-[1525px]:w-[25rem]  rounded-2xl border-8 border-l-4 border-r-4 border-t-4 border-[#202124] h-[33.5rem] mb-[2rem] max-[319px]:h-[29rem] max-[900px]:h-[31rem]" data-testid="app-component">
         
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


