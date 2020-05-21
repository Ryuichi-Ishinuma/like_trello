<template>
    <div>
        <div class="board-header">
            <div 
            class="board-name"
            >
            {{ boardName }}
            </div>
            <div style="color: rgba(255,255,255, 0.25); font-size: 30px; margin: 0 10px;">|</div>
            <a 
                class="board-header-star"
            ><span :class="starActive" @click="starChangeActive">
                <i class="far fa-star"></i>
            </span>
            </a>
            <div style="color: rgba(255,255,255, 0.25); font-size: 30px; margin: 0 10px;">|</div>
            <a 
                class="board-header-bell"
            ><span class="bell">
                <i class="fas fa-bell"></i>
            </span>
            </a>
            <a 
                class="board-header-menu"
                @click="boardMenuActive"
                >
                <span>ボードメニューを表示</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            boardName: "JavaScript",
            isActive: false,
        }
    },
    computed: {
        starActive() {
            const iconStar = ["star"]
            if(this.isActive) {
                iconStar.push("active")
            }
            return iconStar
        },
    },
    methods: {
        starChangeActive() {
            if(!this.isActive) {
                this.isActive = true
            } else {
                this.isActive = false
            }
        },
    }
}
</script>

<style scoped>
.board-header {
    background-color: #29303b;
    color: #fff;
    display: flex;
    /* height: 45px; */
    width: 100%;
    overflow: hidden;
    padding: 5px 0;
    position: fixed;
    top: 45px;
}
.board-name {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    padding-top: 5px;
    cursor: pointer;
}
.board-header-star {
    background: #394454;
    border-radius: 4px;
    display: block;
    width: 35px;
    height: 35px;
    margin-top: 2.5px;
}
.board-header-star:hover {
    background: #445060;
}
.board-header-star .star {
    color: #fff;
    display: block;
    padding: 5px;
}
.board-header-star .star:active {
    background: #445060;
    color: #f2d600;
}
.fa-star {
    position: relative;
    top: 1px;
    left: 3px;
}
.board-header-bell {
    background: #394454;
    border-radius: 4px;
    display: block;
    width: 35px;
    height: 35px;
    position: absolute;
    top: 8px;
    right: 178px;
}
.board-header-bell:hover {
    background: #445060;
}
.board-header-bell .bell {
    color: #fff;
    display: block;
    padding: 5px;
}
.fa-bell {
    position: relative;
    top: 1px;
    left: 6px;
}
.board-header-menu {
    background: #394454;
    border-radius: 4px;
    height: 35px;
    display: block;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 10px;
}
.board-header-menu:hover {
    background: #445060;
}
.board-header-menu span {
    font-size: 14px;
    padding: 5px 10px;
    position: relative;
    top: 6px;
}
</style>