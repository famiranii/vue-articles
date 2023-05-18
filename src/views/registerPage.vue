<template>
    <section class="vh-100 d-flex">
        <div style="width: 450px; height: 528px; background-color: #eceeef;margin:auto;">
            <form @submit.prevent="postInformation" class="card-body pt-35 px-20 text-start">

                <h3 class="text-center login-title display-4 fw-normal mb-30">Register</h3>

                <div class="form-outline mb-25">
                    <label class="form-label" for="typeEmailX-2">User</label>
                    <input v-model="username" type="text" id="typeEmailX-2" class="form-control form-control-mine" />
                </div>

                <div class="form-outline mb-25">
                    <label class="form-label" for="typeEmailX-2">Email</label>
                    <input v-model="email" type="email" id="typeEmailX-2" class="form-control form-control-mine" />
                </div>

                <div class="form-outline mb-21">
                    <label class="form-label" :class="{ 'text-danger': requireFeild }" for="typePasswordX-2">Password</label>
                    <input v-model="password" :class="{ 'border border-danger': requireFeild }" type="password" id="typePasswordX-2" class="form-control form-control-mine" />
                    <div class="mt-1" style="height: 25px;">
                        <span class="text-danger" :class="{ 'd-none': !requireFeild }">Required field</span>
                    </div>
                </div>

                <button class="btn btn-sm py-2 mb-12 col-12 blue " type="submit">
                    <SPan>Register</SPan>
                </button>

                <div>
                    <small>Already Registered?<a>
                            <router-link class="fw-bold px-2 text-dark" to="/">Login</router-link>
                        </a></small>
                </div>
            </form>
        </div>
    </section>
</template>
<script>
import axios from 'axios'

export default {
    name: 'RegisterView',
    data() {
        return {
            email: '',
            password: '',
            username: '',
            requireFeild: false
        }
    },
    methods: {
        postInformation() {
            const userData = {
                user: {
                    email: this.email,
                    password: this.password,
                    username: this.username
                }
            }
            const userDataJson = JSON.stringify(userData)
            console.log(userDataJson);
            axios.post('https://api.realworld.io/api/users', userDataJson, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    const username = response.data.user.username;
                    this.requireFeild = false
                    this.$router.push('/allPosts')
                    this.$router.push({ path: '/allPosts', query: { username } })
                })
                .catch(error => {
                    this.requireFeild = true
                })
        }
    }
}
</script>

  
