<template>
  <!-- <iframe src='https://my.spline.design/deeosocialavatar-3c03c46fbca4a07e7a3f12826f9e1b09/' frameborder='30' width='100%' height='100%'></iframe> -->
<!-- 
    <body>
      <div class="textContainer">
 <div class="waviy">
   <span style="--i:1">HI</span>
    <span style="--i:2">I</span> 
  </div>
  
  <div class="waviy">
    <span style="--i:3">MY</span>
    <span style="--i:4">Y</span> 
      </div>

      <div class="waviy">
        <span style="--i:5">NAME</span>
   <span style="--i:6">A</span>
   <span style="--i:7">M</span>
   <span style="--i:8">E </span><br> 
      </div>

      <div class="waviy">
        <span style="--i:9">IS</span>
   <span style="--i:10">S </span><br> 

      </div>
<br>
      <div class="waviy">
   <span style="--i:11">JASON</span>


      </div>
      </div>
      
</body> -->
<section>
        <img src="../assets/1.png" data-speed="-5" class="layer" alt="">
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
        <img src="../assets/12.png" data-speed="5" class="layer" alt="">
        <h2 class="layer" data-speed="2">Hi My Name Is Jason</h2>
    </section>
</template>
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body {
    background: #111;
}

section {
    position: relative;
    width:125%;
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
    font-size: 6em;
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