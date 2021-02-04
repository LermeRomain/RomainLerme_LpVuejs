<template>
  <div class="ourteam container" id="ourteam">

    <div class="ourteam_wrapper">

      <div class="team1 row container" id="team">

        <div class="team_members col-md-3 text-center" data-name="Truc 1"><img v-bind:src="require('')" alt="Team_Images" />
          <h5 class="sub_title">Danseur 1</h5>
        </div>

        <div class="team_members col-md-3 text-center" data-name="Machin 2"><img v-bind:src="require('')" alt="Team_Images" />
          <h5 class="sub_title">Danseur 2</h5>
        </div>

        <div class="team_members col-md-3 text-center" data-name="Chose 3"><img v-bind:src="require('')" alt="Team_Images" />
          <h5 class="sub_title">Danseur 3</h5>
        </div>

        <div class="team_members col-md-3 text-center" data-name="Chose 4"><img v-bind:src="require('')" alt="Team_Images" />
          <h5 class="sub_title">Les autres</h5>
        </div>
      </div>
    </div>
  </div>


</template>


<script>
export default {
    name:'Team'
}

</script>


<style scoped>


#ourteam {
  padding-bottom: 70px;
  padding-top: 70px;
}

img {
  width: 60%;
}

h5 {
  margin: 7px;
  font-size: 14px;
  font-weight: bold;
}

p {
  font-size: 12px;
  font-weight: lighter;
}

.fas {
  font-size: 50px;
}

.ourteam_wrapper .team_members:hover img{
  transform: scale(1.1);
}

</style>
