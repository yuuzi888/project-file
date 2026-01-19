import { Github, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm tracking-wider uppercase">
                Minecraft Server Administrator
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                サーバー運営で
                <br />
                <span className="text-primary">コミュニティ</span>を創る
              </h1>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              マインクラフトサーバーの構築・運営・管理を通じて、
              プレイヤーが楽しめる環境づくりに情熱を注いでいます。
              技術的なサーバー管理からコミュニティマネジメントまで、
              幅広いスキルを身につけてきました。
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="#contact">
                  <Mail size={18} />
                  お問い合わせ
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                <Link href="#experience">
                  詳しく見る
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Right Content - Server Status Card */}
          <div className="relative">
            <div className="bg-card border border-border rounded-xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-foreground">サーバーステータス</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-green-500">オンライン</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">現在のプレイヤー</p>
                  <p className="text-2xl font-bold text-foreground">24<span className="text-muted-foreground text-lg">/100</span></p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">稼働時間</p>
                  <p className="text-2xl font-bold text-primary">99.9%</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">バージョン</span>
                  <span className="text-foreground font-mono">1.21.4</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">サーバータイプ</span>
                  <span className="text-foreground font-mono">Paper</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">プラグイン数</span>
                  <span className="text-foreground font-mono">45+</span>
                </div>
              </div>

              <div className="bg-secondary rounded-lg p-3">
                <p className="text-muted-foreground text-xs mb-1">サーバーアドレス</p>
                <code className="text-primary text-sm font-mono">play.example-server.jp</code>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
