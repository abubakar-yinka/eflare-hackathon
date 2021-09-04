<template>
  <div>
      <div class="d-flex col-12  justify-content-around mt-4">


<div style="color:#fff;" class="display-card col-3 shadow d-flex justify-content-center align-items-center flex-column">
  <!-- <font-awesome-icon icon="user-secret" /> -->
  <!-- <font-awesome-icon icon="dollar-sign"  style="font-size: 30px"/> -->

<h6>Revenue</h6>
 <p><span>$</span> <span style="font-size:3rem;">3000</span></p> 
</div>

<div class="display-card col-3 d-flex justify-content-center align-items-center flex-column">
<h6>Estimated Output</h6>
 <p> <span style="font-size:3rem;">3000</span><span>mscf</span></p> 

</div>

<div class="display-card col-3 d-flex justify-content-center align-items-center flex-column">
<h6>Feasibility Score</h6>
 <p> <span style="font-size:3rem;">9</span></p> 

</div>






</div>

<div class="chart shadow">
    <Chart/>
</div>
  </div>
</template>

<script>
export default {

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
  color:#fff;
}

.page-head{
  color:#fff;
}

.chart{
    margin-top:10vh;
}
</style>