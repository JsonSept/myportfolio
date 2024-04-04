<template>
    <div>
        <h1 class="pro">My Projects</h1>
        <div class="container">
        <div class="card">
            <div class="content">
                <h2>01</h2>
                <img src="https://i.postimg.cc/Y2QGKLXs/Screenshot-2023-11-01-113304.png">
                <h3>Sneaker Shop</h3>
                <p>A sneaker shop website made with HTML and CSS</p>
                <button>
                <a href="https://github.com/JsonSept/week1.git" target="_blank">
                    Github
                </a><br>
            </button>
            <button>
                <a href="https://adorable-churros-ec7e34.netlify.app" target="_blank">
                        Netlify

                    </a>
                </button>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2>02</h2>
                <img src="https://i.ibb.co/TYdVNs3/Screenshot-2024-01-11-144312.png">
                <h3>Calculator</h3>
                <p>Made with HTML, CSS and JavaScript</p>
                <button>
                <a href="https://github.com/JsonSept/Calculator.git" target="_blank">
                    Github
                </a><br>
            </button>
            <button>
                <a href="https://melodic-tanuki-6eed1b.netlify.app" target="_blank">
                        Netlify

                    </a>
                </button>
        </div>
        </div>
        <div class="card">
            <div class="content">
                <h2>03</h2>
                <img src="https://i.postimg.cc/HncWWRHm/Screenshot-2023-11-01-115543.png">
                <h3>Keyboard</h3>
                <p>Made with HTML, CSS and JavaScript</p>
                <button>
                <a href="https://github.com/JsonSept/jsKeyboard.git" target="_blank">
                    Github
                </a><br>
            </button>
            <button>
                <a href="https://wonderful-blini-2d38a2.netlify.app" target="_blank">
                        Netlify
                    </a>
                </button>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2>04</h2>
                <img src="https://i.ibb.co/dG1Bn3K/Screenshot-2024-01-11-144202.png">
                <h3>Coffee Shop</h3>
                <p>Made HTML and CSS</p>
                <button>
                <a href="https://github.com/JsonSept/e-commerce-website.git" target="_blank">
                    Github
                </a><br>
            </button>
            <button>
                <a href="https://dynamic-liger-9dc540.netlify.app" target="_blank">
                        Netlify

                    </a>
                </button>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2>05</h2>
                <img src="https://i.ibb.co/Y0VrQ5x/Screenshot-2024-01-11-144247.png">
                <h3>My Ecommerse Website</h3>
                <p>Made HTML, CSS and JavaScript</p>
                <button>
                <a href="https://github.com/JsonSept/newEcommerse.git" target="_blank">
                    Github
                </a><br>
            </button>
            <button>
                <a href="https://sparkling-figolla-37748c.netlify.app" target="_blank">
                        Netlify
                    </a>
                </button>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2>06</h2>
                <img src="https://i.ibb.co/7tkTTwB/Screenshot-2024-01-11-150844.png">
                <h3>RGB to Hex Calculator</h3>
                <p>Made HTML, CSS and JavaScript</p>
                <button>
                <a href="https://github.com/JsonSept/hexToRGB.git" target="_blank">
                    Github
                </a><br>
            </button>
            <button>
                <a href="https://harmonious-crostata-a6bdc9.netlify.app" target="_blank">
                        Netlify

                    </a>
                </button>
            </div>
         </div>
    </div>
    </div>
</template>

<!-- <script type="text/javascript" src="vanilla-tilt.js"></script> -->
<script>
  import VanillaTilt from 'vanilla-tilt'
 
export default {
    mounted() {
    VanillaTilt.init(document.querySelectorAll(".card"),{
            max:25,
            speed:400,
            glare: true,
            "max-glare": 1,
        });
  }
}
</script>
<style>
/* 
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
}

body {
    display:flex ;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #161623;
}

body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#f00, #f0f);
    clip-path:circle(30% at right 70%);
}

body::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#2196f3, #e91e63);
    clip-path:circle(20% at 10% 10%);
} */
.pro {
    color: #fff;
    padding-top: 20%;
    
}
img {
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
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
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
    /* opacity: 0; */
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
    box-shadow: 0 5px 15 px rgba(0, 0, 0, 0.2);
}

button {
    background-color: black;
    color:white;
}

</style>