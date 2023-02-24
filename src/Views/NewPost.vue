<template>
    <div class="container" v-motion-slide-bottom>
        <div class="row" v-if="!response">
            <div class="col-12">
                <h1>Create a new post</h1>
            </div>
        </div>

        <div class="row" v-if="!response">
            <div class="col-12">
                <form v-on:submit="submitForm">
                    <input name="title" v-model="title" type="text" placeholder="Title post" required>
                    <input name="email" v-model="email" type="email" placeholder="Your email address" required>
                    <textarea name="discription" v-model="discription" placeholder="You need add discription"
                        required></textarea>
                    <button type="submit" v-bind:disabled="title && email && discription ? false : true">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        <!-- 
                    <ModalVue ref="modalNewPostIsAdded">
                        The publication is posted on the website
                    </ModalVue> -->


        <div class="row">
            <div class="col-12">
                <div v-if="response" v-motion-slide-bottom>
                    <h2 class="text-success text-center">Form successfully submitted</h2>
                    <!-- <button class="btn btn-primary mt-4" v-on:click="createNewPost">
                                    Create new post
                                </button> -->
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
    // components: { ModalVue },
    data() {
        return {
            title: null,
            email: null,
            discription: null,
            response: false
        }
    },
    methods: {
        submitForm(e) {
            const form = document.querySelector("form")

            e.preventDefault()

            const formData = new FormData(form)

            fetch("http://localhost:3000/new-post", {
            // fetch("http://116.203.249.5:3000/new-post", {
                method: "POST",
                body: formData,
            })
                .then(res => res.text())
                .then(res => {
                    if (res == 210) {
                        this.response = true
                        this.clearForm()
                    }

                })
        },
        clearForm() {
            this.title = null
            this.email = null
            this.discription = null

            setTimeout(() => this.response = false, 3000)
        },
        createNewPost() {
            this.response = false
        },
    },
    watch: {
        // response() {
        //     setTimeout(() => {
        //         this.response = null
        //     }, 2000)
        // }
    }
}
</script>

<style scoped>
</style>
