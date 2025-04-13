export const NAV_ITEMS = [
  {
    name: 'Ana Sayfa',
    href: '/',
  },
  {
    name: 'Hizmetler',
    href: '/hizmetler',
  },
  {
    name: 'Hakkımızda',
    href: '/hakkimizda',
  },
  {
    name: 'İletişim',
    href: '/iletisim',
  },
] as const;

export const CONTACT_INFO = {
  email: 'info@envai.com', // Update with actual email
  phone: '+90 555 555 5555', // Update with actual phone
} as const;

export const SERVICES = [
  {
    id: 'google-business',
    title: 'Google İşletme Profili',
    description: 'Google Haritalar ve Aramalarda öne çıkın, müşterilerinizle etkileşime geçin.',
    icon: 'MapPinIcon',
    benefits: ['Yerel aramalarda görünürlük', 'Müşteri değerlendirmeleri', 'İşletme bilgilerinin yönetimi'],
  },
  {
    id: 'website',
    title: 'Kartvizit Web Siteleri',
    description: 'Modern, hızlı ve mobil uyumlu web siteleri ile profesyonel bir dijital varlık oluşturun.',
    icon: 'GlobeAltIcon',
    benefits: ['Mobil uyumlu tasarım', 'Hızlı yüklenme', 'Kolay güncelleme'],
  },
  {
    id: 'social-media',
    title: 'Sosyal Medya Yönetimi',
    description: 'Sosyal medya platformlarında etkin bir şekilde var olun ve müşterilerinizle bağlantı kurun.',
    icon: 'ChatBubbleBottomCenterTextIcon',
    benefits: ['İçerik yönetimi', 'Etkileşim artırma', 'Marka bilinirliği'],
  },
  {
    id: 'digital-ads',
    title: 'Dijital Reklamcılık',
    description: 'Hedefli reklamlarla doğru müşterilere ulaşın ve yatırım getirinizi maksimize edin.',
    icon: 'ChartBarIcon',
    benefits: ['Google Ads yönetimi', 'Sosyal medya reklamları', 'Performans takibi'],
  },
] as const;

export const VALUE_PROPS = [
  {
    title: 'Yerel Odaklı',
    description: 'Yerel işletmelerin ihtiyaçlarını anlıyor ve buna özel çözümler sunuyoruz.',
    icon: 'HomeModernIcon',
  },
  {
    title: 'Uygun Maliyetli',
    description: 'Her bütçeye uygun, etkili dijital pazarlama çözümleri.',
    icon: 'BanknotesIcon',
  },
  {
    title: 'Kişiselleştirilmiş',
    description: 'Her işletmeye özel, ihtiyaca yönelik stratejiler geliştiriyoruz.',
    icon: 'UserGroupIcon',
  },
] as const; 