<template>
  <div>
    <div class="row">
      <div class="col-md-5">
        <router-link to="/stbs/create">
          <button type="button" class="btn btn-primary btn-lg">+ Add </button>
        </router-link>
        <router-link to="/stbs/return">
          <button type="button" class="btn btn-danger btn-lg">+ Return/Re-assign STB </button>
        </router-link>
      </div>
    </div>
    <!-- 
    <div class="loadingContainer text-center">
          <sync-loader :loading="isLoading"></sync-loader>
    </div>
    <hr noshade>
  <CustomerView :customers=customers v-if="isNotLoading"></CustomerView>
  -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false
    }
  }
}
</script>
