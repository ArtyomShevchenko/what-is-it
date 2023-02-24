<template>
    <nav class="navbar-container">
        <div class="container-fluid">
            <div class="navbar-toggler" v-on:click="handleToggleNavbar" ref="navbarToggler">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="navbar" ref="navbarRef">
                <ul>
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link" v-on:click="closeNavbar">Home
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/all" class="nav-link" v-on:click="closeNavbar">All post
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/new-post" class="nav-link" v-on:click="closeNavbar">New post
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/contact" class="nav-link" v-on:click="closeNavbar">Contact Us
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
        handleToggleNavbar() {
            this.$refs.navbarRef.classList.contains("navbar-show")
                ? this.closeNavbar()
                : this.openNavbar()
        },
        closeNavbar() {
            this.$refs.navbarRef.classList.remove("navbar-show")
            this.$refs.navbarToggler.classList.remove("navbar-toggler-show")
            document.body.classList.remove("scroll-disabled")

        },
        openNavbar() {
            this.$refs.navbarRef.classList.add("navbar-show")
            this.$refs.navbarToggler.classList.add("navbar-toggler-show")
            document.body.classList.add("scroll-disabled")
        }
    }
}
</script>

<style scoped>
.navbar-container {
    background-color: var(--color-1);
    padding: 2rem 0;
    position: fixed;
    width: 100%;
    z-index: 50;
}

.navbar-toggler {
    background-color: var(--color-4);
    border: .2rem solid var(--semi-transparent-1);
    cursor: pointer;
    height: 3.5rem;
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .4rem;
    padding: 0;
    position: relative;
    user-select: none;
}

.navbar-toggler span {
    width: 80%;
    height: .4rem;
    background-color: var(--color-1);
    position: absolute;
    transition: all .2s;
}

.navbar-toggler-show span {
    width: 60%;
    background-color: var(--color-3);
}


.navbar-toggler span:first-child {
    transform: translateY(-200%);
}

.navbar-toggler span:last-child {
    transform: translateY(200%);
}

.navbar-toggler-show span:first-child {
    transform: translateY(0) rotate(45deg);
}

.navbar-toggler-show span:nth-child(2) {
    width: 0;
}

.navbar-toggler-show span:last-child {
    transform: translateY(0) rotate(-45deg);
}

@media (min-width: 768px) {
    .navbar-toggler {
        display: none;
    }
}

.navbar ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
}

.navbar {
    transition: all .2s ease-in-out;
    height: 0;
    overflow: hidden;
}

.navbar-container-show {
    /* background-color: var(--color-2); */
    background-color: red;
    height: 100vh;
}

.navbar-show {
    transform: translateY(0);
    height: 300px;
}

@media (min-width: 768px) {
    .navbar ul {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding: 0;
    }

    .navbar {
        height: 100%;
    }
}

.navbar li {
    font-size: 2rem;
    font-weight: 100;
}

.navbar .nav-link {
    /* color: #ccc !important; */
    color: var(--color-4);
    font-weight: 100;
}

.navbar .router-link-active {
    font-weight: 400;
}
</style>