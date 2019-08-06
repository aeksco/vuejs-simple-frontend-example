<template>
  <section class="section">
    <div class="container is-fluid">

      <TaskDetail :model="model" />

      <hr>

      <b-tabs type='is-toggle'>

        <b-tab-item label="Assignee" v-if="model.assignee_id">
          <RelatedAssigneeDetail :id="model.assignee_id"/>
        </b-tab-item>
      </b-tabs>
    </div>
  </section>
</template>

<!-- // // // //  -->

<script>
import TaskDetail from '@/modules/task/components/TaskDetail'
import RelatedAssigneeDetail from '@/modules/task/components/RelatedAssigneeDetail'


export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  name: 'task_show',
  metaInfo: {
    title: 'Tasks - Show'
  },
  components: {
    RelatedAssigneeDetail,
    TaskDetail
  },
  computed: {
    model () {
      return this.$store.getters['task/collection/items'].find(task => task.id === this.id)
    }
  }
}
</script>
