document.addEventListener('DOMContentLoaded', function() {
    // Validación de Campos
    document.getElementById('form-publicar').addEventListener('submit', function(event) {
        const fechaInicio = document.getElementById('fecha_inicio').value;
        const fechaCierre = document.getElementById('fecha_cierre').value;

        if (new Date(fechaInicio) >= new Date(fechaCierre)) {
            alert('La fecha de cierre debe ser posterior a la fecha de inicio.');
            // evita que el form se envie
            event.preventDefault();
        }
    });

    // Previsualización de la Imagen
    document.getElementById('imagen_producto').addEventListener('change', function(event) {
        const file = event.target.files[0];
        const preview = document.getElementById('preview');
        
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            }
            reader.readAsDataURL(file);
        } else {
            preview.style.display = 'none';
        }
    });

    // calcular duracion subasta
    function calcularDuracion() {
        const fechaInicio = new Date(document.getElementById('fecha_inicio').value);
        const fechaCierre = new Date(document.getElementById('fecha_cierre').value);

        const divDuracionSubasta = document.getElementById('div_duracion');
        const inputDuracionSubasta = document.getElementById('duracion_subasta');
        
        if (fechaInicio && fechaCierre && fechaCierre > fechaInicio) {
            const duracion = Math.ceil((fechaCierre - fechaInicio) / (1000 * 60 * 60 * 24));
            inputDuracionSubasta.value = duracion >= 0 ? duracion : 0;
            
            if (duracion > 0) {
                divDuracionSubasta.classList.remove('oculto');
            }
        } else {
            // Ocultar el div si las fechas no son válidas
            divDuracionSubasta.classList.add('oculto');
            inputDuracionSubasta.value = '';
        }
    }

    document.getElementById('fecha_inicio').addEventListener('change', calcularDuracion);
    document.getElementById('fecha_cierre').addEventListener('change', calcularDuracion);

    // deshabilitar fechas pasadas
    function deshabilitarFechasPasadas() {
        // toISOString(): Convierte la fecha almacenada en el objeto Date a una cadena en formato ISO 8601, 
        // que es un formato de fecha estándar internacional. Este formato es similar a: YYYY-MM-DDTHH:MM:SS.sssZ. 
        // Un ejemplo sería: 2024-08-22T14:30:00.000Z.
        const fechaHoy = new Date().toISOString().split('T')[0];
        document.getElementById('fecha_inicio').setAttribute('min', fechaHoy);
        document.getElementById('fecha_cierre').setAttribute('min', fechaHoy);
    }

    window.onload = deshabilitarFechasPasadas;

    // agregar campos dinamicamente
    document.getElementById('agregar_categoria').addEventListener('click', function() {
        const nuevaCategoria = document.getElementById('nueva_categoria').value.trim();
        if (nuevaCategoria) {
            const option = document.createElement('option');
            option.text = nuevaCategoria;
            option.value = nuevaCategoria.toLowerCase().replace(/ /g, '_');
            document.getElementById('categorias').add(option);
            document.getElementById('nueva_categoria').value = '';
        }
    });
});