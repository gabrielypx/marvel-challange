<template>
  <footer id="footer">
    <nav class="icons-footer">
      <ul>
        <li>
          <a href="https://pt-br.facebook.com/MarvelBR">
            <img :src="facebookIcon" alt="Facebook Icon" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/marvel">
            <img :src="instagramIcon" alt="Instagram Icon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/marvel">
            <img :src="twitterIcon" alt="Twitter Icon" />
          </a>
        </li>
      </ul>
    </nav>
    <p class="text-designed">
      Designed and developed by <span>Gabriely Paitax</span>
    </p>
  </footer>
</template>

<script setup>
import facebookIcon from "../assets/images/icons/facebook.svg";
import instagramIcon from "../assets/images/icons/instagram.svg";
import twitterIcon from "../assets/images/icons/twitter.svg";
</script>

<style scoped>
footer {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: var(--dark-300);
  position: fixed;
  bottom: 0;
}

ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  gap: 16px;
  margin-left: 80px;
}

li {
  width: 42px;
  height: 42px;
  background-color: var(--dark-red);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  display: flex;
  align-items: center;
}

img {
  width: 24px;
  height: 24px;
}

img:hover {
  width: 26px;
  height: 26px;
}

.text-designed {
  text-transform: uppercase;
  color: var(--light-100);
  font-family: "Roboto Condensed";
  font-weight: 600;
  font-size: 14px;
  position: absolute;
  right: 80px;
}

.text-designed span {
  color: var(--red);
}

@media (max-width: 890px) {
  ul {
    margin-left: 40px;
  }

  li {
    width: 36px;
    height: 36px;
  }

  img {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 640px) {
  ul {
    margin-left: 20px;
    gap: 8px;
  }

  li {
    width: 28px;
    height: 28px;
  }

  img {
    width: 16px;
    height: 16px;
  }

  .text-designed {
    font-size: 12px;
    right: 48px;
  }
}

@media (max-width: 380px) {
  .text-designed {
    display: flex;
    flex-direction: column;
    text-align: end;
  }
}
</style>
