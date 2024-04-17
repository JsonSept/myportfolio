<template>
  <navbar-comp/>
  <router-view/>
 
</template>


<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

body {
  height: 100px;
    display:flex ;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #161623;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Add the shadow here */
}

body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#f00, #f0f);
    clip-path:circle(30% at right 70%);
    z-index: -5;
    float: left;
    text-shadow: #000000 2px 5px 40px;
    
    -webkit-text-stroke-width: 2px;
   border: 3px #000000;
}

body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#2196f3, #e91e63);
    clip-path:circle(20% at 10% 10%);
    z-index: -5;
    float: left;
    transform: rotate3d(2, 4, 1, 4deg);
}

nav a.router-link-exact-active {
  background-color: rgba(0, 0, 0, 0.5); 
        box-shadow:rgb(0, 255, 225) 3px 2px 20px;
        /* box-shadow:grey 3px 2px 0; */
        border-radius: 10px 0px 10px 0px;
        color: silver;
        border:1px;
        border-top: .2px solid white;
        border-left: .2px solid grey;
        border-bottom: 2px silver;
        border-bottom:1px solid rgba(255, 255, 255, .2);
        transition: transform .6s;
        animation: glow 1s ease-in-out infinite alternate;
}
@keyframes glow {
    from {
      box-shadow:rgb(0, 255, 225) 2px 3px 40px;
        /* text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0058e6, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073; */
        /* text-shadow: 0 0 10px #fff, 0 0 70px #0058e6; */
    }
    to {
      box-shadow:rgb(247, 247, 247) 2px 3px 40px;
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