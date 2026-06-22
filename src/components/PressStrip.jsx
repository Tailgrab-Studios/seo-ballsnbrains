import pressGq from '@assets/press/gq.svg';
import pressForbes from '@assets/press/forbes.svg';
import pressMens from '@assets/press/mens-health.svg';

const PRESS = [pressGq, pressForbes, pressMens];

function PressRow() {
  return (
    <>
      {[0, 1, 2].map(copy => (
        <div key={copy} className="flex items-center shrink-0">
          {Array.from({ length: 4 }).flatMap((_, rep) =>
            PRESS.map((logo, i) => (
              <img
                key={`${copy}-${rep}-${i}`}
                src={logo}
                alt=""
                aria-hidden="true"
                className="h-[1.125rem] w-auto mx-7 shrink-0"
              />
            )),
          )}
        </div>
      ))}
    </>
  );
}

export default function PressStrip() {
  return (
    <div className="bg-white overflow-hidden">
      {/* As seen in — duas faixas de logos cruzando em X (sem label). A de trás tem blur(3px). */}
      {/* overflow-x clip (sem scroll horizontal) + overflow-y visible (não corta as faixas em cima/embaixo). */}
      <div
        className="relative bg-bb-dark h-28 md:h-36"
        style={{ overflowX: 'clip', overflowY: 'visible' }}
      >
        {/* Faixa de trás — desfocada, inclinada +2°, rola ao contrário, opacity 0.85 */}
        <div
          className="absolute left-1/2 top-1/2 w-[220%] z-10"
          style={{
            transform: 'translate(-50%, -50%) rotate(2deg)',
            filter: 'blur(3px)',
            opacity: 0.85,
          }}
        >
          <div className="bg-white py-3 overflow-hidden">
            <div
              className="flex w-max items-center"
              style={{ animation: 'marquee 30s linear infinite reverse' }}
            >
              <PressRow />
            </div>
          </div>
        </div>
        {/* Faixa da frente — nítida, inclinada -2°, drop-shadow suave/espalhada (projeta sobre a faixa de trás) */}
        <div
          className="absolute left-1/2 top-1/2 w-[220%] z-20"
          style={{
            transform: 'translate(-50%, -50%) rotate(-2deg)',
            filter: 'drop-shadow(0 0 28px rgba(0,0,0,0.5))',
          }}
        >
          <div className="bg-white py-3 overflow-hidden">
            <div
              className="flex w-max items-center"
              style={{ animation: 'marquee 30s linear infinite' }}
            >
              <PressRow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
