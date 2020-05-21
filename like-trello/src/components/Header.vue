<template>
    <div>
        <header>
            <router-link to="/" class="to-home"><i class="fas fa-home"></i></router-link>
            <router-link to="/" class="header-title"><span>like Trello</span></router-link>
        </header>
    </div>
</template>


<style scoped>
header {
    background: #232932;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    padding: 5px 0;
    position: fixed;
    top: 0;
    width: 100%;
    height: 45px;
    z-index: 10;
}
.to-home {
    background: #445060;
    border-radius: 4px;
    width: 35px;
    height: 35px;
    margin: 0 5px 0 30px;
    cursor: pointer;
}
.to-home:hover {
    background: #394454;
}
.fa-home {
    color: #fff;
    vertical-align: middle;
    line-height: 1;
    position: relative;
    top: 5px;
    left: 8px;
}
.header-title {
    color: #46c28e;
    font-style: italic;
    font-family: 'Caveat', cursive;
    font-size: 30px;
    line-height: 1;
    position: absolute;
    top: 8px;
    left: 46%;
    text-align: center;
    cursor: pointer;
}
.header-title:hover {
    color: #74dba9;
}
</style>