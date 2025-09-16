import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Whoami?",
  subTitle: "My Security Notes",
  brandTitle: "Kai0Kid",

  description: "Demo Site",

  site: "https://kai0kid.vercel.app",

  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/WhitePaper233/yukina",
    },
  ],

  username: "Kai0Kid",
  sign: "Bạn tìm gì ở tôi ?",
  avatarUrl: "https://raw.githubusercontent.com/Kai0Kid/Web/refs/heads/main/pictures/logokid.jpg",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/Kai0Kid",
    },
    {
      icon: "mingcute:discord-line",
      link: "https://discord.gg/dB3swfDkpU",
    },
    {
      icon: "mingcute:youtube-line",
      link: "https://www.youtube.com/@Kai0Kid-Black",
    },
    {
      icon: "mingcute:tiktok-line",
      link: "https://www.tiktok.com/@k4i0k1d",
    },
    {
      icon: "mdi:gmail",
      link: "mailto:kai0kid08@gmail.com",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://raw.githubusercontent.com/Kai0Kid/Web/refs/heads/main/pictures/0.jpg",
    "https://raw.githubusercontent.com/Kai0Kid/Web/refs/heads/main/pictures/1.jpg",
    "https://raw.githubusercontent.com/Kai0Kid/Web/refs/heads/main/pictures/2.jpg",
    "https://raw.githubusercontent.com/Kai0Kid/Web/refs/heads/main/pictures/3.jpg",
    "https://raw.githubusercontent.com/Kai0Kid/Web/refs/heads/main/pictures/4.jpg",
    "https://raw.githubusercontent.com/Kai0Kid/Web/refs/heads/main/pictures/5.jpg",
    "https://raw.githubusercontent.com/Kai0Kid/Web/refs/heads/main/pictures/6.jpg",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
