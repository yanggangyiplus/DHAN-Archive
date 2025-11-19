# 배포 가이드

이 폴더에는 다양한 배포 방법에 대한 가이드가 포함되어 있습니다.

## 배포 방법

### 1. Vercel 배포 (권장)

가장 간단한 방법입니다. GitHub 저장소와 연동하면 자동으로 배포됩니다.

1. [Vercel](https://vercel.com)에 로그인
2. "New Project" 클릭
3. GitHub 저장소 선택
4. 자동으로 감지된 설정 확인 후 "Deploy" 클릭

자세한 내용은 [docs/DEPLOYMENT.md](../docs/DEPLOYMENT.md)를 참조하세요.

### 2. Docker 배포

#### 빌드

```bash
docker build -t dhan-archive .
```

#### 실행

```bash
docker run -p 3000:3000 dhan-archive
```

#### Docker Compose 사용

```bash
docker-compose up -d
```

### 3. 수동 배포

#### 빌드

```bash
npm run build
```

#### 프로덕션 서버 실행

```bash
npm start
```

#### PM2 사용 (권장)

```bash
npm install -g pm2
pm2 start npm --name "dhan-archive" -- start
pm2 save
pm2 startup
```

## 환경 변수 설정

`.env.example` 파일을 참조하여 `.env.local` 파일을 생성하세요.

```bash
cp .env.example .env.local
```

필요한 환경 변수를 `.env.local`에 설정하세요.

## 참고 자료

- [Next.js 배포 문서](https://nextjs.org/docs/deployment)
- [Vercel 문서](https://vercel.com/docs)
- [Docker 문서](https://docs.docker.com/)

