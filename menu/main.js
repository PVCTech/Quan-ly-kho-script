class MenuTop
{
      constructor(danhSachButton)
      {
            
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
      }
}

Trang chủ trangchu https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec
<table style="width:100%;box-sizing:border-box;background-color:#0e8d44;color:white;padding:8px;text-align:center;">
      <tr>
        <td>
          <a href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec">
            <div class="menu__button">
              Trang chủ
            </div>
          </a>
        </td>

        <td>
          <a href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=danh-muc-vat-tu">
            <div class="menu__button">
              Danh mục vật tư
            </div>
          </a>
        </td>

        <td>
          <a href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=tra-cuu-vat-tu">
          <div class="menu__button">
            Tìm, Xuất vật tư
          </div>
          </a>
        </td>
     
        <td>
          <a href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=nhap-kho">
            <div class="menu__button">
              Nhập kho
            </div>
          </a>
        </td>
        <td>
          <a href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=xuat-kho">
            <div class="menu__button">
              Xuất theo kệ
            </div>
          </a>
        </td>
      </tr>
    </table>
