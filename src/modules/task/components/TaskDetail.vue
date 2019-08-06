<template>
  <div class="card">
    <div class="card-content">

      <div class="columns">

        <div class="column is-9">
          <h1 class="title">
            <i class="fa fa-cube"></i>
            Task Detail
          </h1>
        </div>

        <div class="column">
          <div class="buttons is-right">
            <router-link class="button is-warning" :to="`/tasks/${model.id}/edit`">
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
            <td>Title</td>
            <td>{{model.title}}</td>
          </tr>
          <tr>
            <td>Done</td>
            <td>
              <span>
                <i class="fas fa-fw fa-check-square" v-if="model.done"></i>
                <i class="fa fa-fw fa-square-o" v-if="!model.done"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>Assignee</td>
            <td v-if="model.assignee_id">
              <router-link :to="'/users/' + model.assignee_id">
                {{assignee.email}}
              </router-link>
            </td>
            <td v-else>N/A</td>
          </tr>
        </tbody>

      </table>

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>

export default {
  name: 'TaskDetail',
  props: {
    model: {
      required: true
    }
  },
  computed: {
    assignee () {
      return this.$store.getters['user/collection/items'].find(m => m.id === this.model.assignee_id)
    }
  },
  methods: {
    confirmDestroy () {
      this.$dialog.confirm({
        title: 'Deleting Task',
        message: 'Are you sure you want to <b>delete</b> this Task? This action cannot be undone.',
        confirmText: 'Delete Task',
        type: 'is-danger',
        onConfirm: () => {
          this.$router.replace('/tasks')
          this.$store.dispatch('task/collection/destroy', this.model.id)
          this.$toast.open('Task deleted!')
        }
      })
    }
  }
}
</script>
