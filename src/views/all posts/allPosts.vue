<template>
    <div class="body-container vh-100 grid">
        <responsive-header></responsive-header>
        <section style="min-height: 700px;" class="d-flex">
            <sideBar></sideBar>
            <div class="form-articles col-12 col-lg-10">
                <div class="d-flex justify-content-between">
                    <h2>All Posts</h2>
                    <div>
                        <button @click="yourArticles = false" class="btn" :class="{ 'btn-secondary': !yourArticles }">all
                            articles</button>
                        <button @click="yourArticles = true , currentPage=1" class="btn" :class="{ 'btn-secondary': yourArticles }">your
                            article</button>
                    </div>
                </div>
                <div class="table-responsive my-4 overflw-x-auto position-relative d-flex flex-column align-items-center">
                    <div v-if="isLoading" class="spinner-border text-primary mt-5" role="status"
                        style="margin-bottom: 600px;">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <table v-else class="table">
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
                        <allPoststable @deleteArticle="handleArticleDeleted" v-for="(item, index ) in displayedArticles"
                            :key="index" :shownAriticle="item">
                        </allPoststable>
                    </table>
                    <div class="pagination btn-group" role="group" aria-label="First group">

                        <button @click="currentPage--" :disabled="currentPage === 1"
                            class="previousPageBtn btn btn-outline-secondary btn-white">&lt;</button>

                        <template v-for="page in totalPages" :key="page"> <!-- Move the key here -->
                            <button @click="currentPage = page" class="pageNumberBtn btn btn-outline-secondary"
                                :class="[currentPage === page ? 'active' : '']">
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
import allPoststable from './component/allPostsTable.vue'
import axios from 'axios'
import { useToast } from "vue-toastification";
import { headers } from '@/axiosHeader';

export default {
    name: 'HomeView',
    components: {
        responsiveHeader,
        sideBar,
        allPoststable
    },
    setup() {
        const toast = useToast();
        return { toast }
    },
    data() {
        return {
            shownArticles: [],
            currentPage: 1,
            isLoading: true,
            yourArticles: false,
            username: localStorage.getItem('username')
        }
    },
    mounted() {
        axios.get('https://api.realworld.io/api/articles', {
            params: {
                limit: 34,
            },
            headers
        })
            .then(response => {
                const myArticles = response.data.articles;
                let id = this.shownArticles.length + 1;

                const addedArticles = myArticles.map(element => {
                    const { title, author, tagList, description, createdAt, slug } = element;
                    const createdDate = new Date(createdAt);
                    const date = createdDate.toISOString().slice(0, 10);

                    return {
                        id: id++,
                        title,
                        author: author.username,
                        tags: tagList.join(", "),
                        excerpt: description.slice(0, 20),
                        date,
                        slug
                    };
                });

                this.shownArticles.push(...addedArticles);
                this.isLoading = false;

            })
            .catch(error => {
                console.log(error);
            });
    },
    computed: {
        loginUsername() {
            return this.$route.query.username
        },

        totalArticlesByAthor(){
            return this.shownArticles.filter((article) => article.author == this.username)  
        },

        displayedArticles() {
            if (this.yourArticles) {
                return this.totalArticlesByAthor.slice((this.currentPage - 1) * 8, this.currentPage * 8)
            } else {
                return this.shownArticles.slice((this.currentPage - 1) * 8, this.currentPage * 8)
            }
        },

        totalPages() {
            if (this.yourArticles) {
                return Math.ceil(this.totalArticlesByAthor.length / 8)
            } else {
                return Math.ceil(this.shownArticles.length / 8)
            }
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
                    this.toast.success("Article deleted successfuly");
                })
                .catch(error => {
                    console.log(error);
                    this.toast.error("you can only delet your article")
                });
        },
    },

}
</script>
