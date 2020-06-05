function pares(inicio, fim) {
  for (var i = inicio; i <= fim; i++) {
    if (i % 2 == 0) {
      par = i;
    }
    console.log(par);
  }
}
pares(0, 10);
