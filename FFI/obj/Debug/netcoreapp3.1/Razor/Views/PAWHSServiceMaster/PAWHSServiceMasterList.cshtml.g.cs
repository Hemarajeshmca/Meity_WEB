#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSServiceMaster\PAWHSServiceMasterList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "7aa2e1d3eee0c795a84922714e8477ad1428a594"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PAWHSServiceMaster_PAWHSServiceMasterList), @"mvc.1.0.view", @"/Views/PAWHSServiceMaster/PAWHSServiceMasterList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"7aa2e1d3eee0c795a84922714e8477ad1428a594", @"/Views/PAWHSServiceMaster/PAWHSServiceMasterList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_PAWHSServiceMaster_PAWHSServiceMasterList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_servicemaster_list"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PAWHS_getServiceMaster_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PAWHS_getServiceMasterList_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PAWHS_saveServiceMaster_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Service_Master_PAWHS_getServiceMaster_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Service_Master_PAWHS_getServiceMasterList_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_9 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Service_Master_PAWHS_saveServiceMaster_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_10 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PAWHSServiceMaster.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_11 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_12 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/ExportExcel.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_13 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/Common_func.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSServiceMaster\PAWHSServiceMasterList.cshtml"
  
    ViewBag.List = "Service Master";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7aa2e1d3eee0c795a84922714e8477ad1428a5949249", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"gd_Service\">\r\n                <div id=\"Service_grid\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7aa2e1d3eee0c795a84922714e8477ad1428a59411024", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7aa2e1d3eee0c795a84922714e8477ad1428a59412064", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7aa2e1d3eee0c795a84922714e8477ad1428a59413104", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7aa2e1d3eee0c795a84922714e8477ad1428a59414144", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7aa2e1d3eee0c795a84922714e8477ad1428a59415184", async() => {
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
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7aa2e1d3eee0c795a84922714e8477ad1428a59416224", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_9);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7aa2e1d3eee0c795a84922714e8477ad1428a59417264", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_10);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7aa2e1d3eee0c795a84922714e8477ad1428a59418305", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_11);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7aa2e1d3eee0c795a84922714e8477ad1428a59419346", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_12);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "7aa2e1d3eee0c795a84922714e8477ad1428a59420387", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_13);
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
        $("".adv_filter"").attr(""hdrtitle"", ""Service Master List Record"");
        $("".adv_filter"").attr(""fltid"", ""ServiceMas"");
        $("".Export"").attr(""hdrtitle"", ""Service Master List"");
        $("".Export"").attr(""SubTreeId"", ""PWSERMAS"");
        list_grid_id = ""Service_grid"";

        listpageloadfetch();

        Screen_Id = ""PWSERMAS"";
        permission = sec_Permission(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        filterhover();
    });
</script>

