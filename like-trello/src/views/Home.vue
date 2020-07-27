<template>
    <div>
        <Header></Header>
        <div class="home-container">
            <HomeSidebar />
            <HomeBoard />
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue"
import HomeBoard from "../components/HomeBoard.vue"
import HomeSidebar from "../components/HomeSidebar.vue"
export default {
    components: {
        Header,
        HomeBoard,
        HomeSidebar,
    }
}
</script>

<style scoped>
.home-container {
    display: flex; 
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin-top: 20px;
}
</style>