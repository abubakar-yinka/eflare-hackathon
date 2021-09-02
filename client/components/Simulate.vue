<template>
  <div>
      <div class="d-flex col-12  justify-content-around mt-4">


<div class="display-card col-2 shadow">

</div>

<div class="display-card col-2">

</div>

<div class="display-card col-2">

</div>

<div class=" col-3">

  <div style="height:12vh;" class="display-card col-12">

</div>

<div style="height:12vh;" class="display-card col-12 mt-2">

</div>

</div>




</div>

<Chart/>
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
}

.page-head{
  color:#fff;
}
</style>