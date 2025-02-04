import { json } from '@sveltejs/kit'
import type { Stuff } from '$lib/types'

async function getStuff() {
    let posts: Stuff[] = []

    const paths = import.meta.glob('/src/stuff/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        // const slug = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file) {
            const metadata = file.metadata as Omit<Stuff, 'slug'>
            const tmp = { ...metadata } satisfies Stuff
            tmp.published && posts.push(tmp)
        }
    }

    posts = posts.sort(
        (first, second) => second.priority - first.priority
    )

    // console.log(posts)

    return posts
}

export async function GET() {
    const posts = await getStuff()
    return json(posts)
}