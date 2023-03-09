<template>
    <div class="container" v-motion-slide-bottom>

        <div class="row" v-if="posts">
            <div class="col-12">
                <div class="posts-container">
                    <div v-for="post of posts" :key="post._id" class="post-container">
                        <h2>{{ post.title }}</h2>
                        <p>{{ post.text }}</p>
                        <RouterLink v-bind:to="`/post/${post._id}`">
                            <button>
                                View
                            </button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div v-if="!this.posts">
                    <h1>Post not found.</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: null,
        }
    },
    methods: {
        getPosts() {
            // fetch("http://116.203.249.5:3000/new")
            fetch("http://localhost:3000/posts")
                .then(res => res.json())
                .then(data => this.posts = data)
        }
    },
    created() {
        this.getPosts()
    },
}
</script>

<style scoped>
.card-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem 0;
}
</style>
