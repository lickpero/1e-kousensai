
function test(){
  a=0;
  switch (document.selbox.level.selectedIndex){
    case 0:
    case 1: a = Math.floor( Math.random()*3);     break;
    case 2: a = 3 +Math.floor( Math.random()*9);  break;
    case 3: a = 9 +Math.floor( Math.random()*2);  break;
    case 4: a = Math.floor( Math.random()*20);    break;
    // `random()*11`の11は問題数
  }

  document.getElementById("ti").innerHTML=ti[a];
  document.getElementById("na").innerHTML=na[a];
  document.getElementById("s1").innerHTML=s1[a];
  document.getElementById("s2").innerHTML=s2[a];
  Array(le[a]).join("★");
  document.getElementById("le").innerHTML="難易度:"+le[a];
}

function replyclick1(){
  if(co[a]==1)
    alert("1の扉へお進みください");
  if(co[a]==2)
    alert("2の扉へお進みください");
}

function replyclick(){
  if(co[a]==2)
    alert("1の扉へお進みください");
  if(co[a]==1)
    alert("2の扉へお進みください");
}

// 隠しコマンド
function pero(){
  alert("ハイという素直なこころ");
}

function ring() {
   document.getElementById("JonesSound").play();
}