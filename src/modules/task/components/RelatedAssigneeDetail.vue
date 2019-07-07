<template>
  <table class="table is-fullwidth is-bordered is-striped">
    <thead>
      <th>E-Mail</th>
      <th/>

    </thead>
    <tbody>
      <tr>
        <td>{{model.email}}</td>

        <td class='has-text-right'>
          <b-dropdown aria-role="list" position="is-bottom-left">
            <button class="button is-dark is-small" slot="trigger">
              <i class="fa fa-caret-down"></i>
            </button>

            <b-dropdown-item has-link aria-role="menuitem">
              <router-link :to="`/users/${model.id}`">
                <i class="fa fa-fw fa-eye"></i>
                View
              </router-link>
            </b-dropdown-item>

            <b-dropdown-item has-link aria-role="menuitem">
              <router-link :to="`/users/${model.id}/edit`">
                <i class="far fa-fw fa-edit"></i>
                Edit
              </router-link>
            </b-dropdown-item>
          </b-dropdown>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    model () {
      return this.$store.getters['user/collection/items']
      .find(s => s.id  === this.id)
    },
  }
}
</script>
