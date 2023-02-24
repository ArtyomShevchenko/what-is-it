<template>
  <NavigationVue></NavigationVue>
  <div class="gradient content">
    <RouterView></RouterView>
  </div>
</template>

<script>


import NavigationVue from "@/Components/NavigationVue.vue"

export default {
  components: { NavigationVue },
}
</script>

<style>
:root {
  --color-1: rgb(0, 128, 255);
  --color-2: rgb(0, 80, 255);
  --color-3: rgb(6, 36, 58);
  --color-4: rgb(255, 255, 255);

  --color-5: #befafc;
  --color-6: #a1d1ff;
  --color-7: #f9fcbe;

  --danger: rgb(255, 200, 200);
  --success: rgb(200, 255, 200);

  --semi-transparent-1: rgba(100, 100, 128, .1);
  --semi-transparent-2: rgba(100, 100, 128, .2);
  --semi-transparent-3: rgba(100, 100, 128, .3);
  --semi-transparent-4: rgba(100, 100, 128, .4);
  --semi-transparent-5: rgba(100, 100, 128, .5);
  --semi-transparent-6: rgba(100, 100, 128, .6);
  --semi-transparent-7: rgba(100, 100, 128, .7);
  --semi-transparent-8: rgba(100, 100, 128, .8);
  --semi-transparent-9: rgba(100, 100, 128, .9);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  border: none;
  background-color: initial;
}

html,
body {
  font-size: 10px;
  color: var(--color-3);
  font-family: "roboto", sans-serif;
  font-weight: 400;
  scroll-padding-top: 1rem;
}

/* width */
::-webkit-scrollbar {
  width: 1.2rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--color-4);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--semi-transparent-5);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--semi-transparent-6);
}

p,
span,
a,
div,
input,
textarea {
  font-size: 1.6rem;
}

input,
textarea {
  border-bottom: .2rem solid var(--color-4);
  resize: none;
  background: transparent;
  padding: .5rem 1rem;
  width: 100%;
  margin: 1rem 0;
}

input:focus,
textarea:focus {
  outline: none;
  border-bottom: .2rem solid var(--color-1);
  border-left: .2rem solid var(--color-1);
}

input::placeholder,
textarea::placeholder {
  color: var(--semi-transparent-5);
}

input,
textarea {
  border-bottom: .1rem solid var(--color-4);
  border-left: .4rem solid var(--color-4);
}

input:invalid,
textarea:invalid {
  border-bottom: .1rem solid var(--danger);
  border-left: .4rem solid var(--danger);
}

input:valid,
textarea:valid {
  border-left: .4rem solid var(--color-4);
  border-bottom: .1rem solid var(--color-4);
}

/* input:-webkit-autofill, input:focus:-webkit-autofill {
   -webkit-box-shadow: 0 0 0 100px rgba(250, 255, 189, 1) inset;
} */

textarea {
  min-height: 20rem;
}

.content {
  padding-top: 8rem;
}

.scroll-disabled {
  overflow: hidden;
  margin: 0;
  height: 100%;
}

button {
  padding: .8em 2em;
  background: linear-gradient(-45deg, var(--color-1)50%, var(--color-2) 50%, var(--color-2) 60%, var(--color-1) 60%);
  color: var(--color-4);
  transition: all .2s;
  background-size: 400% 100%;
  background-position-x: 0%;
  cursor: pointer;
}

button:hover {
  animation: hoverOnButton 1s;
  text-shadow: 0 0 .1rem var(--color-4);
}

button:disabled {
  background: var(--semi-transparent-6);
  animation: none;
  cursor: auto;
}

@keyframes hoverOnButton {
  100% {
    background-position-x: 100%;
  }
}

.filter-button {
  border-radius: 2rem;
  padding: 0.4rem 1rem;
  background: var(--color-4);
  color: var(--color-2);
  border-bottom: .2rem solid var(--color-4);
  animation: none;
}

.filter-button:hover {
  border-bottom: .2rem solid var(--color-2);
}

h1 {
  margin: 3rem 0;
  ;
}

h2 {
  margin: 2rem 0;
  ;
}

h3 {
  margin: 1rem 0;
  ;
}

/* button:hover {
  animation: hoverButton .2s ease-in-out forwards;
}

@keyframes hoverButton {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  } 
} */

/* -------------- */
.gradient {
  background: linear-gradient(-45deg, var(--color-7), var(--color-6), var(--color-5));
  background-size: 400% 400%;
  animation: gradient-bg 20s ease-in-out infinite;
  min-height: 100vh;
}

@keyframes gradient-bg {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 1rem;
}

.loading::before {
  content: "";
  width: 8rem;
  height: 8rem;
  border: 1rem solid;
  border-top-color: var(--color-1);
  border-right-color: var(--color-1).2;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-radius: 50%;
  box-shadow: 0 0 1rem .1rem var(--semi-transparent-5)inset, 0 0 5rem .1rem var(--semi-transparent-5);
  animation: spinLoading 2s infinite linear;
}

@keyframes spinLoading {
  100% {
    transform: rotate(360deg);
  }
}
</style>
