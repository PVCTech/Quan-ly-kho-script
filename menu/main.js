let menuTop = document.createElement('div');
menuTop.id = "menuTop";
menuTop.className = "menu__background";
      menuTop.style.position = "fixed";
      menuTop.style.top = "0";
      menuTop.style.left = "0";
      menuTop.style.width = "100%";
      menuTop.style.height = "50px";
      menuTop.style.zIndex = "1000";
document.body.appendChild(menuTop);
menuTop.innerHTML = `
      <table style="width:100%; height:100%;">
            <tr>
                  <td style="width:50px;">
                        <a href="menuLeft_toggle()">
                              <img src="https://pvctech.github.io/Quan-ly-kho-script/menu/img/menu.svg" style="height:30px;" class="menu__icon-menu">
                        </a>
                  </td>
                  
                  <td>
                        <div style="display:flex; gap:10px;" id="menu_mainButton_top" class="menu__mainButton_top">
                              <div>
                                    <a href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec" class="menu__button">
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
            </tr>
      </table>
`;      
document.body.insertBefore(menuTop, document.body.firstChild);
