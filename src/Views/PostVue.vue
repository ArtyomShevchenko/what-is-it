<template>
    <div class="post-container">
        <div class="container" v-motion-slide-bottom v-if="post">
            <div class="row">
                <div class="col-12 post-content">
                    <h2 class="title">{{ post.title }}</h2>
                    <p class="text">{{ post.text }}</p>
                    <p class="author">{{ post.email }}</p>
                </div>
            </div>

            <div class="row">
                <div class="col-1">
                    <button v-on:click="deletePost">Delete</button>
                </div>

                <div class="col-1">
                    <button v-on:click="editPost">Edit</button>
                </div>
            </div>

            <div class="row" v-if="edit">
                <div class="col-12">
                    <form v-on:submit="updatePost">
                        <input type="text" v-model="editBody.title" placeholder="Tile">
                        <textarea type="text" v-model="editBody.text" placeholder="Body" />
                        <button v-on:click="updatePost">Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            path: null,
            post: null,
            editBody: {},
            edit: false,
        }
    },
    methods: {
        submit(e) {
            e.preventDefault()

            fetch(this.path, {
                method: "POST",
                body: "formData",
            })
                .then(res => {

                    if (res.ok) {
                        this.response = true
                    }
                })

            // this.getPost();

        },
        getPost() {
            // fetch(this.path)
            //     .then(res => res.json())
            //     .then(data => this.post = data)

            axios
                .get(this.path)
                .then(res => this.post = res.data)
        },
        deletePost() {
            fetch(this.path, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(() => this.getPost())
        },
        editPost() {
            if (!this.edit) {
                this.edit = true

                this.editBody = {
                    title: this.post.title,
                    text: this.post.text,
                }
            } else {
                this.edit = false
            }
        },
        updatePost(e) {
            e.preventDefault()

            // fetch(this.path, {
            //     method: 'PATCH',
            //     headers: {
            //         'Accept': 'application/json',
            //     },
            //     body: JSON.stringify(this.editBody),
            // })
            //     .then(res => {
            //         if (res.status == 200) this.getPost()
            //     })

            axios
                .patch(this.path, this.editBody)
                .then((res) => {
                    if (res.status == 200) this.getPost()
                })

            this.edit = false
        },
    },
    created() {
        this.path = `http://localhost:3000/posts/${this.$route.params.id}`
        // this.path = `http://116.203.249.5:3000/post/${this.$route.params.id}`;

        this.getPost()
    },
}
</script>

<style scoped>
.comments_container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.post-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}

.post-content .no-data {
    background-color: rgb(255, 92, 92);
    padding: 1rem;
}

.post-content .author {
    font-size: 1rem;
    align-self: flex-end;
}

.post-content .author span {
    font-size: calc(1rem * 0.8);
    color: var(--semi-transparent-5);
}

.post-content .like {
    height: 3rem;
    width: 3rem;
    background-color: var(--semi-transparent-5);
    cursor: pointer;
    user-select: none;
    clip-path: path("M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z");
}

.post-content .like:hover {
    background-color: var(--color-3);
}

.comment-status {
    text-align: center;
    color: var(--color-2);
}
</style>
