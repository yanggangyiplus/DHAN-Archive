import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * 브랜드 페이지
 */
export default function Brand() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 px-6 max-w-5xl mx-auto fade-in">
        {/* 브랜드 소개 */}
        <section className="text-center mb-16 space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal">
            About D'HAN
          </h1>
          <p className="text-lg text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
            D'HAN은 움직임 속의 정제된 감정을 옷으로 표현하는 디자이너 브랜드입니다.<br />
            <span className="whitespace-nowrap">스포츠의 리듬과 우아함에서 영감을 받아, 섬세한 디테일과 균형 잡힌 실루엣으로 '움직임의 미학'을 재해석합니다.</span>
          </p>
          <p className="text-xl font-serif italic text-charcoal/90 mt-8">
            Embrace Leisure, Live Busy
          </p>
        </section>

        {/* 브랜드 비주얼 */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-charcoal mb-8 text-center">
            Brand Visual
          </h2>
          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            {[
              '/assets/images/brand/스크린샷 2024-12-15 17.39.08.png',
              '/assets/images/brand/스크린샷 2024-12-15 17.41.54.png',
            ].map((src, idx) => (
              <div key={idx} className="w-full rounded-lg overflow-hidden bg-beige/30">
                <img
                  src={src}
                  alt={`Brand visual ${idx + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 비전 */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-serif text-charcoal">
            Vision
          </h2>
          <p className="text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            D'HAN은 감정이 형태로 번역되는 순간을 시각화합니다.<br />
            스포츠의 리듬과 움직임 속에서 발견한 정제된 에너지와 우아함의 균형을 탐구하며,<br />
            디지털 기술과 감각적 미학의 융합을 통해 새로운 패션 언어를 만들어갑니다.<br />
            감정, 구조, 그리고 속도의 조화를 옷이라는 조형 언어로 표현합니다.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

