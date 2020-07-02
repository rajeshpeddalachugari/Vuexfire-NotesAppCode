<template>
  <div id="app">
    <div class="w3-top">
      <div class="w3-bar w3-indigo" style="letter-spacing:4px;">
        <h3 class="w3-bar-item">Notes</h3>
      </div>
    </div>
    <a
      @click="openModal"
      class="addNew w3-display-bottomright w3-margin-bottom w3-margin-right w3-button w3-xlarge w3-circle w3-pink w3-card-4"
      >+</a
    >
    <div id="noteModal" class="w3-modal">
      <div class="w3-modal-content w3-round-large w3-card-4">
        <div class="w3-container">
          <form v-on:submit.prevent="addNote">
            <p>
              <label>Title</label>
              <input
                required
                v-model="note.title"
                class="w3-input w3-border w3-round-large"
                type="text"
              />
            </p>
            <p>
              <label>Note</label>
              <textarea
                v-model="note.content"
                required
                class="w3-input w3-border w3-round-large"
                id=""
                cols="30"
                rows="3"
              ></textarea>
            </p>
            <div class="w3-bar w3-padding-16">
              <button
                type="submit"
                class="w3-button w3-indigo w3-right w3-margin-right  w3-round"
              >
                Add
              </button>
              <button
                type="button"
                @click="CloseModal"
                class="w3-button w3-indigo w3-right w3-margin-right w3-round"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="w3-container w3-row-padding notes">
      <div
        is="notes-item"
        v-for="note in Notes"
        v-bind:key="note.id"
        :noteItem="note"
        @delete="deleteNote(note.id)"
        @update="updateNote(note)"
      ></div>
    </div>
  </div>
</template>

<script>
import Notes from "./components/Notes.vue";
import { store } from "./store";
export default {
  name: "App",
  components: {
    "notes-item": Notes,
  },
  data() {
    return {
      note: {
        title: "",
        content: "",
      },
    };
  },
  computed: {
    Notes() {
      return store.state.notes;
    },
  },
  methods: {
    openModal() {
      document.getElementById("noteModal").style.display = "block";
    },
    clearModal() {
      this.note = {
        title: "",
        content: "",
      };
    },
    CloseModal() {
      this.clearModal();
      document.getElementById("noteModal").style.display = "none";
    },
    addNote() {
      store.dispatch("addNote", this.note);
      this.CloseModal();
    },
    updateNote(payload) {
      store.dispatch("updateNote", payload);
    },
    deleteNote(payload) {
      store.dispatch("deleteNote", payload);
    },
  },
  created() {
    store.dispatch("bindNotes");
  },
};
</script>

<style scoped>
.addNew {
  position: fixed;
}
.notes {
  margin-top: 80px;
}
</style>
