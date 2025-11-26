class ThongBaoPopup
{
  constructor(id='thongBaoPopup', noiDung='')
  {
    this.id = id;
    this.noiDung = noiDung;
  }

  render()
  {
    document.write(`
    <div style="display:none; position:fixed; top:0px; left:0px; width:100%;height:100%; z-index:102;background-color:rgba(0,0,0,0.2);" id="${this.id}">
      <div style="margin-top:40px;width:100%;text-align:center;">
        <center>
          <div style="width:400px;text-align:center;padding:22px;background-color:white;border-radius:5px;border:1px solid rgba(0,0,0,0.3);font-weight:bold;font-size:18px;" 
            id="${this.id}_noiDung">
            ${this.noiDung}
          </div>
        </center>
      </div>
    </div>`);
  }

  hide()
  {
    document.getElementById(this.id).style.display = 'none';
  }

  show(noiDungShow='')
  {
    if (noiDungShow =='') {}
    else
    {
      document.getElementById(this.id + '_noiDung').innerText = noiDungShow;
    }
    document.getElementById(this.id).style.display = 'block';
  }
}
