<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <alphabet :cities="cities" @change="handleLetterChange"></alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from "@/components/CityHeader"
import CitySearch from "@/components/CitySearch"
import CityList from "@/components/CityList"
import Alphabet from "@/components/Alphabet"
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alphabet
  },
  data (){
    return {
      cities: {},
      hotCities: [],
      letter:'',
    }
  },
  methods:{
    getCityInfo () {
      axios.get('/js/city.json')
      .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res){
      res = res.data
      // console.log(res)
      if (res.ret){
        this.hotCities = res.hotcity
        this.cities = res.city
      }
    },
    handleLetterChange(letter){   
      this.letter = letter
  }

  },
  mounted () {
    this.getCityInfo();
  }

};
</script>
<style scoped>

</style>