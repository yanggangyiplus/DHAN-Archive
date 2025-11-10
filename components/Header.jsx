import Link from 'next/link';

/**
 * 헤더 컴포넌트
 */
export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 glass border-b border-beige/30">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-serif text-charcoal hover:text-beige transition-colors">
                        D'HAN Archive
                    </Link>

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
                        <Link href="/inspiration" className="text-sm text-charcoal/80 hover:text-charcoal transition-colors">
                            Inspiration
                        </Link>
                        <Link href="/contact" className="text-sm text-charcoal/80 hover:text-charcoal transition-colors">
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

