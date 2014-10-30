// 番号
var no = new Array(
  "1","2","3","4","5","6","7","8","9","10","11"
);

// 難易度
var le = new Array(
  "1",                           // No.1
  "1",                           // No.2
  "1",                           // No.3
  "2",                           // No.4
  "2",                           // No.5
  "2",                           // No.6
  "2",                           // No.7
  "2",                           // No.8
  "3",                           // No.9
  "3",                           // No.10
  "3"                            // No.11
);

// タイトル
var ti = new Array(
  "ダイオード",                  // No.1
  "コンデンサ",                  // No.2
  "色",                          // No.3
  "魚",                          // No.4
  "エジソン",                    // No.5
  "メイ",                        // No.6
  "サボる",                      // No.7
  "2＾x",                        // No.8
  "二進数",                      // No.9
  "光速",                        // No.10
  "キバン"                       // No.11
);

// 問題
var na = new Array(
  "最初に発光ダイオードが発明された年の、何年後に青色が発明されたか？",            // No.1
  "「104」と書かれた積層セラミックコンデンサがある。この容量を答えよ。",           // No.2
  "Webの世界では色を6桁の数で表します。では、一般的な「赤」はどう表すでしょう？",  // No.3
  "デンキウナギとデンキナマズ、発電力がつよいのはどっち？",                        // No.4
  "発明王、エジソンが生涯に取得した特許の数に一番近いのは？",                      // No.5
  "ポルトガル語で、「メイ」は11月という意味である。○か×か？",                    // No.6
  "「サボる」の語源は何語か？",                                                    // No.7
  "2^xが初めて1000を超えるときのxの値は？",                                        // No.8
  "二進数で「十」を表すとき、正しいのはどっち？",                                  // No.9
  "光速は何m/s？",                                                                 // No.10
  "回路きばんの工場で働く。正しいのはどっち？"                                     // No.11
);

// 選択肢1
var s1 = new Array(
  "31年後",                     // No.1
  "1000000pF（ピコファラド）",  // No.2
  "#00BFFF",                    // No.3
  "デンキウナギ",               // No.4
  "500",                        // No.5
  "○",                         // No.6
  "英語",                       // No.7
  "10",                         // No.8
  "1011",                       // No.9
  "299792458 m/s",              // No.10
  "基板"                        // No.11
);

// 選択肢2
var s2 = new Array(
  "21年後",                      // No.1
  "0.1μF（マイクロファラド）",  // No.2
  "#FF0000",                     // No.3
  "デンキナマズ",                // No.4
  "1500",                        // No.5
  "×",                          // No.6
  "フランス語",                  // No.7
  "11",                          // No.8
  "1010",                        // No.9
  "2997924587 m/s",              // No.10
  "基盤"                         // No.11
);

// 答え
var co = new Array(
  "2",                           // No.1
  "2",                           // No.2
  "2",                           // No.3
  "1",                           // No.4
  "2",                           // No.5
  "2",                           // No.6
  "2",                           // No.7
  "1",                           // No.8
  "2",                           // No.9
  "1",                           // No.10
  "1"                            // No.11
);


function test(){
  a=0;
  switch (document.selbox.level.selectedIndex){
    case 0:
    case 1: a = Math.floor( Math.random()*3);     break;
    case 2: a = 3 +Math.floor( Math.random()*9);  break;
    case 3: a = 9 +Math.floor( Math.random()*2);  break;
    case 4: a = Math.floor( Math.random()*11);    break;
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