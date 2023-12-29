import { calculaNovoSaldo } from ".";

describe('Quando realizo uma transação', () => {

    test('Deve retornar o valor do saldo atualizado com o rendimento', () => {

        const calculaRendimento = jest.fn(saldo => saldo + saldo*0.005);
        const saldo = 100;

        const novoSaldo = calculaRendimento(saldo)

        expect(novoSaldo).toBe(100.5)
        expect(calculaRendimento).toBeCalled();
        expect(calculaRendimento).toHaveBeenCalledWith(saldo);

    });


    test('Que é um depósito, o saldo deve aumentar', () => {

        let saldo = 50;

        const transacao =
            {
                transacao: 'Depósito',
                valor: 20
            }

        const novoSaldo = calculaNovoSaldo(transacao, saldo)

        expect(novoSaldo).toBe(70)
    })

    test('Que é uma transferência, o saldo deve diminuir', () => {

        let saldo = 100;

        const transacao =
            {
                transacao: 'Transferência',
                valor: 80
            }

        const novoSaldo = calculaNovoSaldo(transacao, saldo)

        expect(novoSaldo).toBe(20)
    })

});