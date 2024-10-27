<script setup>
import { ref } from 'vue';

const article = ref({
  title: '',
  tags: '',
  content: '',
  image: null,
});

const submitArticle = () => {
  // 这里可以处理表单提交的逻辑，例如发送到服务器
  console.log(article.value);
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    // 这里可以处理文件上传的逻辑，例如读取文件内容或上传到服务器
    article.value.image = file;
  }
};
</script>

<template>
  <div class="article-add">
    <div class="header">
      <h1>添加文章</h1>
      <p>分享你的知识与见解</p>
    </div>
    <form @submit.prevent="submitArticle" class="form-container">
      <div class="form-group">
        <label for="title">文章标题:</label>
        <input type="text" id="title" v-model="article.title" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="tags">文章标签:</label>
        <input type="text" id="tags" v-model="article.tags" placeholder="用逗号分隔" class="form-control" />
      </div>
      <div class="form-group">
        <label for="content">文章内容:</label>
        <textarea id="content" v-model="article.content" required class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="image">上传配图:</label>
        <input type="file" id="image" @change="handleFileUpload" class="form-control-file" />
      </div>
      <button type="submit" class="btn btn-primary">提交</button>
    </form>
  </div>
</template>

<style scoped>
body {
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}

.article-add {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.article-add::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 16px;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  z-index: -1;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 2.5em;
  color: #333;
  margin: 0;
}

.header p {
  font-size: 1.2em;
  color: #777;
  margin: 0;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  color: #555;
  font-size: 1.1em;
}

.form-control, .form-control-file {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background: #f9f9f9;
  color: #333;
  font-size: 1em;
}

.form-control:focus, .form-control-file:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
  outline: none;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  color: #fff;
  font-weight: bold;
  font-size: 1em;
}

.btn:hover {
  background: linear-gradient(135deg, #ff5f6d, #ffc371);
  transform: scale(1.05);
}

.btn:active {
  background: linear-gradient(135deg, #ff4c4c, #ff9a4c);
  transform: scale(0.95);
}

/* Additional styles for a more postmodern feel */
.article-add::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  transform: translate(-50%, -50%) rotate(45deg);
  z-index: -1;
  opacity: 0.5;
  filter: blur(20px);
}

@media (max-width: 768px) {
  .article-add {
    padding: 20px;
  }

  .header h1 {
    font-size: 2em;
  }

  .header p {
    font-size: 1em;
  }

  .form-control, .form-control-file {
    font-size: 0.9em;
  }

  .btn {
    font-size: 0.9em;
  }
}
</style>
