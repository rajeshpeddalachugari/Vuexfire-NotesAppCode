<template>
  <div class="w3-col w3-container w3-margin-top">
    <div class="w3-card-2 w3-round-large">
      <div v-if="!isEditing">
        <header class="w3-container w3-light-grey mineader headerStyle">
          <h3 class="w3-text-indigo">{{ noteItem.title }}</h3>
        </header>
        <div class="w3-container w3-text-grey minContainer">
          <p>{{ noteItem.content }}</p>
          <hr />
          <div class="w3-rest">
            <button
              @click="removeNote"
              class="w3-right w3-margin-left w3-margin-bottom"
            >
              <i class="fa fa-trash w3-text-indigo" aria-hidden="true"></i>
            </button>
            <button
              @click="editNote"
              class="w3-right  w3-margin-left w3-margin-bottom"
            >
              <i
                class="fa fa-pencil-square-o w3-text-indigo"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </div>

      <div v-if="isEditing">
        <form v-on:submit.prevent="updateNote">
          <div class="w3-container">
            <p>
              <input
                required
                placeholder="Title"
                type="text"
                class="w3-input w3-padding w3-border w3-round-large"
                v-model="noteItem.title"
              />
            </p>
          </div>
          <div class="w3-container w3-text-grey">
            <textarea
              required
              v-model="noteItem.content"
              placeholder="Notes"
              class="w3-input w3-border w3-round-large"
              cols="30"
              rows="3"
            ></textarea>
            <hr />
            <div class="w3-rest">
              <button class="w3-right  w3-margin-left w3-margin-bottom">
                <i class="fa fa-floppy-o w3-text-indigo" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["noteItem"],
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    removeNote() {
      this.$emit("delete");
    },
    editNote() {
      this.isEditing = true;
    },
    updateNote() {
      this.isEditing = false;
      this.$emit("update");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
