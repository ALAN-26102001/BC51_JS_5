/*Nhà Dân*/
const ND_HOADON = 4.5;
const ND_DICHVU = 20.5;
const ND_THUEKENH = 7.5;

/*Doanh Nghiệp*/
const DN_HOADON = 15;
const DN_DICHVU = 75;
const DN_DICHVU_PLUS = 5;
const DN_THUEKENH = 50;
function tienCap() {
    /*MKH*/
    var maKH = document.getElementById('maKH').value;

    /*Số Kênh*/
    var soKenh = Number(document.getElementById('soKenh').value);
    /*Chọn*/
    var chonKH = document.querySelector('#chonKH');
    var khachHang = chonKH.options[chonKH.selectedIndex].value;

    var thanhTien = 0;
    if (khachHang == '') {
        document.querySelector('#kqBai4').innerHTML = 'Mã khách hàng: ' + maKH + '; Tiền cáp:' + thanhTien;
        alert('Mã khách hàng đâu?');

    } else if (khachHang == 'ND') {
        thanhTien = (ND_THUEKENH * soKenh) + ND_HOADON + ND_DICHVU;
    } else if (khachHang == 'DN') {
        /*Số kết nối Doanh Nghiệp */
        var soKetNoi = Number(document.getElementById('soKetNoi').value);
        if (soKetNoi == 0) {
            document.querySelector('#kqBai4').innerHTML = 'Thiếu số kết nối rồi, ko tính được';
            return;
        }else if (soKetNoi > 0 && soKetNoi <= 10) {
            thanhTien = (DN_THUEKENH * soKenh) + DN_HOADON + DN_DICHVU;
        } else if (soKetNoi > 10) {
            thanhTien = (DN_THUEKENH * soKenh) + DN_HOADON + DN_DICHVU + (soKetNoi - 10) * DN_DICHVU_PLUS;
        } 
    }

    document.querySelector('#kqBai4').innerHTML = 'Mã Khách Hàng: ' + maKH + '; Tiền Cáp: $' + thanhTien.toLocaleString();
}
document.querySelector('#btnBai4').onclick = tienCap;