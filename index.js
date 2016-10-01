module.exports = [
	require('postxml-import')(),
	require('postxml-beml')(),
	require('postxml-imgalt')(),
	require('postxml-placeholder')({
		url: 'http://placehold.alanev.ru/'
	}),
	require('postxml-image-size')({
		cwd: 'build'
	}),
	require('postxml-wrap')(),
	require('postxml-repeat')(),
	require('postxml-icon')()
]
