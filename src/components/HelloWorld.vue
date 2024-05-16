<template>
  <div>
    <div class="container">
      <div class="row mt-10 mb-16">
        <div class="col-lg-6 col-md-6 col-sm-12 d-flex align-center">
          <div>
            <h1>
              Hello, my name is
              <h1 class="text-primary">Thornthan</h1>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it.
            </p>
          
          <div class="my-10">
            <v-btn class="btn btn-primary px-5 py-3" href="/profile">Explore more</v-btn>
            <v-btn
            color="transparent"
              class="text-white shadow-none d-inline-flex align-items-center py-3 mx-2"
              href="/works"
            >
              <i class="fa-solid fa-star fa-lg mx-2"></i>
              Featured Projects
            </v-btn>
          </div>
        </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
        <!-- https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png -->
          <img
            src="../assets/img/me-2.png"
            alt="Hero Image"
            width="90%"
          />
        </div>
      </div>

      <div
        id="carouselExampleAutoplaying"
        class="carousel slide my-16"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images6.alphacoders.com/118/1186640.png"
              class="d-block w-100 carousel-image"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/pj-2.png"
              class="d-block w-100 carousel-image"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/pj-3.jpg"
              class="d-block w-100 carousel-image"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div class="container py-5 my-16">
      <div class="text-center pb-4 mt-5">
        <h6>WHY CHOOSE ME</h6>
        <h1>
          <h1 class="text-primary d-inline">Creativity</h1>
          is no limit
        </h1>
        <p>With my various content of Ideas, Styles and Projects.</p>
      </div>
      <div class="row my-5">
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 pb-4">
          <i
            class="fa-solid fa-certificate fa-2xl mb-4 rotate text-primary"
          ></i>
          <h3>Best Quality</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium cum temporibus libero adipisci ullam,
          </p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 pb-4">
          <i
            class="fa-solid fa-hourglass-half fa-2xl mb-4 rotate text-primary"
          ></i>
          <h3>Ready to use</h3>
          <p>
            Architecto rerum esse eos sed? Sint facere ducimus dolorum minima voluptates 
          </p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 pb-4">
          <i
            class="fa-solid fa-box-open fa-2xl start-end mb-4 text-primary"
          ></i>
          <h3>Fresh content</h3>
          <p>
            Dolor sit amet consectetur adipisicing elit. Qui hic ea a impedit quod laudantium quaerat reiciendis corrupti, numquam cupiditate inventore
          </p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 pb-4">
          <i class="fa-regular fa-compass fa-2xl mb-4 rotate text-primary"></i>
          <h3>Discover best practice</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam necessitatibus,
          </p>
        </div>
      </div>
    </div>

    <div class="py-5 bg-text">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-lg-7 col-md-6 col-sm-12 mb-4">
            <p>Let's be friend, get to know me.</p>
            <h2>Connect with me at your fingertips</h2>
            <v-btn href="/contact" class="btn btn-primary mt-3">Connect me</v-btn>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-12 mb-4 text-center">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6174cd1a-f614-4c1e-9d75-4997060b6156/dg7d28y-e6ce55d6-b1b8-4f5f-8121-9625e6054339.png/v1/fill/w_1280,h_2650/chamber_render__high_res__by_lynwulf_dg7d28y-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjY1MCIsInBhdGgiOiJcL2ZcLzYxNzRjZDFhLWY2MTQtNGMxZS05ZDc1LTQ5OTcwNjBiNjE1NlwvZGc3ZDI4eS1lNmNlNTVkNi1iMWI4LTRmNWYtODEyMS05NjI1ZTYwNTQzMzkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uU11Yx_7SXeC5eEOgLjSWg3NtlF_xxlCrcfTLEPbjU0"
              class="w-50"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>
