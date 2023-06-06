<template>
    <tbody class="bodyOfList ">
        <tr>
            <th scope="row">{{ shownAriticle.id }}</th>
            <td>{{ shownAriticle.title }}</td>
            <td>{{ shownAriticle.author }}</td>
            <td>{{ shownAriticle.tags }}</td>
            <td>{{ shownAriticle.excerpt }}</td>
            <td>
                <div class="d-md-flex">
                    <span>{{ shownAriticle.date }}</span>
                    <div class=" ms-auto d-inline-block">
                        <button @click="showDropdown" class="btn  blue-sky text-white">
                            <span>...</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor"
                                class="bi bi-caret-down-fill ms-xl-2" viewBox="0 0 16 16">
                                <path
                                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z">
                                </path>
                            </svg>
                        </button>
                        <div :class="{ 'd-none': !isactive }"
                            class="edit-delet-dropdown position-absolute z-1 border border-secondary-subtle rounded-1 bg-white">
                            <div @click="editArticlePage" class="p-2 pb-1 border-bottom" style="cursor: pointer;">
                                <span>Edit</span>
                            </div>
                            <div data-bs-toggle="modal" data-bs-target="#exampleModal" class="px-2 py-1"><span
                                    style="cursor: pointer;">Delete</span></div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
        <div class="modal fade modal-centered" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">Delet article</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Are you sure to delet article
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">No</button>
                        <button @click="deleteArticle" type="button" class="btn btn-danger"
                            data-bs-dismiss="modal">Yes</button>
                    </div>
                </div>
            </div>
        </div>
    </tbody>
</template>

<script>
import router from '@/router'
import { useToast } from 'vue-toastification';
export default {
    data() {
        return {
            isactive: false,
        }
    },
    props: {
        shownAriticle: Object
    },
    setup(props) {
        const toast = useToast()
        return { toast }
    },

    mounted() {
        document.addEventListener('click', this.handleDocumentClick);
    },
    methods: {
        showDropdown() {
            if (this.shownAriticle.author == localStorage.getItem("username")) {
                this.isactive = !this.isactive;
            }
            localStorage.setItem("clickedArticle", this.shownAriticle.slug)
        },
        handleDocumentClick(event) {
            if (this.$el.contains(event.target)) {
                return;
            } else {
                this.isactive = false;
            }
        },
        editArticlePage() {
            router.push(`/editArticlePage/${localStorage.getItem("clickedArticle")}`)
        },
        deleteArticle() {
            this.$emit("deleteArticle", localStorage.getItem("clickedArticle"))
            this.handleDocumentClick(Event)

        },
    },
}

</script>