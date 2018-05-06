<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <td>#</td>
          <td>STB-ID</td>
          <td>Vc No</td>
          <td>Agent Name</td>
          <td>Cable Network Name</td> 
          <td>Added By</td> 
          <td>Created At</td>
          <td> Actions </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(stb, index) in stbs" :key="stb.id">
          <td>{{index+1}}</td>
          <td>{{stb.id}}</td>
          <td>{{stb.vc_no}}</td>
          <td>{{stb.agent.name}}</td>
          <td>{{stb.cable_network.name}}</td> 
          <td>{{stb.createdBy.username}}</td> 
          <td>{{stb.createdAt}}</td>
          <td><slot :name=stb.id ></slot></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    stbs: {
      type: [Array, Object]
    }
  }
}
</script>

