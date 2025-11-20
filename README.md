# D'HAN Archive

패션 브랜드 아카이브 웹사이트

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8.svg)](https://tailwindcss.com/)

## 프로젝트 미리보기

*D'HAN Archive 홈페이지 - 시즌별 컬렉션 타임라인*

## 핵심 성과 요약

| 항목 | 성과 |
|:---:|:---:|
| **프레임워크** | Next.js 14 기반 SSR 구현 |
| **디자인** | 감성적 미니멀 디자인 (아이보리, 베이지, 차콜 톤) |
| **성능** | SSR을 통한 빠른 초기 로딩 |
| **반응형** | 모바일, 태블릿, 데스크톱 모든 기기 지원 |
| **구현 범위** | 모든 페이지 및 컴포넌트 직접 구현 |

## 문제 정의 & 해결 목적

디자이너 브랜드의 컬렉션을 아카이브하고 소개하는 웹사이트가 필요했습니다. 기존 HTML/CSS 기반 정적 사이트는 유지보수가 어렵고, 시즌별 컬렉션 추가가 번거로웠습니다.

이 프로젝트는 Next.js 기반의 동적 웹사이트로, 시즌별 컬렉션을 쉽게 관리하고 직관적인 UI로 제공합니다. 감성적이고 미니멀한 디자인으로 브랜드 아이덴티티를 표현합니다.

## 프로젝트 개요

### 목적
D'HAN Archive는 디자이너 브랜드 D'HAN의 컬렉션을 아카이브하고 소개하는 웹사이트입니다. 시즌별 컬렉션, 브랜드 스토리, 디자이너 프로필을 직관적인 UI로 제공합니다.

### 주요 특징
- 감성적 디자인: 아이보리, 베이지, 차콜 톤의 미니멀한 색상 팔레트
- 직관적 네비게이션: 시즌별 타임라인과 갤러리 형식의 콘텐츠 구성
- 반응형 디자인: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 경험
- 성능 최적화: Next.js의 SSR과 이미지 최적화를 통한 빠른 로딩 속도

### 브랜드 철학
**Embrace Leisure, Live Busy**

D'HAN은 움직임 속의 정제된 감정을 옷으로 표현합니다. 스포츠의 리듬과 우아함에서 영감을 받아, 섬세한 디테일과 균형 잡힌 실루엣으로 '움직임의 미학'을 재해석합니다.

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

## 모델/기술 스택

| 영역 | 기술 | 선택 이유 |
|------|------|----------|
| **Frontend Framework** | Next.js 14 | SSR을 통한 빠른 초기 로딩, 동적 라우팅 지원, 이미지 최적화 기능 제공 |
| **UI Library** | React 18 | 컴포넌트 기반 개발, 함수형 컴포넌트 및 Hooks 사용 |
| **CSS Framework** | Tailwind CSS 3.3 | 유틸리티 기반 CSS로 빠른 스타일링, 커스텀 색상 및 애니메이션 지원 |
| **폰트** | Pretendard, Noto Serif KR | 한글 웹폰트로 가독성 향상, 세리프 폰트로 브랜드 아이덴티티 표현 |
| **스타일링 효과** | Glassmorphism | 반투명 유리 효과로 감성적 디자인 구현 |
| **개발 도구** | PostCSS, Autoprefixer | CSS 후처리 및 브라우저 호환성 보장 |

## 실험 결과

이 프로젝트는 웹사이트 구축 프로젝트로, 실험 결과보다는 사용자 경험과 성능 최적화에 중점을 둡니다.

### 성능 지표

- **초기 로딩**: SSR을 통한 빠른 초기 렌더링
- **이미지 최적화**: Next.js Image 컴포넌트를 통한 자동 최적화
- **코드 스플리팅**: 페이지별 자동 코드 분할
- **반응형 디자인**: 모든 기기에서 최적화된 레이아웃

## 핵심 기술 설명

### Next.js 선택 이유

Next.js는 React 기반 풀스택 프레임워크로, SSR을 통한 빠른 초기 로딩을 제공합니다. 동적 라우팅(`[season]`)을 통해 시즌별 페이지를 쉽게 관리할 수 있으며, 이미지 최적화 기능으로 성능을 향상시킵니다.

### Tailwind CSS 선택 이유

Tailwind CSS는 유틸리티 기반 CSS 프레임워크로, 빠른 스타일링이 가능합니다. 커스텀 색상 팔레트(ivory, beige, charcoal)와 애니메이션을 쉽게 정의할 수 있어 브랜드 아이덴티티를 표현하기에 적합합니다.

### Glassmorphism 효과

반투명 유리 효과를 통해 감성적이고 모던한 디자인을 구현했습니다. CSS의 `backdrop-filter` 속성을 활용하여 구현했습니다.

## 실행 방법

### Quick Start

```bash
# 저장소 클론
git clone https://github.com/yanggangyi/DHAN-Archive.git
cd DHAN-Archive

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 상세 설치 가이드

1. **요구사항**
   - Node.js 18.0 이상
   - npm 또는 yarn

2. **설치**
```bash
# 저장소 클론
git clone https://github.com/yanggangyi/DHAN-Archive.git
cd DHAN-Archive

# 의존성 설치
npm install
```

3. **개발 서버 실행**
```bash
npm run dev
```

4. **빌드**
```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

5. **린트**
```bash
npm run lint
```

## 사용 시나리오 (Use Cases)

### 1. 시즌별 컬렉션 아카이브
**시나리오**: 디자이너가 새로운 시즌 컬렉션을 추가하고 싶을 때  
**해결책**: `data/seasons.json` 파일에 새 시즌 데이터 추가, 이미지/영상 파일을 `public/assets/` 폴더에 추가  
**효과**: 코드 수정 없이 시즌별 컬렉션을 쉽게 관리

### 2. 브랜드 스토리 소개
**시나리오**: 브랜드의 철학과 비전을 소개하고 싶을 때  
**해결책**: Brand 페이지에서 브랜드 스토리, 비전, 비주얼 이미지 표시  
**효과**: 브랜드 아이덴티티를 효과적으로 전달

### 3. 디자이너 프로필 공유
**시나리오**: 디자이너의 프로필과 수상 내역을 공유하고 싶을 때  
**해결책**: Contact 페이지에서 프로필 정보, 수상 내역, 포트폴리오 다운로드 링크 제공  
**효과**: 디자이너의 경력과 성과를 체계적으로 소개

### 4. 미디어 갤러리 표시
**시나리오**: 시즌별 컬렉션의 이미지와 영상을 갤러리 형식으로 표시하고 싶을 때  
**해결책**: MediaGallery 컴포넌트를 통해 이미지와 영상을 그리드 형식으로 표시  
**효과**: 직관적인 갤러리 UI로 컬렉션을 효과적으로 전시

## 한계 & 개선 방향

### 현재 한계

- **정적 데이터 관리**: JSON 파일 기반 데이터 관리로 동적 콘텐츠 관리 제한
- **관리자 기능 부재**: 웹 인터페이스를 통한 콘텐츠 관리 기능 없음
- **검색 기능 부재**: 시즌별 컬렉션 검색 기능 없음
- **다국어 지원 부재**: 한국어만 지원, 다국어 지원 없음

### 개선 방향

- **CMS 통합**: Headless CMS(Contentful, Strapi 등) 연동으로 동적 콘텐츠 관리
- **관리자 대시보드**: 웹 인터페이스를 통한 콘텐츠 관리 기능 추가
- **검색 기능**: 시즌별 컬렉션 검색 및 필터링 기능 추가
- **다국어 지원**: i18n 라이브러리를 통한 다국어 지원
- **SEO 최적화**: 메타 태그 및 Open Graph 태그 최적화
- **성능 모니터링**: Web Vitals 모니터링 및 성능 최적화

## 개인 기여도

이 프로젝트는 **개인 프로젝트**로, 모든 작업을 직접 수행했습니다.

### 프로젝트 설계
- 전체 아키텍처 설계: Next.js 기반 SSR 구조 설계
- 페이지 구조 설계: 홈, 브랜드, 시즌, 프로필 페이지 구조 설계
- 컴포넌트 설계: Header, Footer, MediaGallery 등 재사용 가능한 컴포넌트 설계

### 디자인 구현
- 색상 팔레트: 아이보리, 베이지, 차콜 톤의 커스텀 색상 정의
- 폰트 설정: Pretendard, Noto Serif KR 폰트 적용
- Glassmorphism 효과: 반투명 유리 효과 구현
- 애니메이션: 부드러운 페이드인 애니메이션 구현

### 페이지 개발
- 홈 페이지: 시즌별 타임라인 구현
- 브랜드 페이지: 브랜드 소개, 비전, 비주얼 이미지 표시
- 시즌 페이지: 동적 라우팅을 통한 시즌별 상세 페이지 구현
- 프로필 페이지: 디자이너 프로필, 수상 내역, 포트폴리오 다운로드 링크 제공

### 컴포넌트 개발
- Header: 네비게이션 바 구현
- Footer: 푸터 구현
- MediaGallery: 이미지 및 영상 갤러리 컴포넌트 구현

### 데이터 관리
- seasons.json: 시즌별 컬렉션 데이터 구조 설계 및 관리
- 정적 에셋 관리: 이미지 및 영상 파일 구조 설계

### 배포
- Vercel 배포: Vercel을 통한 배포 설정
- Docker 설정: Dockerfile 및 docker-compose.yml 작성

### 문서화
- README: 프로젝트 설명 및 사용 가이드 작성
- 개발 가이드: 새로운 시즌 추가 방법 등 개발 가이드 작성
- 아키텍처 문서: 시스템 구조 및 설계 상세 설명

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

## 라이선스 & 작성자

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

**작성자**: Han Ga Yeong

- 이메일: hangayeong105@gmail.com
- 인스타그램: [@yanggangyi_](https://www.instagram.com/yanggangyi_)

© 2025 D'HAN by Han Ga Yeong

## 상세 문서

- [아키텍처 문서](docs/ARCHITECTURE.md) - 시스템 구조 및 설계 상세 설명
- [배포 가이드](docs/DEPLOYMENT.md) - 배포 방법 및 환경 설정
- [개발 가이드](docs/DEVELOPMENT.md) - 개발 환경 설정 및 컨벤션
