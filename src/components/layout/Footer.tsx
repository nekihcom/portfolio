import { socialLinksData } from "@/data/SocialLinkData";
import { SocialLink } from "@/types/type";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 border-t border-gray-200">
      <div className="relative container mx-auto px-4 py-6">
        <div className="flex flex-col items-center">
          {/* SNSリンク */}
          <div className="flex space-x-8 mb-4">
            {socialLinksData.map((link: SocialLink, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-gray-600 transition-colors">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>

          {/* ディバイダー */}
          <div className="w-full max-w-md mb-3">
            <div className="flex items-center">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
          </div>

          {/* コピーライト */}
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-1">
              © 2025 Created By Masaya Kemmochi.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 