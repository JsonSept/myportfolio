<template>
  <div>
    <!-- <img src="https://i.ibb.co/qDvwc9j/IMG-20231101-161112.jpg" alt=""> -->
  </div>
  <div class="about">
    <h1>About Me</h1><br>
    <h2>My name is Jason September</h2>

    <h4>I am 25 years old ,I live in the suburb of Eersteriver.I am a Software Engineer and Frontend Developer intern at Life Choises Studio.</h4>
    <router-link to="/resume" target="_blank"><button>Download CV</button></router-link> 
  </div>
  <!-- <img src="https://i.ibb.co/jGgtrSw/IMG-20220515-150705-removebg-preview.png" alt=""> -->
</template>

<style scoped>
.about {
 text-align: center;
 width: 40%;
 z-index: 1;
 
}
h2 {
  color: #06ffa8;
}
img {
  height:200x;
  margin-top: -20%;
  margin-right: 20%;
  z-index: -3;
  
}
 h1 {
  color:#05f6ee;
 }
h4 {
  color: #dcdcdc;
}
 button {
  border-radius: 6px;
  border: none;
  box-shadow: grey 2px 2px 2px;
  background-color: black;
  color: #fff;
  padding: 4px;
  cursor:pointer;
 }
 button:hover {
  translate:calc(1px);
 }
</style>
