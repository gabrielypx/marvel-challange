<template>
  <header id="header" class="header-container">
    <router-link to="/">
      <img :src="logo" alt="Marvel logo" class="header-image" />
    </router-link>
    <nav class="menu-header">
      <ul>
        <li>
          <router-link :to="{ path: '/', name: 'home' }" class="menu-items"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ path: '/comics', name: 'comics' }"
            class="menu-items"
            >Comics</router-link
          >
        </li>
        <li class="item-card">
          <router-link :to="{ path: '/cart', name: 'cart' }"
            ><img :src="cartIcon" alt="Cart" class="cart-icon"
          /></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import logo from "../assets/images/img/header-logo.svg";
import cartIcon from "../assets/images/icons/cart-icon.svg";
</script>

<style scoped>
header {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: var(--dark-300);
  position: fixed;
  top: 0;
  z-index: 10;
}

.header-image {
  width: 130px;
  vertical-align: middle;
  margin-left: 80px;
}

.menu-header {
  position: absolute;
  right: 80px;
  display: flex;
  align-items: center;
  height: 100%;
}

.menu-header ul {
  list-style-type: none;
  font-family: Roboto;
  display: flex;
  align-items: center;
}

.menu-header ul li {
  margin-right: 36px;
}

.menu-items {
  text-decoration: none;
  color: var(--light-100);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  position: relative;
  transition: 0.5s;
}

.menu-items:hover {
  color: var(--red);
}

.menu-items::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: var(--dark-red);
  transition: width 0.3s ease;
}

.menu-items:hover::after {
  width: 100%;
}

@media (max-width: 890px) {
  .header-image {
    width: 120px;
    margin-left: 60px;
  }

  .menu-header {
    right: 40px;
  }

  .menu-header ul li {
    margin-right: 28px;
  }

  .menu-items {
    font-size: 18px;
  }

  .cart-icon {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 640px) {
  .header-image {
    width: 100px;
    margin-left: 40px;
  }

  .menu-header {
    right: 30px;
  }

  .menu-header ul li {
    margin-right: 24px;
  }

  .menu-items {
    font-size: 16px;
  }

  .cart-icon {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 390px) {
  .header-image {
    width: 80px;
    margin-left: 20px;
  }

  .menu-header {
    right: 30px;
  }

  .menu-header ul li {
    margin-right: 18px;
  }

  .menu-items {
    font-size: 14px;
  }

  .cart-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
