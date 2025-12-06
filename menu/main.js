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
                        <a id="menuLeftButton">
                              <img src="https://pvctech.github.io/Quan-ly-kho-script/menu/img/menu.svg" style="height:30px;" class="menu__icon-menu">
                        </a>
                  </td>
                  
                  <td>
                        <div style="display:flex; gap:10px;" id="menu_mainButton_top" class="menu__mainButton_top">
                              <div>
                                    <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec" class="menu__button">
                                          Trang chủ
                                    </a>
                              </div>

                              <div>
                                    <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=nhap-kho" class="menu__button">
                                          Nhập kho
                                    </a>
                              </div>

                              <div>
                                    <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=danh-muc-vat-tu" class="menu__button">
                                          Danh mục vật tư
                                    </a>
                              </div>
                              
                              <div>
                                    <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=tra-cuu-vat-tu" class="menu__button">
                                          Tìm, Xuất vật tư
                                    </a>
                              </div>
                        </div>
                  </td>

                  <td style="width:50px;">
                        <a id="menuUserButton">
                              <img src="https://pvctech.github.io/Quan-ly-kho-script/menu/img/user.svg" style="height:30px;" class="menu__icon-menu">
                        </a>
                  </td>
            </tr>
      </table>
      <div class="menu__left" id="menuLeft">
            <div style="margin-top:10px;">
                  <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec" class="menu__button">
                        Trang chủ
                  </a>
            </div>

            <div>
                  <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=nhap-kho" class="menu__button">
                        Nhập kho
                  </a>
            </div>

            <div>
                  <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=danh-muc-vat-tu" class="menu__button">
                        Danh mục vật tư
                  </a>
            </div>
            
            <div style="margin-bottom:20px;">
                  <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=tra-cuu-vat-tu" class="menu__button">
                        Tìm, Xuất vật tư
                  </a>
            </div>
      </div>

      <div class="menu__user" id="menuUser">
            <div id="menuUser_name"  class="menu__button" style="font-weight:bold; margin-top:10px;">
                  Trần Văn Hùng
            </div>
            <div>
                  <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec" class="menu__button">
                        Đổi mật khẩu
                  </a>
            </div>
            <div>
                  <a style="margin-botton:20px;" target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=nhap-kho" class="menu__button">
                        Đăng xuất
                  </a>
            </div>
      </div>
`;      
document.body.insertBefore(menuTop, document.body.firstChild);

document.getElementById("menuLeftButton").addEventListener("click", menuLeft_toggle);
var menuLeftShown = false;
function menuLeft_toggle()
{
      document.getElementById("menuUser").style.display = "none";
      menuUserShown = false;
      let menuLeft = document.getElementById("menuLeft");
      if (menuLeftShown)
      {
            menuLeft.classList.remove("menu__left--active");
            menuLeftShown = false;
      }
      else
      {
            menuLeft.classList.add("menu__left--active");
            menuLeftShown = true;
      }
}

document.getElementById("menuUserButton").addEventListener("click", menuUser_toggle);
var menuUserShown = false;
function menuUser_toggle()
{
      document.getElementById("menuLeft").style.display = "none";
      menuLeftShown = false;
      let menuUser = document.getElementById("menuUser");
      if (menuUserShown)
      {
            menuUser.style.display = "none";
            menuUserShown = false;
      }
      else
      {
            menuUser.style.display = "flex";
            menuUserShown = true;
      }
}

