<template>
    <div class="board-menu">
        <div class="board-menu-tab-content">
            <div class="board-menu-header">
                <h3 class="board-menu-header-title">ボードメニュー</h3>
                <a class="board-menu-header-close-btn" href="#">×</a>
            </div>
        </div>
        <div class="board-menu-content">
            <ul class="board-menu-nav">
                <li class="board-menu-nav-item">
                    <a class="board-menu-nav-item-link" href="">
                        <span class="board-menu-nav-item-link-icon"></span>
                        <p>背景を変更</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.board-menu {
    display: none;
    width: 300px;
    height: 100%;
    background: #f4f5f7;
    position: absolute;
    top: 0;
    right: 0;
}

.board-menu-tab-content {
    color:#172b4d;
    background-color: #f4f5f7;
    overflow: hidden;
    width: 100%;
}
.board-menu-header {
    display: flex;
    height: 45px;
    padding: 0 10px;
}
.board-menu-header h3 {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    margin: 15px 25px;
}
.board-menu-header-close-btn {
    font-size: 20px;
    font-weight: 700;
    position: absolute;
    top: 8px;
    right: 6px;
}
.board-menu-content {
    box-sizing: border-box;
    display: flex;
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 12px 6px 12px 12px;
    width: 100%;
    height: 100%;
}
.board-menu-nav-item-link {
    display: flex;
}
</style>