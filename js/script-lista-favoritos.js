/* Crear una lista de los articulos favoritos y conforme a eso, mostrar el icono correspondiente */

let articulos = [
    {id_articulo: '1', titulo: "Arte Moderno: La Mirada", categoria: "Electrónica", precio_inicial: 100, url_imagen: "img/arte-moderno.jfif", url_detalle: "art1"},
    {id_articulo: '2', titulo: "Juego de Te 4 Piezas Rep Sheffield", categoria: "Arte", precio_inicial: 200, url_imagen: "img/juego-tazas.png", url_detalle: "art2"},
    {id_articulo: '3', titulo: "Mercedez Benz Cuopé (1953)", categoria: "Automóviles", precio_inicial: 50000, url_imagen: "img/auto.jpg", url_detalle: "art3"},
    {id_articulo: '4', titulo: "Mercedez Benz Cuopé (1953)", categoria: "Automóviles", precio_inicial: 50000, url_imagen: "img/auto.jpg", url_detalle: "art4"},
    {id_articulo: '5', titulo: "Arte Moderno: La Mirada", categoria: "Electrónica", precio_inicial: 100, url_imagen: "img/arte-moderno.jfif", url_detalle: "art5"}
]

let favoritos = [
    {id_articulo: '3'}
]

function es_favorito(id_articulo) {
    let existe = false
    let articulo = favoritos.find(function(obj){
        return obj.id_articulo === id_articulo
    })
    if (articulo) {
        existe = true  
    }
    return existe
}

function toggle_favorito(enlace_icono) {
    let id_art = enlace_icono.dataset.id
    
    if (es_favorito(id_art)) {
        // buscar el indice del elemento a eliminar
        let index = favoritos.findIndex(item => item.id_articulo === id_art);
        // eliminar el elemento de acuerdo al indice
        if (index !== -1) {
            favoritos.splice(index, 1);
            // cambiar icono a No favorito
            let img_icono = enlace_icono.querySelector('img');
            img_icono.src = 'img/favorito.png';
            enlace_icono.title = 'Añadir a Favoritos';
        }
    } else {
        favoritos.push({id_articulo: id_art})
        // cambiar icono a favorito
        let img_icono = enlace_icono.querySelector('img');
        img_icono.src = 'img/favorito_check.png';
        enlace_icono.title = 'Quitar de Favoritos';
    }
}

function update_menu_favoritos(){
    let menu_favoritos = document.getElementById('menu_favoritos')
    menu_favoritos.innerHTML=''
    favoritos.forEach(function(art_favorito) {
        let articulo = articulos.find(function(obj){
            return obj.id_articulo === art_favorito.id_articulo
        })
        item = `<li><a class="dropdown-item" href="#">${articulo.titulo}</a></li>` 
        menu_favoritos.innerHTML += item
    })
}

document.addEventListener('DOMContentLoaded', function() {
    let ver_favoritos = document.getElementById('favoritos')
    ver_favoritos.addEventListener('click', update_menu_favoritos)

    let fila = document.getElementById('fila')

    articulos.forEach(function(articulo){
        // Colocar el icono correspondiente segun el articulo esté o no en la lista de favoritos
         
        let icono_favorito
        if (es_favorito(articulo['id_articulo'])) {
            icono_favorito = `<a href="#" class="btn btn-light" data-id=${articulo['id_articulo']} onclick="toggle_favorito(this);" role="button" title="Quitar de Favoritos"><img src="img/favorito_check.png" style="width: 25px; height: 25px;"></a>`
        } else {
            icono_favorito = `<a href="#" class="btn btn-light" data-id=${articulo['id_articulo']} onclick="toggle_favorito(this);" role="button" title="Agregar a Favoritos"><img src="img/favorito.png" style="width: 20px; height: 20px;"></a>`
        } 

        let div_articulo = `
            <div class="col mt-3">
                <div class="card text-center h-100">
                    <img src=${articulo['url_imagen']} class="card-img-top">
                    <div class="card-body">
                        <h2 class="card-title">
                            ${icono_favorito}
                            ${articulo['titulo']}
                        </h2>
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
