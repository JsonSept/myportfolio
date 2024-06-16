<template>
  <div class="content2">
  <div class="about">
    <h1>About Me</h1><br>
    <h2>My name is Jason September,from Eersteriver.I graduated from Forest Heights High School in the year 2016.I have had multiple part time jobs before I started at Life Choices academy where I underwent a fullstack development course for 6 months and graduated with a certificate and i am currently interning in Life Choices Studio where I have the opportunity to engage with my colleagues and enhance my set of skills within the software development</h2>
  </div>
<div class="info">
  <img class="img" id="pic" src="https://i.ibb.co/mFKL94f/download-image-1712314706030-removebg-preview.png" alt="">
</div>
</div>
</template>

<style scoped>
.about {
 text-align: center;
 width: 40%;
 z-index: 1;
 margin-left: 10%;
 margin-bottom: 5%;
 border-radius: 5px;
 border: solid 3px rgb(209, 3, 209);
 backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.2);
  outline: 0.3rem solid rgba(255, 255, 255, 0.3);
  box-shadow: #090606 2px 5px 70px;
  padding: 1%;
}
h2 {
  color: #e2dede;
}
.img {
  margin-top: -100%;
  border: solid 4px rgb(209, 3, 209);
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -3;
  border-radius: 10px;
  outline: 0.3rem solid rgba(255, 255, 255, 0.3);
  
}
 h1 {
  color:#05f6ee;
 }
h4 {
  color: #dcdcdc;
} 
  .info .about {
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
 }
 .info {
  margin-left: 53%;
  
 }
 .content2 {
  padding-top: 10%;
 }
 #pic {
  box-shadow: #090606 2px 5px 40px;
 }

 @media screen and (max-width: 390px) {
 
 .content2 {
  
  padding-top: 30%;
  margin-right: 80%;
  margin-bottom: 5%;
 
  /* display: flex; */
  
 }
 
 .about {
   font-size: 10px;
   width: 20rem;
    margin-right: 50%;
  }

.img {
  height: 300px;
  margin-left: -100%;
}
.info {
  /* margin-right: 20%; */
  margin-top: 80%;

}
 }
</style>