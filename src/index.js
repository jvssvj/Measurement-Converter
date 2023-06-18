let menu = ''
let value = ''
do {
    value = parseFloat(prompt('Conversor de medidas!\n\n' + 'Digite o valor em METROS:'))
    menu = 
    prompt(`Para qual unidade de medida você deseja converter o valor ${value}?\n\n` +  
    '1 - Milimetro(MM)\n' + 
    '2 - Centimetro (CM)\n' +
    '3 - Decimetro (DM)\n' + 
    '4 - Decâmetro (DAM)\n' +
    '5 - Hectómetro (HM)\n' +
    '6 - Quilômetro (KM)\n' +
    '7 - Sair')


    switch (menu) {
        case '1':
            alert(`O valor ${value} em MILIMETROS (MM) é: ` +  value * 1000)
            break
        case '2':
            alert(`O valor ${value} em CENTIMETROS (CM) é: ` +  value * 100 )
            break
        case '3':
            alert(`O valor ${value} em DECÍMETROS (DM) é: ` +  value * 10)
            break
        case '4':
            alert(`O valor ${value} em DECÂMETROS (DAM) é: ` +  value * 10)
            break
        case '5':
            alert(`O valor ${value}` +  'em HECTÓMETROS (HM) é: ' +  value / 100)
            break
        case '6':
            alert(`O valor ${value} em QUILÔMETROS (KM) é: ` + value / 1000)
            break
        case '7':
            alert('Encerrando..')
            break
        default:
            alert('[ERRO] Escolha uma opção valida!')
    }
} while (menu !== '7')



