# 中国 vs 世界其他国家

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green)](https://nodejs.org/)
[![Platform](https://img.shields.io/badge/Platform-静态网站-blue)](https://pages.cloudflare.com/)

[中文](README_CN.md) | [English](README.md)

一个展示中国与世界其他国家统计数据对比的静态网站。

## 特性

- 📊 **全面的数据**: 人口、经济、能源、农业、工业和环境统计数据
- 🌍 **多个数据来源**: 世界银行、国际货币基金组织、中国国家统计局
- 🌐 **多语言支持**: 英语 (en_US) 和中文 (zh_CN)
- 📱 **移动端优先**: 响应式布局，适配所有设备
- 🎨 **科技动画背景**: 基于Canvas的粒子动画
- ☁️ **Cloudflare Pages支持**: 易于使用GitHub Actions部署

## 快速开始

### 前置要求

- Node.js 16.x 或更高版本
- npm

### 安装

```bash
# 克隆仓库
git clone https://github.com/yourusername/china-vs-rest-of-the-world.git
cd china-vs-rest-of-the-world

# 安装依赖
npm install
```

### 开发

```bash
# 启动开发服务器
npm start
```

在浏览器中打开 http://localhost:3000

### 生产构建

```bash
# 构建静态网站
npm run build
```

构建的文件将在 `build` 目录中。

### 生产服务器

```bash
# 运行生产服务器
npm run server
```

在浏览器中打开 http://localhost:8080

## 项目结构

```
china-vs-rest-of-the-world/
├── src/
│   ├── client/           # Pug模板
│   │   ├── index.pug     # 主模板
│   │   ├── header.pug    # 头部组件
│   │   ├── footer.pug    # 页脚组件
│   │   ├── data-card.pug # 数据卡片组件
│   │   └── public/       # 静态文件
│   │       ├── css/      # 样式表
│   │       └── js/       # JavaScript
│   ├── data/            # 数据模块
│   │   ├── world-bank.js
│   │   ├── imf.js
│   │   ├── china-gov.js
│   │   └── links.js
│   ├── locales/          # 语言文件
│   │   ├── en_US.js
│   │   └── zh_CN.js
│   └── server/           # 服务器代码
│       ├── index.js      # 开发服务器
│       └── prod.js       # 生产服务器
├── scripts/
│   └── build.js          # 构建脚本
├── build/                # 构建输出
├── .github/
│   └── workflows/        # GitHub Actions
└── package.json
```

## 数据来源

- [世界银行数据](https://data.worldbank.org/)
- [IMF数据](https://www.imf.org/en/Publications/WEO)
- [中国国家统计局](https://data.stats.gov.cn/)

## 部署

### 部署到Cloudflare Pages

1. Fork此仓库
2. 进入 [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
3. 连接您的GitHub账户
4. 选择您fork的仓库
5. 配置构建设置：
   - 构建命令: `npm run build`
   - 输出目录: `public`
6. 点击"保存并部署"

### 使用GitHub Actions部署

1. 进入GitHub仓库 → Settings → Secrets
2. 添加密钥:
   - `CLOUDFLARE_API_TOKEN`: 您的Cloudflare API令牌
   - `CLOUDFLARE_ACCOUNT_ID`: 您的Cloudflare账户ID
3. 推送到main分支或创建发布版本

详细说明请参阅 [Cloudflare Pages GitHub集成](https://developers.cloudflare.com/pages/platform/github-integration/)。

## 许可证

MIT 许可证 - 详见 [LICENSE](LICENSE)。

## 贡献

欢迎贡献！请随时提交Pull Request。
