import Link from 'next/link';

/**
 * 헤더 컴포넌트
 * 
 * 모든 페이지 상단에 고정되어 표시되는 네비게이션 바입니다.
 * Glassmorphism 효과를 적용하여 반투명한 유리 느낌의 디자인을 구현했습니다.
 * 
 * @returns {JSX.Element} 헤더 JSX 요소
 */
export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 glass border-b border-beige/30">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* 로고/브랜드명 - 홈으로 이동하는 링크 */}
                    <Link href="/" className="text-2xl font-serif text-charcoal hover:text-beige transition-colors">
                        D'HAN Archive
                    </Link>

                    {/* 네비게이션 메뉴 - 데스크톱에서만 표시 (모바일은 숨김) */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-sm text-charcoal/80 hover:text-charcoal transition-colors">
                            Home
                        </Link>
                        <Link href="/brand" className="text-sm text-charcoal/80 hover:text-charcoal transition-colors">
                            Brand
                        </Link>
                        <Link href="/2024FW" className="text-sm text-charcoal/80 hover:text-charcoal transition-colors">
                            2024 FW
                        </Link>
                        <Link href="/2021ART" className="text-sm text-charcoal/80 hover:text-charcoal transition-colors">
                            2021 ART
                        </Link>
                        <Link href="/contact" className="text-sm text-charcoal/80 hover:text-charcoal transition-colors">
                            Profile
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

