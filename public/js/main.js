fetch('https://www.mindicador.cl/api')
    .then(respuesta => respuesta.json())
    .then(data => {
        var divUf = document.getElementById("valorUF")
        var valorUf = Math.round(data.uf.valor)
        divUf.innerHTML += '<i class="fas fa-dollar-sign"></i>' + Intl.NumberFormat('es-CL').format(valorUf) // se agrega el + al = para concatenar lo que ya existe.
    })

$(document).ready(function () {
    $('.table').DataTable()
})