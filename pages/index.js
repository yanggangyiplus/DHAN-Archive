import Link from 'next/link';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import seasonsData from '../data/seasons.json';

/**
 * 홈 페이지 컴포넌트
 * 
 * 시즌별 컬렉션을 타임라인 형식으로 표시하는 메인 페이지입니다.
 * 브랜드 소개와 함께 연도순으로 정렬된 시즌 목록을 보여줍니다.
 * 
 * @returns {JSX.Element} 홈 페이지 JSX 요소
 */
export default function Home() {
  // 시즌 데이터를 연도 내림차순으로 정렬 (최신 시즌이 먼저 표시됨)
  const sortedSeasons = [...seasonsData.seasons].sort((a, b) => b.year - a.year);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 px-6 max-w-6xl mx-auto fade-in">
        {/* 브랜드 소개 섹션 - D'HAN의 철학과 비전 소개 */}
        <section className="text-center mb-20 space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif text-charcoal mb-6">
            D'HAN Archive
          </h1>
          <p className="text-lg text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
            D'HAN은 움직임 속의 정제된 감정을 옷으로 표현하는 디자이너 브랜드입니다.<br />
            <span className="whitespace-nowrap">스포츠의 리듬과 우아함에서 영감을 받아, 섬세한 디테일과 균형 잡힌 실루엣으로 '움직임의 미학'을 재해석합니다.</span>
          </p>
          <p className="text-xl font-serif italic text-charcoal/90 mt-6">
            Embrace Leisure, Live Busy
          </p>
        </section>

        {/* 시즌 타임라인 섹션 - 연도순으로 정렬된 컬렉션 목록 */}
        <section className="space-y-16">
          <h2 className="text-3xl font-serif text-center text-charcoal mb-12">
            Collections
          </h2>
          
          <div className="space-y-24">
            {sortedSeasons.map((season, idx) => (
              <div
                key={season.id}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
                style={{ animationDelay: `${idx * 0.2}s` }} // 순차적 페이드인 애니메이션을 위한 지연 시간
              >
                {/* 시즌 대표 이미지 - 첫 번째 이미지를 썸네일로 사용 */}
                <div className="w-full md:w-1/2">
                  <Link href={`/${season.id}`} className="block group">
                    <div className="relative overflow-hidden rounded-lg bg-beige/30 flex items-center justify-center">
                      {season.images && season.images.length > 0 && (
                        <img
                          src={season.images[0]}
                          alt={season.title}
                          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                    </div>
                  </Link>
                </div>

                {/* 시즌 정보 텍스트 영역 - 제목, 설명, 링크 */}
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="text-sm text-charcoal/50 mb-2">
                    {season.year}
                  </div>
                  <h3 className="text-3xl font-serif text-charcoal">
                    {season.title} — {season.subtitle}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    {season.description}
                  </p>
                  <Link
                    href={`/${season.id}`}
                    className="inline-block mt-6 px-6 py-3 glass rounded-lg text-charcoal hover:bg-beige/30 transition-all"
                  >
                    자세히 보기 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

