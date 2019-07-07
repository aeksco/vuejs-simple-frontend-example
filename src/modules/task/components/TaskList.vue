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

      <TaskListItem v-for="m in collection" :key="m.id" :model="m" />
    </tbody>

  </table>
</template>

<!-- // // // //  -->

<script>
import TaskListItem from './TaskListItem'

export default {
  props: {
    collection: {
      required: true
    }
  },
  components: {
    TaskListItem
  }
}
</script>
