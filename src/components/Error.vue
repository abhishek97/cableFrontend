<template>
    <div>
      <h1> Error </h1>
      <p> Please report the following message to the site admin. </p>
      <hr noshade>
      <pre>
        {{error}}
      </pre>
    </div>
</template>
<script>
export default {
  name: 'ErrorComponent',
  computed: {
    error () {
      return this.$store.state.error
    }
  }
}
</script>
