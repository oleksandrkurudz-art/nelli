import AnimationRuntime from "./AnimationRuntime";
import VideoTile from "./VideoTile";
import styles from "./page.module.css";

const imageDimensions = {
  "/assets/about-1.webp": { width: 1237, height: 2200 },
  "/assets/about-2.webp": { width: 2200, height: 1238 },
  "/assets/about-3.webp": { width: 1650, height: 2200 },
  "/assets/audience-1.webp": { width: 2200, height: 1237 },
  "/assets/audience-2.webp": { width: 2166, height: 2200 },
  "/assets/audience-3.webp": { width: 1237, height: 2200 },
  "/assets/audience-4.webp": { width: 1238, height: 2200 },
  "/assets/avatar-1.png": { width: 90, height: 90 },
  "/assets/avatar-2.png": { width: 90, height: 90 },
  "/assets/avatar-3.png": { width: 90, height: 90 },
  "/assets/beauty-1.webp": { width: 1238, height: 2200 },
  "/assets/beauty-2.webp": { width: 1650, height: 2200 },
  "/assets/beauty-3.webp": { width: 1238, height: 2200 },
  "/assets/fashion-1.webp": { width: 1467, height: 2200 },
  "/assets/fashion-2.webp": { width: 1467, height: 2200 },
  "/assets/fotka11.webp": { width: 1100, height: 1956 },
  "/assets/fit-ads.webp": { width: 1067, height: 1600 },
  "/assets/fit-launches.webp": { width: 1200, height: 1600 },
  "/assets/fit-sites.webp": { width: 1067, height: 1600 },
  "/assets/travel-new-2.webp": { width: 1200, height: 1600 },
  "/assets/travel-new-3.webp": { width: 1067, height: 1600 },
  "/assets/fashion-small.webp": { width: 1067, height: 1600 },
  "/assets/audience-skincare.webp": { width: 900, height: 1600 },
  "/assets/audience-wellness.webp": { width: 900, height: 1600 },
  "/assets/package-basic.webp": { width: 900, height: 1600 },
  "/assets/package-extended.webp": { width: 1067, height: 1600 },
  "/assets/package-services.webp": { width: 900, height: 1600 },
  "/assets/about-create.webp": { width: 895, height: 1600 },
  "/assets/beauty-strip-2.webp": { width: 1067, height: 1600 },
  "/assets/hero-portrait.webp": { width: 1467, height: 2200 },
  "/assets/lifestyle-1.webp": { width: 1650, height: 2200 },
  "/assets/lifestyle-2.webp": { width: 1238, height: 2200 },
  "/assets/lifestyle-3.webp": { width: 2200, height: 1676 },
  "/assets/lifestyle-4.webp": { width: 1650, height: 2200 },
  "/assets/lifestyle-5.webp": { width: 1650, height: 2200 },
  "/assets/travel-1.webp": { width: 1467, height: 2200 },
  "/assets/travel-2.webp": { width: 1238, height: 2200 },
  "/assets/travel-3.webp": { width: 1238, height: 2200 },
};

function imageSize(src) {
  return imageDimensions[src] || { width: 1200, height: 1600 };
}

function PortfolioImage({ src, alt = "", priority = false, ...props }) {
  const { width, height } = imageSize(src);
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "auto" : "async"}
      {...props}
    />
  );
}

const socialLinks = {
  instagram: "https://instagram.com/nelianiko_",
  telegram: "https://t.me/Nelli_ua",
  designer: "https://instagram.com/yatsk1v",
  developer: "https://instagram.com/ok.web_",
  email: "mailto:Neliaja1996@gmail.com",
  phone: "tel:+353851601095",
};

const heroPortrait = "/assets/hero-portrait.webp";
const avatars = [
  "/assets/avatar-1.png",
  "/assets/avatar-2.png",
  "/assets/avatar-3.png",
];

