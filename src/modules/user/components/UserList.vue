<template>
  <table class="table is-fullwidth is-bordered is-striped">

    <!-- Table Header -->
    <thead>
      <th>
        E-Mail
        <b-tooltip
          label="The E-Mail address associated with this User"
          position="is-right"
        >
          <i class="fa fa-fw fa-question-circle"></i>
        </b-tooltip>
      </th>
      <th></th>
    </thead>

    <!-- Table Body -->
    <tbody>

      <!-- Empty Table Row -->
      <tr class='table-warning' v-if="!collection[0]">
        <td>No Users Available</td>
        <td></td>
      </tr>

      <UserListItem v-for="m in collection" :key="m.id" :model="m" />
    </tbody>

  </table>
</template>

<!-- // // // //  -->

<script>
import UserListItem from './UserListItem'

export default {
  props: {
    collection: {
      required: true
    }
  },
  components: {
    UserListItem
  }
}
</script>
