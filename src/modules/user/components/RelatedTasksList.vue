
<template>
  <table class="table is-fullwidth is-bordered is-striped">

    <!-- Table Header -->
    <thead>
      <th>
        Title
        <b-tooltip
          label="Describe the Task"
          position="is-right"
        >
          <i class="fa fa-fw fa-question-circle"></i>
        </b-tooltip>
      </th>
      <th>
        Done
        <b-tooltip
          label="Whether or not the Task is done"
          position="is-right"
        >
          <i class="fa fa-fw fa-question-circle"></i>
        </b-tooltip>
      </th>
      <th>Assignee</th>
      <th></th>
    </thead>

    <!-- Table Body -->
    <tbody>

      <!-- Empty Table Row -->
      <tr class='table-warning' v-if="!collection[0]">
        <td>No Tasks Available</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <RelatedTaskListItem v-for="m in collection" :model="m" :key="m.id" />

    </tbody>

  </table>
</template>

<script>
import RelatedTaskListItem from './RelatedTaskListItem'

export default {
  props: {
    user_id: {
      type: String,
      required: true
    }
  },
  components: {
    RelatedTaskListItem
  },
  computed: {
    collection () {
      return this.$store.getters['task/collection/items']
      .filter(s => s.assignee_id === this.user_id)
    },
  }
}
</script>
