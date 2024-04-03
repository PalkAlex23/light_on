export function listaTarolasEsGeneralas() {
  const LISTA = [];
  for (let i = 0; i < 9; i++) {
    let szam = Math.floor(Math.random() * 101);
    if (szam <= 20) {
      LISTA.push(1);
    } else {
      LISTA.push(0);
    }
  }
  console.log(LISTA);
  return LISTA;
}

export function htmlLetrehoz(lista) {
  let txt = "";
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 1) {
      txt += `<div id="${i}" class="elem bekapcs">
        </div>`;
    } else {
      txt += `<div id="${i}" class="elem kikapcs">
        </div>`;
    }
  }
  return txt;
}

export function kiIr(txt) {
  const TAROLOELEM = $("#tarolo");
  TAROLOELEM.html(txt);
}

export function kibekapcsolas(lista) {
  console.log(lista);
  const ELEMEK = $(".elem");
  console.log(ELEMEK);
  ELEMEK.on("click", function (event) {
    console.log($(event.target));
    let i = event.target.id;

    if (lista[i] === 1) {
      lista[i] = 0;
    } else {
      lista[i] = 1;
    }
    console.log(lista);

    kiIr(htmlLetrehoz(lista));
    mindenLekapcsolva(lista);
    kibekapcsolas(lista)
  });
}

export function mindenLekapcsolva(lista) {
  let osszKikapcs = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] == 0) {
      osszKikapcs += 1;
    }
  }
  if (osszKikapcs === lista.length) {
    window.alert("Hurrá, meghosszabítottad a Föld életét!");
  } else {
    const SZAMELEM = $("#szam")
    SZAMELEM.html(osszKikapcs)
  }
}

export function ujJatek() {
  const GOMBELEM = $("button");
  GOMBELEM.on("click", function () {
    let LISTA = listaTarolasEsGeneralas();
    kiIr(htmlLetrehoz(LISTA));
    mindenLekapcsolva(LISTA);
    kibekapcsolas(LISTA);
  });
}
