import * as React from 'react'
import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin'
import strapiProvider from 'ra-strapi-rest'
import authProvider from './helpers/authProvider'
import Cookies from './helpers/cookies'
import { StyleCreate, StyleEdit, StyleList } from './components/styles'
import { CreatorCreate } from './components/Creator'
import { HeadCreate } from './components/Head'
import { BodyCreate } from './components/Body'

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = Cookies.getCookie('token')
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}

const  uploadFields = ["items_list", "head_skin", "upper_skin", "lower_skin"];

const dataProvider = strapiProvider('http://localhost:1337', httpClient, uploadFields)
function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name='creators' create={CreatorCreate} list={ListGuesser} />
      <Resource name="heads" create={HeadCreate} list={ListGuesser} />
      <Resource name="bodies" create={BodyCreate} list={ListGuesser} />
      <Resource name="styles" create={StyleCreate} edit={StyleEdit} list={StyleList} />
    </Admin>
  );
}

export default App;
