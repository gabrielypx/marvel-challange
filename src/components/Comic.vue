<template>
  <div class="comic">
    <section class="informations-comic">
      <div v-for="com in comic" class="comic-container">
        <img :src="url" :alt="com.title" class="comic-img" />
      </div>
      <div v-for="com in comic" class="informations-text">
        <h1>{{ com.title }}</h1>
        <ul>
          <li>
            Series: <span>{{ com.series.name }}</span>
          </li>
          <li>
            Description: <br />
            <span>{{ com.description || "No description available" }}</span>
          </li>
        </ul>
        <div v-for="com in comic" class="informations-price">
          <h2>
            Price: <span>$ {{ getPrice(com) }}</span>
          </h2>

          <button @click="addToCart(com)" class="add-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
const public_key = import.meta.env.VITE_PUBLIC_KEY;
export default {
  name: "Comic",

  data() {
    return {
      comic: [],
      url: "",
      size: "portrait_uncanny.jpg",
    };
  },

  mounted() {
    this.getComic();
  },

  methods: {
    getComic: function () {
      let comicId = this.$route.params.id;
      axios
        .get(
          `http://gateway.marvel.com/v1/public/comics/${comicId}?apikey=${public_key}`
        )
        .then((result) => {
          result.data.data.results.forEach((item) => {
            console.log(item);
            this.comic.push(item);
            this.url = `${item.thumbnail.path}/${this.size}`;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getPrice(comic) {
      if (comic.prices && comic.prices.length > 0) {
        return comic.prices[0].price;
      } else {
        return "Price not available";
      }
    },

    addToCart(comic) {
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const existingComicIndex = cartItems.findIndex(
        (item) => item.id === comic.id
      );

      let price = this.getPrice(comic);
      let thumbnail = `${comic.thumbnail.path}/${this.size}`;

      if (existingComicIndex !== -1) {
        cartItems[existingComicIndex].quantity++;
      } else {
        cartItems.push({ ...comic, quantity: 1, price, thumbnail });
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
.comic {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(5, 5, 5, 0.911) 0%,
      rgba(34, 32, 32, 0.185) 50%,
      rgba(31, 31, 31, 0.192) 80%,
      rgba(10, 10, 10, 0.87) 100%
    ),
    url("@/assets/images/img/background-comic.svg");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: Roboto;
}

.informations-comic {
  display: flex;
  flex-direction: row;
  gap: 64px;
  color: var(--light-100);
  padding: 180px 40px 80px;
  margin: 0 auto;
}

.comic-img {
  box-shadow: -5px 10px 18px #111111;
}

.informations-text h1 {
  font-size: 52px;
  font-family: "Roboto Condensed";
  letter-spacing: -4px;
  font-weight: 900;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px #000000;
  max-width: 700px;
}

.informations-text ul {
  margin-top: 40px;
  list-style-type: none;
}

.informations-text li {
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 16px;
  max-width: 500px;
}

.informations-text span {
  font-weight: 400;
  font-size: 18px;
}

.informations-price {
  margin-top: 28px;
}

.informations-price h2 {
  font-size: 32px;
}

.informations-price span {
  font-size: 28px;
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-controls button {
  margin: 0 5px;
}

.add-cart-btn {
  background-color: var(--red);
  color: var(--light-100);
  height: 48px;
  padding: 0 32px;
  border-radius: 4px;
  border: 2px solid var(--dark-red);
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 24px;
  transition: 0.3s;
}

.add-cart-btn:hover {
  background-color: var(--dark-red);
}

@media screen and (max-width: 890px) {
  .comic-img {
    width: 168px;
    height: 252px;
  }

  .informations-text h1 {
    font-size: 44px;
  }

  .informations-text ul {
    margin-top: 24px;
  }

  .informations-text li {
    font-size: 18px;
    padding-bottom: 12px;
  }

  .informations-text span {
    font-size: 16px;
  }

  .informations-price {
    margin-top: 18px;
  }

  .informations-price h2 {
    font-size: 24px;
  }

  .informations-price span {
    font-size: 20px;
  }

  .add-cart-btn {
    height: 44px;
    margin-top: 20px;
  }
}

@media screen and (max-width: 540px) {
  .comic {
    height: 100%;
  }

  .informations-comic {
    display: flex;
    flex-direction: column;
    gap: 52px;
    padding: 180px 40px 120px;
  }
}
</style>
