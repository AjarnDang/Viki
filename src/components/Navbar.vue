<template>
    <nav class="navbar navbar-expand-lg bg-text shadow-sm">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"
            ><img src="@/assets/img/logo.png" width="50px" alt=""
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
              <li class="nav-item">
                <a href="/allweapon" class="nav-link">Weapons</a>
              </li>
              <!-- <li class="nav-item dropdown">
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
                    <a href="/allweapon" class="dropdown-item text-white"
                      >All Weapons</a
                    >
                  </li>
                  <li>
                    <a href="/vandal" class="dropdown-item text-white">Vandal</a>
                  </li>
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
              </li> -->
              <li class="nav-item">
                <a href="/features" class="nav-link">Features</a>
              </li>
              <li class="nav-item">
                <a href="/allBundle" class="nav-link">Bundles</a>
              </li>
              <!-- <li class="nav-item">
                <a
                  href="https://banny.vercel.app/"
                  target="_blank"
                  class="nav-link"
                  >About me
                  <i class="fa-solid fa-arrow-up-right-from-square ml-2"></i
                ></a>
              </li> -->
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
</template>

<script>
export default {

}
</script>

<style>

</style>