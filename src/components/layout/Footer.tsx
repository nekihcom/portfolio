import { socialLinks } from "@/data/SocialLinkData";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 border-t border-gray-200">
      {/* 装飾的な要素 */}
      <div className="absolute top-0 left-1/4 w-12 h-12 bg-teal-200/20 rounded-full blur-md animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-16 h-16 bg-teal-300/15 rounded-full blur-md animate-pulse delay-1000" />
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          {/* SNSリンク */}
          <div className="flex space-x-8 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="group bg-white/80 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-teal-50 border border-gray-200 hover:border-teal-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl text-gray-600 group-hover:text-teal-600 transition-colors">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>

          {/* ディバイダー */}
          <div className="w-full max-w-md mb-6">
            <div className="flex items-center">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
          </div>

          {/* コピーライト */}
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-2">
              © 2025 Created By Masaya Kemmochi.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 