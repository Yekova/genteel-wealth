import { useState, useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function ImmobilierSimulator() {
  const [prix, setPrix] = useState(350000);
  const [loyer, setLoyer] = useState(1200);
  const [apport, setApport] = useState(70000);

  const { data, rendementBrut, rendementNet } = useMemo(() => {
    const rendBrut = ((loyer * 12) / prix) * 100;
    const charges = loyer * 12 * 0.25;
    const rendNet = ((loyer * 12 - charges) / prix) * 100;
    const points = [];
    let patrimoine = prix;
    let cashflow = 0;
    for (let y = 0; y <= 20; y++) {
      points.push({
        annee: `${y}`,
        valeurBien: Math.round(patrimoine),
        loyersCumules: Math.round(cashflow),
      });
      patrimoine *= 1.02;
      cashflow += loyer * 12 - charges;
    }
    return { data: points, rendementBrut: rendBrut, rendementNet: rendNet };
  }, [prix, loyer, apport]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Prix du bien</label>
          <input type="range" min={100000} max={2000000} step={10000} value={prix} onChange={(e) => setPrix(+e.target.value)} className="w-full accent-gold h-1" />
          <span className="text-xs font-medium text-primary">{(prix / 1000).toFixed(0)}k €</span>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Loyer mensuel</label>
          <input type="range" min={300} max={5000} step={50} value={loyer} onChange={(e) => setLoyer(+e.target.value)} className="w-full accent-gold h-1" />
          <span className="text-xs font-medium text-primary">{loyer} €</span>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-1">Apport</label>
          <input type="range" min={0} max={500000} step={5000} value={apport} onChange={(e) => setApport(+e.target.value)} className="w-full accent-gold h-1" />
          <span className="text-xs font-medium text-primary">{(apport / 1000).toFixed(0)}k €</span>
        </div>
      </div>

      <div className="h-[140px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="gradBien" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(210,25%,18%)" stopOpacity={0.2} />
                <stop offset="100%" stopColor="hsl(210,25%,18%)" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="gradLoyers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(32,30%,55%)" stopOpacity={0.25} />
                <stop offset="100%" stopColor="hsl(32,30%,55%)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis dataKey="annee" tick={{ fontSize: 9 }} stroke="hsl(210,8%,46%)" tickLine={false} axisLine={false} interval={4} />
            <YAxis hide />
            <Tooltip
              contentStyle={{ background: "hsl(40,15%,99%)", border: "1px solid hsl(40,10%,88%)", borderRadius: 4, fontSize: 11 }}
              formatter={(v: number) => [`${(v / 1000).toFixed(0)}k €`]}
            />
            <Area type="monotone" dataKey="valeurBien" stroke="hsl(210,25%,18%)" strokeWidth={1.5} fill="url(#gradBien)" name="Valeur du bien" />
            <Area type="monotone" dataKey="loyersCumules" stroke="hsl(32,30%,55%)" strokeWidth={2} fill="url(#gradLoyers)" name="Loyers cumulés" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between text-[11px] border-t border-border pt-2">
        <span className="text-muted-foreground">Rdt brut : <strong className="text-primary">{rendementBrut.toFixed(1)} %</strong></span>
        <span className="text-muted-foreground">Rdt net : <strong className="text-gold">{rendementNet.toFixed(1)} %</strong></span>
        <span className="text-muted-foreground">Loyers / an : <strong className="text-primary">{(loyer * 12 / 1000).toFixed(0)}k €</strong></span>
      </div>
    </div>
  );
}
