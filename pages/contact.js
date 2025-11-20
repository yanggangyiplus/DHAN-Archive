import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

/**
 * 디자이너 프로필 페이지 컴포넌트
 * 
 * 디자이너 한가영의 프로필 정보, 연락처, 수상 내역을 표시하는 페이지입니다.
 * 
 * @returns {JSX.Element} 프로필 페이지 JSX 요소
 */
export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 px-6 max-w-5xl mx-auto fade-in">
        {/* 프로필 섹션 - 디자이너 기본 정보 및 프로필 사진 */}
        <section className="text-center mb-16 space-y-8">
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-8">
            Profile
          </h1>
          
          {/* 프로필 사진 - 원형 프레임으로 표시 */}
          <div className="flex justify-center mb-8 mt-4">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-beige/30 border-4 border-beige/50">
              <img
                src="/assets/images/profile/IMG_3389.JPG"
                alt="Han Ga Yeong"
                className="w-full h-full object-cover object-center object-top"
                style={{ objectPosition: 'center top' }}
              />
            </div>
          </div>

          {/* 기본 정보 섹션 - 생년월일, 이메일, 인스타그램 등 */}
          <div className="space-y-6 text-charcoal/70 max-w-2xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-2xl font-serif text-charcoal mb-6">
                Han Ga Yeong
              </h2>
              
              <div className="text-left space-y-3">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-medium text-charcoal/80 min-w-[120px]">생년월일</span>
                  <span>2001. 10. 05</span>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-medium text-charcoal/80 min-w-[120px]">이메일</span>
                  <a 
                    href="mailto:hangayeong105@gmail.com" 
                    className="hover:text-charcoal transition-colors"
                  >
                    hangayeong105@gmail.com
                  </a>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-medium text-charcoal/80 min-w-[120px]">인스타그램</span>
                  <a 
                    href="https://www.instagram.com/yanggangyi_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-charcoal transition-colors"
                  >
                    @yanggangyi_
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 수상내역 섹션 - 연도별 수상 및 성과 기록 */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-charcoal mb-8 text-center">
            Awards & Achievements
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {/* 2021년 수상 내역 */}
            <div className="glass rounded-lg p-6 space-y-3">
              <div className="text-sm text-charcoal/50 mb-2">2021</div>
              <ul className="space-y-2 text-charcoal/70">
                <li>RASARA 학생자치위원회 패션위크국장</li>
                <li>Creative Art work 전시</li>
                <li>Café RED BOX 매니저</li>
              </ul>
            </div>

            {/* 2022 */}
            <div className="glass rounded-lg p-6 space-y-3">
              <div className="text-sm text-charcoal/50 mb-2">2022</div>
              <ul className="space-y-2 text-charcoal/70">
                <li>Café RED BOX 매니저</li>
                <li>Café The HALT 창업 및 운영</li>
              </ul>
            </div>

            {/* 2023 */}
            <div className="glass rounded-lg p-6 space-y-3">
              <div className="text-sm text-charcoal/50 mb-2">2023</div>
              <ul className="space-y-2 text-charcoal/70">
                <li>Café The HALT 운영</li>
              </ul>
            </div>

            {/* 2024 */}
            <div className="glass rounded-lg p-6 space-y-3">
              <div className="text-sm text-charcoal/50 mb-2">2024</div>
              <ul className="space-y-2 text-charcoal/70">
                <li>RASARA 2024_1 수석</li>
                <li>BRAND LAUNCHING D'HAN</li>
                <li>RASARA 우수상_디지털패션</li>
                <li>RASARA 공로상</li>
                <li>RASARA 표창장</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 포트폴리오 다운로드 섹션 - PDF 포트폴리오 다운로드 링크 (향후 구현 예정) */}
        <section className="text-center space-y-6">
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
        </section>

        {/* Footer 정보 */}
        <div className="mt-16 pt-8 border-t border-beige/30 text-center">
          <p className="text-sm text-charcoal/50">
            © 2025 D'HAN by Han Ga Yeong
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
