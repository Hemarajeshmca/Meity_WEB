#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSWarehouseMaster\PAWHSWarehouseMasterList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "49d91254bc064a9e3ab2a338122b3dd0e43b7fd1"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PAWHSWarehouseMaster_PAWHSWarehouseMasterList), @"mvc.1.0.view", @"/Views/PAWHSWarehouseMaster/PAWHSWarehouseMasterList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"49d91254bc064a9e3ab2a338122b3dd0e43b7fd1", @"/Views/PAWHSWarehouseMaster/PAWHSWarehouseMasterList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_PAWHSWarehouseMaster_PAWHSWarehouseMasterList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PAWHS_getWarehouseReg_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PAWHS_getWarehouseRegList_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Warehouse_Registration_PAWHS_getWarehouseReg_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Warehouse_Registration_PAWHS_getWarehouseRegList_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Warehouse_Registration_PAWHS_saveWarehouseReg_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PAWHSWarehouseMaster.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/ExportExcel.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/Common_func.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSWarehouseMaster\PAWHSWarehouseMasterList.cshtml"
  
    ViewBag.List = "Warehouse";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <div id=\"grid_whs_master\"></div>\r\n    </div>\r\n</div>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "49d91254bc064a9e3ab2a338122b3dd0e43b7fd17358", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "49d91254bc064a9e3ab2a338122b3dd0e43b7fd18397", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "49d91254bc064a9e3ab2a338122b3dd0e43b7fd19436", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "49d91254bc064a9e3ab2a338122b3dd0e43b7fd110475", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "49d91254bc064a9e3ab2a338122b3dd0e43b7fd111515", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "49d91254bc064a9e3ab2a338122b3dd0e43b7fd112555", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "49d91254bc064a9e3ab2a338122b3dd0e43b7fd113595", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "49d91254bc064a9e3ab2a338122b3dd0e43b7fd114635", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "49d91254bc064a9e3ab2a338122b3dd0e43b7fd115675", async() => {
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
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "49d91254bc064a9e3ab2a338122b3dd0e43b7fd116715", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_8);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"


