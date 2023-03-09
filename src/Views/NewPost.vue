<template>
    <div class="container" v-motion-slide-bottom>
        <div class="row" v-if="!response">
            <div class="col-12">
                <h1>Create a new post</h1>
            </div>
        </div>

        <div class="row" v-if="response">
            <div class="col-12">
                <h2>Form send</h2>
            </div>
        </div>

        <div class="row" v-if="!response">
            <div class="col-12">
                <form v-on:submit="submit" id="FORM">
                    <input name="title" v-model="formData.title" type="text">
                    <input name="email" v-model="formData.email" type="email">
                    <textarea name="text" v-model="formData.text"></textarea>
                    <button type="submit" v-bind:disabled="!formData.title || !formData.email ? true : false">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                title: 'title post',
                email: 'user@home.net',
                text: 'some text in body',
            },
            response: false,
        }
    },
    watch: {
        response(value) {
            if (value === true) {
                setTimeout(() => this.response = false, 1000)
            }
        }
    },

    methods: {
        submit(e) {
            e.preventDefault()

            fetch("http://localhost:3000/posts/", {
                // fetch("http://116.203.249.5:3000/posts/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: JSON.stringify(this.formData),
            })
                .then(res => {
                    if (res.status === 201) {
                        this.response = true
                    }
                })
        }
    },
}
</script>

<style scoped></style>
