/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var messages = {
  en: {
    welcome: 'Hi! Welcome!',
    about_me: 'About me',
    knowledge: 'Skills',
    portfolio: 'Portfolio',
    system_engineer: 'Computer Scientist',
    developer: 'Android and Web Developer Full Stack',
    nationality: 'Nationality: American',
    live_in: 'Live in: Los Angeles, CA',
    age: 'Age',
    place: 'Place',
    studies: {
      title: "Education",
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
    "Lyrics Finder": "Single web page application dedicated to find any lyrics of any song"
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
    "Lyrics Finder": "Single web page application dedicada a encontrar letras de cualquier canción"
  }
};

exports.default = new VueI18n({
  locale: 'en', // set locale
  messages: messages // set locale messages
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var routes = [{ path: '/:lang' }];

exports.default = new VueRouter({
  routes: routes // forma corta para routes: routes
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(3);
__webpack_require__(4);
module.exports = __webpack_require__(1);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _router = __webpack_require__(1);

var _router2 = _interopRequireDefault(_router);

var _i18n = __webpack_require__(0);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new Vue({
  i18n: _i18n2.default,
  router: _router2.default,
  el: '#app',
  created: function created() {
    this.check_lang();
  },

  computed: {
    age: function age() {
      var birthday = new Date();
      birthday.setMonth(7);
      birthday.setDate(27);
      // birthday.setYear(1994);
      var today = new Date();
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs);
      var age = Math.abs(ageDate.getUTCFullYear() - 1993);
      if (today.getMonth() <= birthday.getMonth() && today.getDate() < birthday.getDate()) {
        age -= 1;
      }
      if (today.getMonth() == birthday.getMonth() && today.getDate() == birthday.getDate()) {
        age = "Today is his birthday";
      }
      return age;
    }
  },
  methods: {
    change_language: function change_language(l) {
      _i18n2.default.locale = l;
    },
    check_lang: function check_lang() {
      var lang = this.$route.params.lang;
      if (!(lang == "es" || lang == "en")) {
        this.$router.replace({ path: '/en' });
      }
      this.$i18n.locale = this.$route.params.lang;
    }
  },
  watch: {
    "$route": function $route() {
      this.check_lang();
    }
  },
  data: {
    knowledge: [{
      class: "ruby",
      desc: "Ruby"
    }, {
      class: "ruby_on_rails",
      desc: "Ruby on Rails"
    }, {
      class: "android",
      desc: "Android"
    }, {
      class: "reactjs",
      desc: "React.js"
    }, {
      class: "html_5",
      desc: "HTML 5"
    }, {
      class: "css",
      desc: "CSS 3"
    }, {
      class: "javascript",
      desc: "Javascript"
    }, {
      class: "vb_net",
      desc: "Vb net"
    }, {
      class: "sass",
      desc: "SASS"
    }, {
      class: "coffeescript",
      desc: "Coffeescript"
    }, {
      class: "linux",
      desc: "linux"
    }, {
      class: "mysql",
      desc: "Mysql"
    }],
    portfolio: [{
      title: 'Himnario Adventista',
      url: 'https://goo.gl/nw9zNu',
      img: 'img/himnario.png'
    }, {
      title: 'Biblia Reina Valera 1690',
      url: 'https://goo.gl/hD4dLa',
      img: 'img/biblia.png'
    }, {
      title: 'Lyrics Finder',
      url: 'https://morenodaryl.github.io/lyricsfinder',
      img: 'img/lyricsfinder.jpg'
    }, {
      title: 'Familia Sansón',
      url: 'http://sanson.herokuapp.com/',
      img: 'img/sanson.jpg'
    }, {
      title: 'Ciudad del pan (descontinuado)',
      url: 'http://www.ciudaddelpan.xyz',
      img: 'img/ciudaddelpan.jpg'
    }, {
      title: 'Campamento JA',
      url: 'http://bit.ly/CampamentoJA',
      img: 'img/campamentoja.jpg'
    }]
  }
});

/***/ })
/******/ ]);