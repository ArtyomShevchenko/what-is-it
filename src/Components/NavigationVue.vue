<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item ">
                        <RouterLink to="/" class="nav-link">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/all-posts" class="nav-link">All post</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/new-post" class="nav-link">New post</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/contact" class="nav-link">Contact Us</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.nav-link {
    color: lightgray;
}

.router-link-active {
    color: white !important;
}
</style>