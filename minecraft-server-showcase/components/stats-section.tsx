const stats = [
  {
    value: "3+",
    label: "年",
    description: "サーバー運営経験",
  },
  {
    value: "5,000+",
    label: "人",
    description: "累計プレイヤー数",
  },
  {
    value: "99.9%",
    label: "",
    description: "稼働率",
  },
  {
    value: "50+",
    label: "件",
    description: "導入プラグイン",
  },
];

export function StatsSection() {
  return (
    <section id="stats" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
            Statistics
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            実績データ
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.description}
              className="text-center p-6 bg-card border border-border rounded-xl"
            >
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.value}
                </span>
                {stat.label && (
                  <span className="text-xl text-muted-foreground ml-1">
                    {stat.label}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
