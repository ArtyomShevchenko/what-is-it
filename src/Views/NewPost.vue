<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 v-if="!response" v-motion-slide-bottom>Add new post</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <form v-if="!response" v-motion-slide-bottom class="mt-6" v-on:submit="submitForm">
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
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                            style="height: 200px" name="discription" v-model="discription"></textarea>
                        <label for="floatingTextarea">Comments</label>
                    </div>
                    <button type="submit" class="btn btn-primary align-self-start">Submit</button>
                </form>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div v-if="response" v-motion-slide-bottom>
                    <h2 class="text-success">Form successfully submitted</h2>
                    <button class="btn btn-primary mt-4" v-on:click="createNewPost">Create new post</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            email: "",
            discription: "",
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
                    if (res == 235) {
                        this.response = true
                    }
                })

        },
        createNewPost() {
            this.response = false
        }
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