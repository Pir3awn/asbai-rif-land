import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();

  console.log('Current language:', i18n.language);
  console.log('Welcome translation:', t('hero.welcome'));

  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="RIF LAND"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4" key={i18n.language}>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('hero.welcome')}</h1>
        <p className="text-xl md:text-2xl mb-8">{t('hero.subtitle')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-black bg-opacity-50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">{t('hero.organic')}</h3>
            <p>{t('hero.sustainable')}</p>
          </div>
          <div className="bg-black bg-opacity-50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">{t('hero.getaway')}</h3>
            <p>{t('hero.relax')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 