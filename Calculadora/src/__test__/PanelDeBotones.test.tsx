import {render , screen, fireEvent} from '@testing-library/react'
import PanelDeBotones from '@/app/Components/PanelDeBotones';

describe('panelDeBotones component', ()=>{
    
    test('should be render panelDeBotones component', () => {
      
        render(<PanelDeBotones clickHandle={()=>{}} />);
        const panelDeBotonesComponent = screen.getByTestId('panel-component');
        expect(panelDeBotonesComponent).toBeInTheDocument()
    });
  
    test('should call clickHandle with "+" when the "+" button is clicked', ()=>{
        const mockClickHandle = jest.fn();
    render(<PanelDeBotones clickHandle={mockClickHandle} />);
    
    // Busca el botón con el nombre "+"
    const plusButton = screen.getByRole('button', {name: '+'});
   
    fireEvent.click(plusButton);
    
    expect(mockClickHandle).toHaveBeenCalledWith('+');
        
    })
})
