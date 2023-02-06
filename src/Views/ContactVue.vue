<template>
    <div v-motion-slide-bottom class="container">
        <div class="row gap-4">
            <div class="col-md-6 p-3 d-flex flex-column gap-2">
                <div>Author: Artyom Shevchenko</div>
                <div>Country: Ukraine</div>
                <div>State: Kyiv</div>
                <div>City: Vyshgorod</div>
                <a href="tel:+380934877758" class="text-decoration-none text-dark">
                    Phone:
                    <span class="text-decoration-underline text-primary" title="Call me">
                        +380934877758
                    </span>
                </a>
                <a href="mailto:artyomshevchenkowarmgray@gmail.com" class="text-decoration-none text-dark">
                    Mail:
                    <span class="text-decoration-underline text-primary" title="Write to me">
                        artyomshevchenkowarmgray@gmail.com
                    </span>
                </a>
            </div>

            <form id="contact-form" v-on:submit="submitForm" class="col-md-6">
                <!-- Name input -->
                <div class="mb-3">
                    <label class="form-label" for="name">Name</label>
                    <input name="name" class="form-control" id="name" type="text" placeholder="Name"
                        data-sb-validations="required" />
                    <div class="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
                </div>

                <!-- Email address input -->
                <div class="mb-3">
                    <label class="form-label" for="emailAddress">Email Address</label>
                    <input name="email" class="form-control" id="emailAddress" type="email" placeholder="Email Address"
                        data-sb-validations="required, email" />
                    <div class="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is
                        required.
                    </div>
                    <div class="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is
                        not
                        valid.
                    </div>
                </div>

                <!-- Message input -->
                <div class="mb-3">
                    <label class="form-label" for="message">Message</label>
                    <textarea name="text" class="form-control" id="message" type="text" placeholder="Message"
                        style="height: 8rem;" data-sb-validations="required"></textarea>
                    <div class="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
                </div>

                <h1>{{ responseError }}</h1>

                <!-- Form submit button -->
                <div v-if="!response && !responseError" class="d-grid">
                    <button class="btn btn-primary btn-lg" :disabled="isDisabled" type="submit">Submit</button>
                </div>

                <!-- Form submissions success message -->
                <div v-if="response" class="d-grid">
                    <button class="btn btn-success btn-lg" type="submit">Form submission successful!</button>
                </div>

                <!-- Form submissions error message -->
                <div v-if="responseError" class="d-grid">
                    <button class="btn btn-danger btn-lg" type="submit">Error sending message!</button>
                </div>
            </form>
        </div>

        <div class="row">
            <div class="col-12">
                <iframe class="mt-5"
                    src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d2114.2525189995085!2d30.46389016336566!3d50.596792055883455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d50.596667!2d30.463711!5e0!3m2!1suk!2sua!4v1675415597642!5m2!1suk!2sua"
                    width="100%" height="450" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
</template>

<script>
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

            fetch("http://localhost:3000/contact", {
                method: "POST",
                body: formData,
            })
                .then(res => res.json())
                .then((res) => {
                    if (res == 235) {
                        this.response = true
                    } else {
                        this.responseError = true
                    }
                })

        }
    }
}
</script>