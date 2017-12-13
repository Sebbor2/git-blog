(function() {
	let app = angular.module('ngblog');
	const KEY_ARTICLES = 'articles';

	app.controller('StorageController', function(StorageService, ArticleService) {
		this.save = () => {
			StorageService.store(KEY_ARTICLES, ArticleService.list());
		};
		this.load = () => {
			let articles = StorageService.fetch(KEY_ARTICLES);
			// Vider le tableau.
			ArticleService.articles.splice(0, ArticleService.articles.length);
			// Remplir le tableau.
			ArticleService.articles.push.apply(ArticleService.articles, articles);
		}
	});
})();