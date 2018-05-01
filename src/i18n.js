var messages = {
  en: {
    welcome: 'Hi! Welcome!',
    about_me: 'About me',
    knowledge: 'Knowledge',
    knowledges: 'Knowledge',
    portfolio: 'Portfolio',
    system_engineer: 'Computer Scientist',
    developer: 'Android and Web Developer Full Stack',
    nationality: 'Nationality: American',
    live_in: 'Live in: Los Angeles, CA',
    age: 'Age',
    place: 'Place',
    studies: {
      title: "Studies",
      adventist: 'Started studying in the Adventist primary school',
      baptist: 'Finished up primary school in the Baptist school',
      reach: 'Finished up high school in Reach College',
      uni: 'Finished up my career as a System Engineer'
    },
    more: 'more...',
    contact: {
      title: "Contact me",
      name: "Name",
      email: "Email",
      message: "Message",
      send: 'Send'
    },
    "Himnario Adventista": "This app has the two hymn books (new and old) with its respective lyrics and numbers",
    "Biblia Reina Valera 1690": "Find all the bible's verses quickly and easily without internet connection",
    "Ciudad del pan (descontinuado)": "(discontinued) A blog based on wordpress with the only goal to inform about any local or national news",
    "Campamento JA": "Mobil app which only aim is to inform about the different events to do in the national camp of master guides 2016",
    "Familia Sansón": "Website dedicated to pathfinders, master guides and adventurers clubs",
    "Lyrics Finder": "Single web page application dedicated to find any lyrics of any song",
  },
  es: {
    welcome: '¡Hola! ¡Bienvenido!',
    about_me: 'Presentación',
    knowledge: 'Conocimientos',
    portfolio: 'Portafolio',
    system_engineer: 'Ingeniero en sistemas',
    developer: 'Android and Web Developer Full Stack',
    nationality: 'Nacionalidad: Americana',
    live_in: 'Vive en: Los Angeles, CA',
    age: 'Edad',
    place: 'Lugar',
    studies: {
      title: "Estudios",
      adventist: 'Inició estudios en escuela Primaria Adventista',
      baptist: 'Culminó estudios de primarios en Escuela Bautista',
      reach: 'Terminó estudios de secundaria en el colegio REACH',
      uni: 'Se graduó en Ingeniería de Sistemas en la Universidad Nacional de Ingenierías UNI RUACS'
    },
    more: 'Ver mas',
    contact: {
      title: "Contacto",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: 'Enviar'
    },
    "Himnario Adventista": "Está aplicación contiene los dos himnarios adventistas (Nuevo y viejo) con sus respectivas letras y numeraciones ",
    "Biblia Reina Valera 1690": "Encuentra todos los versículos de la Biblia rápido, fácil y sin conexión a internet ",
    "Ciudad del pan (descontinuado)": "Blog basado en Wordpress con el fin de informar cualquier tipo de noticia a nivel Nacional o local ",
    "Campamento JA": "Aplicación móvil con el objetivo de informar las distintas actividades a realizarse en el campamento nacional de Guías Mayores 2016 ",
    "Familia Sansón": "Página web dedicada a clubes de Conquistadores, Guías Mayores y Aventureros",
    "Lyrics Finder": "Single web page application dedicada a encontrar letras de cualquier canción",
  },
}

export default new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})
