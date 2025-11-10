import Header from '../components/Header';
import Footer from '../components/Footer';
import MediaGallery from '../components/MediaGallery';

/**
 * Inspiration 페이지 - 무드보드
 */
export default function Inspiration() {
  // 임시 무드보드 이미지 (실제로는 데이터에서 가져옴)
  const moodImages = [];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 px-6 max-w-6xl mx-auto fade-in">
        {/* 인트로 */}
        <section className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal">
            Mood & Concept
          </h1>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            모든 시즌은 감정에서 출발합니다.<br />
            공간, 빛, 재질, 움직임의 관계를 통해 D'HAN의 서사를 만들어갑니다.
          </p>
        </section>

        {/* 무드보드 갤러리 */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-charcoal mb-8 text-center">
            Moodboard
          </h2>
          <MediaGallery images={moodImages} />
        </section>

        {/* 해석 */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif text-charcoal">
            Interpretation
          </h2>
          <p className="text-charcoal/70 leading-relaxed">
            D'HAN의 영감은 '일상의 여백'에서 비롯됩니다.<br />
            관찰된 사소한 움직임과 감정의 결이, 새로운 형태로 확장됩니다.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