const aboutCards = [
  {
    image: "/assets/about-1.webp",
    text: "Моя ціль — допомагати брендам показувати свої продукти красиво, живо та по-справжньому, щоб люди не просто бачили рекламу, а відчували емоцію та довіру.",
  },
  {
    image: "/assets/about-2.webp",
    text: "Працюю з брендами у форматі:\n• UGC-відео\n• Reels та TikTok\n• Предметна та lifestyle-зйомка\n• Естетичний storytelling-контент",
  },
  {
    image: "/assets/about-create.webp",
    text: "Люблю створювати контент\nчерез атмосферу, деталі, світло та настрій — той контент, який хочеться додивитись до кінця.",
  },
];

const beautyFit = [
  { title: "соціальних мереж", image: "/assets/fotka11.webp" },
  { title: "рекламних кампаній", image: "/assets/fit-ads.webp" },
  { title: "сайтів брендів", image: "/assets/fit-sites.webp" },
  { title: "запусків продуктів", image: "/assets/fit-launches.webp" },
  { title: "lifestyle та beauty-брендів", image: "/assets/about-3.webp" },
];

const beautyImages = [
  "/assets/beauty-1.webp",
  "/assets/beauty-strip-2.webp",
  "/assets/beauty-3.webp",
];

const beautyAudience = [
  { image: "/assets/audience-skincare.webp", title: "skincare-брендів" },
  { image: "/assets/audience-2.webp", title: "косметики" },
  { image: "/assets/audience-3.webp", title: "beauty-продуктів" },
  { image: "/assets/audience-wellness.webp", title: "wellness та self-care брендів" },
];

const lifestyleFit = [
  { image: "/assets/lifestyle-1.webp", title: "lifestyle-брендів", video: "/videos/lifestyle.mp4" },
  { image: "/assets/lifestyle-2.webp", title: "food & drinks", video: "/videos/food-and-drinks.mp4" },
  { image: "/assets/lifestyle-3.webp", title: "home products", video: "/videos/home-products.mp4" },
  { image: "/assets/lifestyle-4.webp", title: "wellness", video: "/videos/wellness.mp4" },
  { image: "/assets/lifestyle-5.webp", title: "self-care та daily routine контенту", video: "/videos/self-care.mp4" },
];

const travelImages = [
  "/assets/travel-1.webp",
  "/assets/travel-new-2.webp",
  "/assets/travel-new-3.webp",
];

const fashionImages = [
  "/assets/fashion-small.webp",
  "/assets/fashion-2.webp",
];

const terms = [
  {
    icon: "/hand.svg",
    title: "Бартерна співпраця",
    items: [
      "Розглядаю співпрацю на бартерній основі",
      "До 1-5 продуктів",
      "Формат: предметна або lifestyle-зйомка",
      "Термін зйомки визначаю самостійно або узгоджуємо з брендом",
      "Креатив та стиль зйомки залишаю за собою, але відкрита до побажань бренду",
    ],
  },
  {
    icon: "/card.svg",
    title: "Оплатна співпраця",
    items: [
      "Відео + фото контент",
      "Предметна, lifestyle або beauty-зйомка",
      "Можлива демонстрація обличчя",
      "Передача готових матеріалів бренду для використання",
      "Можливе повернення продукту за умови збереження його стану",
    ],
  },
  {
    icon: "/plus.svg",
    title: "Додатково",
    items: [
      "Beauty / Face Content завжди обговорюється окремо",
      "Термін створення контенту: 1-4 тижні",
      "Відкрита до довгострокових колаборацій та нових брендів",
    ],
  },
];

const packageCards = [
  {
    image: "/assets/package-basic.webp",
    title: "Basic Package:",
    items: ["1 відео (Reels / TikTok)", "Базовий монтаж", "3 фото"],
    price: "20€ / 1000 грн",
  },
  {
    image: "/assets/lifestyle-3.webp",
    title: "Standard Package:",
    items: ["1 відео (Reels / TikTok)", "5–10 фото", "Передача матеріалів бренду"],
    price: "30€ / 1500 грн",
  },
  {
    image: "/assets/package-extended.webp",
    title: "Extended Package:",
    items: ["1 відео (Reels / TikTok)", "3 stories", "1 post-carousel", "До 20 фото", "Передача матеріалів бренду"],
    price: "50€ / 2550 грн",
  },
  {
    image: "/assets/package-services.webp",
    title: "Окремі послуги:",
    services: [
      { label: "Відео", value: "1 Reels / TikTok — 30€ / 1500 грн" },
      { label: "Фото", value: "5–30 фото — 30€ / 1500 грн" },
    ],
    price: "",
  },
];

