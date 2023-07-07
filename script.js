function carregar() {
    var msg = window.document.getElementById('msg') 
    var img = window.document.getElementById('imagem') 
    var data = new Date() 
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        // Bom Dia! 
        img.src = 'pexels-ian-beckley-2440078.png'
    } else if (hora >= 12 && hora <= 18) {
        // Boa Tarde! 
        img.src = 'pexels-guillaume-hankenne-2792070.png'
    } else {
        // Boa Noite!
        img.src = 'pexels-allan-carvalho-17336461.png'
    }
}