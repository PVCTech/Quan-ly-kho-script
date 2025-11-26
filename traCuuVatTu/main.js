function traCuuVatTu()
{         
  if (dataLoaded)
  {         
    let noiDungTimKiem = document.getElementById('timKiem').value.trim();
    noiDungTimKiem = boDau(noiDungTimKiem.toLowerCase());
    let tachNoiDungTimKiem = noiDungTimKiem.split(' ');

    if (noiDungTimKiem.length > 2)
    {
      let divGoiY = document.getElementById('divGoiY');
      divGoiY.innerHTML = '';
      noiDungTimKiem = boDau(noiDungTimKiem.toLowerCase());
      var tachTu = noiDungTimKiem.split(' ');
      var soKetQua = 0;
      for (var i2 = 0; i2<danhMucVatTu.length; i2++)
      {
        var maVT = boDau(danhMucVatTu[i2].maVatTu.toString().toLowerCase());
        var ok =1;
        for (var j2 = 0; j2<tachTu.length; j2++)
        {                       
          if (maVT.indexOf(tachTu[j2]) == -1)
          {
            ok = 0;
            break;
          }
        }

        if (ok ==0)
        {
          var tenVT = boDau(danhMucVatTu[i2].tenVatTu.toString().toLowerCase());
          var ok =1;
          for (var j2 = 0; j2<tachTu.length; j2++)
          {                       
            if (tenVT.indexOf(tachTu[j2]) == -1)
            {
              ok = 0;
              break;
            }
          }
        }
        

        if (ok == 1)
        {
          soKetQua++;
          if (soKetQua <=5)
          {
            let ketQuaMoi = new DongKetQuaTimKiem(danhMucVatTu[i2].maVatTu, danhMucVatTu[i2].tenVatTu, danhMucVatTu[i2].dacDiem, danhMucVatTu[i2].ghiChu);
            divGoiY.appendChild(ketQuaMoi.render());
          }
          else
          {
            break;
          }
        }
      }

      if (soKetQua ==0)
      {
        document.getElementById('divGoiY').style.display = "none";
      }
      else
      {
        let closeButton = document.createElement('div');
        closeButton.style.width = "100%";
        closeButton.style.textAlign = "right";
        closeButton.style.color = "rgba(0,0,0,0.8)";

          let closeA = document.createElement('a');
          closeA.innerText = 'x';
          closeA.href = "javascript:void(0)";
          closeA.addEventListener('click', function()
          {
            document.getElementById('divGoiY').style.display = "none";
          });
        closeButton.appendChild(closeA);
        document.getElementById('divGoiY').appendChild(closeButton);
        document.getElementById('divGoiY').style.display = "block";
      }
    }
    else
    {
      document.getElementById('divGoiY').style.display = "none";
    }
  }
}


function loadTongSoLuong(maVatTu)
{
  document.getElementById('soLuong').innerText = 'Đang tìm số lượng...';
  google.script.run.withSuccessHandler(function(data) 
  {
    document.getElementById('soLuong').innerText = data;
    vatTu.soLuong = data;    
    phieuXuatKho.soLuongMax = data;  
  }).getTongSoLuongVatTu(maVatTu);
}

function loadViTriVatTu(maVatTu)
{           
  var viTriDiv = document.getElementById('viTri');
  viTriDiv.innerText = 'Đang tìm vị trí...';
  google.script.run.withSuccessHandler(function(data) 
  {
    viTriDiv.innerHTML = '';
    if (data.length > 2)
    {
      let danhSachViTri = JSON.parse(data);
      if (danhSachViTri[0].ke == "0")
      {
        viTriDiv.innerHTML = "-";
      }
      else
      {
        for (var i =0; i <danhSachViTri.length; i ++)
        {
          viTriDiv.innerHTML += `<br><span style="color:rgba(0,100,100,1);margin-left:10px;">- [Kệ: ${danhSachViTri[i].ke}]</span><span style="color:rgba(0,180,0,1);">[Tầng: ${danhSachViTri[i].tang}]</span><span style="color:rgba(0,0,0,0.75);">[Ô: ${danhSachViTri[i].o}]</span><span style="color:#f67c0a;margin-left:10px;">Số lượng: ${danhSachViTri[i].soLuong}</span><span class="inputBox" style="background:white;padding:5px; margin-left:5px;border:1px solid rgba(0,0,0,0.3)" onclick = "phieuXuatKho.show('${danhSachViTri[i].ke}', '${danhSachViTri[i].tang}', '${danhSachViTri[i].o}', ${danhSachViTri[i].soLuong});">Xuất</span>`;            
        }      
      }  
    }          
  }).getViTriVatTu(maVatTu); 
}
