<template>
  <section class="section">
    <form class="container is-fluid"  @submit="createModel">

      <h2 class='title'>User - New</h2>

      <hr>

      <UserForm :model="model" />

      <hr>

      <div class="buttons is-right">
        <button class="button is-primary" type="submit">
          <i class="fa fa-fw fa-plus"></i>
          Create User
        </button>

        <button class="button is-light" @click="$router.go(-1)">
          <i class="fa fa-fw fa-times"></i>
          Cancel
        </button>
      </div>

    </form>
  </section>
</template>

<!-- // // // //  -->

<script>
import UserForm from '@/modules/user/components/UserForm'

export default {
  name: 'UserNewPage',
  metaInfo: {
    title: 'User - New'
  },
  components: {
    UserForm
  },
  created () {
    this.resetForm()
  },
  data () {
    const model = this.$store.getters['user/collection/newModel']
    return { model }
  },
  methods: {
    createModel (e) {
      e.preventDefault()
      this.$store.commit('user/collection/newModel', this.model)
      this.$store.dispatch('user/collection/create')
      this.$router.go(-1)
    },
    resetForm () {
      this.$store.commit('user/collection/resetNewModel')
    }
  }
}
</script>
