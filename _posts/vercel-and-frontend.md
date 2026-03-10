---
title: "This Site: Vercel Hosting & Front End"
excerpt: "How this blog is built and deployed—Next.js, Tailwind, and Vercel."
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2026-03-10T14:00:00.000Z"
author:
  name: Niall Kahlout
  picture: "/assets/blog/authors/niall.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

This blog runs on **Next.js**, is styled with **Tailwind CSS**, and is hosted on **Vercel**. Here’s a short overview of the front end and how deployment works.

## Front end

- **Next.js (App Router)** – File-based routing, server and client components, and built-in image and font optimisation. Posts are Markdown in `_posts`; gray-matter and remark handle frontmatter and rendering.
- **Tailwind CSS** – Utility-first styling and a simple light/dark theme with CSS variables. Layout is responsive with a single main content column.
- **TypeScript** – Used across the app for type safety.

There’s no separate CMS: editing a `.md` file in `_posts` and pushing to GitHub is enough to add or change a post.

## Hosting on Vercel

Vercel is built for Next.js, so the setup is minimal:

1. **Git integration** – Connect the GitHub repo in the Vercel dashboard. Each push to the main branch triggers a new build and deployment.
2. **Build** – Vercel runs `next build` and serves the output. No server or extra config to manage.
3. **Updates** – After you push, the site usually updates within a couple of minutes.
4. **Free tier** – The hobby plan is enough for a personal blog and a custom domain.

Preview deployments are created for pull requests, so you can check changes before merging.

## Custom domain

You can attach your own domain (e.g. `niallkahlout.com`) under **Project → Settings → Domains**. Vercel handles SSL and redirects.

---

So: the front end is Next.js and Tailwind; the content is Markdown in the repo; and Vercel hosts it and redeploys on every push. The About Me post stays pinned as the hero on the homepage—everything else appears in date order below it.
