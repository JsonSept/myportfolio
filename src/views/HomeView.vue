<template>
  
  <div id="particles-js">
<section>
        
          <h2 class="layer" data-speed="2">I'm Jason September</h2>
          <h3>I am an aspiring Fullstack Developer</h3>
       
          <a href="https://drive.google.com/file/d/1rD-_Iq-6tkrvmozQMFQKaXz1Tn9_UeWP/view?usp=drive_link" target="_blank"><button>Download CV</button></a> 
      </section>
      
    </div>
    <div id="light"></div>
    
</template>

<script>

export default {
  
}
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
button {
  border-radius: 6px;
  border: none;
  box-shadow: rgb(0, 0, 0) 6px 5px 30px;
  color: #000000;
  padding: 4px;
  font-size:30px;
  cursor:pointer;
  /* border-right: rgb(0, 0, 0) 7px; */
}

button:hover {

  background: linear-gradient(#2196f3, #e91e63);
  
 }

 .layer {
    -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: rgb(0, 0, 0);
  text-shadow: 4px 4px 4px black;
 }
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
    width:100%;
    height: 50vh;
    overflow: hidden;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
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
    
}
h3 {
    color: #2196f3;
}
#light {
    width: 100px;
    height: 100px;
    background-color: yellow;
    border-radius: 50px;
    -webkit-text-stroke-width: 1px;
   box-shadow: 3px 0 7px #090606;
}
</style>