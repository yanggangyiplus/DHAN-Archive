import '../src/styles/globals.css';

/**
 * Next.js App 루트 컴포넌트
 * 
 * 모든 페이지의 최상위 컴포넌트로, 전역 스타일을 적용하고
 * 페이지 컴포넌트를 렌더링합니다.
 * 
 * @param {Object} props - Next.js App 컴포넌트 props
 * @param {React.Component} props.Component - 현재 페이지 컴포넌트
 * @param {Object} props.pageProps - 페이지 컴포넌트에 전달할 props
 * @returns {JSX.Element} App 컴포넌트 JSX 요소
 */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}


