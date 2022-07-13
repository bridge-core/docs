import fetch from 'node-fetch'

export async function getLatestBridgeVersion() {
	// Fetch latest tag from bridge-core/editor repo
	const tags: any = await fetch(
		'https://api.github.com/repos/bridge-core/editor/tags',
		{}
	).then((resp) => resp.json())

	console.log(tags)
	return tags[0].name
}
