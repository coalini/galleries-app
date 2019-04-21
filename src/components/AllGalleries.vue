<template>
  <div>
    <h1>All Galleries</h1>

    <div class="alert alert-info" v-if="!galleries.length">
      <p>No galleries found!</p>
    </div>

    <search-input @search="onSearch"></search-input>

    <gallery-list :galleries="galleries"></gallery-list>

    <app-pagination v-if="galleries.length && (page != last_page)" @loadMore="loadMore"></app-pagination>
  </div>
</template>

<script>
import galleryService from "@/services/gallery-service";
import SearchInput from "@/components/partials/SearchInput";
import GalleryList from "@/components/partials/GalleryList";
import AppPagination from "@/components/partials/AppPagination";

export default {
  components: {
    SearchInput,
    GalleryList,
    AppPagination
  },

  data() {
    return {
      galleries: [],
      term: "",
      page: 1,
      last_page: null
    };
  },

  methods: {
    onSearch(term) {
      this.page = 1;
      this.term = term;
      galleryService.getAll(this.page, this.term).then(galleries => {
        this.galleries = galleries.data;
        this.last_page = galleries.last_page;
      });
    },
    loadMore() {
      this.page++;
      galleryService.getAll(this.page, this.term).then(galleries => {
        this.galleries.push(...galleries.data);
        this.last_page = galleries.last_page;
      });
    }
  },

  beforeRouteEnter(to, from, next) {
    galleryService.getAll().then(galleries => {
      next(vm => {
        vm.galleries = galleries.data;
        vm.last_page = galleries.last_page;
      });
    });
  }
};
</script>
