<template>
  <navbar-comp/>
  <router-view/>
 <div class="circle1"></div>
 <div class="circle2"></div>
</template>


<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

body::before {
  z-index: -5;
  position: fixed;
  border-radius: 50%; 
     margin-left: 100%;
    margin-top: 300px;
     height: 100vh;
    width: 105vh;
    background: linear-gradient(#f00, #f0f);
    box-shadow: 5px 20px 40px 15px black;
    content: '';
    animation: MoveUpDown 4s linear infinite;
}
body::after {
  z-index: -5;
  position: fixed;
  border-radius: 50%; 
     margin-right: 80%;
    margin-bottom: 630px;
     height: 70vh;
    width: 70vh;
    background: linear-gradient(#e91e63, #2196f3);
    box-shadow: 5px 20px 40px 5px black;
    content: '';
    animation: MoveUpDown1 4s linear infinite;
}

body {
  height: 100px;
    display:flex ;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #161623;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}


nav a.router-link-exact-active {
  background-color: rgba(0, 0, 0, 0.5); 
        box-shadow:rgb(0, 255, 225) 3px 2px 20px;
        /* box-shadow:grey 3px 2px 0; */
        border-radius: 10px 0px 10px 0px;
        color: silver;
        border:none;
        border-top: .1px solid white;
        border-left: 2px solid grey;
        border-bottom: 2px silver;
        border-bottom:1px solid rgba(255, 255, 255, .2);
        transition: transform .6s;
        animation: glow 1s ease-in-out infinite alternate;
}
@keyframes MoveUpDown {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-80px);
    }
}
@keyframes MoveUpDown1 {
    0%, 100% {
        transform: translateY(-80px);
             }
    50% {
        transform: translateY(0);
    }
}
@keyframes glow {
    from {
      box-shadow:rgb(0, 255, 225) 5px 7px 40px;
        /* text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0058e6, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073; */
        /* text-shadow: 0 0 10px #fff, 0 0 70px #0058e6; */
    }
    to {
      box-shadow:rgb(217, 8, 228) 5px 7px 40px;
        /* text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6; */
        /* text-shadow: 0 0 20px #fff, 0 0 70px #ff4da6; */
    }
}
nav a.router-link-exact-active:hover {
  transform: scale(0.2); 
}
#light {
    width: 100px;
    height: 100px;
    background-color: yellow;
    border-radius: 10px; /* Makes it a circle */
    position: fixed;
}
</style>
<script>
import './assets/particles.js'
// import './assets/app.js'
import NavbarComp from './components/NavbarComp.vue'
// import VanillaTilt from 'vanilla-tilt'
export default {
components: {
  NavbarComp
}
}

</script>