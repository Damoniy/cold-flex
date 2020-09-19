function injectTxt(){
    document.getElementById('prod0').innerHTML = "MIX DE BAUNILHA";
    document.getElementById('prod1').innerHTML = "MIX DE CHOCOLATE";
    document.getElementById('prod2').innerHTML = "CONE DE CASQUINHA";
    document.getElementById('prod3').innerHTML = "CONE DE CASCÃO";
    document.getElementById('prod4').innerHTML = "LEITE";
    document.getElementById('prod5').innerHTML = "CHANTILLY";
    document.getElementById('prod6').innerHTML = "COBERTURA DE CARAMELO";
    document.getElementById('prod7').innerHTML = "COBERTURA DE CHOCOLATE";
    document.getElementById('prod8').innerHTML = "COBERTURA DE MORANGO";
    document.getElementById('prod9').innerHTML = "COBERTURA DE BRIGADEIRO";
    document.getElementById('prod10').innerHTML = "MC MIX PAÇOCA";
    document.getElementById('prod11').innerHTML = "OVOMALTINE FLOCOS";
    document.getElementById('prod12').innerHTML = "OVOMALTINE ROCKS";
    document.getElementById('prod13').innerHTML = "KIT KAT AVELÃ";
    document.getElementById('prod14').innerHTML = "PEPITA DARK";
    document.getElementById('prod15').innerHTML = "TABLETE KOP AO LEITE";
    document.getElementById('prod16').innerHTML = "GOTA CHOCOLATE KOP";
    document.getElementById('prod17').innerHTML = "ÁGUA VITTALEV COPO";
    document.getElementById('prod18').innerHTML = "AMENDOIM";
    document.getElementById('prod19').innerHTML = "BIJU DE BAUNILHA";   
    document.getElementById('prod20').innerHTML = "COPO MC FLURRY GENÉRICO";
    document.getElementById('prod21').innerHTML = "COPO MC FLURRY OVOMALTINE";
    document.getElementById('prod22').innerHTML = "COPO MC FLURRY PROMOCIONAL";
    document.getElementById('prod23').innerHTML = "COPO MC SHAKE 440 ML";
    document.getElementById('prod24').innerHTML = "COPO SUNDAE";
    document.getElementById('prod25').innerHTML = "COPO TOP SUNDAE";
    document.getElementById('prod26').innerHTML = "TAMPA CBB P MC SHAKE";
    document.getElementById('prod27').innerHTML = "COLHER SUNDAE CX C 2000UN";
    document.getElementById('prod28').innerHTML = "COLHER MC FLURRY CX C 2000UN";
    document.getElementById('prod29').innerHTML = "COLHER SWEET PCT C 1000UN";
    document.getElementById('prod30').innerHTML = "GUARDANAPO DE CASQUINHA";
    document.getElementById('prod31').innerHTML = "COPO CORTESIA";
    document.getElementById('prod32').innerHTML = "BOBINA TÉRMICA P POS";
    document.getElementById('prod33').innerHTML = "BLUE POLLY LUVA AZUL";
    document.getElementById('prod34').innerHTML = "ZIP MC FLURRY COMPLEMENTOS";
    document.getElementById('prod35').innerHTML = "CANUDO SUPER VERMELHO";

    document.getElementById('comp0').innerHTML = "COMPLETO";
    document.getElementById('imcomp0').innerHTML = "IMCOMPLETO";
    document.getElementById('item').innerHTML = "QUANTIDADE";
    document.getElementById('item0').innerHTML = "QUANTIDADE";
}

function save(){
  var now = new Date;
  var date = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate() + "/";

  var kiosk = document.getElementById('kiosk').value;
  var turno = document.getElementById('turno').value;

  for(var i = 0; i < 35; i++){
    var product = document.getElementById('prod' + i.toString()).innerText;
    var cx = document.getElementById('cx' + i.toString()).value;
    var pct = document.getElementById('pct' + i.toString()).value;
    var und = document.getElementById('und' + i.toString()).value;

    var docRef = db.ref("/" + date + kiosk + "/contagem/" + turno + "/" + product);
    
    docRef.set({
        produto: product,
        caixa: cx,
        pacote: pct,
        unidade: und
    });
  }

  alert('Contagem salva com sucesso!');
}

