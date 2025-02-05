# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Development Rundown:

1. This is designed to be markdown based
2. For projects (stuff) and for blogs (posts)
3. So first change the config
4. Then Home page to your liking
5. But when adding your own projects remove my markdown files and put your own
6. For blogs put them on blogs, for projects put them on stuff
7. Maintain the formatting for markdowns
8. If you want to process your markdowns differently then look at lib/types first
