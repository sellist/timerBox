<script setup>
    import NavEntry from './NavEntry.vue';
</script>

<template>
    <div v-if="!showMobileMenu" id="monitor-container">
        <nav class="desktop-bar">
            <div class="icon">
                <img src="/crouton.ico" alt="">
            </div>
            <ul class="monitor-links">
                <li><NavEntry class="nav-bar-item" path="/">Home</NavEntry></li>
                <li><NavEntry class="nav-bar-item" path="/list">List All</NavEntry></li>
                <li><NavEntry class="nav-bar-item" path="/active">Active Tables</NavEntry></li>
            </ul>
        </nav>
    </div>
    <!-- mobile -->
    <div v-if="showMobileMenu" class="container-fluid" id="app">
    <nav class="row navbar">
        <div class="hamburger-wrap">
            <button class="hamburger" type="button" @click="menuOpen = !menuOpen">
            <img src="/hamburger.svg" alt="" style="width: 8vh">  
            </button>
        </div>
    </nav>
    <div class="row dropdown" :class="{ 'dropdown-after' : menuOpen }">
        <ul class="navlist">
            <li><NavEntry class="nav-menu-item" path="/">Home</NavEntry></li>
            <li><NavEntry class="nav-menu-item" path="/list">List All</NavEntry></li>
            <li><NavEntry class="nav-menu-item" path="/active">Active Tables</NavEntry></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            showMobileMenu: false,
            windowWidth: window.innerWidth,
            menuOpen: false
            };
        },
    mounted() {
        window.innerWidth < 600 ? this.showMobileMenu = true : this.showMobileMenu = false;
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },

    methods: {
        onResize() {
            window.innerWidth < 600 ? this.showMobileMenu = true : this.showMobileMenu = false;
        }   
    },
};
</script>

<style scoped>
    * {
        --background-white: rgb(240, 240, 240);
        --display-height: 64px;
    }

    #monitor-container {
        display: flex;
        min-width: 200px;
        flex-direction:column;
        justify-content: center;
        width: 100%;
        height: var(--display-height);
        background-color: var(--background-white);
    }
    .monitor-links {
        padding: 0 0 0 0;
        margin: 0 0 0 0;
        list-style-type: none;
        display: flex;
        gap: 1vh;
    }

    .icon {
        justify-content: center;
        align-items: center;
        height: auto;
        margin-left: 3vh;
        margin-right: 3vh;
    }
    .desktop-bar {
        box-sizing: content-box;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
    }
    

    .nav-bar-item {
        line-height: 4vh;
        display: flex;
        gap: 2vh;
    }

    /* mobile */
    .navbar {
        height: var(--display-height);
        background-color: var(--background-white);
        display: flex;
        border-radius: 0px;
        justify-content: center;

    }

    .hamburger-wrap {
        width: 100px;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .hamburger-wrap {
        justify-content: flex-end;
    }

    .hamburger {
        border: none;
        background-color: transparent;
    }
    .dropdown {
        height: 0px;
        background-color: lightgreen;
        transition: height 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .dropdown-after {
    height: calc(100vh - 20vh);
    transition: height 0.2s ease;
    }

    .navlist {
    list-style: none;
    }

    .nav-menu-item {
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
    }
</style>