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
                            <div class="p-2 pb-1 border-bottom">
                                <span><router-link class="text-black" to="editArticlePage">Edit</router-link></span>
                            </div>
                            <div class="px-2 py-1"><span style="cursor: pointer;">Delete</span></div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</template>

<script>


export default {
    props: {
        shownAriticle: Object
    },

    data() {
        return {
            isactive: false
        }
    },
    methods: {
        showDropdown() {
            if (this.isactive == true) {
                this.isactive = false
            } else {
                this.isactive = true
            }
        },
    },
}

</script>