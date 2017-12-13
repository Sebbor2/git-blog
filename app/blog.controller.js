(function () {
    let appModule = angular.module('ngblog');

    appModule.controller('BlogController',function($scope, ArticleFactory) {
        this.listVisible = false;
        this.formVisible = false;
        this.article = {};
        this.articles = [
            ArticleFactory.create(),
            ArticleFactory.create(),
            ArticleFactory.create(),
            ArticleFactory.create(),
            ArticleFactory.create()
        ];
        this.displayArticleForm = (show) => {
            this.listVisible = !show;
            this.formVisible = show;
            if (!show) {
                this.article = {};
            }
        };
        
        this.addArticle = (e) => {
            if(this.article.id) {
                this.updateArticle();
            } else {
                this.articles.push(ArticleFactory.create(this.article.title,this.article.description));
            }
            this.displayArticleForm(false);
            this.article = {};
        };
        
        this.delArticle = (articleId) => {
            let index;
            for (let i=0;i<this.articles.length;++i) {
                if (this.articles[i].id === articleId){
                    // Article trouvé
                    index=i;
                    break;
                }
            }
            
            if(index >= 0) {
                this.articles.splice(index,1);
                
            } else console.error('Impossible de supprimer cet article car l\'Id %s n\'existe pas.', articleId);
        }
        
        this.editArticle = (article) => {
            this.article = ArticleFactory.clone(article);
            this.displayArticleForm(true);
        };
        
        this.updateArticle = () => {
            let index = this.articles.findIndex((article) => this.article.id === article.id);
            this.articles.splice(index,1,this.article);
        };
        
        $scope.$on('loggedIn', () => {
            this.listVisible = true;
        });
    });
})();