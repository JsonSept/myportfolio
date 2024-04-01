<template>
  

    <body>
      <div class="textContainer">
 <div class="waviy">
   <span style="--i:1">HI</span>
   <!-- <span style="--i:2">I</span> -->
  </div>
  
  <div class="waviy">
    <span style="--i:3">MY</span>
   <!-- <span style="--i:4">Y</span> -->
      </div>

      <div class="waviy">
        <span style="--i:5">NAME</span>
   <!-- <span style="--i:6">A</span>
   <span style="--i:7">M</span>
   <span style="--i:8">E </span><br> -->
      </div>

      <div class="waviy">
        <span style="--i:9">IS</span>
   <!-- <span style="--i:10">S </span><br> -->

      </div>
<br>
      <div class="waviy">
   <span style="--i:11">JASON</span>
   <!-- <span style="--i:13">A</span>
   <span style="--i:12">S</span>
   <span style="--i:14">O</span>
   <span style="--i:15">N</span> -->

      </div>
      </div>
</body>
</template>
<script>
export default {
  
}
</script>
<style>
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
  }
</style>