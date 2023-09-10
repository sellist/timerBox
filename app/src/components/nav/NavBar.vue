<script setup>
    import NavEntry from './NavEntry.vue';
</script>

<template>
    <div v-if="!showMobileMenu" id="monitor-container">
        <nav class="desktop">
            <div class="icon">
                <img ref="toSpin" src="/crouton.ico" alt="">
            </div>
            <ul class="links">
                <li><NavEntry path="/">Home</NavEntry></li>
                <li><NavEntry path="/list">List All</NavEntry></li>
                <li><NavEntry path="/active">Active Tables</NavEntry></li>
            </ul>
        </nav>
    </div>
    <div v-if="showMobileMenu" id = "mobile-container">
        <i class="fa-solid fa-bars" style="color: #000000;"></i>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMobileMenu: false,
            windowWidth: window.innerWidth
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
    .links {
        padding: 0 0 0 0;
        margin: 0 0 0 0;
        list-style-type: none;
    }

    .icon {
        justify-content: center;
        align-items: center;
        height: auto;
        margin-left: 3vh;
        margin-right: 3vh;
    }
    nav {
        box-sizing: content-box;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
    }
    

    nav > * {
        line-height: 4vh;
        display: flex;
        gap: 2vh;
    }

    /* mobile */
    #mobile-container {
        background-color: var(--background-white);
        height: var(--display-height);
    }

</style>