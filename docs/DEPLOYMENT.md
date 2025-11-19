# 배포 가이드

D'HAN Archive 프로젝트의 배포 방법 및 환경 설정 가이드

## 목차

- [배포 전 준비사항](#배포-전-준비사항)
- [Vercel 배포](#vercel-배포)
- [수동 배포](#수동-배포)
- [환경 변수 설정](#환경-변수-설정)
- [빌드 최적화](#빌드-최적화)
- [문제 해결](#문제-해결)

## 배포 전 준비사항

### 프로젝트 빌드 테스트

배포 전에 로컬에서 빌드가 정상적으로 작동하는지 확인합니다:

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 확인
npm start
```

### 환경 변수 확인

프로덕션 환경에서 필요한 환경 변수가 모두 설정되어 있는지 확인합니다.

### 정적 파일 확인

`public/` 폴더의 모든 이미지 및 영상 파일이 올바른 경로에 있는지 확인합니다.

## Vercel 배포

Vercel은 Next.js 프로젝트를 위한 최적의 배포 플랫폼입니다.

### Vercel 계정 생성

1. [Vercel](https://vercel.com)에 접속하여 계정 생성
2. GitHub 계정과 연동

### 프로젝트 연결

1. Vercel 대시보드에서 "New Project" 클릭
2. GitHub 저장소 선택 또는 import
3. 프로젝트 설정:
   - Framework Preset: Next.js (자동 감지)
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (자동 설정)
   - Output Directory: `.next` (자동 설정)

### 환경 변수 설정

Vercel 대시보드에서 환경 변수를 설정합니다:

1. 프로젝트 설정 → Environment Variables
2. 필요한 환경 변수 추가:
   - `NODE_ENV=production`
   - 기타 필요한 변수들

### 배포 실행

1. "Deploy" 버튼 클릭
2. 배포 완료 후 제공되는 URL로 접속 확인

### 자동 배포 설정

- GitHub 연동 시: `main` 브랜치에 push하면 자동 배포
- 프리뷰 배포: Pull Request 생성 시 자동으로 프리뷰 배포

### 커스텀 도메인 설정

1. Vercel 대시보드 → 프로젝트 설정 → Domains
2. 도메인 추가 및 DNS 설정

## 수동 배포

### 빌드 생성

```bash
# 프로덕션 빌드
npm run build
```

빌드가 완료되면 `.next` 폴더에 최적화된 파일들이 생성됩니다.

### Node.js 서버 배포

#### PM2 사용

```bash
# PM2 설치
npm install -g pm2

# 프로덕션 서버 시작
pm2 start npm --name "dhan-archive" -- start

# 자동 재시작 설정
pm2 startup
pm2 save
```

#### 직접 실행

```bash
# 프로덕션 서버 실행
npm start
```

### 정적 파일 서빙

정적 파일만 서빙하려면:

```bash
# 정적 파일 export
npm run build
npm run export  # next.config.js에 export 설정 필요
```

생성된 `out` 폴더를 정적 호스팅 서비스에 업로드합니다.

## 환경 변수 설정

### 개발 환경 (.env.local)

```bash
# .env.local 파일 생성
NODE_ENV=development
```

### 프로덕션 환경

#### Vercel

Vercel 대시보드에서 환경 변수 설정:
- Production
- Preview
- Development

각 환경별로 다른 값을 설정할 수 있습니다.

#### 수동 배포

서버 환경에 따라 환경 변수를 설정합니다:

```bash
# Linux/Mac
export NODE_ENV=production

# 또는 .env 파일 사용
NODE_ENV=production
```

## 빌드 최적화

### 이미지 최적화

이미지는 자동으로 최적화되지만, 원본 이미지도 최적화하는 것을 권장합니다:

- 이미지 포맷: WebP 사용 권장
- 이미지 크기: 적절한 해상도로 리사이즈
- 압축: 이미지 압축 도구 사용

### 번들 크기 최적화

```bash
# 번들 분석
npm install @next/bundle-analyzer

# next.config.js에 설정 추가
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
```

### 정적 파일 최적화

- 불필요한 파일 제거
- 파일 압축 (Gzip/Brotli)
- CDN 사용 고려

## 문제 해결

### 빌드 에러

#### "Module not found" 에러

```bash
# node_modules 재설치
rm -rf node_modules package-lock.json
npm install
```

#### "Out of memory" 에러

Node.js 메모리 제한 증가:

```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### 배포 후 이미지가 보이지 않음

1. 이미지 경로 확인 (`public/` 폴더 기준)
2. Next.js Image 컴포넌트 사용 확인
3. `next.config.js`의 이미지 설정 확인

### 라우팅 문제

1. 동적 라우팅 경로 확인
2. `next.config.js`의 rewrites/redirects 설정 확인

### 성능 문제

1. Lighthouse로 성능 분석
2. 이미지 최적화 확인
3. 번들 크기 확인
4. CDN 사용 고려

## 모니터링

### Vercel Analytics

Vercel 대시보드에서 제공하는 Analytics 기능 활용:

- 페이지뷰
- 성능 메트릭
- 에러 로그

### 커스텀 모니터링

필요시 다음 도구들을 통합할 수 있습니다:

- Sentry: 에러 추적
- Google Analytics: 사용자 분석
- Vercel Analytics: 성능 모니터링

## 롤백 전략

### Vercel

1. 배포 히스토리에서 이전 버전 선택
2. "Promote to Production" 클릭

### 수동 배포

```bash
# Git으로 이전 버전으로 롤백
git checkout <previous-commit>
npm run build
npm start
```

## 보안 체크리스트

배포 전 확인사항:

- [ ] 환경 변수에 민감한 정보가 하드코딩되지 않았는지 확인
- [ ] `.env.local` 파일이 Git에 커밋되지 않았는지 확인
- [ ] API 키 등이 공개 저장소에 노출되지 않았는지 확인
- [ ] HTTPS 사용 확인
- [ ] 보안 헤더 설정 확인

## 참고 자료

- [Next.js 배포 문서](https://nextjs.org/docs/deployment)
- [Vercel 문서](https://vercel.com/docs)
- [PM2 문서](https://pm2.keymetrics.io/docs/)
