<template>
    <div class="container" v-motion-slide-bottom>
        <div class="row" v-if="post">
            <div class="col-12">
                <h1>{{ post.title }}</h1>
                <p>{{ post.discription }}</p>
                <p class="author">Author: {{ post.email }}</p>
                <button v-on:click="handleLike">Like</button>

                <div class="test">
                    <h3>Log for developer:</h3>
                    <p>Like: <b>{{ post.likes }}</b></p>
                    <p>Comments: <b v-if="post.comments">{{ post.comments.length }}</b></p>
                    <p>Views: <b>{{ post.views }}</b></p>
                </div>
            </div>
        </div>

        <div class="row" v-if="post">
            <form v-on:submit="handleSubmit">
                <textarea name="discription" placeholder="Leave a comment"></textarea>
                <input name="email" placeholder="Your email" type="email" />
                <button type="submit">Comment</button>
            </form>
        </div>

        <div class="row" v-if="response">
            <div class="col-12">
                <p>
                    Comment successfully submitted
                </p>
            </div>
        </div>

        <div class="row" v-if="post.comments">
            <div class="col-12 comments_container">
                <div v-for="(comment, index) of post.comments" class="card" :key="id + index">
                    <p>User: {{ comment.email }}</p>
                    <p>{{ comment.discription }}</p>
                </div>
            </div>
        </div>

        <div class="row" v-if="post.comments">
            <div class="col-12">
                <p>No comments.</p>
            </div>
        </div>

        <div class="row" v-if="!post">
            <div class="col-12">
                <div class="loading"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: '',
            post: '',
            path: '',
            response: false,
        }
    },
    methods: {
        handleSubmit(e) {
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
                });

            this.getComments();

        },
        getComments() {
            fetch(this.path)
                .then(res => res.json())
                .then(data => this.post = data)
        },
        handleLike() {
            fetch(this.path + "/like", {
                method: "POST",
                body: this.id
            })
        }
    },
    created() {
        this.id = this.$route.params.id;

        this.path = `http://localhost:3000/post/${this.id}`;
        // this.path = `http://116.203.249.5:3000/post/${this.id}`;

        this.getComments()


        // fetch(this.path + "/view", {
        //     method: "POST",
        //     body: this.id,
        // })


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

<style scoped>
.test {
    border: .1rem solid red;
    padding: 1rem;
}

.comments_container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
