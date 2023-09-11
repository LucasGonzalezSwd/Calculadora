export interface State {
    total: string | null | undefined;
    siguiente: string | null;
    operador: string | null;
  }


export interface DisplayProps {
    value: string;
  }
export interface PanelDeBotonesProps {
    clickHandle: (nombreDeBoton: string) => void;
  }
export interface ButtonProps {
    clickHandle: (nombreDeBoton: string) => void;
    name: string;
  }  