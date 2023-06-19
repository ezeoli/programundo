import React from 'react'
import { useRouter } from 'next/router'
import es from "../app/locale/es"
import en from "../app/locale/en"


type Props = {}

function useIdiomas({}: Props) {
    const router = useRouter();
    const {locale} = router;
    const t = locale === "es" ? es : en

  return (
   t
  )
}
export {useIdiomas}