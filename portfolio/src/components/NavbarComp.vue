<template>
    <div class="header">
    <router-link to="/" class="logo">Jason September</router-link>
        <nav> 
    <router-link class="a" to="/">Home</router-link> |
    <router-link class="a" to="/about">About</router-link> |
    <router-link class="a" to="/portfolio">Experience</router-link> |
    <router-link class="a" to="/projects">Projects</router-link> |
    <router-link class="a" to="/testimonials">Testimonials</router-link> |
    <router-link class="a" to="/contact">Contact</router-link> 
  </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Poppins', san-serif;
    }

    body {
        min-height: 100vh;
        background-color: black;
        /* background: url('background.jpg') no-repeat; */
        background-size: cover;
    }

    .header {
        position: fixed;
        z-index: 9999;
        top:0;
        left:0;
        width: 100%;
        padding: 20px 100px;
        background: rgba(255 , 255, 255, .1);
        display : flex;
        justify-content: space-between;
        align-items: center;
        backdrop-filter: blur(10px);
        border-bottom: 2px solid rgba(255, 255, 255, .2);
    }

    .header::before {
        content: '';
        position: absolute;
        top:0;
        left:-100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255, .4), transparent);
    transition: .5s;
    }

    .header:hover::before {
        left: 100%;
    }

    .logo {
        color: #fff;
        font-size:25px;
        text-decoration: none;
        font-weight: 600;
        cursor: default;
    }

    nav .a {
        color: white;
        font-size: 18px;
        text-decoration: none;
        margin-left: 35px;
        transition: .3s;
        padding:2px;
    }
    
    nav .a:hover{
        color:aqua;
        /* background-color: rgba(65, 63, 63, 0.5); 
        box-shadow:grey 3px 2px 0;
        border-radius: 10px 0px 10px 0px;
        color: silver;
        border:1px;
        border-top: .2px solid white;
        border-left: .2px solid grey;
        border-bottom: 2px silver;
        border-bottom:1px solid rgba(255, 255, 255, .2); */
    }
</style>