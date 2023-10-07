'use client'

import React from 'react'
import MainDashboard from '../../../components/dashboard/MainDashboard'

export default function Page({ params: { lng } }: {
    params: {
      lng: string;
    };
  }) {
  return (
    <>
    <MainDashboard lang={lng} />
    </>
  )
}
