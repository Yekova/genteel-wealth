import { useState, useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function EpargneSimulator() {
  const [capital, setCapital] = useState(50000);
  const [mensualite, setMensualite] = useState(500);
  const [duree, setDuree] = useState(15);
  const rendement = 0.04;

  const data = useMemo(() => {
    const points = [];
    let cumul = capital;
    let versements = capital;
    for (let y = 0; y <= duree; y++) {
      points.push({
        annee: `${y} an${y > 1 ? "s" : ""}`,
        capital: Math.round(cumul),
        versements: Math.round(versements),
      });
      cumul = (cumul + mensualite * 12) * (1 + rendement);
      versements += mensualite * 12;
    }
    return points;
  }, [capital, mensualite, duree]);

  const finalCapital = data[data.length - 1]?.capital ?? 0;
  const totalVerse = data[data.length - 1]?.versements ?? 0;
  const gains = finalCapital - totalVerse;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Capital initial</label>
          <input
            type="range"
            min={10000}
            max={500000}
            step={5000}
            value={capital}
            onChange={(e) => setCapital(+e.target.value)}
            className="w-full accent-gold h-1"
          />
          <span className="text-xs font-medium text-primary">{(capital / 1000).toFixed(0)}k €</span>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Épargne / mois</label>
          <input
            type="range"
            min={100}
            max={5000}
            step={100}
            value={mensualite}
            onChange={(e) => setMensualite(+e.target.value)}
            className="w-full accent-gold h-1"
          />
          <span className="text-xs font-medium text-primary">{mensualite} €</span>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Durée</label>
          <input
            type="range"
            min={5}
            max={30}
            step={1}
            value={duree}
            onChange={(e) => setDuree(+e.target.value)}
            className="w-full accent-gold h-1"
          />
          <span className="text-xs font-medium text-primary">{duree} ans</span>
        </div>
      </div>

      <div className="h-[140px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="gradCapital" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(32,30%,55%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(32,30%,55%)" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="gradVersements" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(210,25%,18%)" stopOpacity={0.15} />
                <stop offset="100%" stopColor="hsl(210,25%,18%)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis dataKey="annee" tick={{ fontSize: 9 }} stroke="hsl(210,8%,46%)" tickLine={false} axisLine={false} interval={Math.floor(duree / 4)} />
            <YAxis hide />
            <Tooltip
              contentStyle={{ background: "hsl(40,15%,99%)", border: "1px solid hsl(40,10%,88%)", borderRadius: 4, fontSize: 11 }}
              formatter={(v: number) => [`${(v / 1000).toFixed(0)}k €`]}
            />
            <Area type="monotone" dataKey="versements" stroke="hsl(210,25%,18%)" strokeWidth={1} fill="url(#gradVersements)" name="Versements" />
            <Area type="monotone" dataKey="capital" stroke="hsl(32,30%,55%)" strokeWidth={2} fill="url(#gradCapital)" name="Capital" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between text-[11px] border-t border-border pt-2">
        <span className="text-muted-foreground">Versé : <strong className="text-primary">{(totalVerse / 1000).toFixed(0)}k €</strong></span>
        <span className="text-muted-foreground">Gains : <strong className="text-gold">{gains > 0 ? "+" : ""}{(gains / 1000).toFixed(0)}k €</strong></span>
        <span className="text-muted-foreground">Capital : <strong className="text-primary">{(finalCapital / 1000).toFixed(0)}k €</strong></span>
      </div>
    </div>
  );
}
