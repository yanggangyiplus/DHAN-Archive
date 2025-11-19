/**
 * 미디어 갤러리 컴포넌트
 * 
 * 이미지와 영상을 그리드 형식으로 표시하는 재사용 가능한 컴포넌트입니다.
 * 반응형 디자인을 지원하며, 이미지는 그리드 레이아웃으로, 영상은 전체 너비로 표시됩니다.
 * 
 * @param {string[]} images - 표시할 이미지 경로 배열
 * @param {string[]} videos - 표시할 영상 경로 배열
 * @param {string[]} videoThumbnails - 영상 썸네일 경로 배열 (선택사항)
 * @returns {JSX.Element} 미디어 갤러리 JSX 요소
 */
export default function MediaGallery({ 
  images = [], 
  videos = [],
  videoThumbnails = []
}) {
  return (
    <div className="space-y-12 fade-in">
      {/* 이미지 갤러리 섹션 - 반응형 그리드 레이아웃 (모바일: 1열, 태블릿: 2열, 데스크톱: 3열) */}
      {images.length > 0 && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg bg-beige/30 group flex items-center justify-center"
              >
                {/* 이미지 - 호버 시 확대 효과 적용 */}
                <img
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 영상 갤러리 섹션 - 전체 너비로 표시, 썸네일 지원 */}
      {videos.length > 0 && (
        <div className="space-y-6">
          {videos.map((src, idx) => (
            <div key={idx} className="w-full rounded-lg overflow-hidden bg-beige/30 relative aspect-video">
              {/* 영상 플레이어 - 컨트롤 바 포함, 썸네일 이미지 설정 가능 */}
              <video
                src={src}
                controls
                poster={videoThumbnails[idx] || undefined}
                className="w-full h-full object-cover"
              >
                브라우저가 영상을 지원하지 않습니다.
              </video>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

