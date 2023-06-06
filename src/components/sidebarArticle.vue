<template>
    <div class="d-none col-lg-2 blue d-lg-flex flex-column ">
        <div>
            <h5 class="p-3">post</h5>
            <div class="d-flex flex-column">
                <router-link to="/allPost" class="sidebar-items py-1 text-white ps-4">All Articles</router-link>
                <router-link to="newArticlePage" class="sidebar-items py-1 text-white ps-4">New Articles</router-link>
            </div>
        </div>
    </div>
    <div class="offcanvas offcanvas-start blue w-50 flex-column" tabindex="-1" id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel">
        <div>
            <h5 class="p-3">post</h5>
            <div class="d-flex flex-column">
                <router-link to="/" class="sidebar-items py-1 text-white ps-4">All Articles</router-link>
                <router-link to="newArticlePage" class="sidebar-items py-1 text-white ps-4">New Articles</router-link>
            </div>
        </div>
    </div> 

</template>