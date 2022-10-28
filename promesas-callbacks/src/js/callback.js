const heroes = {

    capi: {
        nombre: 'Capitan america',
        poder:'aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder:'mucho dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder:'Aracnido'
    },
}

export const buscarHeroe = (id,callback) => {

    const heroe = heroes[id];

    callback(heroe);
}