<template>
    <div>
        <RouterLink :to=$props.path>
            <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block">
                <slot>Placeholder</slot>
            </button>
        </RouterLink>
    </div>
    
</template>

<script>
    export default {
        name : 'NavEntry',
        props: ['path'],
    }
</script>

<style scoped>
    div {
        height: inherit;
        box-sizing: border-box;
        padding: auto;
        min-width: 7vh;
        width: auto;
        text-align: center;
        
    }
</style>