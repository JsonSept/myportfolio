<template>
    <div class="all">
        <h1 class="pro">My Projects</h1>
        <div class="container">
        <div class="card">
            <div class="content">
                <h2>01</h2>
                <img class="img0" src="https://i.postimg.cc/MpG4jZww/Screenshot-2024-04-05-150844.png">
                <h3>Sneaker Shop</h3>
                <p>A sneaker shop website made with HTML and CSS</p>
                <a href="https://github.com/JsonSept/week1.git" target="_blank">
                    <button>
                    </button>
                    Github
                </a><br>
            <a href="https://adorable-churros-ec7e34.netlify.app" target="_blank">
                    <button>    
                    </button>
                    Netlify
                    </a>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2>02</h2>
                <img class="img0" src="https://i.ibb.co/TYdVNs3/Screenshot-2024-01-11-144312.png">
                <h3>Calculator</h3>
                <p>Made with HTML, CSS and JavaScript</p>
                <a href="https://github.com/JsonSept/Calculator.git" target="_blank">
                    <button>
                    </button>
                    Github
                </a><br>
            <a href="https://melodic-tanuki-6eed1b.netlify.app" target="_blank">
                    <button>
                    </button>
                    Netlify
                    </a>
        </div>
        </div>
        <div class="card">
            <div class="content">
                <h2>03</h2>
                <img class="img0" src="https://i.postimg.cc/TYjQHSVp/Screenshot-2024-04-05-151117.png" style="width: 230px;">
                <h3>Keyboard</h3>
                <p>Made with HTML, CSS and JavaScript</p>
                <a href="https://github.com/JsonSept/jsKeyboard.git" target="_blank">
                    <button>
                    </button>
                    Github
                </a><br>
            <a href="https://wonderful-blini-2d38a2.netlify.app" target="_blank">
                    <button>
                    </button>
                    Netlify
                    </a>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2>04</h2>
                <img class="img0" src="https://i.ibb.co/dG1Bn3K/Screenshot-2024-01-11-144202.png">
                <h3>Coffee Shop</h3>
                <p>Made HTML and CSS</p>
                <a href="https://github.com/JsonSept/e-commerce-website.git" target="_blank">
                    <button>
                    </button>
                    Github
                </a><br>
            <a href="https://dynamic-liger-9dc540.netlify.app" target="_blank">
                    <button>
                    </button>
                    Netlify
                    </a>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2>05</h2>
                <img class="img0" src="https://i.ibb.co/Y0VrQ5x/Screenshot-2024-01-11-144247.png">
                <h3>My Ecommerse Website</h3>
                <p>Made HTML, CSS and JavaScript</p>
                <a href="https://github.com/JsonSept/newEcommerse.git" target="_blank">
                    <button>
                    </button>
                    Github
                </a><br>
            <a href="https://sparkling-figolla-37748c.netlify.app" target="_blank">
                    <button>
                    </button>
                    Netlify
                    </a>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2>06</h2>
                <img class="img0" src="https://i.ibb.co/7tkTTwB/Screenshot-2024-01-11-150844.png">
                <h3>RGB to Hex Calculator</h3>
                <p>Made HTML, CSS and JavaScript</p>
                <a href="https://github.com/JsonSept/hexToRGB.git" target="_blank">
                    <button>
                    </button>
                    Github
                </a><br>
            <a href="https://harmonious-crostata-a6bdc9.netlify.app" target="_blank">
                    <button>
                        
                    </button>
                    Netlify
                    </a>
            </div>
         </div>

         <div class="card">
            <div class="content">
                <h2>07</h2>
                <img class="img0" src="https://i.ibb.co/9HxN7tJ/Screenshot-2024-05-03-144401.png">
                <h3>Chowabite</h3>
                <p>Group Presentation</p>
                 
                <a href="https://drive.google.com/file/d/1jGFPqlI0FkZb8b7uxTLMmrCP1U3hjz0C/view?usp=drive_link" target="_blank"><button></button>Open</a>

            </div>
        </div>

    </div>
    </div>
</template>
<script>
  
 
export default {
    mounted() {
  }
}
</script>
<style>
.all {
    margin-top: 38%;

}
.pro {
    color: #fff;
    padding-top: 50%;
    text-shadow: 10px 5px 10px black;
}
.img0 {
    height: 150px;
    width:180;
}
.container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    z-index:1;
    margin-top: 10%;
}

.container .card {
    position: relative;
    width: 280px;
    height:400px;
    margin: 30px;
    box-shadow: 20px 20px 90px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
}

.container .card .content {
    padding: 20px;
    text-align: center;
    transition: 0.5s;
}
.container .card:hover .content {
    transform: translateY(0px);
    opacity: 1;
}

.container .card .content h2 {
    position: absolute;
    top: -80px;
   right: 30px;
   font-size: 8em;
   color: rgba(255, 255, 255, 0.05);
   pointer-events: none;
}

.container .card .content h3 {
    font-size: 1.8em;
    color: #fff;
    z-index: 1;
}

.container .card .content p {
    font-size: 1em;
    color: #fff;
   font-weight: 100;
}
.container .card .content a {
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    margin-top: 15px;
    background: #fff;
    color: #000;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 500;
    box-shadow: 0 5px 15px 20px rgba(0, 0, 0, 0.2);
}

button {
    /* background-color: black; */
    color:black;
    border:none;
}
@media screen and (max-width: 390px) {
  .container {
    height : 5%;
    margin-bottom: -151rem;
  }
  .pro {
    padding-left: 2%;
  }
}
</style>