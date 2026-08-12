const kakugen_items = [
  "きょうの一冊●<br>『あな』谷川俊太郎 作/和田誠 画/福音館書店<br>（穴に座った時の湿った土の匂いを感じてなんか泣いてしまう）",
  "早口言葉に挑戦●<br>ばななのなぞはまだなぞなのだぞ<br>(3 回繰り返す）",
  "朗読してみよう●<br>雲　　　山村暮鳥  <br>おうい雲よ<br>いういうと  馬鹿にのんきさうぢやないか  <br>どこまでゆくんだ  <br>ずっと磐城平の方までゆくんか",
  "きょうの一冊●<br>『たいせつなこと』マーガレット・ワイズ・ブラウン 作/レナード・ワイズガード 絵/うちだ ややこ 訳/フレーベル館<br>(訳者に惹かれて手に取りましたが大事な本になりました）",
  "早口言葉に挑戦●<br>あんたあたしのことあんたあんたというけれど<br>あたしあんたのこともうあんたといわんから<br>あんたもあたしのこともうあんたといわんていてよあんた<br>（3 回繰り返す）",
];

const btn = document.getElementById("gacha-button");
const disp = document.getElementById("gacha-display");

btn.addEventListener("click", function () {
  const num = Math.floor(Math.random() * kakugen_items.length);
  disp.innerHTML = kakugen_items[num];
});
