<template>
  <section class="section">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-9">
          <h1 class="title">
            <i class="fa fa-cube"></i>
            Users
          </h1>
        </div>

        <div class="column has-text-right">
          <router-link
            class="button is-primary"
            to="/users/new"
          >
            <i class="fa fa-fw fa-plus"></i>
            New User
          </router-link>
        </div>
      </div>

      <ListView :collection="paginatedItems" />

      <hr>

      <b-pagination
          :total="items.length"
          :current.sync="current"
          :order="order"
          :size="size"
          :simple="isSimple"
          :rounded="isRounded"
          :per-page="perPage"
          icon-pack="fa"
          aria-next-label="Next page"
          aria-previous-label="Previous page"
          aria-page-label="Page"
          aria-current-label="Current page">
      </b-pagination>

    </div>
  </section>
</template>

<!-- // // // //  -->

<script>
import { mapGetters } from 'vuex'
import ListView from '@/modules/user/components/UserList'

function paginate (array, page_size, page_number) {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}

export default {
  name: 'UserList',
  data() {
    return {
        total: 200,
        current: 1,
        perPage: 5,
        order: '',
        size: '',
        isSimple: false,
        isRounded: false
    }
  },
  components: {
    ListView
  },
  metaInfo: {
    title: 'Users'
  },
  computed: {
    ...mapGetters({
      items: 'user/collection/items'
    }),
    paginatedItems() {
      return paginate(this.items, this.perPage, this.current)
    }
  }
}
</script>
