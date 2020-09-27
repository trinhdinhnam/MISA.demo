$(document).ready(function () {
    var employee = new EmployeeJS();
})

class EmployeeJS {
    constructor() {
        this.loadData();
        this.initEvent();
        var Getbutton;
        var objCustomer;

    }
    /**
     * Hàm load dữ liệu khách hảng
     * Author: TDNAM (21/09/2020)
     * */
    loadData() {
        try {
            // Lấy dữ liệu: 
            var employees = data;
            // Đọc dữ liệu:
            $('.grid table tbody').empty();
            $.each(employees, function (index, item) {
                // Binding dữ liệu lên UI:
                debugger
                var trHTML = $(`<tr class = "table-row">
                      <td>`+ item.EmployeeId + `</td>
                      <td>`+ item.EmployeeName + `</td>
                      <td>`+ item.Gender + `</td>
                      <td>`+ commonJS.formatDate(item.DateOfBirth) + `</td>
                      <td>`+ item.PositionName + `</td>
                      <td>`+ item.DepartmentName + `</td>
                      <td>`+ item.Email + `</td>
                      <td>`+ item.Salary.formatMoney() + `</td>
                      <td>`+ item.WorkStatus + `</td>

                      </tr>`);
                $('.grid table tbody').append(trHTML);
            })
        } catch (e) {
            console.log('error');
        }

    }
    /**
     * Hàm khởi tạo các sự kiện
     * Author: TDNAM (20/09/2020)
     * Edit: TDNAM (27/09/2020) - thêm hàm load dữ liệu
     * */
    initEvent() {
        $('.toolbar-btn-add').click(this.btnAddOnClick.bind(this));
        $('.btn-cancle').click(this.btnCancleOnClick.bind(this));
        $('.fa-times-circle').click(this.btnCancleOnClick.bind(this));
        $('.btn-store').click(this.btnSaveOnClick.bind(this));
        $('input[required]').blur(this.checkRequired);
        $('.toolbar-btn-edit').click(this.btnEditOnClick.bind(this));
        $('.toolbar-btn-del').click(this.btnDeleteOnClick.bind(this));
        //$('#tbCustomer tbody tr').click(this.rowClickTable);
        $("table#tbCustomer").on("click", "tr", this.rowClickTable);
        $('#toolbar-btn-load').click(this.btnReloadOnClick.bind(this));


    }
    //#region "Các sự kiện button"
    /**
     * Hàm sự kiện click vào button Thêm
     * Author: TDNAM (21/09/2020)
     * */
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
        var isDuplicate = true;
        /*
         * Kiểm tra mã khách hàng có trùng không trước khi thêm vào
         * Author: TDNAM (22/09/2020)
         * */
        var cusId = $("#txtCustomerId").val();
        $.each(customers, function (index, item) {
            if (item.CustomerId == cusId) {
                isDuplicate = false;
            }
        })
        /*
         * Kiểm tra các trường bắt buộc không được rỗng
         * Author: TDNAM (21/09/2020)
         * */
        $.each(inputRequired, function (index, input) {
            var valid = $(input).trigger("blur");
            if (isValid && valid.hasClass("required-error")) {
                isValid = false;
            }
        })

