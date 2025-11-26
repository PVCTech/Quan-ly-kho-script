
class PhieuXuatKho
      {
        constructor(maSoPhieu = '', maVatTu = '', tenVatTu='', dacDiemVatTu='', ghiChuVatTu ='', soLuongMax =0, soLuong =0, ke ='', tang ='', o ='', maDonViNhan='', noiDung='', ghiChu='')
        {
          this.maSoPhieu = maSoPhieu;
          var ngayThangNamHienTai = new Date();
          this.ngay = ngayThangNamHienTai.getDate();
          this.thang = ngayThangNamHienTai.getMonth() + 1;
          this.nam = ngayThangNamHienTai.getFullYear();
          this.maVatTu = maVatTu;
          this.tenVatTu = tenVatTu;
          this.dacDiemVatTu = dacDiemVatTu;
          this.ghiChuVatTu = ghiChuVatTu;
          this.soLuongMax = soLuongMax;
          this.soLuong = soLuong;
          this.ke = ke;
          this.tang = tang;
          this.o = o;
          this.maDonViNhan = maDonViNhan;
          this.noiDung = noiDung;
          this.ghiChu = ghiChu;
        }

        render()
        {
          let xuatKho_style = `<div style="margin-top:50px;width:100%;">
            <center>
              <div style="width:400px;max-height:80vh;background:white;border-radius:5px;padding:15px;text-align:left;border:1px solid rgba(0,0,0,0.4);overflow-Y:scroll;" id="xuatKho_noiDung_div">
                <div style="background-color:#f67c0a;color:white;width:100%;box-sizing:border-box;padding:8px 10px 8px 10px;">
                  <h3>XUẤT KHO</h3>
                </div>
                <table style="width:100%;">
                    <tr>
                        <td style="width:120px;">Ngày</td>
                        <td style="width:120px;">Tháng</td>
                        <td style="width:120px;">Năm</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <input id="ngay" type="number" min="1" max="31" placeholder="Ngày">
                        </td>
                        <td>
                            <input id="thang" type="number" min="1" max="12" placeholder="Tháng">
                        </td>
                        <td>
                            <input id="nam" type="number" min="2025" max="2100" placeholder="Năm">
                        </td>
                        <td></td>
                    </tr>
                </table>

                <table border="0" style="margin-top:10px;">
                  <tr>
                    <td style="color:rgba(0,0,0,0.75);width:110px;">
                      Mã số vật tư
                    </td>
                    <td style="width:5px;">:
                    </td>
                    <td>
                      <span id="xuatKho_maVatTu" style="margin-left:10px; font-size:1rem;"></span>
                    </td>
                  </tr>

                  <tr>
                    <td style="color:rgba(0,0,0,0.75);">
                      Tên vật tư
                    </td>
                    <td>:
                    </td>
                    <td>
                      <span id="xuatKho_tenVatTu" style="margin-left:10px; font-size:1rem;"></span>
                    </td>
                  </tr>

                  <tr>
                    <td style="color:rgba(0,0,0,0.75);vertical-align:text-top;">
                      Vị trí lấy hàng
                    </td>
                    <td>:
                    </td>
                    <td>
                      <span id="xuatKho_viTriSoLuong" style="margin-left:10px;"></span>
                    </td>
                  </tr>

                  <tr>
                    <td style="color:rgba(0,0,0,0.75);">
                      Số lượng xuất
                    </td>
                    <td>:
                    </td>
                    <td>
                      <input type="number" class="inputBox" id="xuatKho_soLuong" style="margin-left:5px;width:120px;">
                    </td>
                  </tr>

                  <tr>
                    <td style="color:rgba(0,0,0,0.75);">
                      Nội dung xuất kho
                    </td>
                    <td>
                    </td>
                    <td>
                      <input type="text" class="inputBox" id="xuatKho_noiDung" style="margin-left:5px;width:220px;">
                    </td>
                  </tr>

                  <tr>
                    <td colspan="3">
                      <table style="width:100%;">
                        <tr>
                          <td style="width:30%;">
                          </td>
                          <td>
                            <div class="inputBox" onclick="phieuXuatKho.save();" style="background-color:#f67c0a;color:white;text-align:center;width:100px;">Lưu</div>
                          </td>
                          <td>
                            <div class="inputBox" style="background-color:#0e8d44;color:white;text-align:center;width:120px;" onclick="document.getElementById('xuatKho_div').style.display = 'none';">Bỏ qua</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
            </center>
          </div>`;
          document.getElementById('xuatKho_div').innerHTML = xuatKho_style;
        }


        show(ke, tang, o, soLuong)
        {
          document.getElementById('ngay').value = this.ngay;
          document.getElementById('thang').value = this.thang;
          document.getElementById('nam').value = this.nam;

          document.getElementById('xuatKho_maVatTu').innerText = this.maVatTu;
          document.getElementById('xuatKho_tenVatTu').innerText = this.tenVatTu;

          phieuXuatKho.ke = ke;
          phieuXuatKho.tang = tang;
          phieuXuatKho.o = o;
          phieuXuatKho.soLuongMax = soLuong;
          
          document.getElementById('xuatKho_viTriSoLuong').innerHTML = `<span style="color:rgba(0,100,100,1);">[Kệ: ${phieuXuatKho.ke}]</span><span style="color:rgba(0,180,0,1);">[Tầng: ${phieuXuatKho.tang}]</span><span style="color:rgba(0,0,0,0.75);">[Ô: ${phieuXuatKho.o}]</span><br><span style="color:#f67c0a;margin-left:10px;">Số lượng: ${phieuXuatKho.soLuongMax}</span>`;

          document.getElementById('xuatKho_div').style.display = 'block';
        }

        save()
        {
          this.ngay = document.getElementById('ngay').value;
          this.thang = document.getElementById('thang').value;
          this.nam = document.getElementById('nam').value;

          this.soLuong = document.getElementById('xuatKho_soLuong').value;
          this.noiDung = document.getElementById('xuatKho_noiDung').value;
          
          //this.maDonViNhan;
          //this.ghiChu = ghiChu;
          let saveData = JSON.stringify(this);
          //console.log(saveData);

          if (isNaN(this.soLuong) || this.soLuong == '')
          {
            alert('Lỗi: Vui lòng nhập số lượng hợp lệ!');
            return;
          }

          if (this.soLuong > this.soLuongMax || this.soLuong <0)
          {
            alert('Lỗi: Số lượng xuất lớn hơn số lượng hiện có hoặc nhỏ hơn 0!');
            return;
          }

            thongBaoPopup.show('Đang lưu dữ liệu..');
          //document.getElementById('divThongBao_saving').style.display = 'block';

          google.script.run.withSuccessHandler(function(ketQua)
          {
            ketQua = JSON.parse(ketQua);
            if (ketQua.trangThai == 1)
            {
                  thongBaoPopup.hide();
              //document.getElementById('divThongBao_saving').style.display = 'none';              
              document.getElementById('xuatKho_div').style.display = 'none';
              setTimeout(function()
              {
                loadTongSoLuong(document.getElementById('xuatKho_maVatTu').innerText);
              },500);

              setTimeout(function()
              {
                loadViTriVatTu(document.getElementById('xuatKho_maVatTu').innerText);
              },1000);
            }
          }).xuatKho_save(saveData);
        }        
      }

      var phieuXuatKho = new PhieuXuatKho();
      phieuXuatKho.render();
