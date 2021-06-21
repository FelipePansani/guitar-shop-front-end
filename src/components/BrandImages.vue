<template>
  <div>
    <div v-for="item in images" :key="item.brand" >
      <router-link :to="`${Category}/` + item.brand.toLowerCase()" >
        <img :src="item.brandImage" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  data() {
    return {
      info: [],
      oneBrands: [],
      // Category: 'guitars',
      images: [
        {
          brand: "Fender",
          brandImage: "https://i.ibb.co/Z2qbvf8/Logo-Fender.jpg",
        },
        {
          brand: "Gibson",
          brandImage: "https://i.ibb.co/ZdMRcs1/Logo-Gibson.jpg",
        },
        {
          brand: "Gretsch",
          brandImage: "https://i.ibb.co/cTYjsdJ/Logo-Gretsch.jpg",
        },
        {
          brand: "Ibanez",
          brandImage: "https://i.ibb.co/MsL07Tp/Logo-Ibanez.jpg",
        },
        {
          brand: "PRS",
          brandImage: "https://i.ibb.co/pzbwyzB/Logo-PRS.jpg",
        },
        {
          brand: "Takamine",
          brandImage: "https://i.ibb.co/hYCSV7m/logo-takamine.jpg",
        },
        {
          brand: "Martin",
          brandImage: "https://i.ibb.co/HKPtmMw/Logo-Martin.jpg",
        },
        {
          brand: "Taylor",
          brandImage: "https://i.ibb.co/RvjNc9b/Logo-Taylor.jpg",
        },
        {
          brand: "Marshall",
          brandImage: "https://i.ibb.co/ZHSZqy1/Logo-Marshall.jpg",
        },
        {
          brand: "Orange",
          brandImage: "https://i.ibb.co/HVV3syR/Logo-Orange.jpg",
        },
        {
          brand: "Musicman",
          brandImage: "https://i.ibb.co/0y7y5vM/Logo-Music-Man.jpg",
        },
        {
          brand: "EVH",
          brandImage: "https://i.ibb.co/c1SB0XP/Logo-evh.jpg",
        },
        {
          brand: "allGuitars",
          brandImage: "https://i.ibb.co/yYmBZYF/all-guitars.png",
        },
        {
          brand: "allBasses",
          brandImage: "https://i.ibb.co/FBjzxSc/z-ver-todos-baixo.png",
        },
        {
          brand: "allAmps",
          brandImage: "https://i.ibb.co/vzpx7yc/ver-todos-ampli.png",
        },
        {
          brand: "allAcoustic",
          brandImage: "https://i.ibb.co/HPvKyzT/z-ver-todos-violao.png",
        },
      ],
    };
  },
  created() {},
};
</script>

<style>
</style>