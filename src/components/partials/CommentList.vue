<template>
  <div>
    <h4>Comments</h4>
    <ul class="list-group list-group-flush" v-for="(comment, index) in comments" :key="comment.id">
      <li v-if="comment.body" class="list-group-item">
        <div class="alert alert-dark">
          <small>
            <strong>Date:</strong>
            {{ comment.created_at }}
          </small>
          <p>
            <strong>Author:</strong>
            {{ comment.user.first_name + ' ' + comment.user.last_name }}
          </p>
          <p>{{ comment.body }}</p>

          <button
            v-if="comment.user_id == userId"
            class="btn btn-danger btn-sm mt-3"
            @click="onCommentRemove(comment.id, index)"
          >Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true
    },
    userId: {
      type: Number,
      required: false
    }
  },
  methods: {
    onCommentRemove(id, index) {
      this.$emit("removeComment", id, index);
    }
  }
};
</script>

<style scoped>
div {
  margin: 1rem;
}
p {
  margin: 0 !important;
}
.list-group-item {
  border: none;
}
</style>

