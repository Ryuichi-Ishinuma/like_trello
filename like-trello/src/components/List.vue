<template>
    <div class="list">
        <div class="listheader">
            <p class="list-title">{{ title }}</p>
            <p class="list-counter">total: {{ totalCardInList }}</p>
            <div class="deletelist" @click="removeList">×</div>
        </div>
        <draggable 
            group="cards" 
            :list="cards"
            @end="$emit('change')"
        >
            <card 
                v-for="(item, index) in cards"
                :key="item.id"
                :body="item.body"
                :cardIndex="index"
                :listIndex="listIndex"
            />
        </draggable>
        <card-add :listIndex="listIndex" />
    </div>
</template>

<script>
import draggable from "vuedraggable"
import CardAdd from "./CardAdd.vue"
import Card from "./Card.vue"

export default {
    components: {
        draggable,
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