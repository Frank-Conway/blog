import { defineStore } from 'pinia'

export const articleStore = defineStore("article", {
    state: () => {
        return {
            article: {
                id: "",
                article_title: "",
                article_cover: "",
                createdAt: "",
                updatedAt: "",
                view_times: "",
                thumbs_up_times: "",
                category: {
                    category_name: "",
                },
                tagList: [],
                reading_duration: "",
            },
        };
    },
    getters: {
        getArticle() {
            return this.article;
        },
    },
    actions: {
        setArticle(val) {
            Object.assign(this.article, val);
        },
    },
});
