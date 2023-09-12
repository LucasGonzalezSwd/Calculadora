import {render , screen } from '@testing-library/react'
import Display from '@/app/Components/Display';
import exp from 'constants';

describe('Display Component', ()=>{
   
     let displayComponent;
     let value;
     let  mockedValue = "100";

    test('should return Display component', () => {

        render(<Display value=''/>)
        displayComponent = screen.getByTestId('display-component')
        expect(displayComponent).toBeInTheDocument()

    });
     
    test('value should be equal to the prop value', () => {
        // Renderiza el componente Display con el valor propuesto
        render(<Display value={mockedValue} />);
        value = screen.getByRole('heading');
    
        // Verifica si el elemento existe en el documento y si su contenido coincide con el valor propuesto
        expect(value).toBeInTheDocument();
        expect(value.textContent).toBe(mockedValue);

    });

})
