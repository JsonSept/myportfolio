<template>
    <body>
      
    
    <div class="wrapper mt-3">
        <div class="intro">
            <div class="profile">
                <div class="photo">
                  <img src="https://i.ibb.co/qDvwc9j/IMG-20231101-161112.jpg" alt="">
                </div>
                <div class="bio">
                  <h1 id="resume-name"  class="name">Jason September</h1>
                  <p id="resume-title" class="profession">Full-stack Developer</p>
                </div>
            </div>

            

            <div class="intro-section contact">
                <div class="personalinfo">
                <h1 class="title">Personal Info</h1>
                <div class="info-section">
               <i style = "color: #F59105;" class="fas fa-phone"></i>
               <span style="color: black; font-weight: bold; font-size: 15px">Date Of Birth: 30/10/1998</span>
            </div>
            <div class="info-section">
               <i style = "color: #F59105;" class="fas fa-phone"></i>
               <span style="color: black; font-weight: bold; font-size: 15px">Marital Status: Single</span>
            </div>
            <div class="info-section">
               <i style = "color: #F59105;" class="fas fa-phone"></i>
               <span style="color: black; font-weight: bold; font-size: 15px">Nationality: South African</span>
            </div>
            <h1 class="title">Languages</h1>
            <div class="info-section">
               <i style = "color: #F59105;" class="fas fa-phone"></i>
               <span style="color: black; font-weight: bold; font-size: 15px">Afrikaans</span>
            </div>
            <div class="info-section">
               <i style = "color: #F59105;" class="fas fa-phone"></i>
               <span style="color: black; font-weight: bold; font-size: 15px">English</span>
            </div>
            </div> 
                <h1 class="title">Contact</h1>
            <div class="info-section">
               <i style = "color: #F59105;" class="fas fa-phone"></i>
               <span style="color: black; font-weight: bold; font-size: 15px">Phone: 067 066 0615</span>
            </div>
           
        <div class="info-section">
          <i style = "color: #F59105;" class="fas fa-paper-plane"></i>
          <span style="color: black; font-weight: bold; font-size: 15px;">Email: jasonseptember.za@gmail.com</span>
        </div>
        <h1 class="title">Address</h1>
        <div class="info-section">
      <i style = "color: #F59105;" class="fas fa-map-marker-alt"></i>
      <span style="color: black; font-weight: bold; font-size: 15px">Address: 49 Dune Street Condor Park Eersteriver</span>
    </div>
            </div>
            <div class="intro-section follow">
        <h1 class="title">Socials</h1>
        <div class="info-section link">
          <div id = "linkedin-div">
          <a href="https://www.linkedin.com/in/jason-september-431380270/" target="_blank"><i class="fa-brands fa-linkedin fa-xl" style="color: #F59105; cursor: pointer;">
          <span class="mx-2" style="color: black; font-weight: bold; font-size: 15px;">Linkdin</span></i></a>
          </div>
          <div id = "github-div">
          <a href="https://github.com/JsonSept" target="_blank"><i class="fa-brands fa-github fa-xl" style="color: #F59105; cursor: pointer;">
          <span class="mx-2" style="color: black; font-weight: bold; font-size: 15px;">Github</span></i></a>
          </div>
          <div id = "whatsapp-div">
          <a href="https://wa.me/+27670660615" target="_blank"><i class="fa-brands fa-whatsapp fa-xl" style="color: #F59105; cursor: pointer;">
          <span class="mx-2" style=" color: black; font-weight: bold; font-size: 15px;">Whatsapp</span></i></a>
          </div>
        </div>
      </div>
        </div>
        <div class="detail">
            <div class="detail-section edu">
                <div class="detail-title">
                    <div class="title-icon">
                      <i class="fas fa-user-graduate"></i>
                    </div>
                    <span>Education</span>
                </div>
                <div class="detail-content">
                    <div class="timeline-block">
                      <h1>Life Choices Coding Academy</h1>
                      <p>Web Development, UI/UX & Software Engineering</p>
                      <p>2023 - Present</p>
                    </div>
                    <div class="timeline-block">
                      <h1>Forest Heights High School</h1>
                      <p>Matric</p>
                      <p>2012 - 2016</p>
                    </div>
                </div>
                <div class="detail-section edu">
                    <div class="detail-title">
                    <div class="title-icon">
                        <i class="fas fa-user-graduate"></i>
                    </div>
                        <span>Work experience</span>
                    </div>
                    <div class="detail-content">
                        <div class="timeline-block">
                          <h1>Life Choices Studio Intern</h1>
                          <p>During my time as an intern in LCS as a web Developer I got the chance to work in a team and I obtained soft skills like team work,and comminication skills which enabled me to be more resilient, and utilized my time managment effectively.</p>
                          <p>2024 - Present</p>
                          <router-link to="/projects"><button>Go to my projects</button></router-link>
                        </div>
                    <div class="timeline-block">
                      <h1>Place: Flint Group</h1>
                      <h2>Title:Colour Matcher</h2>
                      <p>Matching and mixing paste ink colours accurately according to a prototype design provided from a customer and or printing company.</p>
                      <p>2020 - 2023</p>
                    </div>
                    <div class="timeline-block">
                        <h1>Place: Meatrite</h1>
                        <h2>Title:Cashier</h2>
                        <p>Worked as cashier and all arounder</p>
                        <p>2018 - 2019</p>
                    </div>
                 </div>
                </div>
                <div class="detail-section pg-skill">
                    <div class="detail-title">
                    <div class="title-icon">
                      <i class="fas fa-laptop-code"></i>
                    </div>
                    <span>Programming skills</span>
                    </div>
                    <div class="detail-content">
          <ul class="pg-list">
            <li>
              <span>Scratch</span>
            </li>
            <li>
              <span>HTML5</span>
            </li>
            <li>
              <span>CSS3</span>
            </li>
            <li>
              <span>Javascript(ES6)</span>
            </li>
            <li>
              <span>Bootstrap</span>
            </li>
            <li>
              <span>VueJS</span>
            </li>
            <li>
              <span>MySQL</span>
            </li>
            <li>
              <span>NodeJS</span>
            </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  </body>
  </template>
  <script>
  export default {
    
  }
  </script>
  <style scoped>
  button {
    background: linear-gradient(#2196f3, #e91e63);
  color: black;
  padding: 5px;
  border: none;
  border-radius: 8px;
}
  body{
  }
     #background{
      background-color: black;
      color: #F59105;
      /* min-height: 10vh; */
  }
  :root {
      --pgbar-length: 100%;
      --MATH-PI: 3.1415px;
      --percent: 100;
  }
  * {
      box-sizing: border-box;
  }
  .resume-head{
          background-color: black;
          color: white !important;
          border: 5px solid #F59105;
          border-radius: 50px;
          font-family: "DM Serif Display";
          font-size: 55px;
        }
        #resume-name{
     font-family: "DM Serif Display";
     font-size:27px;
     color: #0088ff!important;
  }
  #resume-title{
      font-family: "Roboto";
      font-size: 23px;
      font-weight: bold;
  }
  .wrapper {
    padding-top: 70%;
      margin: 0 auto;
      max-width: 70rem;
      background-color: #4d4d4d;
      display: flex;
      box-shadow: 0px 0px 15px 4px #00fbff;
  }
  .intro {
      flex: 0 0 250px;
      background-color: #7a7a7a80;
      opacity: .9;
      /* opacity: 0;
    transition: 0.5s; */
      box-shadow: 5px 0px 15px 0px #00fbff;
      z-index: 5;
  }
  .profile {
      position: relative;
      background-color: black;
      padding: 2rem 1rem;
      margin-bottom: 50px;
      text-align: center;
      user-select: none;
  }
  .profile::after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: -15px;
      width: 100%;
      height: 30px;
      background-color: rgb(48, 47, 47);
      transform: skewY(-5deg);
  }
  .photo img {
      width: 80%;
      border-radius: 50%;
  }
  .bio .name {
      font-size: 1.5rem;
      text-align: center;
      color: #F8F8F8;
      margin: 0;
      margin-top: 1rem;
  }
  .bio .profession {
      font-size: 1rem;
      text-align: center;
      color: #F8F8F8;
      margin: 0;
  }
  .intro-section {
      padding: 0 1rem;
      color: #545454;
  }
  .intro-section .title {
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
  }
  .about .paragraph {
      text-align: justify;
  }
  .info-section {
      margin: 1rem 0;
  }
  .info-section span {
      position: relative;
      transition: all 0.3s;
  }
  .info-section i {
      color: #F59105;
      width: 20px;
      height: 20px;
  }
  .link a {
      text-decoration: none;
      color: inherit;
  }
  .link span::after {
      position: absolute;
      content: '';
      left: 50%;
      bottom: -3px;
      width: 0;
      height: 2px;
      background-color: #00ffe1;
      transition: width 0.3s;
      transition-timing-function: cubic-bezier(.92,.57,.33,1.02);
      transform: translate(-50%, 0);
  }
  .link span:hover {
      color: #04f6fa;
  }
  .link span:hover::after {
      width: 100%;
  }
  .detail {
      flex: 1 0 0;
      /* background-color: rgb(55, 54, 54); */
      /* opacity: .8; */
      backdrop-filter: blur(14px); 
            background-color: rgba(255, 255, 255, 0.2); 
            opacity: .9;
      padding: 2rem;
  }
  .detail:hover > .detail-section:not(:hover) {
      opacity: 0.3;
  }
  .detail-section {
      transition: all 0.3s;
  }
  .detail-section:not(:last-of-type) {
      padding-bottom: 1rem;
  }
  .detail-title {
      display: flex;
      align-items: center;
  }
  .detail-section > .detail-content {
      padding: 1.5rem;
      padding-left: 2rem;
      user-select: none;
      font-weight: bold;
      font-size: 18px;
  }
  .detail-section.edu > .detail-content {
      padding-left: calc(1.5rem + 10px);
  }
  h1{
      color: rgb(230, 229, 238)  !important;
      font-weight: bold !important;
  }
  .title-icon + span {
      font-size: 26px;
      transition: all 0.3s;
      font-weight: bold;
  }
  .title-icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      margin-right: 1rem;
      width: 2.5rem;
      height: 2.5rem;
      background-color: black;
      border-radius: 50%;
      transition: all 0.3s;
  }
  .title-icon i {
      color: white;
      line-height: 1rem;
      font-size: 1rem;
      text-align: center;
  }
  .detail-section:hover .title-icon {
      transform: scale(1.5);
      margin-right: 1.5rem;
  }
  .detail-section:hover .title-icon + span {
      letter-spacing: 1.5px;
  }
  .timeline-block {
      position: relative;
      padding-left: 30px;
  }
  .timeline-block:not(:last-of-type) {
      margin-bottom: 1rem;
  }
  .timeline-block h1 {
      font-size: 18px;
      margin: 5px 0;
      transition: all 0.3s;
  }
  .timeline-block p {
      font-size: 15px;
      margin: 5px 0;
  }
  .timeline-block time {
      font-size: 0.8rem;
      color: #737373;
  }
  .timeline-block::before {
      position: absolute;
      content: '';
      width: 15px;
      height: 15px;
      /* background-color: black; */
      border: 3px solid black;
      border-radius: 50%;
      left: -10px;
      top: -5px;
  }
  .timeline-block::after {
      position: absolute;
      content: '';
      width: 3px;
      height: 100%;
      background-color: black;
      left: -1px;
      top: 13px;
  }
  .timeline-block:hover h1 {
      color: #F59105;
  }
  .timeline-block:hover::before {
      animation: circle 1.2s infinite;
  }
  .pg-list, .tool-list, .favor-list {
      padding: 0;
      list-style: none;
  }
  .pg-list > li {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      color: black;
      font-weight: bold;
  }
  .sb-skeleton {
      position: relative;
      flex: 1 0 auto;
      height: 2px;
      background-color: #9A9A9A;;
  }
  .pg-list > li > span {
      flex: 0 0 100px;
  }
  .sb-skeleton > .skillbar {
      position: absolute;
      left: 0;
      top: -1px;
      width: var(--pgbar-length);
      height: 4px;
      background-color: #05b9f5;
  }
  .tool-list {
      list-style: none;
      display: flex;
      justify-content: space-between;
  }
  .tool-list > li {
      position: relative;
      text-align: center;
      flex: 0 0 25%;
  }
  .tool-list > li > svg {
      position: relative;
      fill: transparent;
      width: 95%;
      transform: rotate(-90deg);
  }
  .tool-list > li > svg > circle {
      stroke-width: 1px;
      stroke: #CDCDCD;
  }
  .tool-list > li > svg > circle.cbar {
      stroke-width: 3px;
      stroke: #F59105;
      stroke-linecap: round;
      stroke-dashoffset: 0;
      stroke-dasharray: calc(var(--MATH-PI) * 45 * 2);
      transition: all 0.8s;
      transition-timing-function: cubic-bezier(.64,.51,.16,.86);
  }
  .tool-list > li:hover > svg > circle.cbar {
      stroke-width: 4px;
      stroke: #F59105;
      stroke-dashoffset: calc(var(--MATH-PI) * 45 * 2 * (1 - var(--percent)));
  }
  .tool-list > li > .tl-name,
  .tool-list > li > .tl-exp {
      position: absolute;
      left: 50%;
      color: #9A9A9A;
  }
  .tool-list > li > .tl-name {
      top: 50%;
      font-size: 1.2rem;
      transform: translate(-50%, -50%);
  }
  .tool-list > li > .tl-exp {
      top: calc(50% + 1.4rem);
      font-size: 1rem;
      transform: translate(-50%, -50%);
  }
  .outer-frame {
      border: 1px solid #9A9A9A;
      border-radius: 5px;
  }
  @keyframes circle {
    0% {
      box-shadow: 0 0 0 0px rgba(51, 52, 57, 1);
    }
    100% {
      box-shadow: 0 0 0 6px rgba(51, 52, 57, 0);
    }
  }
  @media (max-width: 1024px) {
      html {
          font-size: 90%;
      }
      .wrapper {
          flex-direction: column;
      }
      .intro, .detail {
          flex: 0 0 100%;
          box-shadow: none;
      }
      .intro-section {
          padding: 0 2rem;
      }
      .profile {
          margin-bottom: 1rem;
      }
      .profile::after {
          display: none;
      }
      .photo img {
          width: 100px;
          height: 100px;
      }
  }
  @media (max-width: 768px) {
      html {
          font-size: 80%;
      }
      .tool-list {
          flex-wrap: wrap;
      }
      .tool-list > li {
          flex: 0 0 33.33%;
      }
      .favor-list > li {
          flex: 0 0 33.3333%;
      }
  }
  @media (max-width: 500px) {
      html {
          font-size: 70%;
      }
  }
  .footer {
    font-size: 15px;
    color: black;
    font-weight: bolder;
    text-align: center;
    background-color: #F59105;
  }
  @media (max-width: 300px) {
    #background {
      min-height: auto;
    }
    .wrapper {
      flex-direction: column;
      max-width: 100%;
    }
    .intro, .detail {
      flex: 0 0 100%;
      box-shadow: none;
    }
    .photo img {
      width: 100%;
      height: auto;
    }
    .timeline-block {
      padding-left: 15px;
    }
    .sb-skeleton {
      height: 1px;
    }
    .tool-list > li {
      flex: 0 0 100%;
      margin-bottom: 1rem;
    }
    .tool-list > li > svg {
      width: 100%;
    }
    .footer {
      font-size: 14px;
      padding: 5px;
    }
  }
  
  </style>