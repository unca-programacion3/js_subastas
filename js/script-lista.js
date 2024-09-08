/* Crear una lista de los articulos de la subasta, donde cada articulo debe ser representado por un objeto. 
Luego, recorrer esa lista y mostrar los datos de cada articulo */

document.addEventListener('DOMContentLoaded', function() {
    let articulos = [
        {titulo: "Arte Moderno: La Mirada", categoria: "Electrónica", precio_inicial: 100, url_imagen: "img/arte-moderno.jfif", url_detalle: "art1"},
        {titulo: "Juego de Te 4 Piezas Rep Sheffield", categoria: "Arte", precio_inicial: 200, url_imagen: "img/juego-tazas.png", url_detalle: "art2"},
        {titulo: "Mercedez Benz Cuopé (1953)", categoria: "Automóviles", precio_inicial: 50000, url_imagen: "img/auto.jpg", url_detalle: "art3"},
        {titulo: "Mercedez Benz Cuopé (1953)", categoria: "Automóviles", precio_inicial: 50000, url_imagen: "img/auto.jpg", url_detalle: "art3"},
        {titulo: "Arte Moderno: La Mirada", categoria: "Electrónica", precio_inicial: 100, url_imagen: "img/arte-moderno.jfif", url_detalle: "art1"}
    ] 

    let fila = document.getElementById('fila')

    articulos.forEach(function(articulo){
        let div_articulo = `
            <div class="col mt-3">
                <div class="card text-center h-100">
                    <img src=${articulo['url_imagen']} class="card-img-top">
                    <div class="card-body">
                        <h2 class="card-title">${articulo['titulo']}</h2>
                        <p class="card-text">Categoría: ${articulo['categoria']}</p>
                        <p class="card-text">Precio Inicial: $${articulo['precio_inicial']}</p>
                        <a href="${articulo['url_detalle']}" class="btn btn-primary">Ver detalles</a>
                    </div>
                </div>
            </div>
        `
        fila.innerHTML += div_articulo
    })                    
})
