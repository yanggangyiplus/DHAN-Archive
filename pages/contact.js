import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Contact 페이지 - 포트폴리오 다운로드
 */
export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 px-6 max-w-4xl mx-auto fade-in">
        <section className="text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal">
            Contact
          </h1>
          
          <div className="space-y-6 text-charcoal/70">
            <p className="text-lg leading-relaxed">
              D'HAN Archive에 관심을 가져주셔서 감사합니다.
            </p>
            
            <div className="mt-12 space-y-4">
              <h2 className="text-2xl font-serif text-charcoal">
                Portfolio Download
              </h2>
              <a
                href="#"
                className="inline-block px-8 py-4 glass rounded-lg text-charcoal hover:bg-beige/30 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  alert('포트폴리오 다운로드 링크를 추가해주세요.');
                }}
              >
                포트폴리오 다운로드 (PDF)
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-beige/30">
              <p className="text-sm">
                © 2025 D'HAN by Han Ga Yeong<br />
                For inquiries, please contact via email.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

