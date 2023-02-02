<template>
    <div class="post-container" v-motion-slide-bottom>
        <div class="container d-flex flex-column gap-4" v-if="post">
            <div class=" bg-light p-4">
                <h1>{{ post.title }}</h1>
                <p class="lead">{{ post.discription }}</p>
                <p class="m-0 p-2 small text-secondary text-end">Author: {{ post.email }}</p>
            </div>

            <!-- <form class="d-flex flex-column gap-2" v-bind:action="this.path" method="post"> -->
            <form ref="formComment" class="d-flex flex-column gap-2" v-on:submit="submitForm">
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                        style="height: 120px" name="discription">User comment</textarea>
                    <label for="floatingTextarea">Comments</label>
                </div>

                <div>
                    <input name="email" placeholder="Your email" type="email" class="form-control" id="form-email"
                        aria-describedby="emailHelp" value="user@gmail.com">
                </div>

                <button type="submit" class="btn btn-primary align-self-start">Comment</button>
            </form>

            <p v-if="response" 
                class="text-success"
                v-motion-slide-bottom>
                Comment successfully submitted
            </p>


            <hr />

            <div class="coments-list d-flex flex-column gap-2" v-if="post.comments">
                <section v-for="(comment, index) of post.comments" class="card" :key="index" v-motion-slide-visible-bottom>
                    <p class="m-0 p-2 small bg-light text-secondary">{{ comment.email }}</p>
                    <p class="m-0 mt-2 p-2">User: {{ comment.discription }}</p>
                </section>
            </div>
            <div v-else>
                <p>No comments.</p>
            </div>

        </div>

        <div v-else>
            <h1>Loading...</h1>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: null,
            post: null,
            path: null,
            response: null,
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault()

            const form = document.querySelector("form")
            const formData = new FormData(form)

            fetch(this.path, {
                method: "POST",
                body: formData,
            })
                .then(res => res.text())
                .then(res => {
                    if (res == "OK") {
                        this.response = true
                    }

                    console.log(res)
                })


            this.getComments()

        },
        getComments() {
            fetch(this.path)
                .then(res => res.json())
                .then(data => this.post = data)
        }
    },
    created() {
        this.id = this.$route.params.id

        this.path = `http://localhost:3000/post/${this.id}`

        this.getComments()
    },
    watch: {
        response() {
            setTimeout(() => {
                this.response = null
                this.getComments()
            }, 2000)
        }
    }
}
</script>