<template>
    <div class="list">
        <div class="listheader">
            <p class="list-title">{{ title }}</p>
            <p class="list-counter">total: {{ totalCardInList }}</p>
            <div class="deletelist" @click="removeList">×</div>
        </div>
        <perfect-scrollbar>
        <draggable
            class="list-cards"
            group="cards" 
            :list="cards"
            tag="ul"
            @end="$emit('change')"
        >
        <!-- <transition-group> -->
            <card 
                v-for="(item, index) in cards"
                :key="item.id"
                :body="item.body"
                :cardIndex="index"
                :listIndex="listIndex"
            />
            <!-- </transition-group> -->
        </draggable>
        </perfect-scrollbar>
        <card-add :listIndex="listIndex" />
    </div>
</template>

<script>
import draggable from "vuedraggable"
import { PerfectScrollbar } from "vue2-perfect-scrollbar"
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import CardAdd from "./CardAdd.vue"
import Card from "./Card.vue"

export default {
    components: {
        draggable,
        PerfectScrollbar,
        CardAdd,
        Card,
    },
    props: {
        title: {
            type: Array,
            required: true
        },
        cards: {
            type: String,
            required: true
        },
        listIndex: {
            type: Number,
            required: true
        },
    },
    computed: {
        totalCardInList() {
            return this.cards.length
        }
    },
    methods: {
        removeList() {
            if(confirm("本当にこのリストを削除しますか？")) {
                this.$store.dispatch("removeList", { listIndex: this.listIndex })
            }
        },
    }
}
</script>
