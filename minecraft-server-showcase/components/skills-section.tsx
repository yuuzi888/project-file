import {
  Server,
  Shield,
  Users,
  Code,
  Database,
  Terminal,
  Wrench,
  Globe,
} from "lucide-react";

const skills = [
  {
    icon: Server,
    title: "サーバー構築",
    description: "Linux/Windowsでのサーバー構築、最適化、パフォーマンスチューニング",
  },
  {
    icon: Shield,
    title: "セキュリティ",
    description: "DDoS対策、不正アクセス防止、アンチチート導入と管理",
  },
  {
    icon: Users,
    title: "コミュニティ管理",
    description: "Discordサーバー運営、イベント企画、プレイヤーサポート",
  },
  {
    icon: Code,
    title: "プラグイン開発",
    description: "Java/Kotlinでのカスタムプラグイン開発、既存プラグインのカスタマイズ",
  },
  {
    icon: Database,
    title: "データベース",
    description: "MySQL/MariaDBの設計・運用、プレイヤーデータ管理",
  },
  {
    icon: Terminal,
    title: "スクリプト作成",
    description: "シェルスクリプト、バッチ処理、自動バックアップ設定",
  },
  {
    icon: Wrench,
    title: "トラブルシューティング",
    description: "サーバーエラー対応、パフォーマンス問題の診断と解決",
  },
  {
    icon: Globe,
    title: "ネットワーク",
    description: "ポートフォワーディング、プロキシ設定、BungeeCord/Velocity構築",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            技術スキル
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
