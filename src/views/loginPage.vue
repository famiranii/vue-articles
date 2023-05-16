<template>
    <section class="vh-100 d-flex">
        <div class="login-container">
            <form @submit.prevent="postInformation" class="card-body pt-35 px-20 text-start">

                <h3 class="login-title text-center display-4 fw-normal mb-25">LOGIN</h3>

                <div class="form-outline mb-25">
                    <label class="form-label" for="typeEmailX-2">Email</label>
                    <input v-model="email" type="email" id="typeEmailX-2" class="form-control form-control-mine" />
                </div>

                <div class="form-outline mb-25">
                    <label class="form-label" for="typePasswordX-2">Password</label>
                    <input v-model="password" type="password" id="typePasswordX-2" class="form-control form-control-mine" />
                    <div class="mt-1" style="height: 25px;">
                        <span class="text-danger" :class="{ 'd-none': !requireFeild }">Required field</span>
                    </div>
                </div>

                <button class="btn btn-sm py-2 mb-12 col-12 blue " type="submit">
                    <SPan>Login</SPan>
                </button>

                <div>
                    <small>Don’t have account?
                        <router-link class="fw-bold px-2 text-dark" to="/registerPage">Register Now</router-link>
                    </small>
                </div>
            </form>
        </div>
    </section>
</template>
  
<script>
// @ is an alias to /src
import axios from 'axios'



export default {
    name: 'HomeView',
    props: {
        myusername: ""
    },
    data() {
        return {
            email: '',
            password: '',
            requireFeild: false,
        }
    },
    methods: {
        postInformation() {
            const userData = {
                user: {
                    email: this.email,
                    password: this.password
                }
            }
            const userDataJson = JSON.stringify(userData)
            console.log(userDataJson);
            axios.post('https://api.realworld.io/api/users/login', userDataJson, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )
                .then(response => {
                    const username = response.data.user.username;
                    const token = response.data.user.token;
                    console.log(token);
                    localStorage.setItem('username', username);
                    localStorage.setItem('token', token);
                    this.requireFeild = false
                    this.$router.push("./")
                })
                .catch(error => {
                    this.requireFeild = true
                });
        },
    }
}
</script>
  