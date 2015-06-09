module.exports = function preProcess(html) {
	// reinforce "dev" environment, and use local static file instead of the CDN version
	return html.replace(new RegExp('getContext::Cachesvr', 'gi'), 'getCCL::configuration.servers.cache');
};