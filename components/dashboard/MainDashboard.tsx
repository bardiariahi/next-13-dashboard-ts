import React from 'react'
import { useTranslation } from '../../app/i18n/client'
import Header from './Header'

export default function MainDashboard({lang} :any) {
  const { t } = useTranslation(lang, 'second-client-page')

  return (
    <>
    <Header />
    <div>MainDashboard</div>
    </>
  )
}
