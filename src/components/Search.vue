<template>
  <div class="comic-filter">
    <span class="icon"></span>
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Search"
      @input="filterComics"
      class="search-input"
      autofocus
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    filterComics() {
      this.$emit("filter", this.searchTerm);
    },
  },
};
</script>

<style>
.comic-filter {
  position: relative;
  margin: 40px 0 20px;
}

.icon {
  position: absolute;
  top: 40%;
  left: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-image: url("../assets/images/icons/search-icon.svg");
  background-size: cover;
}

.search-input {
  border: none;
  border-bottom: 2px solid var(--light-100);
  outline: none;
  padding-bottom: 5px;
  padding-left: 40px;
  transition: border-bottom-color 0.3s ease;
  background-color: transparent;
  height: 40px;
  width: 500px;
  font-size: 18px;
  color: var(--light-100);
  font-weight: 600;
  font-style: italic;
  text-transform: uppercase;
}

@media (max-width: 890px) {
  .search-input {
    width: 400px;
    font-size: 18px;
  }
}

@media (max-width: 640px) {
  .icon {
    width: 18px;
    height: 18px;
  }

  .search-input {
    width: 300px;
    font-size: 16px;
  }
}

@media (max-width: 390px) {
  .icon {
    width: 16px;
    height: 16px;
  }

  .search-input {
    width: 200px;
    font-size: 14px;
  }
}
</style>
