import { Conto } from './conto.mjs';



function ContoItaliano(saldo, onomastico) {
    Conto.call(this, saldo);
    this.onomastico = onomastico;
}
ContoItaliano.prototype = new Conto();
ContoItaliano.prototype.constructor = ContoItaliano;
ContoItaliano.prototype.sonoPovero = function() {
   return this.saldo < 100;
};

function ContoCayman(saldo) {
    Conto.call(this, saldo);
}
ContoCayman.prototype = new Conto();
ContoCayman.prototype.constructor = ContoCayman;
ContoCayman.prototype.deposita = function(ammontare) {
    this.saldo += ammontare * 1.1;
};



let c = new Conto(100);
console.log(c.saldo);

let ci  = new ContoItaliano(99, new Date(2000, 1, 31));
console.log(ci.saldo);
ci.preleva(10);
console.log(ci.saldo);
console.log(ci.onomastico);
console.log(ci.sonoPovero()); 

let cc = new ContoCayman(1000);
console.log(cc.saldo);
cc.deposita(1000);
console.log(cc.saldo);