#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSNEWApproveProcurement\PAWHSNEWApproveProcurementList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "35e8d3ed5db17e222217cf5af87200149ae4b64c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PAWHSNEWApproveProcurement_PAWHSNEWApproveProcurementList), @"mvc.1.0.view", @"/Views/PAWHSNEWApproveProcurement/PAWHSNEWApproveProcurementList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"35e8d3ed5db17e222217cf5af87200149ae4b64c", @"/Views/PAWHSNEWApproveProcurement/PAWHSNEWApproveProcurementList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_PAWHSNEWApproveProcurement_PAWHSNEWApproveProcurementList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_ActualProcutement_list"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/ExportExcel.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/Common_func.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            WriteLiteral("\r\n\r\n");
#nullable restore
#line 3 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSNEWApproveProcurement\PAWHSNEWApproveProcurementList.cshtml"
  
    ViewBag.List = "Approved Actual Purchase List";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "35e8d3ed5db17e222217cf5af87200149ae4b64c6696", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"gd_product\">\r\n                <div id=\"ActualProcutement_grid\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            WriteLiteral("\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "35e8d3ed5db17e222217cf5af87200149ae4b64c8481", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "35e8d3ed5db17e222217cf5af87200149ae4b64c9520", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "35e8d3ed5db17e222217cf5af87200149ae4b64c10559", async() => {
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
            WriteLiteral(@"

<script>
    var menuId = """";
    var permission = """";
    $(document).ready(function () {
        debugger;
        $(""#divCreate"").hide();
        $(""#divEdit"").hide();
        $(""#btn_new"").hide();
        $(""#btn_Edit"").hide();
        $("".adv_filter"").attr(""hdrtitle"", ""Actual Procutement List"");
        $("".adv_filter"").attr(""fltid"", ""Approveproc"");
        $("".Export"").attr(""hdrtitle"", ""Actual Procutement List"");
        $("".Export"").attr(""SubTreeId"", ""PWNEWACTPRO"");
        list_grid_id = ""ActualProcurement_grid"";

        listpageloadfetch();

        Screen_Id = ""PWNEWACTPRO"";
        permission = sec_Permission(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        filterhover();
    });

    //Product Estimated List Loaded start  18-05-2020

    function listpageloadfetch() {
        debugger;
        try {
            var formval = form_Serialize(""frm_aggr_orgs"");
            var obj_val = JSON.parse(formval)");
            WriteLiteral(@";
            obj_val.FilterBy_Option = ""ALL"";
            obj_val.FilterBy_Code = ""."";
            if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') != """") {
                obj_val.FilterBy_FromValue = getlocalStorage('flt_condition');
            }
            else {
                obj_val.FilterBy_FromValue = ""."";
            }
            obj_val.FilterBy_ToValue = ""."";
            obj_val.status = ""warehouse"";

            var data = {};
            data.context = WebAPIProxy.getContext();;
            data.context.Filter = obj_val;
            var Context = data.context;
            $.ajax({
                type: ""POST"",
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, status: Context.Filter.status }),
                url: ""/PAWHSNEWApproveProcurement/GetActualProcurementList"",
                dataType: ""json"",
                contentType: 'application/json");
            WriteLiteral(@"; charset=utf-8',
                success: function (response) {
                    debugger;
                    if (response.context != null) {
                        debugger;
                        generate_ActualProcutement_list(response.context.approved_List)
                    }
                    else {
                        New_ActualProcurement([]);
                    }

                },
                error: function (er) {
                    alert(er)
                    console.log(er)
                }


            });

        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    var status_Priority = [];
    function New_ActualProcurement(data) {
        try {
            $.each(data, function (index, value) {
                var flag = false;
                $.each(status_Priority, function (sindex, svalue) {
                    if (svalue == value.status_desc) {
                        flag = ");
            WriteLiteral(@"true;
                    }
                });
                if (flag == false) {
                    status_Priority.push(value.status_desc);
                }
            });
            $(""#ActualProcurement_grid"").kendoGrid(
                {
                    excel: {
                        fileName: ""Approved Purchase.xlsx"",
                        filterable: true,
                        allPages: false
                    },
                    dataSource: {
                        data: data,
                        pageSize: 20,
                        change: function (e) {
                            setTimeout(function () {
                                var gd = $(""#ActualProcurement_grid"").data(""kendoGrid"");
                                filter_row(gd);
                                $('.k-i-close').css('display', 'none');
                                $('button.k-button-icon').css('display', 'none');
                                $('#ActualProcurement_grid");
            WriteLiteral(@" .k-input').prop('disabled', false);
                                $('#ActualProcurement_grid .k-input').prop('readonly', true);

                            }, 1);
                        },
                    },
                    toolbar: ""<button type='button' id='Exportclick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
                    excelExport: function (e) {
                    //    var gd = $(""#ActualProcurement_grid"").data(""kendoGrid"");
                    //    var len = gd.dataSource._data.length;
                    //    var chkall = $('#chkall').is(':checked');
                    //    var chkfilter = $('#chkfilter').is(':checked');
                    //    var chktemp = $('#chktemp').is(':checked');
                    //    var twokendobox = true;
                    //    gd.dataSource.pageSize(len);
                    //    if (e.sender.dataSource._data.length ==");
            WriteLiteral(@" len) {
                    //        twokendobox = false;
                    //        exportfunction(e, chkall, chkfilter, chktemp, twokendobox, gd);
                    //    }
                    //    else {
                    //        exportfunction(e, chkall, chkfilter, chktemp, twokendobox, gd);
                    //    }
                    //    gd.dataSource.pageSize('10');
                    //    return false;
                    //},
                        debugger;

                        //Mohan Changes 07-10-2020
                        var gd = $(""#ActualProcurement_grid"").data(""kendoGrid"");
                        var gd_fi = $(""#ActualProcurement_grid"").data(""kendoGrid"").dataSource;

                        var filters = gd_fi.filter();
                        var allData = gd_fi.data();
                        var query = new kendo.data.Query(allData);
                        var data = query.filter(filters).data;
                        var data_tt = gd.dataSou");
            WriteLiteral(@"rce.data();


                        var sheet = e.workbook.sheets[0];
                        var gridColumns = gd.columns;

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

                                var fieldName = gd.colum");
            WriteLiteral(@"ns[j].hidden;
                                if (typeof (fieldName) === ""undefined"") {
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
                        enabled: true,
                        delay: 1500,
                        mode: ""menu, row"",
                        height: 200,
                        click: function (e) {
                            var gd = $(""#ActualProcurement_grid"").data(""kendoGrid"");
                            filter_row(gd);
                        }
                    },
                    filterMenuInit: function (e) {
                     ");
            WriteLiteral(@"   var gd = $(""#ActualProcurement_grid"").data(""kendoGrid"");
                        filter_row(gd);
                    },
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
                            field: ""out_act_rowid"",
                            title: ""Actual Row Id"",
                            width: 1,
                            hidden: true,
                        },
                        {
                            field: ""out_agg_code"",
                            title: ""Aggregator Code"",
             ");
            WriteLiteral(@"              hidden: true,
                        },
                        {
                            field: ""out_lotno"",
                            title: ""Lot No"",
                            filterable: {
                                cell: {
                                    operator: ""contains"",
                                    inputWidth: 1500
                                }
                            }
                        },
                        {
                            field: ""out_farmer_code"",
                            title: ""Farmer Code"",
                            filterable: {
                                cell: {
                                    operator: ""contains"",
                                    inputWidth: 1500
                                }
                            }

                        },
                        {
                            field: ""out_farmer_name"",
                            title: ""Farmer Nam");
            WriteLiteral(@"e"",
                            filterable: {
                                cell: {
                                    operator: ""contains"",
                                    inputWidth: 1500
                                }
                            }
                        },
                        {
                            field: ""out_member_type"",
                            title: ""Member Type"",
                            filterable: {
                                cell: {
                                    operator: ""contains"",
                                    inputWidth: 1500
                                }
                            }
                        },

                        {
                            field: ""out_item_code"",
                            title: ""Item Code"",
                            filterable: {
                                cell: {
                                    operator: ""contains"",
                              ");
            WriteLiteral(@"      inputWidth: 1500
                                }
                            }
                        },
                        {
                            field: ""out_item_name"",
                            title: ""Item Name"",
                            filterable: {
                                cell: {
                                    operator: ""contains"",
                                    inputWidth: 1500
                                }
                            }
                        },
                        {
                            field: ""out_status"",
                            title: ""Status"",
                            filterable: {
                                cell: {
                                    operator: ""contains"",
                                    inputWidth: 1300
                                }
                            }
                        },
                        {
                            field: ""out_actua");
            WriteLiteral(@"l_remarks"",
                            title: ""Actual Remarks"",
                            filterable: {
                                cell: {
                                    operator: ""contains"",
                                    inputWidth: 1500
                                }
                            }
                        },
                        {
                            field: ""out_approved_remarks"",
                            title: ""Approved Remarks"",
                            filterable: {
                                cell: {
                                    operator: ""contains"",
                                    inputWidth: 1500
                                }
                            }
                        },
                    ]

                });
            $("".k-dropdown-operator"").css('display', 'none');
            $(""#ActualProcurement_grid .k-input"").attr('disabled', 'false');
        }
        catch (err) {
           ");
            WriteLiteral(@" javascript_log4j_root(arguments.callee.name, err);
        }
    }

    function selectRow() {
        try {
            var grid = $(""#ActualProcurement_grid"").data(""kendoGrid"");
            var selectedItem = grid.dataItem(grid.select());
            setlocalStorage(""ls_pageList"", selectedItem);
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    function generate_ActualProcutement_list(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
                $(""#gd_product"").empty();
                $(""#gd_product"").append(""<div id='ActualProcurement_grid'></div>"");
                New_ActualProcurement(data);
            }
            else {
                New_ActualProcurement([]);
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    //Product Estimated List After Hitting Controller Get Resp");
            WriteLiteral(@"onse End


    // list Refresh Click function start 21-08-2020
    function listRefresh() {
        try {
            setlocalStorage('flt_condition', """");
            listpageloadfetch();
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
          // list Refresh Click function End


    $(""#btn_View"").bind(""click"", function () {
        getSerializedSelectedRows('view');
    });

    function getSerializedSelectedRows(mode) {
        try {
            if (getlocalStorage(""ls_pageList"") != undefined) {
                var items = getlocalStorage(""ls_pageList"");
                if (items.length == 0) {
                    kendoAlert(""Please select records"");
                }

                else {
                     if (mode == ""view"") {
                        btn_onClick('View');
                         location.href = ""../PAWHSNEWApproveProcurement/PAWHSNEWApproveProcurementForm"";
                    }
      ");
            WriteLiteral("          }\r\n            }\r\n        }\r\n        catch (err) {\r\n            javascript_log4j_root(arguments.callee.name, err);\r\n        }\r\n    }\r\n</script>\r\n");
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