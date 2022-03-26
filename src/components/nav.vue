<template>
<nav class="navbar navbar-expand-lg navbar-light py-4 px-4 px-xl-5 bg-primary">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarCenteredExample"
      aria-controls="navbarCenteredExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div
      class="collapse navbar-collapse justify-content-center"
      id="navbarCenteredExample"
    >
      <!-- Left links -->
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
                <li class="nav-item">
          <a class="nav-link" href="/products">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        

        <!-- Navbar dropdown -->


               <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
           <i class="fas fa-chevron-circle-down fa-lg"></i> 
          </a>
          <!-- Dropdown menu -->
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="/login">Login</a>
            </li>
            <li>
              <a class="dropdown-item" href="/register">Register</a>
            </li>

            <li><hr class="dropdown-divider" /></li>
          </ul>
        </li>
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>


</template>

<style>

.navbar{
  height: 88px;

}
#navs{
  display: none;
}
.nav-item:hover{
text-decoration: underline;
font-size: 22px;
}
.nav-link{
  color: white !important
}


</style>

