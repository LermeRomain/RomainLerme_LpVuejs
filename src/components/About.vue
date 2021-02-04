<template>
    <div className="us container-fluid"  id="about">
      <div class="container">
        <div class="row">
          <div class="col-md-6">

            <h1>À propos de <span>NOUS ?</span></h1>
            <p> coucou c'est nous les mecs de CT</p>
            <audio controls preload="auto" autoplay="autoplay">
              <source src="../assets/coffin-dance-official-music-video-hd.mp3"
                      type="audio/mpeg">
            </audio>

            <button class="btn btn-dark" type="button" >Notre instagram</button>

          </div>

          <div class="col-md-6 text-center">
            <img v-bind:src="require('../assets/dance.jpg')" width="450" alt="service-image" />
          </div>

        </div>
      </div>
		</div>
</template>


<script>
export default {
	name:'About',
}

</script>



<style scoped>

/* About */

#about {
  padding-top: 70px;
  padding-bottom: 70px;
}
h1 {
  font-size: 40px;
}

span {
  font-weight: bold;
  color: #FECF98;
  text-transform: uppercase;
}

.btn {
  display: flex;
  margin-top: 25px;
}

.btn:hover {
  transform: scale(1.1);
}

img{
  width: 100%;
}


@media screen and (max-width: 1300px){
  img {
    padding-top: 100px;
  }
}
</style>
