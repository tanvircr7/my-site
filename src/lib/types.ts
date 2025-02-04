export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}

export type Stuff = {
	title: string
	link: string
	description: string
	priority: number
	categories: Categories[]
	published: boolean
}