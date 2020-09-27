$(document).ready(function () {
    customer = new Customer();
})
/**
 * Class Quản lý function cho trang Customer
 * Author: TDNAM (27/09/2020)
 * */

class Customer extends BaseJS {
    constructor(name) {     
        super();
    }

    getData() {
        this.Data = data;
    }

    makeTrHTML(item) {
        var trHTML = $(`<tr class = "table-row">
                      <td>`+ item.CustomerId + `</td>
                      <td>`+ item.CustomerName + `</td>
                      <td>`+ item.ManageName + `</td>
                      <td>`+ item.TaxId + `</td>
                      <td>`+ item.Address + `</td>
                      <td>`+ item.Phone + `</td>
                      <td>`+ item.Email + `</td>
                      <td>`+ commonJS.formatDate(item.DateOfBirth) + `</td>
                      </tr>`);

        return trHTML;
    }

}


var data = [
    {
        CustomerId: "KH9492394",
        CustomerName: "Phạm Minh Sang",
        ManageName: "Viettel",
        TaxId: "28183823",
        Address: "Thường Tín, Hà Nội",
        Phone: "0324004935",
        Email: "sang2378@gmail.com",
        DateOfBirth: new Date('1998-03-17'),
    },
    {
        CustomerId: "KH838284",
        CustomerName: "Hoàng Phi Hùng",
        ManageName: "Viettel",
        TaxId: "94939544",
        Address: "Bách khoa, Hà Nội",
        Phone: "05456567565",
        Email: "hung37273@gmail.com",
        DateOfBirth: new Date('1998-03-17'),

    },
    {
        CustomerId: "KH74737434",
        CustomerName: "Lưu Văn Hoàng",
        ManageName: "SamSung",
        TaxId: "534545666",
        Address: "Lê Thanh Nghị, Hà Nội",
        Phone: "32434",
        Email: "hoang13@gmail.com",
        DateOfBirth: new Date('1998-03-17'),

    },
    {
        CustomerId: "KH848384",
        CustomerName: "Đỗ Trung Kiên",
        ManageName: "BSS",
        TaxId: "343544545",
        Address: "Xã Đàn, Hà Nội",
        Phone: "545454546",
        Email: "kien38284@gmail.com",
        DateOfBirth: new Date('1998-03-17'),

    },
    {
        CustomerId: "KH162661",
        CustomerName: "Phạm Minh Sang",
        ManageName: "Viettel",
        TaxId: "28183823",
        Address: "Thường Tín, Hà Nội",
        Phone: "0324004935",
        Email: "sang2378@gmail.com",
        DateOfBirth: new Date('1998-03-17'),

    },
    {
        CustomerId: "KH8938284",
        CustomerName: "Hoàng Phi Hùng",
        ManageName: "Viettel",
        TaxId: "94939544",
        Address: "Bách khoa, Hà Nội",
        Phone: "05456567565",
        Email: "hung37273@gmail.com",
        DateOfBirth: new Date('1998-03-17'),

    },
    {
        CustomerId: "KH737434",
        CustomerName: "Lưu Văn Hoàng",
        ManageName: "SamSung",
        TaxId: "534545666",
        Address: "Lê Thanh Nghị, Hà Nội",
        Phone: "32434",
        Email: "hoang13@gmail.com",
        DateOfBirth: new Date('1998-03-17'),

    },
    {
        CustomerId: "KH8148384",
        CustomerName: "Đỗ Trung Kiên",
        ManageName: "BSS",
        TaxId: "343544545",
        Address: "Xã Đàn, Hà Nội",
        Phone: "545454546",
        Email: "kien38284@gmail.com",
        DateOfBirth: new Date('1998-03-17'),

    },
]

