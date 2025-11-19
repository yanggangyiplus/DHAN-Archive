# 개발 가이드

D'HAN Archive 프로젝트의 개발 환경 설정 및 개발 가이드

## 목차

- [개발 환경 설정](#개발-환경-설정)
- [프로젝트 구조 이해](#프로젝트-구조-이해)
- [코딩 컨벤션](#코딩-컨벤션)
- [컴포넌트 개발](#컴포넌트-개발)
- [스타일링 가이드](#스타일링-가이드)
- [데이터 관리](#데이터-관리)
- [디버깅](#디버깅)
- [테스트](#테스트)

## 개발 환경 설정

### 필수 요구사항

- Node.js: 18.0 이상
- npm: 9.0 이상 (또는 yarn)
- Git: 최신 버전

### 초기 설정

1. 저장소 클론
```bash
git clone https://github.com/yanggangyi/DHAN-Archive.git
cd DHAN-Archive
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

4. 브라우저에서 확인
```
http://localhost:3000
```

### 개발 도구 추천

- VS Code: 코드 에디터
- VS Code 확장 프로그램:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - React snippets

## 프로젝트 구조 이해

### 디렉토리 구조

```
DHAN-Archive/
├── components/          # 재사용 가능한 컴포넌트
├── pages/              # Next.js 페이지 (라우팅)
├── data/               # 정적 데이터
├── styles/             # 글로벌 스타일
├── public/             # 정적 파일
└── docs/               # 프로젝트 문서
```

### 파일 명명 규칙

- 컴포넌트: PascalCase (예: `Header.jsx`)
- 페이지: kebab-case 또는 camelCase (예: `index.js`, `brand.js`)
- 유틸리티: camelCase (예: `utils.js`)
- 상수: UPPER_SNAKE_CASE (예: `CONSTANTS.js`)

## 코딩 컨벤션

### JavaScript/React 컨벤션

#### 함수형 컴포넌트 사용

```javascript
// 좋은 예
export default function Header() {
  return <header>...</header>;
}

// 나쁜 예
export default class Header extends React.Component {
  ...
}
```

#### Hooks 사용

```javascript
// useState
const [state, setState] = useState(initialValue);

// useEffect
useEffect(() => {
  // 사이드 이펙트
}, [dependencies]);
```

#### 주석 작성

```javascript
/**
 * 컴포넌트 설명
 * @param {Object} props - 컴포넌트 props
 */
export default function Component(props) {
  // 주요 로직 설명
  const value = calculateValue();
  
  return <div>...</div>;
}
```

### 코드 포맷팅

- 들여쓰기: 2 spaces
- 세미콜론: 사용
- 따옴표: 작은따옴표 사용
- 라인 길이: 80-100자 이내

## 컴포넌트 개발

### 컴포넌트 생성 가이드

#### 기본 구조

```javascript
/**
 * 컴포넌트 설명
 */
export default function ComponentName({ prop1, prop2 }) {
  // 상태 관리
  const [state, setState] = useState(initialValue);
  
  // 사이드 이펙트
  useEffect(() => {
    // ...
  }, []);
  
  // 이벤트 핸들러
  const handleClick = () => {
    // ...
  };
  
  // 렌더링
  return (
    <div className="...">
      {/* JSX */}
    </div>
  );
}
```

#### Props 타입 정의 (선택사항)

```javascript
import PropTypes from 'prop-types';

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};
```

#### 기본값 설정

```javascript
export default function ComponentName({ 
  prop1 = 'default', 
  prop2 = 0 
}) {
  // ...
}
```

### 컴포넌트 예시

#### 재사용 가능한 컴포넌트

```javascript
/**
 * 버튼 컴포넌트
 * @param {string} children - 버튼 텍스트
 * @param {function} onClick - 클릭 핸들러
 * @param {string} variant - 버튼 스타일 변형
 */
export default function Button({ 
  children, 
  onClick, 
  variant = 'primary' 
}) {
  return (
    <button 
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
}
```

## 스타일링 가이드

### Tailwind CSS 사용

#### 기본 사용법

```javascript
<div className="flex items-center justify-between p-4">
  <h1 className="text-2xl font-bold text-charcoal">Title</h1>
</div>
```

#### 커스텀 클래스 사용

```javascript
// globals.css에 정의된 클래스 사용
<div className="glass fade-in">
  Content
</div>
```

#### 반응형 디자인

```javascript
<div className="
  w-full 
  md:w-1/2 
  lg:w-1/3
">
  Responsive content
</div>
```

### 색상 시스템

```javascript
// 커스텀 색상 사용
<div className="bg-beige text-charcoal">
  Content
</div>

// 투명도 조절
<div className="bg-beige/30 text-charcoal/70">
  Content
</div>
```

### 애니메이션

```javascript
// 페이드인 애니메이션
<div className="fade-in">
  Content
</div>

// 커스텀 애니메이션
<div className="animate-fade-in">
  Content
</div>
```

## 데이터 관리

### 정적 데이터 추가

#### 시즌 데이터 추가

1. `data/seasons.json` 파일 열기
2. 새 시즌 객체 추가:

```json
{
  "id": "2025SS",
  "title": "2025 S/S",
  "subtitle": "시즌 제목",
  "description": "시즌 설명",
  "year": 2025,
  "images": [
    "/assets/images/collections/25SS/image1.jpg",
    "/assets/images/collections/25SS/image2.jpg"
  ],
  "videos": [
    "/assets/videos/collections/25SS/video1.mp4"
  ]
}
```

3. 이미지/영상 파일을 `public/assets/` 폴더에 추가
4. 경로가 올바른지 확인

### 데이터 로딩

```javascript
// 정적 데이터 import
import seasonsData from '../data/seasons.json';

// 데이터 사용
const seasons = seasonsData.seasons;
const season = seasons.find(s => s.id === '2024FW');
```

## 디버깅

### 개발자 도구 사용

#### React DevTools

1. 브라우저 확장 프로그램 설치
2. 컴포넌트 트리 확인
3. Props 및 State 확인

#### Next.js 디버깅

```bash
# 상세 로그와 함께 실행
DEBUG=* npm run dev
```

### 콘솔 로그

```javascript
// 개발 중에만 로그 출력
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}
```

### 에러 처리

```javascript
try {
  // 코드 실행
} catch (error) {
  console.error('Error:', error);
  // 에러 처리
}
```

## 테스트

### 린트 검사

```bash
npm run lint
```

### 빌드 테스트

```bash
# 프로덕션 빌드 테스트
npm run build

# 빌드 결과 확인
npm start
```

### 수동 테스트 체크리스트

- [ ] 모든 페이지가 정상적으로 로드되는가?
- [ ] 이미지가 올바르게 표시되는가?
- [ ] 링크가 올바르게 작동하는가?
- [ ] 반응형 디자인이 올바르게 작동하는가?
- [ ] 모바일에서 정상적으로 보이는가?

## Git 워크플로우

### 브랜치 전략

- main: 프로덕션 브랜치
- develop: 개발 브랜치
- feature/: 기능 개발 브랜치

### 커밋 메시지

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 추가
chore: 빌드 설정 변경
```

### 예시

```bash
git checkout -b feature/add-new-season
# 작업 수행
git add .
git commit -m "feat: 2025 SS 시즌 추가"
git push origin feature/add-new-season
```

## 성능 최적화 팁

### 이미지 최적화

- Next.js Image 컴포넌트 사용
- 적절한 이미지 크기 사용
- WebP 포맷 사용 고려

### 코드 스플리팅

- 동적 import 사용
- 큰 라이브러리는 필요할 때만 로드

### 불필요한 리렌더링 방지

- React.memo 사용
- useMemo, useCallback 활용

## 문제 해결

### 일반적인 문제

#### 포트가 이미 사용 중

```bash
# 다른 포트로 실행
PORT=3001 npm run dev
```

#### 모듈을 찾을 수 없음

```bash
# node_modules 재설치
rm -rf node_modules package-lock.json
npm install
```

#### 스타일이 적용되지 않음

- Tailwind CSS 클래스명 확인
- `tailwind.config.js` 설정 확인
- 브라우저 캐시 삭제

## 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [React 공식 문서](https://react.dev/)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [ESLint 규칙](https://eslint.org/docs/rules/)
