#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Invoice\InvoiceList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b16d948e1e410b1959bcaf40858b7e842d32890d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Invoice_InvoiceList), @"mvc.1.0.view", @"/Views/Invoice/InvoiceList.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\_ViewImports.cshtml"
using FFI;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\_ViewImports.cshtml"
using FFI.Models;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\_ViewImports.cshtml"
using Kendo.Mvc.UI;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b16d948e1e410b1959bcaf40858b7e842d32890d", @"/Views/Invoice/InvoiceList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_Invoice_InvoiceList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_invoice_list"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/getInvoiceList_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Invoice_master_getInvoiceList_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/invoice.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Invoice\InvoiceList.cshtml"
  
    ViewBag.List = "Invoice";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b16d948e1e410b1959bcaf40858b7e842d32890d6757", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"gd_invoice\">\r\n                <div id=\"invoice_grid\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n<script>\r\n    click_act_name = \"InvoiceForm\";\r\n    click_ctrl_name = \"Invoice\";\r\n    form_list_url = \'../\' + click_ctrl_name + \'/\' + click_act_name;\r\n</script>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b16d948e1e410b1959bcaf40858b7e842d32890d8707", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b16d948e1e410b1959bcaf40858b7e842d32890d9746", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b16d948e1e410b1959bcaf40858b7e842d32890d10785", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_6);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b16d948e1e410b1959bcaf40858b7e842d32890d11825", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_7);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
