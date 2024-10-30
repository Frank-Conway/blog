# 使用官方的 Node.js 18 基础镜像
FROM node:18 AS build-stage

# 设置工作目录
WORKDIR /app_vue1

# 复制项目文件到容器中
COPY package*.json ./

# 安装依赖
RUN pnpm install

# 复制项目文件到容器中
COPY . .

# 构建生产版本
RUN npm run build

# 使用 Nginx 作为静态文件服务器
FROM nginx:alpine AS production-stage

# 设置工作目录
WORKDIR /usr/share/nginx/html

# 复制构建好的静态文件到 Nginx 的 HTML 目录
COPY --from=build-stage /app/dist .

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
