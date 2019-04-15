<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Galleries</a>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'AppAllGalleries'}">All Galleries</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'AppLogin'}">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'AppRegister'}">Register</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'AppMyGalleries'}">My Galleries</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'AppCreateGallery'}">Create New Gallery</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
</template>

<script>
export default {};
</script>
