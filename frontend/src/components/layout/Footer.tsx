import { socialLinks } from "@/data/SocialLinkData";

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        {/* SNSリンク（アイコンのみ） */}
        <div className="flex space-x-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-slate-500 hover:text-slate-900 transition-colors text-2xl"
            >
              {link.icon}
            </a>
          ))}
        </div>
        {/* ディバイダー */}
        <hr className="w-full border-t border-slate-200 mb-4" />
        {/* コピーライト */}
        <div className="text-xs text-slate-500">© 2025 Created By Masaya Kemmochi.</div>
      </div>
    </footer>
  );
} 