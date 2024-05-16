<template>
  <v-app>
    <nav class="navbar navbar-expand-lg bg-text shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"
          ><img src="./assets/img/logo.png" width="50px" alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/Works" class="nav-link">Weapons</RouterLink>
            </li>
            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li> -->
            <li class="nav-item">
              <RouterLink to="/Bundle" class="nav-link">Bundles</RouterLink>
            </li>
            <li class="nav-item">
              <a href="https://banny.vercel.app/" target="_blank" class="nav-link">About me</a>
            </li>
          </ul>
          <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink to="/contact"
                  class="nav-link btn btn-outline-primary"
                  >Contact me</RouterLink
                >
              </li>
              <!-- <li class="nav-item">
                <RouterLink to="/support" class="nav-link btn btn-primary ml-lg-2 ml-md-2 mt-md-0 mt-2">Support me</RouterLink>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <v-main>
      <router-view />
    </v-main>

    <footer class="pt-10 border-top">
      <div class="container">
        <div class="d-flex pt-8 pb-10 justify-content-between flex-wrap">
          <div class="mb-3">
            <p>CONTENT</p>
            <a href="#" class="nav-link"> Discover </a>
            <a href="#" class="nav-link"> Poppular Content </a>
            <a href="#" class="nav-link"> New Trand </a>
            <a href="#" class="nav-link"> Categories </a>
          </div>
          <div class="mb-3">
            <p>INFOMATION</p>
            <a href="#" class="nav-link"> Pricing </a>
            <a href="#" class="nav-link"> Sell Content </a>
            <a href="#" class="nav-link"> Jobs </a>
            <a href="#" class="nav-link"> Our Guideline </a>
          </div>
          <div class="mb-3">
            <p>ABOUT US</p>
            <a href="#" class="nav-link"> About us </a>
            <a href="#" class="nav-link"> Privacy Policy </a>
            <a href="#" class="nav-link"> User Agreement </a>
            <a href="#" class="nav-link"> Cookies Policy </a>
            <a href="#" class="nav-link"> Contact us </a>
          </div>
          <div class="mb-3">
            <p>MEDIA & ARTICLES</p>
            <a href="#" class="nav-link"> News </a>
            <a href="#" class="nav-link"> Articles </a>
            <a href="#" class="nav-link"> Blogs </a>
            <a href="#" class="nav-link"> Annoucements </a>
            <a href="#" class="nav-link"> FAQs </a>
            <a href="#" class="nav-link"> Manual </a>
          </div>
          <div class="mb-3">
            <p>SOCIALS</p>
            <a href="" class="nav-link d-inline">
              <i class="fa-brands fa-square-facebook fa-2xl mr-2"> </i>
            </a>
            <a href="" class="nav-link d-inline">
              <i class="fa-brands fa-square-x-twitter fa-2xl mr-2"> </i>
            </a>
            <a href="" class="nav-link d-inline">
              <i class="fa-brands fa-square-pinterest fa-2xl mr-2"> </i>
            </a>
            <a href="" class="nav-link d-inline">
              <i class="fa-brands fa-square-instagram fa-2xl mr-2"> </i>
            </a>
            <a href="" class="nav-link d-inline">
              <i class="fa-brands fa-square-youtube fa-2xl mr-2"> </i>
            </a>
            <a href="" class="nav-link d-inline">
              <i class="fa-brands fa-linkedin fa-2xl"> </i>
            </a>

            <p class="mt-5 mb-3">
              Get exclusive assets sent straight to your inbox
            </p>
            <v-btn class="btn btn-primary px-5">Sign up</v-btn>
          </div>
        </div>
        <hr />
        <div
          class="text-secondary d-flex justify-content-center align-items-center flex-wrap mt-8 mb-5"
        >
          Copyright © 2024. Thornthan Jomtharak.
        </div>
      </div>
    </footer>
  </v-app>
</template>

<script>
// let year = new Date().getFullYear()

export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  background-color: #3e3e3e;
  border-radius: 0.5rem;
  cursor: pointer;
}

.v-application ul, .v-application ol {
  padding-left: 0;
}
</style>
