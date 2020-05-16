<template>
  <div>
    <header>like Trello</header>
    <main>
      <p class="info-line">All: {{ totalCardCount }} tasks</p>
      <draggable 
        class="list-index" 
        :list="lists"
        @end="movingList"
      >
        <list 
          v-for="(item, index) in lists"
          :key="item.id"
          :title="item.title"
          :cards="item.cards"
          :listIndex="index"
          @change="movingCard"
        />
        <list-add />
      </draggable>
    </main>
  </div>
</template>

<script>
import draggable from "vuedraggable"
import ListAdd from "./ListAdd.vue"
import List from "./List.vue"
import { mapState } from "vuex"

export default {
  components: {
    draggable,
    ListAdd,
    List,
  },
  computed: {
    ...mapState([
      "lists"
    ]),
    totalCardCount() {
      return this.$store.getters.totalCardCount
    }
  },
  methods: {
    movingCard() {
      this.$store.dispatch("updateList", { lists: this.lists })
    },
    movingList() {
      this.$store.dispatch("updateList",{ lists: this.lists })
    }
  }
}
</script>