<template>
    <div v-motion-slide-bottom class="container">
        <div class="row">
            <div class="col-12">
                <h1>Contact me</h1>
            </div>
        </div>

        <div class="row contact-content">
            <div class="col-md-6">
                <div class="contact-data">
                    <tr>
                        <td>Author</td>
                        <td>Artyom Shevchenko</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>Ukraine</td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>Kyiv</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>Vyshgorod</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>
                            <a href="tel:+380934877758" class="text-decoration-underline text-primary" title="Call me">
                                +380934877758
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Mail</td>
                        <td>
                            <a href="mailto:artyomshevchenkowarmgray@gmail.com"
                                class="text-decoration-underline text-primary" title="Write to me">
                                artyomshevchenkowarmgray@gmail.com
                            </a>
                        </td>
                    </tr>
                </div>
            </div>

            <div class="col-md-6">
                <form v-on:submit="submitForm" id="contact-form">
                    <input name="name" type="text" placeholder="Name" />
                    <input name="email" type="email" placeholder="Your email" />
                    <textarea name="text" placeholder="Message"></textarea>

                    <!-- Form submit button -->
                    <div v-if="!response && !responseError" class="d-grid">
                        <button :disabled="isDisabled" type="submit">Submit</button>
                    </div>

                    <!-- Form submissions success message -->
                    <div v-if="response" class="d-grid">
                        <button type="submit" disabled>Form submission successful!</button>
                    </div>

                    <!-- Form submissions error message -->
                    <div v-if="responseError" class="d-grid">
                        <button type="submit">Error sending message!</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <iframe class="mt-5"
                    src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d2114.2525189995085!2d30.46389016336566!3d50.596792055883455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d50.596667!2d30.463711!5e0!3m2!1suk!2sua!4v1675415597642!5m2!1suk!2sua"
                    width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
</template>

<script>
// const server = "116.203.249.5"

export default {
    data() {
        return {
            name: "somename",
            email: "someemail@gmail.com",
            response: null,
            responseError: null,
            isDisabled: false,
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault()

            const form = document.querySelector("#contact-form")
            const formData = new FormData(form)

            // fetch("http://localhost:3000/contact", {
            fetch("http://116.203.249.5:3000/contact", {
                method: "POST",
                body: formData,
            })
                .then(res => res.json())
                .then((res) => {
                    if (res == 215) {
                        this.response = true
                    } else {
                        this.responseError = true
                    }
                })

        }
    }
}
</script>

<style scoped>
.contact-content {
    margin: 4rem 0;
}

.contact-content>div {
    padding-top: 2rem;
}
</style>