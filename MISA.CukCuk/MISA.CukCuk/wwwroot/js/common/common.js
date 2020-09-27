/**--------------------------------------
 * Đối tượng js chứa tất cả các hàm sửu dụng
 * Author: TDNAM(27/09/2020)
 * --------------------------------------*/
var commonJS = {
    formatMoney(money) {
        return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    },

    formatDate(date) {
        let format_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        return format_date;
    }
}
Number.prototype.formatMoney = function () {
    return this.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}