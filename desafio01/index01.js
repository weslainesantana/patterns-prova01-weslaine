// Produto final
class Sanduiche {
  constructor() {
    this.pao = '';
    this.recheio = '';
    this.queijo = '';
    this.vegetais = [];
    this.molhos = [];
  }

  exibir() {
    console.log("=== Detalhes do seu Sanduíche ===");
    console.log(`Pão: ${this.pao || 'Nenhum'}`);
    console.log(`Recheio: ${this.recheio || 'Nenhum'}`);
    console.log(`Queijo: ${this.queijo || 'Nenhum'}`);
    console.log(`Vegetais: ${this.vegetais.length ? this.vegetais.join(', ') : 'Nenhum'}`);
    console.log(`Molhos: ${this.molhos.length ? this.molhos.join(', ') : 'Nenhum'}`);
    console.log("=================================\n");
  }
}

// Builder
class SanduicheBuilder {
  constructor() {
    this._sanduiche = new Sanduiche();
  }

  pao(tipo) {
    this._sanduiche.pao = tipo;
    return this;
  }

  recheio(tipo) {
    this._sanduiche.recheio = tipo;
    return this;
  }

  queijo(tipo) {
    this._sanduiche.queijo = tipo;
    return this;
  }

  vegetal(item) {
    this._sanduiche.vegetais.push(item);
    return this;
  }

  molho(tipo) {
    this._sanduiche.molhos.push(tipo);
    return this;
  }

  pronto() {
    return this._sanduiche;
  }
}

// Diretor (menu pronto)
class MenuSanduiches {
  static xBurger() {
    return new SanduicheBuilder()
      .pao("Australiano")
      .recheio("Hambúrguer Angus 150g")
      .queijo("Prato")
      .vegetal("Alface")
      .vegetal("Tomate")
      .molho("Maionese Especial")
      .pronto();
  }

  static misto() {
    return new SanduicheBuilder()
      .pao("Francês")
      .recheio("Peito de Peru")
      .queijo("Muçarela")
      .pronto();
  }

  static veggie() {
    return new SanduicheBuilder()
      .pao("Integral com sementes")
      .recheio("Falafel")
      .queijo("Queijo Vegano")
      .vegetal("Pepino")
      .vegetal("Cebola Roxa")
      .molho("Tahine")
      .pronto();
  }
}

// Uso
console.log("Pedidos do cardápio:\n");
const burger = MenuSanduiches.xBurger();
burger.exibir();

const misto = MenuSanduiches.misto();
misto.exibir();

console.log("Pedido personalizado:\n");
const meuSanduiche = new SanduicheBuilder()
  .pao("Italiano")
  .recheio("Carne Desfiada")
  .queijo("Cheddar")
  .vegetal("Picles")
  .molho("Barbecue")
  .molho("Mostarda e Mel")
  .pronto();

meuSanduiche.exibir();
