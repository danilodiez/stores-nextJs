import { useRouter } from "next/router"
import Link from "next/link"
import api from '../api'
import StoreCard from "./components/StoreCard"
//Page methods
//getStaticProps no se ejecuta en cada peticion, solo una vez y queda cacheada.
//Aca tenemos revalidate para ver si el contenido cambio en cierto tiempo con stale-while-revalidate

//getServerSideProps se ejecuta en cada request

export const getStaticProps = async ({params}) => {
  const store = await api.fetch(params?.id)

  return {
    props: {store},
    revalidate: 60, //segundos
  }
}
export const getStaticPaths = async () => {
  const stores = await api.list()
  return {
    paths: stores.map((store)=> ({params: {id: store.id}})),
    fallback: "blocking"
  }
}

export default function Store({store}) {

  return (
    <>
     <StoreCard store={store} />
     <Link href="/">
     <a>Ir al inicio</a>
     </Link>
    </>
  )
}
