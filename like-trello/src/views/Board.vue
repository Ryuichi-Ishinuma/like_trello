<template>
  <div>
    <Header></Header>
    <main>
        <board-header></board-header>
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
        <!-- <perfect-scrollbar /> -->
    </main>
  </div>
</template>

<script>
import draggable from "vuedraggable"
// import { PerfectScrollbar } from "vue2-perfect-scrollbar"
// import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import Header from "../components/Header.vue"
import BoardHeader from "../components/BoardHeader.vue"
import ListAdd from "../components/ListAdd.vue"
import List from "../components/List.vue"
import { mapState } from "vuex"

export default {
  components: {
    draggable,
    // PerfectScrollbar,
    Header,
    BoardHeader,
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

