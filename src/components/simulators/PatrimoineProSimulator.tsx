import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function PatrimoineProSimulator() {
  const [ca, setCa] = useState(250000);
  const [remuneration, setRemuneration] = useState(80000);

  const data = useMemo(() => {
    const dividendes = Math.max(0, (ca * 0.15) - remuneration * 0.1);
    const is = ca * 0.15 * 0.25;
    const irSalaire = remuneration * 0.30;
    const irDividendes = dividendes * 0.30;
    const chargesSociales = remuneration * 0.45;
    
    return [
      { scenario: "Salaire seul", salaire: Math.round(remuneration - irSalaire - chargesSociales), fiscalite: Math.round(irSalaire + chargesSociales) },
      { scenario: "Mixte optimal", salaire: Math.round(remuneration * 0.65 * 0.55), fiscalite: Math.round(remuneration * 0.65 * 0.45 + dividendes * 0.30) },
      { scenario: "Holding", salaire: Math.round(remuneration * 0.6 * 0.58), fiscalite: Math.round(remuneration * 0.6 * 0.42 + is * 0.3) },
    ];
  }, [ca, remuneration]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">CA annuel</label>
          <input type="range" min={80000} max={2000000} step={10000} value={ca} onChange={(e) => setCa(+e.target.value)} className="w-full accent-gold h-1" />
          <span className="text-xs font-medium text-primary">{(ca / 1000).toFixed(0)}k €</span>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Rémunération visée</label>
          <input type="range" min={30000} max={500000} step={5000} value={remuneration} onChange={(e) => setRemuneration(+e.target.value)} className="w-full accent-gold h-1" />
          <span className="text-xs font-medium text-primary">{(remuneration / 1000).toFixed(0)}k €</span>
        </div>
      </div>

      <div className="h-[140px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={24}>
            <XAxis dataKey="scenario" tick={{ fontSize: 9 }} stroke="hsl(210,8%,46%)" tickLine={false} axisLine={false} />
            <YAxis hide />
            <Tooltip
              contentStyle={{ background: "hsl(40,15%,99%)", border: "1px solid hsl(40,10%,88%)", borderRadius: 4, fontSize: 11 }}
              formatter={(v: number) => [`${(v / 1000).toFixed(0)}k €`]}
            />
            <Bar dataKey="salaire" stackId="a" fill="hsl(32,30%,55%)" radius={[0, 0, 0, 0]} name="Net perçu" />
            <Bar dataKey="fiscalite" stackId="a" fill="hsl(210,25%,18%)" radius={[3, 3, 0, 0]} name="Fiscalité" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="text-[11px] text-muted-foreground text-center border-t border-border pt-2">
        Comparez salaire, dividendes et holding — simulation indicative.
      </p>
    </div>
  );
}
