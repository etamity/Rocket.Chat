Package.describe({
	name: 'rocketchat:tooltip',
	version: '0.0.1',
	summary: '',
	git: '',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.use('ecmascript');
	api.use('templating', 'client');
	api.use('rocketchat:lib');
	api.use('etamity:alien-theme');
	api.use('rocketchat:ui-master');
	api.use('less');

	api.addFiles('tooltip.less', 'client');

	api.addFiles('rocketchat-tooltip.html', 'client');
	api.addFiles('rocketchat-tooltip.js', 'client');

	api.addFiles('init.js', 'client');
});
