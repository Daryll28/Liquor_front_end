<template>
<section>
<div class="container-fluid h-custom">
    
    <div class="divider d-flex align-items-center my-3">
    <p class="text-center fw-bold mx-3 mb-0" style="font-size:35px">Welcome to D's Liquor Login</p>
    </div>
    <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-md-9 col-lg-6 col-xl-5">
    <img src="../assets/images/front_image.jpeg" class="img-fluid"
    alt="Sample image">
    </div>
    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">


    <form @submit.prevent="home">





   <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Login here</p>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
          <label class="form-label" for="form3Example3">Email</label>
          <input type="email" id="form3Example3" class="form-control form-control-lg"
          placeholder="Enter a valid Email address"
          v-model="email"
          required />
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
          <label class="form-label" for="form3Example4">Password</label>

          <input type="password" id="form3Example4" class="form-control form-control-lg"
          placeholder="Enter password" 
          v-model="password"
          required/>
          </div>



          <div class="text-center text-lg-start mt-4 pt-2">
          <button type="submit"  class="btn btn-primary btn-lg"
          style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
          <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
          class="link-danger">Register</a></p>
          </div>

</form>
</div>
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
</section>
</template>




<script>
import landing from './landing.vue'


export default {
  name: 'Home',
  components: {
    landing
  }
}

// login() 
// {
//       fetch("https://project---312-3.herokuapp.com/users", {
//         method: "PATCH",
//         body: JSON.stringify({
//           email: this.email,
//           password: this.password,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => {
//           if(json.jwt){
//             localStorage.setItem("jwt", json.jwt);
//           }
//           if(localStorage.getItem("jwt")){
//             this.$router.push({ name: "Profile" });
//           }
//           else{
//             alert("Incorrect Credentials");
//           }
//         })
//         .catch((err) => {
//           alert(err);
//         });
//     }

</script>


<style>

.form-outline .form-control.form-control-lg{
  border: 1px solid black
}

form{
  margin-bottom: 254px
}
.img-fluid{
margin-bottom: 254px;
border: 3px solid blue
}

footer {
  bottom: 0;
  position: fixed;
  width: 100%;
  

}
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>
