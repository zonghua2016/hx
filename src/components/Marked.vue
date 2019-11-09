<template>
  <div>
    <div class="md-container"
         v-html="htmlContent">
    </div>
  </div>
</template>
<script>
const marked = require('marked')
const render = new marked.Renderer();
import md from 'static/testMarked.md';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'
export default {
  name: 'Marked',
  data() {
    return {
      htmlContent: '',
    }
  },
  mounted() {
    marked.setOptions({
      highlight: (code,lang) => `<pre class="hljs"><div><span class="codeLang">${lang}</span><i class="copid">复制</i></div><code>${hljs.highlightAuto(code).value}</code></pre>`,
      breaks: true,
      gfm: true,
      tables: true
    })
    this.transMarked()
  },
  methods: {
    transMarked(markedContent) {
      // let data = '';
      // const readStream = fs.createReadStream('static/testMarked.md');
      // readStream.setEncoding('utf8');
      // readStream.on('data', chunk => {
      //   data += chunk;
      // })
      // readStream.on('end', () => {

      // })
      this.htmlContent = marked(md);
      console.log(this.htmlContent);
      // this.htmlContent = marked(markedContent);


    }
  }
}
</script>
<style lang="scss">
@import "styles/md.scss";
</style>