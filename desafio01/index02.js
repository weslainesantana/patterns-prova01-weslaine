class Bicicleta {
  move() {
    return "Pedalando a bicicleta no pátio da UNISATC";
  }
}

class Patinete {
  move() {
    return "Andando de patinete pelo estacionamento da UNISATC";
  }
}

class Onibus {
  move() {
    return "Pegando o ônibus para chegar na UNISATC";
  }
}

class TransporteFactory {
  // mapeamento tipo → classe
  static tipos = {
    bicicleta: Bicicleta,
    patinete: Patinete,
    onibus: Onibus
  };

  static criarTransporte(tipo) {
    const Classe = this.tipos[tipo];
    if (!Classe) {
      throw new Error(`O tipo de transporte '${tipo}' não é suportado.`);
    }
    return new Classe();
  }
}

function main() {
  const tipos = ["bicicleta", "onibus", "patinete", "carro"];

  for (const tipo of tipos) {
    try {
      const transporte = TransporteFactory.criarTransporte(tipo);
      console.log(transporte.move());
    } catch (error) {
      console.error(error.message);
    }
  }
}

main();
