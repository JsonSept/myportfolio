<template>
  <img src="" alt="">
  
  
  <div id="particles-js">
<section>
        <!-- <img src="../assets/1.png" data-speed="-5" class="layer" alt="">
        <img src="../assets/2.png" data-speed="5" class="layer" alt="">
        <img src="../assets/3.png" data-speed="2" class="layer" alt="">
        <img src="../assets/4.png" data-speed="6" class="layer" alt="">
        <img src="../assets/5.png" data-speed="-8" class="layer" alt="">
        <img src="../assets/6.png" data-speed="-2" class="layer" alt="">
        <img src="../assets/7.png" data-speed="4" class="layer" alt="">
        <img src="../assets/8.png" data-speed="-9" class="layer" alt="">
        <img src="../assets/9.png" data-speed="6" class="layer" alt="">
        <img src="../assets/10.png" data-speed="-7" class="layer" alt="">
        <img src="../assets/11.png" data-speed="-5" class="layer" alt="">
        <img src="../assets/12.png" data-speed="5" class="layer" alt=""> -->
        
          <h2 class="layer" data-speed="2">Hi My Name Is Jason</h2>
       
        
        <h3></h3>
      </section>
    </div>
</template>
<!-- <script src="particles.js"></script>
    <script src="app.js"></script> -->
<script>
document.addEventListener("mousemove", parallax);
function parallax(e){
            this.querySelectorAll('.layer').forEach(layer => {
                const speed = layer.getAttribute('data-speed')

                const x = (window.innerWidth - e.pageX*speed)/100
                const y = (window.innerHeight - e.pageY*speed)/100

                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        }
export default {
  
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    /* font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
}
/* #particles-js {
  text-align: center;
            width:2000px;
            height: 100vh;
             background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
        } */
        /* h2 {
            position: absolute;
            top: 50%;
            left:50%;
            transform: translate(-50%, -50%);
            font-size: 80px;
        } */
body {
    background: #111;
}

section {
    position: relative;
    width:200%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-right:50%;  */
}

section img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    object-fit:cover;
}

section h2 {
    position: relative;
    color: #fff;
    font-size: 4em;
    margin-right: 45%;
    /* position: absolute;
          top: 50%;
          left:50%;
          transform: translate(-50%, -50%); */
          /* font-size: 80px; */
}
/* iframe {
  text-align: center;
}
.textContainer {
  display: flex;

}
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color:  #151719;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.waviy {
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0,0,0,.2));
  font-size: 60px;
  padding-right: 5%;
}
.waviy span {
  font-family: 'Alfa Slab One', cursive;
  position: relative;
  display: inline-block;
  color: #fff;
  text-transform: uppercase;
  animation: waviy 1s infinite;
  animation-delay: calc(.1s * var(--i));
  
}
@keyframes waviy {
  0%,40%,100% {
    transform: translateY(0)
  }
  20% {
    transform: translateY(-20px)
  }
}
img {
  height : 300px;
  width: 260px;
}
  h1 {
   padding-top: 6%;
    color:white;
  } */
</style>