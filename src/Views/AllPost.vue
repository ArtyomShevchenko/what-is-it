<template>
    <div class="container" v-motion-slide-bottom>
        <div class="row">
            <div class="col-12">
                <div v-if="posts" class="d-flex flex-column gap-3">
                    <div v-for="post of posts" v-bind:key="post.id" class="card">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div class="card-body d-flex flex-column align-items-start gap-2" v-motion-slide-visible-bottom>
                            <h3 v-if="post.title" class="card-title">
                                {{ post.title }}
                            </h3>
                            <RouterLink v-if="post" v-bind:to="`/post/${post.id}`" v-on:click="viewPost(post)"
                                class="btn btn-primary">
                                View
                            </RouterLink>

                            <small v-if="post.time" class="text-primary">
                                {{ post.time }}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div v-if="!posts">
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
        fetch("http://localhost:3000/all")
        // fetch("http://116.203.249.5/:3000/all")
            .then(res => res.json())
            .then(data => {
                this.posts = data

                console.log(this.posts.target)
            })
    },
}
</script>