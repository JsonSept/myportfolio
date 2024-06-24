<template>
  <div class="container1">
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
    <div class="exp">
      <h1>Work Experiences</h1>
      <div class="cardsExp">
        <div class="timeline-block">
          <h1>Life Choices Studio Intern</h1>
          <p>During my time as an intern in LCS as a web Developer I got the chance to work in a team and I obtained
            soft skills like team work,and comminication skills which enabled me to be more resilient, and utilized my
            time managment effectively.</p>
          <p>2024 - Present</p><br>
          <!-- <router-link to="/projects"><button>Go to my projects</button></router-link> -->
          <h1>Place: Flint Group</h1>
          <h2>Title:Colour Matcher</h2>
          <p>Matching and mixing paste ink colours accurately according to a prototype design provided from a customer
            and or printing company.</p>
          <p>2020 - 2023</p><br>

          <h1>Place: Meatrite</h1>
          <h2>Title:Cashier</h2>
          <p>Worked as cashier and all arounder</p>
          <p>2018 - 2019</p>
        </div><br>
      </div>
    </div>
  </div>

  <h1 class="center">Badges and Achievements</h1>
  <div class="badges">
    <div class="cards">
      <div class="content">
        <img src="https://i.ibb.co/dJCT260/SCRUM.png" alt="">
        <h2>LC Studio Scrum</h2>
      </div>
    </div>


    <div class="cards">
      <div class="content">
        <img src="https://i.ibb.co/sjfs0Wb/python-essentials-1-1.png" alt="">
        <h2>Python Essentials</h2>
      </div>
    </div>
    <div class="cards">
      <div class="content">
        <img src="https://i.ibb.co/QH6VvMT/operating-systems-basics.png" alt="">
        <h2>Operating System<br>Basics</h2>
      </div>
    </div>
    <div class="cards">
      <div class="content">
        <img src="https://i.ibb.co/P53WWtt/introduction-to-data-science.png" alt="">
        <h2>Introduction to Data<br>Science</h2>
      </div>
    </div>


  </div>
  <div class="AC">
    <div class="cards">
      <div class="content">
        <img src="https://i.ibb.co/qRk7F2p/Screenshot-2024-06-12-100447.png" alt=""><br>
        <br><h2>Linux<br>Unhatched</h2><br><br>

      </div>
      <a
        href="https://drive.google.com/file/d/16gdyEDOcGGaT9z1zXDDfVdW60N-4SYEa/view?usp=drive_link"><button>View</button></a>
    </div>
    <div class="cards">
      <div class="content">
        <img src="https://i.ibb.co/0FGFXhm/Screenshot-2024-06-12-100211.png" alt=""><br>
        <h2>Programming<br>Essentials<br>in C++</h2><br>

      </div>
      <a
        href="https://drive.google.com/file/d/1LCx-3cTNNQnplhXTJv3yiELG_hEjozIa/view?usp=drive_link"><button>View</button></a>
    </div>
  </div>

  <h1 class="center">Skills</h1>
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
        <h2 class="space">Bootstrap</h2>
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
        <img src="https://i.ibb.co/9TWz1qp/vuejs-logo-17-D586-B587-seeklogo-com.png" style="height:85px; margin-top:9px"
          alt="">
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

  </div>
</template>
<script scoped>


export default {
  
}
</script>
<style scoped>
body {
  background: fixed;
}
 
  .cards {
    text-align: center;
    text-shadow: 2px 5px 5px 10px black;
    box-shadow: black 2px 2px 10px 2px;
    padding: 2%;
    backdrop-filter: blur(5px);
    border-radius: 7px;
    background: rgba(255, 255, 255, 0.1);
    /* background: white; */
  }
  
.container1 {
  padding: 7%;
  margin-top: 90rem;
  text-align: center;
  
}
.timeline-block {
  width:40%;
  box-shadow: rgb(0, 0, 0) 2px 2px 40px;
  background-color: rgb(73, 74, 74);
  transition: box;
  text-align: center;
  border-radius: 7px;
  display: grid;
  text-align: center;
  padding: 2%;

}
p {
  font-size: 20;
}
h1 {
color: rgb(4, 103, 251);
-webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgb(0, 0, 0);
  text-shadow: 2px 5px 10px black;
}
.exp {
  padding: 3%;
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
    height : 100px;
}
.skills {
    display: flex;
    flex-wrap: nowrap;
    justify-content:space-around;
    padding: 3%;
    color: antiquewhite;
    /* justify-content: space-around; */
    
}
.badges {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 2%;
  color: antiquewhite;
  justify-content: space-around;
}
.AC {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  color: antiquewhite;
justify-content: space-evenly;
}
button {
  padding: 2%;
  padding-right: 2%;
  background:rgb(13, 11, 11);
  color:rgb(255, 245, 245);
  cursor: pointer;
  border-radius: 6px;

  
}
.center {
  text-align: center;
  margin-top: 3%;
}
h2 {
  text-shadow: 2px 5px 10px black;
}
.space {
  margin-right: 2%;
}

@media screen and (max-width: 390px){
    .container1 {
        padding-top: 70rem;
        /* text-align: center; */
    }
    .exp {
        margin-left: -10%;
      
    }
  .cardsExp {
    
    /* height: 30rem; */
    width: 400px;
  }
    .badges {
        display: grid;
    }

    .cards {
         /* padding-top: 20px; */
         border-radius: 5px;
         box-shadow: black 2px 2px 10px 2px;
    }
    .skills {
        display: grid;
       
    }
    h1 {
        font-size: 30px;
    }
  .timeline-block {
    width: 20rem;
  }
  .education {
    margin-left: -1.5rem;
  }
}
</style>