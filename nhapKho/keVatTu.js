function veSoDoKe(id, soTang, soO)
{
  var ketQuaHTML = '';
  let table1 = document.createElement('table');
  table1.style.width = (soO + 1) * 55 + 'px';
    for (var i = soTang; i >=1; i--)
    {
      var trI = document.createElement('tr');
      trI.style.border = "2px solid orange";
      for (var j=1; j<=soO + 1;j++)
      {
        if (j==1)
        {
          let tdI = document.createElement('td');
          tdI.style.width = "50px";
          tdI.style.height = "45px";
          tdI.style.textAlign = "center";
          tdI.style.border = "2px solid orange";
          tdI.style.backgroundColor = "rgba(255,255,255,0.3)";
          tdI.innerHTML = "<b>T" + i + "</b>";
          trI.appendChild(tdI);
        }
        else
        {
          let sttO = j - 1;
          let i2 = i;
          let tdI = document.createElement('td');
          tdI.className = "o-ke__chua-chon";
          tdI.style.width = "50px";
          tdI.style.height = "45px";
          tdI.style.textAlign = "center";
          tdI.style.border = "2px solid orange";
          tdI.innerHTML = "<b>" + sttO + "</b>";
          tdI.addEventListener('click',function()
          {
            let dsO = document.querySelectorAll('.o-ke__chua-chon');
            dsO.forEach(tungO=>{tungO.classList.remove("o-ke__da-chon");}
            );
            this.classList.add("o-ke__da-chon");
            luaChonO(i2, sttO);
          });
          trI.appendChild(tdI);
        }           
      }
      let tdCuoi = document.createElement('td');
      trI.appendChild(tdCuoi);
      table1.appendChild(trI);
    }
  document.getElementById('chonODeVatTu').innerHTML = '';
  document.getElementById('chonODeVatTu').appendChild(table1);
  if (document.getElementById("chonMaSoKe").value == "ChuaXep")
  {
    document.getElementById('tangKe').value = '0';
    document.getElementById('oDeHang').value = '0';
  }
  else
  {
    document.getElementById('tangKe').value = '';
    document.getElementById('oDeHang').value = '';
  }      
}

function luaChonO(soTang, soO)
{
  document.getElementById('tangKe').value = soTang;
  document.getElementById('oDeHang').value = soO;
}

function veLaiSoDoKe()
{
  let keId = document.getElementById("chonMaSoKe").value;
  for (var k=0; k< danhSachKe_data.length; k ++)
  {
    if (danhSachKe_data[k].maSoKe == keId)
    {
      veSoDoKe(danhSachKe_data[k].maSoKe, danhSachKe_data[k].soTang, danhSachKe_data[k].soO);
      break;
    }
  }
}
