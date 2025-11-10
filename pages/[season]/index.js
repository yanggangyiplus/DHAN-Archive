import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MediaGallery from '../../components/MediaGallery';
import seasonsData from '../../data/seasons.json';

/**
 * 시즌 페이지 (동적 라우팅)
 */
export default function Season() {
  const router = useRouter();
  const { season } = router.query;
  const [seasonData, setSeasonData] = useState(null);

  useEffect(() => {
    if (season) {
      const found = seasonsData.seasons.find(s => s.id === season);
      setSeasonData(found);
    }
  }, [season]);

  if (!seasonData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-charcoal/50">로딩 중...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 px-6 max-w-6xl mx-auto fade-in">
        {/* 시즌 정보 */}
        <section className="text-center mb-16 space-y-4">
          <div className="text-sm text-charcoal/50 mb-2">
            {seasonData.year}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal">
            {seasonData.subtitle}
          </h1>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            {seasonData.description}
          </p>
        </section>

        {/* 미디어 갤러리 */}
        <section className="mb-16">
          <MediaGallery
            images={seasonData.images || []}
            videos={seasonData.videos || []}
          />
        </section>

        {/* 디자이너 노트 */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif text-charcoal mb-6">
            Designer's Note
          </h2>
          <div className="text-charcoal/70 leading-relaxed text-left space-y-4">
            {seasonData.id === '2024FW' ? (
              <>
                <p>
                  D'HAN 2024 F/W는 말을 타는 사람들의 세계에서 출발한다. 그들은 속도와 중력을 제어하며, 균형 위에서 우아함을 유지한다. 이번 시즌은 그 긴장된 순간 속에 숨어 있는 정제된 에너지와 절제된 아름다움을 탐구한다.
                </p>
                <p>
                  승마는 단순한 운동이 아니다. 중심을 잃지 않기 위해 온몸의 미세한 근육을 조율하고, 속도를 제어하기 위해 오히려 고요함을 선택한다. 그 이중적인 움직임 속에서 D'HAN은 '움직임의 조형미'를 발견했다.
                </p>
                <p>
                  이 시즌의 옷들은 그런 순간의 감정을 시각화한다. 한 치의 흐트러짐 없이 단단하지만, 그 안에는 유연하고 감각적인 리듬이 흐른다. 강인함과 섬세함, 속도와 정지, 힘과 우아함이 공존하는 실루엣은 '움직이는 사람'의 정체성을 담고 있다.
                </p>
                <p>
                  D'HAN은 매 시즌 하나의 스포츠를 새로운 감정으로 해석한다. 이번 시즌의 'Riders'는 그 여정의 첫 장이다 — 펜싱의 긴장, 모터스포츠의 속도, F1의 균형으로 이어질 앞으로의 서사의 시작.
                </p>
                <p>
                  D'HAN 2024 F/W는 움직임을 단순한 동작이 아닌 '태도'로 바라본다. 움직이는 사람들의 내면, 그 절제된 에너지와 우아함을 도시 속에서 가장 현대적인 감성으로 재해석한다.
                </p>
              </>
            ) : (
              <>
                <p>
                  만월은 모든 것을 비추지만, 그 완벽한 빛 뒤에는 우리가 결코 볼 수 없는 또 하나의 면이 있다. 그곳은 어둡지 않다. 단지 우리의 시선이 닿지 않을 뿐, 그 면 또한 태양의 빛을 받으며 조용히 존재한다.
                </p>
                <p>
                  나는 그 '보이지 않지만 분명히 존재하는 빛'을 형태로 담아내고자 했다.
                </p>
                <p>
                  차갑고 반사적인 메탈릭 소재는 외적인 완벽함과 단단함을 상징한다. 반면, 코르셋과 치마 안쪽에 숨겨진 부드러운 백색의 원단은 내면의 순수함과 연약함을 나타낸다. 두 소재가 맞닿는 경계에는 빛과 그림자, 드러남과 숨김이 공존하는 모호한 틈이 존재한다.
                </p>
                <p>
                  빛을 가득 머금은 소매는 만월이 스쳐 지나간 흔적처럼 부풀어 오른다. 충만함의 끝에서 숨을 고르듯, 그 곡선은 완전함과 불안함의 경계에 선다. 그러나 치마의 선은 그 궤도를 벗어나 흐르며, 보이지 않는 세계를 암시한다. 그 틈에서 빛은 부서지고, 또 다른 나의 얼굴이 태어난다.
                </p>
                <p>
                  우리는 세상 앞에서 강인함을 입는다. 그러나 그 안에는 언제나 미세하게 흔들리는 연약함이 있다. 그것은 부정해야 할 결함이 아니라, 우리를 인간답게 만드는 또 하나의 진실이다.
                </p>
                <p>
                  「만월」은 완전해 보이려는 인간의 욕망, 그리고 그 이면에 존재하는 진짜 '나'의 이야기를 담고 있다. 빛으로 가득 찬 만월이 사실은 두 개의 얼굴을 가진 것처럼 — 이 옷 또한 완전함의 그림자 속에서 피어나는 또 하나의 빛을 말한다.
                </p>
              </>
            )}
          </div>
        </section>

        {/* BRAND LAUNCHING SHOW (2024 FW만) */}
        {seasonData.id === '2024FW' && (
          <section className="mt-16 mb-16">
            <h2 className="text-2xl font-serif text-charcoal mb-8 text-center">
              BRAND LAUNCHING SHOW
            </h2>
            <MediaGallery
              images={seasonData.showImages || []}
              videos={seasonData.showVideos || []}
              videoThumbnails={seasonData.showVideoThumbnails || []}
            />
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

