function abertura(){
    var now = new Date;
    var date = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate() + "/";

    var name = document.getElementById('name').innerHTML;
    var troco = document.getElementById('txtTroco').value;
    var kiosk = document.getElementById('kiosk').value;

    var docRef = db.ref("/" + date + kiosk + "/financeiro" + "/abertura/");

    docRef.set({
        nome: name,
        troco: troco
    }).then(function () {
        alert('Abertura enviada com sucesso!!');
    });
}

function fechamento(){
    var now = new Date;
    var date = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate() + "/";

    var name = document.getElementById('name').innerHTML;
    var addons = document.getElementById('txtAddons').value;
    var troco = document.getElementById('txtTroco').value;
    var vendas = document.getElementById('txtVendas').value;
    var tcs = document.getElementById('txtTcs').value;
    var kiosk = document.getElementById('kiosk').value;

    var docRef = db.ref("/" + date + kiosk + "/financeiro"  + "/fechamento/");

    docRef.set({
        nome: name,
        addons: addons,
        troco: troco,
        vendas: vendas,
        tcs: tcs
    }).then(function () {
        alert('Fechamento enviado com sucesso!!');
    });
}

function sangria() {
    var now = new Date;
    var date = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate() + "/";

    var name = document.getElementById('name').innerHTML;
    var kiosk = document.getElementById('kiosk').value;
    var lacre = document.getElementById('txtLacre').value;
    var valor = document.getElementById('txtValor').value;
    var tipo = document.getElementById('tipoSangria').value;

    var docRef = db.ref("/" + date + kiosk + "/financeiro" + "/sangrias/" + lacre);
    
    docRef.set({
        nome: name,
        lacre: lacre,
        valor: valor,
        tipo: tipo
    }).then(function () {
        alert('Sangria registrada com sucesso!!');
    });
}