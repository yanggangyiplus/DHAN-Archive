# D'HAN Archive Rebuild

감성적이고 직관적인 패션 아카이브 웹사이트

## 기술 스택

- Next.js 14
- React 18
- Tailwind CSS
- Pretendard, Noto Serif KR 폰트

## 시작하기

### 설치

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
npm run build
npm start
```

## 주요 기능

- **감성적 UI**: 아이보리, 베이지, 차콜 톤의 미니멀한 디자인
- **Editor Mode**: 관리자용 수정 모드 (텍스트 수정, 파일 업로드)
- **시즌별 아카이브**: 각 시즌의 사진, 영상, 3D 콘텐츠 관리
- **반응형 디자인**: 모바일/태블릿/데스크톱 지원

## 프로젝트 구조

```
├── components/          # 재사용 가능한 컴포넌트
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── MediaGallery.jsx
├── pages/              # Next.js 페이지
│   ├── index.js        # 홈
│   ├── brand.js        # 브랜드 소개
│   ├── [season]/       # 시즌 페이지 (동적 라우팅)
│   ├── inspiration.js  # 무드보드
│   └── contact.js      # 연락처
├── data/               # 정적 데이터
│   └── seasons.json
├── styles/             # 글로벌 스타일
│   └── globals.css
└── public/             # 정적 파일
    ├── uploads/        # 업로드된 파일
    └── assets/         # 이미지/영상
```

## Editor Mode 사용법

1. 헤더의 "Edit Mode OFF" 버튼 클릭
2. 텍스트를 직접 수정 (contenteditable)
3. 파일 업로드 버튼으로 이미지/영상 추가
4. 변경사항은 로컬스토리지에 저장됨

## 라이선스

© 2025 D'HAN by Han Ga Yeong
