function detectmob() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 || window.innerWidth <= 800 && window.innerHeight <= 600
 ){
   document.body.style = "zoom: 200%;";
    return true;
  }
 else {
    return false;
  }
}

var dict = [
  {q:"funcao", a:"Minha função é responder!"},
  {q:"nome",a:"Meu nome é xResponder!"},
  {q:"idade",a:"Eu tenho x anos de idade!"},
  {q:"criador",a:"Eu fui criado por [CENSURADO]."},
  {q:"criou",a:"Eu fui criado por [CENSURADO]."},
  {q:"serve",a:"Eu servo para responder!"},
  {q:"criado",a:"Fui criado em HTML, CSS e JAVASCRIPT. Aprenda também!"},
  {q:"virus",a:"Use antivirus!"},
  {q:"prazer",a:"Sinto o mesmo!"},
  {q:"burro",a:"Tento ser o mais inteligente possível!"},
  {q:"quieto",a:"Ta bom! Desculpe!"},
  {q:"tecnologia",a:"Eu curto tecnologia!"},
  {q:"gosta",a:"A única coisa que eu gosto é de realizar meu trabalho! ... e de você!"},
  //Respostas "advinhas"
  {q:"ok",  a:"Beleza, então!"},
  {q:"nao", a:"Ah, por que?"},
  {q:"sim", a:"Você que sabe!"},
  {q:"tambem", a:"É nois, parsa!"},
  {q:"bora", a:"Bora lá!"},
  {q:"piada", a:"Porque a palavra abriu a porta?? Porque era uma palavra-chave! Haha!"},
  {q:"cookies", a:"No mundo digital, cookies é um meio de guardar dados!!"},
  {q:"dirigir", a:"Sei dirigir carros! ... nos jogos xD"},
  {q:"ola", a:"Olá!"}
];

function getAnswer(q)
{
  var run = 0;
  for (run = 0; run < q.length; run ++)
  {
    q = q.replace('?','');
    q = q.replace(',','');
    q = q.replace('.','');
    q = q.replace('!','');
    q = q.replace(':','');

    q = q.replace('ç','c');
    q = q.replace('ã','a');
    q = q.replace('í','i');
    q = q.replace('á','a');
    q = q.replace('õ','o');
    q = q.replace('ô','o');
    q = q.replace('ó','o');
    q = q.replace('é','e');
  }
  q = q.toLowerCase();
  var split_ = q.split(" ");
  var i = 0;
  for (i = 0; i < dict.length; i ++)
  {
    var w = dict[i];
    var qq = w.q;
    var index = 0;
    for (index = 0; index < split_.length; index ++)
    {
      var keyword = split_[index];
      if (keyword == qq)
      {
        return w.a;
      }
    }
  }
  if (q.includes("que e"))
  {
    return "Não sei o que é isso, mas seu navegador sabe!";
  }
  return "Bah, isso não sei.";
}
function answer()
{
  var quest = document.getElementById("quest").value;
  var ans = document.getElementById('ans');
  ans.innerText = getAnswer(quest);
  document.getElementById("quest").value = "";
}
