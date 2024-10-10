//14

// var myoji = ["田中","高橋","斎藤"];
// myoji.unshift("鈴木");
// document.write(myoji);

// //-------------------------------------

// var abc = ["高知","愛媛","香川"];
// abc.unshift("徳島");
// document.write(abc);

// //先頭に足す

// //-----------------------------------

// var xyz1 = ["名前","住所","電話番号"];
// xyz1.push ("アドレス");
// document.write(xyz1);

// //----------------------------------

// var rech = ["good","bad","nice"];
// rech.push("lucky");
// document.write (rech);

// //末尾に足す

// //----------------------------------

// var xyz2 = ["名前","住所","電話番号"];
// xyz2.pop();
// document.write(xyz2);

// //末尾を消す

// //---------------------------------

// var def = ["関東","東北","九州","四国"];
// def.pop();
// document.write(def);

// //---------------------------------

// var myoji = ["田中","高橋","斎藤"];
// document.write(myoji.slice(0,2));

// //切り出し　0と2を切り出して表示する

// //---------------------------------

// var age = [18,26,33,41,50];
// document.write (age.slice(1.4));

//-------------15時間目　関数--------------------

function fruitsPrice (apple,arange) {
  return (apple*80)+(arange*60);
} 
document.write (fruitsPrice(3,5)+ "円"+ "<br>");
document.write (fruitsPrice(6,8)+ "円"+ "<br>");

//--------------------------------------------

function nameHello(name) {
  return name + "さん。こんにちは";
}
document.write(nameHello("高橋"));
document.write ("<br>");
document.write(nameHello("鈴木"));
document.write("<br>");

//-----------------------------------

function juusho (abc) {
  return abc + "出身の方";
}
document.write(juusho("東京"));
document.write("<br>");
document.write(juusho("神奈川"));
document.write("<br>");
document.write(juusho("大阪"));
document.write("<br>");

//---------------------------------


function test(num) {
  return "あなたの点数は" + num + "点です。";
}
document.write(test(90));
document.write("<br>");
document.write(test(88));
document.write("<br>");
document.write(test(79));
document.write("<br>");

//------------------------------

function oshirase(num) {
  return "会員Noは" + num + "です。";
}
document.write(oshirase(1022));
document.write("<br>");
document.write(oshirase(1199));
document.write("<br>");
document.write(oshirase(2047));
document.write("<br>");

