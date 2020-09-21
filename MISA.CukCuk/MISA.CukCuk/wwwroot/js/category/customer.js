$(document).ready(function () {
    var customer = new Customer();
})

class Customer {
    constructor() {
        this.loadData();
        this.initEvent();
        var Getbutton;

    }

    //Hàm load dữ liệu khách hảng

    loadData() {
        $('.grid tbody').empty();
        $.each(customers, function (index, item) {
            var trHTML = $(`<tr>
                      <td>`+ item.CustomerId + `</td>
                      <td>`+ item.CustomerName + `</td>
                      <td>`+ item.ManageName + `</td>
                      <td>`+ item.TaxId + `</td>
                      <td>`+ item.Address + `</td>
                      <td>`+ item.Phone + `</td>
                      <td>`+ item.Email + `</td>
                      </tr>`);
            $('.grid tbody').append(trHTML);
        })
    }
    //Hàm khởi tạo các button
    initEvent() {
        $('.toolbar-btn-add').click(this.btnAddOnClick.bind(this));
        $('.btn-cancle').click(this.btnCancleOnClick.bind(this));
        $('.fa-times-circle').click(this.btnCancleOnClick.bind(this));
        $('.btn-store').click(this.btnSaveOnClick.bind(this));
        $('input[required]').blur(this.checkRequired);
        $('.toolbar-btn-edit').click(this.btnEditOnClick.bind(this));
        $('.toolbar-btn-del').click(this.btnDeleteOnClick.bind(this));

        //$('#tbCustomer tbody tr').click(this.rowClickTable.bind(this));

        }
    //    //Hàm Thêm khách hàng
    btnAddOnClick() {
        this.Getbutton = 1;
        this.showDialogDetail();
    }
    btnCancleOnClick() {
        this.hideDialogDetail();
    }
    btnSaveOnClick() {
       
        //validate dữ liệu trên form( Kiểm tra dữ liệu nhập trên form có dúng hay không)
        
        var inputRequired = $("[required]");
        var isValid = true;
        $.each(inputRequired, function (index, input) {
            var valid = $(input).trigger("blur");
            if (isValid && valid.hasClass("required-error")) {
                isValid = false;
            }
        })

        //Thu thập dữ liệu trên form dialog
        if (isValid) {
            if (this.Getbutton == 1) {
                var customer = {};
                customer.CustomerId = $("#txtCustomerId").val();
                customer.CustomerName = $("#txtCustomerName").val();
                customer.ManageName = $("#txtManageName").val();
                customer.TaxId = $("#txtTaxId").val();
                customer.Address = $("#txtAddress").val();
                customer.Phone = $("#txtPhoneNumber").val();
                customer.Email = $("#txtEmail").val();
                //Lưu trữ thông tin trên form vào database
                customers.push(customer);
                //load lại form

                this.loadData();
                this.Refresh();
                this.hideDialogDetail();
            }
            else if (this.Getbutton == 2) {
                var index = $("#txtCustomerId").val();
                var objIndex = customers.findIndex((obj => obj.CustomerId == index));
                customers[objIndex].CustomerName = $("#txtCustomerName").val();
                customers[objIndex].ManageName = $("#txtManageName").val();
                customers[objIndex].TaxId = $("#txtTaxId").val();
                customers[objIndex].Address = $("#txtAddress").val();
                customers[objIndex].Phone = $("#txtPhoneNumber").val();
                customers[objIndex].Email = $("#txtEmail").val();
                this.loadData();
            }
            
            
        }
       
       
    }

    checkRequired() {
        var value = this.value;

        if (!value) {
            $(this).addClass("required-error");
            $(this).attr("title", "Bạn phải nhập thông tin này!");
        } else {
            $(this).removeClass("required-error");
            $(this).removeAttr("title");
        }
        
    }
    /**
     * Hiển thị dialog chi tiết
     * Author: TDNAM (21/09/2020)
     * */
    showDialogDetail() {
        $('.modal').show();
        $('.dialog-form').show();
        $("#txtCustomerId").focus();

    }
    /**
     * Ẩn dialog chi tiết
     * Author: TDNAM (21/09/2020)
     * */
    hideDialogDetail() {
        $('.modal').hide();
        $('.dialog-form').hide();
    }

    /**
     * Refresh lại form dialog sau khi thêm, sửa thành công
     * Author: TDNAM (21/09/2020)
     * */

