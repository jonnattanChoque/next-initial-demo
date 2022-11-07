import { DarkLayout } from '../../components/layouts/DarkLayout';
import { MainLayout } from '../../components/layouts/MainLayout';
import { ReactNode } from 'react';

export default function Pricing () {
  return (
    <>
    <div>Pricing</div>
    </>
  )
}

Pricing.getLayout = (page: ReactNode) => {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}