export default function App() {
  return (
    <main className={styles.page}>
      <AnimationRuntime />

      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          PORTFOLIO
        </a>
        <nav className={styles.nav}>
          <a href="#about">Про мене</a>
          <a href="#services">Послуги</a>
          <a href="#portfolio">Портфоліо</a>
          <a href="#contacts">Контакти</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.heroLead}>Я створюю естетичний, емоційний та автентичний контент</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleTop}>
              <span className={styles.heroFlourish}>U</span>GC Creator & Influencer
            </span>
            <span className={styles.heroTitleBottom}>Естетичний контент</span>
            <span className={styles.heroTitleBottom}>для брендів</span>
          </h1>
          <p className={styles.heroDescription}>
            Я створюю естетичний, емоційний та{" "}
            <br />
            автентичний контент, який допомагає брендам{" "}
            <br />
            природно встановлювати зв’язок зі своєю{" "}
            <br />
            аудиторією через атмосферу, візуал та історії.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#contacts">
              Запропонувати співпрацю
            </a>
            <a className={styles.secondaryButton} href="#portfolio">
              Переглянути портфоліо
            </a>
          </div>
          <div className={styles.heroSocialProof}>
            <div className={styles.avatarStack}>
              {avatars.map((avatar, index) => (
                <PortfolioImage
                  key={avatar}
                  className={styles.avatar}
                  src={avatar}
                  alt=""
                  aria-hidden="true"
                  style={{ left: `${index * 26}px` }}
                />
              ))}
            </div>
            <span>3.2K+ Підписників</span>
          </div>
        </div>
        <div className={styles.heroVisualWrap}>
          <div className={styles.heroOval} />
          <PortfolioImage
            className={styles.heroVisual}
            src={heroPortrait}
            alt="Неллі"
            priority
          />
        </div>
      </section>

      <section id="about" className={styles.aboutSection}>
        <div className={styles.sideLabel}>
          Про
          <br />
          мене
        </div>
        <div className={styles.aboutHeading}>
          <div className={styles.greeting}>
            <span className={styles.script}>П</span>ривіт,
          </div>
          <div className={styles.name}>я Неллі</div>
          <p className={styles.aboutSubtitle}>контент-кріейтор з України, зараз живу в Ірландії.</p>
        </div>
        <div className={styles.aboutIntroGrid}>
          <p>Створюю lifestyle, travel та естетичний контент, який відчувається натуральним, емоційним і надихаючим.</p>
          <p>Моя ціль — допомагати брендам показувати свої продукти красиво, живо та по-справжньому, щоб люди не просто бачили рекламу, а відчували емоцію та довіру.</p>
        </div>
        <div className={styles.aboutCardGrid}>
          {aboutCards.map((card) => (
            <article key={card.image} className={styles.aboutCard}>
              <PortfolioImage src={card.image} alt="" aria-hidden="true" />
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className={styles.servicesSection}>
        <div className={styles.sideLabel}>
          Моя цінність як
          <br />
          ugc-кріейтора
        </div>
        <h2 className={styles.statement}>
          <span className={styles.script}>Я</span> створюю теплий та естетичний контент, який виглядає природно та органічно в стрічці соціальних мереж.
        </h2>
        <div className={styles.servicesGrid}>
          <div>
            <p className={styles.paragraphStrong}>
              <strong>Працюю з деталями,</strong> світлом, настроєм та емоцією, щоб контент привертав увагу, але не виглядав як пряма реклама.
              <br />
              <strong>Моє завдання —</strong> створювати відео та фото, які викликають довіру до бренду та допомагають аудиторії відчути продукт.
            </p>
          </div>
          <div>
            <h3 className={styles.sectionMiniTitle}>Контент підходить для:</h3>
            <ul className={styles.lineList}>
              {beautyFit.map((item) => (
                <li key={item.title}>
                  <span>{item.title}</span>
                  <PortfolioImage
                    className={styles.serviceThumb}
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.contentSection} id="portfolio">
        <div className={styles.sideLabel}>Beauty face content</div>
        <div className={styles.sectionTitle}>
          Beauty <span className={styles.titleAmp}>&</span> Face Content
        </div>
        <div className={styles.contentTopRow}>
          <p>
            <strong>Створюю beauty-контент</strong> із фокусом на атмосферу, текстури, догляд та деталі: процес використання продукту, close-up кадри, before/after, нанесення засобів та природні емоції в кадрі.
          </p>
          <p>Естетична зйомка з обличчям, яка допомагає показати продукт живо, натурально та емоційно.</p>
          <p>Такий формат контенту допомагає аудиторії краще відчути продукт і викликає довіру через реальний та візуально приємний досвід.</p>
        </div>
        <div className={styles.beautyArrow} aria-hidden="true">
          <img src="/assets/vector-4.svg" alt="" loading="lazy" />
          <img src="/assets/vector-3.svg" alt="" loading="lazy" />
          <img src="/assets/vector-2.svg" alt="" loading="lazy" />
        </div>
        <div className={styles.imageStripThree}>
          {beautyImages.map((image, index) => (
            <PortfolioImage
              key={image}
              src={image}
              alt={`Beauty content ${index + 1}`}
            />
          ))}
        </div>
        <h3 className={styles.sectionMiniTitleLeft}>Підходить для:</h3>
        <div className={styles.audienceGrid}>
          {beautyAudience.map((item) => (
            <article key={item.title} className={styles.audienceCard}>
              <PortfolioImage src={item.image} alt="" aria-hidden="true" />
              <span>{item.title}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.lifestyleSection}`}>
        <div className={styles.sideLabel}>
          Lifestyle
          <br />
          content
        </div>
        <h2 className={styles.sectionTitle}>
          <span className={styles.script}>L</span>ifestyle Content
        </h2>
        <div className={styles.centerParagraph}>

          <p>Контент про життя з продуктом — живі моменти, атмосфера, естетика та емоції.</p>
          <p>Створюю lifestyle-контент у природному стилі: ранкові рутини, slow living, їжа, десерти, затишні кадри, деталі повсякденного життя та моменти, які виглядають легко й автентично.</p>
          <p>Моя ціль — зробити контент схожим не на рекламу, а на щиру рекомендацію, яку хочеться зберегти або повторити.</p>
        </div>
        <p className={styles.lifestyleFitLabel}>Підходить для:</p>
        <div className={styles.fiveColGallery}>
          {lifestyleFit.map((item) => (
            <figure key={item.title} className={styles.galleryCard}>
              <figcaption>{item.title}</figcaption>
              <VideoTile src={item.video} poster={item.image} label={item.title} />
            </figure>
          ))}
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.travelSection}`}>
        <div className={styles.sideLabel}>Travel content</div>
        <h2 className={styles.sectionTitle}>
          <span className={styles.script}>T</span>ravel Content
        </h2>
        <div className={styles.travelIntro}>
          <p>
            <strong>Подорожі</strong>, атмосфера місць та{" "}
            <br />
            емоції через візуальний storytelling.
          </p>
          <p>
            <strong>Контент допомагає брендам</strong>{" "}
            <br />
            показати не просто місце чи{" "}
            <br />
            послугу, а досвід та емоцію,{" "}
            <br />
            яку людина може відчути.
          </p>
        </div>
        <div className={styles.travelGallery}>
          {travelImages.map((image, index) => (
            <PortfolioImage key={image} src={image} alt={`Travel content ${index + 1}`} />
          ))}
        </div>
        <p className={styles.centerParagraphNarrow}>
          <strong>Створюю travel-контент</strong>, який передає настрій{" "}
          <br />
          місця через деталі, світло, природу, архітектуру{" "}
          <br />
          та стиль життя. Знімаю атмосферні кадри{" "}
          <br />
          проживання, будиночків, готелів, локацій, ранків{" "}
          <br />
          у подорожах та естетику моментів.
        </p>
      </section>

      <section className={`${styles.contentSection} ${styles.fashionSection}`}>
        <div className={styles.sideLabel}>Fashion content</div>
        <h2 className={styles.sectionTitleLeft}>
          <span className={styles.script}>F</span>ashion Content
        </h2>
        <div className={styles.fashionGrid}>
          <div className={styles.fashionText}>
            <p>
              Естетичний fashion-контент з акцентом на стиль,{" "}
              <br />
              рух та деталі.
            </p>
            <p>
              Створюю контент для брендів одягу та{" "}
              <br />
              аксесуарів через атмосферу, тканини, світло, рух{" "}
              <br />
              та природну подачу образів. У кадрі важливі не{" "}
              <br />
              лише речі, а й відчуття стилю та настрою.
            </p>
            <p>
              Показую деталі одягу, фактури, аксесуари,{" "}
              <br />
              взуття, прикраси та образи у lifestyle-форматі,{" "}
              <br />
              який виглядає сучасно та органічно.
            </p>
          </div>
          <div className={styles.fashionImages}>
            {fashionImages.map((image, index) => (
              <PortfolioImage key={image} src={image} alt={`Fashion content ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.termsSection}>
        <div className={styles.sideLabelLight}>
          Умови
          <br />
          співпраці
        </div>
        <div className={styles.termsTitle}>
          <span className={styles.scriptLight}>У</span>мови співпраці
        </div>
        <div className={styles.termsList}>
          {terms.map((term) => (
            <article key={term.title} className={styles.termRow}>
              <img className={styles.termIcon} src={term.icon} alt="" loading="lazy" />
              <h3>{term.title}</h3>
              <ul>
                {term.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.packagesSection}>
        <div className={styles.packageRail} aria-hidden="true">
          <div className={styles.packageWatermark}>Пакети співпраці</div>
        </div>
        <h2 className={styles.sectionTitleLeft}>
          <span className={styles.script}>П</span>акети співпраці
        </h2>
        <div className={styles.packageGrid}>
          {packageCards.map((pack) => (
            <article key={pack.title} className={styles.packageCard}>
              <PortfolioImage src={pack.image} alt="" aria-hidden="true" />
              <div>
                <h3>{pack.title}</h3>
                <ul>
                  {pack.services
                    ? pack.services.map((service) => (
                        <li key={service.label} className={styles.packageServiceItem}>
                          <strong>{service.label}</strong>
                          <span>{service.value}</span>
                        </li>
                      ))
                    : pack.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              {pack.price ? (
                <div className={styles.packagePrice}>
                  <span>Вартість:</span>
                  <span>{pack.price}</span>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section id="contacts" className={styles.contactSection}>
        <div className={styles.contactTitle}>
          <span className={styles.script}>L</span>et&apos;s Work Together
        </div>
        <p className={styles.contactCopy}>Відкрита до співпраці з брендами, які цінують естетику, атмосферу та автентичний контент.</p>
        <div className={styles.contactActions}>
          <a className={`${styles.primaryButton} ${styles.contactButton}`} href={socialLinks.telegram} target="_blank" rel="noreferrer">
            написати мені
          </a>
        </div>
        <div className={styles.contactMeta}>
          <a className={styles.contactEmail} href={socialLinks.email}>Neliaja1996@gmail.com</a>
          <a className={styles.contactPhone} href={socialLinks.phone}>
            <strong>Phone:</strong>
            <span>+353851601095</span>
          </a>
          <div className={styles.contactIcons}>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src="/assets/instagram.svg" alt="" loading="eager" decoding="async" />
            </a>
            <a href={socialLinks.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
              <img src="/assets/telegram.svg" alt="" loading="eager" decoding="async" />
            </a>
          </div>
          <div className={styles.creditRow}>
            <a href={socialLinks.designer} target="_blank" rel="noreferrer">web designer - @yatsk1v</a>
            <a href={socialLinks.developer} target="_blank" rel="noreferrer">developer - @ok.web_</a>
          </div>
        </div>
      </section>
    </main>
  );
}
