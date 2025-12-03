class MenuTop
{
      constructor(danhSachButton)
      {
            this.danhSachButton = danhSachButton;
      }

      render()
      {
            let menu_table = document.createElement('table');
                  let menu_tr = document.createElement('tr');
                  menu_tr.innerHTML = `
                        <td style="width:50px;">
                              <a href="#">
                                    <img src="https://pvctech.github.io/Quan-ly-kho-script/menu/img/menu.svg" style="height:30px;" class="menu__icon-menu">
                              </a>
                        </td>
                        
                        <td>
                              <div style="display:flex; gap:10px;" id="menu_mainButton_top">
                                    <div class="menu__button">
                                          <a href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec">
                                                Trang chủ
                                          </a>
                                    </div>

                                    <div class="menu__button">
                                          <a href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=nhap-kho">
                                                Nhập kho
                                          </a>
                                    </div>

                                    <div class="menu__button">
                                          <a href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=danh-muc-vat-tu">
                                                Danh mục vật tư
                                          </a>
                                    </div>
                                    
                                    <div class="menu__button">
                                          <a href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=tra-cuu-vat-tu">
                                                Tìm, Xuất vật tư
                                          </a>
                                    </div>
                              </div>
                        </td>

                        <td style="width:50px;">
                              <a href="#">
                                    <img src="https://pvctech.github.io/Quan-ly-kho-script/menu/img/user.svg" style="height:30px;" class="menu__icon-menu">
                              </a>
                        </td>
                        `;
            menu_table.appendChild(menu_tr);
            menu_table.className = "menu__background";
            document.body.insertBefore(menu_table, document.body.firstChild);
      }
}

const menuTop = new MenuTop(menuTop_dachSachButton);
menuTop.render();
