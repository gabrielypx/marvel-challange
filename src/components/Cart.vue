<template>
  <div class="cart">
    <section class="informations-cart">
      <h1>Shopping Cart</h1>
      <div v-if="cartItems.length > 0">
        <div v-for="item in cartItems" :key="item.id" class="card-comic">
          <img :src="item.thumbnail" :alt="item.title" class="comic-img" />

          <div class="price-informations">
            <h2>{{ item.title }}</h2>
            <p>
              Price: <span>$ {{ item.price ? item.price : 0 }}</span>
            </p>
            <label for="quantity">Quantity:</label>
            <select v-model="item.quantity" id="quantity">
              <option v-for="n in 20" :value="n">{{ n }}</option>
            </select>
            <p>
              Total: <span>$ {{ getTotalPrice(item) }}</span>
            </p>
            <button @click="removeFromCart(item)" class="remove-item-btn">
              Remove from Cart
            </button>
          </div>
        </div>
        <div>
          <p class="total-text">Total Cart Price: $ {{ totalCartPrice }}</p>
          <div class="checkout-btns">
            <router-link to="/comics"
              ><button class="keep-shopping-btn">
                Keep Shopping
              </button></router-link
            >
            <button @click="" class="finalize-btn">Finalize purchase</button>
          </div>
        </div>
      </div>
      <div v-else class="empty-card">
        <p>Your shopping cart is empty.</p>
        <router-link to="/comics" class="keep-shopping-btn"
          >Go to Comics</router-link
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [],
    };
  },
  created() {
    this.cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  },
  computed: {
    totalCartPrice() {
      let totalPrice = 0;
      for (const item of this.cartItems) {
        const price = item.price ? parseFloat(item.price) : 0;
        totalPrice += price * item.quantity;
      }
      return totalPrice.toFixed(2);
    },
  },
  methods: {
    getTotalPrice(item) {
      const price = item.price ? parseFloat(item.price) : 0;
      return (price * item.quantity).toFixed(2);
    },
    removeFromCart(item) {
      const index = this.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    },
  },
  watch: {
    cartItems: {
      handler(newItems) {
        localStorage.setItem("cartItems", JSON.stringify(newItems));
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.cart {
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
    to bottom,
    rgba(5, 5, 5, 0.911) 0%,
    rgba(24, 23, 23, 0.8) 50%,
    rgba(14, 14, 14, 0.9) 80%,
    rgb(0, 0, 0) 100%
  );

  background-size: auto 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: Roboto;
}

.informations-cart {
  display: flex;
  flex-direction: column;
  padding: 120px 40px 80px;
  margin: 0 auto;
}

.informations-cart h1 {
  font-size: 40px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -2px;
  font-family: "Roboto";
  margin-top: 44px;
  color: var(--light-100);
  text-shadow: 2px 2px 4px #000000;
}

.card-comic {
  border: 2px solid var(--dark-300);
  background-color: var(--dark-100);
  border-radius: 8px;
  margin-top: 12px;
  color: var(--light-100);
  padding: 12px;
  display: flex;
  flex-direction: row;
  gap: 32px;
}

.comic-img {
  width: 120px;
  height: auto;
}

.price-informations h2 {
  padding: 8px 0;
}

.price-informations p,
.price-informations label {
  font-size: 18px;
  padding: 8px 2px;
  font-weight: 700;
}

.price-informations span {
  font-weight: 500;
}

.remove-item-btn {
  height: 32px;
  padding: 0 24px;
  border-radius: 4px;
  border: 2px solid var(--dark-200);
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: 0.5s;
  margin-top: 8px;
}

.remove-item-btn:hover {
  background-color: var(--dark-200);
  color: var(--light-100);
}

.total-text {
  margin-top: 20px;
  font-size: 28px;
  font-weight: 800;
  color: var(--light-100);
}

.checkout-btns {
  display: flex;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 40px;
}

.keep-shopping-btn,
.finalize-btn {
  height: 40px;
  padding: 0 32px;
  border-radius: 4px;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: 0.5s;
}

.keep-shopping-btn {
  background-color: var(--light-100);
  color: var(--dark-200);
  border: 2px solid var(--dark-200);
}

.keep-shopping-btn:hover {
  background-color: var(--dark-200);
  color: var(--light-100);
}

.finalize-btn {
  background-color: var(--red);
  color: var(--light-100);
  border: 2px solid var(--dark-red);
}

.finalize-btn:hover {
  background-color: var(--dark-red);
}

.empty-card {
  color: var(--light-100);
  font-size: 24px;
  margin-top: 20px;
}

@media screen and (max-width: 480px) {
  .card-comic {
    padding: 16;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .comic-img {
    width: 180px;
  }

  .price-informations {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .keep-shopping-btn,
  .finalize-btn {
    height: 48px;
    padding: 0 28px;
  }
}
</style>
