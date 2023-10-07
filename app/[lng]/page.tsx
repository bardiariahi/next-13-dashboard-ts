import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'
import { Footer } from './components/Footer'

export default async function Page({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <>
     <main>
     <p>{t('description')}</p>
     </main>
      <Footer lng={lng}/>
    </>
  )
}
