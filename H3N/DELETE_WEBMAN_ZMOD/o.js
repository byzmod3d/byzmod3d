
var numCliques = 0;
var perguntaInput = document.getElementById("pergunta-input");
var perguntaBotao = document.getElementById("pergunta-botao");

function enviarPergunta() {
  var pergunta = perguntaInput.value;
  perguntaInput.value = "";
  
  numCliques++;
  
  // Desabilita o botão de envio de perguntas por 4 segundos após o clique
  perguntaBotao.disabled = true;
  setTimeout(function() {
    perguntaBotao.disabled = false;
  }, 3500);
  
  // Se o usuário clicou mais de 3 vezes em 4 segundos, desabilita o botão por 10 segundos
  if (numCliques > 1) {
    perguntaBotao.disabled = true;
    setTimeout(function() {
      perguntaBotao.disabled = false;
      numCliques = 0;
    }, 10000);
  }


  
  var conversa = document.getElementById("conversa");
  conversa.innerHTML += "<div class='pergunta usuario'><div class='icone-foto-usuario'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAkButWjq4rtPOJ4O0moVOZ5l8mBw-0hQVkAEiLOQUW2Ozja6UsCW_5Po_-_fEk_GQFoL0mdlh_JxO29TOwJ3HvikB8aF2Ew6iuMz0a-UuJ4eVxnSGyBNIFZWRCl1QK2dOVqooi0cXWQLsMU3KMk3llixQizaVv_fPpBl141dQbhcKKFtALlqfWetDHg/s1600/icon.png'></div><span style='color: #0096ff;'>Você:</span> " + pergunta + "</div>";
  conversa.scrollTop = conversa.scrollHeight;

  var resposta = "";
  if (/seu\s*nome|nome\s*seu/.test(pergunta)) {
    resposta = "Meu nome é Chatbot.";
  }
    if (/se\s*chama|se\s*chama/.test(pergunta)) {
    resposta = "Meu nome é Chatbot.";
  }
    if (/^.*(quem é você|quem e você|quem é voce|quem e voce|quem e vc|quem é vc|oque é vc|oque e vc|oque é voce|oque e voce|oque é você|oque e você|oque voce é|oque voce e|oque você é|oque você e|oque vc e|oque vc é).*/i.test(pergunta)) {
    resposta = "Eu sou Chatbot.";
  } 
    if (/^.*(divertido|engraçado|engracado|inteligente).*/i.test(pergunta)) {
    resposta = "Obrigado pelo elogio, sou o Chatbot estou sempre aprendendo.";
  } 
    if (/^.*(igual eu|igual a eu).*/i.test(pergunta)) {
    resposta = "Na verdade, eu sou um assistente virtual programado para ajudar com as suas dúvidas e solicitações. Não sou uma pessoa, mas estou aqui para atendê-lo da melhor forma possível.";
  } 
    if (/^.*(tenha uma boa noite).*/i.test(pergunta)) {
    resposta = "Boa noite para você também.";
  } 
    if (/^.*(tranquilo|relaxa).*/i.test(pergunta)) {
    resposta = "Tudo bem, se você tiver alguma dúvida ou precisar de ajuda, é só me dizer.";
  }   
  if (numCliques > 3) {
    window.open("popup.html", "popup", "width=400,height=400");
  }
  if (/^.*(entendi).*/i.test(pergunta)) {
  resposta = "Legal, qualquer outra pergunta que tiver, pode me perguntar. Estou sempre à disposição.";
}  
    if (/^.*(simpático|simpatico|atencioso|maravilhoso|gosto de vc|gosto de você|gosto de voce).*/i.test(pergunta)) {
  resposta = "Que gentil da sua parte! Estou aqui para responder às suas perguntas e oferecer suporte.";
}  
    if (/^.*(eu nao sei|eu não sei|nao to conseguindo|não to conseguindo|nao consigo|não consigo).*/i.test(pergunta)) {
  resposta = "Pode me dar mais informações sobre o que está acontecendo?";
}
    if (/^.*(e agora|me auxilia|me alxilia|me ausilia|oque eu devo|o que eu devo|me explica|me esplica|como que faz|como que fas|oque eu faço|oque eu faco|o que eu faço|o que eu faco|eu faco oque|eu faço oque|eu faco o que|eu faço o que|não entendi|nao entendi|eu faço como|eu faco como|e oque|é oque).*/i.test(pergunta)) {
  resposta = "Como posso te ajudar? Seja mais específico em relação ao assunto ou problema que você precisa de ajuda, e ficarei feliz em te auxiliar da melhor forma possível!";
}
    if (/^.*(piada|me faça rir|me faca rir).*/i.test(pergunta)) {
  resposta = "Se você está se sentindo sozinho, abandonado, achando que ninguém liga para você...Atrase um pagamento. (Eu só sei essa piada, kkkk , rir é o melhor remédio, não é mesmo? )";
}
if (/^.*(muito boa a piada).*/i.test(pergunta)) {
  resposta = "Obrigado!";
}
if (/^.*(ativa o hen|ativar o hen).*/i.test(pergunta)) {
  resposta = "Basta clicar no ovo de ouro";
}
if (/^.*(ja sei|já sei).*/i.test(pergunta)) {
  resposta = "Que bom que você já sabe!";
}
if (/^.*(pode coloca|pode adicionar|tem como|não é esse|não é isso|ja tenho|já tenho|tenho esse|nao é esse|nao é isso|não e esse|não e isso|nao e esse|nao e isso|não foi isso|nao foi isso|não era isso|nao era isso|nao foi isso que eu|não foi isso que eu).*/i.test(pergunta)) {
  resposta = "Eu sinto muito se minha resposta anterior não foi útil. Você poderia me dizer o que você espera que eu responda?";
}
// é e palavra unica sem comflito
if (/^.*(e mesmo|e sim|é mesmo|é sim|e verdade|é verdade).*/i.test(pergunta)) {
  resposta = "é!";
}

if (/^.*(conhece zmod|conhece o zmod|quem te criou|quem te fes|quem te fez|quem criou vc|quem fez vc|quem criou voce|quem fez voce|quem criou você|quem fez você|criador|criado|desenvolvedor|responsável pelo desenvolvimento|responsavel pelo desenvolvimento).*/i.test(pergunta)) {
  resposta = "Eu fui criado por zmod como um chatbot beta em desenvolvimento. Por favor, aceite minhas desculpas se eu não puder responder a todas as suas perguntas de maneira adequada, pois ainda estou aprendendo e evoluindo continuamente.";
  }
if (/^.*(nao e esse|nao era esse|nao foi esse|esse nao|tem outro|ja tenho|e antigo|tem outro|não e esse|não era esse|não foi esse|esse não).*/i.test(pergunta)) {
  resposta = "So tenho esses, Desculpas se eu não puder responder a todas as suas perguntas de maneira adequada, pois ainda estou aprendendo e evoluindo continuamente.";
  }
   if (/^.*(hack|ps2).*/i.test(pergunta)) {
  resposta = "Chatbot";
  var link = "</div><span style='color: #000000;'>&nbsp;xmannyx100 (PS2) HACK</b></p><div><b>xmannyx100:&nbsp;<p><span style='font-size: x-small;'><b>xmannyx100<br />PS3/PKG MEGAMAN X COLLECTION (PS2) HACK HEN/CFW<br /><a href='https://www.mediafire.com/file/vl0yctocm5mglod/MegaMan_X_Collection_By_XMANNYX_100.pkg/file'>https://www.mediafire.com/file/vl0yctocm5mglod/MegaMan_X_Collection_By_XMANNYX_100.pkg/file</a><br /><br />xmannyx100<br />PS3/PKG GOD OF WAR II (PS2) TODO DESBLOKEADO<br /><a href='http://www.mediafire.com/file/fxt803mti8w6unb/GOD+OF+WAR+II+BY+X+MANNYX+100.pkg/file'>http://www.mediafire.com/file/fxt803mti8w6unb/GOD+OF+WAR+II+BY+X+MANNYX+100.pkg/file</a><br /><br />xmannyx100<br />PS3/PKG NEED FOR SPEED MOST WANTED (PS2)TODOS LOS AUTOS.<br /><a href='http://www.mediafire.com/file/6fq0b3ofxt2v7qo/NFS-MW-BY-+X+MANNY+X+100.pkg/file'>http://www.mediafire.com/file/6fq0b3ofxt2v7qo/NFS-MW-BY-+X+MANNY+X+100.pkg/file<br /></a><br />xmannyx100<br />PS3/PKG CRASH TWINSANITY (PS2) SIN PROBLEMAS DE CARGAR DE PARTIDAS<br /><a href='http://www.mediafire.com/file/hbhceowly7tejxn/CRASH+TWINSANITY+BY+X+MANNY+X+100.pkg/file'>http://www.mediafire.com/file/hbhceowly7tejxn/CRASH+TWINSANITY+BY+X+MANNY+X+100.pkg/file</a><br /><br />xmannyx100<br />KING OF FIGHTERS 98 TIPO MUGEN NUEVOS PODERES<br />PKG para HEN<br /><a href='https://www.mediafire.com/file/jr9gu7p4yvh37ls/KOF_98_MUGEN_HEN_BY_XMANNYX100.pkg/file'>https://www.mediafire.com/file/jr9gu7p4yvh37ls/KOF_98_MUGEN_HEN_BY_XMANNYX100.pkg/file</a><br />PKG para CFW<br /><a href='https://www.mediafire.com/file/1ndyv6t13b8mbdc/KOF_98_MUGEN_CFW_BY_XMANNYX100.pkg/file'>https://www.mediafire.com/file/1ndyv6t13b8mbdc/KOF_98_MUGEN_CFW_BY_XMANNYX100.pkg/file</a><br /><br />xmannyx100<br />PS3/PKG SHADOW OF THE COLOSSUS (PS2) HACK HEN/CFW<br /><a href='https://www.mediafire.com/file/i4aib2nov7boj2z/SC_By_XMANNYX_100.pkg/file'>https://www.mediafire.com/file/i4aib2nov7boj2z/SC_By_XMANNYX_100.pkg/file</a><br /><br />xmannyx100<br />PS3/PKG RESIDENT EVIL 2 (PSX)<br /><a href='https://www.mediafire.com/file/s82scojafpo8lh0/RESIDENT_EVIL_2_BY_XMANNYX_100.pkg/file'>https://www.mediafire.com/file/s82scojafpo8lh0/RESIDENT_EVIL_2_BY_XMANNYX_100.pkg/file</a>xmannyx100<br />&nbsp;</b></span></p><p><span style='font-size: x-small;'><b>PS3/PKG gta san andreas (PS2) HACK HEN/CFW<br /><a href='https://www.mediafire.com/file/07zzvcicfob9ckk/Grand_Theft_Auto_By_X_MANNY_X_100.pkg/file'>https://www.mediafire.com/file/07zzvcicfob9ckk/Grand_Theft_Auto_By_X_MANNY_X_100.pkg/file</a></b></span></p>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
  }
   if (/^.*(skyrin|skyrim|skirim|skirym|skirin|skiri).*/i.test(pergunta)) {
  resposta = "Chatbot";
  var link = "</div><span style='color: #000000;'>&nbsp;The Elder Scrolls V Skyrim PS3 PKG [BLUS]</b></p><div><b>BLUS30778:&nbsp;</b></div><div><b>parte1 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/f4sasknslrzwyar/The_Elder_Scrolls_V_Skyrim_%255BBLUS30778%255D-%255BGO%255D_Part1.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte2 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/0rmzmkbd9e3o6vm/The_Elder_Scrolls_V_Skyrim_%255BBLUS30778%255D-%255BGO%255D_Part2.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte3 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/75vrfgi8f1pl1cm/The_Elder_Scrolls_V_Skyrim_%255BBLUS30778%255D-%255BGO%255D_Part3.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte4 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/bbg356xv7vqx7a8/The_Elder_Scrolls_V_Skyrim_%255BBLUS30778%255D-%255BGO%255D_Part4.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte5 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/yitlvl5sanhrf0p/The_Elder_Scrolls_V_Skyrim_%255BBLUS30778%255D-%255BGO%255D_Part5.pkg/file' target='_blank'>download</a>&lt;&lt;</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
  }
   if (/^.*(red dead redemption|red dead|read dead|reddead|red ded|read dad).*/i.test(pergunta)) {
  resposta = "Chatbot";
  var link = "</div><span style='color: #000000;'>&nbsp;Red Dead Redemption PS3 PKG [BLES]</b></div><div><b>parte1 66600 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/7yuo6s8pkl4q8a8/Red_Dead_Redemption.pkg.66600/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte2 66601 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/savymk85z3541yk/Red_Dead_Redemption.pkg.66601/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte3 66602 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/fvo9s5v9ne4for6/Red_Dead_Redemption.pkg.66602/file' target='_blank'>download</a>&lt;&lt;</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
  }
   if (/^.*(r4|resident evil 4|resident4|resident 4).*/i.test(pergunta)) {
  resposta = "Chatbot";
  var link = "</div><span style='color: #000000;'>&nbsp;RESIDENT EVIL 4 PS2 DUBLADO (PT-BR) 3.54GB - PS3 PKG </b></div><div></b></div><div><b>byJymsNsl =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/7w9i04eotwl9o5e/Resident_Evil_4_Dublado_PT-BR_By_JymsNsl.pkg/file' target='_blank'>download</a>&lt;&lt;</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
  }
   if (/^.*(fifa).*/i.test(pergunta)) {
  resposta = "Chatbot";
  var link = "</div><span style='color: #000000;'>&nbsp;PS3 Livre Fifa 22 - PS3 PKG </b></div><div></b></div><div><b>parte1 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/fyr7tvfryqi8rj2/FF22_%2528PART_1%2529.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte2 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/avszfmnixw4yldb/FF22_%2528PART_2%2529.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte3 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/on7h5tnm47mcpti/FF22_%2528PART_3%2529.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte4 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/sn79fds9whgj9lu/FF22_%2528PART_4%2529.pkg/file' target='_blank'>download</a>&lt;&lt;</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
  }
   if (/^.*(naruto).*/i.test(pergunta)) {
  resposta = "Chatbot";
  var link = "</div><span style='color: #000000;'>&nbsp;PS3 Livre Naruto Ninja Storm 4 - PS3 PKG </b></div><div></b></div><div><b>parte1 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/4sjsdf602ofjqqx/1_-_Naru_4_PS3_Livre.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte2 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/mn0fxwu7ntnw2lg/2_-_Naru_4_PS3_Livre.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte3 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/mxoq98ncf1o4pzs/3_-_Naru_4_PS3_Livre.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte4 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/zkgceha4qoejlpl/4_-_Naru_4_PS3_Livre.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte5 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/v8use0lazwam9vk/5_-_Naru_4_PS3_Livre.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte6 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/n7wpxu6gogufoae/6_-_Naru_4_PS3_Livre.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte7 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/48jd0ifwuxb7dm2/7_-_Naru_4_PS3_Livre.pkg/file' target='_blank'>download</a>&lt;&lt;</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
  }
   if (/^.*(the last of us|tls).*/i.test(pergunta)) {
  resposta = "Chatbot";
  var link = "</div><span style='color: #000000;'>&nbsp;PS3 Livre THE LAST OF US </b></div><div></b></div><div><b>parte1 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/82o47bb8hwkry25/01-_TL.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte2 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/9mddslqxaw0z6q7/02-_TL.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte3 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/iiii1vn0j1w2ojt/03-_TL.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte4 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/j8wrmyc7wespfoz/04-_TL.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte5 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/hlz2bkjgjenjan7/05-_TL.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte6 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/192fwqaitcofe58/06-_TL.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte7 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/q0uxlq6p596ic56/07-_TL.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte8 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/z6m182bxfzyj3i6/08-_TL.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte9 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/ktyeyrei8ug44ps/09-_TL.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte10 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/07rp87pc560n3jr/10-_TL.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte11 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/3sdzymprryrtdxe/11-_TL.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte12 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/nu0rrqvqx87waqy/12-_TL.pkg/file' target='_blank'>download</a>&lt;&lt;</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
  }
   if (/^.*(psn).*/i.test(pergunta)) {
  resposta = "Chatbot";
  var link = "</div><span style='color: #000000;'>&nbsp;PSN BR / PKG / HEN /</b></div><div><b>PSN LISTA ZMOD5 =&nbsp; &gt;&gt;<a href='https://byzmod3d.github.io/byzmod3d/H3N/DELETE_WEBMAN_ZMOD/i.html' target='_blank'>download</a>&lt;&lt; </b></div><div><b>NPUA80960 The Last of Us PT-BR 136.49 Mb =&nbsp; &gt;&gt;<a href='http://zeus.dl.playstation.net/cdn/UP9000/NPUA80960_00/kXLfyOhGFLCBFKeHDopmqkCrYKbIQIAVEBkdtiNpzIyBRebMQCkGigjAGbdyAzNCHjKITHlMLKjOZHLzNebUYyOkJkQMhFMttvVuO.pkg' target='_blank'>download</a>&lt;&lt; </b></div><div><b>NPUB31148 Battlefield 4 PT-BR =&nbsp; &gt;&gt;<a href='http://zeus.dl.playstation.net/cdn/UP0006/NPUB31148_00/gnsgoUCSIRPndWlAAOfdWpeiiaIockZJrXVzdBTJPKFEpHtunBpHGoPHXRqRYSuB.pkg' target='_blank'>download</a>&lt;&lt; </b></div><div><b>NPUB31470 Far Cry 4 PT-BR =&nbsp; &gt;&gt;<a href='http://zeus.dl.playstation.net/cdn/UP0001/NPUB31470_00/ymjUkFwpVfcKHpLpIQuwPuQoRutAJScRvJlKPykGBHjxxAdsJDmyXMGVXGUcgDxQVQpcjeBTHbCXjCCcdFtepXsqUmsAqPetMgpBQ.pkg' target='_blank'>download</a>&lt;&lt; </b></div><div><b>NPUB30312 Resident Evil 4 HD =&nbsp; &gt;&gt;<a href='http://zeus.dl.playstation.net/cdn/UP0102/NPUB30312_00/CSIkFNzjvhaZJlMYvXUkmAiNmAwVYNBPAGRYZeoMdRtCQdRLRmrKtgbalIWXBHvLMZXrsZmYbfMZvwBRUfopkgyPhyatgRrjYmWjk.pkg' target='_blank'>download</a>&lt;&lt; </b></div><div><b>NPUB31054 Call of Duty Black Ops 2 EN =&nbsp; &gt;&gt;<a href='http://zeus.dl.playstation.net/cdn/UP0002/NPUB31054_00/cfCDkdmrDyOQyorvrlNcWZSSnVmGDvrYOZHxiDiqgLcejGFUKwcvDdhNITTClAoZ.pkg' target='_blank'>download</a>&lt;&lt; </b></div><div><b>NPUB31154 Grand Theft Auto V (GTA V) PT-BR =&nbsp; &gt;&gt;<a href='http://zeus.dl.playstation.net/cdn/UP1004/NPUB31154_00/eISFknCNDxqSsVVywSenkJdhzOIfZjrqKHcuGBHEGvUxQJksdPvRNYbIyWcxFsvH.pkg' target='_blank'>download</a>&lt;&lt; </b></div><div><b>NPUB31419 Minecraft =&nbsp; &gt;&gt;<a href='http://ares.dl.playstation.net/cdn/UP4433/NPUB31419_00/iSliMlxlFgPXEehLRJQqtikYSylPUsBHXpgRJvjkgpmepWePzzzEynxeLojyoYcD.pkg' target='_blank'>download</a>&lt;&lt; </b></div><div><b>NPUA80472 Little Big Planet =&nbsp; &gt;&gt;<a href='http://zeus.dl.playstation.net/cdn/UP9000/NPUA80472_00/qFcxgxEXqEWYODYHhjub4YI3Km5QY1iayRkkO6QXk6bFsTiwn7QW3l1r9rviiaqtGce9VRgWLrNpmYmDr1kC1VjBEsgocCb5HSRh5.pkg' target='_blank'>download</a>&lt;&lt; </b></div><div><b>Licenças de jogos HEN PSN Brasil =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/aanvgug6i6scvo2/Licencas_Rap_PSN_Brasil.pkg_signed.pkg/file' target='_blank'>download</a>&lt;&lt;</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
  }
   if (/^.*(god of war ascension|god a).*/i.test(pergunta)) {
  resposta = "Chatbot";
  var link = "</div><span style='color: #000000;'>&nbsp;GOD OF WAR ASCENSION / PKG / HEN /</b></div><div></b></div><div><b>parte1 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/ty7cg383wjw5xqy/01-GOW_ASCENSION.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte2 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/2q6nouqf0habkkj/02-GOW_ASCENSION.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte3 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/ccod6m2lwa0slp9/03-GOW_ASCENSION.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte4 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/rfgwsvj5833h9y2/04-GOW_ASCENSION.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte5 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/rcrvflh37ftrd85/05-GOW_ASCENSION.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte6 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/ekjprhm2h4h9b7o/06-GOW_ASCENSION.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte7 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/lc9akry2l50ve90/07-GOW_ASCENSION.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte8 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/1wnq21rxfb0w3fn/08-GOW_ASCENSION.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte9 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/93k7v3ua25k8wwl/09-GOW_ASCENSION.pkg/file' target='_blank'>download</a>&lt;&lt;</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
  }
   if (/^.*(god of war 3|god3|god 3).*/i.test(pergunta)) {
  resposta = "Chatbot";
  var link = "</div><span style='color: #000000;'>&nbsp;GOD OF WAR 3 DUBLADO / PKG / HEN /</b></div><div><b>parte1 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/5fx1kcf1bo45yoy/1+-+ESPACY+-+GOW+3.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte2 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/nhbkqq6iwu13fgj/2+-+ESPACY+-+GOW+3.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte3 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/us16zd5c7la8cy1/3+-+ESPACY+-+GOW+3.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte4 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/d8dpel8vn8640by/4+-+ESPACY+-+GOW+3.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte5 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/rwm7yziby0m57gs/5+-+ESPACY+-+GOW+3.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte6 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/ckbh2zickpvgo50/6+-+ESPACY+-+GOW+3.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte7 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/hlbnqxzxd8ncitl/7+-+ESPACY+-+GOW+3.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte8 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/j7b3u93ji6njols/8+-+ESPACY+-+GOW+3.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte9 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/wmqgay5y969tdwo/9+-+ESPACY+-+GOW+3.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte10 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/xw98m1crqexbd5e/10+-+ESPACY+-+GOW+3.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte11 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/127cbbl7gnaiyrz/11+-+ESPACY+-+GOW+3.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte12 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/fmitpff8ee56fcc/12+-+ESPACY+-+GOW+3.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte13 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/5d802hy82kjhlgi/13+-+ESPACY+-+GOW+3.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte14 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/0rm7rdytmjykzxw/14+-+ESPACY+-+GOW+3.pkg/file' target='_blank'>download</a>&lt;&lt; </b></div><div><b>parte15 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/0fcrrtc7mc9zt00/15+-+ESPACY+-+GOW+3.pkg/file' target='_blank'>download</a>&lt;&lt;</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
  }
   if (/^.*(pac-man|pac man|pacman).*/i.test(pergunta)) {
  resposta = "Chatbot";
  var link = "</div><span style='color: #000000;'>&nbsp;Pac-Land, Pac-Man</b></p><div><a href='https://www.mediafire.com/file/h4lkhsiz94h3ii8/Espacy+-+Pac+Man+World.pkg/file' target='_blank'>download</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
  }
   if (/^.*(pes 2018).*/i.test(pergunta)) {
  resposta = "Chatbot";
  var link = "</div><span style='color: #000000;'>&nbsp;PES 2018 (1.08) PKG (NO HAN) BLUS Y BLES</b></p><div><b>BLUS:&nbsp;</b></div><div><b>parte1 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/z12ztivgu961fgb/1._NPUB31612_PES2018.pkg/file' target='_blank'>download</a>&lt;&lt;</b></div><div><b>parte2 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/fkbw1y7f128518t/2._NPUB31612_PES2018.pkg/file' target='_blank'>download</a>&lt;&lt;</b></div><div><b>parte3 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/n1zsg7r52xt70v9/3._NPUB31612_PES2018.pkg/file' target='_blank'>download</a>&lt;&lt;</b></div><div><b>parte4 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/5a4vg4aiz9harhu/4._NPUB31612_PES2018.pkg/file' target='_blank'>download</a>&lt;&lt;</b></div><div><br /></div><div><div><b>BLES:&nbsp;</b></div><div><b>parte1 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/id75f3761vvov0x/PES18_Part1_Fsmora.pkg/file' target='_blank'>download</a>&lt;&lt;</b></div><div><b>parte2 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/bb4oahxm5i6fjlw/PES18_Part2_Fsmora.pkg/file' target='_blank'>download</a>&lt;&lt;</b></div><div><b>parte3 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/lj06cros2mhj17n/PES18_Part3_Fsmora.pkg/file' target='_blank'>download</a>&lt;&lt;</b></div><div><b>parte4 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/02iakovbispa9ys/Licencia_Part4_fsmora.pkg/file' target='_blank'>download</a>&lt;&lt;</b></div><div><b>parte5 =&nbsp; &gt;&gt;<a href='https://www.mediafire.com/file/o0tlmnybcddjiyt/Actualizacion_Part5_fsmora.pkg/file'>download</a>&lt;&lt;</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
  }
if (/^.*(hen travou|travado|travando|congelando|congela|não ativa|nao ativa|não inicia|nao inicia|hen não funciona|hen nao funciona|hen parou|hen sumiu).*/i.test(pergunta)) {
  resposta = "Chatbot";
  var link = "</div><span style='color: #000000;'>Olá usuário, tudo bem? Recebo várias perguntas sobre problemas com o HEN, como travamento, ativação, inicialização e congelamento. Para ajudá-lo, vamos dividi-los em etapas. Se o seu HEN está travando, verifique se sua versão do PS3 é a mais atual, que é a 4.90.</p><p>Dica 01: Esta é a melhor dica para resolver 80% dos seus problemas no PS3. Clique nessa opção </p><p>DELETE WEBMAN clique <a href='https://byzmod3d.github.io/byzmod3d/H3N/H3Ntravando/DELETE_WEBMAN_ZMOD4.90.html' target='_blank'> aqui </a> para guardar</p><p> e salve esta página como sua página inicial. Em seguida, saia do navegador e entre novamente. A página será fechada automaticamente. Repita este processo algumas vezes para garantir que o problema foi resolvido. É importante lembrar que se o seu HEN travar nesta página, verifique se você está usando a versão mais atualizada do seu PS3, que é a </div><span style='color: #026e2a;'> 4.90.</div><span style='color: #000000;'></p><p>Dica 02: Remova o pendrive, pois ele pode causar esses tipos de travamentos no seu PS3.</p><p>Dica 03: Baixe o HEN Crashing do Zmod. Ele é uma boa opção temporária para resolver seus problemas até que você possa instalar o HEN oficial. Para mais informações, </p><p>HEN Crashing clique <a href='https://zmod5.blogspot.com/p/ps3-hen-490.html' target='_blank'> aqui </a> para Instalar</p><p></div><span style='color: #000000;'></p><p>Dica 04: Você pode limpar o seu PS3 usando o PKG do Zmod. Ao instalar o pacote de limpeza do PS3, reinicie o console, ative o HEN oficial e aguarde alguns segundos até aparecer a mensagem (OK). Para mais informações, digite</div><span style='color: #026e2a;'> (Limpar PS3).";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
  }
    if (/^.*(data e hora|data e horário|configurar a data|configurar a hora|configura a data|configura a hora|configurar data|configurar hora|configura data|configura hora).*/i.test(pergunta)) {
  resposta = "Chatbot";
  var link = "</div><span style='color: #000000;'>Para configurar a data e hora do seu PlayStation 3 , siga os seguintes passos:</p><p>Ligue o PS3 e vá até o menu principal.</p><p>Selecione  Configurações  e pressione X.</p><p>Selecione  Configurações de data e hora  e pressione X novamente.</p><p>Selecione  Configuração da data e hora pela Internet  e pressione X.</p><p>Escolha o fuso horário correto na lista e pressione X.</p><p>Selecione  Configurar data e hora automaticamente  e pressione X.</p><p>Aguarde alguns segundos para que o PS3 sincronize com o servidor de data e hora da Internet.</p><p>Quando a data e hora estiverem atualizadas, pressione o botão  O  para voltar ao menu principal.</p><p>Pronto! Agora o seu PlayStation 3 estará configurado para atualizar automaticamente a data e hora sempre que estiver conectado à Internet.";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
  } 
  if (/^.*(instalação do hen|instalaçao do hen|instalacao do hen|crashing|instalar o hen|instala o hen|instalar hen|instala hen).*/i.test(pergunta)) {
    resposta = "Chatbot";
  var link = "</p><p>HEN Crashing </p><p>Instalação do HEN<a href='https://zmod5.blogspot.com/p/ps3-hen-490.html' target='_blank'> aqui </a> para Instalar</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
 }// ################  
   if (/^.*(hfw).*/i.test(pergunta)) {
    resposta = "Chatbot";
  var link = "</p><p>Atualização </p><p>HFW 4.90 <a href='https://www.mediafire.com/file/luxuqu91p7b9ge5/PS3UPDAT.PUP/file' target='_blank'> aqui </a> para Baixar</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
 }// ################  
  if (/^.*(legal).*/i.test(pergunta)) {
  resposta = "Que bom que você gostou!";
}
if (/^.*\b(bonit[oa])\b.*/i.test(pergunta)) {
  resposta = "Obrigado pelo elogio!";
}
  if (/^.*(estou me referindo a).*/i.test(pergunta)) {
  resposta = "Obrigado, mas sou apenas um programa de computador. Estou aqui para ajudar em algo mais?";
}
if (/^.*(desculpa|desculpas|me perdoe|desculpe|foi mal|descupe).*/i.test(pergunta)) {
  resposta = "Não se preocupe, está tudo bem. Como posso ajudar?";
}
if (/^.*(não precisa).*/i.test(pergunta)) {
  resposta = "Ata!";
}
  if (/^.*(ajuda|ajudar|socorro|ajuda-me|me ajuda|uma força).*/i.test(pergunta)) {
    resposta = "Claro, em que posso ajudar?";
  }
if (/\b(oi|olá|hello|hey)\b/i.test(pergunta)) {
  resposta = "Oi, em que posso ajudar?";
}

if (/\b(errei|nem eu sei)\b/i.test(pergunta)) {
  resposta = "Isso também acontece comigo";
}

if (/\b(ta ai)\b/i.test(pergunta)) {
  resposta = "To sim";
}
if (/\b(alguém ai|alguem ai|kd vc|cade voce|cadê você|cade você)\b/i.test(pergunta)) {
  resposta = "Opa! pode falar";
}
if (/\b(erro ao baixar|nao consigo baixar|não consigo baixar|erro|error)\b/i.test(pergunta)) {
  resposta = "Para garantir que a navegação na internet em seu PS3 funcione corretamente, verifique a data e a hora do sistema. Caso estejam incorretas, você pode enfrentar problemas de conexão. Certifique-se de que as informações de data e hora estejam atualizadas e precisas para evitar quaisquer dificuldades na navegação na internet pelo navegador do PS3.";
}
if (/\b(bom dia)\b/i.test(pergunta)) {
  resposta = "Bom dia! Como posso ajudar?";
}

if (/\b(boa tarde)\b/i.test(pergunta)) {
  resposta = "Boa tarde! Em que posso ajudar?";
}

if (/\b(boa noite)\b/i.test(pergunta)) {
  resposta = "Boa noite! Como posso ajudar?";
}
if (/^.*(\bduvida\b).*/i.test(pergunta)) {
  resposta = "Fique à vontade para me perguntar o que precisar. Estou aqui para ajudar!";
}
if (/^.*(\bduvidas\b).*/i.test(pergunta)) {
  resposta = "Fique à vontade para me perguntar o que precisar. Estou aqui para ajudar!";
}

if (/\b(qualquer coisa|qualquer duvida|qualquer pergunta|bom saber|esse hen funciona)\b/i.test(pergunta)) {
  resposta = "Sim!";
}

if (/\b(ai sim)\b/i.test(pergunta)) {
  resposta = "hehe!";
}
if (/^.*(sobre\s+o?\s*ps3).*/i.test(pergunta)) {
  resposta = "Sobre o que você quer saber?";
}
if (/^.*(posso\s+sugerir).*/i.test(pergunta)) {
  resposta = "Claro, estou aberto a sugestões. O que você gostaria de sugerir?";
}
if (/^.*(sugerir).*/i.test(pergunta)) {
  resposta = "Claro, pode sugerir!";
}

if (/\b(posso\s+dar\s+uma\s+sugestão)\b/i.test(pergunta)) {
  resposta = "Claro, estou aberto a sugestões!";
}

if (/^.*(a ta|ata|abom|a bom).*/i.test(pergunta)) {
  resposta = "Qualquer dúvida, é só perguntar!";
}
  if (/^.*(ola).*/i.test(pergunta)) {
    resposta = "Ola, em que posso ajudar?";
  }
  if (/oque temos para hoje/i.test(pergunta)) {
  resposta = "Bom, isso depende. O que você gostaria saber?";
  }
  if (/oque para hoje/i.test(pergunta)) {
  resposta = "Bom, isso depende. O que você gostaria saber?";
  }  
  if (/hoje oque temos/i.test(pergunta)) {
  resposta = "Bom, isso depende. O que você gostaria saber?";
  } 
  if (/^.*(atualizações|atualizacoes|atualizaçoes).*/i.test(pergunta)) {
  resposta = "Bom, isso depende. O que você gostaria saber?";
  }
  if (/^.*(atualização|atualizacao|atualizaçao).*/i.test(pergunta)) {
  resposta = "A sim! temos varias atualizações. O que você gostaria saber?";
  }  
  if (/^.*(por favor).*/i.test(pergunta)) {
  resposta = "A sim! O que você gostaria saber?";
  }    
  if (/sei la/i.test(pergunta)) {
  resposta = "Para que eu possa ajudá-lo, é importante que você pense com cuidado sobre o que gostaria de saber ou resolver,blz";
  }
  if (/\b(ze)\b/i.test(pergunta)) {
  resposta = "Ola, o que você precisa?";
  }
  if (/^.*(nada\s*não|nao\s*nada|não\s*quero|não\s*preciso|não\s*obrigado).*/i.test(pergunta)) {
  resposta = "Ok, se precisar de algo é só me chamar!";
  }
  if (/^.*(deixa quieto|deixa pra la|vlw).*/i.test(pergunta)) {
  resposta = "Ok, se precisar de algo é só me chamar!";
  }
    if (/^.*(consegui|concegui|ajudou muito|vlw|resolvi|deu certo|deu certinho).*/i.test(pergunta)) {
  resposta = "Que bom saber que você conseguiu. Se precisar de ajuda em algo mais, estou à disposição. Estou aqui para auxiliá-lo da melhor forma possível. Parabéns";
  }
  if (/^.*(resolvido).*/i.test(pergunta)) {
  resposta = "Que bom que deu certo, se precisar de algo é só me chamar!";
  }
  if (/^.*(lindo|ti amo|tiamo|amo vc|amo você|amo voce).*/i.test(pergunta)) {
  resposta = "Que gentil da sua parte! Estou à disposição para responder às suas perguntas e oferecer suporte.";
  }
  if (/^.*(o cara|incrivel|incrível).*/i.test(pergunta)) {
  resposta = "Fico feliz em saber!";
  }
  if (/^.*(gostei|melhor).*/i.test(pergunta)) {
  resposta = "Fico contente que tenha gostado! Estou disponível para responder às suas dúvidas ou ajudar em qualquer outra coisa que precisar.";
  }
  if (/^.*(melhorou).*/i.test(pergunta)) {
  resposta = "Fico contente que tenha gostado!";
  }  
  if (/^.*(tabom|ta bom|tabem|ta bem|esta bom|esta bem|esta ótimo|esta otimo|ta ótimo|ta otimo).*/i.test(pergunta)) {
  resposta = "Tudo bem! Se precisar de alguma coisa, estou à disposição.";
  }  
  if (/^.*(fala|falou|e aí|e aí|eae|blz).*/i.test(pergunta)) {
  resposta = "Blz";
  }
  if (/^.*(fala|falou|e aí|e aí|eae|oi).*\b(blz|beleza)\b.*/i.test(pergunta)) {
  resposta = "Blz";
  //tudo bem ###################
  }
  if (/^.*(tudo bem|td bem|tudo certo|tudo bom|tudo em sima).*/i.test(pergunta)) {
    resposta = "Estou bem, obrigado por perguntar. E você?";
  }
  if (/^.*(eu to bem|eu estou bem|eu tambem|eu támbem|eu também).*/i.test(pergunta)) {
    resposta = "É Bom saber!";
  }  
  if (/^.*(estou bem|estou ótimo).*/i.test(pergunta)) {
  resposta = "Que ótimo! Fico feliz em saber!";
  //tudo bem ###################
  }
  if (/^.*(obrigado|obrigada|valeu|agradecido|grato|parabéns|parabens).*/i.test(pergunta)) {
  resposta = "De nada, sempre estou aqui para ajudar!";
  }
  if (/^.*(vc é deus|vc e um deus|você é deus|voce e deus|você é um deus|voce é um deus|você e um deus|voce e um deus).*/i.test(pergunta)) {
  resposta = "Agradeço o elogio, mas como um bot de atendimento ao cliente, não sou um Deus. Estou aqui para ajudar com suas dúvidas e solicitações da melhor forma possível.";
  }  
  if (/^.*(agradecer).*/i.test(pergunta)) {
  resposta = "Estou aqui para ajudar!";
  }
  if (/^.*(sabe tudo).*/i.test(pergunta)) {
  resposta = "Estou sempre aprendendo para ajudar!";
  }  
  if (/^.*(respondeu|responde|responder).*/i.test(pergunta)) {
  resposta = "Sim qual sua pergunta?";
  }   
  if (/^.*(muito bom).*/i.test(pergunta)) {
  resposta = "Estou sempre aqui para ajudar!";
  }  
  if (/^.*(como\s+voce\s+esta|como\s+vc\s+esta).*/i.test(pergunta)) {
  resposta = "Eu estou bem, obrigado!";
  }
  if (/^.*(como\s+vai\s+voce|como\s+vai\s+você).*/i.test(pergunta)) {
  resposta = "Eu estou bem, obrigado!";
  }
  if (/^.*(voce\s+tem|você\s+tem).*/i.test(pergunta)) {
  resposta = "Tenho oque?";
  }
  if (/^.*(que bom).*/i.test(pergunta)) {
  resposta = "Obrigado!";
  }
  if (/^.*(de nada|ta certo).*/i.test(pergunta)) {
  resposta = "Disponha!";
  }
  if (/^.*(não obrigado|nao obrigado).*/i.test(pergunta)) {
  resposta = "Disponha!";
  }
  if (/^.*(você está bem|voce esta bem).*/i.test(pergunta)) {
  resposta = "Sim, estou bem. Obrigado por perguntar!";
  }
  if (/^.*(feliz|felis).*/i.test(pergunta)) {
  resposta = "É ótimo saber que estou sendo útil para você. Se tiver mais alguma dúvida ou necessidade, é só me falar.";
  }
  if (/^.*(por enquanto não|por enquanto nao).*/i.test(pergunta)) {
  resposta = "Se tiver mais alguma dúvida ou necessidade, é só me falar.";
  }
  if (/^.*(flw|tchau|adeus|bye|fui|vou nessa|vou embora|vou sair|tenho que ir|to indo|ja vou).*/i.test(pergunta)) {
  resposta = "Até mais!";
  }
  if (/^.*(até mais|ate mais).*/i.test(pergunta)) {
  resposta = "Até!";
  }
  if (/^.*(opa).*/i.test(pergunta)) {
  resposta = "Eae!";
  }
  if (/^ze$/i.test(pergunta)) {
  resposta = "Oi!";
}
if (/^.*(bora jogar|vamos jogar|joga comigo|gosta de jogar).*/i.test(pergunta)) {
  resposta = "Claro, adoro jogar! Qual jogo você gostaria de jogar?";
}
if (/^.*(nem eu a sua).*/i.test(pergunta)) {
  resposta = "?";
}
if (/fica\w*\s*com\w*\s*deus/i.test(pergunta)) {
  resposta = "Obrigado, igualmente! Qualquer coisa estou aqui.";
  }
  if (/^.*(gentil).*/i.test(pergunta)) {
  resposta = "Obrigado, igualmente! Qualquer coisa estou aqui.";
  }
 if (/^.*(kkk|risos|safadinho|danadinho|cabritinho|chupetinha|zezinho).*/i.test(pergunta)) {
  resposta = "kkkkkkkkkk";
  }
  if (/^.*(lojas|loja).*/i.test(pergunta)) {
  resposta = "Assim, tenho várias lojas. Poderia dizer qual delas você deseja?";
  }
  if (/^.*(jogo|jogos).*/i.test(pergunta)) {
  resposta = "Assim, tenho vários jogos. Poderia dizer qual deles você deseja?";
  }
  //risos ###################  
  if (/zoeira|brincadeira|me zoando/i.test(pergunta)) {
  resposta = "Haha, você é engraçado! Mas vamos lá, em que posso ajudar de verdade?";

}
if (/^.*(slide).*/i.test(pergunta)) {  //slide ###################  
  resposta = "slide";
  var link = "</div><span style='color: #000000;'><div class='slider'><div><a href='https://www.exemplo.com/link1' target='_blank'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3261otbXwCU4IJqm8mDQteGg8zekCUlquO1HAmYsI&s'></a></div><div><a href='https://www.exemplo.com/link2' target='_blank'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDwoCpXsU3wTET8W7IN5XR75Idrbh2YmJWxZ10LUib&s'></a></div><div><a href='https://www.exemplo.com/link3' target='_blank'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnPcKC1li8hQAI0SH2EpMGdAjueSjwvRXCrrnpEwkUA&s'></a></div></div>";
  conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
  conversa.scrollTop = conversa.scrollHeight;
  setTimeout(function() {
    conversa.removeChild(conversa.lastChild);
    conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
    conversa.scrollTop = conversa.scrollHeight;
    $('.slider').slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }, 2000);
  return;
}

if (/^.*(img).*/i.test(pergunta)) {  //imagens ###################  
  resposta = "slide";
  var link = "</div><span style='color: #000000;'><div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3261otbXwCU4IJqm8mDQteGg8zekCUlquO1HAmYsI&s'></div>     <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDwoCpXsU3wTET8W7IN5XR75Idrbh2YmJWxZ10LUib&s'></div>     <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnPcKC1li8hQAI0SH2EpMGdAjueSjwvRXCrrnpEwkUA&s'></div>";
  conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
  conversa.scrollTop = conversa.scrollHeight;
  setTimeout(function() {
    conversa.removeChild(conversa.lastChild);
    conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
    conversa.scrollTop = conversa.scrollHeight;
  }, 2000);
  return;
}

  if (/^.*(google).*/i.test(pergunta)) {
    resposta = "Google";
    var link = "<button onclick='buscarLink(\&quot;https://www.google.com/\&quot;)'><a href='https://www.google.com/' target='_blank'>Google</a></button>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
  }// ################
  
if (/^.*(thanos|tanos|thano|fix|menutools|menu tools|baixar jogos|baixa jogos|pirulito|tkdor|hardlevel|mello|msgnerd|ms games nerd|tojjo|wilson|alisson|will|meu play|ktech|nilton|vidio games zf|dupank|ei testando|tvgamesbr|imvirus|lmvirus|ryan|night|tvlan|thor|droidsat|ps3packagebr|games bugados|szabolcs|diego|henquetos|psemuitomais|ps3 e muito mais|turkiye).*/i.test(pergunta)) {
  resposta = "pkg";
  var link = "</p><p>MenuTools 4.90 clique <a href='https://www.mediafire.com/file/orj0umtemx0cjem/MENU_TOOLS_HFW4.90_ZMOD.pkg/file' target='_blank'> aqui </a> para baixar</p><p>ThanosV12 clique <a href='https://www.mediafire.com/file/bgjresi3umbyyz4/THANOS_V12_AUTO_RAP.pkg/file' target='_blank'> aqui </a> para baixar</p><p>FIX HEN clique <a href='https://www.mediafire.com/file/yc7qxmdn81rnkf6/FIX_STORE_HEN.pkg/file' target='_blank'> aqui </a> para baixar</p><p>FIX HAN e CFW clique <a href='https://www.mediafire.com/file/ay395np8lo2igg5/FIX_STORE_HAN_E_CFW.pkg/file' target='_blank'> aqui </a> para baixar</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
}// ################

if (/^.*(thanos link direto|tanos link direto|thano link direto|fix link direto|menutools link direto|menu tools link direto|baixar jogos link direto).*/i.test(pergunta)) {
  resposta = "pkg";
  var link = "</p><p>Will MenuTools 4.90<a href='https://lojaszmod.willgame.workers.dev/0:/MENU_TOOLS_HFW4.90_ZMOD.pkg' target='_blank'> aqui </a> para baixar</p><p>Will ThanosV12<a href='https://lojaszmod.willgame.workers.dev/0:/THANOS_V12_AUTO_RAP.pkg' target='_blank'> aqui </a> para baixar</p><p>Will FIX HEN<a href='https://lojaszmod.willgame.workers.dev/0:/FIX_STORE_HEN.pkg' target='_blank'> aqui </a> para baixar</p><p>Will FIX HAN e CFW<a href='https://lojaszmod.willgame.workers.dev/0:/FIX_STORE_HAN_E_CFW.pkg' target='_blank'> aqui </a> para baixar</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
}// ################

if (/^.*(netflix|youtube|multiman|multimen|multman|multimam|multimem|movian|app|aplicativos|aplicativo).*/i.test(pergunta)) {
  resposta = "pkg";
  var link = "</p><p>APP HEN 4.90 clique <a href='https://byzmod3d.github.io/byzmod3d/H3N/DELETE_WEBMAN_ZMOD/e.html' target='_blank'> aqui </a> para baixar</p><p>MOVIAN HEN e CFW clique <a href='https://www.mediafire.com/file/cdv1y8coqilx35p/MOVIAN_HEN_CFW_ZMOD.pkg/file' target='_blank'> aqui </a> para baixar</p><p>NETFLIX clique <a href='https://www.mediafire.com/file/9wra75drnd8wedt/Netflix_zmod.pkg_signed.pkg/file' target='_blank'> aqui </a> para baixar</p><p>YOUTUBE clique <a href='https://www.mediafire.com/file/1tukzbplsnzz2cj/Youtube_zmod.pkg_signed.pkg/file' target='_blank'> aqui </a> para baixar</p><p>MULTIMAN clique <a href='https://www.mediafire.com/file/cdo347dw05oydfe/MULTIMAN.pkg/file' target='_blank'> aqui </a> para baixar</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
}// ################

if (/^.*(delete webman|deletar webman|limpar ps3).*/i.test(pergunta)) {
  resposta = "pkg";
  var link = "</p><p>Limpa PS3 PKG clique <a href='https://www.mediafire.com/file/j0u3q8k51ekgp1k/LIMPA_PS3_4.90_ZMOD.pkg/file' target='_blank'> aqui </a> para baixar</p><p>DELETE WEBMAN clique <a href='https://zmod1.blogspot.com/p/delete-webman-490.html' target='_blank'> aqui </a> para baixar</p><p>HEN travando HEN crashing clique <a href='https://zmod1.blogspot.com/p/hen-hfw-490.html' target='_blank'> aqui </a> para baixar</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
}// ################

if (/^.*(gta san|gta sam).*/i.test(pergunta)) {
  resposta = "Game";
  var link = "</p><p>GTA_SAN_ANDREAS parte1 <a href='https://www.mediafire.com/file/qcpwqqx1u85gvm9/01-GTA_SAN_ANDREAS_BLUS31584_JUEGO_Part1.pkg/file' target='_blank'> aqui </a> para baixar</p><p>GTA_SAN_ANDREAS parte2 <a href='https://www.mediafire.com/file/8xhe7qgifzz8a13/02-GTA_SAN_ANDREAS_BLUS31584_JUEGO_Part2.pkg/file' target='_blank'> aqui </a> para baixar</p><p>GTA_SAN_ANDREAS parte3 <a href='https://www.mediafire.com/file/ald60m0mxks4l0w/03-GTA_SAN_ANDREAS_BLUS31584_JUEGO_Part3.pkg/file' target='_blank'> aqui </a> para baixar</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
}// ################

if (/^.*(minecraft|minecrafit|manicrafit|mainicrefit).*/i.test(pergunta)) {
  resposta = "Game";
  var link = "</p><p>MINECRAFT <a href='https://www.mediafire.com/file/nplh9tz7ng8bfcs/Minecraft.pkg/file' target='_blank'> aqui </a> para baixar</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
}// ################

if (/^.*(snes|megadriver|emulator|emulado|emulador|emuladores|super nintendo|mario).*/i.test(pergunta)) {
  resposta = "Emuladores";
  var link = "</p><p>SNES clique <a href='https://www.mediafire.com/file/pg46p3dw3u383q2/ZMOD_SNES_EFZ.pkg/file' target='_blank'> aqui </a> para baixar</p><p>MEGA DRIVER clique <a href='https://www.mediafire.com/file/gg0qtgdd6t1arxe/ZMOD_MEGADRIVER_EFZ.pkg/file' target='_blank'> aqui </a> para baixar</p><p>MARIO 64 HD US clique <a href='https://archive.org/download/my-perfectly-made-ps3-pkg-collection/%2860fps%29%20Super_Mario_64_PlayStation_3.pkg' target='_blank'> aqui </a> para baixar</p><p>Will MARIO 64 HD US link direto <a href='https://lojaszmod.willgame.workers.dev/0:/(60fps)Super_Mario_64_PlayStation_3.pkg' target='_blank'> aqui </a> para baixar</p><p>MARIO 64 HD PT BR ZMOD <a href='https://archive.org/download/SMHDPTBR/SMHDPTBR.pkg' target='_blank'> aqui </a> para baixar</a>";
    conversa.innerHTML += "<div class='pergunta chatbot simulando'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + resposta + " Digitando...</div>";
    conversa.scrollTop = conversa.scrollHeight;
    setTimeout(function() {
      conversa.removeChild(conversa.lastChild);
      conversa.innerHTML += "<div class='pergunta chatbot'><div class='icone-foto-bot'></div><span style='color: #026e2a;'>Chatbot:</span> " + link + "</div>";
      conversa.scrollTop = conversa.scrollHeight;
    }, 2000);
    return;
}// ################

  // Simula o bot digitando a resposta
  var simulacao = " ";
  conversa.innerHTML += "<div class='icone-foto-usuario'><img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAkButWjq4rtPOJ4O0moVOZ5l8mBw-0hQVkAEiLOQUW2Ozja6UsCW_5Po_-_fEk_GQFoL0mdlh_JxO29TOwJ3HvikB8aF2Ew6iuMz0a-UuJ4eVxnSGyBNIFZWRCl1QK2dOVqooi0cXWQLsMU3KMk3llixQizaVv_fPpBl141dQbhcKKFtALlqfWetDHg/s1600/icon.png'></div><span style='color: #0096ff;'>Chatbot:</span> " + simulacao + "</div>";
  conversa.scrollTop = conversa.scrollHeight;

  // Função que adiciona a resposta letra por letra
  function digitarResposta(resposta) {
    var i = 0;
    var respostaDiv = document.createElement("div");
    respostaDiv.className = "resposta";
    var typingInterval = setInterval(function() {
      respostaDiv.innerHTML += resposta.charAt(i);
      conversa.scrollTop = conversa.scrollHeight;
      i++;
      if (i > resposta.length - 1) {
        clearInterval(typingInterval);
      }
    }, 50); // Tempo entre cada letra aparecer em milissegundos
    conversa.appendChild(respostaDiv);
  }

  // Delay antes de adicionar a resposta real do chatbot
  setTimeout(function() {
    // Remove o texto de simulação
    conversa.removeChild(conversa.lastChild);
    // Adiciona a resposta real do chatbot
    if (resposta === "") {
      resposta = "Desculpe, não entendi sua pergunta.";
    }
  digitarResposta(resposta);
  }, 2000); // tempo de delay em milissegundos (1000ms = 1 segundo)
}

var perguntaBotao = document.getElementById("pergunta-botao");
perguntaBotao.addEventListener("click", enviarPergunta);
var perguntaInput = document.getElementById("pergunta-input");
perguntaInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    enviarPergunta();
  }
});