(function() {
	let app = angular.module('ngblog');

	app.provider('ArticleService', function ArticleServiceProvider() {
		this.debug = false;
		this.activateDebug = () => {
			this.debug = true;
		}
		this.$get = ['ArticleFactory', 
			function ArticleServiceFactory(ArticleFactory) {
				let as = {
					articles: [],
					list: () => as.articles,
					create: (title, description) => {
						as.articles.push(
							ArticleFactory.create(title, description));
					},
					update: (updateArticle) => {
						let index = as.articles
							.findIndex((article) => article.id === updateArticle.id);
						as.articles.splice(index, 1, updateArticle);
					},
					delete: (articleId) => {
						let index = as.articles
							.findIndex((article) => article.id === articleId);
						as.articles.splice(index, 1);
					}
				};
				if (this.debug) {
					as.mock = (count) => {
						while (count >= 0) {
							as.articles.push(ArticleFactory.create());
							--count;
						}
					};
				}
				return as;
			}
		];
	});

	app.config(function(ArticleServiceProvider) {
		// ArticleServiceProvider.activateDebug();
	});
})();