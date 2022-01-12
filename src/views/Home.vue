<template>
<div class="mt-5">
  <div class="home">
    <div class="ban bg-secondary text-primary border border-secondary position-relative">
      <img class="user" src="../assets/img/user.png" alt="icone utilisateur">
      <div class="d-flex justify-content-between align-items-end">
        <font-awesome-icon class="align-self-start" :icon="['fas', 'gamepad']" size="3x" />
        <font-awesome-icon class="align-self-end" :icon="['fas', 'laptop-code']" size="3x" />
        <router-link to="Aventure" class="start text-decoration-none h4 my-4 bouton-ban"><a href="#" class="bouton-ban bg-primary">Démarrer le jeu GOAL</a></router-link>
        <font-awesome-icon class="align-self-start" :icon="['fas', 'mobile-alt']" size="3x" />
        <font-awesome-icon class="align-self-end" :icon="['fas', 'door-open']" size="3x" />
      </div>
    </div>
    <div class="text-primary bg-white py-5">
      <div class="col-sm-10 col-lg-7 mx-auto intro py-5">
        <h1 class="h3 my-3">Bonjour, Je m'appelle Thomas. </h1>
        <p>Il y'a quelques mois, je me suis lancé le périlleux défi de devenir développeur web. Quelle meilleure manière de me présenter qu'un petit jeu ? J'ai alors créé GOAL (Game Of A Life), un jeu interractif reprenant certaines étapes de ma vie personnelle et professionnelle.<br> Je recherche une entreprise partageant mes valeurs afin d'évoluer dans le monde du web.</p>
      </div>
    </div>
    <div class="goal py-5 container col-sm-12 col-xl-10 px-0 text-center">
        <h2 class="h3 my-3 text-secondary">L'aventure GOAL</h2>
        <div class="row d-flex justify-content-between px-0 mx-auto">
          <img src="../assets/img/end.png" alt="" class="caractere ml-2">
          <p class="text-white align-self-center w-50">Game Of A Life est une idée née d'un désir de faire mes preuves, il s'agissait de me prouver à moi même et aux autres que j'étais capable de concevoir un projet original et créatif. Il s'est avéré être bien plus, une façon ludique de me présenter au monde nouveau dans lequel je souhaite évoluer, un levier d'apprentissage et d'acquisition de nouvelles compétences en développement front-end, ainsi qu'une lueure d'espoir dans ma reconversion professionnelle</p>
          <img src="../assets/img/tuto.png" alt="" class="caractere">
        </div>
        <router-link to="Aventure" class="start text-decoration-none h4"><a href="#" class="text-primary">Commencer l'aventure</a></router-link>
    </div>
    <div class="text-primary bg-white py-5">
      <div class="col-10 mx-auto intro py-5">
        <h1 class="h3 my-3">Un petit bout de mon histoire... </h1>
        <p>Issu d'un parcours scolaire scientifique, je me complais dans la résolution de problèmes, la recherche de solutions et les expèriences. Pourtant, je m'oriente vers des études supèrieures commerciales et marketing, ce qui développe et confirme mon côté créatif, innovant, et un brin chef d'orchestre, sans pour autant perdre l'aspect "problem solver". Mais la Science me manque, j'ai envie de créer et participer à des projets concrets, pouvoir bâtir et concevoir au sein d'un équipe, voir les étapes d'un projet rayées de la checklist et atteindre l'objectif attendu avec fierté. C'est alors que j'entends de plus en plus parler du métier de développeur, les constructeurs du web ...</p>
      </div>
    </div>
    <div class="py-5 container col-12 col-xl-10 text-center">
        <h2 class="h3 my-3 text-secondary">Mes projets et compétences</h2>
        <p class="text-white w-50 mx-auto">Au cours de mon apprentissage et par la suite, j'ai pu effectuer plusieurs projets de développement web très différents, ce qui m'a permis de visiter de multiples aspects et d'acquérir des compétences dans chacun d'eux.</p>
        <div class="row d-flex justify-content-around py-5 text-primary">
          <div class="front cards rounded my-3 py-3 d-flex flex-column justify-content-around">
            <div class="d-flex flex-wrap justify-content-around py-3">
              <font-awesome-icon :icon="['fab', 'html5']" size="3x" />
              <font-awesome-icon :icon="['fab', 'css3-alt']" size="3x" />
              <font-awesome-icon :icon="['fab', 'js-square']" size="3x" />
            </div>
            <div class="d-flex justify-content-around flex-wrap  py-3">
              <font-awesome-icon :icon="['fab', 'vuejs']" size="3x" />
              <font-awesome-icon :icon="['fab', 'bootstrap']" size="3x" />
              <font-awesome-icon :icon="['fab', 'sass']" size="3x"/>
            </div>
            <div class="cards-theme d-flex align-items-center justify-content-center">
              <div class="cards-title h2 py-2">Front-End</div>
              <div class="cards-bg"></div>
              <img class="bg-img" src="../assets/img/front.jpg" alt="frontend">
            </div>
          </div>
          <div class="cards rounded my-3 py-3 d-flex flex-column justify-content-around">
            <div class="d-flex flex-wrap justify-content-around py-3">
              <font-awesome-icon :icon="['fab', 'js-square']" size="3x" />
              <font-awesome-icon :icon="['fab', 'node']" size="3x" />
              <font-awesome-icon :icon="['fab', 'npm']" size="3x" />
            </div>
            <div class="d-flex justify-content-around flex-wrap  py-3">
              <div class="align-self-center h3">API</div>
              <div class="align-self-center h3">REST</div>
              <div class="align-self-center h3">JSON</div>
            </div>
            <div class="cards-theme d-flex align-items-center justify-content-center">
              <div class="cards-title h2 py-2">Back-End</div>
              <div class="cards-bg"></div>
              <img class="bg-img" src="../assets/img/back.jpg" alt="frontend">
            </div>
          </div>
          <div class="cards rounded my-3 py-3 d-flex flex-column justify-content-around">
            <div class="d-flex flex-wrap justify-content-around py-3">
              <div class="align-self-center h3">SQL</div>
              <div class="align-self-center h3">MySQL</div>
              <div class="align-self-center h3">Sequelize</div>
            </div>
            <div class="d-flex justify-content-around flex-wrap py-3">
              <div class="align-self-center h3">Mongoose</div>
              <div class="align-self-center h3">MongoDB</div>
            </div>
            <div class="cards-theme d-flex align-items-center justify-content-center">
              <div class="cards-title h2 py-2">Data</div>
              <div class="cards-bg"></div>
              <img class="bg-img" src="../assets/img/data.jpg" alt="frontend">
            </div>
          </div>
          <div class="cards rounded my-3 py-3 d-flex flex-column justify-content-around">
            <div class="d-flex flex-wrap justify-content-around py-3">
              <font-awesome-icon :icon="['fab', 'git']" size="3x" />
              <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            </div>
            <div class="d-flex flex-wrap justify-content-around py-3">
              <div class="align-self-center h3">Github-Pages</div>
            </div>
            <div class="cards-theme d-flex align-items-center justify-content-center">
              <div class="cards-title h2 py-2">Versioning</div>
              <div class="cards-bg"></div>
              <img class="bg-img" src="../assets/img/git.jpg" alt="frontend">
            </div>
          </div>
          <div class="cards rounded my-3 py-3 d-flex flex-column justify-content-around">
            <div class="d-flex flex-wrap justify-content-around py-3">
              <div class="align-self-center h3">W3C</div>
              <div class="align-self-center h3">WCAG</div>
              <div class="align-self-center h3">OWASP</div>
            </div>
            <div class="cards-theme d-flex align-items-center justify-content-center">
              <div class="cards-title h2 py-2">Access</div>
              <div class="cards-bg"></div>
              <img class="bg-img" src="../assets/img/access.jpg" alt="frontend">
            </div>
          </div>
          <div class="cards rounded my-3 py-3 d-flex flex-column justify-content-around">
            <div class="d-flex flex-wrap justify-content-around py-3">
              <div class="align-self-center h3">SEO</div>
              <div class="align-self-center h3">Management</div>
            </div>
            <div class="d-flex justify-content-around flex-wrap  py-3">
              <div class="align-self-center h3">WEB</div>
              <div class="align-self-center h3">Design</div>
            </div>
            <div class="cards-theme d-flex align-items-center justify-content-center">
              <div class="cards-title h2 py-2">Marketing</div>
              <div class="cards-bg"></div>
              <img class="bg-img" src="../assets/img/marketing.jpg" alt="frontend">
            </div>
          </div>
        </div>
        <router-link to="Portfolio" class="start text-decoration-none h4 my-5"><a href="#" class="text-primary">Visiter mon Portfolio</a></router-link>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'Home',
  created() {
    window.scrollTo(0, 0);
  }
}
</script>

