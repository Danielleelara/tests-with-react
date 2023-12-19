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

    test('verifica que o valor foi preenchido', () => {
        render(<Formulario />)
        const campoTexto = screen.getByPlaceholderText("Digite um valor");
        userEvent.type(campoTexto, '50')
        expect(campoTexto).toHaveValue(50)
    })  

    test('deve chamar um evento de onSubmit ao clicar em realizar transação', () => {
        const realizarTransacao = jest.fn()
        render(<Formulario realizarTransacao={realizarTransacao} />)
        const botao = screen.getByRole("button");
        userEvent.click(botao)
        expect(realizarTransacao).toHaveBeenCalledTimes(1)
    });

    test('deve fazer a seleção de uma opção de transação', () => {
        const realizarTransacao = jest.fn()
        render(<Formulario realizarTransacao={realizarTransacao} />)

        const select = screen.getByTestId("select-opcoes");
        userEvent.selectOptions(select, 'Depósito');
        
        expect(select).toHaveDisplayValue('Depósito');
    });
});