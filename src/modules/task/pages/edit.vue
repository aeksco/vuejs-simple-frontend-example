<template>
  <section class="section">
    <form class="container is-fluid" @submit="updateModel">

      <h2 class='title'>Task - Edit</h2>

      <hr>

      <TaskForm :model="model" />

      <hr>

      <div class="buttons is-right">
        <button class="button is-primary" type="submit">
          <i class="fa fa-fw fa-plus"></i>
          Update Task
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
    title: 'Task - Edit'
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  components: {
    TaskForm
  },
  created () {
    this.resetForm()
  },
  data () {
    const selected = this.$store.getters['task/collection/items'].find(m => m.id === this.id)
    const model = Object.assign({}, selected)
    return { model }
  },
  methods: {
    updateModel (e) {
      e.preventDefault()
      this.$store.commit('task/collection/editModel', this.model)
      this.$store.dispatch('task/collection/update')
      this.$router.go(-1)
    },
    resetForm () {
      this.$store.commit('task/collection/resetNewModel')
    }
  }
}
</script>
