#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Checklist_DefinitionNew\Checklist_DefinitionNew_List.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "05040baa4eb094c1e9deb1a5b14aeef997737dd6"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Checklist_DefinitionNew_Checklist_DefinitionNew_List), @"mvc.1.0.view", @"/Views/Checklist_DefinitionNew/Checklist_DefinitionNew_List.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"05040baa4eb094c1e9deb1a5b14aeef997737dd6", @"/Views/Checklist_DefinitionNew/Checklist_DefinitionNew_List.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_Checklist_DefinitionNew_Checklist_DefinitionNew_List : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_chklist_form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 2 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Checklist_DefinitionNew\Checklist_DefinitionNew_List.cshtml"
  
    ViewBag.List = "Checklist Definition";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "05040baa4eb094c1e9deb1a5b14aeef997737dd65341", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"gd_chklist\">\r\n                <div id=\"chklist_Grid\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            WriteLiteral(@"

    <script>
        click_act_name = ""Checklist_DefinitionNew"";
        click_ctrl_name = ""Checklist_DefinitionNew"";
        form_list_url = '../' + click_ctrl_name + '/' + click_act_name;
    </script>

<script>
    var menuId = """";
    var permission = """";
    $(document).ready(function () {

        $("".adv_filter"").attr(""hdrtitle"", ""Checklist Definition List Record"");
        $("".adv_filter"").attr(""fltid"", """");
        $("".Export"").attr(""hdrtitle"", ""Checklist Definition List"");
        $("".Export"").attr(""SubTreeId"", ""CHKLIST"");

        Screen_Id = ""CHKLIST"";
        permission = sec_Permission(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
    });
</script>

    <script>
        function listpageloadfetch() {
            try {
                var formval = form_Serialize(""frm_chklist_form"");
                var obj_val = JSON.parse(formval);
                obj_val.FilterBy_Option = ""ALL"";
                obj_val.Fi");
            WriteLiteral(@"lterBy_Code = ""."";
                if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') != """") {
                    obj_val.FilterBy_Fromvalue = getlocalStorage('flt_condition');
                }
                else {
                    obj_val.FilterBy_Fromvalue = ""."";
                }
                obj_val.FilterBy_Tovalue = ""."";


                var data = {};
                data.context = WebAPIProxy.getContext();;
                data.context.Filter = obj_val;
                retrieve_bank_list(data);               
            }
            catch (err) {
                javascript_log4j_root(arguments.callee.name, err);
            }
        }


        var status_Priority = [];
        function chklistgrid(data) {
            try {
                $.each(data, function (index, value) {
                    var flag = false;
                    $.each(status_Priority, function (sindex, svalue) {
                        if (svalue == val");
            WriteLiteral(@"ue.status_desc) {
                            flag = true;
                        }
                    });
                    if (flag == false) {
                        status_Priority.push(value.status_desc);
                    }
                });
        $(""#chklist_Grid"").kendoGrid(
            {
                dataSource: {
                    data: data,
                    pageSize: 20,
                    change: function (e) {
                        setTimeout(function () {
                            var gd = $(""#chklist_Grid"").data(""kendoGrid"");
                            filter_row(gd);
                            $('.k-i-close').css('display', 'none');
                            $('button.k-button-icon').css('display', 'none');
                            $('#chklist_Grid .k-input').prop('disabled', false);
                            $('#chklist_Grid .k-input').prop('readonly', true);
                        }, 1);
                    },
                },
    ");
            WriteLiteral(@"            toolbar: ""<button type='button' id='Exportclick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
                excelExport: function (e) {
                    var gd = $(""#chklist_Grid"").data(""kendoGrid"");
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
         ");
            WriteLiteral(@"           }
                    gd.dataSource.pageSize('10');
                    return false;
                },
                filterable: {
                    enabled: true,
                    delay: 1500,
                    mode: ""menu, row"",
                    height: 200,
                    click: function (e) {
                        var gd = $(""#chklist_Grid"").data(""kendoGrid"");
                        filter_row(gd);
                    }
                },
                filterMenuInit: function (e) {
                    var gd = $(""#chklist_Grid"").data(""kendoGrid"");
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
");
            WriteLiteral(@"                navigatable: true,
                groupable: false,
                columns: [
                      
                    {
                        field: ""activity_screen"",
                        title: ""Activity/Screen Name"",
                        filterable: {
                            cell: {
                                operator: ""contains"",
                                inputWidth: 1500
                            }
                        }
                    },
                    {
                        field: ""created_date"",
                        title: ""Created Date"",
                        filterable: {
                            cell: {
                                operator: ""contains"",
                                inputWidth: 1500
                            }
                        }
                    },
                    {
                        field: ""checklist_version"",
                        title: ""Checklist Version""");
            WriteLiteral(@",
                        filterable: {
                            cell: {
                                operator: ""contains"",
                                inputWidth: 1500
                            }
                        }
                    },
                {
                    field: ""status"",
                    title: ""Status"",
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
        $(""#chklist_Grid .k-input"").attr('disabled', 'false');
    }
    catch (err) {
        javascript_log4j_root(arguments.callee.name, err);
    }
}
function selectRow() {
    try {
        var grid = $(""#chklist_Grid"").data(""kendoGrid"");
        var selectedItem = grid.dataItem(grid.select());
        setlocal");
            WriteLiteral(@"Storage(""ls_pageList"", selectedItem);
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
        location.href = ""../Checklist_DefinitionNew/Checklist_DefinitionNew"";
    });

    function getSerializedSelectedRows(mode) {
        try {
            if (getlocalStorage(""ls_pageList"") != undefined) {
                var items = getlocalStorage(""ls_pageList"");
                if (items.length == 0) {
                    kendoAlert(""Please select records");
            WriteLiteral(@""");
                }
                else {
                    if (mode == ""edit"") {
                        btn_onClick('Edit');
                        location.href = ""../Checklist_DefinitionNew/Checklist_DefinitionNew"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
                        location.href = ""../Checklist_DefinitionNew/Checklist_DefinitionNew"";
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
    function generate_bank_list(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
                $(""#gd_chklist"").empty();
                $(""#gd_chklist"").append(""<div id='chklist_Grid'></div>"");
                listgrid(data);


            }
            else {
                listgrid([]);
            }
        }
   ");
            WriteLiteral(@"     catch (err) {
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
