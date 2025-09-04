function agregarTarea() {
    let nuevaTareaTexto = document.getElementById('nuevaTarea').value;
    let horaTarea = document.getElementById('horaTarea').value;

    if (nuevaTareaTexto === '') {
        alert('Por favor, ingrese una tarea.');
        return;
    }
    if (horaTarea === '') {
        alert('Por favor, seleccione una hora.');
        return;
    }

    let nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = `${nuevaTareaTexto} [${horaTarea}] `;

    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = function() {nuevaTarea.remove();}

    nuevaTarea.appendChild(botonEliminar);
    document.getElementById('listaTareas').appendChild(nuevaTarea);

    document.getElementById('nuevaTarea').value = '';
    document.getElementById('horaTarea').value = '';
}