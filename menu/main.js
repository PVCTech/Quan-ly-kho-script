class MenuTop
{
      constructor(danhSachButton)
      {
            this.danhSachButton = danhSachButton;
      }

      render()
      {
            document.write(`<table style="width:100%;box-sizing:border-box;background-color:#0e8d44;color:white;padding:8px;text-align:center;">`);
                  document.write(`<tr>`);
                        for (let i=0; i < this.danhSachButton.length; i++)
                        {
                              document.write(`<td>
                                ${this.danhSachButton[i].render()}</td>`);
                        }
                  document.write(`</tr>`);
            document.write(`</table>`);
      }
}

class MenuTop_button
{
      constructor (link = '',caption='', target="_self")
      {
            this.link = link;
            this.caption = caption;
            this.target = target;
      }

      render()
      {
            let html = `<a href="${this.link}" target="${this.target}">
            <div class="menu__button">
              ${this.caption}
            </div>
          </a>`;
            return html;
      }
}

const menuTop_dachSachButton = [
      new MenuTop_button('https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec', 'Trang chủ'),
      new MenuTop_button('https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=danh-muc-vat-tu', 'Danh mục vật tư'),
      new MenuTop_button('https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=tra-cuu-vat-tu', 'Tìm, Xuất vật tư'),
      new MenuTop_button('https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=nhap-kho', 'Nhập kho')
      //new MenuTop_button('https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=xuat-kho', 'Xuất theo kệ')
];

const menuTop = new MenuTop(menuTop_dachSachButton);
menuTop.render();
