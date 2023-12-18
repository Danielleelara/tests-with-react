import { render, screen } from "@testing-library/react";
import Menu from ".";
  

test('Deve renderizar um link para a página inicial', () => {
    render(<Menu />)
    const linkPaginaInicial = screen.getByText('Inicial');

    expect(linkPaginaInicial).toBeInTheDocument();
})  

test('Deve renderizar uma lista de links', () => {
    render(<Menu />)
    const linkPaginaInicial = screen.getAllByRole('link');

    expect(linkPaginaInicial).toHaveLength(4);
})  

test('Não deve renderizar o link extrato', () => {
    render(<Menu />)
    const linkExtrato = screen.queryByText('Extrato');

    expect(linkExtrato).not.toBeInTheDocument();
}) 

test('Deve renderizar a lista de links com a classe link', () => {
    render(<Menu />)
    const listalinks = screen.getAllByRole('link');

    listalinks.forEach((link)=>  expect(link).toHaveClass('link') )
    expect(listalinks).toMatchSnapshot()
}) 