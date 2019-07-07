<template>
  <section class="section">
    <form class="container is-fluid" @submit="updateModel">

      <h2 class='title'>User - Edit</h2>

      <hr>

      <UserForm :model="model" />

      <hr>

      <div class="buttons is-right">
        <button class="button is-primary" type="submit">
          <i class="fa fa-fw fa-plus"></i>
          Update User
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
    title: 'User - Edit'
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  components: {
    UserForm
  },
  created () {
    this.resetForm()
  },
  data () {
    const selected = this.$store.getters['user/collection/items'].find(m => m.id === this.id)
    const model = Object.assign({}, selected)
    return { model }
  },
  methods: {
    updateModel (e) {
      e.preventDefault()
      this.$store.commit('user/collection/editModel', this.model)
      this.$store.dispatch('user/collection/update')
      this.$router.go(-1)
    },
    resetForm () {
      this.$store.commit('user/collection/resetNewModel')
    }
  }
}
</script>
