<template>
    <div class="header">
    <router-link to="/" class="logo">Jason September</router-link>
        <nav> 
    <router-link class="a" to="/">Home</router-link> |
    <router-link class="a" to="/about">About</router-link> |
    <router-link class="a" to="/portfolio">Experience</router-link> |
    <router-link class="a" to="/projects">Projects</router-link> |
    <router-link class="a" to="/testimonials">References</router-link> |
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
        background: rgba(0, 0, 0, 0.1);
        display : flex;
        justify-content: space-between;
        align-items: center;
        backdrop-filter: blur(13px);
        border-bottom: 2px solid rgba(255, 255, 255, .2);
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
        transition: .3s;
        padding:5px;
    }
    
    nav .a:hover{
        color:rgb(5, 188, 188);
        text-decoration:underline;
        
    }
    @media screen and (max-width: 300px) {
  nav {
    height : 20px;
  }
  .logo {
    left:5%;
    font-size: 13px;
    text-align: left;
    
  }
  nav .a {
    font-size: 8px;
    display: flex;
    justify-content: center;
  }
  
}
</style>