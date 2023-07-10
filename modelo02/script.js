function verificar() {
    var data = new Date() 
    var ano = data.getFullYear() 
    var fano = document.getElementById('txtano') 
    var res = document.querySelector('div#res') 
    if (fano.value.length == 0 || Number(fano.value) > ano){ 
        window.alert('{ERRO} Verifique os dados e tente novament!')
    } else { 
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value) 
        var gênero = '' 
        var img = document.createElement('img')
        img.setAtributte('id','foto')
            if(fsex[0].checked){
                gênero = 'Homem'
                if (idade >=0 && idade  <10) {
                    // Criança 
                    img.setAtributte('src', 'criança-menino.png')
                } else if (idade < 21) {
                    //Jovem 
                    img.setAtributte('src', 'jovem-garoto.png')
                } else if (idade < 50) {
                    //Adulto
                    img.setAtributte('src', 'homem-adulto.png')
                } else {
                    //idoso 
                    img.setAtributte('src', 'idoso.png')
                }

            } else if (fsex[1].checked) {
                gênero = 'Mulher' 
                if (idade >=0 && idade < 10) {
                    // Criança 
                    img.setAtributte('src', 'criança-menina.png')
                } else if (idade < 21) {
                    //Jovem 
                    img.setAtributte('src', 'jovem-garota.png')
                } else if (idade < 50) {
                    //Adulto 
                    img.setAtributte('src', 'mulher-adulta.png')
                } else {
                    // Idoso 
                    img.setAtributte('src', 'idosa.png')
                }
            } 
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` 
            res.appendChild(img)
    }

} 
