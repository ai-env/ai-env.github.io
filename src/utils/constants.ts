export const NAV_ITEMS = [
  {
    name: 'Ana Sayfa',
    href: '/',
  },
  {
    name: 'Hizmetler',
    href: '/#services',
  },
  {
    name: 'Hakkımızda',
    href: '/#about',
  },
  {
    name: 'İletişim',
    href: '/#contact',
  },
] as const;

export const CONTACT_INFO = {
  email: 'envai.team@gmail.com', // Update with actual email
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
  {
    title: 'Hızlı Teslimat',
    description: 'Projelerinizi en kısa sürede hayata geçiriyoruz.',
    icon: 'RocketLaunchIcon',
  },
  {
    title: 'Kaliteli',
    description: 'Son teknolojileri kullanarak yüksek kalitede çözümler üretiyoruz.',
    icon: 'SparklesIcon',
  },
  {
    title: 'Profesyonel',
    description: 'Uzman ekibimizle profesyonel hizmet ve destek sağlıyoruz.',
    icon: 'AcademicCapIcon',
  },
] as const; 