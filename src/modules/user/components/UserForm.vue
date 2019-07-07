<template>
  <div class='columns is-multiline is-mobile'>
    <div class='column is-half'>

      <b-field
        id="fieldset-email"
        label="E-Mail"
        message="The E-Mail address associated with this User"
      >

        <b-input
          trim
          id="email-input"
          :required="true"
          placeholder="E-Mail"
          v-model="model.email"
        />
      </b-field>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>

export default {
  name: 'UserForm',
  props: {
    model: {
      required: true
    }
  },
  computed: {
  }
}
</script>
