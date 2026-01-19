const experiences = [
  {
    period: "2023 — 現在",
    title: "メインサーバー管理者",
    organization: "CraftWorld JP",
    description:
      "100人規模のサバイバルサーバーの運営。カスタムプラグイン開発、イベント企画、スタッフ管理を担当。月間アクティブユーザー500人以上を達成。",
    tags: ["Paper", "MySQL", "Discord Bot", "Java"],
  },
  {
    period: "2022 — 2023",
    title: "テクニカルスタッフ",
    organization: "MineCommunity",
    description:
      "大規模PvPサーバーのテクニカルスタッフとして参加。サーバー最適化、アンチチート設定、バックアップシステムの構築を担当。",
    tags: ["Velocity", "Redis", "LuckPerms", "Kotlin"],
  },
  {
    period: "2021 — 2022",
    title: "サーバー立ち上げ・運営",
    organization: "個人プロジェクト",
    description:
      "友人向けのプライベートサーバーから始め、徐々に規模を拡大。サーバー構築の基礎からコミュニティ運営まで独学で習得。",
    tags: ["Spigot", "PlugMan", "WorldEdit", "EssentialsX"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            運営経験
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12"
            >
              <div className="text-muted-foreground font-mono text-sm">
                {exp.period}
              </div>
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="mb-2">
                  <h3 className="font-bold text-foreground text-lg">
                    {exp.title}
                  </h3>
                  <p className="text-primary">{exp.organization}</p>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
