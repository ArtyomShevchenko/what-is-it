<template>
    <div class="post-container">
        <div class="container" v-motion-slide-bottom v-if="post">
            <div class="row">
                <div class="col-12 post-content">
                    <h2 class="title">{{ post.title }}</h2>
                    <p class="discription">{{ post.discription }}</p>
                    <p class="author"><span>author: </span>{{ post.email }}</p>
                    <div class="like" v-on:click="handleLike"></div>

                    <!-- <div class="test">
                        <h3>Log for developer:</h3>
                        <p>Like: <b>{{ post.likes }}</b></p>
                        <p>Comments: <b v-if="post.comments">{{ post.comments.length }}</b></p>
                        <p>Views: <b>{{ post.views }}</b></p>
                    </div> -->
                </div>
            </div>

            <div class="row">
                <form v-on:submit="handleSubmit">
                    <textarea name="discription" placeholder="Leave a comment"></textarea>
                    <input name="email" placeholder="Your email" type="email" />
                    <button type="submit" v-if="!response">Comment</button>
                    <ButtonVue v-if="response" background="green">Comment successfully submitted</ButtonVue>
                </form>
            </div>

            <!-- <div class="row" v-if="!response">
                <div class="col-12 comment-status">
                    <p>Comment successfully submitted</p>
                </div>
            </div> -->

            <div class="row" v-if="post.comments">
                <div class="col-12 comments_container">
                    <div v-for="(comment, index) of post.comments" class="card" :key="id + index">
                        <p>User: {{ comment.email }}</p>
                        <p>{{ comment.discription }}</p>
                    </div>
                </div>
            </div>

            <div class="row" v-else>
                <div class="col-12">
                    <p>No comments.</p>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row" v-if="!post">
                <div class="col-12">
                    <LoadingVue></LoadingVue>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoadingVue from '@/Components/LoadingVue.vue';
import ButtonVue from '@/Components/ButtonVue.vue';

export default {
    components: { LoadingVue, ButtonVue },
    data() {
        return {
            id: '',
            post: '',
            path: '',
            response: null,
            likeStatus: null,
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
                .then(res => {
                    if (res.ok) {
                        this.response = true
                    }
                })

            this.getPost();

        },
        getPost() {
            fetch(this.path)
                .then(res => res.json())
                .then(data => this.post = data)
        },
        handleLike() {
            fetch(this.path + "/like", {
                method: "POST",
                body: this.id
            })
                .then(res => {
                    if (res.ok) this.likeStatus = true
                })

        },
        getViews() {
            fetch(this.path + "/view", {
                method: "POST",
                body: this.id
            })
        }
    },
    created() {
        this.id = this.$route.params.id;

        this.path = `http://localhost:3000/post/${this.id}`;
        // this.path = `http://116.203.249.5:3000/post/${this.id}`;

        this.getPost()
        this.getViews()
    },
    watch: {
        response() {
            setTimeout(() => {
                this.response = null
                this.getPost()
            }, 2000)
        },
        likeStatus() {
            this.likeStatus = null
            this.getPost()
        }
    }
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

.post-content .discription {}

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
