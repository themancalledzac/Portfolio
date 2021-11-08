<h1 align="center">Portfolio of Zechariah Edens</h1>

<p align="center">
    <img src="https://img.shields.io/github/repo-size/themancalledzac/portfolio" />
    <img src="https://img.shields.io/github/languages/top/themancalledzac/portfolio"  />
    <img src="https://img.shields.io/github/issues/themancalledzac/portfolio" />
    <img src="https://img.shields.io/github/last-commit/themancalledzac/portfolio" >
    <a href="https://github.com/themancalledzac">
        <img alt="Github: themancalledzac" src="https://img.shields.io/github/followers/themancalledzac?style=social" target="_blank" />
    </a>
    <a href="https://twitter.com/themancalledzac">
        <img alt="Twitter: themancalledzac" src="https://img.shields.io/twitter/follow/themancalledzac.svg?style=social" target="_blank" />
    </a>
</p>
  
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-red" />
    <img src="https://img.shields.io/badge/React-orange"  />
    <img src="https://img.shields.io/badge/-Material UI-yellow" />
    <img src="https://img.shields.io/badge/-NextJS-green" >
    <img src="https://img.shields.io/badge/-Apollo-teal" >
    <img src="https://img.shields.io/badge/-GraphQL-blue" >
    <img src="https://img.shields.io/badge/-Typescript-indigo" >
    <!-- <img src="https://img.shields.io/badge/-GraphQL-violet" > -->
</p>

## Table of Contents

- [Links](#links)
- [Description](#description)
- [Goals](#goals)
- [Installation](#installation)
- [Usage](#usage)
- [Code](#code)
- [Questions](#questions)

## Links

- [Current portfolio(Until this is in a working state)](https://www.zacedens.com/)

- [Github Repo](https://github.com/themancalledzac/portfolio)

## Description

This portfolio represents a new project focused on moving my current portfolio into a React full stack production, including a MongoDB connected using Apollo GraphQL, NextJS, Styled Components, and hopefully start migrating file by file to Typescript.

## Goals

- Portfolio page that works as two screens, Coding, and Photography.
- Looking to have a two page layout (A third page for myself when 'logged in')
- Page 1: Coding

  - Objectives

    - Single page application with quick access
    - Important Links: Resume, LinkedIn, Github, Instagram
      - I like the side bar, but we need to figure out a way of having that side bar, hide on Mobile, but also while on Mobile opening it should take over the entire screen, with a Closing (X) always visible on the top left.
      - I would like the resume to be opened within our page, almost like clicking the <a>a-tag</a> would simple update the main page to only be the resume, with a 'download' button and an open text box above it with the title of 'your business name'. When clicked it will download the resume, but if you input a business name, it will update the downloaded PDF name to be "Edens-{business.name}.pdf".
    - Portfolio Projects

      - Each project should have a gif displaying the functionality
      - A nice looking list/graph of technologies used
      - Accomplishments / Proud moments
      - Difficulties
      - Github Link

      - Each Portfolio project should, on click, go full screen, hiding other portfolio projects. This expanded project will include images, code snippets, and all descriptions and information.
        - This Modal popout style component should be mostly able to fit on screen without scrolling, or at least should have a CLOSING button(X) in the top right corner that stays visible on scrolling.

- Page 2: Photography
  - Main page needs to immediately SCREAM PHOTOGRAPHY
  - It should be it's own unique vibe. Full screen image on index load.
    - We need to decide if we want an updating header image that shows wide variety of images, every 5 seconds or something.
  - Layout should be a header image with 'photography' or some sort of text overlay. Would LOVE to get the Parallax effect working here, regardless of what image is being shown.
  - Below that image we should have a few options for photography categories.
  - We could also have a search function, which searches our Database of images/metadata for locations both macro and micro, specific terms like portrait or holiday, black and white.
    -In addition to photo projects, we should also have a running 'blog'. This blog can be updated via the personal page, or by simply adding to the database a blog post.
- Page 3: Personal
  - This could simply be zacedens.com/admin
  - On log in, we have the ability to post a blog post.
  - We should be able to simply upload an image. This is an interesting subject, because when we upload an image to the database, we almost want to be abl to translate, or update that image into two parts, first is a compressed, but full size image that is displayed when on the website we click 'larger'. The other would be the thumbnail image. Basically, we need to do some javascript where we, when uploading, HIGHLY compress, and turn our image into a second, smaller image. woaahhh
  - Thoughts
    - Blog should be short trips, triptiks, 

## Questions

Feel free to contact me with any questions.

[Email](mailto:themancalledzac@gmail.com)

[Github](https://github.com/themancalledzac)

[Twitter](https://twitter.com/themancalledzac)

[Instagram](https://www.instagram.com/themancalledzac/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
