<template>
  <div class="galleries">
    <div class="jumbotron text-center" v-for="gallery in galleries" :key="gallery.id">
      <img :src="gallery.images[0].url">
      <h5 class="display-5 my-4">
        <router-link
          :to="{ name: 'gallery', params: { id: gallery.id }}"
          class="router-link"
        >{{ gallery.title }}</router-link>
      </h5>
      <router-link :to="{ name: 'author', params: { id: gallery.user.id }}" class="router-link">
        <strong>Author:</strong>
        {{ gallery.user.first_name + ' ' + gallery.user.last_name }}
      </router-link>
      <br>
      <small>Created at: {{ gallery.created_at }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ["galleries"]
};
</script>

<style>
.router-link {
  text-decoration: none;
  color: black;
}
</style>
