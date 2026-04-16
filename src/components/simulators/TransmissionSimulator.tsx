import { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function TransmissionSimulator() {
  const [patrimoine, setPatrimoine] = useState(800000);
  const [enfants, setEnfants] = useState(2);

  const { data, droitsSans, droitsAvec } = useMemo(() => {
    const abattement = 100000 * enfants;
    const assietteSans = Math.max(0, patrimoine - abattement);
    const droitsSans = Math.round(assietteSans * 0.20);
    const avAV = Math.min(patrimoine * 0.3, 152500 * enfants);
    const avDemembrement = patrimoine * 0.25;
    const assietteAvec = Math.max(0, patrimoine - abattement - avAV * 0.4 - avDemembrement * 0.3);
    const droitsAvec = Math.round(assietteAvec * 0.20);
    const economie = droitsSans - droitsAvec;

    return {
      droitsSans,
      droitsAvec,
      data: [
        { name: "Transmis net", value: patrimoine - droitsAvec, color: "hsl(32,30%,55%)" },
        { name: "Droits optimisés", value: droitsAvec, color: "hsl(210,25%,18%)" },
        { name: "Économie", value: economie, color: "hsl(160,12%,42%)" },
      ],
    };
  }, [patrimoine, enfants]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Patrimoine total</label>
          <input type="range" min={200000} max={5000000} step={50000} value={patrimoine} onChange={(e) => setPatrimoine(+e.target.value)} className="w-full accent-gold h-1" />
          <span className="text-xs font-medium text-primary">{(patrimoine / 1000000).toFixed(1)}M €</span>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Nombre d'enfants</label>
          <input type="range" min={1} max={5} step={1} value={enfants} onChange={(e) => setEnfants(+e.target.value)} className="w-full accent-gold h-1" />
          <span className="text-xs font-medium text-primary">{enfants}</span>
        </div>
      </div>

      <div className="h-[140px] flex items-center">
        <ResponsiveContainer width="50%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={30} outerRadius={55} dataKey="value" stroke="none">
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ background: "hsl(40,15%,99%)", border: "1px solid hsl(40,10%,88%)", borderRadius: 4, fontSize: 11 }}
              formatter={(v: number) => [`${(v / 1000).toFixed(0)}k €`]}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex-1 space-y-1.5 text-[11px]">
          {data.map((d) => (
            <div key={d.name} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full shrink-0" style={{ background: d.color }} />
              <span className="text-muted-foreground">{d.name}</span>
              <span className="ml-auto font-medium text-primary">{(d.value / 1000).toFixed(0)}k €</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-[11px] border-t border-border pt-2">
        <span className="text-muted-foreground">Sans optimisation : <strong className="text-primary">{(droitsSans / 1000).toFixed(0)}k €</strong></span>
        <span className="text-muted-foreground">Avec stratégie : <strong className="text-gold">{(droitsAvec / 1000).toFixed(0)}k €</strong></span>
      </div>
    </div>
  );
}
