(function() {
	let app = angular.module('ngblog');

	app.factory('ArticleFactory', function() {
		let af = {
			id: 1,
			create: (title, descr) => {
				return {
					title: title || 'Article n°' + af.id,
					id: af.id++,
					description: descr || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie ultricies ante, vitae tristique ipsum. Aliquam quis enim libero. Nam pulvinar elit blandit ante tincidunt, in facilisis turpis tempor. Sed finibus vulputate efficitur. Proin a luctus nisi. Nullam blandit eleifend sem, vitae pharetra velit tristique viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc nulla, blandit eu viverra vel, blandit ac nulla. Ut eget eleifend tellus, non dignissim felis. In posuere tellus dapibus erat ullamcorper congue. Sed tristique varius purus sit amet semper. Sed vel diam faucibus, convallis felis sit amet, dapibus mi. Aenean vel dignissim ante.'
						+ 'Nulla fringilla nec ipsum vitae sollicitudin. Morbi non felis interdum, blandit orci vitae, volutpat nisl. Vivamus risus nibh, malesuada id sagittis eu, laoreet et dolor. Sed non leo in ex suscipit congue a et enim. Morbi laoreet sodales ante in facilisis. Praesent eget magna sed lorem venenatis consectetur. Suspendisse rhoncus, ipsum vel vestibulum accumsan, ipsum tortor sodales erat, nec pharetra mauris mi sit amet dui.'
				};
			},
			clone: (article) => {
				let clone = {};
				clone.id = article.id;
				clone.title = article.title;
				clone.description = article.description;
				return clone;
			}
		};
		return af;
	});
})();