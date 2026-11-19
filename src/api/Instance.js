import { createAlova } from 'alova';
import ReactHook from 'alova/react';
import adapterFetch from 'alova/fetch';

export const alovaInstance = createAlova({
    baseURL: 'http://universities.hipolabs.com',
    statesHook: ReactHook,
    requestAdapter: adapterFetch(),
    cacheFor: { GET: 300000 },
    responded: (respuesta) => respuesta.json(),
});

export const obtenerLista = () =>
  alovaInstance.Get('/search', {
    params: {
      country: 'Peru',
    },
  });