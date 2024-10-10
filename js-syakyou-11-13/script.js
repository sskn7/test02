//１１時間目　for文　応用//

// for (var i = 1;i <= 10; i++) {
//   if (i % 2 == 0) {
//     document.write (i);
//   }
// }

// //---------------------------------------

// for (var a= 3; a <= 8; a++) {
//   if (a>5) {
//     document.write(a);
//     document.write("<br>");
//   }
// }

// //３～８までループして、aが５より大きい場合は表示する

// //---------------------------------------

// for (var b = 1;b <= 9; b++) {
//   for (var c = 1;c <= 9; c++) {
//     document.write ( b*c );
//   }
//   document.write ("→" + b + "の段<br>");
// }    

// //-----------------------------------------

// for (var star1 = 1; star1 < 5; star1++) {
//   for (var star2 = 1; star2 <= 5; star2++) {
//     document.write ("★");
//   }
//   document.write ("<br>");
// }

// //-------------------------------------

// for (var month = 1; month <= 12; month++) {
//   document.write(month+"月:");
//    for (var day = 1; day <= 30; day++) {
//     document.write(day + "日/");
//    }
//    document.write ("<br><br>");
// }


// for (var num=10; num >= 0; num--) {
//   if(num == 0) {
//     document.write ("終了！"+"<br>");
//   }
//   else {
//     document.write (num+ "<br>");
//   }
// }

// //-----------------------------------------

// for (var no1= 0; no1 < 5; no1++) {     //立ての列を生成
//   for (var no2 =0; no2 <= 5;no2++) {   //横の列を繰り返しで生成
//     if (no2 % 2 == 0) {
//       document.write ("★");
//     }
//     else {
//       document.write ("☆");
//     }
//   }
//   document.write ("<br>");
// }


// //-------------------------------------------

// for (var xyz = 1; xyz < 30; xyz++) {
//   if (xyz % 2 == 0) {
//     document.write ("２の倍数");
//   }
//   else if 
//     (xyz % 3 == 0) {
//       document.write ("３の倍数");
//     }
//   else {
//     document.write (xyz);
//   }
//   document.write ("<br>");
// }

//-------------------------------------------

//---------12時間目　while文-------------------

// var i = 1;
// while (i <= 20) {
//   document.write(i);
//   i++;
//   document.write ("<br>");
// }

// //---------------------------------------------

// var a = 10;
// while (a <= 30) {
//   document.write (a + "<br>");
//   a++;
// }

//--------------------------------------------

// var b = 10;
// while (b>0) {
//   document.write (b);
//   b--;
// }

//教科書練習

// var b = 20;
// while (b >= 0) {
//   document.write(b + "<br>");
//   b--;
// }

//------------------------------------------------

// var c = 1;
// while (c <= 10) {
//   document.write(c + "<br>");
//   c += 2;
// }     //ｃが10以下になるまでｃにプラス２してループする

// //------------------------------------------------

// var d = 30;
// while (d > 5) {
//   document.write (d + "<br>");
//   d -= 3;
// }

// //-----------------------------------------------

// var name = 1;
// while (name < 5) {
//   document.write ("Tanaka" + "<br>");
//   name++;
// }

// //-----------------------------------------------

// var abc = 1;
// while(abc <= 10) {
//   if (abc % 2 == 0) {
//     document.write (abc + "<br>");
//   }
//   abc++;
// }

// //-----------------------------------------------

// var def = 30;
// while (def >= 1) {
//   if (def % 3 == 0) {
//     document.write (def + "<br>");
//   }
//   def--;
// }


//-----13時間目　配列基礎------------------------

// var myoji = ["高木","田中","山本"];
// document.write(myoji);

// //-----------------------------

// var color = ["赤","白","黒"];
// document.write (color);

//-----------------------------

// var color = ["赤","白","黒"];
// document.write (color[0]);
// document.write (color[1]);
// document.write (color[2]);

// //-----------------------------

// var color = ["Na1","No2","No3"];
// delete color [0];
// document.write (color);

// //------------------------------

// var pre1 = ["東京","神奈川","埼玉"];
// pre1[3] = "千葉";
// document.write (pre1);

// //-------------------------------

// var pre2 = ["東京","神奈川","埼玉"];
// delete pre2[0];
// pre2[0] = "千葉";
// document.write (pre2);

// //------------------------------

// var month = ["1月","2月","3月"];
// month[2]= "誕生日";
// document.write(month);
// document.write(month[2]);

//-----------------------------

var myoji = {"A組":"田中","B組":"高橋","C組":"斎藤"};
document.write (myoji["A組"]);

//---------------------------------

var number = {"1番":"佐藤","2番":"山田","3番":"斎藤"};
document.write(number["1番"]);

//----------------------------

