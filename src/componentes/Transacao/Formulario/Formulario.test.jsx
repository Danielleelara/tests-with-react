import { render, screen } from "@testing-library/react";
import Formulario from ".";
import userEvent from "@testing-library/user-event";
  
describe('Deve renderizar um campo de input',()=>{
    test('de valor', () => {
        render(<Formulario />)
        const placeholder = screen.getByPlaceholderText("Digite um valor");

        expect(placeholder).toBeInTheDocument();
    })  

    test('do tipo number', () => {
        render(<Formulario />)
        const placeholder = screen.getByPlaceholderText("Digite um valor");

        expect(placeholder).toHaveAttribute('type', 'number');
    })  

    test('que pode ser preechido', () => {
        render(<Formulario />)
        const campoTexto = screen.getByPlaceholderText("Digite um valor");
        userEvent.type(campoTexto, '50')
        expect(campoTexto).toHaveValue(50)
    })  
});