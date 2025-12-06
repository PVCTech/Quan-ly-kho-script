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
            <div class="menu__left__group">
                  <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec" class="menu__button">
                        <img src="https://pvctech.github.io/Quan-ly-kho-script/menu/img/home.svg" style="height:20px; margin-right:5px;">
                        Trang chủ
                  </a>
            </div>


            <div class="menu__left__group">
                  <div class="menu__button">
                        <img src="https://pvctech.github.io/Quan-ly-kho-script/menu/img/danh-muc.svg" style="height:20px; margin-right:5px;">
                        Danh mục
                  </div>
                        <div class="menu__left__sub-menu">
                              <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec" class="menu__button">
                                    Khách hàng
                              </a>
                        </div>

                        <div class="menu__left__sub-menu">
                              <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec" class="menu__button">
                                    Sản phẩm
                              </a>
                        </div>

                        <div class="menu__left__sub-menu">
                              <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=danh-muc-vat-tu" class="menu__button">
                                    Vật tư
                              </a>
                        </div>
            </div>

            <div class="menu__left__group">
                  <div class="menu__button">
                        <img src="https://pvctech.github.io/Quan-ly-kho-script/menu/img/nhap-kho.svg" style="height:20px; margin-right:5px;">
                        Nhập kho
                  </div>
                        <div class="menu__left__sub-menu">
                              <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=nhap-kho" class="menu__button">
                                    Tạo phiếu nhập
                              </a>
                        </div>

                        <div class="menu__left__sub-menu">
                              <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=nhap-kho" class="menu__button">
                                    Lịch sử nhập
                              </a>
                        </div>

                        <div style="margin-top:30px;">
                              <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec" class="menu__button">
                                    <img src="https://pvctech.github.io/Quan-ly-kho-script/menu/img/home.svg" style="height:20px; margin-right:5px;">
                                    Trang chủ
                              </a>
                        </div>
            </div>

            <div class="menu__left__group">
                  <div class="menu__button">
                        <img src="https://pvctech.github.io/Quan-ly-kho-script/menu/img/xuat-kho.svg" style="height:20px; margin-right:5px;">
                        Xuất kho
                  </div>
                        <div class="menu__left__sub-menu">
                              <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=tra-cuu-vat-tu" class="menu__button">
                                    Tạo phiếu xuất
                              </a>
                        </div>

                        <div class="menu__left__sub-menu">
                              <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=nhap-kho" class="menu__button">
                                    Lịch sử xuất
                              </a>
                        </div>
            </div>

            <div class="menu__left__group">
                  <div class="menu__button">
                        <img src="https://pvctech.github.io/Quan-ly-kho-script/menu/img/xuat-kho.svg" style="height:20px; margin-right:5px;">
                        Tồn kho
                  </div>
                        <div class="menu__left__sub-menu">
                              <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=nhap-kho" class="menu__button">
                                    Tổng tồn kho
                              </a>
                        </div>

                        <div class="menu__left__sub-menu">
                              <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=nhap-kho" class="menu__button">
                                    Tồn kho theo vị trí
                              </a>
                        </div>
                        <div class="menu__left__sub-menu">
                              <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=nhap-kho" class="menu__button">
                                    Tồn kho theo vị trí
                              </a>
                        </div>
                        <div class="menu__left__sub-menu">
                              <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec?page=nhap-kho" class="menu__button">
                                    Tồn kho theo vị trí
                              </a>
                        </div>
            </div>



                  <div style="margin-top:30px;">
                        <a target="_top" href="https://script.google.com/macros/s/AKfycbxDnHxsFqRivAKjnJWYGzCq8OB819sRS9vT9-X9K1B56zfqsVk8TvJf8_NnX3JXYIz6/exec" class="menu__button">
                              <img src="https://pvctech.github.io/Quan-ly-kho-script/menu/img/home.svg" style="height:20px; margin-right:5px;">
                              Trang chủ
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
function menuLeft_toggle()
{
      document.getElementById("menuUser").style.display = "none";
      menuUserShown = false;
      document.getElementById("menuLeft").classList.toggle("menu__left--active");
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

