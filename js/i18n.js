'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var messages = {
  en: {
    welcome: 'Hi! Welcome!',
    about_me: 'About me',
    knowledge: 'Knowledge',
    knowledges: 'Knowledge',
    portfolio: 'Portfolio',
    system_engineer: 'System Engineer',
    developer: 'Web Developer Full Stack',
    nationality: 'Nationality: American',
    live_in: 'Live in: Nicaragua',
    age: 'Age',
    place: 'Place',
    studies: {
      title: "Studies",
      adventist: 'Started studying in the adventist primary school',
      baptist: 'Ended primary school in the Baptist school',
      reach: 'Ended high school in Reach College',
      uni: 'Finish my career as a System Engineer'
    },
    contact: {
      title: "Contact me",
      name: "Name",
      email: "Email",
      message: "Message",
      send: 'Send'
    },
    "Himnario Adventista": "This app has the two hymn books (new and old) with its respectives lyrics and numbers",
    "Biblia Reina Valera 1690": "Find all the bible's verses quickly and easily without internet conection",
    "Ciudad del pan (descontinuado)": "A blog based on wordpress with the only goal to inform about any local or national news",
    "Campamento JA": "Movil app which only aim is to informate about the diferents events to do in the national camp of master guides 2016",
    "Familia Sansón": "Website dedicated to pathfinders, master guides and adventurers clubes"
  },
  es: {
    welcome: '¡Hola! ¡Bienvenido!',
    about_me: 'Presentación',
    knowledge: 'Conocimientos',
    portfolio: 'Portafolio',
    system_engineer: 'Ingeniero en sistemas',
    developer: 'Web Developer Full Stack',
    nationality: 'Nacionalidad: American',
    live_in: 'Vive en: Nicaragua',
    age: 'Edad',
    place: 'Lugar',
    studies: {
      title: "Estudios",
      adventist: 'Inició estudios en escuela Primaria Adventista',
      baptist: 'Culminó estudios de primarios en Escuela Bautista',
      reach: 'Terminó estudios de secundaria en el colegio REACH',
      uni: 'Se graduó en Ingeniería de Sistemas en la Universidad Nacional de Ingenierías UNI RUACS'
    },
    contact: {
      title: "Contacto",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: 'Enviar'
    },
    "Himnario Adventista": "Está aplicación contiene los dos himnarios adventistas (Nuevo y viejo) con sus respectivas letras y numeraciones ",
    "Biblia Reina Valera 1690": "Encuentra todos los versículos de la Biblia rápido, facíl y sin conexión a internet ",
    "Ciudad del pan (descontinuado)": "Blog basado en Wordpress con el fin de informar cualquier tipo de noticia a nivel Nacional o local ",
    "Campamento JA": "Aplicación movil con el obetivo de informar las distintas actividades a realizarse en el campamento nacional de Guías Mayores 2016 ",
    "Familia Sansón": "Página web dedicada a clubes de Conquistadores, Guías Mayores y Aventureros"
  }
};

exports.default = new VueI18n({
  locale: 'es', // set locale
  messages: messages // set locale messages
});