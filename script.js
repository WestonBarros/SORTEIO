function sortear(){
    const entre = Math.ceil(document.querySelector(".entrada").value)
    const e = Math.floor( document.querySelector(".saida").value)
    const resultado = Math.floor(Math.random() * (e - entre + 1) )+ entre;
    alert(resultado) 


}


