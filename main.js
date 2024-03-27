import { htmlLetrehoz, kiIr, kibekapcsolas, listaTarolasEsGeneralas, mindenLekapcsolva, ujJatek } from "./fuggvenyek.js";

let LISTA = listaTarolasEsGeneralas();
kiIr(htmlLetrehoz(LISTA));
kibekapcsolas(LISTA);
ujJatek();