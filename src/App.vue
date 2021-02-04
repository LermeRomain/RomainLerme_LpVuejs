<template>

  <section id="content">
    <Header />
    <Banner />
    <About />
    <Services />
    <Video />
    <login />
    <Footer />
    <Arrow />
  </section>

</template>

<script>
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Video from './components/Video'
import Footer from './components/Footer'
import Arrow from './components/Arrow'
import Login from "./components/login";


export default {
  name: 'App',
  components:{
    Video,
    Login,
    Header,
    Banner,
    About,
    Services,
    Footer,
    Arrow
  }
}

</script>



<style>

*{
  margin: 0;
	padding: 0;
	box-sizing: border-box;
	outline: none;
	list-style: none;
	text-decoration: none;
	scroll-behavior: smooth;
  font-family: 'Ubuntu', sans-serif;
}

</style>
