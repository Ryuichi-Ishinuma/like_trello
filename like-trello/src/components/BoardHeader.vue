<template>
    <div style="height: 45px;">
        <div class="board-header">
            <div 
                class="board-name"
            >
            {{ boardName }}
            </div>
            <div style="color: rgba(255,255,255, 0.25); font-size: 30px; margin: 0 10px;">|</div>
            <a 
                class="board-header-star"
                href="#"
            ><span><i class="far fa-star"></i></span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            boardName: "JavaScript",
        }
    },
}
</script>

<style scoped>
.board-header {
    background-color: #29303b;
    border-bottom: 1px solid #fff;
    color: #fff;
    display: flex;
    height: 45px;
    width: 100%;
    overflow: hidden;
    position: fixed;
}
.board-name {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
    padding-top: 5px;
    cursor: pointer;
}
.board-header-star {
    background: #394454;
    /* background: #fff; */
    width: 40px;
    height: 40px;
    margin-top: 2.5px;
    padding: 10px;
}
.fa-star {
    color: #fff;
}
</style>