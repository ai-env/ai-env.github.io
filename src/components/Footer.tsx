import Link from 'next/link';
import { CONTACT_INFO } from '@/utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">envai</h3>
            <p className="text-gray-600 mb-4">
              Yerel işletmelerin dijital dünyada başarılı olmasına yardımcı oluyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-gray-900 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {currentYear} envai. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
} 