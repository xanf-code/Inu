<template>
  <div class="flex flex-row sm:flex-row m-5 justify-between items-center">
    <div>
      <router-link to="/">
        <a>
          <h1 class="self-center text-xl font-bold cursor-pointer">
            Insider
            <span class="text-purple-600"> Shibu🐕🚀🚀 </span>
          </h1>
        </a>
      </router-link>
    </div>
    <div className="flex flex-row">
      <router-link to="/" class="hover:animate-bounce">
        <i class="fas fa-home" style="font-size: 22px; color: white"></i>
      </router-link>
      <router-link to="/about" class="pl-6 hover:animate-bounce">
        <i class="far fa-building" style="font-size: 22px; color: white"></i>
      </router-link>
      <router-link to="#" class="pl-6 hover:animate-bounce">
        <i class="fab fa-google-play" style="font-size: 22px; color: white"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>