#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\DuplicateRegister\DuplicateRegister.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "57bb9fde612baa27628ecc538db2f58ffd17a0b3"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_DuplicateRegister_DuplicateRegister), @"mvc.1.0.view", @"/Views/DuplicateRegister/DuplicateRegister.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"57bb9fde612baa27628ecc538db2f58ffd17a0b3", @"/Views/DuplicateRegister/DuplicateRegister.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_DuplicateRegister_DuplicateRegister : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("DuplicateRegister"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/DuplicateRegister.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\DuplicateRegister\DuplicateRegister.cshtml"
  
    ViewBag.List = "Duplicate Register";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "57bb9fde612baa27628ecc538db2f58ffd17a0b36145", async() => {
                WriteLiteral("\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"gd_dupReg\">\r\n                <div id=\"DupReg_grid\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "57bb9fde612baa27628ecc538db2f58ffd17a0b37922", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "57bb9fde612baa27628ecc538db2f58ffd17a0b38961", async() => {
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
            WriteLiteral(@"

<script>
    var menuId = """";
    var permission = """";
    $(document).ready(function () {

        kendodate_format();
        $("".adv_filter"").attr(""hdrtitle"", ""Duplicate Register"");
        $("".adv_filter"").attr(""fltid"", ""register"");
        $("".Export"").attr(""hdrtitle"", ""Duplicate Register List"");
        $("".Export"").attr(""SubTreeId"", ""SRVDUPREG"");
        Screen_Id = ""SRVDUPREG"";
        permission = sec_Permission(Screen_Id);
        //page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        $(""#RI"").hide();
        $(""#FPO"").hide();
        listpageloadfetch();
    });
</script>
<script>
    function listpageloadfetch() {
        try {
            var formval = form_Serialize(""DuplicateRegister"");
            var obj_val = JSON.parse(formval);
            obj_val.FilterBy_Option = ""QCD_SHA_DUP_REG"";
            obj_val.FilterBy_Code = ""."";
            if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') !=");
            WriteLiteral(@" """") {
                obj_val.FilterBy_Fromvalue = getlocalStorage('flt_condition');
            }
            else {
                obj_val.FilterBy_Fromvalue = ""."";
            }
            obj_val.FilterBy_Tovalue = ""."";


            var data = {};
            data.context = WebAPIProxy.getContext();;
            data.context.Filter = obj_val;
            var Context = data.context;
            $.ajax({
                type: ""POST"",
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, filterby_option: Context.Filter.FilterBy_Option, filterby_code: Context.Filter.FilterBy_Code, filterby_fromvalue: Context.Filter.FilterBy_Fromvalue, filterby_tovalue: Context.Filter.FilterBy_Tovalue }),
                url: ""/DuplicateRegister/AllServiceList"",
                dataType: ""json"",
                contentType: 'application/json; charset=utf-8',
                success: function (response) {
               ");
            WriteLiteral(@"     debugger;
                    if (response.context != null) {
                        generate_DuplicateRegister_list(response.context.List)
                        //listgrid(response.context.List);
                        //SetPager(response.context.Filter.out_record_count)
                    }
                    else {
                        listgrid([]);
                    }
                },
                error: function (er) {
                    alert(er)
                    console.log(er)
                }

            });
            //retrieve_DuplicateRegister_list(data);          
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    var status_Priority = [];
    function DupRegGrid(data) {
        try {
            $.each(data, function (index, value) {
                var flag = false;
                $.each(status_Priority, function (sindex, svalue) {
                    if (svalue == value.s");
            WriteLiteral(@"tatus_desc) {
                        flag = true;
                    }
                });
                if (flag == false) {
                    status_Priority.push(value.status_desc);
                }
            });
            $(""#DupReg_grid"").kendoGrid(
                {
                    dataSource: {
                        data: data,
                        pageSize: 20,
                        change: function (e) {
                            setTimeout(function () {
                                var gd = $(""#DupReg_grid"").data(""kendoGrid"");
                                filter_row(gd);
                                $('.k-i-close').css('display', 'none');
                                $('button.k-button-icon').css('display', 'none');
                                $('#DupReg_grid .k-input').prop('disabled', false);
                                $('#DupReg_grid .k-input').prop('readonly', true);
                            }, 1);
                        },
");
            WriteLiteral(@"                    },
                    toolbar: ""<button type='button' id='Exportclick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
                    excelExport: function (e) {
                        var gd = $(""#DupReg_grid"").data(""kendoGrid"");
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
               ");
            WriteLiteral(@"             exportfunction(e, chkall, chkfilter, chktemp, twokendobox, gd);
                        }
                        gd.dataSource.pageSize('10');
                        return false;
                    },
                    filterable: {
                        enabled: true,
                        delay: 1500,
                        mode: ""menu, row"",
                        height: 200,
                        click: function (e) {
                            var gd = $(""#DupReg_grid"").data(""kendoGrid"");
                            filter_row(gd);
                        }
                    },
                    filterMenuInit: function (e) {
                        var gd = $(""#DupReg_grid"").data(""kendoGrid"");
                        filter_row(gd);
                    },
                    change: selectRow,
                    height: 450,
                    sortable: true,
                    selectable: true,
                    selectable: ""singl"",   //  Gri");
            WriteLiteral(@"d Row Selection
                    pageable: {
                        refresh: false,
                        pageSizes: true,
                        buttonCount: 5
                    },
                    navigatable: true,
                    groupable: false,
                    columns: [
                         {
                            field: ""Out_register_rowid"",
                             title: ""register_rowid"",
                             width: 1,
                             hidden: true,
                         },
                         {
                             field: ""Out_fpoorgn_code"",
                             title: ""fpoorgn_code"",
                             width: 1,
                             hidden: true,
                         },
                    {
                        field: ""Out_register_no"",
                        title: ""Report ID"",
                        filterable: {
                            cell: {
                ");
            WriteLiteral(@"                operator: ""contains"",
                                inputWidth: 1500
                            }
                        },
                        width: 150

                    },
                    {
                        field: ""Out_register_type_code"",
                        title: ""register_type_code"",
                        width: 1,
                        hidden: true,
                    },
                    {
                        field: ""Out_register_type_desc"",
                        title: ""Report Name"",
                        filterable: {
                            cell: {
                                operator: ""contains"",
                                inputWidth: 1500
                            }
                        },
                        width: 150

                    },
                    {
                        field: ""Out_register_date"",
                        title: ""Report Date"",
                        filt");
            WriteLiteral(@"erable: {
                            cell: {
                                operator: ""contains"",
                                inputWidth: 1500
                            }
                        },
                        width: 150

                    },
                     {
                         field: ""Out_status_code"",
                         title: ""STATUS Id"",
                         width: 1,
                         hidden: true,
                     },
                    {
                        field: ""Out_status_desc"",
                        title: ""Status"",
                        filterable: {
                            cell: {
                                operator: ""contains"",
                                inputWidth: 1500
                            }
                        },
                        width: 150

                    }
                    ],
                    editable: false
                });
            $("".k-dropdown-o");
            WriteLiteral(@"perator"").css('display', 'none');
            $(""#DupReg_grid .k-input"").attr('disabled', 'false');
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }


    function selectRow() {
        var grid = $(""#DupReg_grid"").data(""kendoGrid"");
        var selectedItem = grid.dataItem(grid.select());
        setlocalStorage(""ls_pageList"", selectedItem);
    }

    function statusFilter(element) {    // Dropdown list functionality
        element.kendoDropDownList({
            dataSource: status_Priority,
            optionLabel: ""--Select Value--""
        });
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
        location.href = ""../DuplicateRegister/DuplicateRegisterform"";
    ");
            WriteLiteral(@"});
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
                        location.href = ""../DuplicateRegister/DuplicateRegisterform"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
                        location.href = ""../DuplicateRegister/DuplicateRegisterform"";
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
    function generate_DuplicateRegister_list(res) {
        try {
            if (res != null) {
            ");
            WriteLiteral(@"    var data = changedataType(res);
                $(""#gd_dupReg"").empty();
                $(""#gd_dupReg"").append(""<div id='DupReg_grid'></div>"");
                DupRegGrid(data);


            }
            else {
                DupRegGrid([]);
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