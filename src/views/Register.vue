 <template>
 <section class="vh-100 bg-image">



    
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    
    <div class="container h-100">
      
      <div class="row d-flex justify-content-center align-items-center h-100">
        
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          
          <div class="card" style="border-radius: 15px;border: 1px solid black">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5" style="text-decoration: underline;">Create an account</h2>

              <form>

                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example1cg">Your Name</label>

                <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                </div>
                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3cg">Your Email</label>

                <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                </div>


                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example4cg">Password</label>

                <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                </div>


                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example4cdg">Contact</label>

                <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                </div>




                <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="/" class="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer>
  <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
  <div class="text-white mb-3 mb-md-0">
  Copyright © 2022. All rights reserved.
  </div>

  <div class="text-white mb-3 mb-md-0">
  Created by Daryll Grainger
  </div>

  </div>
  </footer>
  </section>



</template>
<script>
export default {
    
}
</script>
<style scoped>
footer{
  position: fixed;
  width: 100%;
  bottom: 0;
}



</style>
