<template>
<div class="container">
    <div class="education">
  <h1>Education</h1>
  <div class="cardsExp">
    <div class="timeline-block">
      <h1>Life Choices Coding Academy</h1>
      <p>Web Development, UI/UX & Software Engineering</p>
      <p>2023 - Present</p><br>

      <h1>Forest Heights High School</h1>
      <p>Matric</p>
      <p>2012 - 2016</p>
    </div>
  </div>
</div>
<br>
<hr>
<div class="exp">
  <h1>Work Experiences</h1>
  <div class="cardsExp">
    <div class="timeline-block">
      <h1>Life Choices Studio Intern</h1>
      <p>During my time as an intern in LCS as a web Developer I got the chance to work in a team and I obtained soft skills like team work,and comminication skills which enabled me to be more resilient, and utilized my time managment effectively.</p>
      <p>2024 - Present</p><br>
      <!-- <router-link to="/projects"><button>Go to my projects</button></router-link> -->
      <h1>Place: Flint Group</h1>
      <h2>Title:Colour Matcher</h2>
      <p>Matching and mixing paste ink colours accurately according to a prototype design provided from a customer and or printing company.</p>
      <p>2020 - 2023</p><br>
    
      <h1>Place: Meatrite</h1>
        <h2>Title:Cashier</h2>
        <p>Worked as cashier and all arounder</p>
        <p>2018 - 2019</p>
    </div><br>
</div>
</div>
</div>
<hr>
<h1>Skills</h1>
<div class="skills">

<div class="cards">
    <div class="content">
        <img src="https://i.ibb.co/CQvDTGJ/html5-icon-13.png" alt="">
        <h2>HTML</h2>
    </div>
</div><br>
<div class="cards">
    <div class="content">
        <img src="https://i.ibb.co/sbzPW35/csslogo.png" style="height:87px; margin-top:8px" alt="">
        <h2>CSS</h2>
    </div>
</div><br>
<div class="cards">
    <div class="content">
        <img src="https://i.ibb.co/7yGrkRJ/bootstrap-logo.png" alt="">
        <h2>Bootstrap</h2>
    </div>
</div><br>
<div class="cards">
    <div class="content">
        <img src="https://i.ibb.co/vHm0Lm3/R.png" alt="">
        <h2>Javascript</h2>
    </div>
</div><br>
<div class="cards">
    <div class="content">
        <img src="https://i.ibb.co/9TWz1qp/vuejs-logo-17-D586-B587-seeklogo-com.png" style="height:85px; margin-top:9px" alt="">
        <h2>Vue.JS</h2>
    </div>
</div><br>
<div class="cards">
    <div class="content">
        <img src="https://i.ibb.co/87Dr9nz/mysql-logo-png-transparent-768x532.png" alt="">
        <h2>MySQL</h2>
    </div>
</div><br>
<div class="cards">
    <div class="content">
        <img src="https://i.postimg.cc/N0t6dxj7/nodejs.png" alt="">
        <h2>Node.JS</h2>
    </div>
</div>

  

  <!-- <div class="carousel-container">
    <div class="carousel">
      <div class="card active">Card 1</div>
      <div class="card">Card 2</div>
      <div class="card">Card 3</div>
      <div class="card">Card 4</div>
      <div class="card">Card 5</div>
    </div>
    <button id="prevBtn">Previous</button>
    <button id="nextBtn">Next</button>
  </div> -->

  
</div>
</template>
<script scoped>


export default {
  
}
</script>
<style scoped>

  /* .card {
    width: 100%;
    padding: 20px;
    background-color: #f0f0f0;
    margin-right: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .active {
    background-color: #ccc;
  }
  
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-10%);
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
  }
  
  #prevBtn {
    left: 10px;
  }
  
  #nextBtn {
    right: 10px;
  } */
  .cards {
    text-align: center;
  }
.container {
  padding: 7%;
  margin-top: 40%;
  text-align: center;
  
}
.timeline-block {
  border: solid white 2px;
  /* font-size: 10px; */
  width:40%;
  box-shadow: rgb(60, 63, 63) 2px 2px 2px;
  background-color: rgb(73, 74, 74);
  transition: box;
  text-align: center;
  border-radius: 7px;
  display: grid;
  text-align: center;

}
p {
  font-size: 20;
}
h1 {
color: rgb(4, 103, 251);
-webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: rgb(0, 0, 0);
  text-shadow: 2px 2px 2px black;
}
.cardsExp {
  z-index: 1000;
  padding-top: 5%;
  color:white;
  text-align: center;
  display: flex;
  
  justify-content: center;
}
img {
    height : 100px
}
.skills {
    display: flex;
    justify-content: center;
    padding: 2%;
    color: antiquewhite;
    justify-content: space-around;
}
</style>