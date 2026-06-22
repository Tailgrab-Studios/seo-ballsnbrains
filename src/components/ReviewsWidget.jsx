import { useState } from 'react';
import dep1 from '@assets/videos/depoiments/dep1.mp4';
import dep2 from '@assets/videos/depoiments/dep2.mp4';
import dep3 from '@assets/videos/depoiments/dep3.mp4';
import dep4 from '@assets/videos/depoiments/dep4.mp4';
import dep5 from '@assets/videos/depoiments/dep5.mp4';
import dep6 from '@assets/videos/depoiments/dep6.mp4';
import dep7 from '@assets/videos/depoiments/dep7.mp4';
import dep8 from '@assets/videos/depoiments/dep8.mp4';
import thumb1 from '@assets/videos/depoiments/thumbs/dep1.webp';
import thumb2 from '@assets/videos/depoiments/thumbs/dep2.webp';
import thumb3 from '@assets/videos/depoiments/thumbs/dep3.webp';
import thumb4 from '@assets/videos/depoiments/thumbs/dep4.webp';
import thumb5 from '@assets/videos/depoiments/thumbs/dep5.webp';
import thumb6 from '@assets/videos/depoiments/thumbs/dep6.webp';
import thumb7 from '@assets/videos/depoiments/thumbs/dep7.webp';
import thumb8 from '@assets/videos/depoiments/thumbs/dep8.webp';

const VIDEOS = [
  { id: 1, src: dep1, thumb: thumb1 },
  { id: 2, src: dep2, thumb: thumb2 },
  { id: 3, src: dep3, thumb: thumb3 },
  { id: 4, src: dep4, thumb: thumb4 },
  { id: 5, src: dep5, thumb: thumb5 },
  { id: 6, src: dep6, thumb: thumb6 },
  { id: 7, src: dep7, thumb: thumb7 },
  { id: 8, src: dep8, thumb: thumb8 },
];

export default function ReviewsWidget() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="w-full py-4">
      <style>{`.scrollbar-hide::-webkit-scrollbar{display:none}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}`}</style>

      <div className="flex flex-col gap-3">
        <h3 className="text-white text-base font-bold">Some of Our Reviews</h3>

        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {VIDEOS.map(video => (
            <button
              key={video.id}
              type="button"
              onClick={() => setActiveVideo(video.src)}
              aria-label={`View review ${video.id}`}
              className="flex-shrink-0 cursor-pointer group transition-transform duration-300 hover:scale-105"
            >
              <div
                className="relative w-[80px] h-[80px] rounded-full p-[2px]"
                style={{
                  background:
                    activeVideo === video.src
                      ? '#555'
                      : 'linear-gradient(135deg, #CF9947, #FED9A5, #7D5D2C)',
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                  <img
                    src={video.thumb}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-white translate-x-0.5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-[0.625rem] text-center mt-1.5 leading-tight">
                {video.label}
              </p>
            </button>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div className="fixed bottom-4 right-4 z-[9999] w-[280px] sm:w-[300px] shadow-2xl rounded-xl overflow-hidden border border-white/10 bg-black">
          <div className="relative aspect-[9/16]">
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 p-1.5 bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-[18px] h-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
            <video
              key={activeVideo}
              src={activeVideo}
              autoPlay
              controls
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
