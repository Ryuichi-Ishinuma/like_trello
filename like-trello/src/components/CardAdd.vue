<template>
    <form 
        :class="classList"
        @submit.prevent="addCardToList"
    >
        <input 
            type="text"
            v-model="body"
            class="text-input"
            placeholder="+ Add new card"
            @focusin="startEditing"
            @focusout="finishEditing"
        >
        <button 
            type="submit" 
            class="add-button"
            v-if="isEditing || bodyExists"
        >Add</button>
        <div
            class="delete-card"
            @click="stopAdding"
            v-if="isEditing || bodyExists"
            >×</div>
    </form>
</template>

<script>
export default {
    props: {
        listIndex: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
            body: "",
            isEditing: false,
        }
    },
    computed: {
        classList() {
            const classList = ["addcard"]
            if(this.isEditing) {
                classList.push("active")
            }
            if(this.bodyExists) {
                classList.push("addable")
            }
            return classList
        },
        bodyExists() {
            return this.body.length > 0
        }
    },
    methods: {
        startEditing() {
            this.isEditing = true
        },
        finishEditing() {
            this.isEditing = false
        },
        addCardToList() {
            if(this.body.length > 0) {
                this.$store.dispatch("addCardToList", { body: this.body, listIndex: this.listIndex })
                this.body = ''
            }
        },
        stopAdding() {
            this.body = ""
        }
    }
}
</script>

<style scoped>
.delete-card {
    font-size: 32px;
    font-weight: 700;
    float: left;
    margin-top: 7px;
    margin-left: 15px;
}

.delete-card:hover {
    opacity: 0.8;
    cursor: pointer;
}
</style>