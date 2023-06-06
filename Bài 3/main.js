/*Công thức: Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- (Số người phụ thuộc * 1.6tr) * % */
const THUE0_60 = 0.05;
const THUE60_120 = 0.1;
const THUE120_210 = 0.15;
const THUE210_384 = 0.2;
const THUE384_624 = 0.25;
const THUE624_960 = 0.3;
const THUE960_PLUS = 0.35;

function tinhThue() {
    var hoTen = document.querySelector('#hoTen_b3').value;
    var thuNhapNam = Number(document.querySelector('#thuNhap_b3').value);
    var phuThuoc = Number(document.querySelector('#phuThuoc_b3').value);