        //Thu thập dữ liệu trên form dialog
        if (isValid) {
            if (this.Getbutton == 1) {
                if (isDuplicate) {
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
                } else {
                    alert('Mã khách hàng đã trùng lặp, vui lòng nhập lại!');
                    $('#txtCustomerId').val('');
                    $('#txtCustomerId').focus();
                }
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
                this.Refresh();
                this.hideDialogDetail();
            }
        }


    }

    /**
     * Viết hàm load lại dữ liệu
     * Author: TDNAM (27/09/2020)
     * */
    btnReloadOnClick() {
        this.loadData();
    }
    /**
     * Hàm kiểm tra validate dữ liệu
     * Author: TDNAM (22/09/2020)
     * */

    //#endregion "Các sự kiện button";
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
        $("#txtCustomerId").val('');
        $("#txtCustomerName").val('');
        $("#txtManageName").val('');
        $("#txtTaxId").val('');
        $("#txtAddress").val('');
        $("#txtPhoneNumber").val('');
        $("#txtEmail").val('');
    }
    /**
     * Viết hàm lấy đối tượng khi click vào bảng
     * Author: TDNAM (22/09/2020)
     * TODO: Cần sửa lại
     * */

    rowClickTable() {
        $(this).siblings().removeClass('row-selected');
        $(this).addClass('row-selected');
        var customerEdit = {};
        customerEdit.CustomerId = $(this).closest('tr').find('td:nth-child(1)').text();
        customerEdit.CustomerName = $(this).closest('tr').find('td:nth-child(2)').text();
        customerEdit.ManageName = $(this).closest('tr').find('td:nth-child(3)').text();
        customerEdit.TaxId = $(this).closest('tr').find('td:nth-child(4)').text();
        customerEdit.Address = $(this).closest('tr').find('td:nth-child(5)').text();
        customerEdit.Phone = $(this).closest('tr').find('td:nth-child(6)').text();
        customerEdit.Email = $(this).closest('tr').find('td:nth-child(7)').text();
        return customerEdit;
    }


    //objCustomer = this.rowClickTable;
    //btnEditOnClick() {
    //    this.Getbutton = 2;
    //    this.showDialogDetail();

    //    $("#tbCustomer tbody tr").on("click", function () {
    //        var customerEdit = {};
    //        customerEdit.CustomerId = $(this).closest('tr').find('td:nth-child(1)').text();
    //        customerEdit.CustomerName = $(this).closest('tr').find('td:nth-child(2)').text();
    //        customerEdit.ManageName = $(this).closest('tr').find('td:nth-child(3)').text();
    //        customerEdit.TaxId = $(this).closest('tr').find('td:nth-child(4)').text();
    //        customerEdit.Address = $(this).closest('tr').find('td:nth-child(5)').text();
    //        customerEdit.Phone = $(this).closest('tr').find('td:nth-child(6)').text();
    //        customerEdit.Email = $(this).closest('tr').find('td:nth-child(7)').text();
    //            /*e.preventDefault();*/ //==> preventDefault() không load lại form nếu làm việc với form
    //            $("#txtCustomerId").val(customerEdit.CustomerId);
    //            $("#txtCustomerName").val(customerEdit.CustomerName);
    //            $("#txtManageName").val(customerEdit.ManageName);
    //            $("#txtTaxId").val(customerEdit.TaxId);
    //            $("#txtAddress").val(customerEdit.Address);
    //            $("#txtPhoneNumber").val(customerEdit.Phone);
    //            $("#txtEmail").val(customerEdit.Email);
    //    });
    //}

    btnEditOnClick() {
        this.Getbutton = 2;
        this.showDialogDetail();
        $("#txtCustomerId").val(this.objCustomer.CustomerId);
        $("#txtCustomerName").val(this.objCustomer.CustomerName);
        $("#txtManageName").val(this.objCustomer.ManageName);
        $("#txtTaxId").val(this.objCustomer.TaxId);
        $("#txtAddress").val(this.objCustomer.Address);
        $("#txtPhoneNumber").val(this.objCustomer.Phone);
        $("#txtEmail").val(this.objCustomer.Email);
    }

    btnDeleteOnClick() {
        //$('#tbCustomer tbody tr').click(function (e) {
        //    var cusId = $(this).closest('tr').find('td:nth-child(1)').text();
        //    $.each(customers, function (index, item) {
        //        if (item.CustomerId == cusId) {
        //            delete this.customers[item]; // thì xóa
        //        }
        //    })

        //})
    }
}


var data = [
    {
        EmployeeId: "NV9248484",
        EmployeeName: "Phạm Minh Sang",
        Gender: "Nam",
        DateOfBirth: new Date('1998-03-17'),
        Email: "sang2378@gmail.com",
        PositionName: "Giám đốc",
        DepartmentName: "Phòng đào tạo",
        Salary: 20000000,
        WorkStatus: "Đang làm việc"
    },
    {
        EmployeeId: "NV9499434",
        EmployeeName: "Trịnh Đình Nam",
        Gender: "Nam",
        DateOfBirth: new Date('1998-08-16'),
        Email: "nam168@gmail.com",
        PositionName: "Phó Giám đốc",
        DepartmentName: "Phòng đào tạo",
        Salary: 21200000,
        WorkStatus: "Đang làm việc"
    }, {
        EmployeeId: "NV48384343",
        EmployeeName: "Hoàng Phi Hùng",
        Gender: "Nam",
        DateOfBirth: new Date('1998-09-17'),
        Email: "hunghp123@gmail.com",
        PositionName: "Trưởng phòng",
        DepartmentName: "Phòng đào tạo",
        Salary: 16000000,
        WorkStatus: "Đang làm việc"
    }, {
        EmployeeId: "NV4834344",
        EmployeeName: "Lê Thị Tuyết",
        Gender: "Nữ",
        DateOfBirth: new Date('1998-02-17'),
        Email: "tuyetd13@gmail.com",
        PositionName: "Nhân viên",
        DepartmentName: "Phòng đào tạo",
        Salary: 12000000,
        WorkStatus: "Đang làm việc"
    },
]