<style lang="scss">
@import '../assets/app.scss';
  .canvas {
    width: 960px;
    height: 540px;
    margin: auto;
    border: solid #5ecae4;
    position: relative;
    background-size: 100%;
    overflow: hidden;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  }
  .caractere {
    width: 20%;
    height: auto;
    opacity: 0.60;
  }
  .start{
    position:relative;
    display:inline-block;
    z-index: 10;
  }
  .bouton-ban{
    color: #d13cd0;
    & :hover{
      color:darken($color: #d13cd0, $amount: 15%) ;
    }
  }
  .user {
    width: 55px;
    position: absolute;
    right: 100%;
    bottom: 0%;
    animation: user-trail 12s ease-in-out infinite;
  }
  @keyframes user-trail {
    0%{
      bottom: 0%;
      right: 100%;
    }
    20%{
      bottom: 0%;
      right: 80%;
    }
    24%{
      bottom: 70%;
      right: 80%;
    }
    42%{
      bottom: 70%;
      right: 48%;
    }
    44%{
      bottom: 70%;
      right: 48%;
    }
    46%{
      bottom: 90%;
      right: 48%;
    }
    48%{
      bottom: 70%;
      right: 48%;
    }
    50%{
      bottom: 90%;
      right: 48%;
    }
    52%{
      bottom: 70%;
      right: 48%;
    }
    54%{
      bottom: 90%;
      right: 48%;
    }
    56%{
      bottom: 70%;
      right: 48%;
    }
    58%{
      bottom: 70%;
      right: 48%;
    }
    76%{
      bottom: 70%;
      right: 25%;
    }
    80%{
      bottom: 00%;
      right: 25%;
    }
    100%{
      bottom: 0%;
      right: 0%;
    }
  }
  .line {
    height: 1rem;
    width: 75%;
  }
  .start a{
    text-align: center;
    text-decoration:none;
    background-color: $secondary;
    display:block;
    position:relative;
    padding:20px 40px;
    
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-shadow: 0px 1px 0px #000;
    filter: dropshadow(color=#000, offx=0px, offy=1px);
    
    -webkit-box-shadow:inset 0 1px 0 #b3cfd4, 0 10px 0 #4a9cdf;
    -moz-box-shadow:inset 0 1px 0 #b3cfd4, 0 10px 0 #4a9cdf;
    box-shadow:inset 0 1px 0 #b3cfd4, 0 10px 0 #4a9cdf;
    
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .start a:active{
    top:10px;
    background-color: darken($secondary, 20%);
    -webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #4a9cdf;
    -moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 #4a9cdf;
    box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #4a9cdf;
  }

  .start:after{
    content:"";
    height:118%;
    width:104%;
    padding:4px;
    position: absolute;
    bottom:-17px;
    left:-6px;
    z-index:-1;
    background-color:#070707;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .cards {
    width: 30%;
    background-color: rgb(188, 219, 233);
    border: solid white;
    position: relative;
    overflow: hidden;
  }
  .cards-theme {
    position: absolute;
    top: 0%;
    left: 0;
    right: 0%;
    bottom: 0%;
    background-color: rgb(112, 181, 221);
    opacity: 1;
    transition: all 300ms ease-in;
    &:hover .cards-title{
      transition: all 300ms ease-in;
      transform: scale(4);
    }
    &:hover {
      opacity: 0;
      transition: all 400ms ease-in;
    }
  }
  .cards-title {
    background-color: rgb(209, 60, 208, 0.75);
    scale: 1;
    transition: all 300ms ease-in;
    position: absolute;
    left: 0%;
    right: 0%;
    z-index: 2;
  }
  .cards-bg {
    position: absolute;
    left: 0%;
    right: 0%;
    bottom: 0%;
    top: 0%;
    background-color: $primary;
    opacity: 0.4;
  }
</style> >
  

