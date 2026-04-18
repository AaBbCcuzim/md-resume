# 使用 Nginx 官方镜像作为运行环境
FROM nginx:stable-alpine

# 将构建好的静态文件复制到 Nginx 默认的 HTML 目录
# 这里的 ./dist 是假设在 GitHub Actions 构建后将文件传到了 Docker 上下文根目录
COPY ./dist /usr/share/nginx/html

# 复制自定义 Nginx 配置（如果需要处理单页应用路由）
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
