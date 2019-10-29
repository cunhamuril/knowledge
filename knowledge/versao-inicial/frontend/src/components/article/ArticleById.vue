<template>
  <div class="article-by-id">
    <PageTitle icon="fa fa-file-o" 
      :main="article.name" :sub="article.description" />
    <div class="article-content" v-html="article.content"></div>
  </div>
</template>

<script>
import "highlightjs/styles/dracula.css";
import hljs from "highlightjs/highlight.pack.js";
import { baseApiUrl } from "@/global";
import axios from "axios";
import PageTitle from "../template/PageTitle";

export default {
  name: "ArticleById",
  components: { PageTitle },
  data: function() {
    return {
      article: {}
    };
  },
  mounted() {
    const url = `${baseApiUrl}/articles/${this.$route.params.id}`;
    axios.get(url).then(res => (this.article = res.data));
  },
  updated() {
    document.querySelectorAll(".article-content pre").forEach(e => {
      hljs.highlightBlock(e);
    });
  }
};
</script>

<style>
.article-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 25px;
}

.article-content pre {
  padding: 20px;
  border-radius: 8px;
  background-color: #282a36;
  color: #fff;
}

.article-content blockquote {
  padding-left: 10px;
  margin-left: 20px;
  border-left: solid 2px #ccc;
}

.article-content p {
  line-height: 200%;
  color: #666;
}

.article-content img {
  max-width: 100%;
  position: relative;
  top: 25%;
  left: 25%;
  box-shadow: 2px 2px 10px #00000044;
}

.article-content :last-child {
  margin-bottom: 0px;
}
</style>
