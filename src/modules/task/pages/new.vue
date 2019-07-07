<template>
  <section class="section">
    <form class="container is-fluid"  @submit="createModel">

      <h2 class='title'>Task - New</h2>

      <hr>

      <TaskForm :model="model" />

      <hr>

      <div class="buttons is-right">
        <button class="button is-primary" type="submit">
          <i class="fa fa-fw fa-plus"></i>
          Create Task
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
import TaskForm from '@/modules/task/components/TaskForm'

export default {
  name: 'TaskNewPage',
  metaInfo: {
    title: 'Task - New'
  },
  components: {
    TaskForm
  },
  created () {
    this.resetForm()
  },
  data () {
    const model = this.$store.getters['task/collection/newModel']
    return { model }
  },
  methods: {
    createModel (e) {
      e.preventDefault()
      this.$store.commit('task/collection/newModel', this.model)
      this.$store.dispatch('task/collection/create')
      this.$router.go(-1)
    },
    resetForm () {
      this.$store.commit('task/collection/resetNewModel')
    }
  }
}
</script>
