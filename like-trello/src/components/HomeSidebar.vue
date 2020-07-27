<template>
    <div class="home-sidebar">
        <ul class="home-sidebar-list">
            <li class="home-sidebar-list-item">
                <a href="#">
                    <span></span>
                    <span>ボード</span>
                </a>
            </li>
            <li class="home-sidebar-list-item">
                <a href="#">
                    <span></span>
                    <span>テンプレート</span>
                </a>
            </li>
            <li class="home-sidebar-list-item">
                <a href="#">
                    <span></span>
                    <span>ホーム</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.home-sidebar {
    position: sticky;
    top: 0;
}
.home-sidebar-list {
    margin: 40px 0;
    padding: 0 16px;
    width: 240px;
}
.home-sidebar-list-item {
    background-color: #394454;
    border-radius: 4px;
    margin-bottom: 6px;
}
.home-sidebar-list-item a{
    color: #fff;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    padding: 6px 8px;
}
</style>