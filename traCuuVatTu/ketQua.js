
class DongKetQuaTimKiem
{
  constructor(ma, ten, dacDiem, ghiChu)
  {
    this.ma = ma;
    this.ten = ten;
    this.dacDiem = dacDiem;
    this.ghiChu = ghiChu;
  }

  render=()=>
  {
    let dongKetQua = document.createElement('div');
    let that = this;
    dongKetQua.style.padding = "5px";
    dongKetQua.style.borderRadius = "5px";
    dongKetQua.style.color = "rgba(0,0,0,0.8)";
    dongKetQua.style.border = "1px solid rgba(0,0,0,0.3)";
    dongKetQua.innerText = this.ma + " - " + this.ten;
    dongKetQua.addEventListener('click',function()
    {
      document.getElementById('ma').innerText = that.ma;
      vatTu.ma = that.ma;
      phieuXuatKho.maVatTu = that.ma;
      document.getElementById('ten').innerText = that.ten;
      vatTu.ten = that.ten;
      phieuXuatKho.tenVatTu = that.ten;
      document.getElementById('dacDiem').innerText = that.dacDiem;
      vatTu.dacDiem = that.dacDiem;
      phieuXuatKho.dacDiemVatTu = that.dacDiem;
      document.getElementById('ghiChu').innerText = that.ghiChu;
      vatTu.ghiChu = that.ghiChu;
      phieuXuatKho.ghiChuVatTu = that.ghiChu;

      loadTongSoLuong(that.ma);
      loadViTriVatTu(that.ma);
      document.getElementById('divGoiY').style.display = "none";
      document.getElementById('timKiem').value = '';
    });
    return dongKetQua;
  }
}
