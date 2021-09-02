<template>
  <div class="all">
   
<nav class="d-flex py-1 justify-content-between col-12 px-4 py-3 ">
  <h4 class="page-head ml-5">Projections</h4>
   <a @click="sendInput" href="#calculator" class="btn btn--stroke btn--large px-4 py-2 mr-3">Run Simulation</a>
</nav>




   <div class="">
        <component
          :is="payment"
        />
      </div>

  </div>
</template>

<script>
export default {
data(){
  return{
    payment:"Simulate"
  }
},

methods:{
  sendInput(){
    this.payment="Input"
  }
}
}
</script>

<style scoped>
.btn--stroke,
button.btn--stroke {
  background: transparent !important;
  border: 0.2rem solid #fff;
  color: #fff;
}

.btn--stroke:hover,
button.btn--stroke:hover {
  background: #000000 !important;
  border: 0.2rem solid #000000;
  color: #ffffff;
}


*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

.all{
  background:#0A0912;
  height:100vh;
}


.display-card{
  background:#191931;
  height:25vh;
  border-radius:8px;
}

.page-head{
  color:#F9861A;
}
</style>