<template>
  <div class="card">
    <div class="card-content">

      <div class="columns">

        <div class="column is-9">
          <h1 class="title">
            <i class="fa fa-cube"></i>
            User Detail
          </h1>
        </div>

        <div class="column">
          <div class="buttons is-right">
            <router-link class="button is-warning" :to="`/users/${model.id}/edit`">
              <i class="far fa-fw fa-edit"></i>
              Edit
            </router-link>

            <button class="button is-danger" @click="confirmDestroy()">
              <i class="far fa-fw fa-trash-alt"></i>
              Delete
            </button>

          </div>
        </div>

      </div>

      <table class="table is-fullwidth is-bordered is-striped">

        <!-- Table Header -->
        <tbody>
          <tr>
            <td>E-Mail</td>
            <td>{{model.email}}</td>
          </tr>
        </tbody>

      </table>

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>

export default {
  name: 'UserDetail',
  props: {
    model: {
      required: true
    }
  },
  computed: {
  },
  methods: {
    confirmDestroy () {
      this.$dialog.confirm({
        title: 'Deleting User',
        message: 'Are you sure you want to <b>delete</b> this User? This action cannot be undone.',
        confirmText: 'Delete User',
        type: 'is-danger',
        onConfirm: () => {
          this.$router.go(-1)
          this.$store.dispatch('user/collection/destroy', this.model.id)
          this.$toast.open('User deleted!')
        }
      })
    }
  }
}
</script>
