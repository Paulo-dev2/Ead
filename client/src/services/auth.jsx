import Cookies from 'js-cookie';

export const TOKEN_KEY = '&app-token';
export const ID_USUARIO = '&id-usuario';
export const NOME_USUARIO = '&nome-usuario';

export const login = token => Cookies.set(TOKEN_KEY,token);
export const logout = () => Cookies.remove(TOKEN_KEY,NOME_USUARIO,ID_USUARIO);

export const setNomeUsuario = nome => Cookies.set(NOME_USUARIO,nome);
export const getNomeUsuario = () => Cookies.get(NOME_USUARIO);

export const setIdUsuario = id => Cookies.set(ID_USUARIO,id);
export const getIdUsuario = () => Cookies.get(ID_USUARIO);

export const getToken = () => Cookies.get(TOKEN_KEY);