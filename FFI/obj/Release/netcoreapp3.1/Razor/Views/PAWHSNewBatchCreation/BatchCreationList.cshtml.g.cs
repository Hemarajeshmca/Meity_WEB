#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSNewBatchCreation\BatchCreationList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "21a75fa1b941da0ee912a8491b166e7f37d0f11a"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PAWHSNewBatchCreation_BatchCreationList), @"mvc.1.0.view", @"/Views/PAWHSNewBatchCreation/BatchCreationList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"21a75fa1b941da0ee912a8491b166e7f37d0f11a", @"/Views/PAWHSNewBatchCreation/BatchCreationList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_PAWHSNewBatchCreation_BatchCreationList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_NEWPAWHS_BATCHCRTList"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSNewBatchCreation\BatchCreationList.cshtml"
  
    ViewBag.List = "Batch Creation List";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "21a75fa1b941da0ee912a8491b166e7f37d0f11a5767", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"gd_FPOREG\">\r\n                <div id=\"BATCHCRTGrid\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "21a75fa1b941da0ee912a8491b166e7f37d0f11a7537", async() => {
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
            WriteLiteral(@"


<script>
    var menuId = """";
    var permission = """";
    $(document).ready(function () {
        $(""#divEdit"").hide();
        $(""#btn_Edit"").hide();
        $("".adv_filter"").attr(""hdrtitle"", ""Batch Creation List"");
        $("".adv_filter"").attr(""fltid"", ""batchcreation"");
        $("".Export"").attr(""hdrtitle"", ""Batch Creation List"");
        $("".Export"").attr(""SubTreeId"", ""Batch Creation Listt"");
        list_grid_id = ""BATCHCRTGrid"";
        Screen_Id = ""PWNEWBATCHCRT"";
        permission = sec_Permission(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        filterhover();
        listpageloadfetch()
    });
</script>

<script>
    function listpageloadfetch() {
        debugger;
        try {
            var formval = form_Serialize(""frm_NEWPAWHS_BATCHCRTList"");
            var obj_val = JSON.parse(formval);
            obj_val.FilterBy_Option = ""ALL"";
            obj_val.FilterBy_Code = ""."";
            if (getlocal");
            WriteLiteral(@"Storage('flt_condition') != undefined && getlocalStorage('flt_condition') != """") {
                obj_val.FilterBy_FromValue = getlocalStorage('flt_condition');
            }
            else {
                obj_val.FilterBy_FromValue = ""."";
            }
            obj_val.FilterBy_ToValue = ""."";
            var data = {};
            data.context = WebAPIProxy.getContext();
            data.context.Filter = obj_val;
            var Context = data.context;
            $.ajax({
                type: ""POST"",
                url: '/PAWHSNewBatchCreation/NewBatchCreationList',
                dataType: 'json',
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, FilterBy_Option: Context.Filter.FilterBy_Option, FilterBy_Code: Context.Filter.FilterBy_Code, FilterBy_Fromvalue: Context.Filter.FilterBy_FromValue, FilterBy_ToValue: Context.Filter.FilterBy_ToValue }),
                contentType: 'application/json;");
            WriteLiteral(@" charset=utf-8',
                success: function (response) {
                    debugger;
                    if (response.BatchList != null) {
                        generate_buyer_list(response.BatchList);
                    }
                    else {
                        BATCHCRTGrid([]);
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
    function BATCHCRTGrid(data) {
        try {
            $.each(data, function (index, value) {
                var flag = false;
                $.each(status_Priority, function (sindex, svalue) {
                    if (svalue == value.status_desc) {
                        flag = true;
                    }
                });
                if (flag == fals");
            WriteLiteral(@"e) {
                    status_Priority.push(value.status_desc);
                }
            });
            $(""#BATCHCRTGrid"").kendoGrid(
                {
                    excel: {
                        fileName: ""PAWHS Batch Creation.xlsx"",
                        filterable: true,
                        allPages: false
                    },
                    dataSource: {
                        data: data,
                        pageSize: 20,
                        change: function (e) {
                            setTimeout(function () {
                                var gd = $(""#BATCHCRTGrid"").data(""kendoGrid"");
                                filter_row(gd);
                                $('.k-i-close').css('display', 'none');
                                $('button.k-button-icon').css('display', 'none');
                                $('#BATCHCRTGrid .k-input').prop('disabled', false);
                                $('#BATCHCRTGrid .k-input').prop('readon");
            WriteLiteral(@"ly', true);
                            }, 1);
                        },
                    },
                    toolbar: ""<button type= 'button' id = 'Exportclick' class = 'k-grid-excel' style = 'display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
                    excelExport: function (e) {
                        debugger;

                        //Mohan Changes 07-11-2020
                        var gd = $(""#BATCHCRTGrid"").data(""kendoGrid"");
                        var gd_fi = $(""#BATCHCRTGrid"").data(""kendoGrid"").dataSource;

                        var filters = gd_fi.filter();
                        var allData = gd_fi.data();
                        var query = new kendo.data.Query(allData);
                        var data = query.filter(filters).data;
                        var data_tt = gd.dataSource.data();


                        var sheet = e.workbook.sheets[0];
                        var gridColumn");
            WriteLiteral(@"s = gd.columns;

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
                                if (typeof (fieldName) === ""undefined"") {
                        ");
            WriteLiteral(@"            var cellValue = data[i][gridColumns[j].field];
                                    rowCells.push({ value: cellValue });
                                }
                            }
                            rows.push({ cells: rowCells, type: ""data"" });
                        }

                        sheet.rows = rows;

                        return false;
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
                    filterable:true,
                    columns: [
                       
                        {
             ");
            WriteLiteral(@"               field: ""Out_agg_code"",
                            title: ""Agg Code"", 
                            hidden: true,

                        },
                        {
                            field: ""Out_batch_no"",
                            title: ""Batch No"",
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
                            field: ""Out_batch_date"",
                            title: ""Batch Date"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
  ");
            WriteLiteral(@"                                      contains: ""Contains""
                                    }
                                }
                            },
                            width: 110,
                        },
                        {
                            field: ""Out_buyer_name"",
                            title: ""Buyer Name"",
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
                            field: ""Out_Vehicle_no"",
                            title: ""Vehicle No"",
                            filterable: {
                                extra: false,
             ");
            WriteLiteral(@"                   operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 120,
                        }
                       
                    ]

                });
            $("".k-dropdown-operator"").css('display', 'none');
            $(""#BATCHCRTGrid .k-input"").attr('disabled', 'false');
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
            var grid = $(""#BATCHCRTGrid"").data(""kendoGrid"");
            var selectedItem = grid.dataItem(grid.select());
       ");
            WriteLiteral(@"     setlocalStorage(""ls_pageList"", selectedItem);
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
        location.href = ""../PAWHSNewBatchCreation/BatchCreationNewV3"";
    });
    function getSerializedSelectedRows(mode) {
        debugger;
        try {
            if (getlocalStorage(""ls_pageList"") != undefined) {
                var items = getlocalStorage(""ls_pageList"");
                if (items.length == 0) {
                    kendoAlert(""Please select records"");
                }
                else {
                    if (mode == ""edit"") {
                        btn_onClick('Edit');
                        loca");
            WriteLiteral(@"tion.href = ""../PAWHSNewBatchCreation/BatchCreationNewV3"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
                        location.href = ""../PAWHSNewBatchCreation/BatchCreationNewV3"";
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
    function generate_buyer_list(res) {
        debugger;
        if (res != null) {
            var data = changedataType(res);
            BATCHCRTGrid(data);
        }
        else {
            BATCHCRTGrid([]);
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
