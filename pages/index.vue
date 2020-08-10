<template>
  <div class="container">
    <div>
      <SectionHeader title="¡Hola!" font-size="2xl" />
      <p>
        En esta aplicación podrás evaluar la fluctuación diaria del dólar en un
        rango de tiempo.
      </p>

      <img
        src="/undraw/stepping_up.svg"
        alt="Fluctuación de divisas"
        class="mx-auto h-48 my-5"
      />

      <p class="hidden md:block">
        <strong class="block text-center">¿Comenzamos?</strong>
        Puedes iniciar viendo
        <nuxt-link type="button" to="/variacion" class="text-blue-500">
          la fluctuación del dolar americano
        </nuxt-link>
        en el último año, el año pasado <br />
        o incluso en 1999.
        <span class="text-xl">🤯</span>
      </p>

      <nuxt-link
        to="/variacion"
        class="block md:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow"
      >
        Comenzar
      </nuxt-link>
    </div>
  </div>
</template>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
