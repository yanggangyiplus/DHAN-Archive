# D'HAN Archive

패션 브랜드 아카이브 웹사이트

D'HAN은 움직임 속의 정제된 감정을 옷으로 표현하는 디자이너 브랜드입니다. 스포츠의 리듬과 우아함에서 영감을 받아, 섬세한 디테일과 균형 잡힌 실루엣으로 '움직임의 미학'을 재해석합니다.

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8.svg)](https://tailwindcss.com/)

## 목차

- [프로젝트 개요](#프로젝트-개요)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [시스템 아키텍처](#시스템-아키텍처)
- [시작하기](#시작하기)
- [프로젝트 구조](#프로젝트-구조)
- [개발 가이드](#개발-가이드)
- [배포](#배포)
- [상세 문서](#상세-문서)

## 프로젝트 개요

### 목적

D'HAN Archive는 디자이너 브랜드 D'HAN의 컬렉션을 아카이브하고 소개하는 웹사이트입니다. 시즌별 컬렉션, 브랜드 스토리, 디자이너 프로필을 직관적인 UI로 제공합니다.

### 핵심 특징

- 감성적 디자인: 아이보리, 베이지, 차콜 톤의 미니멀한 색상 팔레트
- 직관적 네비게이션: 시즌별 타임라인과 갤러리 형식의 콘텐츠 구성
- 반응형 디자인: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 경험
- 성능 최적화: Next.js의 SSR과 이미지 최적화를 통한 빠른 로딩 속도

### 브랜드 철학

**Embrace Leisure, Live Busy**

D'HAN은 움직임 속의 정제된 감정을 옷으로 표현합니다. 스포츠의 리듬과 우아함에서 영감을 받아, 섬세한 디테일과 균형 잡힌 실루엣으로 '움직임의 미학'을 재해석합니다.

## 주요 기능

### 시즌별 컬렉션 아카이브

- 타임라인 뷰: 연도순으로 정렬된 시즌 컬렉션 목록
- 동적 라우팅: 각 시즌별 상세 페이지 (`/[season]`)
- 미디어 갤러리: 이미지 및 영상 콘텐츠 표시
- 디자이너 노트: 각 시즌의 컨셉과 스토리 설명

### 브랜드 소개

- 브랜드 스토리: D'HAN의 철학과 비전 소개
- 브랜드 비주얼: 브랜드 아이덴티티 이미지
- 컬렉션 하이라이트: 주요 시즌 컬렉션 미리보기

### 디자이너 프로필

- 프로필 정보: 디자이너 한가영의 기본 정보 및 연락처
- 수상 내역: 연도별 수상 및 성과 기록
- 포트폴리오 다운로드: PDF 포트폴리오 제공 (예정)

### 반응형 디자인

- 모바일 우선: 모바일 환경에서 최적화된 레이아웃
- 태블릿 지원: 중간 크기 화면에 최적화된 그리드 레이아웃
- 데스크톱 최적화: 넓은 화면에서 풍부한 콘텐츠 표시

### 성능 최적화

- SSR (Server-Side Rendering): Next.js의 SSR을 통한 빠른 초기 로딩
- 이미지 최적화: Next.js Image 컴포넌트를 통한 자동 최적화
- 코드 스플리팅: 페이지별 자동 코드 분할
- 애니메이션: CSS 기반 부드러운 페이드인 효과

## 기술 스택

### Frontend

- **Next.js 14**: React 기반 풀스택 프레임워크
  - SSR (Server-Side Rendering)
  - 동적 라우팅 (`[season]`)
  - 이미지 최적화
- **React 18**: UI 라이브러리
  - 함수형 컴포넌트
  - Hooks (useState, useEffect, useRouter)
- **Tailwind CSS 3.3**: 유틸리티 기반 CSS 프레임워크
  - 커스텀 색상 팔레트 (ivory, beige, charcoal)
  - 커스텀 애니메이션
  - 반응형 유틸리티

### 스타일링

- **Pretendard**: 한글 웹폰트 (본문)
- **Noto Serif KR**: 세리프 폰트 (제목)
- **Glassmorphism**: 반투명 유리 효과

### 개발 도구

- **PostCSS**: CSS 후처리
- **Autoprefixer**: 브라우저 호환성

## 시스템 아키텍처

### 전체 구조

```
┌─────────────────────────────────────────────────────────────┐
│                      사용자 (Browser)                        │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
        ┌──────────────────────────────────────┐
        │         Next.js Application          │
        │    (SSR + Client-Side Routing)      │
        └──────────────────┬───────────────────┘
                           │
        ┌──────────────────┴───────────────────┐
        │                                      │
        ▼                                      ▼
┌───────────────┐                    ┌───────────────┐
│   Pages       │                    │  Components   │
│               │                    │               │
│ - index.js    │                    │ - Header.jsx  │
│ - brand.js    │                    │ - Footer.jsx  │
│ - [season]/   │                    │ - MediaGallery│
│ - contact.js  │                    └───────────────┘
└───────┬───────┘
        │
        ▼
┌───────────────┐
│   Data Layer  │
│               │
│ - seasons.json│
│ - Static Assets│
└───────────────┘
```

### 페이지 라우팅 구조

```
/                    → 홈 (시즌 타임라인)
/brand               → 브랜드 소개
/[season]            → 시즌 상세 페이지
  ├── /2024FW        → 2024 F/W 컬렉션
  └── /2021ART       → 2021 ART 컬렉션
/contact             → 디자이너 프로필
```

### 컴포넌트 계층 구조

```
App (_app.js)
├── Header (공통)
├── Page Component
│   ├── Home (index.js)
│   ├── Brand (brand.js)
│   ├── Season ([season]/index.js)
│   │   └── MediaGallery
│   └── Contact (contact.js)
└── Footer (공통)
```

### 데이터 흐름

```
seasons.json (정적 데이터)
    │
    ▼
Page Component (데이터 로드)
    │
    ▼
MediaGallery Component (이미지/영상 표시)
    │
    ▼
사용자 인터페이스
```

## 시작하기

### 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치

1. 저장소 클론
```bash
git clone https://github.com/yanggangyi/DHAN-Archive.git
cd DHAN-Archive
```

2. 의존성 설치
```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

### 린트

```bash
npm run lint
```

## 프로젝트 구조

```
DHAN-Archive/
├── components/              # 재사용 가능한 컴포넌트
│   ├── Header.jsx          # 헤더 네비게이션
│   ├── Footer.jsx          # 푸터
│   └── MediaGallery.jsx    # 이미지/영상 갤러리
│
├── pages/                  # Next.js 페이지 (라우팅)
│   ├── _app.js             # 앱 루트 컴포넌트
│   ├── index.js            # 홈 페이지 (시즌 타임라인)
│   ├── brand.js            # 브랜드 소개 페이지
│   ├── contact.js          # 디자이너 프로필 페이지
│   └── [season]/           # 동적 라우팅 (시즌별 페이지)
│       └── index.js        # 시즌 상세 페이지
│
├── data/                   # 정적 데이터
│   └── seasons.json        # 시즌 컬렉션 데이터
│
├── styles/                 # 글로벌 스타일
│   └── globals.css         # 전역 CSS 및 Tailwind 설정
│
├── public/                 # 정적 파일
│   └── assets/             # 이미지/영상 에셋
│       ├── images/         # 이미지 파일
│       │   ├── brand/      # 브랜드 이미지
│       │   ├── collections/# 컬렉션 이미지
│       │   └── profile/    # 프로필 이미지
│       └── videos/         # 영상 파일
│
├── docs/                   # 프로젝트 문서
│   ├── ARCHITECTURE.md     # 아키텍처 상세 설명
│   ├── DEPLOYMENT.md       # 배포 가이드
│   └── DEVELOPMENT.md      # 개발 가이드
│
├── next.config.js          # Next.js 설정
├── tailwind.config.js      # Tailwind CSS 설정
├── postcss.config.js       # PostCSS 설정
├── package.json            # 프로젝트 의존성
└── README.md               # 프로젝트 설명
```

## 개발 가이드

### 새로운 시즌 추가하기

1. `data/seasons.json` 파일에 새 시즌 데이터 추가:
```json
{
  "id": "2025SS",
  "title": "2025 S/S",
  "subtitle": "시즌 제목",
  "description": "시즌 설명",
  "year": 2025,
  "images": ["/assets/images/collections/25SS/image1.jpg"],
  "videos": ["/assets/videos/collections/25SS/video1.mp4"]
}
```

2. 이미지/영상 파일을 `public/assets/` 폴더에 추가
3. 헤더 네비게이션에 링크 추가 (선택사항)

### 스타일 커스터마이징

- 색상: `tailwind.config.js`의 `colors` 섹션 수정
- 폰트: `styles/globals.css`의 `@import` 섹션 수정
- 애니메이션: `tailwind.config.js`의 `keyframes` 섹션 수정

### 컴포넌트 개발

- 모든 컴포넌트는 `components/` 폴더에 위치
- 함수형 컴포넌트 사용
- 한국어 주석 추가 권장

자세한 개발 가이드는 [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)를 참조하세요.

## 배포

### Vercel 배포

1. Vercel 계정 생성 및 프로젝트 연결
2. GitHub 저장소 연결
3. 자동 배포 설정 완료

### 수동 배포

```bash
# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

자세한 배포 가이드는 [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)를 참조하세요.

## 상세 문서

- [아키텍처 문서](docs/ARCHITECTURE.md) - 시스템 구조 및 설계 상세 설명
- [배포 가이드](docs/DEPLOYMENT.md) - 배포 방법 및 환경 설정
- [개발 가이드](docs/DEVELOPMENT.md) - 개발 환경 설정 및 컨벤션

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 작성자

**Han Ga Yeong**

- 이메일: hangayeong105@gmail.com
- 인스타그램: [@yanggangyi_](https://www.instagram.com/yanggangyi_)

© 2025 D'HAN by Han Ga Yeong
