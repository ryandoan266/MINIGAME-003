function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6AutsQRWvql":
        Script1();
        break;
      case "6n1NCmpXtze":
        Script2();
        break;
      case "657eyfReqbt":
        Script3();
        break;
  }
}

function Script1()
{
  //create a function to add the music elements dynamically into the head of the html document
function add_line() {
var line = document.createElement("audio");
var head=document.getElementsByTagName('body')[0];
line.type = "audio/mp3";
line.src="";
line.id="bgSong" ;
line.autoplay = true;
line.loop = true;
head.appendChild(line);
}

//run the function only if the added html lines have not already been added
if(document.getElementById('bgSong')==null){
add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}
}

function Script2()
{
  var player = GetPlayer();
this.Location= player.GetVar("Location");
var audio = document.getElementById('bgSong');
audio.src = Location + "1.mp3";
audio.load();
audio.play();
}

function Script3()
{
  const url = "https://script.google.com/macros/s/AKfycbxW1hRfp7L8Jqlf59HP6ZolSnF4BZtXVEddWGtYeOpqWLfihfNFoWS5ZnyanTcrwPnurA/exec";
const player = GetPlayer();

// Tạo một đối tượng Date đại diện cho thời gian hiện tại
const currentDate = new Date();

// Lấy thông tin ngày, tháng, năm, giờ, phút, giây
const day = String(currentDate.getDate()).padStart(2, '0'); //Thêm số 0 phía trước nếu ngày tháng chỉ có 1 chữ số
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0, nên cần cộng thêm 1
const year = currentDate.getFullYear();
const hours = String(currentDate.getHours()).padStart(2, '0'); //Thêm số 0 phía trước nếu giờ chỉ có 1 chữ số
const minutes = String(currentDate.getMinutes()).padStart(2, '0'); //Thêm số 0 phía trước nếu phút chỉ có 1 chữ số
const seconds = String(currentDate.getSeconds()).padStart(2, '0'); //Thêm số 0 phía trước nếu giây chỉ có 1 chữ số

// Tạo chuỗi đại diện cho timestamp
const timestamp = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

fetch(url, {
    method: "POST",
    mode: 'no-cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify({
        tennhanvien: player.GetVar("hovaten"),
        masonhanvien: player.GetVar("masonv"),
        nhapchucvu: player.GetVar("chucvu"),
        nhapcuahang: player.GetVar("cuahang"),
        nhaptinhthanhpho: player.GetVar("nhaptinh"),
        nhapvungmien: player.GetVar("vungmien"),
        diemso: player.GetVar("DIEMCUABAN"),
        timestamp: timestamp // Thêm timestamp vào dữ liệu gửi đi
    })
});
}

