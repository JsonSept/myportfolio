<template>
   <div class="all1">
     <h1 class="pro">My References</h1>
        <div class="container2">
        <div class="card">
                <div class="content2">
                    <h2>01</h2>
                    <img class="img1" src="https://i.ibb.co/Ch1zK92/20231022-161301-removebg-preview.png">
                    <h3>Taryn-lee Walbrugh</h3><br>
                    <p>Jason is very kind-hearted and compassionate,He enjoy what he does and that speaks wonders. He
                        never backs down from hardships or struggles that's a quality that I admire. Jason takes pride
                        in his work and it truly shows</p>
                </div>
            </div>
            <div class="card">
                <div class="content2">
                    <h2>02</h2>
                    <img class="img1" src="https://i.ibb.co/SND67Lx/20231009-104509-removebg-preview.png">
                    <h3>Nathalie Willemse</h3><br>
                    <p>Jason is a very soft-spoken individual and always helps where he can. He is very humble and
                        always hope for the best. He is very knowledgeable and is quite generous with bestowing that
                        with others.</p>

                </div>
            </div>
            <div class="card">
                <div class="content2">
                    <h2>03</h2>
                    <img class="img1" src="https://i.ibb.co/WnJHvyr/download-image-1712323454869-removebg-preview.png">
                    <h3>Matthew Swain</h3><br>
                    <p>Jason September is an outstanding individual, whether it be his work or him as a person . Always
                        pleasant to work with, always promotes positivity, great communicative skills and has unmatched
                        enthusiasm and determination. He is the ideal work colleague but mainly the the best companion
                        and friend.</p>
                </div>
            </div>
            <div class="card">
                <div class="content2">
                    <h2>04</h2>
                    <img class="img1" src="https://i.ibb.co/qsZ1HZN/20231009-140315-removebg-preview.png">
                    <h3>Darren Viljoen</h3><br>
                    <p>Jason September is a naturally skilled developer who has a bright future in this industry. His
                        hard work and his willingness to assist others already makes him such a talented developer. Once
                        you see his projects or designs, its only then that you realize what an incredibly high work
                        ethic Jason has.</p>

                </div>
            </div>
            <div class="card">
                <div class="content2">
                    <h2>05</h2>
                    <img class="img1" src="https://i.ibb.co/C2vLpP0/img1-removebg-preview.png">
                    <h3>Brandon Roulstone</h3><br>
                    <p>Jason is an exceptional student who succeeds at anything what he puts his mind to, his approach
                        to complex logic and his team spirit is unique and whereas he will make him become one of the
                        most important assets to the work place and to people he collaborates with together with this he
                        is also hardworking and never gives up on a challenge.</p>
                </div>
            </div>
            <div class="card">
                <div class="content2">
                    <h2>06</h2>
                    <img class="img1" src="https://i.postimg.cc/3NDWZHLj/Matthew.png">
                    <h3>Matthew Dean Brown</h3><br>
                    <p>Jason is very outstanding and creative individual,who struggles at first but always rises to the
                        occation.He shows good promise in his work and work well with groups and always has a positive
                        attitude.</p>
                </div>
            </div>
    </div>
    </div>
</template>


<script>
//   import VanillaTilt from 'vanilla-tilt'
 
export default {
//     mounted() {
//     VanillaTilt.init(document.querySelectorAll(".card"),{
//             max:20,
//             speed:10,
//             glare: true,
//             "max-glare": 1,
//         });
//   }
}
</script>
<style scope>
.pro {
    color: #fff;
    padding-top: 50%;
    
}
.img1 {
    height: 150px;
    width:180;
    box-shadow: #000;
}
.container2 {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    z-index:1;
    margin-top: 10%;
}

.container2 .card {
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

.container2 .card .content2 {
    padding: 20px;
    text-align: center;
    /* opacity: 0; */
    transition: 0.5s;
}
.container2 .card:hover .content2 {
    transform: translateY(0px);
    opacity: 1;
}

.container2 .card .content2 h2 {
    position: absolute;
    top: -80px;
   right: 30px;
   font-size: 8em;
   color: rgba(255, 255, 255, 0.05);
   pointer-events: none;
}

.container2 .card .content2 h3 {
    font-size: 1.8em;
    color: #fff;
    z-index: 1;
}

.container2 .card .content2 p {
    font-size: .7em;
    color: #fff;
   font-weight: 100;
}
.container2 .card .content a {
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

@media screen and (max-width: 390px) {
  .container2 {
    height : 5%;
    margin-bottom: -131rem;
  }
.pro {
    padding-left: 2%;
  }
}
</style>
