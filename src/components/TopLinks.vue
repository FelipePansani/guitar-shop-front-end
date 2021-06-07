<template>
  <div>
    <div class="top-links">
      <i v-show="true" class="fas fa-map-marker-alt"
        ><a :href="`../../${Category}`"
          ><h5>
            {{ Category.charAt(0).toUpperCase() + Category.substring(1) }}
          </h5></a
        ></i
      >
      <i v-show="Brand !== undefined" class="fas fa-chevron-right"
        ><a :href="`../../${Category + '/' + lowerCaseBrand}`"
          ><h5>{{ Brand.charAt(0).toUpperCase() + Brand.substring(1) }}</h5></a
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
        this.Brand.charAt(0).toLowerCase() + this.Brand.substring(1),
    };
  },
};
</script>

<style scoped>
h5 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
  margin-left: 5px;
}

i {
  color: #42b983;
  margin-left: 5px;
}

.top-links {
  position: relative;
  margin: 10px 0px 30px 100px;
  height: 30px;
  margin-top: 0;
}

.top-links i,
h5 {
  display: inline-block;
}
</style>