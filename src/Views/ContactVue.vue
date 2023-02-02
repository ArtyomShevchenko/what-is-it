<template>
    <div v-motion-slide-bottom class="container">
        <div class="row gap-4">

            <div class="col-sm-12">
                <div><span>Author</span>: Artyom Shevchenko</div>
                <div>Country: Ukraine</div>
                <div>State: Kyiv</div>
                <div>City: Vyshgorod</div>
                <a id="myPhone" href="tel:+380934877758">+380934877758</a>
            </div>

            <form id="contact-form" v-on:submit="submitForm" class="col">
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
                    <div class="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.
                    </div>
                    <div class="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not
                        valid.
                    </div>
                </div>

                <!-- Message input -->
                <div class="mb-3">
                    <label class="form-label" for="message">Message</label>
                    <textarea name="text" class="form-control" id="message" type="text" placeholder="Message" style="height: 8rem;"
                        data-sb-validations="required"></textarea>
                    <div class="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
                </div>
                
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
            isDisabled: true,
        }
    },
    methods: {
        submitForm(e) {
            const form = document.querySelector("#contact-form")
        
            e.preventDefault()

            const formData = new FormData(form)

            fetch("http://localhost:3000/contact", {
                method: "POST",
                body: formData,
            })
                .then(res => res.text())
                .then(res => {
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