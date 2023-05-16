<template>
    <header class="p-3 header-article">
        <div>
            <div class="d-flex">
                <button type="button" class="navbar-toggler btn blue me-auto px-4 d-lg-none" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">post</button>
                <div class=" d-lg-flex align-items-center">
                    <h1 class="text-22 pe-3 text-white">
                        Arvan Challenge
                    </h1>

                    <span>
                        {{ username }}
                    </span>
                </div>

                <button type="button" class="btn btn-outline-info ms-auto me-2" @click="handleLogout">Logout</button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            username :''
        }
    },
    created() {
        const savedUsername = localStorage.getItem('username');
        this.username = savedUsername

    },

    methods: {
        handleLogout() {
            localStorage.clear()
            window.location.reload();
        }
    },
}
</script>