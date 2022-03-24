<template>
<!--
<div class="grid Z25uR9U5 fixed-fluid ncss-container css-1gfb4pw css-1vtn5w7" >
 
  <img class="front" src="../assets/images/Absolute.jpg" alt="">  
  <img class="front" src="../assets/images/black_velvet.jpg" alt="">
  <img class="front" src="../assets/images/pink_gin.jpg" alt="">
</div> -->
 <div style="text-decoration:underline"><h1>Welcome to D's Liquor Store </h1></div>
<div class="container">
  <!-- Carousel wrapper -->
<div id="carouselMDExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">
  <!-- Slides -->
  <div class="carousel-inner mb-5 shadow-1-strong rounded-3">
    <div class="carousel-item active">
      <img
        src=""
        class="d-block w-100"
        alt="..."
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(121).webp"
        class="d-block w-100"
        alt="..."
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(31).webp"
        class="d-block w-100"
        alt="..."
      />
    </div>
  </div>
  <!-- Slides -->

  <!-- Controls -->
  <button
    class="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselMDExample"
    data-mdb-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-mdb-target="#carouselMDExample"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <!-- Controls -->

  <!-- Thumbnails -->
  <div class="carousel-indicators" style="margin-bottom: -20px;">
    <button
      type="button"
      data-mdb-target="#carouselMDExample"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
      style="width: 100px;"
    >
      <img
        class="d-block w-100 shadow-1-strong rounded img-fluid"
        src="../assets/images/Smirnoff.png"
        
      />
    </button>
    <button
      type="button"
      data-mdb-target="#carouselMDExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
      style="width: 100px;"
    >
      <img
        class="d-block w-100 shadow-1-strong rounded img-fluid"
        src="../assets/images/jameson.jpg"
        
      />
    </button>
    <button
      type="button"
      data-mdb-target="#carouselMDExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
      style="width: 100px;"
    >
      <img
        class="d-block w-100 shadow-1-strong rounded img-fluid"
        src="../assets/images/black.jpg"
        
      />
    </button>
  </div>
  <!-- Thumbnails -->
</div>
</div>
  <footer>
<div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
<div class="text-white mb-3 mb-md-0">
Copyright © 2022. All rights reserved.
</div>
<div class="text-white mb-3 mb-md-0">
Not to sale to the persons under the age of 18<i class="flag flag-south-africa"></i>
</div>

</div>
</footer>

</template>




<script>
import landing from './landing.vue'


export default {
  name: 'Home',
  components: {
    landing
  }
}

</script>


<style scoped>
footer {
  bottom: 0;
  position: fixed;
  width: 100%;
}
#carouselMDExample{
  background: blue
}
.front:hover{
  mask-type: 

}
</style>
