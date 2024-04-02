<template>
   <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <!-- <div class="carousel-item active">
      <img src="" class="d-block w-100" alt="">
    </div>
    <div class="carousel-item">
      <img src="" class="d-block w-100" alt="">
    </div> -->
    <div id="test" class="carousel-item" v-for="info,index in $store.state.testimonials" :key="info" :class="{active: index==0}">
    <div class="cardReviews">
    <img class="img" :src="info.profile" alt="">
    <h3>{{ info.name}}
      {{ info.surname }}</h3><br>
      <h4>{{ info.title }}</h4><br>
      <div class="divi">
        <p>{{ info.quotes }}</p>
      </div>
    </div>
  </div>
    <!-- <div class="carousel-item"  v-for="info,index in $store.state.reviews" :key="info" :class="{active: index==0}">
      <img src="" class="d-block w-100" alt="">
    </div> -->
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
<script>
export default {
    computed: {
      testimonials(){
     this.$store.dispatch('fetchData')
   },
   mounted(){
this.testimonials
}

    }
}
</script>
<style>
    .divi {
  width: 20rem;
  margin-left: 29%;
  padding-bottom: 2%;
}
.cardReviews {
  margin-left: 25%;
  margin-top:2%;
  margin-bottom:9%;
  text-align: center;
  background-color: azure;
  color:black;
  width: 50%;
  height: fit-content;
  border-radius: 9px;
  box-shadow: 0 8px 40px 0 white;
}
#test {
  text-align: center;
  padding-bottom: 2%;
  
}
img {
      text-align: center;
      height: 30vh;
      width: 150px;
      margin-right: 4%;
      margin-top: 2%;
    }
    .card:hover{
    box-shadow: 0 8px 40px 0 #00ffe5;
}

    .carousel-home-resources {
  .left-1 {
    transform: translateX(-500px) translateZ(-400px) rotateY(-30deg) !important;
  }
  .right-1 {
    transform: translateX(500px) translateZ(-400px) rotateY(30deg) !important;
  }
}

</style>