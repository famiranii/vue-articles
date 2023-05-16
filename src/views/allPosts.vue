<template>
    <div class="body-container vh-100 grid">
        <responsive-header></responsive-header>
        <section style="min-height: 700px;" class="d-flex">
            <sideBar></sideBar>
            <div class="form-articles col-12 col-lg-10">
                <h2>All Posts</h2>
                <div class="table-responsive my-4 overflw-x-auto position-relative d-flex flex-column align-items-center ">
                    <table class="table">
                        <colgroup>
                            <col>
                            <col>
                            <col>
                            <col>
                            <col class="col-2">
                            <col class="col-2">
                        </colgroup>
                        <thead>
                            <tr class="headOfList">
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                                <th scope="col">Tags</th>
                                <th scope="col">Excerpt</th>
                                <th scope="col">Created</th>
                            </tr>
                        </thead>
                        <allPoststable @deletedArticle="handleArticleDeleted" v-for="(item, index ) in paginatedArticles"
                            :key="index" :shownAriticle="item">
                        </allPoststable>
                    </table>
                    <div class="pagination btn-group me-2" role="group" aria-label="First group">

                        <button @click="currentPage--" :disabled="currentPage === 1"
                            class="previousPageBtn btn btn-outline-secondary btn-white">&lt;</button>

                        <template v-for="page in totalPages" v-bind:key="page"> <!-- Move the key here -->
                            <button @click="currentPage = page" class="pageNumberBtn btn btn-outline-secondary">
                                {{ page }}
                            </button>
                        </template>

                        <button @click="currentPage++" :disabled="currentPage === totalPages"
                            class="nextPageBtn btn btn-outline-secondary btn-white">&gt;</button>

                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
import responsiveHeader from '@/components/responsiveHeader.vue'
import sideBar from '@/components/sidebarArticle.vue'
import allPoststable from '@/components/allPostsTable.vue'
import axios from 'axios'

export default {

    name: 'HomeView',
    components: {
        responsiveHeader,
        sideBar,
        allPoststable
    },
    data() {
        return {
            shownArticles: [],
            currentPage: 1
        }
    },
    mounted() {
        axios.get('https://api.realworld.io/api/articles', {
            params: {
                limit: 34,
            },
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                const myArticles = response.data.articles
                let id = this.shownArticles.length + 1;
                myArticles.forEach(element => {
                    var createdDate = new Date(element.createdAt)
                    var year = createdDate.getFullYear();
                    var month = createdDate.getMonth() + 1;
                    var day = createdDate.getDate();
                    const addedArticle = {
                        id: id,
                        title: element.title,
                        author: element.author.username,
                        tags: element.tagList.toString(),
                        excerpt: element.description.slice(0, 20),
                        date: `${year}-${month}-${day}`,
                        slug: element.slug
                    }
                    this.shownArticles.push(addedArticle)
                    id++;
                });

            })
            .catch(error => {
                console.log(error);
            });
    },
    computed: {
        loginUsername() {
            return this.$route.query.username
        },
        totalPages() {
            return Math.ceil(this.shownArticles.length / 8)
        },
        paginatedArticles() {
            const start = (this.currentPage - 1) * 8
            const end = start + 8
            return this.shownArticles.slice(start, end)
        },
    },
    methods: {
        handleArticleDeleted(deletedSlug) {
            axios.delete(`https://api.realworld.io/api/articles/${deletedSlug}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(response => {
                    this.shownArticles = this.shownArticles.filter(
                        shownArticle => shownArticle.slug !== deletedSlug
                    );
                })
                .catch(error => {
                    console.log(error);
                });
        },
    },

}
</script>