import { Mail, MessageCircle, Github, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: MessageCircle,
    label: "Discord",
    value: "username#0000",
    href: "https://discord.com",
  },
  {
    icon: Mail,
    label: "メール",
    value: "contact@example.com",
    href: "mailto:contact@example.com",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@username",
    href: "https://twitter.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@username",
    href: "https://github.com",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            お問い合わせ
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            サーバー運営に関するご相談、コラボレーションのご提案など、
            お気軽にご連絡ください。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactLinks.map((contact) => (
            <Link
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <contact.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{contact.label}</h3>
              <p className="text-muted-foreground text-sm">{contact.value}</p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="mailto:contact@example.com">
              <Mail size={18} />
              メールを送る
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
