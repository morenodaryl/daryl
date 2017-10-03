var app = new Vue({
  el: '#app',
  data: {
    knowledge: [{
        class: "html_5",
        desc: "HTML 5"
      },
      {
        class: "css",
        desc: "CSS 3"
      },
      {
        class: "javascript",
        desc: "Javascript"
      },
      {
        class: "ruby",
        desc: "Ruby"
      },
      {
        class: "ruby_on_rails",
        desc: "Ruby on Rails"
      },
      {
        class: "android",
        desc: "Android"
      },
      {
        class: "angularjs",
        desc: "angularjs"
      },
      {
        class: "vb_net",
        desc: "Vb net"
      },
      {
        class: "sass",
        desc: "SASS"
      },
      {
        class: "coffeescript",
        desc: "Coffeescript"
      },
      {
        class: "linux",
        desc: "linux"
      },
      {
        class: "mysql",
        desc: "Mysql"
      },
      // {class: "ionic", desc: "ionic"},
    ],
    portfolio: [{
        title: 'Himnario Adventista',
        url: 'https://goo.gl/nw9zNu',
        img: 'img/himnario.png',
        desc: 'Está aplicación contiene los dos himnarios adventistas (Nuevo y viejo) con sus respectivas letras y numeraciones'
      },
      {
        title: 'Biblia Reina Valera 1690',
        url: 'https://goo.gl/hD4dLa',
        img: 'img/biblia.png',
        desc: 'Encuentra todos los versículos de la Biblia rápido, facíl y sin conexión a internet'
      },
      {
        title: 'Ciudad del pan (descontinuado)',
        url: 'http://www.ciudaddelpan.xyz',
        img: 'img/ciudaddelpan.jpg',
        desc: 'Blog basado en Wordpress con el fin de informar cualquier tipo de noticia a nivel Nacional o local '
      },
      {
        title: 'Campamento JA',
        url: 'http://bit.ly/CampamentoJA',
        img: 'img/sanson.jpg',
        desc: 'Aplicación movil con el obetivo de informar las distintas actividades a realizarse en el campamento nacional de Guías Mayores 2016 '
      },
      {
        title: 'Familia Sansón',
        url: 'http://sanson.herokuapp.com/',
        img: 'img/campamentoja.jpg',
        desc: 'Página web dedicada a clubes de Conquistadores, Guías Mayores y Aventureros '
      },
    ],
    age: function() {
      var birthday = new Date();
      birthday.setMonth(7);
      birthday.setDate(27);
      // birthday.setYear(1994);
      var today = new Date();
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs);
      var age = Math.abs(ageDate.getUTCFullYear() - 1993)
      if (today.getMonth() <= birthday.getMonth() && today.getDate() < birthday.getDate()) {
        age -= 1;
      }
      if (today.getMonth() == birthday.getMonth() && today.getDate() == birthday.getDate()) {
        age = "HOY ES SU CUMPLEAÑOS"
      }
      return age;
    }
  }
})
