<template>
  <div class="middle">
    <div class="bar bar1"></div>
    <div class="bar bar2"></div>
    <div class="bar bar3"></div>
    <div class="bar bar4"></div>
    <div class="bar bar5"></div>
    <div class="bar bar6"></div>
    <div class="bar bar7"></div>
    <div class="bar bar8"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.middle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.bar {
  width: 2rem;
  height: 9rem;
  background: transparent;
  display: inline-block;
  transform-origin: bottom center;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  /* box-shadow:5px 10px 20px inset rgba(255,23,25.2); */
  animation: loader 1.2s linear infinite;
}

.bar1 {
  animation-delay: 0.1s;
}

.bar2 {
  animation-delay: 0.2s;
}

.bar3 {
  animation-delay: 0.3s;
}

.bar4 {
  animation-delay: 0.4s;
}

.bar5 {
  animation-delay: 0.5s;
}

.bar6 {
  animation-delay: 0.6s;
}

.bar7 {
  animation-delay: 0.7s;
}

.bar8 {
  animation-delay: 0.8s;
}

@keyframes loader {
  0% {
    transform: scaleY(0.1);
    background: transparent;
  }

  50% {
    transform: scaleY(1);
    background: var(--color-1);
  }

  100% {
    transform: scaleY(0.1);
    background: transparent;
  }
}</style>