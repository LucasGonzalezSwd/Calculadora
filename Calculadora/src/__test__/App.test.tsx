import {render, screen} from '@testing-library/react'
import App from '@/Components/App'

describe('App component', ()=>{

    beforeEach(()=>{
        render(<App/>)
 
    })
   
    test('should render the App component', () => {
        const appComponent = screen.getByTestId('app-component');
        expect(appComponent).toBeInTheDocument();
    });

    
    test('should render Display component into the App component', () => {
        const DisplayComponent = screen.getByTestId('display-component');
        expect(DisplayComponent).toBeInTheDocument()
    })
    
    test('should render PanelButton component into the App component', () => {
    
        const PanelDeBotonesComponent = screen.getByTestId('panel-de-botones-component');
        expect(PanelDeBotonesComponent).toBeInTheDocument()
    
    })

})
