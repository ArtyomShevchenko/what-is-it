<template>
    <div class="container" v-motion-slide-bottom>
        <div class="row">
            <div class="col-12">
                <div>
                    <h1>{{ post.title }}</h1>
                    <p class="lead">{{ post.discription }}</p>
                    <p class="m-0 p-2 small text-secondary text-end">Author: {{ post.email }}</p>
                </div>
            </div>
        </div>

        <div class="row" v-if="post">
            <form ref="formComment" v-on:submit="submitForm">
                <div class="row">
                    <div class="col-12">
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                style="height: 120px" name="discription">User comment</textarea>
                            <label for="floatingTextarea">Comments</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-8  mt-2">
                        <input name="email" placeholder="Your email" type="email" class="form-control" id="form-email"
                            aria-describedby="emailHelp" value="user@gmail.com">
                    </div>

                    <div class="col-md-4  mt-2">
                        <button type="submit" class="btn btn-primary">Comment</button>
                    </div>
                </div>
            </form>
        </div>

        <hr>

        <div class="row" v-if="post.comments">
            <div class="col-12">
                <section v-for="(comment, index) of post.comments" class="card mt-2" :key="index"
                    v-motion-slide-visible-bottom>
                    <p class="m-0 p-2 small bg-light text-secondary">{{ comment.email }}</p>
                    <p class="m-0 mt-2 p-2">User: {{ comment.discription }}</p>
                </section>
            </div>
        </div>

        <div class="row" v-else>
            <div class="col-12">
                <p>No comments.</p>
            </div>
        </div>



        <div class="row" v-if="response">
            <div class="col-12">
                <p class="text-success" v-motion-slide-bottom>
                    Comment successfully submitted
                </p>
            </div>
        </div>

        <div class="row" v-if="!post">
            <div class="col-12">
                <h1>Loading...</h1>
            </div>
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
        // this.path = `http://116.203.249.5/:3000/post/${this.id}`

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