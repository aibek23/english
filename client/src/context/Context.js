import {createContext} from 'react'
function noop() {}
export const Context = createContext({
  token: null,
  userEmail:null,
  login: noop,
  logout: noop,
  isAuthenticated: false,

})