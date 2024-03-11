<template>
  <div class="comics">
    <section class="informations-comics">
      <h1>Marvel Comics</h1>
      <p class="informations-text">
        Take a look at the vast collection of comics and fall in love with the
        stories!
      </p>

      <Search @input="handleInput" @filter="filterComics" />

      <div class="card-container">
        <div class="card" v-for="comic in comics" :key="comic.id">
          <router-link
            :to="{ name: 'comic', params: { id: comic.id } }"
            class="comic-card"
          >
            <img
              :src="
                comic.thumbnail.path +
                '/' +
                size +
                '.' +
                comic.thumbnail.extension
              "
              :alt="comic.title"
            />
            <p>
              {{ comic.title }}
            </p>
          </router-link>
        </div>
      </div>
      <div class="pagination-buttons">
        <button
          @click="previousPage"
          :class="{ enabled: currentPage > 1, disabled: currentPage === 1 }"
          class="pg-buttons"
        >
          Previous
        </button>
        <p>
          Page <span>{{ currentPage }}</span> of <span>{{ totalPages }}</span>
        </p>
        <button
          @click="nextPage"
          :class="{
            enabled: currentPage < totalPages,
            disabled: currentPage === totalPages,
          }"
          class="pg-buttons"
        >
          Next
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import Search from "./Search.vue";
const public_key = import.meta.env.VITE_PUBLIC_KEY;
import axios from "axios";
import api from '@/service/api';

export default {
  name: "Comics",

  components: {
    Search,
  },

  data() {
    return {
      comics: [],
      size: "portrait_incredible",
      currentPage: 1,
      pageSize: 20,
      totalComics: 0,
      totalPages: 0,
    };
  },

  mounted() {
    this.getComics();
  },

  methods: {
    getComics: function () {
      const offset = (this.currentPage - 1) * this.pageSize;
      const limit = this.pageSize;

      axios
        api.get(
          `/comics?apikey=${public_key}&offset=${offset}&limit=${limit}`
        )
        .then((result) => {
          this.comics = result.data.data.results.map((item) => ({
            ...item,
            thumbnail: {
              ...item.thumbnail,
              url: `${item.thumbnail.path}/${this.size}.${item.thumbnail.extension}`,
            },
          }));
          this.totalComics = result.data.data.total;
          this.totalPages = Math.ceil(this.totalComics / this.pageSize);
          this.scrollToTop();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleInput(searchTerm) {
      if (!searchTerm.trim()) {
        this.getComics();
      }
    },

    filterComics(searchTerm) {
      if (searchTerm.trim() === "") {
        this.getComics();
      } else {
        this.currentPage = 1;
        this.comics = this.comics.filter((comic) =>
          comic.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        this.totalComics = this.comics.length;
        this.totalPages = Math.ceil(this.totalComics / this.pageSize);
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.getComics();
      }
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getComics();
      }
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.comics {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-image: linear-gradient(
      to bottom,
      rgb(0, 0, 0, 1) 0%,
      rgb(19, 19, 19, 0.7) 50%,
      rgba(0, 0, 0, 0.8) 80%,
      rgb(0, 0, 0, 1) 100%
    ),
    url("@/assets/images/img/background-comics.svg");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: Roboto;
}

.informations-comics {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  color: var(--light-100);
  margin: 52px 90px;
}

.informations-comics h1 {
  font-size: 56px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -5px;
  font-family: "Roboto";
  margin-top: 92px;
}

.informations-text {
  font-weight: 400;
  margin-top: 20px;
  font-size: 18px;
  line-height: 30px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
  grid-gap: 40px;
  margin-top: 40px;
}

.card {
  text-align: left;
  background-color: var(--dark-200);
  border: 2px solid var(--red);
  max-width: 216px;
  height: auto;
}

.comic-card {
  text-decoration: none;
  color: var(--ligth100);
  font-family: "Roboto";
  font-size: 18px;
}

.comic-card p {
  margin: 0.5rem;
}

.pagination-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 52px;
  padding-bottom: 164px;
}

.pg-buttons,
.enabled {
  background-color: var(--red);
  color: var(--light-100);
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 4px;
  border: 2px solid var(--dark-red);
  font-family: "Roboto";
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.disabled {
  background-color: var(--dark-red);
  cursor: not-allowed;
}

.pg-buttons:hover {
  background-color: var(--dark-red);
}

.pagination-buttons span {
  font-weight: bold;
}

@media (max-width: 890px) {
  .informations-comics {
    margin: 52px 60px;
  }

  .informations-comics h1 {
    font-size: 42px;
    margin-top: 92px;
  }

  .informations-text {
    font-size: 16px;
    max-width: 720px;
  }
}

@media (max-width: 640px) {
  .informations-comics {
    margin: 52px 40px;
  }

  .informations-comics h1 {
    font-size: 32px;
  }

  .informations-text {
    font-size: 14px;
    max-width: 520px;
  }
}
</style>
