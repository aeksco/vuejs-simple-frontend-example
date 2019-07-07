<template>
  <tr>
    <td>{{model.title}}</td>
    <td>
      <span>
        <i class="fas fa-fw fa-check-square" v-if="model.done"></i>
        <i class="fa fa-fw fa-square-o" v-if="!model.done"></i>
      </span>
    </td>
    <td v-if="model.assignee_id && assignee">
      <router-link :to="'/users/' + model.assignee_id">
        {{ assignee.email }}
      </router-link>
    </td>
    <td v-else></td>

    <td class="has-text-right">

      <b-dropdown aria-role="list" position="is-bottom-left">
        <button class="button is-dark is-small" slot="trigger">
          <i class="fa fa-caret-down"></i>
        </button>

        <b-dropdown-item has-link aria-role="menuitem">
          <router-link :to="`/tasks/${model.id}`">
            <i class="fa fa-fw fa-eye"></i>
            View
          </router-link>
        </b-dropdown-item>

        <b-dropdown-item has-link aria-role="menuitem">
          <router-link :to="`/tasks/${model.id}/edit`">
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
          this.$store.dispatch('task/collection/destroy', this.model.id)
          this.$toast.open('Task deleted!')
        }
      })
    }
  }
}
</script>
