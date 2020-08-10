# Technical Interview - Frontend Developer
##### Alejandro López

The objective of this exercise is to develop a graph showing the daily variation of the dollar, relative to the Chilean peso, for 2019 and 2020. You can also see check out the prices for every year since 1999.

The chosen API was [mindicador.cl](https://mindicador.cl/), which delivers the price for a specified time range for the American dollar relative to the Chilean peso.

### Tech, libraries and tools:
- Main Javascript framework: VueJS + NuxtJS
- State management: Vuex
- CSS Framework: TailwindCSS
- Charts: ChartJS
- Testing: Jest
- HTTP Requests: Axios
- Transpiled with Babel and linted with ESLint + Husky + Lint staged
- Deployed with Netlify to https://variance.netlify.app
- Illustrations by [freepik](https://www.flaticon.com/authors/freepik) and [Undraw.co](https://undraw.co)

## Build Setup
This app is automagically deployed on every push thanks to Netlify. You can access it direcly by[clicking here](https://variance.netlify.app), or you can follow the regular NuxtJS instructions:

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
