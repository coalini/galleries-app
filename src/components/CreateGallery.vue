<template>
  <div class="create-gallery text-center">
    <h1>{{ editing ? 'Edit Gallery' : 'Create Gallery'}}</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input
          v-model="gallery.title"
          type="text"
          class="form-control"
          placeholder="Title"
          minlength="2"
          maxlength="255"
          required
        >
        <div v-if="errors">
          <form-error v-if="errors.title">{{ errors.title[0] }}</form-error>
        </div>
      </div>

      <div class="form-group">
        <textarea
          v-model="gallery.description"
          type="text"
          class="form-control"
          placeholder="Description"
          maxlength="1000"
          rows="5"
        ></textarea>

        <div v-if="errors">
          <form-error v-if="errors.description">{{ errors.description[0] }}</form-error>
        </div>
      </div>

      <div class="form-group" v-for="(n, index) in range" :key="index">
        <input
          v-model="images[index].url"
          type="url"
          class="form-control"
          placeholder="Insert image URL (.png .jpg .jpeg)"
          pattern="https?://.+(png|jpg|jpeg)"
          required
        >
        <div v-if="errors">
          <form-error v-if="errors.images">At least one image is required.</form-error>
          <form-error v-if="errors[`images.${index}.url`]">Invalid format.</form-error>
        </div>

        <div class="form-buttons" v-if="images.length > 1">
          <button
            type="button"
            class="btn btn-outline-secondary btn-sm ml-2 mr-2"
            @click="moveUp(index)"
            :disabled="(range == 1) || (!index)"
          >Move Up</button>
          <button
            type="button"
            class="btn btn-outline-secondary btn-sm ml-2 mr-2"
            @click="moveDown(index)"
            :disabled="(range == 1) || (index == range - 1)"
          >Move Down</button>
          <button
            type="button"
            class="btn btn-outline-danger btn-sm ml-2 mr-2"
            @click="remove(index)"
            :disabled="range == 1"
          >Delete</button>
        </div>
      </div>

      <button type="button" class="btn btn-secondary m-5" @click="addInput">Add another URL</button>
      <br>
      <div class="form-buttons">
        <button type="submit" class="btn btn-primary ml-2 mr-2">{{ editing ? 'Edit' : 'Submit'}}</button>

        <button type="button" class="btn btn-outline-danger ml-2 mr-2" @click="onCancel">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import galleryService from "@/services/gallery-service";
import FormError from "./partials/FormError";

export default {
  components: {
    FormError
  },

  data() {
    return {
      range: 1,
      gallery: {
        title: "",
        description: "",
        images: []
      },
      images: [{ url: "" }],
      errors: {},
      editing: false,
      galleryId: null
    };
  },

  methods: {
    addInput() {
      this.range++;
      this.images.push({ url: "" });
    },
    moveUp(index) {
      if (index) {
        this.images.splice(index - 1, 0, this.images.splice(index, 1)[0]);
      }
    },
    moveDown(index) {
      if (index != this.range - 1) {
        this.images.splice(index + 1, 0, this.images.splice(index, 1)[0]);
      }
    },
    remove(index) {
      if (this.range > 1) {
        this.range--;
        this.images.splice(index, 1);
      }
    },

    onSubmit() {
      if (this.images[0].url) {
        this.gallery.images = this.images;
      }

      if (this.editing) {
        this.editGallery();
      } else {
        this.createGallery();
      }
    },
    onCancel() {
      if (this.editing) {
        this.$router.push({ name: "gallery", params: { id: this.gallery.id } });
      } else {
        this.$router.push({ name: "my-galleries" });
      }
    },

    createGallery() {
      galleryService
        .createGallery(this.gallery)
        .then(() => {
          this.errors = {};
          this.$router.push({ name: "my-galleries" });
        })
        .catch(errors => {
          this.errors = errors.response.data.errors;
        });
    },

    editGallery() {
      if (this.gallery.user.id == Number(localStorage.getItem("id"))) {
        galleryService
          .editGallery(this.galleryId, this.gallery)
          .then(() => {
            this.errors = {};
            this.$router.push({
              name: "gallery",
              params: { id: this.galleryId }
            });
          })
          .catch(errors => {
            this.errors = errors.response.data.errors;
          });
      }
    }
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.id) {
        vm.galleryId = Number(to.params.id);
        vm.editing = true;
        galleryService.getGallery(vm.galleryId).then(gallery => {
          vm.gallery = gallery;
          vm.images = gallery.images;
          vm.range = gallery.images.length;
          if (vm.gallery.user.id != Number(localStorage.getItem("id"))) {
            vm.$router.push(from);
          }
        });
      }
    });
  }
};
</script>

<style scoped>
.create-gallery {
  max-width: 600px;
}
.form-buttons {
  padding-top: 5px;
  padding-bottom: 10px;
}
</style>
