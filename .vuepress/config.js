module.exports = {
	title: 'Wisdom Curated',
	description: 'Human curated, timely, action-oriented insights.',
	ga: '', // 'UA-124245419-1',
	serviceWorker: true,
	head: [
		['link', { rel: 'icon', href: '/hero.png' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
	],
	themeConfig: {
		sidebar: 'auto',
		nav : [
			{ text: 'Topics', link: '/topics/' }
                      ]
	}
}

