<script setup></script>

<template>
  <div class="home">
    <section class="informations-home">
      <div class="texts-home">
        <h1>Marvel developer</h1>
        <p>
          The application was built in VueJs and using data provided by The
          Marvel Comics API. Here the characters, comics and movies that make up
          the Marvel library were listed.
        </p>
      </div>
      <div class="buttons-home">
        <a href="https://developer.marvel.com/" class="buttons btn-visit-api"
          >VISIT API</a
        >
        <a href="https://github.com/gabrielypx/marvel-challange" class="buttons btn-visit-project">VISIT PROJECT</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  height: calc(100vh + 100px);
  background-image: url("@/assets/images/img/background-home.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: Roboto;
  margin-top: -100px;
}

.informations-home {
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  height: 100vh;
}

.texts-home {
  margin-top: 220px;
  margin-left: 90px;
  color: var(--light-100);
}

.texts-home h1 {
  font-size: 66px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -5px;
  font-family: "Roboto";
}

.texts-home p {
  font-weight: 400;
  margin-top: 20px;
  font-size: 22px;
  max-width: 550px;
  line-height: 30px;
}

.buttons-home {
  display: flex;
  flex-direction: row;
  margin-top: 64px;
  margin-left: 90px;
}

.buttons {
  color: var(--light-100);
  text-decoration: none;
  font-family: "Roboto";
  width: 70px;
  padding: 20px 80px;
  font-weight: 500;
  clip-path: polygon(7% 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 30%);
}

.buttons::before {
  content: "";
  position: absolute;
  width: 60px;
  height: 3px;
  background-color: var(--red);
  transform: rotate(-45deg);
  left: -36px;
}

.btn-visit-api {
  background-color: var(--red);
  transition: 0.5s;
}

.btn-visit-api:hover {
  background-color: var(--dark-red);
}

.btn-visit-project {
  background-color: transparent;
  border: 3px solid var(--red);
  width: 150px;
  padding: 17px 20px 17px 60px;
  margin-left: 30px;

  /* Animation -----*/
  overflow: hidden;
  position: relative;
}

/* Animation -----*/
.btn-visit-project:after {
  background: var(--light-100);
  content: "";
  height: 9.68rem;
  left: -4.68rem;
  opacity: 0.2;
  position: absolute;
  top: -3.125rem;
  transform: rotate(35deg);
  transition: all 850ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 3.125rem;
  z-index: -10;
}
.btn-visit-project:hover:after {
  left: 120%;
  transition: all 850ms cubic-bezier(0.19, 1, 0.22, 1);
}

@media screen and (max-width: 890px) {
  .home {
    height: calc(100vh + 100px);
    margin-top: -100px;
  }

  .informations-home {
    align-items: center;
    text-align: center;
  }

  .texts-home {
    margin-top: 260px;
  }

  .texts-home {
    margin-left: 0;
  }

  .buttons-home {
    margin-left: 0;
    margin-top: 84px;
  }

  .buttons {
    font-weight: 600;
  }

  .btn-visit-project {
    margin-left: 50px;
    padding: 17px 20px 17px 32px;
  }
}

@media screen and (max-width: 640px) {
  .texts-home {
    margin-top: 200px;
  }

  .texts-home h1 {
    font-size: 56px;
  }

  .texts-home p {
    font-weight: 500;
    margin-top: 24px;
    font-size: 20px;
    line-height: 32px;
    padding: 0 12px;
  }

  .buttons-home {
    margin-top: 50px;
  }

  .btn-visit-project {
    width: 150px;
    padding: 17px 20px 17px 20px;
  }
}

@media screen and (max-width: 540px) {
  .buttons-home {
    flex-direction: column;
  }

  .buttons {
    width: 70px;
    padding: 20px 80px;
  }

  .btn-visit-project {
    background-color: transparent;
    border: 3px solid var(--red);
    width: 150px;
    padding: 17px 36px 17px 36px;
    margin-top: 28px;
    margin-left: 0;
  }
}

@media screen and (max-width: 390px) {
  .texts-home h1 {
    font-size: 36px;
    letter-spacing: -2px;
  }

  .texts-home p {
    font-size: 16px;
    max-width: 320px;
    line-height: 20px;
  }

  .buttons-home {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
}
</style>
