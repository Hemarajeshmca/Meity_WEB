#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\FPOListMaker\FPOListMaker.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "00a3e2838b9459d838f995054cce811d872d7228"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_FPOListMaker_FPOListMaker), @"mvc.1.0.view", @"/Views/FPOListMaker/FPOListMaker.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"00a3e2838b9459d838f995054cce811d872d7228", @"/Views/FPOListMaker/FPOListMaker.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_FPOListMaker_FPOListMaker : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_fpo_reg"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\FPOListMaker\FPOListMaker.cshtml"
  
    ViewBag.List = "FPO Registration";
    //ViewBag.helpName = "FarmerRegistration.html";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "00a3e2838b9459d838f995054cce811d872d72285719", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"gd_FPOREG\">\r\n                <div id=\"FPORegGrid\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "00a3e2838b9459d838f995054cce811d872d72287487", async() => {
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
        $("".adv_filter"").attr(""hdrtitle"", ""FPO Registration List"");
        $("".adv_filter"").attr(""fltid"", ""fporeg"");
        $("".Export"").attr(""hdrtitle"", ""FPO Registration List"");
        $("".Export"").attr(""SubTreeId"", ""FPO Registration List"");
        list_grid_id = ""FPORegGrid"";
      
        Screen_Id = ""FPOREG"";
        permission = sec_Permission(Screen_Id);
        //page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        filterhover();
        $(""#FPO"").hide();
        var role = getlocalStorage(""orgn_level"")
        if (role == ""ORG_FO"") {
            debugger;
            filter_combobox(""cmb_RIBelong"", getlocalStorage(""rilist""));
            var cmb_ri1 = $(""#cmb_RIBelong"").data(""kendoComboBox"");
            cmb_ri1.value(getlocalStorage(""org_id""));
            $(""#RI"").show();
            $(""#cmb_RIBelong"").data(""kendoComboBox"").enable(false);");
            WriteLiteral(@"
            listpageloadfetch();
        }
        if (role == ""ORG_PF"") {
            debugger;
            filter_combobox(""cmb_RIBelong"", getlocalStorage(""rilist""));
            $(""#RI"").show();
            $(""#cmb_RIBelong"").data(""kendoComboBox"").enable(true);
            $(""#cmb_RIBelong"").data(""kendoComboBox"").value(""All"");
            listpageloadfetch();
        }
    });
</script>

<script>
    $(""#cmb_RIBelong"").change(function () {
        $(""#loader"").fadeIn();
        listpageloadfetch();
    });
    function listpageloadfetch() {
        try {           
            debugger;
            var formval = form_Serialize(""frm_fpo_reg"");
            var obj_val = JSON.parse(formval);
            obj_val.FilterBy_Option = ""ALL"";
            obj_val.FilterBy_Code = ""."";
            if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') != """") {
                obj_val.FilterBy_FromValue = getlocalStorage('flt_condition');
            }
       ");
            WriteLiteral(@"     else {
                obj_val.FilterBy_FromValue = ""."";
            }
            obj_val.FilterBy_ToValue = ""."";
            var data = {};
            data.context = WebAPIProxy.getContext();
            data.context.userId = $(""#cmb_RIBelong"").data(""kendoComboBox"").value();
            data.context.orgnId = $(""#cmb_RIBelong"").data(""kendoComboBox"").value();
            data.context.locnId = getlocalStorage(""User_Id_Value"");
            data.context.list = obj_val;
            var Context = data.context;
            $.ajax({
                type: ""POST"",
                url: '/FPOListMaker/FPOList',
                dataType: 'json',
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, list: Context.list }),
                contentType: 'application/json; charset=utf-8',
                success: function (response) {
                    
                    //var list = JSON.parse(response);
       ");
            WriteLiteral(@"             if (response.context.list != null) {
                        FPOReggrid(response.context.list);
                    }
                    else {
                        FPOReggrid([]);
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
    function FPOReggrid(data) {
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
            ");
            WriteLiteral(@"});
            $(""#FPORegGrid"").kendoGrid(
                {
                    dataSource: {
                        data: data,
                        pageSize: 20,
                        change: function (e) {
                            setTimeout(function () {
                                var gd = $(""#FPORegGrid"").data(""kendoGrid"");
                                filter_row(gd);
                                $('.k-i-close').css('display', 'none');
                                $('button.k-button-icon').css('display', 'none');
                                $('#FPORegGrid .k-input').prop('disabled', false);
                                $('#FPORegGrid .k-input').prop('readonly', true);
                            }, 1);
                        },
                    },
                    toolbar: ""<button type= 'button' id = 'Exportclick' class = 'k-grid-excel' style = 'display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</spa");
            WriteLiteral(@"n></button>"",

                    excelExport: function (e) {
                        var gd = $(""#FPORegGrid"").data(""kendoGrid"");
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
            WriteLiteral(@"                   //filterable: {
                    //    enabled: true,
                    //    delay: 1500,
                    //    mode: ""menu, row"",
                    //    height: 200,
                    //    click: function (e) {
                    //        var gd = $(""#FPORegGrid"").data(""kendoGrid"");
                    //        filter_row(gd);
                    //    }
                    //},
                    filterable: true,
                    resizable: true, 
                    filterMenuInit: function (e) {
                        var gd = $(""#FPORegGrid"").data(""kendoGrid"");
                        filter_row(gd);
                    },
                    change: selectRow,
                    height: 450,
                    sortable: true,
                    selectable: true,
                    selectable: ""singl"",   //  Grid Row Selection
                    pageable: {
                        refresh: false,
                        pageSizes: tr");
            WriteLiteral(@"ue,
                        buttonCount: 5
                    },
                    navigatable: true,
                    groupable: false,
                    columns: [
                        {
                            field: ""out_orgn_rowid"",
                            title: ""orgn Row Id"", 
                            hidden: true,
                        },
                        {
                            field: ""out_orgn_code"",
                            title: ""FPO Code"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains"" 
                                    }
                                }
                            },
                            width: 150
                        },
                        {
                            field: ""out_version_no"",
           ");
            WriteLiteral(@"                 title: ""version_no"", 
                            hidden: true,
                        },
                        {
                            field: ""out_orgn_cin"",
                            title: ""orgn_cin"", 
                            hidden: true,
                        },
                        {
                            field: ""out_primary_lang_code"",
                            title: ""primary_lang_code"", 
                            hidden: true,
                        },
                        {
                            field: ""out_parent_code"",
                            title: ""Facilitator Org"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
         ");
            WriteLiteral(@"                   width: 200
                        },
                        {
                            field: ""out_orgn_name"",
                            title: ""FPO Name"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 200
                        },
                        {
                            field: ""out_orgn_ll_name"",
                            title: ""orgn_ll_name"", 
                            hidden: true,
                        },
                        {
                            field: ""out_orgn_level"",
                            title: ""orgn_level"", 
                            hidden: true,
                        },
        ");
            WriteLiteral(@"                {
                            field: ""out_orgn_level_desc"",
                            title: ""District"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 150
                        },
                        {
                            field: ""out_orgn_type"",
                            title: ""orgn_type"", 
                            hidden: true,
                        },
                        {
                            field: ""out_orgn_type_desc"",
                            title: ""FPO Type"",
                            filterable: {
                                extra: false,
                                operators: {
         ");
            WriteLiteral(@"                           string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 150
                        },
                        {
                            field: ""out_orgn_subtype"",
                            title: ""orgn_subtype"", 
                            hidden: true,
                        },
                        {
                            field: ""out_orgn_subtype_desc"",
                            title: ""orgn_subtype_desc"", 
                            hidden: true,
                        },
                        {
                            field: ""out_secondary_lang_code"",
                            title: ""secondary_lang_code"", 
                            hidden: true,
                        },
                        {
                            field: ""out_orgn_logo"",
                         ");
            WriteLiteral(@"   title: ""Number of Members"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 150
                        },
                        {
                            field: ""out_orgn_auth_sign"",
                            title: ""orgn_auth_sign"", 
                            hidden: true,
                        },
                        {
                            field: ""out_status_code"",
                            title: ""status_code"", 
                            hidden: true,
                        },
                        {
                            field: ""out_status_desc"",
                            title: ""Status"",
                            f");
            WriteLiteral(@"ilterable: {
                                extra: false,
                                operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            },
                            width: 120
                        },
                        {
                            field: ""out_row_timestamp"",
                            title: ""row_timestamp"", 
                            hidden: true,
                        },
                    ]

                });
            $("".k-dropdown-operator"").css('display', 'none');
            $(""#FPORegGrid .k-input"").attr('disabled', 'false');
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    function statusFilter(element) {    // Dropdown list functionality
        element.kendoDropDownList({
            dataSource:");
            WriteLiteral(@" status_Priority,
            optionLabel: ""--Select Value--""
        });
    }

    function selectRow() {
        try {
            var grid = $(""#FPORegGrid"").data(""kendoGrid"");
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
        location.href = ""../FPOListMaker/FPOListMakerForm"";
    });
    function getSerializedSelectedRows(mode) {
        try {
            if (getlocalStorage(""ls_pageList"") != undefined) {
                var items = getlocalStorage(""ls_pageList"");
                if (items.leng");
            WriteLiteral(@"th == 0) {
                    kendoAlert(""Please select records"");
                }

                else {
                    if (mode == ""edit"") {
                        btn_onClick('Edit');
                        location.href = ""../FPOListMaker/FPOListMakerForm"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
                        location.href = ""../FPOListMaker/FPOListMakerForm"";
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
    function generate_FPORegistration_list(res) {
        debugger;
        if (res.context.List != null) {
            FPOReggrid(res.context.List);
        }
        else {
            FPOReggrid([]);
        }
        //try {
        //    if (res != null) {
        //        var data = changedataType(res);
        //        $(""#gd_FPO");
            WriteLiteral(@"REG"").empty();
        //        $(""#gd_FPOREG"").append(""<div id='FPORegGrid'></div>"");
        //        FPOReggrid(data);
        //    }
        //    else {
        //        FPOReggrid([]);
        //    }
        //}
        //catch (err) {
        //    javascript_log4j_root(arguments.callee.name, err);
        //}
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
