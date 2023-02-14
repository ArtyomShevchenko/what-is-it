<template>
    <!-- <div class="modal" v-if="isOpen" @click.self="close">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Modal Heading</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <slot />
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" @click="close">Close</button>
                </div>

            </div>
        </div>
    </div> -->

    <!-- Button to Open the Modal -->
    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
        Open modal
    </button> -->

    <!-- The Modal -->
    <div class="modal fade" id="myModal" ref="modal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Modal Heading</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    Modal body..
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        open() {
            this.isOpen = true
        },

        close() {
            this.isOpen = false
        },
    },
    watch: {
        isOpen(value) {
            if (value) {
                document.querySelector("body").classList.add("modal-open")
            }

            if (!value) {
                document.querySelector("body").classList.remove("modal-open")
            }
        }
    }
}
</script>

<!-- <style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
}
</style> -->