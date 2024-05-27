<template>
  <v-container class="mb-16">
    <b-breadcrumb :items="Api" class="mt-5 mb-5"></b-breadcrumb>
    <v-row>
      <v-col lg="2" md="3" sm="3" cols="12">
        <nav class="navbar navbar-vertical d-md-block">
          <div class="d-flex flex-column">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active text-white" href="#section1"
                  >Overview</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#section2">Endpoints</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#section3"
                  >Other Informations</a
                >
              </li>
            </ul>
          </div>
        </nav>
      </v-col>
      <v-col lg="10" md="9" sm="9" cols="12">
        <div class="main-content">
          <section id="section1" class="section">
            <h2 class="text-primary">Overview</h2>
            <p>
              Valorant-API is a non-official API and not endorsed by Riot Games
              in any way. Riot Games, Valorant, and all associated properties
              are trademarks or registered trademarks of Riot Games, Inc. All of
              the used APIs in this website are retrieved from
              <a
                target="_blank"
                href="https://valorant-api.com/"
                class="text-primary text-decoration-none"
                >https://valorant-api.com</a
              >
              which provide most available content of
              <a
                class="text-primary text-decoration-none"
                target="_blank"
                href="https://playvalorant.com/en-us/"
                >https://playvalorant.com</a
              >. For example, Common element like standard weapons, Maps,
              Agents, In-Game features and cosmetics like weapon skins, charms,
              sprays, buddies and others.
            </p>
            <h5>API</h5>
            <div class="code-snippet">
              <pre><code class="language-html"><a
                target="_blank" href="https://valorant-api.com/"
                >https://valorant-api.com</a></code></pre>
            </div>
          </section>

          <section id="section2" class="section mt-16">
            <h2 class="text-primary">Endpoints</h2>
            <p>
              The endpoints we used including Buddies, Sprays, Skins and Content
              tiers (Skin Rank).
            </p>
            <h5><v-btn color="success" class="mr-2">get</v-btn> Buddies</h5>
            <div class="code-snippet">
              <pre><code class="language-html"><a
                target="_blank" href="https://valorant-api.com/v1/buddies"
                >https://valorant-api.com/v1/buddies</a></code></pre>
            </div>
            <h5 class="mt-5">
              <v-btn color="success" class="mr-2">get</v-btn> Sprays
            </h5>
            <div class="code-snippet">
              <pre><code class="language-html"><a
                target="_blank" href="https://valorant-api.com/v1/sprays"
                >https://valorant-api.com/v1/sprays</a></code></pre>
            </div>
            <h5 class="mt-5">
              <v-btn color="success" class="mr-2">get</v-btn> Weapon skins
            </h5>
            <div class="code-snippet">
              <pre><code class="language-html"><a
                target="_blank" href="https://valorant-api.com/v1/weapons/skins"
                >https://valorant-api.com/v1/weapons/skins</a></code></pre>
            </div>
            <h5 class="mt-5">
              <v-btn color="success" class="mr-2">get</v-btn> Content Tiers
            </h5>
            <div class="code-snippet">
              <pre><code class="language-html"><a
                target="_blank" href="https://valorant-api.com/v1/contenttiers"
                >https://valorant-api.com/v1/contenttiers</a></code></pre>
            </div>
          </section>

          <section id="section3" class="section mt-16">
            <h2 class="text-primary">Other Informations</h2>
            <p>
              <a
                href="https://dash.valorant-api.com/"
                class="text-primary text-decoration-none"
                >Valorant-API</a
              >
              also provide an extensive API containing data of most in-game
              items, assets and more! All data comes straight from the Valorant
              game files and will get updated automatically once another patch
              gets released. If you have any questions and/or suggestions, you
              can find a way to contact us
              <a
                href="https://dash.valorant-api.com/about"
                class="text-primary text-decoration-none"
                >here</a
              >.
            </p>
          </section>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Api } from "@/components/Breadcrump";

export default {
  data() {
    return {
      Api,
    };
  },
  mounted() {
    const links = document.querySelectorAll("a.nav-link");

    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(targetId);
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
            });
          }

          // Remove active class from all links
          links.forEach((link) => link.classList.remove("active"));

          // Add active class to the clicked link
          this.classList.add("active");
        }
      });
    });

    // Add scroll event listener to update the active link based on scroll position
    window.addEventListener("scroll", () => {
      let current = "";

      document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });

      links.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  },
};
</script>

<style scoped>
.navbar-vertical {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: auto;
  overflow-y: auto;
  padding-top: 10px;
}
.nav-link.active {
  border-left: 3px solid var(--primary);
  color: var(--primary) !important;
  font-weight: bolder;
}

.section {
  margin: 10px 0;
}

@media (max-width: 768px) {
  .navbar-vertical {
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 0;
  }
}
</style>
