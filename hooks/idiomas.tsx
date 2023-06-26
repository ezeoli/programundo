import {useRouter} from 'next/router'
import es from "../locale/es"
import en from "../locale/en"

type Props = {}

function useIdiomas({}: Props) {
    const router = useRouter();
    console.log('router:', router)
    const {locale} = router;
    let t = locale === "es" ? es : en
  return (
   t
  )
}
export {useIdiomas}