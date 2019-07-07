<template>
  <tr>
    <td>
      <router-link :to=" '/users/' + model.id ">
        {{ model.email }}
      </router-link>
    </td>

    <td class="has-text-right">

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

        <b-dropdown-item aria-role="menuitem" @click="confirmDestroy()">
          <i class="far fa-fw fa-trash-alt"></i>
          Delete
        </b-dropdown-item>
      </b-dropdown>

    </td>

  </tr>
</template>

<!-- // // // //  -->

<script>
export default {
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
          this.$store.dispatch('user/collection/destroy', this.model.id)
          this.$toast.open('User deleted!')
        }
      })
    }
  }
}
</script>
