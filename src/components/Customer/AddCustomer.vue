<template>
  <div>
    <h1>Add Customer</h1>
    <Editor :customer=customer />
  </div>
</template>

<script>
import Editor from '@/components/Customer/Editor.vue'
export default {
  components: {
    Editor
  },
  data () {
    return {
      customer: {}
    }
  }
}
</script>
