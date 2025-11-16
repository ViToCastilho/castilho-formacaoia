import { useState, useEffect } from "react";
import { Clock, Flame } from "lucide-react";

const UrgencyTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer quando chegar a zero
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600/20 border-2 border-red-500 rounded-lg p-4 mb-6 animate-pulse">
      <div className="flex items-center justify-center gap-3 text-center">
        <Flame className="w-6 h-6 text-red-400 animate-bounce" />
        <div className="text-white">
          <p className="text-sm font-bold text-red-400 mb-1">🔥 OFERTA EXPIRA EM:</p>
          <div className="flex items-center gap-2 text-2xl font-mono font-bold">
            <Clock className="w-5 h-5 text-red-400" />
            <span className="bg-red-600 text-white px-2 py-1 rounded">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-red-400">:</span>
            <span className="bg-red-600 text-white px-2 py-1 rounded">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-red-400">:</span>
            <span className="bg-red-600 text-white px-2 py-1 rounded">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs text-red-300 mt-1">Apenas 6 vagas restantes hoje!</p>
        </div>
        <Flame className="w-6 h-6 text-red-400 animate-bounce" />
      </div>
    </div>
  );
};

export default UrgencyTimer;