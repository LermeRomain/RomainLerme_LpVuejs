<template>
  <div class="navbar container-fluid" id="nav">
    <div class="container">
      <div class="navbar_items">
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#video">Video</a></li>
          <li><a href="#newsletter">Newsletter</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
export default {
    name:'Header'

}

</script>



<style scoped>


.navbar container-fluid{
  background-color: #FECF98;
}
.navbar{
  font-family: 'Roboto', sans-serif;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
}


.navbar_items ul{
  display: flex;
}

.navbar_items ul li{
  margin: 0 10px;
  padding-top: 10px;
}

.navbar_items ul li a{
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  color: #fff;
  padding: 5px;
}

.navbar_items ul li a:hover {
  text-decoration: none;
  color: black;
}
</style>
