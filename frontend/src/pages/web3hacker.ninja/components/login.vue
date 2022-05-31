<template>
  <form class="flex flex-center row" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">
        Supabase + Vue 3
      </h1>
      <p class="description">
        Sign in via magic link with your email below
      </p>
      <div>
        <input
          v-model="email"
          class="inputField"
          type="email"
          placeholder="Your email"
        >
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Send magic link'"
          :disabled="loading"
        >
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
const loading = ref(false)
const email = ref('')
const supabase = inject('supabase')

const handleLogin = async() => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signIn({ email: email.value })
    if (error) throw error
    window.alert('Check your email for the login link!')
  }
  catch (error) {
    window.alert(error.error_description || error.message)
  }
  finally {
    loading.value = false
  }
}
</script>
