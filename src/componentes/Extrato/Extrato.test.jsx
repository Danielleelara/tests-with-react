import { render, screen } from "@testing-library/react";
import Extrato from ".";
  
describe('Deve renderizar a lista de transações', () => {
    
    test('de valor', () => {
        const transacoes =  [
            { 
                transacao: 'Transferência',
                value: 10
            },
            { 
                transacao: 'Depósito',
                value: 200
            },
        ]

        render(<Extrato transacoes={transacoes} />)
        const lista = screen.getByRole('list');

        expect(lista).toBeInTheDocument();
    }) 
});