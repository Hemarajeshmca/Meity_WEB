#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSNewActualProcurement\PAWHSNewActualProcurementList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "5248c76e3073885e804a2b65bf76f2db9d347ca7"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PAWHSNewActualProcurement_PAWHSNewActualProcurementList), @"mvc.1.0.view", @"/Views/PAWHSNewActualProcurement/PAWHSNewActualProcurementList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5248c76e3073885e804a2b65bf76f2db9d347ca7", @"/Views/PAWHSNewActualProcurement/PAWHSNewActualProcurementList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_PAWHSNewActualProcurement_PAWHSNewActualProcurementList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
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
            WriteLiteral("\r\n");
#nullable restore
#line 2 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSNewActualProcurement\PAWHSNewActualProcurementList.cshtml"
   ViewBag.List = "Actual Purchase List";
                Layout = "~/Views/Shared/ListViewLayout.cshtml"; 

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "5248c76e3073885e804a2b65bf76f2db9d347ca76679", async() => {
                WriteLiteral(@"
    <div class=""row"">
        <div class=""col-xs-12"">
            <div id=""gd_product"">
                <div id=""ActualProcutement_grid""></div>
            </div>
        </div>
    </div>
    <div class=""row"" style=""display:none"">
        <div id=""gd_trace"">
            <div id=""ActualProcutement_grid_excel""></div>
        </div>
    </div>
");
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
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "5248c76e3073885e804a2b65bf76f2db9d347ca78613", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "5248c76e3073885e804a2b65bf76f2db9d347ca79652", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "5248c76e3073885e804a2b65bf76f2db9d347ca710691", async() => {
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
            WriteLiteral(@"<script type=""text/javascript"">
    var menuId = """";
    var permission = """";
    $(document).ready(function () {
        debugger;
        $(""#divCreate"").hide();
        $(""#divEdit"").hide();
        $(""#btn_new"").hide();
        $(""#btn_Edit"").hide();
        $("".adv_filter"").attr(""hdrtitle"", ""Actual Procutement List"");
        $("".adv_filter"").attr(""fltid"", ""Actualproc"");
        $("".Export"").attr(""hdrtitle"", ""Actual Procutement List"");
        $("".Export"").attr(""SubTreeId"", ""Actual Procutement List"");
        list_grid_id = ""ActualProcurement_grid"";
        //actualexcel();
        Screen_Id = ""PWNEWACTPRO"";
        permission = sec_Permission(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        filterhover();
        listpageloadfetch();
    });

    //Product Estimated List Loaded start  18-05-2020

    function listpageloadfetch() {
        debugger;
        try {
            var formval = form_Serialize(""frm_aggr_or");
            WriteLiteral(@"gs"");
            var obj_val = JSON.parse(formval);
            obj_val.FilterBy_Option = ""ALL"";
            obj_val.FilterBy_Code = ""."";
            if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') != """") {
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
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, FilterBy_Option: Context.Filter.FilterBy_Option, FilterBy_Code: Context.Filter.FilterBy_Code, FilterBy_FromValue: Context.Filter.FilterBy_FromValue, FilterBy_ToValue: Context.Filter.Fil");
            WriteLiteral(@"terBy_ToValue }),
                url: ""/PAWHSNewActualProcurement/GetActualProcurementList"",
                dataType: ""json"",
                contentType: 'application/json; charset=utf-8',
                success: function (response) {
                    debugger;
                    if (response.context != null) {
                        debugger;
                        generate_ActualProcutement_list(response.context.List)
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
    function actualexcel() {
        var data = {};
        data.context = WebAPIProxy.getContext();
        var Context = data.context;
        $.ajax({
        ");
            WriteLiteral(@"    type: ""POST"",
            data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId }),
            url: ""/PAWHSNewActualProcurement/GetActualProcurementListexcel"",
            dataType: ""json"",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                listgrid(response);
                listpageloadfetch();
            },
            error: function (er) {
                alert(er)
                console.log(er)
            }
        });
    }
    function ExportButtonClick() {
        debugger
        var grid = $(""#ActualProcutement_grid_excel"").data(""kendoGrid"");
        if (grid.dataSource.total() == 0) {
            kendoAlert('No records available in the Grid to Export!!!');
        }
        else {
            grid.bind(""excelExport"", function (e) {
                debugger;
                e.workbook.fileName = ""PAWHS Purchase Entry.xlsx"";
        ");
            WriteLiteral(@"        var rows1 = e.workbook.sheets[0];
                var sheet = e.workbook.sheets[0];
                var grid = $(""#ActualProcutement_grid_excel"").data(""kendoGrid"");
                var data = grid.dataSource._data;//grid.dataSource.data();
                var gridColumns = grid.columns;
                var columns = gridColumns.map(function (col) {
                    return {
                        value: col.title ? col.title : col.field,
                        autoWidth: true,
                        background: ""#7a7a7a"",
                        color: ""#fff""
                    };
                });
                var rows = [{ cells: columns, type: ""header"" }];

                for (var i = 0; i < data.length; i++) {
                    var rowCells = [];
                    for (var j = 0; j < gridColumns.length; j++) {
                        var cellValue = data[i][gridColumns[j].field];
                        rowCells.push({ value: cellValue });
                    }");
            WriteLiteral(@"
                    rows.push({ cells: rowCells, type: ""data"" });
                }
                sheet.rows = rows;
            });

            grid.saveAsExcel();
            kendoAlert('Exported Sucessfully');
        }
    }
    var status_Priority = [];
    function New_ActualProcurement(data) {
        try {
            $.each(data, function (index, value) {
                var flag = false;
                $.each(status_Priority, function (sindex, svalue) {
                    if (svalue == value.status_desc) {
                        flag = true;
                    }
                });
                if (flag == false) {
                    status_Priority.push(value.status_desc);
                }
            });
            $(""#ActualProcurement_grid"").kendoGrid(
                {
                    excel: {
                        fileName: ""PAWHS Purchase Entry.xlsx"",
                        filterable: true,
                        allPages: false
           ");
            WriteLiteral(@"         },
                    dataSource: {
                        data: data,
                        pageSize: 20,
                        change: function (e) {
                            setTimeout(function () {
                                var gd = $(""#ActualProcurement_grid"").data(""kendoGrid"");
                                filter_row(gd);
                                $('.k-i-close').css('display', 'none');
                                $('button.k-button-icon').css('display', 'none');
                                $('#ActualProcurement_grid .k-input').prop('disabled', false);
                                $('#ActualProcurement_grid .k-input').prop('readonly', true);

                            }, 1);
                        },
                    },
                    /* toolbar: ""<button type='button' id='Exportclick' onclick='ExportButtonClick' class='k-grid-excel1' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To");
            WriteLiteral(@" Excel</span></button>"",*/
                    excelExport: function (e) {
                        var gd = $(""#ActualProcutement_grid_excel"").data(""kendoGrid"");
                        var gd_fi = $(""#ActualProcutement_grid_excel"").data(""kendoGrid"").dataSource.Group(""Lot No"");

                        var filters = gd_fi.filter();
                        var allData = gd_fi.data();
                        var query = new kendo.data.Query(allData);
                        var data = query.filter(filters).data;
                        var data_tt = gd.dataSource.data();

                        var sheet = e.workbook.sheets[0];
                        var gridColumns = gd.columns;

                        var columnCells = [];
                        for (var c = 0; c < gridColumns.length; c++) {
                            var fieldName = gd.columns[c].hidden;
                            if (typeof (fieldName) === ""undefined"") {
                                var cellValue = gridColumns[c].");
            WriteLiteral(@"title ? gridColumns[c].title : gridColumns[c].field;
                                columnCells.push({ value: cellValue, autoWidth: true, background: ""#7a7a7a"", color: ""#fff"" });
                            }
                        }

                        var rows = [{ cells: columnCells, type: ""header"" }];

                        for (var i = 0; i < data.length; i++) {
                            var rowCells = [];
                            for (var j = 0; j < gridColumns.length; j++) {

                                var fieldName = gd.columns[j].hidden;
                                if (typeof (fieldName) === ""undefined"") {
                                    var cellValue = data[i][gridColumns[j].field];
                                    rowCells.push({ value: cellValue });
                                }
                            }
                            rows.push({ cells: rowCells, type: ""data"" });
                        }

                        sheet.rows = ");
            WriteLiteral(@"rows;

                        return false;
                    },
                    filterable: true,
                    filterMenuInit: function (e) {
                        var gd = $(""#ActualProcurement_grid"").data(""kendoGrid"");
                        filter_row(gd);
                    },
                    change: selectRow,
                    height: 450,
                    sortable: true,
                    selectable: true,
                    selectable: ""singl"",
                    pageable: {
                        refresh: false,
                        pageSizes: true,
                        buttonCount: 5
                    },
                    resizable: true,
                    navigatable: true,
                    groupable: false,
                    columns: [
                        {
                            field: ""Out_act_rowid"",
                            title: ""Actual Row Id"",
                            hidden: true,
                 ");
            WriteLiteral(@"       },
                        {
                            field: ""Out_agg_code"",
                            title: ""Aggregator Code"",
                            hidden: true,
                        },
                        {
                            field: ""Out_date"",
                            title: ""Date"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 100,
                        },
                        {
                            field: ""Out_lotno"",
                            title: ""Lot No"",
                            filterable: {
                                extra: false,
                                operators: {
           ");
            WriteLiteral(@"                         string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 120,
                        },
                        {
                            field: ""Out_farmer_code"",
                            title: ""Farmer Code"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 130,
                            hidden: true,
                        },
                        {
                            field: ""Out_farmer_name"",
                            title: ""Farmer Name"",
                      ");
            WriteLiteral(@"      filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 120,
                        },
                        {
                            field: ""Out_FHW_Name"",
                            title: ""FHW Name"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 120,
                        },
                        {
                            field: ""Out_Village"",
 ");
            WriteLiteral(@"                           title: ""Farmer Village"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 120,
                        },
                        {
                            field: ""Out_Taluk"",
                            title: ""Farmer Taluk"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 120,
                        },
   ");
            WriteLiteral(@"                     {
                            field: ""Out_MobileNo"",
                            title: ""Farmer Mobile No"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 120,
                        },
                        {
                            field: ""Out_member_type"",
                            title: ""Member Type"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                    ");
            WriteLiteral(@"        },
                            width: 120,
                        },

                        {
                            field: ""Out_item_code"",
                            title: ""Item Code"",
                            hidden: true,
                        },
                        {
                            field: ""Out_item_name"",
                            title: ""Crop Name"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 120,
                        },
                        {
                            field: ""Out_Qty"",
                            title: ""Qty"",
                            filterable: {
                                ");
            WriteLiteral(@"extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 80,
                        },
                        {
                            field: ""Out_UnitPrice"",
                            title: ""Price per Unit"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 100,
                        },
                        {
                            field: ""Out_TotalPrice"",
                            title: ""Procuremn");
            WriteLiteral(@"et Total Price"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 110,
                        },
                        {
                            field: ""Out_status"",
                            title: ""Status Code"",
                            hidden: true,
                        },
                        {
                            field: ""Out_row_timestamp"",
                            title: ""row_timestamp"",
                            hidden: true,
                        },
                    ]

                });
            $("".k-dropdown-operator"").css('display', 'none');
            $(""#ActualProcurement_grid .k-input"").attr('disabled', 'fa");
            WriteLiteral(@"lse');
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
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
    function listgrid(Data1) {
        try {
            $('#lblprog').hide();
            $('#refresh').show();
            $(""#exportExcel"").show();
            var columns = [];
            var chkval = Data1;
            var data = Data1;
            var i = 0;

            var entryIndex = ""entries["" + i + ""]"";
            for (var key in data[0]) {
                debugger;
                var propType = typeof data[0][key];

                if (key == ""ICD Name"" || key == ""Supplier Name"") {
                    columns");
            WriteLiteral(@".push({
                        field: entryIndex,
                        title: key,
                        type: propType,
                        width: 235,
                        attributes: { style: ""text-align: center;"" },
                        filterable: true,
                    });
                }

                if (key != """" && key != ""ICD Name"" && key != ""Supplier Name"") {
                    columns.push({
                        field: entryIndex,
                        title: key,
                        type: propType,
                        width: 160,
                        attributes: { style: ""text-align: center;"" },
                        filterable: true,
                    });
                }

                i = i + 1;
                entryIndex = ""entries["" + i + ""]"";
            }
            debugger;
            var rows = [];
            var data1 = Data1;

            $.each(data1, function (i, e) {
                var entryArray = []");
            WriteLiteral(@";
                $.each(e, function (key, val) {
                    entryArray.push(val);
                });
                rows.push(kendo.observable({
                    entries: entryArray
                }));
            });
            var viewModel = kendo.observable({
                gridRows: rows

            });
            var configuration = {
                height: 450,
                navigatable: true,
                groupable: false,
                editable: false,
                sortable: true,
                scrollable: true,
                attributes: { style: ""text-align: center;"" },
                filterable: {
                    extra: false,
                    operators: {
                        string: {
                            contains: ""Contains""
                        }
                    }
                },
                //pageSize: 100,
                resizable: true,
                persistSelection: true,
                se");
            WriteLiteral(@"lectable: ""false"",
                columns: columns,
                toolbar: ""<button type='button' id='Exportclick' onclick='ExportButtonClick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
                excel: {
                    fileName: ""PAWHS Purchase Entry"",
                    filterable: true,
                    allPages: false

                },
                rows: viewModel
            };

            $(""#example"").remove();
            $('#ActualProcutement_grid_excel').append('<div id=""example"" style=""position:relative;"" class=""k-content""><table id=""grid1""  data-bind=""source: gridRows"" style=""position:relative;overflow:scroll;width:100%""></table></div>');
            var timeEditGrid = $(""#grid1"").kendoGrid(configuration).data(""kendoGrid"");
            kendo.bind($(""#grid1""), viewModel);
        }
        catch (err) {
            alert(err);
        }
    }

    func");
            WriteLiteral(@"tion generate_ActualProcutement_list(res) {
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

    //Product Estimated List After Hitting Controller Get Response End


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
        getSerializedSelectedR");
            WriteLiteral(@"ows('view');
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
                        location.href = ""../PAWHSNewActualProcurement/PAWHSNewActualProcurementForm"";
                    }
                }
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>
");
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