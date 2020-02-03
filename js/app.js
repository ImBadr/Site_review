var map = document.querySelector('#map')

var paths = map.querySelectorAll('.map__image a')

var links = map.querySelectorAll('.map__list a')

//Polyfill du foreach
if (NodeList.prototype.forEach === undefined) {

    NodeList.prototype.forEach = function (callback) {

        [].forEach.call(this, callback)

    }
}

var activeArea = function (id) {
    map.querySelectorAll('.is_active').forEach(function (item) {
        item.classList.remove('is_active')
    })

    if (id !== undefined) {

        document.querySelector('#list-' + id).classList.add('is_active')

        document.querySelector('#Ville-' + id).classList.add('is_active')
    }

}
//POUR LES IMAGES
paths.forEach(function (path) {
    path.addEventListener('mouseenter', function (e) {

        var id = this.id.replace('Ville-', '')
        activeArea(id)
    })
})
//POUR LES LIENS
links.forEach(function (link) {
    link.addEventListener('mouseenter', function () {
        var id = this.id.replace('list-', '')
        activeArea(id)
    })
})

map.addEventListener('mouseover', function () {
    activeArea()
})