    Refresh() {
        $("#txtCustomerId").val() = "";
        $("#txtCustomerName").val() = "";
        $("#txtManageName").val() = "";
        $("#txtTaxId").val() = "";
        $("#txtAddress").val() = "";
        $("#txtPhoneNumber").val() = "";
        $("#txtEmail").val() = "";
    }
    btnEditOnClick() {
        this.Getbutton = 2;
        $('#tbCustomer tbody tr').click(function (e) {
            var customerEdit = {};
            customerEdit.CustomerId = $(this).closest('tr').find('td:nth-child(1)').text();
            customerEdit.CustomerName = $(this).closest('tr').find('td:nth-child(2)').text();
            customerEdit.ManageName = $(this).closest('tr').find('td:nth-child(3)').text();
            customerEdit.TaxId = $(this).closest('tr').find('td:nth-child(4)').text();
            customerEdit.Address = $(this).closest('tr').find('td:nth-child(5)').text();
            customerEdit.Phone = $(this).closest('tr').find('td:nth-child(6)').text();
            customerEdit.Email = $(this).closest('tr').find('td:nth-child(7)').text();
            $("#txtCustomerId").val(customerEdit.CustomerId);
            $("#txtCustomerName").val(customerEdit.CustomerName);
            $("#txtManageName").val(customerEdit.ManageName);
            $("#txtTaxId").val(customerEdit.TaxId);
            $("#txtAddress").val(customerEdit.Address);
            $("#txtPhoneNumber").val(customerEdit.Phone);
            $("#txtEmail").val(customerEdit.Email);
        })

        this.showDialogDetail();
        
    }

    btnDeleteOnClick() {
        $('#tbCustomer tbody tr').click(function (e) {
            
            var index = $(this).closest('tr').find('td:nth-child(1)').text();
            var objIndex = customers.findIndex((obj => obj.CustomerId == index));

        })
    }
    //rowClickTable() {
    //    var customer = {};
    //    customer.CustomerId = $(this).closest('tr').find('td:nth-child(1)').text();
    //    customer.CustomerName = $(this).closest('tr').find('td:nth-child(2)').text();
    //    customer.ManageName = $(this).closest('tr').find('td:nth-child(3)').text();
    //    customer.TaxId = $(this).closest('tr').find('td:nth-child(4)').text();
    //    customer.Address = $(this).closest('tr').find('td:nth-child(5)').text();
    //    customer.Phone = $(this).closest('tr').find('td:nth-child(6)').text();
    //    customer.Email = $(this).closest('tr').find('td:nth-child(7)').text();
    //    this.btnEditOnClick(e);
    //}
}

var customers = [
    {
        CustomerId: "NV162661",
        CustomerName: "Phạm Minh Sang",
        ManageName: "Viettel",
        TaxId: "28183823",
        Address: "Thường Tín, Hà Nội",
        Phone: "0324004935",
        Email: "sang2378@gmail.com"
    },
    {
        CustomerId: "NV838284",
        CustomerName: "Hoàng Phi Hùng",
        ManageName: "Viettel",
        TaxId: "94939544",
        Address: "Bách khoa, Hà Nội",
        Phone: "05456567565",
        Email: "hung37273@gmail.com"
    },
    {
        CustomerId: "NV74737434",
        CustomerName: "Lưu Văn Hoàng",
        ManageName: "SamSung",
        TaxId: "534545666",
        Address: "Lê Thanh Nghị, Hà Nội",
        Phone: "32434",
        Email: "hoang13@gmail.com"
    },
    {
        CustomerId: "NV848384",
        CustomerName: "Đỗ Trung Kiên",
        ManageName: "BSS",
        TaxId: "343544545",
        Address: "Xã Đàn, Hà Nội",
        Phone: "545454546",
        Email: "kien38284@gmail.com"
    },
    {
        CustomerId: "NV162661",
        CustomerName: "Phạm Minh Sang",
        ManageName: "Viettel",
        TaxId: "28183823",
        Address: "Thường Tín, Hà Nội",
        Phone: "0324004935",
        Email: "sang2378@gmail.com"
    },
    {
        CustomerId: "NV838284",
        CustomerName: "Hoàng Phi Hùng",
        ManageName: "Viettel",
        TaxId: "94939544",
        Address: "Bách khoa, Hà Nội",
        Phone: "05456567565",
        Email: "hung37273@gmail.com"
    },
    {
        CustomerId: "NV74737434",
        CustomerName: "Lưu Văn Hoàng",
        ManageName: "SamSung",
        TaxId: "534545666",
        Address: "Lê Thanh Nghị, Hà Nội",
        Phone: "32434",
        Email: "hoang13@gmail.com"
    },
    {
        CustomerId: "NV848384",
        CustomerName: "Đỗ Trung Kiên",
        ManageName: "BSS",
        TaxId: "343544545",
        Address: "Xã Đàn, Hà Nội",
        Phone: "545454546",
        Email: "kien38284@gmail.com"
    },
]

    