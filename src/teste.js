const teste = ['combo1,1', 'cafe,2']
function calcularValorDaCompra(metodoDePagamento, itens) {
    const itensDisponiveis = ['cafe', 'suco', 'sanduiche', 'chantily', 'queijo', 'salgado', 'combo1', 'combo2']
    let comanda = []
    let quantidade = []
    let total = 0
    for (let i = 0; i < itens.length; i++) {
        let pedido = itens[i].split(',')
        if (pedido.length === 2) {
            comanda.push(pedido[0])
            quantidade.push(pedido[1])
        }
        if (!itensDisponiveis.includes(comanda[i])) {
            return "Item inválido!"
        }
        else if (quantidade[i] <= 0) {
            return "Quantidade inválida!"
        }
    }
    if (comanda.length === 0) {
        return "Não há itens no carrinho de compra!"
    }
    if (comanda.includes('queijo') && !comanda.includes('sanduiche')) {
        return "Item extra não pode ser pedido sem o principal"
    }
    if (comanda.includes('chantily') && !comanda.includes('cafe')) {
        return "Item extra não pode ser pedido sem o principal"
    }
    for (let i = 0; i < comanda.length; i++) {
        if (comanda[i] === 'cafe') {
            total += 3.00 * quantidade[i]
        }
        else if (comanda[i] === 'sanduiche') {
            total += 6.50 * quantidade[i]
        }
        else if (comanda[i] === 'chantily') {
            total += 1.50 * quantidade[i]
        }
        else if (comanda[i] === 'suco') {
            total += 6.20 * quantidade[i]
        }
        else if (comanda[i] === 'queijo') {
            total += 2.00 * quantidade[i]
        }
        else if (comanda[i] === 'salgado') {
            total += 7.25 * quantidade[i]
        }
        else if (comanda[i] === 'combo1') {
            total += 9.50 * quantidade[i]
        }
        else if (comanda[i] === 'combo2') {
            total += 7.50 * quantidade[i]
        }
    }
    if (metodoDePagamento === 'dinheiro') {
        let desconto = (total * 0.05)
        total -= desconto
    }
    if (metodoDePagamento === 'credito') {
        let acrescimo = (total * 0.03)
        total += acrescimo
    }
    if (metodoDePagamento !== 'credito' && metodoDePagamento !== 'dinheiro' && metodoDePagamento !== 'debito') {
        return "Forma de pagamento inválida!"
    }
    let ValorDaCompra = `${total.toFixed(2)}`
    return `R$ ${ValorDaCompra.replace('.', ',')}`
}
console.log(calcularValorDaCompra('debito', ['chantily,1', 'cafe,2']))