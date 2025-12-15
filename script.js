function agregarTarea() {
  var texto = document.getElementById('tarea').value
  var estado = document.getElementById('estado').value

  if (texto === '') return

  var tarea = document.createElement('div')
  tarea.className = 'tarea ' + estado
  tarea.innerText = texto

  document.getElementById(estado).appendChild(tarea)
  document.getElementById('tarea').value = ''
}