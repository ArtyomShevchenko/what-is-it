<template>
    <div class="container" v-motion-slide-bottom>
        <div class="row" v-if="!response">
            <div class="col-12">
                <h1 class="mb-5 mt-3">Create a new post</h1>
            </div>
        </div>

        <div class="row" v-if="!response">
            <div class="col-12">
                <form class="mt-6" v-on:submit="submitForm">
                    <div class="mb-3">
                        <label for="form-title" class="form-label">Title post</label>
                        <input name="title" v-model="title" type="text" class="form-control" id="form-title"
                            aria-describedby="titleHelp">
                    </div>

                    <div class="mb-3">
                        <label for="form-email" class="form-label">Your email address</label>
                        <input name="email" v-model="email" type="email" class="form-control" id="form-email"
                            aria-describedby="emailHelp">
                    </div>

                    <div class="form-floating">
                        <textarea name="discription" class="form-control" id="floatingTextarea" style="height: 200px"
                            v-model="discription" placeholder="sda">
                        </textarea>
                        <label for="floatingTextarea">You need add discription.</label>
                    </div>

                    <button type="submit" class="btn btn-primary align-self-start" data-bs-toggle="modal"
                        data-bs-target="#myModal" v-bind:disabled="title && email && discription ? false : true">
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
// import ModalVue from "@/Components/ModalVue.vue"

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

            fetch("http://116.203.249.5:3000/new-post", {
                method: "POST",
                body: formData,
            })
                .then(res => res.text())
                .then(res => {
                    if (res == 235) {
                        this.response = true
                        this.clearForm()

                        // this.$refs.modalNewPostIsAdded.open()
                    }

                })
        },
        clearForm() {
            this.title = null
            this.email = null
            this.discription = null

            setTimeout(() => this.response = false, 5000)
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
form {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

form input[type=submit] {
    align-self: flex-end;
}
</style>
