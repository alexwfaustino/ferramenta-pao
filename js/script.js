function somar() {
    var papc = document.getElementById('txtp') //papc - Papececos
    var caseiro = document.getElementById('txtc') //caseiro - Pão Caseiro
    var papcn = Number(papc.value) //Conversão
    var caseiron = Number(caseiro.value) //Conversão
    var resultadop = papcn * 0.96 //0.96 - preço por cada dia de papececos recebidos
    var resultadoc = caseiron * 1.00 // 1.00 - preço por cada dia de pães caseiros recebidos
    var resultados = resultadop + resultadoc
    if (papc.value.length == 0 && caseiro.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente! [ERRO]')
    } else {
        res.innerHTML = `Irá pagar <strong>${resultados}€</strong>! <br> ${resultadop}€ - Preço Papececos <br> ${resultadoc}€ - Preço Pão Caseiro`
    }
}