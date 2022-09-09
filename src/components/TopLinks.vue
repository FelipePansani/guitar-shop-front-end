<template>
  <div>
    <div class="main">
      <i v-show="true" class="fas fa-map-marker-alt"
        ><a :href="`../../${Category}`"
          ><h5>
            {{ Category.charAt(0).toUpperCase() + Category.substring(1) }}
          </h5>
        </a>
        </i>
      <i v-show="Brand !== undefined" class="fas fa-chevron-right"
        ><a :href="`../../${Category + '/' + lowerCaseBrand}`">
          <h5>{{ Brand.charAt(0).toUpperCase() + Brand.substring(1) }}</h5></a
        ></i
      >
      <i v-show="Item !== undefined" class="fas fa-chevron-right"
        ><h5>{{ Item }}</h5></i
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["Category", "Brand", "Item"],
  data() {
    return {
      lowerCaseBrand:
        //this.Brand.charAt(0).toLowerCase() + this.Brand.substring(1),
        this.Brand.toLowerCase(),
      }
    ;
  },
};
</script>

<style scoped>
.main {
  margin: 2rem;
}

h5 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
  margin: 0 5px 0 5px;
}

i {
  color: #42b983;
  margin: 0 5px 0 5px;
}

i,
h5 {
  display: inline-block;
}

@media screen and (max-width: 40rem) {
  .top-links {
    margin: 0;
    font-size: 12px;
  }
}
</style>