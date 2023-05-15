<template>
    <div class="d-none col-md-2 blue h-100 d-md-flex flex-column ">
        <div>
            <h5 class="p-3">post</h5>
            <div class="d-flex flex-column">
                <router-link to="allPosts" class="sidebar-items py-1 text-white ps-4">All Articles</router-link>
                <router-link to="newArticlePage" class="sidebar-items py-1 text-white ps-4">New Articles</router-link>
            </div>
        </div>
    </div>
    <div class="offcanvas offcanvas-start blue w-50 h-100 flex-column" tabindex="-1" id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel">
        <div>
            <h5 class="p-3">post</h5>
            <div class="d-flex flex-column">
                <a href="all-articles.html" class="sidebar-items py-1 text-white ps-4">All Articles</a>
                <a href="new-article.html" class="sidebar-items py-1 text-white ps-4">New Articles</a>
            </div>
        </div>
    </div> 

</template>