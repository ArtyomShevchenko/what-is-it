<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav" ref="navbarRef">
                <ul class="navbar-nav">
                    <li class="nav-item" >
                        <RouterLink 
                            to="/" 
                            class="nav-link"
                            v-on:click="handleNavCollapse"
                            >Home
                        </RouterLink>
                    </li>
                    <li class="nav-item" >
                        <RouterLink 
                            to="/all" 
                            class="nav-link"
                            v-on:click="handleNavCollapse"
                            >All post
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink 
                            to="/new-post" 
                            class="nav-link"
                            v-on:click="handleNavCollapse"
                        >New post
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink 
                        to="/contact" 
                        class="nav-link"
                        v-on:click="handleNavCollapse"
                    >Contact Us
                </RouterLink>
            </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        handleNavCollapse() {
            this.$refs.navbarRef.classList.remove("show")
    }
}
}
</script>

<style scoped>

.nav-link {
    color: #ccc !important;
}
.router-link-active {
    color: #fff !important;
}
</style>