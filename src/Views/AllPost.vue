<template>
    <div class="container" v-motion-slide-bottom>
        <div class="row">
            <div class="col-12">
                <div class="filter-buttons">
                    <button class="filter-button" v-on:click="getNew">New</button>
                    <button class="filter-button" v-on:click="getMostComments">The most comments</button>
                    <button class="filter-button" v-on:click="getMostLikes">Most likes</button>
                    <button class="filter-button" v-on:click="getMostViews">Most views</button>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div v-if="posts">
                    <div v-for="post of posts" v-bind:key="post.id" class="card">
                        <div class="card-body">
                            <h3 v-if="post.title" class="card-title">
                                {{ post.title }}
                            </h3>
                            <RouterLink v-bind:to="`/post/${post.id}`" v-on:click="viewPost(post)">
                                <button>
                                    View
                                </button>
                            </RouterLink>
                        </div>
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
        getNew() {
            // fetch("http://116.203.249.5:3000/new")
            fetch("http://localhost:3000/new")
                .then(res => res.json())
                .then(data => this.posts = data);
        },
        getMostComments() {
            // fetch("http://116.203.249.5:3000/comments")
                fetch("http://localhost:3000/comments")
                .then(res => res.json())
                .then(data => this.posts = data);
        },
        getMostLikes() {
            // fetch("http://116.203.249.5:3000/likes")
                fetch("http://localhost:3000/likes")
                .then(res => res.json())
                .then(data => this.posts = data);
        },
        getMostViews() {
            // fetch("http://116.203.249.5:3000/views")
                fetch("http://localhost:3000/views")
                .then(res => res.json())
                .then(data => this.posts = data);
        }
    },
    created() {
        this.getNew()
        console.log(this.posts)
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

.active {
    background-color: red;
}
</style>
