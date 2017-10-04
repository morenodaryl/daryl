import router from './router.js'
import i18n from './i18n.js'

var app = new Vue({
  i18n,
  router,
  el: '#app',
  created(){
    this.check_lang();
  },
  computed: {
    age: function(){
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
  },
  methods: {
    change_language: function(l){
      i18n.locale = l;
    },
    check_lang: function(){
      if (!(this.$route.params.lang == "es" || this.$route.params.lang == "en")) {
         this.$router.replace({path: '/es'});
      }
      this.$i18n.locale = this.$route.params.lang;
      console.log(this.$route.params.lang);
    }
  },
  watch:{
    "$route": function(){
      this.check_lang()
    }
  },
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
      },
      {
        title: 'Biblia Reina Valera 1690',
        url: 'https://goo.gl/hD4dLa',
        img: 'img/biblia.png',
      },
      {
        title: 'Ciudad del pan (descontinuado)',
        url: 'http://www.ciudaddelpan.xyz',
        img: 'img/ciudaddelpan.jpg',
      },
      {
        title: 'Campamento JA',
        url: 'http://bit.ly/CampamentoJA',
        img: 'img/sanson.jpg',
      },
      {
        title: 'Familia Sansón',
        url: 'http://sanson.herokuapp.com/',
        img: 'img/campamentoja.jpg',
      },
    ]
  }
})
