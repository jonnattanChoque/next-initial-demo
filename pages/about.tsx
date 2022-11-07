import React from 'react'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'
import { ReactNode } from 'react';

export default function AboutPage() {
  return (
    <>
      <h1 className={'title'}>About</h1>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}


