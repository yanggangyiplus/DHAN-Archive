# DHAN-Archive 폴더 정리 보고서

## 정리 완료

DHAN-Archive 프로젝트의 루트 디렉토리를 깔끔하게 정리했습니다.

## 변경 사항

### 파일 이동

1. **배포 관련 파일**
   - `docker-compose.yml` → `deployment/docker/docker-compose.yml`
   - `Dockerfile` → `deployment/docker/Dockerfile`
   - `.dockerignore` → `deployment/docker/.dockerignore`
   - `vercel.json` → `deployment/vercel/vercel.json`

2. **스타일 파일**
   - `styles/globals.css` → `src/styles/globals.css`
   - `styles/` 폴더 삭제

3. **설정 파일**
   - `.env.example` → `configs/.env.example`

4. **삭제된 파일**
   - `.DS_Store` (macOS 시스템 파일)

### Import 경로 수정

1. **pages/_app.js**
   - `'../styles/globals.css'` → `'../src/styles/globals.css'`

2. **tailwind.config.js**
   - `'./components/**/*.{js,jsx}'` → `'./src/components/**/*.{js,jsx}'`

## 최종 루트 디렉토리 구조

```
DHAN-Archive/
├── .env.example          # (선택사항, 필요시 configs/에서 복사)
├── LICENSE
├── README.md
├── data/                 # 정적 데이터
├── deployment/           # 배포 관련 파일
│   ├── docker/
│   │   ├── docker-compose.yml
│   │   ├── Dockerfile
│   │   └── .dockerignore
│   ├── vercel/
│   │   └── vercel.json
│   └── README.md
├── docs/                 # 문서
├── next.config.js        # Next.js 설정 (필수)
├── package.json          # 패키지 정보 (필수)
├── package-lock.json     # 패키지 잠금 파일 (필수)
├── pages/                # Next.js 페이지 (필수)
├── postcss.config.js     # PostCSS 설정 (필수)
├── public/               # 정적 파일 (필수)
├── src/                  # 소스 코드
│   ├── components/       # React 컴포넌트
│   └── styles/           # 스타일 파일
└── tailwind.config.js    # Tailwind 설정 (필수)
```

## 루트에 남은 파일 설명

### 필수 파일 (Next.js 요구사항)
- `next.config.js` - Next.js 설정 파일
- `package.json`, `package-lock.json` - Node.js 패키지 관리
- `postcss.config.js` - PostCSS 설정
- `tailwind.config.js` - Tailwind CSS 설정
- `pages/` - Next.js 페이지 디렉토리 (루트에 필수)
- `public/` - 정적 파일 디렉토리 (루트에 필수)

### 일반 파일
- `README.md` - 프로젝트 설명서
- `LICENSE` - 라이선스 파일
- `.env.example` - 환경 변수 예제 (선택사항)

### 폴더
- `data/` - 정적 데이터 (시즌 정보 등)
- `deployment/` - 배포 관련 파일
- `docs/` - 문서
- `src/` - 소스 코드

## 개선 효과

1. **루트 디렉토리 정리**: 배포 관련 파일들이 `deployment/` 폴더로 이동하여 루트가 깔끔해짐
2. **구조 일관성**: 스타일 파일이 `src/styles/`로 이동하여 소스 코드 구조와 일관성 유지
3. **유지보수성 향상**: 관련 파일들이 논리적으로 그룹화되어 찾기 쉬워짐

## 주의사항

### Docker 사용 시
Dockerfile과 docker-compose.yml이 `deployment/docker/`로 이동했으므로, 실행 시 경로를 수정해야 합니다:

```bash
# 기존
docker-compose up

# 변경 후
cd deployment/docker
docker-compose up
```

또는 루트에서:
```bash
docker-compose -f deployment/docker/docker-compose.yml up
```

### Vercel 배포 시
`vercel.json`이 `deployment/vercel/`로 이동했으므로, Vercel 설정에서 경로를 지정하거나 파일을 루트로 복사해야 할 수 있습니다.

## 검증 방법

프로젝트가 정상 작동하는지 확인:

```bash
# 개발 서버 실행
npm run dev

# 빌드 테스트
npm run build

# 프로덕션 서버 실행
npm start
```

