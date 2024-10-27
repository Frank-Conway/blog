<script setup>
import { ref } from 'vue';

const isLogin = ref(true);
const username = ref('');
const email = ref('');
const password = ref('');

function toggleForm() {
  isLogin.value = !isLogin.value;
}

function login() {
  // 在这里添加登录逻辑
  console.log('Logging in with:', email.value, password.value);
}

function register() {
  // 在这里添加注册逻辑
  console.log('Registering with:', username.value, email.value, password.value);
}
</script>

<template>
  <div class="auth-container">
    <div class="background-animation"></div>
    <div class="auth-box">
      <h2>{{ isLogin ? 'Login' : 'Register' }}</h2>
      <form @submit.prevent="isLogin ? login() : register()">
        <div v-if="!isLogin" class="input-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
          <span class="focus-border"></span>
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
          <span class="focus-border"></span>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
          <span class="focus-border"></span>
        </div>
        <button type="submit" class="submit-btn">{{ isLogin ? 'Login' : 'Register' }}</button>
      </form>
      <p @click="toggleForm" class="toggle-link">{{ isLogin ? 'Don\'t have an account? Register here' : 'Already have an account? Login here' }}</p>
    </div>
  </div>
</template>

<style>
body {
  font-family: 'Open Sans', sans-serif;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.auth-container {
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

.auth-container h2 {
  font-size: 28px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 30px;
}

.input-group {
  position: relative; /* For .focus-border absolute positioning */
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #666666;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.input-group input:focus {
  border-color: #28a745;
  outline: none;
}

.focus-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #28a745;
  transition: width 0.3s ease;
}

.input-group input:focus + .focus-border {
  width: 100%;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #218838;
}

.auth-container p {
  font-size: 14px;
  color: #666666;
  margin-top: 20px;
}

.auth-container p a {
  color: #28a745;
  text-decoration: none;
  transition: color 0.3s ease;
}

.auth-container p a:hover {
  color: #218838;
}
</style>