function generate() {
  alert('Obrigado pelo envio da contagem! Ass: Emerson :)');

    var doc = new jsPDF()

    var now = new Date;
    var dateformated = now.toLocaleDateString();

    var name = document.getElementById('name').innerText;
    var kiosk = document.getElementById('kiosk').value;
    var turno = document.getElementById('turno').value;

    var column1 = document.getElementById('column1').innerText;
    var column2 = document.getElementById('column2').innerText;
    var column3 = document.getElementById('column3').innerText;
    var column4 = document.getElementById('column4').innerText;

    var prod0 = document.getElementById('prod0').innerText;
    var cx0 = document.getElementById('cx0').value;
    var pct0 = document.getElementById('pct0').value;
    var und0 = document.getElementById('und0').value;

    var prod1 = document.getElementById('prod1').innerText;
    var cx1 = document.getElementById('cx1').value;
    var pct1 = document.getElementById('pct1').value;
    var und1 = document.getElementById('und1').value;

    var prod2 = document.getElementById('prod2').innerText;
    var cx2 = document.getElementById('cx2').value;
    var pct2 = document.getElementById('pct2').value;
    var und2 = document.getElementById('und2').value;

    var prod3 = document.getElementById('prod3').innerText;
    var cx3 = document.getElementById('cx3').value;
    var pct3 = document.getElementById('pct3').value;
    var und3 = document.getElementById('und3').value;

    var prod4 = document.getElementById('prod4').innerText;
    var cx4 = document.getElementById('cx4').value;
    var pct4 = document.getElementById('pct4').value;
    var und4 = document.getElementById('und4').value;

    var prod5 = document.getElementById('prod5').innerText;
    var cx5 = document.getElementById('cx5').value;
    var pct5 = document.getElementById('pct5').value;
    var und5 = document.getElementById('und5').value;

    var prod6= document.getElementById('prod6').innerText;
    var cx6 = document.getElementById('cx6').value;
    var pct6 = document.getElementById('pct6').value;
    var und6 = document.getElementById('und6').value;

    var prod7 = document.getElementById('prod7').innerText;
    var cx7 = document.getElementById('cx7').value;
    var pct7 = document.getElementById('pct7').value;
    var und7 = document.getElementById('und7').value;

    var prod8 = document.getElementById('prod8').innerText;
    var cx8 = document.getElementById('cx8').value;
    var pct8 = document.getElementById('pct8').value;
    var und8 = document.getElementById('und8').value;

    var prod9 = document.getElementById('prod9').innerText;
    var cx9= document.getElementById('cx9').value;
    var pct9 = document.getElementById('pct9').value;
    var und9 = document.getElementById('und9').value;

    var prod10 = document.getElementById('prod10').innerText;
    var cx10 = document.getElementById('cx10').value;
    var pct10 = document.getElementById('pct10').value;
    var und10 = document.getElementById('und10').value;

    var prod11 = document.getElementById('prod11').innerText;
    var cx11 = document.getElementById('cx11').value;
    var pct11 = document.getElementById('pct11').value;
    var und11 = document.getElementById('und11').value;

    var prod12 = document.getElementById('prod12').innerText;
    var cx12 = document.getElementById('cx12').value;
    var pct12 = document.getElementById('pct12').value;
    var und12 = document.getElementById('und12').value;

    var prod13 = document.getElementById('prod13').innerText;
    var cx13 = document.getElementById('cx13').value;
    var pct13 = document.getElementById('pct13').value;
    var und13 = document.getElementById('und13').value;

    var prod14 = document.getElementById('prod14').innerText;
    var cx14 = document.getElementById('cx14').value;
    var pct14 = document.getElementById('pct14').value;
    var und14 = document.getElementById('und14').value;

    var prod15 = document.getElementById('prod15').innerText;
    var cx15 = document.getElementById('cx15').value;
    var pct15 = document.getElementById('pct15').value;
    var und15 = document.getElementById('und15').value;

    var prod16 = document.getElementById('prod16').innerText;
    var cx16 = document.getElementById('cx16').value;
    var pct16 = document.getElementById('pct16').value;
    var und16 = document.getElementById('und16').value;

    var prod17 = document.getElementById('prod17').innerText;
    var cx17 = document.getElementById('cx17').value;
    var pct17 = document.getElementById('pct17').value;
    var und17 = document.getElementById('und17').value;

    var prod18 = document.getElementById('prod18').innerText;
    var cx18 = document.getElementById('cx18').value;
    var pct18 = document.getElementById('pct18').value;
    var und18 = document.getElementById('und18').value;

    var prod19 = document.getElementById('prod19').innerText;
    var cx19 = document.getElementById('cx19').value;
    var pct19 = document.getElementById('pct19').value;
    var und19 = document.getElementById('und19').value;

    var prod20 = document.getElementById('prod20').innerText;
    var cx20 = document.getElementById('cx20').value;
    var pct20 = document.getElementById('pct20').value;
    var und20 = document.getElementById('und20').value;

    var prod21 = document.getElementById('prod21').innerText;
    var cx21 = document.getElementById('cx21').value;
    var pct21 = document.getElementById('pct21').value;
    var und21 = document.getElementById('und21').value;

    var prod22 = document.getElementById('prod22').innerText;
    var cx22 = document.getElementById('cx22').value;
    var pct22 = document.getElementById('pct22').value;
    var und22 = document.getElementById('und22').value;

    var prod23 = document.getElementById('prod23').innerText;
    var cx23 = document.getElementById('cx23').value;
    var pct23 = document.getElementById('pct23').value;
    var und23 = document.getElementById('und23').value;

    var prod24 = document.getElementById('prod24').innerText;
    var cx24 = document.getElementById('cx24').value;
    var pct24 = document.getElementById('pct24').value;
    var und24 = document.getElementById('und24').value;

    var prod25 = document.getElementById('prod25').innerText;
    var cx25 = document.getElementById('cx25').value;
    var pct25 = document.getElementById('pct25').value;
    var und25 = document.getElementById('und25').value;

    var prod26 = document.getElementById('prod26').innerText;
    var cx26 = document.getElementById('cx26').value;
    var pct26 = document.getElementById('pct26').value;
    var und26 = document.getElementById('und26').value;

    var prod27 = document.getElementById('prod27').innerText;
    var cx27 = document.getElementById('cx27').value;
    var pct27 = document.getElementById('pct27').value;
    var und27 = document.getElementById('und27').value;

    var prod28 = document.getElementById('prod28').innerText;
    var cx28 = document.getElementById('cx28').value;
    var pct28 = document.getElementById('pct28').value;
    var und28 = document.getElementById('und28').value;

    var prod29 = document.getElementById('prod29').innerText;
    var cx29 = document.getElementById('cx29').value;
    var pct29 = document.getElementById('pct29').value;
    var und29 = document.getElementById('und29').value;

    var prod30 = document.getElementById('prod30').innerText;
    var cx30 = document.getElementById('cx30').value;
    var pct30 = document.getElementById('pct30').value;
    var und30 = document.getElementById('und30').value;

    var prod31 = document.getElementById('prod31').innerText;
    var cx31 = document.getElementById('cx31').value;
    var pct31 = document.getElementById('pct31').value;
    var und31 = document.getElementById('und31').value;

    var prod32 = document.getElementById('prod32').innerText;
    var cx32 = document.getElementById('cx32').value;
    var pct32 = document.getElementById('pct32').value;
    var und32 = document.getElementById('und32').value;

    var prod33 = document.getElementById('prod33').innerText;
    var cx33 = document.getElementById('cx33').value;
    var pct33 = document.getElementById('pct33').value;
    var und33 = document.getElementById('und33').value;

    var prod34 = document.getElementById('prod34').innerText;
    var cx34 = document.getElementById('cx34').value;
    var pct34 = document.getElementById('pct34').value;
    var und34 = document.getElementById('und34').value;

    var prod34 = document.getElementById('prod34').innerText;
    var cx34 = document.getElementById('cx34').value;
    var pct34 = document.getElementById('pct34').value;
    var und34 = document.getElementById('und34').value;

    var prod35 = document.getElementById('prod35').innerText;
    var cx35 = document.getElementById('cx35').value;
    var pct35 = document.getElementById('pct35').value;
    var und35 = document.getElementById('und35').value;

    var comp1 = document.getElementById('name1').innerText;
    var cp1 = document.getElementById('comp1').value;
    var icp1 = document.getElementById('imcomp1').value;

    var comp2 = document.getElementById('name2').innerText;
    var cp2 = document.getElementById('comp2').value;
    var icp2 = document.getElementById('imcomp2').value;

    var comp3 = document.getElementById('name3').innerText;
    var cp3 = document.getElementById('comp3').value;
    var icp3 = document.getElementById('imcomp3').value;

    var comp4 = document.getElementById('name4').innerText;
    var cp4 = document.getElementById('comp4').value;
    var icp4 = document.getElementById('imcomp4').value;

    var comp5 = document.getElementById('name5').innerText;
    var cp5 = document.getElementById('comp5').value;
    var icp5 = document.getElementById('imcomp5').value;

    var comp6 = document.getElementById('name6').innerText;
    var cp6 = document.getElementById('comp6').value;
    var icp6 = document.getElementById('imcomp6').value;

    var head = [
      ['NOME: ' + name, 'DATA: ' + dateformated, 'TURNO: ' + turno, 'KIOSK: ' + kiosk],
      [column1, column2, column3, column4]]
    var body = [
      [prod0, cx0, pct0, und0 + '  L'],
      [prod1, cx1, pct1, und1 + '  L'],
      [prod2, cx2, pct2, und2 + '  UND'],
      [prod3, cx3, pct3, und3 + '  UND'],
      [prod4, cx4, pct4, und4 + '  ML'],
      [prod5, cx5, pct5, und5 + '  ML'],
      [prod6, cx6, pct6, und6 + ' KG'],
      [prod7, cx7, pct7, und7 + ' KG'],
      [prod8, cx8, pct8, und8 + ' KG'],
      [prod9, cx9, pct9, und9 + '  KG'],
      [prod10, cx10, pct10, und10 + '  G'],
      [prod11, cx11, pct11, und11 + '  G'],
      [prod12, cx12, pct12, und12 + '  G'],
      [prod13, cx13, pct13, und13 + '  KG'],
      [prod14, cx14, pct14, und14 + '  G'],
      [prod15, cx15, pct15, und15 + '  G'],
      [prod16, cx16, pct16, und16 + '  UND'],
      [prod17, cx17, pct17, und17 + '  G'],
      [prod18, cx18, pct18, und18 + '  G'],
      [prod19, cx19, pct19, und19 + '  UND'],
      [prod20, cx20, pct20, und20 + '  UND'],
      [prod21, cx21, pct21, und21 + '  UND'],
      [prod22, cx22, pct22, und22 + '  UND'],
      [prod23, cx23, pct23, und23 + '  UND'],
      [prod24, cx24, pct24, und24 + '  UND'],
      [prod25, cx25, pct25, und25 + '  UND'],
      [prod26, cx26, pct26, und26 + '  UND'],
      [prod27, cx27, pct27, und27 + '  UND'],
      [prod28, cx28, pct28, und28 + '  UND'],
      [prod29, cx29, pct29, und29 + '  UND'],
      [prod30, cx30, pct30, und30 + '  UND'],
      [prod31, cx31, pct31, und31 + '  UND'],
      [prod32, cx32, pct32, und32 + '  UND'],
      [prod33, cx33, pct33, und33 + '  UND'],
      [prod34, cx34, pct34, und34 + '  UND'], 
      [prod35, cx35, pct35, und35 + '  UND'], 
      ['', '', '', ''],   
      ['                           COMPLETO ', '', '                    IMCOMPLETO', ''],   
      [comp1, cp1, comp1, icp1],              
      [comp2, cp2, comp2, icp2],              
      [comp3, cp3, comp3, icp3],              
      [comp4, cp4, comp4, icp4],              
      [comp5, cp5, comp5, icp5],              
      [comp6, cp6, comp6, icp6],              
    ]
    doc.autoTable({head: head, body: body })

    doc.save('CONTAGEM_' + dateformated + '_' + kiosk + '_' + turno + '.pdf')

    save();
  }
  