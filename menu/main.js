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
                        let menu_td_iconMenu = document.createElement('td');
                              let iconMenu_a = document.createElement('a');
                                    let iconMenu_img = document.createElement('img');
                                    iconMenu_img.src = "https://pvctech.github.io/Quan-ly-kho-script/menu/img/menu.svg";
                                    iconMenu_img.style.height = "30px";
                                    iconMenu_img.className = "menu__icon-menu";
                              iconMenu_a.appendChild(iconMenu_img);
                        menu_td_iconMenu.appendChild(iconMenu_a);
                  menu_tr.appendChild(menu_td_iconMenu);
                        for (let i=0; i < this.danhSachButton.length; i++)
                        {
                              let menu_td_button = document.createElement('td');
                              menu_td_button.appendChild(this.danhSachButton[i].render());
                              menu_tr.appendChild(menu_td_button);
                        }

                        let menu_td_iconUser = document.createElement('td');
                              let iconUser_a = document.createElement('a');
                                    let iconUser_img = document.createElement('img');
                                    iconUser_img.src = "https://pvctech.github.io/Quan-ly-kho-script/menu/img/user.svg";
                                    iconUser_img.style.height = "30px";
                              iconUser_a.appendChild(iconUser_img);
                        menu_td_iconUser.appendChild(iconUser_a);
                  menu_tr.appendChild(menu_td_iconUser);
            menu_table.appendChild(menu_tr);

            menu_table.className = "menu__background";

            let menu_div =  document.createElement('div');
            menu_div.className = "menu__button";
            menu_div.appendChild(menu_table);

            document.body.insertBefore(menu_div, document.body.firstChild);
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
            let link = document.createElement('a');
            link.href = this.link;
            link.target = this.target;
                  let link_div = document.createElement('div');
                  link_div.className = "menu__button";
                  link_div.innerText = this.caption;
            link.appendChild(link_div);
            return link;
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
