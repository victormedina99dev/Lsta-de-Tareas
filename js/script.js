function agregarTarea() {
    
    //Obtenemos el valor del campo de la tarea
    let nuevaTareaTexto = document.getElementById('nuevaTarea').value;
    
    //Validamos que el valor no sea vacio
    if (nuevaTareaTexto === '') {
        alert('Por favor, ingrese una tarea.');
        return;
    }

    //Crear elemento en la lista
    let nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = nuevaTareaTexto + ' ';
    
    //Crear boton de eliminar
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = function() {nuevaTarea.remove();}
    
    //Agregar boton de eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Agregar el elemento/ la tarea a la lista
    document.getElementById('listaTareas').appendChild(nuevaTarea);

    //Limpiar el campo de entrada
    document.getElementById('nuevaTarea').value = '';



}