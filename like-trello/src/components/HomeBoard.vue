<template>
    <div class="home-boards">
        <div class="boards-content">
            <div class="boards-section">
                <div class="board-section-header">
                    <span class="board-section-header-icon"><i style="color: #fff;" class="far fa-star"></i></span>
                    <h3 class="board-section-header-name">スター付きボード</h3>
                </div>
                <div>
                    <ul class="boards-section-list">
                        <li class="boards-section-list-item">
                            <router-link to="/board/" class="board-tile">
                                <div class="board-tile-details">
                                    <div class="board-tile-details-name">JavaScript</div>
                                    <div class="board-tile-details-sub-container">
                                        <span class="board-tile-options"></span>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="boards-section">
                <div class="board-section-header">
                    <span class="board-section-header-icon"><i style="color: #fff;" class="far fa-star"></i></span>
                    <h3 class="board-section-header-name">パーソナルボード</h3>
                </div>
                <div>
                    <ul class="boards-section-list">
                        <li class="boards-section-list-item">
                            <router-link to="/board/" class="board-tile">
                                <div class="board-tile-details">
                                    <div class="board-tile-details-name">{{ title }}</div>
                                    <div class="board-tile-details-sub-container">
                                        <span class="board-tile-options"></span>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
        }
    }
}
</script>

<style scoped>
.home-boards {
    margin: 40px 16px 0;
    width: 100%;
    max-width: 825px;
    min-width: 300px;
}
.boards-section {
    padding-bottom: 20px;
}
.board-section-header {
    display: flex; 
    color: #fff;
    padding: 0 0 11px;
    position: relative;
}
.board-section-header-icon {
    position: absolute;
    top: 0;
}
.board-section-header-name {
    font-size: 16px;
    font-weight: 700;
    padding-left: 30px;
}
.boards-section-list {
    width: 23.5%;
    padding: 0;
    margin: 0 2% 2% 0;
}
.board-tile {
    background-color: #394454;
    border-radius: 4px;
    display: block;
    line-height: 20px;
    padding: 8px;
    text-decoration: none;
}
.board-tile-details {
    display: flex;
    height: 80px;
    position: relative;
}
.board-tile-details-name {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
}
</style>