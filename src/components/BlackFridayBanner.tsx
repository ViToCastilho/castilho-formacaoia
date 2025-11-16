import { Flame, Tag, TrendingDown } from "lucide-react";

const BlackFridayBanner = () => {
  return (
    <div className="bg-gradient-to-r from-black via-red-950 to-black border-b-2 border-red-600 relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(220,38,38,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_ease-in-out_infinite]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        {/* Header - BLACK FRIDAY */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full font-black text-xl md:text-2xl animate-pulse shadow-lg">
            <Tag className="w-6 h-6" />
            BLACK FRIDAY
            <Flame className="w-6 h-6" />
          </div>
          <p className="text-red-500 font-bold text-sm md:text-base mt-2">
            Condição especial até dia 20/11 • 50 vagas disponíveis (6 restantes) • 70% OFF
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Mestre em Agentes IA */}
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-600/50 rounded-xl p-6 relative overflow-hidden hover:border-red-600 transition-all duration-300 hover:scale-105">
            <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-xs font-bold transform rotate-12 translate-x-2 -translate-y-2">
              70% OFF
            </div>
            
            <h3 className="text-white font-bold text-xl md:text-2xl mb-3 flex items-center gap-2">
              <TrendingDown className="w-6 h-6 text-green-400" />
              Mestre em Agentes IA
            </h3>
            
            <p className="text-gray-300 text-sm mb-4">
              Treinamento completo para dominar criação de Agentes IA e automações
            </p>
            
            <div className="flex items-end gap-3">
              <div>
                <p className="text-gray-400 text-sm line-through">De R$ 297,99</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-red-500 font-black text-3xl md:text-4xl">R$ 9,15</p>
                  <span className="text-gray-400 text-xs">(12x)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sistema de Vendas */}
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-600/50 rounded-xl p-6 relative overflow-hidden hover:border-red-600 transition-all duration-300 hover:scale-105">
            <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-xs font-bold transform rotate-12 translate-x-2 -translate-y-2">
              70% OFF
            </div>
            
            <h3 className="text-white font-bold text-xl md:text-2xl mb-3 flex items-center gap-2">
              <TrendingDown className="w-6 h-6 text-green-400" />
              $istema de Vendas
            </h3>
            
            <p className="text-gray-300 text-sm mb-4">
              Treinamento completo de como faturar os primeiros 50K com IA
            </p>
            
            <div className="flex items-end gap-3">
              <div>
                <p className="text-gray-400 text-sm line-through">De R$ 197,99</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-red-500 font-black text-3xl md:text-4xl">R$ 6,10</p>
                  <span className="text-gray-400 text-xs">(12x)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-6">
          <a
            href="https://pay.hub.la/ARX176QDkdSkVfgpXqIb"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <Flame className="w-5 h-5" />
            GARANTIR MINHA VAGA COM 70% OFF
            <Flame className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlackFridayBanner;