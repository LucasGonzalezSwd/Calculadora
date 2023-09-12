import {render , screen, fireEvent } from '@testing-library/react'
import Boton from '@/app/Components/Button';

describe('Button component', ()=>{
   
    let  mockClickHandle;
    let buttonComponent;
    let button;
    
    test('should render button component', () => {
        render(<Boton clickHandle={() => {}} name="+"/>)
        buttonComponent = screen.getByTestId('button-component') 
       expect(buttonComponent).toBeInTheDocument()
    });

    test('should render button where call nameButton', () => {
       render(<Boton clickHandle={() => {}} name="+"/>)
         button = screen.getByRole('button', {name: '+'}) 
        expect(button).toBeInTheDocument()
     });

    test('if clicked button return name = nameButton', () => {
         mockClickHandle = jest.fn();
        render(<Boton clickHandle={mockClickHandle} name="=" />);
        button = screen.getByRole('button', {name: '='}) 
        fireEvent.click(button);
        expect(mockClickHandle).toHaveBeenCalledWith('=');
     });
})