<script>
    var status_Priority = [];
    function Servicegrid(data) {
        try {
            $.each(data, function (index, value) {
                var flag = false;
                $.each(status_Priority, function (sindex, svalue) {
                    if (svalue == value.status_desc) {
                        flag = true;
                    }
                });
   ");
            WriteLiteral(@"             if (flag == false) {
                    status_Priority.push(value.status_desc);
                }
            });
            $(""#Service_grid"").kendoGrid(
                {
                    excel: {
                        fileName: ""Service Master.xlsx"",
                        filterable: true,
                        allPages: false
                    },
                    dataSource: {
                        data: data,
                        pageSize: 20,
                        change: function (e) {
                            setTimeout(function () {
                                var gd = $(""#Service_grid"").data(""kendoGrid"");
                                filter_row(gd);
                                $('.k-i-close').css('display', 'none');
                                $('button.k-button-icon').css('display', 'none');
                                $('#Service_grid .k-input').prop('disabled', false);
                                $('#Service_grid ");
            WriteLiteral(@".k-input').prop('readonly', true);

                            }, 1);
                        },
                    },
                    toolbar: ""<button type='button' id='Exportclick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
                    excelExport: function (e) {
                        debugger;
                        var gd = $(""#Service_grid"").data(""kendoGrid"");
                        var gd_fi = $(""#Service_grid"").data(""kendoGrid"").dataSource;

                        var filters = gd_fi.filter();
                        var allData = gd_fi.data();
                        var query = new kendo.data.Query(allData);
                        var data = query.filter(filters).data;
                        var data_tt = gd.dataSource.data();


                        var sheet = e.workbook.sheets[0];
                        var gridColumns = gd.columns;

                 ");
            WriteLiteral(@"       var columns = gridColumns.map(function (col) {
                            var hidden_vl = col.hidden;
                            if (typeof (hidden_vl) == ""undefined"") {
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
                                    var cel");
            WriteLiteral(@"lValue = data[i][gridColumns[j].field];
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
                            var gd = $(""#Service_grid"").data(""kendoGrid"");
                            filter_row(gd);
                        }
                    },
                    filterMenuInit: function (e) {
                        var gd = $(""#Service_grid"").data(""kendoGrid"");
                        filter_row(gd);
                    },
                    chang");
            WriteLiteral(@"e: selectRow,
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
                            field: ""Out_service_code"",
                            title: ""Service Code"",
                            filterable: {
                                cell: {
                                    operator: ""contains"",
                                    inputWidth: 1500
                                }
                            }
                        },
                          {
                              field: ""Out_service_name"",
                            ");
            WriteLiteral(@"  title: ""Service Name"",
                              filterable: {
                                  cell: {
                                      operator: ""contains"",
                                      inputWidth: 1500
                                  }
                              }
                          },
                        
                           {
                               field: ""Out_rate"",
                               title: ""Rate"",
                               attributes: { style: ""text-align:right;"" },
                               editor: function (container, options) {
                                   numeric_editor(container, options.field, '50', '0');
                               },
                               filterable: {
                                   cell: {
                                       operator: ""contains"",
                                       inputWidth: 1500
                                   }
                    ");
            WriteLiteral(@"           }
                           },
                           {
                               field: ""Out_hsn_code"",
                               title: ""HSN Code"",
                           },
                          {
                              field: ""Out_hsn_description"",
                              title: ""HSN Description"",
                          },
                        {
                            field: ""Out_service_rowid"",
                            title: ""service_rowid"",
                            width: 1,
                            hidden: true,
                        },
                          {
                              field: ""Out_agg_code"",
                              title: ""agg_code"",
                              width: 1,
                              hidden: true,
                          },

                          {
                              field: ""Out_service_ll_name"",
                              title: ""service_l");
            WriteLiteral(@"l_name"",
                              width: 1,
                              hidden: true,
                          },
                          {
                              field: ""Out_status_code"",
                              title: ""status_code"",
                              hidden: true,
                          },
                          {
                              field: ""Out_status_desc"",
                              title: ""status_desc"",
                              width: 1,
                              hidden: true,
                          },
                          {
                              field: ""Out_row_timestamp"",
                              title: ""row_timestamp"",
                              width: 1,
                              hidden: true,
                          },
                    ]

                });
            $("".k-dropdown-operator"").css('display', 'none');
            $(""#Service_grid .k-input"").attr('disabled', 'fal");
            WriteLiteral(@"se');
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
            var grid = $(""#Service_grid"").data(""kendoGrid"");
            var selectedItem = grid.dataItem(grid.select());
            setlocalStorage(""ls_pageList"", selectedItem);
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    function listpageloadfetch() {
        try {
            var formval = form_Serialize(""Service_Master"");
            var obj_val = JSON.parse(formval);
            obj_val.FilterBy_Option = ""ALL"";
            obj_val.FilterBy_Code = ""."";
            if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_conditi");
            WriteLiteral(@"on') != """") {
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
            //Service Master List Loaded 19-05-2020
            $.ajax({
                type: ""POST"",
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, FilterBy_Option: Context.Filter.FilterBy_Option, FilterBy_Code: Context.Filter.FilterBy_Code, FilterBy_Fromvalue: Context.Filter.FilterBy_FromValue, FilterBy_ToValue: Context.Filter.FilterBy_ToValue }),
                url: ""/PAWHSServiceMaster/GetServiceMasterlist/"",
                dataType: ""json"",
                contentType: 'application/json; charset=utf-8'");
            WriteLiteral(@",
                success: function (response) {
                    debugger;
                    if (response.context != null) {
                        debugger;
                        generate_ServiceMaster_list(response.context.List);
                    }
                    else {
                        Servicegrid([]);
                    }
                },
                error: function (er) {
                    alert(er);
                    console.log(er);
                }
            })


            //Service Master List End 


           // retrieve_ServiceMaster_list(data);
            //setlocalStorage('flt_condition', """");
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
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

  ");
            WriteLiteral(@"  $(""#btn_new"").bind(""click"", function () {
        btn_onClick('Create');
        location.href = ""../PAWHSServiceMaster/PAWHSServiceMasterForm"";

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
                        location.href = ""../PAWHSServiceMaster/PAWHSServiceMasterForm"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
                        location.href = ""../PAWHSServiceMaster/PAWHSServiceMasterForm"";

                    }
                }
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.");
            WriteLiteral(@"name, err);
        }
    }
</script>

<script>
    function generate_ServiceMaster_list(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
                $(""#gd_Service"").empty();
                $(""#gd_Service"").append(""<div id='Service_grid'></div>"");
                Servicegrid(data);
            }
            else {
                Servicegrid([]);
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