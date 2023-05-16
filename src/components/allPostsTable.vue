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
                    <span class=" me-1">{{ shownAriticle.date }}</span>
                    <div class=" d-inline-block">
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
                            <div @click="loginOrEditpage" class="p-2 pb-1 border-bottom" style="cursor: pointer;">
                                <span>Edit</span>
                            </div>
                            <div @click="deleteArticle" class="px-2 py-1"><span style="cursor: pointer;">Delete</span></div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</template>

<script>
import router from '@/router'
export default {
    props: {
        shownAriticle: Object
    },

    data() {
        return {
            isactive: false
        }
    },
    mounted() {
        document.addEventListener('click', this.handleDocumentClick);
    },
    methods: {
        showDropdown() {
            this.isactive = !this.isactive;
        },
        handleDocumentClick(event) {
            if (this.$el.contains(event.target)) {
                return;
            } else {
                this.isactive = false;
            }
        },
        loginOrEditpage() {
            const username = localStorage.getItem('username');
            if (this.shownAriticle.author === username) {
                router.push('/editArticlePage')
            } else {
                router.push('/loginPage')
            }
        },
        deleteArticle() {
            const articleSlug = this.shownAriticle.slug
            this.$emit('deletedArticle', articleSlug);

        },
    },
}

</script>