<template>
    <div class="body-container vh-100">
        <responsive-header></responsive-header>
        <section class="h-100 d-flex">
            <sideBar></sideBar>
            <div class="form-articles col-12 col-md-10">
                <h2>New Article</h2>
               <newArticleForm></newArticleForm>
            </div>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
import responsiveHeader from '@/components/responsiveHeader.vue'
import sideBar from '@/components/sidebarArticle.vue'
import newArticleForm from './component/newArticleForm.vue'

export default {
    name: 'HomeView',
    components: {
    responsiveHeader,
    sideBar,
    newArticleForm
}
}
</script>