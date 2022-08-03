import { useState, useEffect } from 'react'
import Link from 'next/link'
import StoreCard from './components/StoreCard'
import api from '../api'

//Page methods
//getStaticProps no se ejecuta en cada peticion, solo una vez y queda cacheada.
//Aca tenemos revalidate para ver si el contenido cambio en cierto tiempo con stale-while-revalidate

//getServerSideProps se ejecuta en cada request

export const getStaticProps = async () => {
  const stores = await api.list()

  return {
    props: {stores},
    revalidate: 60, //segundos
  }
}

export default function Home({stores})
{
  //Podemos asumir que siempre vamos a tener stores en el primer render
  return (
    <>
        <ul>
      {stores.map((store) => (
          <li key={store.id}>
            <Link href={`/${store.id}`}>
            <a>
              <StoreCard store={store} />
              </a>
              </Link>
          </li>
      ))}
      </ul>
    </>
    )
}