<script>

    var data = [];
    function WarehouseMasterList(data) {
        try {
            $(""#grid_whs_master"").kendoGrid({
                excel: {
                    fileName: ""Warehouse Master.xlsx"",
                    filterable: true,
                    allPages: false
                },
                dataSource: {
                    data: data,
                    pageSize: 20,
                    change: function (e) {
                        setTimeout(function () {
                            var gd = $(""#grid_whs_master"").data(""kendoGrid"");
                            filter_row(gd);
                            $('.k-i-close').css('display', 'none');
                            $('button.k-button-icon').css('display', 'none');
                            $('#grid_whs_master .k-input').prop('disabled', false);
                            $('#grid_whs_master .k-input').prop('readonly', true);

                        }, 1);
                    },
            ");
            WriteLiteral(@"    },
                
                toolbar: ""<button type= 'button' id ='Exportclick' class = 'k-grid-excel' style = 'display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
                excelExport: function (e) {
                    debugger;
                    var gd = $(""#grid_whs_master"").data(""kendoGrid"");
                    var gd_fi = $(""#grid_whs_master"").data(""kendoGrid"").dataSource;
                    var filters = gd_fi.filter();
                    var allData = gd_fi.data();
                    var query = new kendo.data.Query(allData);
                    var data = query.filter(filters).data;
                    var data_tt = gd.dataSource.data();
                    var sheet = e.workbook.sheets[0];
                    var gridColumns = gd.columns;

                    var columns = gridColumns.map(function (col) {
                        var hidden_vl = col.hidden;
                        if (typeof (hi");
            WriteLiteral(@"dden_vl) == ""undefined"") {
                            return {
                                value: col.title ? col.title : col.field,
                                autoWidth: true,
                                background: ""#7a7a7a"",
                                color: ""#fff""
                            }
                        };

                    });
                    var rows = [{ cells: columns, type: ""header"" }];


                    for (var i = 0; i < data.length; i++) {
                        var rowCells = [];
                        for (var j = 0; j < gridColumns.length; j++) {

                            var fieldName = gd.columns[j].hidden;
                            if (typeof (fieldName) === ""undefined"") {
                                var cellValue = data[i][gridColumns[j].field];
                                rowCells.push({ value: cellValue });
                            }
                        }
                        rows.push({ cells: ro");
            WriteLiteral(@"wCells, type: ""data"" });
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
                        var gd = $(""#grid_whs_master"").data(""kendoGrid"");
                        filter_row(gd);
                    }
                },
                filterMenuInit: function (e) {
                    var gd = $(""#grid_whs_master"").data(""kendoGrid"");
                    filter_row(gd);
                },
                //dataBound: function (o) {
                //    var gd = $(""#grid_whs_master"").data(""kendoGrid"");
                //    for (var i = 0; i < gd.columns.length; i++) {
                //        gd.showColumn(i);
                //    }
                //    $(""div.k");
            WriteLiteral(@"-group-indicator"").each(function (i, v) {
                //        //gd.hideColumn($(v).data(""field""));
                //    })
                //},
                dataBound: function (e) {
                    resultData = e.sender._data;
                    var rows = $('#grid_whs_master').data('kendoGrid').tbody.children();
                    setColor(rows, resultData);
                },
                height: 450,
                sortable: true,
                selectable: true,
                //change: onChangeSelection,
                selectable: ""singl"",   //  Grid Row Selection
                pageable: {
                    refresh: false,
                    pageSizes: true,
                    buttonCount: 5
                },
                navigatable: true,
                groupable: false,
                change: selectRow,

                columns: [
                //{
                //    field: ""List"",
                //    title: ""List"",
                ");
            WriteLiteral(@"//    hidden: true,
                //},
                {
                        field: ""Out_whs_rowid"",
                    title: ""Warehouse RowID"",
                    hidden: true,
                    width: 1,
                },
                {
                        field: ""Out_whs_code"",
                    title: ""Warehouse Code"",
                    width: 150,
                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1000
                        }
                    }
                },
                {
                    field: ""Out_whs_name"",
                    title: ""Warehouse Name"",
                    width: 200,
                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    }
                },
                {
   ");
            WriteLiteral(@"                 field: ""Out_agg_code"",
                    title: ""Aggregator Name"",
                    width: 150,
                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    }
                },
                 {
                     field: ""Out_whs_village"",
                     title: ""Village"",
                     width: 100,
                     filterable: {
                         cell: {
                             operator: ""contains"",
                             inputWidth: 1500
                         }
                     }
                 },
                {
                    field: ""Out_whs_panchayat"",
                    title: ""Gram Panchayat"",
                    width: 150,
                    filterable: {
                        cell: {
                            operator: ""contains"",
                  ");
            WriteLiteral(@"          inputWidth: 1500
                        }
                    }
                },
                {
                    field: ""Out_whs_taluk"",
                    title: ""Taluk"",
                    width: 100,
                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    }
                },

                 {
                     field: ""Out_whs_dist"",
                     title: ""District"",
                     width: 100,
                     filterable: {
                         cell: {
                             operator: ""contains"",
                             inputWidth: 1500
                         }
                     }
                 },

                {
                    field: ""Out_whs_country"",
                    title: ""Country"",
                    width: 100,
                    filterable: {");
            WriteLiteral(@"
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    }
                },
                {
                    field: ""Out_sqrf_area"",
                    title: ""Sq.Feet"",
                    width: 100,
                    attributes: { style: ""text-align:right;"" },
                    editor: function (container, options) {
                        numeric_editor(container, options.field, '50', '0');
                    },
                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    }
                },
                {
                    field: ""Out_whs_type"",
                    title: ""Warehouse Type"",
                    hidden: true,
                    width: 1,
                },
                
          ");
            WriteLiteral(@"      {
                    field: ""Out_whs_addr1"",
                    title: ""WHS Address1"",
                    hidden: true,
                    width: 1,
                },
                {
                    field: ""Out_whs_addr2"",
                    title: ""WHS Address2"",
                    hidden: true,
                    width: 1,
                },
                
                {
                    field: ""Out_whs_state"",
                    title: ""State"",
                    width: 1,
                    hidden: true,
                },
               
            {
                field: ""Out_whs_pincode"",
                title: ""Pincode"",
                hidden: true,
                width: 1,
            },
            
            {
                field: ""Out_status_desc"",
                title: ""Status"",
                hidden: true,
                filterable: {
                    cell: {
                        operator: ""contains"",
             ");
            WriteLiteral(@"           inputWidth: 1500
                    }
                },
                width: 130,
            },
            {
                field: ""Out_status_code"",
                title: ""status_code"",
                hidden: true,
                width: 1,
            },

              {
                  field: ""Out_row_timestamp"",
                  title: ""row_timestamp"",
                  hidden: true,
                  width: 1,
              },
                ],
            });
            $("".k-dropdown-operator"").css('display', 'none');
            $(""#grid_whs_master .k-input"").attr('disabled', 'false');
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    var gridRowID = 1;
    function sel_checkbox() {
        gridRowID++;
        return '<input id=""chk_sel_' + gridRowID + '"" class=""checkbox"" type=""checkbox"" />';
    }
    function selectRow() {
        try {
            var grid = $(""#grid_whs_mast");
            WriteLiteral(@"er"").data(""kendoGrid"");
            var selectedItem = grid.dataItem(grid.select());
            setlocalStorage(""ls_pageList"", selectedItem);
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>
<script>
    function load_master_code() {
        var data = {};
        data.screen_Id = ""PWWAREHOUSE"";
        var tab_values = ajaxcall_param(""/Home/screenId_mastercodelist"", JSON.stringify(data));
    }
</script>

<script>
    $(""#btn_Edit"").bind(""click"", function () {
        btn_onClick('Edit');
        getSerializedSelectedRows('edit');
    });

    $(""#btn_View"").bind(""click"", function () {
        btn_onClick('view');
        getSerializedSelectedRows('View');
    });

    $(""#btn_new"").bind(""click"", function () {
        btn_onClick('Create');
        location.href = ""../PAWHSWarehouseMaster/WarehouseMasterForm"";
    });

    function getSerializedSelectedRows(mode) {
        try {
            if (getloca");
            WriteLiteral(@"lStorage(""ls_pageList"") != undefined) {
                var items = getlocalStorage(""ls_pageList"");
                if (items.length == 0) {
                    kendoAlert(""Please select records"");
                }

                else {
                    if (mode == ""edit"") {
                        btn_onClick('Edit');
                        location.href = ""../PAWHSWarehouseMaster/WarehouseMasterForm"";
                    }
                    else if (mode == ""View"") {
                        btn_onClick('View');
                        location.href = ""../PAWHSWarehouseMaster/WarehouseMasterForm"";
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
    $(document).ready(function () {
        WarehouseMasterList();
        $("".adv_filter"").attr(""hdrtitle"", ""Warehouse Master List"");
        $("".adv_filter"").attr(""fltid"", ""Whs_Master"");
      ");
            WriteLiteral(@"  $("".Export"").attr(""hdrtitle"", ""Warehouse Master List"");
        $("".Export"").attr(""SubTreeId"", ""Warehouse "");
        list_grid_id = ""grid_whs_master"";
        listpageloadfetch();
        Screen_Id = ""PWWAREHOUSE"";
        permission = sec_Permission(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        filterhover();
    });

    function listpageloadfetch() {
        try {
            var formval = form_Serialize(""WarehouseMaster"");
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
           ");
            WriteLiteral(@" data.context = WebAPIProxy.getContext();;
            data.context.Filter = obj_val;
            var Context = data.context;
            $.ajax({
                type: ""POST"",
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, Filter: Context.Filter }),
                url: ""/PAWHSWarehouseMaster/ServiceList"",
                dataType: ""json"",
                contentType: 'application/json; charset=utf-8',
                success: function (response) {
                    debugger;
                    if (response.context != null) {
                        generate_Warehouse_list(response.context.List)
                        //listgrid(response.context.List);
                        //SetPager(response.context.Filter.out_record_count)
                    }
                    else {
                        WarehouseMasterList([]);
                    }
                },
                error: functio");
            WriteLiteral(@"n (er) {
                    alert(er)
                    console.log(er)
                }

            });
            //retrieve_WarehouseMaster_list(data);
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    function generate_Warehouse_list(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
                $(""#grid_whs_master"").empty();
                WarehouseMasterList(data);
            }
            else {
                WarehouseMasterList([]);
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
