import type { Stuff } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('api/stuff')
	const stuff: Stuff[] = await response.json()
	return { stuff }
}