import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

export default function FiscaliteSimulator() {
  const [revenu, setRevenu] = useState(120000);
  const [foncier, setFoncier] = useState(20000);

  const data = useMemo(() => {
    const base = revenu + foncier;
    const impotBrut = Math.round(base * 0.35);
    const apresOptim = Math.round(impotBrut * 0.72);
    const economie = impotBrut - apresOptim;
    return [
      { label: "Avant optimisation", montant: impotBrut, color: "hsl(210,25%,18%)" },
      { label: "Après optimisation", montant: apresOptim, color: "hsl(32,30%,55%)" },
      { label: "Économie estimée", montant: economie, color: "hsl(160,12%,42%)" },
    ];
  }, [revenu, foncier]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Revenus annuels</label>
          <input
            type="range"
            min={40000}
            max={500000}
            step={5000}
            value={revenu}
            onChange={(e) => setRevenu(+e.target.value)}
            className="w-full accent-gold h-1"
          />
          <span className="text-xs font-medium text-primary">{(revenu / 1000).toFixed(0)}k €</span>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Revenus fonciers</label>
          <input
            type="range"
            min={0}
            max={100000}
            step={2000}
            value={foncier}
            onChange={(e) => setFoncier(+e.target.value)}
            className="w-full accent-gold h-1"
          />
          <span className="text-xs font-medium text-primary">{(foncier / 1000).toFixed(0)}k €</span>
        </div>
      </div>

      <div className="h-[140px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={32}>
            <XAxis dataKey="label" tick={{ fontSize: 9 }} stroke="hsl(210,8%,46%)" tickLine={false} axisLine={false} />
            <YAxis hide />
            <Tooltip
              contentStyle={{ background: "hsl(40,15%,99%)", border: "1px solid hsl(40,10%,88%)", borderRadius: 4, fontSize: 11 }}
              formatter={(v: number) => [`${(v / 1000).toFixed(1)}k €`]}
            />
            <Bar dataKey="montant" radius={[3, 3, 0, 0]}>
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="text-[11px] text-muted-foreground text-center border-t border-border pt-2">
        Estimation indicative — un audit patrimonial précis est nécessaire.
      </p>
    </div>
  );
}
