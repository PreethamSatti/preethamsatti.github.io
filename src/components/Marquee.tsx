import icon1 from '@/assets/tools/icon-1.png';
import icon2 from '@/assets/tools/icon-2.png';
import icon3 from '@/assets/tools/icon-3.png';
import icon4 from '@/assets/tools/icon-4.png';
import icon5 from '@/assets/tools/icon-5.png';
import icon6 from '@/assets/tools/icon-6.png';
import icon7 from '@/assets/tools/icon-7.png';

const MarqueeSection = () => {
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];

  return (
    <div className="py-1 border-y border-border overflow-hidden bg-background flex whitespace-nowrap">
      <div className="flex animate-loop-scroll items-center shrink-0">
        {[...icons, ...icons].map((icon, index) => (
          <div
            key={index}
            className="mx-12 w-20 h-20 md:w-28 md:h-28 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-150"
          >
            <img
              src={icon}
              alt="Tool Icon"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      <div className="flex animate-loop-scroll items-center shrink-0" aria-hidden="true">
        {[...icons, ...icons].map((icon, index) => (
          <div
            key={index}
            className="mx-12 w-20 h-20 md:w-28 md:h-28 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-150"
          >
            <img
              src={icon}
              alt="Tool Icon"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
