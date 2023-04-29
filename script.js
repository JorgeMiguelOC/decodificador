const pegaTexto = document.getElementById('cripto')

//impossibilita o uso de letras maiusculas
pegaTexto.addEventListener('input', function () {
  const texto = pegaTexto.value
  pegaTexto.value = texto.toLowerCase()
})

//checa no mapa a vogal correspondente e troca a mesma
function criptografa() {
  const texto = pegaTexto.value
  const substitui = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
  }
  var resultado = texto.replace(/[aeiou]/g, function (check) {
    return substitui[check]
  })
  document.getElementById('texto-resultado').value = resultado
}

//pega um texto criptografado e transforma as chaves de criptografia em vogais normais
function descriptografa() {
  const criptografado = pegaTexto.value
  const substitui = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u'
  }
  const original = criptografado.replace(
    /ai|enter|imes|ober|ufat/g,
    function (check) {
      return substitui[check]
    }
  )
  document.getElementById('texto-resultado').value = resultado = original
}

function copiaTexto() {
  navigator.clipboard.writeText(
    document.getElementById('texto-resultado').value
  )
}
