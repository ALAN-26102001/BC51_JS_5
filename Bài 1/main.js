/*Điểm*/
function tinhDiem() {

    const DIEMCHUAN = Number(document.querySelector('#inpDiemChuan').value);

    var chonKV = document.querySelector('#chonKV');
    var diemKV = Number(chonKV.options[chonKV.selectedIndex].value);

    if (diemKV == '') {
        diemKV = 0;
    }
/*Đối tượng*/
    var chonDT = document.querySelector('#chonDT');
    var diemDT = Number(chonDT.options[chonDT.selectedIndex].value);

    if (diemDT == '') {
        diemDT = 0;
    }

    var diem1 = Number(document.querySelector('#diem1').value);
    var diem2 = Number(document.querySelector('#diem2').value);
    var diem3 = Number(document.querySelector('#diem3').value);
/*Công Thức*/
    var diem3Mon = diem1 + diem2 + diem3;

    var tongDiem = diem3Mon + diemKV + diemDT;

    if (tongDiem >= DIEMCHUAN) {
        document.querySelector('#kqBai1').innerHTML = 'Bạn Đã Đậu. Tổng Điểm: ' + tongDiem;
    } else {
        document.querySelector('#kqBai1').innerHTML = 'Bạn Đã Rớt. Tổng Điểm: ' + tongDiem;
    }
}

document.querySelector('#btnBai1').onclick = tinhDiem;