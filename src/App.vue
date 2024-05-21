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
              <a href="/" class="nav-link">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Weapons
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="/allproduct" class="dropdown-item text-white"
                    >All Weapons</a
                  >
                </li>
                <li>
                  <a href="/vandal" class="dropdown-item text-white">Vandal</a>
                </li>
                <!-- <li><hr class="dropdown-divider" /></li> -->
                <li>
                  <a href="/phantom" class="dropdown-item text-white"
                    >Phantom</a
                  >
                </li>
                <li>
                  <a href="/spectre" class="dropdown-item text-white"
                    >Spectre</a
                  >
                </li>
                <li>
                  <a href="/operator" class="dropdown-item text-white"
                    >Operator</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="/bundle" class="nav-link">Bundles</a>
            </li>
            <li class="nav-item">
              <a
                href="https://banny.vercel.app/"
                target="_blank"
                class="nav-link"
                >About me
                <i class="fa-solid fa-arrow-up-right-from-square ml-2"></i
              ></a>
            </li>
          </ul>
          <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a href="/contact" class="nav-link btn btn-outline-primary"
                  >Contact me</a
                >
              </li>
              <!-- <li class="nav-item">
                <a href="/support" class="nav-link btn btn-primary ml-lg-2 ml-md-2 mt-md-0 mt-2">Support me</a>
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
            <p>WEAPONS</p>
            <a href="/vandal" class="nav-link"> Vandal </a>
            <a href="/phantom" class="nav-link"> Phantom </a>
            <a href="/operator" class="nav-link"> Operator </a>
            <a href="/spectre" class="nav-link"> Spectre </a>
          </div>
          <div class="mb-3">
            <p>BUNDLES</p>
            <span class="nav-link"> Exlusive </span>
            <span class="nav-link"> Premium </span>
            <span class="nav-link"> Deluxe </span>
            <span class="nav-link"> Select </span>
          </div>
          <div class="mb-3">
            <p>ABOUT ME</p>
            <a
              href="https://banny.vercel.app/"
              target="_blank"
              class="nav-link"
            >
              My Website
            </a>
            <!-- <a href="#" class="nav-link"> Privacy Policy </a>
            <a href="#" class="nav-link"> User Agreement </a>
            <a href="#" class="nav-link"> Cookies Policy </a> -->
            <a href="/contact" class="nav-link"> Contact me </a>
          </div>
          <div class="mb-3">
            <p>MEDIA & DATA</p>
            <a href="/about" class="nav-link"> About </a>
            <a href="/api" class="nav-link"> APIs </a>
            <!-- <a href="#" class="nav-link"> Articles </a>
            <a href="#" class="nav-link"> Blogs </a>
            <a href="#" class="nav-link"> Annoucements </a>
            <a href="#" class="nav-link"> FAQs </a>
            <a href="#" class="nav-link"> Manual </a> -->
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

.v-application ul,
.v-application ol {
  padding-left: 0;
}
</style>
