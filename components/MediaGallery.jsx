/**
 * 미디어 갤러리 컴포넌트 (이미지/영상 표시)
 */
export default function MediaGallery({ 
  images = [], 
  videos = [],
  videoThumbnails = []
}) {
  return (
    <div className="space-y-12 fade-in">
      {/* 이미지 갤러리 */}
      {images.length > 0 && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg bg-beige/30 group flex items-center justify-center"
              >
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

      {/* 영상 갤러리 */}
      {videos.length > 0 && (
        <div className="space-y-6">
          {videos.map((src, idx) => (
            <div key={idx} className="w-full rounded-lg overflow-hidden bg-beige/30 relative aspect-video">
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

