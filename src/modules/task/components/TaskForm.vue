<template>
  <div class='columns is-multiline is-mobile'>
    <div class='column is-half'>

      <b-field
        id="fieldset-title"
        label="Title"
        message="Describe the Task"
      >

        <b-input
          trim
          id="title-input"
          :required="true"
          placeholder="Title"
          v-model="model.title"
        />
      </b-field>
    </div>

    <div class='column is-half'>

      <b-field
        id="fieldset-done"
        label="Done"
        message="Whether or not the Task is done"
      >

        <b-switch v-model="model.done" />
      </b-field>
    </div>

    <div class="column is-half">
      <b-field
        id="fieldset-assignee"
        label="Assignee"
        message="The related Assignee"
      >
        <b-select
          expanded
          placeholder="Assignee"
          v-model="model.assignee_id"
        >
          <option disabled selected value> -- Assignees -- </option>
          <option
            :value="user.id"
            v-for="user in assignees"
            :key="user.id"
          >
            {{ user.email }}
          </option>
        </b-select>
      </b-field>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>

export default {
  name: 'TaskForm',
  props: {
    model: {
      required: true
    }
  },
  computed: {
    assignees () {
      return this.$store.getters['user/collection/items']
    }
  }
}
</script>
