let value = prompt('Digite o valor em METROS:')
let resultValue = parseFloat(value)
let option = prompt(`Para qual unidade de medida você deseja converter o valor ${resultValue}?

1 - Milimetro(MM)
2 - Centimetro (CM)
3 - Decimetro (DM)
4 - Decâmetro (DAM)
5 - Hectómetro (HM)
6 - Quilômetro (KM)`)
let resultOption = parseFloat (option)

switch (resultOption) {
    case 1:
        alert(`O valor ${resultValue} em MILIMETROS (MM) é: ` + resultValue * 1000)
        break
    case 2:
        alert(`O valor ${resultValue} em CENTIMETROS (CM) é: ` + resultValue * 100 )
        break
    case 3:
        alert(`O valor ${resultValue} em DECÍMETROS (DM) é: ` + resultValue * 10)
        break
    case 4:
        alert(`O valor ${resultValue} em DECÂMETROS (DAM) é: ` + resultValue * 10)
        break
    case 5:
        alert('O valor ${resultValue} em HECTÓMETROS (HM) é: ' + resultValue / 100)
        break
    case 6:
        alert(`O valor ${resultValue} em QUILÔMETROS (KM) é: ` + resultValue / 1000)
        break
    default:
        alert('Escolha uma unidade de medida valida! (1 a 6)')
}