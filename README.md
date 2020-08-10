# Technical Interview - Frontend Developer

##### Alejandro López

The objective of this exercise is to develop a graph showing the daily variation of the dollar, relative to the Chilean peso, for 2019 and 2020. You can also see check out the prices for every year since 1999.

The chosen API was [mindicador.cl](https://mindicador.cl/), which delivers the price for a specified time range for the American dollar relative to the Chilean peso.

This app was created through Create Nuxt App to speed up development and follow the Nuxt team's recommended practices.

##  👨🏻‍💻 Tech, libraries and tools:

- Main Javascript framework: VueJS + NuxtJS
- State management: Vuex
- CSS Framework: TailwindCSS
- Charts: ChartJS
- Testing: Jest
- HTTP Requests: Axios
- Transpiled with Babel and linted with ESLint + Husky + Lint staged
- Deployed with Netlify to https://variance.netlify.app
- Illustrations by [freepik](https://www.flaticon.com/authors/freepik) and [undraw.co](https://undraw.co)

## 🛠 Build Setup

This app is automagically deployed on every push thanks to Netlify. You can access it direcly by [clicking here](https://variance.netlify.app), or you can follow the regular NuxtJS instructions:

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 🐛 Known Issues

- On mobile devices, viewing too large a range of years will crash the browser tab. This is most likely a performance issue with ChartJS - should be solved by rendering simpler charts or by reducing the amount of data points that are shown at once.
- GitHub CI workflows are not passing `build` step. There is an issue with `nuxtjs/eslint-module` not being found, not sure why. Works just fine in Netlify and local environment.
- In the `CurrencyService` test suite, the following test `Should retrieve all values from a range` is not passing. I need to investigate how to mock the implementation or resolved value of an inner method (maybe a Spy? Stub?).
