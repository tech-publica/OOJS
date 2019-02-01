export function Conto(saldo) {
    this.saldo = saldo;
}

Conto.prototype = {
    deposita: function(ammontare) {
        this.saldo += ammontare;
        return this.saldo;
    },
    preleva: function(ammontare) {
        this.saldo -= ammontare;
        return this.saldo;
    },
    bonifica: function(ammontare, destinatario){
        this.preleva(ammontare);
        destinatario.deposita(ammontare);
    }
}