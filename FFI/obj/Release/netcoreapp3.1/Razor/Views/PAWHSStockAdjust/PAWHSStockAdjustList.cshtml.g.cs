#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSStockAdjust\PAWHSStockAdjustList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "f47778a04714c077d3f88fa6bffd600ab28cb1a3"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PAWHSStockAdjust_PAWHSStockAdjustList), @"mvc.1.0.view", @"/Views/PAWHSStockAdjust/PAWHSStockAdjustList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f47778a04714c077d3f88fa6bffd600ab28cb1a3", @"/Views/PAWHSStockAdjust/PAWHSStockAdjustList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_PAWHSStockAdjust_PAWHSStockAdjustList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_productAdj_master"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/stockAdjustment_master_getStockAdjustmentList_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/getStockAdjustmentList_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/StockAdjustment.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            WriteLiteral("\r\n");
#nullable restore
#line 2 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSStockAdjust\PAWHSStockAdjustList.cshtml"
  
    ViewBag.List = "Stock Adjustment List";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "f47778a04714c077d3f88fa6bffd600ab28cb1a36986", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"gd_stockadj\">\r\n                <div id=\"stockadj_grid\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "f47778a04714c077d3f88fa6bffd600ab28cb1a38783", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "f47778a04714c077d3f88fa6bffd600ab28cb1a39822", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "f47778a04714c077d3f88fa6bffd600ab28cb1a310861", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "f47778a04714c077d3f88fa6bffd600ab28cb1a311901", async() => {
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
        $("".Export"").attr(""SubTreeId"", ""PWNEWPROADJ"");
        $("".adv_filter"").attr(""hdrtitle"", ""Stock Adjustment"");
        $("".adv_filter"").attr(""fltid"", ""StockAdjustment"");
        $("".Export"").attr(""hdrtitle"", ""Stock Adjustment"");
        list_grid_id = ""stockadj_grid"";
        Screen_Id = ""PWNEWPROADJ"";
        permission = sec_Permission(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        filterhover();
    });
