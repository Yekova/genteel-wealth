import { useState, useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function CreditSimulator() {
  const [montant, setMontant] = useState(300000);
  const [taux, setTaux] = useState(3.2);
  const [duree, setDuree] = useState(20);

  const { mensualite, data, coutTotal } = useMemo(() => {
    const r = taux / 100 / 12;
    const n = duree * 12;
    const m = r > 0 ? (montant * r) / (1 - Math.pow(1 + r, -n)) : montant / n;
    const points = [];
    let restant = montant;
    for (let y = 0; y <= duree; y++) {
      points.push({ annee: `${y}`, restant: Math.round(restant) });
      for (let mo = 0; mo < 12 && restant > 0; mo++) {
        const interet = restant * r;
        const amort = m - interet;
        restant = Math.max(0, restant - amort);
      }
    }
    return { mensualite: Math.round(m), data: points, coutTotal: Math.round(m * n - montant) };
  }, [montant, taux, duree]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Emprunt</label>
          <input type="range" min={50000} max={2000000} step={10000} value={montant} onChange={(e) => setMontant(+e.target.value)} className="w-full accent-gold h-1" />
          <span className="text-xs font-medium text-primary">{(montant / 1000).toFixed(0)}k €</span>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Taux</label>
          <input type="range" min={1} max={6} step={0.1} value={taux} onChange={(e) => setTaux(+e.target.value)} className="w-full accent-gold h-1" />
          <span className="text-xs font-medium text-primary">{taux.toFixed(1)} %</span>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Durée</label>
          <input type="range" min={5} max={30} step={1} value={duree} onChange={(e) => setDuree(+e.target.value)} className="w-full accent-gold h-1" />
          <span className="text-xs font-medium text-primary">{duree} ans</span>
        </div>
      </div>

      <div className="h-[140px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="annee" tick={{ fontSize: 9 }} stroke="hsl(210,8%,46%)" tickLine={false} axisLine={false} interval={Math.floor(duree / 5)} />
            <YAxis hide />
            <Tooltip
              contentStyle={{ background: "hsl(40,15%,99%)", border: "1px solid hsl(40,10%,88%)", borderRadius: 4, fontSize: 11 }}
              formatter={(v: number) => [`${(v / 1000).toFixed(0)}k €`]}
            />
            <Line type="monotone" dataKey="restant" stroke="hsl(32,30%,55%)" strokeWidth={2} dot={false} name="Capital restant" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between text-[11px] border-t border-border pt-2">
        <span className="text-muted-foreground">Mensualité : <strong className="text-primary">{mensualite.toLocaleString()} €</strong></span>
        <span className="text-muted-foreground">Coût du crédit : <strong className="text-gold">{(coutTotal / 1000).toFixed(0)}k €</strong></span>
      </div>
    </div>
  );
}
