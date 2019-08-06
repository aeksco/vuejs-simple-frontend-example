<template>
  <section class="section">
    <div class="container is-fluid">

      <UserDetail :model="model" />

      <hr>

      <b-tabs type='is-toggle'>

        <b-tab-item label="Tasks">
          <RelatedTasksList :user_id="model.id" />
        </b-tab-item>
      </b-tabs>
    </div>
  </section>
</template>

<!-- // // // //  -->

<script>
import UserDetail from '@/modules/user/components/UserDetail'

import RelatedTasksList from '@/modules/user/components/RelatedTasksList'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  name: 'user_show',
  metaInfo: {
    title: 'Users - Show'
  },
  components: {
    RelatedTasksList,
    UserDetail
  },
  computed: {
    model () {
      return this.$store.getters['user/collection/items'].find(user => user.id === this.id)
    }
  }
}
</script>
