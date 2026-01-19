import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { StatsSection } from "@/components/stats-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section id="about" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
                  About
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  サーバー管理者として
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    マインクラフトサーバーの運営を始めて3年以上が経ちました。
                    最初は友人と遊ぶための小さなサーバーでしたが、
                    今では100人以上が同時接続できる規模まで成長させることができました。
                  </p>
                  <p>
                    サーバー構築から、プラグイン開発、コミュニティ管理まで、
                    幅広い経験を積んできました。特にサーバーの安定稼働と
                    プレイヤーが楽しめる環境づくりに力を入れています。
                  </p>
                  <p>
                    技術的な課題を解決することはもちろん、
                    プレイヤー同士のコミュニティを育てることにも
                    大きなやりがいを感じています。
                  </p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">使用技術・ツール</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">サーバーソフトウェア</p>
                    <div className="flex flex-wrap gap-2">
                      {["Paper", "Spigot", "Velocity", "BungeeCord"].map((item) => (
                        <span key={item} className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">プログラミング言語</p>
                    <div className="flex flex-wrap gap-2">
                      {["Java", "Kotlin", "Python", "Shell"].map((item) => (
                        <span key={item} className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">インフラ・DB</p>
                    <div className="flex flex-wrap gap-2">
                      {["Linux", "Docker", "MySQL", "Redis"].map((item) => (
                        <span key={item} className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">その他</p>
                    <div className="flex flex-wrap gap-2">
                      {["Discord Bot", "Pterodactyl", "Grafana", "Git"].map((item) => (
                        <span key={item} className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SkillsSection />
        <StatsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