</script>
<script>
    function listpageloadfetch() {
        debugger;
        try {
            var formval = form_Serialize(""frm_productAdj_master"");
            var obj_val = JSON.parse(formval);
            obj_val.FilterBy_Option = ""ALL"";
            obj_val.FilterBy_Code = ""."";
            if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') != """") {
                obj_val.Filter");
            WriteLiteral(@"By_Fromvalue = getlocalStorage('flt_condition');
            }
            else {
                obj_val.FilterBy_Fromvalue = ""."";
            }
            obj_val.FilterBy_Tovalue = ""."";


            var data = {};
            data.context = WebAPIProxy.getContext();;
            data.context.Filter = obj_val;

            //Stock Adjsutment List Loaded start 22-05-2020
            var Context = data.context;
            $.ajax({
                type: ""POST"",
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, filterby_option: Context.Filter.FilterBy_Option, filterby_code: Context.Filter.FilterBy_Code, filterby_fromvalue: Context.Filter.FilterBy_Fromvalue, filterby_tovalue: Context.Filter.FilterBy_Tovalue }),
                url: ""/ProductAdj/fetchstockadjustmentlist"",
                dataType: ""json"",
                contentType: 'application/json; charset-utf-8;',
                success: function ");
            WriteLiteral(@"(response) {
                    debugger;
                    if (response.context != null) {
                        debugger;
                        generate_StockAdjustment_list(response.context.List);
                    }
                    else {
                        stadjgrid([]);
                    }
                },
                error: function (er) {
                    alert(er);
                    console.log(er);
                }
            });

            //Stock Adjsutment List Loaded End 22-05-2020

           // retrieve_StockAdjustment_list(data);
            // setlocalStorage('flt_condition', """");
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err.message);
        }
    }
    var status_Priority = [];
    function stadjgrid(data) {
        try {
            $.each(data, function (index, value) {
                var flag = false;
                $.each(status_Priority, function (sindex, svalue) {
     ");
            WriteLiteral(@"               if (svalue == value.status_desc) {
                        flag = true;
                    }
                });
                if (flag == false) {
                    status_Priority.push(value.status_desc);
                }
            });
    $(""#stockadj_grid"").kendoGrid(
        {
            dataSource: {
                data: data,
                pageSize: 20,
                change: function (e) {
                    setTimeout(function () {
                        var gd = $(""#stockadj_grid"").data(""kendoGrid"");
                        filter_row(gd);
                        $('.k-i-close').css('display', 'none');
                        $('button.k-button-icon').css('display', 'none');
                        $('#stockadj_grid .k-input').prop('disabled', false);
                        $('#stockadj_grid .k-input').prop('readonly', true);

                    }, 1);
                },
            },
            toolbar: ""<button type='button' id='Exportclic");
            WriteLiteral(@"k' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
            excelExport: function (e) {
                var gd = $(""#stockadj_grid"").data(""kendoGrid"");
                var len = gd.dataSource._data.length;
                var chkall = $('#chkall').is(':checked');
                var chkfilter = $('#chkfilter').is(':checked');
                var chktemp = $('#chktemp').is(':checked');
                var twokendobox = true;
                gd.dataSource.pageSize(len);
                if (e.sender.dataSource._data.length == len) {
                    twokendobox = false;
                    exportfunction(e, chkall, chkfilter, chktemp, twokendobox, gd);
                }
                else {
                    exportfunction(e, chkall, chkfilter, chktemp, twokendobox, gd);
                }
                gd.dataSource.pageSize('10');
                return false;
            },
         ");
            WriteLiteral(@"   filterable: {
                enabled: true,
                delay: 1500,
                mode: ""menu, row"",
                height: 200,
                click: function (e) {
                    var gd = $(""#stockadj_grid"").data(""kendoGrid"");
                    filter_row(gd);
                }
            },
            filterMenuInit: function (e) {
                var gd = $(""#stockadj_grid"").data(""kendoGrid"");
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
                    field: ""Out_adjustment_rowid"",
                      title: ""adjustment_rowid"",
             ");
            WriteLiteral(@"         hidden: true,
                  },
                    {
                        field: ""Out_ic_code"",
                        title: ""Input Centre Code"",
                        hidden: true,
                    },
                {
                    field: ""Out_ic_name"",
                    title: ""Input Centre Name"",

                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    }
                },
                 {
                     field: ""Out_adjustment_no"",
                     title: ""Adjustment No"",
                     filterable: {
                         cell: {
                             operator: ""contains"",
                             inputWidth: 1500
                         }
                     }
                 },
                 {
                     field: ""Out_adjustment_date"",
              ");
            WriteLiteral(@"       title: ""Adjustment Date"",
                     //template: ""#= kendo.toString(kendo.parseDate(Adjustment Date, 'yyyy-MM-dd'), 'MM/dd/yyyy') #"",
                     filterable: {
                         cell: {
                             operator: ""contains"",
                             inputWidth: 1500
                         }
                     }

                 },

                 {
                     field: ""Out_status_code"",
                     title: ""Status Code"",
                     hidden: true,
                 },
                 {
                     field: ""Out_status_desc"",
                     title: ""Status Description"",
                     hidden: true,
                 },
                  //{
                  //    field: ""product_category"",
                  //    title: ""Product Category"",
                  //    filterable: {
                  //        cell: {
                  //            operator: ""contains"",
                  //  ");
            WriteLiteral(@"          inputWidth: 1500
                  //        }
                  //    },
                  //},
                  //{
                  //    field: ""product_sub_category"",
                  //    title: ""Product Sub-Category"",
                  //    filterable: {
                  //        cell: {
                  //            operator: ""contains"",
                  //            inputWidth: 1500
                  //        }
                  //    }
                  //},
            ]

        });

        $("".k-dropdown-operator"").css('display', 'none');
        $(""#stockadj_grid .k-input"").attr('disabled', 'false');
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
 ");
            WriteLiteral(@"       try {
            var grid = $(""#stockadj_grid"").data(""kendoGrid"");
            var selectedItem = grid.dataItem(grid.select());
            setlocalStorage(""ls_pageList"", selectedItem);
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

    $(""#btn_new"").bind(""click"", function () {
        btn_onClick('Create');
        location.href = ""../ProductAdj/ProductAdjustmentForm"";
    });

    function getSerializedSelectedRows(mode) {
        try {
            if (getlocalStorage(""ls_pageList"") != undefined) {
                var items = getlocalStorage(""ls_pageList"");
                if (items.length == 0) {
                    kendoAlert(""Please select records"");
                }
                else {");
            WriteLiteral(@"
                    if (mode == ""edit"") {
                        btn_onClick('Edit');
                        location.href = ""../ProductAdj/ProductAdjustmentForm"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
                        location.href = ""../ProductAdj/ProductAdjustmentForm"";
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
    function generate_StockAdjustment_list(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
                $(""#gd_stockadj"").empty();
                $(""#gd_stockadj"").append(""<div id='stockadj_grid'></div>"");
                stadjgrid(data);
            }
            else {
                stadjgrid([]);
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.");
            WriteLiteral(@"callee.name, err);
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
