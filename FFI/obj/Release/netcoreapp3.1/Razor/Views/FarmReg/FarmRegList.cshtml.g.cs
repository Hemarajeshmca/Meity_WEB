#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\FarmReg\FarmRegList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "9fbf7f39c93c45c8d97e18eec0e9d9c6aa94489e"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_FarmReg_FarmRegList), @"mvc.1.0.view", @"/Views/FarmReg/FarmRegList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9fbf7f39c93c45c8d97e18eec0e9d9c6aa94489e", @"/Views/FarmReg/FarmRegList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_FarmReg_FarmRegList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_esp_reg"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/ESP_retrieveESPReg_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/ESP_retrieveESPRegList_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/ESP_saveESPReg_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/ESP_Registration.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/retrieveESPReg_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_9 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/retrieveESPRegList_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_10 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/saveESPReg_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_11 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\FarmReg\FarmRegList.cshtml"
  
    ViewBag.List = "ESP Registration";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9fbf7f39c93c45c8d97e18eec0e9d9c6aa94489e8277", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"col-xs-12\">\r\n                <div id=\"gd_esp\">\r\n                    <div id=\"esp_grid\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9fbf7f39c93c45c8d97e18eec0e9d9c6aa94489e10115", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9fbf7f39c93c45c8d97e18eec0e9d9c6aa94489e11155", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9fbf7f39c93c45c8d97e18eec0e9d9c6aa94489e12195", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9fbf7f39c93c45c8d97e18eec0e9d9c6aa94489e13235", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9fbf7f39c93c45c8d97e18eec0e9d9c6aa94489e14275", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9fbf7f39c93c45c8d97e18eec0e9d9c6aa94489e15315", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9fbf7f39c93c45c8d97e18eec0e9d9c6aa94489e16355", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9fbf7f39c93c45c8d97e18eec0e9d9c6aa94489e17396", async() => {
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
            WriteLiteral(@"
<script>

    var menuId = """";
    var permission = """";

    $(document).ready(function () {
        $("".adv_filter"").attr(""hdrtitle"", ""ESP List Record"");
        $("".adv_filter"").attr(""fltid"", ""espreg"");
        $("".Export"").attr(""hdrtitle"", ""ESP Registration List"");
        $("".Export"").attr(""SubTreeId"", ""esp_grid"");
        list_grid_id = ""esp_grid"";

        //listpageloadfetch();

        Screen_Id = ""FALREG"";
        permission = sec_Permission(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        filterhover();

    });
</script>
<script>
    function listpageloadfetch() {
        try{
            var formval = form_Serialize(""frm_esp_reg"");
            var obj_val = JSON.parse(formval);
            obj_val.FilterBy_Option = ""ALL"";
            obj_val.FilterBy_Code = ""."";
            if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') != """") {
                obj_val.FilterBy_FromV");
            WriteLiteral(@"alue = getlocalStorage('flt_condition');
            }
            else {
                obj_val.FilterBy_FromValue = ""."";
            }
            obj_val.FilterBy_ToValue = ""."";

            obj_val.from_index = ""0""
            obj_val.to_index = ""0""
            obj_val.record_count = ""0""

            var data = {};
            data.context = WebAPIProxy.getContext();;
            data.context.Filter = obj_val;        
            retrieve_ESP_list(data);          
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    var status_Priority = [];
    function ESPgrid(data) {
        try{
            $.each(data, function (index, value) {
                var flag = false;
                $.each(status_Priority, function (sindex, svalue) {
                    if (svalue == value.status_desc) {
                        flag = true;
                    }
                });
                if (flag == false) {
          ");
            WriteLiteral(@"          status_Priority.push(value.status_desc);
                }
            });
    $(""#esp_grid"").kendoGrid(
        {
            dataSource: {
                data: data,
                pageSize: 20,
                change: function (e) {
                    setTimeout(function () {
                        var gd = $(""#esp_grid"").data(""kendoGrid"");
                        filter_row(gd);
                        $('.k-i-close').css('display', 'none');
                        $('button.k-button-icon').css('display', 'none');
                        $('#esp_grid .k-input').prop('disabled', false);
                        $('#esp_grid .k-input').prop('readonly', true);

                    }, 1);
                },
            },
            toolbar: ""<button type= 'button' id = 'Exportclick' class = 'k-grid-excel' style = 'display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
            excelExport: function (e) {
   ");
            WriteLiteral(@"             var gd = $(""#esp_grid"").data(""kendoGrid"");
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
            filterable: {
                enabled: true,
                delay: 1500,
                mode: ""menu, row"",
                height: 200,
                click: function (e) {
              ");
            WriteLiteral(@"      var gd = $(""#esp_grid"").data(""kendoGrid"");
                    filter_row(gd);
                }
            },
            filterMenuInit: function (e) {
                var gd = $(""#esp_grid"").data(""kendoGrid"");
                filter_row(gd);
            },
            height: 450,
            sortable: true,
            selectable: true,
            change: selectRow,
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
            field: ""orgn_rowid"",
            title: ""orgn Row Id"",
            width: 1,
            hidden: true,
        },
      {
          field: ""orgn_code"",
          title: ""ESP Code"",
          filterable: {
              cell: {
                  operator: ""contains"",
                  inputWidth: 1500
        ");
            WriteLiteral(@"      }
          }
      },
      {
          field: ""version_no"",
          title: ""version_no"",
          width: 1,
          hidden: true,
      },
      {
          field: ""orgn_cin"",
          title: ""orgn_cin"",
          width: 1,
          hidden: true,
      },
       {
           field: ""primary_lang_code"",
           title: ""primary_lang_code"",
           width: 1,
           hidden: true,
       },
       {
           field: ""parent_code"",
           title: ""Facilitator Org"",
           filterable: {
               cell: {
                   operator: ""contains"",
                   inputWidth: 1500
               }
           }
       },
       {
           field: ""orgn_name"",
           title: ""ESP Name"",
           filterable: {
               cell: {
                   operator: ""contains"",
                   inputWidth: 1500
               }
           }
       },
       {
           field: ""orgn_ll_name"",
           title: ""orgn_ll_name"",
          ");
            WriteLiteral(@" width: 1,
           hidden: true,
       },
        {
            field: ""orgn_level"",
            title: ""orgn_level"",
            width: 1,
            hidden: true,
        },
        {
            field: ""orgn_level_desc"",
            title: ""Address"",
            hidden: true,
            filterable: {
                cell: {
                    operator: ""contains"",
                    inputWidth: 1500
                }
            }
        },
      {
          field: ""orgn_type_desc"",
          title: ""orgn_type"",
          width: 1,
          hidden: true,
      },
        {
            field: ""orgn_type"",
            title: ""ESP Type"",
            filterable: {
                cell: {
                    operator: ""contains"",
                    inputWidth: 1500
                }
            }
        },
       {
           field: ""orgn_logo"",
           title: ""FPO/Largefarmer"",
           filterable: {
               cell: {
                   operator: """);
            WriteLiteral(@"contains"",
                   inputWidth: 1500
               }
           }
         
       },
       {
           field: ""orgn_subtype_desc"",
           title: ""orgn_subtype_desc"",
           width: 1,
           hidden: true,
       },
       {
           field: ""secondary_lang_code"",
           title: ""secondary_lang_code"",
           width: 1,
           hidden: true,
       },
       {
           field: ""orgn_logo"",
           title: ""orgn_subtype"",
           width: 1,
           hidden: true,
       },
        {
            field: ""orgn_auth_sign"",
            title: ""orgn_auth_sign"",
            width: 1,
            hidden: true,
        },
        {
            field: ""status_code"",
            title: ""status_code"",
            width: 1,
            hidden: true,
        },
        {
            field: ""status_desc"",
            title: ""Status"",
            filterable: {
                cell: {
                    operator: ""contains"",
                    ");
            WriteLiteral(@"inputWidth: 1500
                }
            }
        },
       {
           field: ""row_timestamp"",
           title: ""row_timestamp"",
           width: 1,
           hidden: true,
       },
        ]

        });
    $("".k-dropdown-operator"").css('display', 'none');
    $(""#esp_grid .k-input"").attr('disabled', 'false');
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
        var grid = $(""#esp_grid"").data(""kendoGrid"");
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
        getSeri");
            WriteLiteral(@"alizedSelectedRows('edit');
    });

    $(""#btn_View"").bind(""click"", function () {
        getSerializedSelectedRows('view');
    });

    $(""#btn_new"").bind(""click"", function () {
        btn_onClick('Create');
        location.href = ""../FarmReg/FarmRegForm"";
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
                        location.href = ""../FarmReg/FarmRegForm"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
                        location.href = ""../FarmReg/FarmRegForm"";
                    }
                }
            }
        }
 ");
            WriteLiteral(@"       catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

</script>

<script>
    function generate_ESP_list(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
                $(""#gd_esp"").empty();
                $(""#gd_esp"").append(""<div id='esp_grid'></div>"");
                ESPgrid(data);
            }
            else {
                ESPgrid([]);
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