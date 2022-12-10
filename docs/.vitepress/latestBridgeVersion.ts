import releases from '../data/releases.json'

export const latestBridgeVersion =
	releases.find((release) => !release.prerelease)?.tag_name ?? 'v2.x'
