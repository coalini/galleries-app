<template>
  <div>
    <form class="mt-5" @submit.prevent="addGallery">
      <div class="form-group">
        <label for="title">Title*</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          placeholder="Enter title"
          required
        >
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" rows="5" id="description" name="description"></textarea>
      </div>
      <div class="form-group">
        <label for="url">Add Image*</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">URL</span>
          </div>
          <input
            type="url"
            class="form-control"
            id="url"
            name="url"
            placeholder="Enter image URL"
            required
            pattern=".*\.png"
          >
        </div>
      </div>
      <div>
        <p>Image link must end with .png or .jpg</p>
        <button @click="addUrlField" class="btn btn-secondary">Add another URL</button>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AppCreateGallery",
  methods: {
    addGallery() {},
    addUrlField() {}
  }
};
</script>
