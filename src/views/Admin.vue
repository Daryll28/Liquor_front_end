<template>


<div class="container">
    <h2>Admin Login in here</h2>




    <form @submit.prevent="admin">
  <!-- Email input -->
  <div class="form-outline mb-4">
       <label class="form-label" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1" class="form-control" style="border:1px solid black" v-model="email" required/>
   
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
          <label class="form-label" for="form2Example2">Password</label>

    <input type="password" id="form2Example2" class="form-control"  style="border:1px solid black" v-model="password" required/>
  </div>

  <!-- 2 column grid layout for inline styling -->
  <div class="row mb-4">


    <div class="col">
      <!-- Simple link -->
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

  <!-- Register buttons -->
 
</form>
</div>

  <!-- <footer>
<div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
<div class="text-white mb-3 mb-md-0">
Copyright © 2022. All rights reserved.
</div>
<div class="text-white mb-3 mb-md-0">
Not to sale to the persons under the age of 18<i class="flag flag-south-africa"></i>
</div>

</div>
</footer> -->


</template>
<script>
export default {
  name: "admin",
  props: ["baseURL"],
  data() {
    return {
      email: "",
      password: "",
      isAdmin: true,
    };
  },
   methods: {
admin() 
{
  console.log('Admin Logged in Successfully')
  const person = {
          email: this.email,
          password: this.password,
          }

        console.log(person)
  fetch("https://my-projecto-1.herokuapp.com/users/login", {
        method: 'post',
        body: JSON.stringify(person),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        // mode: "no-cors"
      })
        .then((response) => response.json())
        .then((json) => {
          if(json.jwt){
            localStorage.setItem("jwt", JSON.stringify(json.jwt));
          }
          if(localStorage.getItem("jwt")){
            this.$router.push({ name: "Home" });
          }
          else{
            alert("Incorrect Credentials");
          }
        })
        .catch((err) => {
          alert(err);
        });
    },

          },
          };

</script>
<style scoped>

form{
    margin-top: 150px
}
.container{
    width: 30%;
}

h2{
    margin-top: 100px;
    text-decoration: underline blue

}

footer{
    bottom: 0;
    position:fixed;
    width: 100%;
}

</style>