<script>
    var menuId = """";
    var permission = """";
    $(document).ready(function () {
        $("".adv_filter"").hide();
        //$("".adv_filter"").attr(""hdrtitle"", ""Invoice List Record"");
        //$("".adv_filter"").attr(""fltid"", ""invoice"");
        $("".Export"").attr(""hdrtitle"", ""invoice"");
        $("".Export"").attr(""SubTreeId"", ""invoice"");
        list_grid_id = ""invoice_grid"";
        $(""#RI"").hide();
        $(""#FPO"").hide();
        listpageloadfetch();

        Screen_Id = ""ICDINVOICE"";
        permission = sec_Permission(Screen_Id);
        //page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        filterhover();
    });
</script>
<script>
    function listpageloadfetch() {
        try{
            var formval = form_Serialize(""frm_invoice_list"");
            var obj_val = JSON.parse(formval);
            obj_val.FilterBy_Option = ""ALL"";
            obj_val.FilterBy_Code = ""."";
            if (getlocalStorage('flt_condition') != undefine");
            WriteLiteral(@"d && getlocalStorage('flt_condition') != """") {
                obj_val.FilterBy_FromValue = getlocalStorage('flt_condition');
            }
            else {
                obj_val.FilterBy_FromValue = ""."";
            }
            obj_val.FilterBy_ToValue = ""."";

            var data = {};
            data.context = WebAPIProxy.getContext();;
            data.context.Filter = obj_val;        
            var Context = data.context;
            $.ajax({
                type: ""POST"",
                url: '/Invoice/InvoiceListfetch',
                dataType: 'json',
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, FilterBy_Option: Context.Filter.FilterBy_Option, FilterBy_Code: Context.Filter.FilterBy_Code, FilterBy_FromValue: Context.Filter.FilterBy_FromValue, FilterBy_ToValue: Context.Filter.FilterBy_ToValue }),
                contentType: 'application/json; charset=utf-8',
                success: ");
            WriteLiteral(@"function (response) {
                    //var list = JSON.parse(response);
                    if (response.context.List != null) {
                        generate_Invoice_list(response.context.List);
                    }
                    else {
                        invoicegrid([]);
                    }
                },
                error: function (er) {
                    alert(er)
                    console.log(er)
                }

            });
            //setlocalStorage('flt_condition', """");
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    var status_Priority = [];
    function invoicegrid(data) {
        try {
            $.each(data, function (index, value) {
                var flag = false;
                $.each(status_Priority, function (sindex, svalue) {
                    if (svalue == value.status_desc) {
                        flag = true;
                    }
            ");
            WriteLiteral(@"    });
                if (flag == false) {
                    status_Priority.push(value.status_desc);
                }
            });
            $(""#invoice_grid"").kendoGrid(
                {
                    excel: {
                        fileName: ""Invoice List.xlsx"",
                        filterable: true,
                        allPages: false
                    },
                    dataSource: {
                        data: data,
                        pageSize: 20,
                        change: function (e) {
                            setTimeout(function () {
                                var gd = $(""#invoice_grid"").data(""kendoGrid"");
                                filter_row(gd);
                                $('.k-i-close').css('display', 'none');
                                $('button.k-button-icon').css('display', 'none');
                                $('#invoice_grid .k-input').prop('disabled', false);
                                $('#inv");
            WriteLiteral(@"oice_grid .k-input').prop('readonly', true);

                            }, 1);
                        },
                    },
                    toolbar: ""<button type='button' id='Exportclick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
                    excelExport: function (e) {
                        debugger;

                        //Mohan Changes 09-11-2020
                        var gd = $(""#invoice_grid"").data(""kendoGrid"");
                        var gd_fi = $(""#invoice_grid"").data(""kendoGrid"").dataSource;

                        var filters = gd_fi.filter();
                        var allData = gd_fi.data();
                        var query = new kendo.data.Query(allData);
                        var data = query.filter(filters).data;
                        var data_tt = gd.dataSource.data();


                        var sheet = e.workbook.sheets[0];
          ");
            WriteLiteral(@"              var gridColumns = gd.columns;

                        var columnCells = [];
                        for (var c = 0; c < gridColumns.length; c++) {
                            var fieldName = gd.columns[c].hidden;
                            if (typeof (fieldName) === ""undefined"") {
                                var cellValue = gridColumns[c].title ? gridColumns[c].title : gridColumns[c].field;
                                columnCells.push({ value: cellValue, autoWidth: true, background: ""#7a7a7a"", color: ""#fff"" });
                            }
                        }

                        var rows = [{ cells: columnCells, type: ""header"" }];


                        for (var i = 0; i < data.length; i++) {
                            var rowCells = [];
                            for (var j = 0; j < gridColumns.length; j++) {

                                var fieldName = gd.columns[j].hidden;
                                if (typeof (fieldName) === ""undefined"")");
            WriteLiteral(@" {
                                    var cellValue = data[i][gridColumns[j].field];
                                    rowCells.push({ value: cellValue });
                                }
                            }
                            rows.push({ cells: rowCells, type: ""data"" });
                        }

                        sheet.rows = rows;

                        return false;
                    },
                    filterable: {
                        enabled: false,
                        delay: 1500,
                       // mode: ""menu, row"",
                        height: 200,
                        click: function (e) {
                            var gd = $(""#invoice_grid"").data(""kendoGrid"");
                            filter_row(gd);
                        }
                    },
                    filterMenuInit: function (e) {
                        var gd = $(""#invoice_grid"").data(""kendoGrid"");
                        filter_row(gd);
 ");
            WriteLiteral(@"                   },
                    change: selectRow,
                    height: 450,
                    sortable: true,
                    selectable: true,
                    selectable: ""singl"",   //  Grid Row Selection
                    pageable: {
                        refresh: false,
                        pageSizes: true,
                        buttonCount: 5
                    },
                    navigatable: true,
                    groupable: false,

                    columns: [
                        {
                            field: ""Out_invoice_rowid"",
                            title: ""invoice_rowid"",
                            width: 1,
                            hidden: true,
                        },
                        {
                            field: ""Out_ic_code"",
                            title: ""ic_code"",
                            width: 1,
                            hidden: true,
                        },
         ");
            WriteLiteral(@"               {
                            field: ""Out_ic_name"",
                            title: ""Input Centre Name"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""contains""
                                    }
                                }
                            },
                          
                        },
                        {
                            field: ""Out_invoice_date"",
                            title: ""Invoice Date"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""contains""
                                    }
                                }
                            }
      ");
            WriteLiteral(@"                  },
                         {
                             field: ""Out_invoice_no"",
                             title: ""Invoice No"",
                             filterable: {
                                 extra: false,
                                 operators: {
                                     string: {
                                         contains: ""contains""
                                     }
                                 }
                             }
                         },
                         {
                             field: ""Out_customer_type"",
                             title: ""customer_type"",
                             width: 1,
                             hidden: true,
                         },
                       
                         {
                             field: ""Out_customer_type_desc"",
                             title: ""Customer Type"",
                             filterable: {
              ");
            WriteLiteral(@"                   extra: false,
                                 operators: {
                                     string: {
                                         contains: ""contains""
                                     }
                                 }
                             }
                         },

                          {
                              field: ""Out_customer_name"",
                              title: ""Farmer/Customer Name"",
                              filterable: {
                                  extra: false,
                                  operators: {
                                      string: {
                                          contains: ""contains""
                                      }
                                  }
                              }
                          },
                          {
                              field: ""Out_reciver_location"",
                              title: ""reciver_location"",");
            WriteLiteral(@"
                              width: 1,
                              hidden: true,
                          },
                          {
                              field: ""Out_reciver_location_desc"",
                              title: ""Receiver Location"",
                              filterable: {
                                  extra: false,
                                  operators: {
                                      string: {
                                          contains: ""contains""
                                      }
                                  }
                              }
                          },
                          {
                              field: ""Out_reciver_address"",
                              title: ""Receiver Address"",
                              filterable: {
                                  extra: false,
                                  operators: {
                                      string: {
                ");
            WriteLiteral(@"                          contains: ""contains""
                                      }
                                  }
                              }
                          },
                          {
                              field: ""Out_process_status"",
                              title: ""process_status"",
                              width: 1,
                              hidden: true,
                          },
                           {
                               field: ""Out_process_status_desc"",
                               title: ""process_status_desc"",
                               width: 1,
                               hidden: true,
                           },
                           {
                               field: ""Out_status_code"",
                               title: ""status_code"",
                               width: 1,
                               hidden: true,
                           },
                           {
      ");
            WriteLiteral(@"                         field: ""Out_status_desc"",
                               title: ""status_desc"",
                               width: 1,
                               hidden: true,
                           },
                    ]

                });
            $("".k-dropdown-operator"").css('display', 'none');
            $(""#invoice_grid .k-input"").attr('disabled', 'false');
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    function statusFilter(element) {    // Dropdown list functionality
        element.kendoDropDownList({
            dataSource: status_Priority,
            optionLabel: ""--Select Value--""
        });
    }

    function selectRow() {
        try {
            var grid = $(""#invoice_grid"").data(""kendoGrid"");
            var selectedItem = grid.dataItem(grid.select());
            setlocalStorage(""ls_pageList"", selectedItem);
        }
        catch (err) {
            javascript_log4j");
            WriteLiteral(@"_root(arguments.callee.name, err);
        }
    }

</script>
<script>
    $(""#btn_Edit"").bind(""click"", function () {
        getSerializedSelectedRows('edit');
    });

    $(""#btn_View"").bind(""click"", function () {
        getSerializedSelectedRows('view');
    });

    $(""#btn_new"").bind(""click"", function () {
        btn_onClick('Create');
        location.href = ""../Invoice/InvoiceForm"";
    });

    function getSerializedSelectedRows(mode) {
        try {
            if (getlocalStorage(""ls_pageList"") != undefined) {
                var items = getlocalStorage(""ls_pageList"");
                if (items.length == 0) {
                    kendoAlert(""Please select records"");
                }

                else {
                    if (mode == ""edit"") {
                        btn_onClick('Edit');
                        location.href = ""../Invoice/InvoiceForm"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('Vie");
            WriteLiteral(@"w');
                        location.href = ""../Invoice/InvoiceForm"";
                    }
                }
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>
<script>
    function generate_Invoice_list(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
                $(""#gd_invoice"").empty();
                $(""#gd_invoice"").append(""<div id='invoice_grid'></div>"");
                invoicegrid(data);
            }
            else {
                invoicegrid([]);
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    function listRefresh() {
        try {
            setlocalStorage('flt_condition', """");
            listpageloadfetch();
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>




            WriteLiteral("\n\r\n\r\n\r\n\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591