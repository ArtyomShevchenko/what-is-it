<template>
    <div class="container" v-motion-slide-bottom>
        <div class="row">
            <div class="column-12">
                <div v-if="posts" class="d-flex flex-column gap-3">
                    <div v-for="post of posts" v-bind:key="post.id" class="card">
                        <RouterLink v-if="post" v-bind:to="`/post/${post.id}`" v-on:click="viewPost(post)"
                            class="text-decoration-none">
                            <div class="card-body d-flex flex-column align-items-start gap-2">
                                <h3 v-if="post.title" class="card-title text-dark">
                                    {{ post.title }}
                                </h3>

                                <small v-if="post.time" class="text-primary">
                                    {{ post.time }}
                                </small>
                            </div>
                        </RouterLink>
                    </div>
                </div>

                <div v-else>
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
    created() {
        fetch("http://localhost:3000/top")
        // fetch("http://116.203.249.5:3000/top")
            .then(res => res.json())
            .then(data => {
                this.posts = data
            })
    },
}
</script>