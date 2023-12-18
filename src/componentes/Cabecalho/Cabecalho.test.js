import { render, screen } from "@testing-library/react";
import Cabecalho from ".";

test('Deve renderizar o nome do usuário', () => {

    render(<Cabecalho />)

    const nome = screen.getByText('Joana Fonseca Gomes');

    expect(nome).toBeInTheDocument();

})  