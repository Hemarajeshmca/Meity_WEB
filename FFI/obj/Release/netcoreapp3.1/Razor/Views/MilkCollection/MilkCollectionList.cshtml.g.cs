#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\MilkCollection\MilkCollectionList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "759964aaeb96306bbedca2b79262b894274037e1"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_MilkCollection_MilkCollectionList), @"mvc.1.0.view", @"/Views/MilkCollection/MilkCollectionList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"759964aaeb96306bbedca2b79262b894274037e1", @"/Views/MilkCollection/MilkCollectionList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_MilkCollection_MilkCollectionList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_MilkCC"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Milkcollection_correction.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/MilkCollection_Correction_reieveMilkCollectionCorrectionList_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/retrieveCorrectionList_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#nullable restore
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\MilkCollection\MilkCollectionList.cshtml"
  
    ViewBag.List = "Milk Collection Correction";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "759964aaeb96306bbedca2b79262b894274037e16946", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"gd_MilkCCgrid\">\r\n                <div id=\"MilkCC_grid\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            WriteLiteral("\r\n\r\n<script>\r\n    click_act_name = \"MilkCollectionForm\";\r\n    click_ctrl_name = \"MilkCollection\";\r\n    form_list_url = \'../\' + click_ctrl_name + \'/\' + click_act_name;\r\n</script>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "759964aaeb96306bbedca2b79262b894274037e18916", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "759964aaeb96306bbedca2b79262b894274037e19955", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "759964aaeb96306bbedca2b79262b894274037e110994", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "759964aaeb96306bbedca2b79262b894274037e112034", async() => {
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
    function listpageloadfetch() {
        try {
            var formval = form_Serialize(""frm_MilkCC"");
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
            data.context = WebAPIProxy.getContext();
            data.context.Filter = obj_val;
            retrieve_billentry_list(data);

            setlocalStorage('flt_condition', """");
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    var status_Priority = [];
    function listgrid(data) {
        try {
            $.ea");
            WriteLiteral(@"ch(data, function (index, value) {
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
            $(""#MilkCC_grid"").kendoGrid(
             {
                 dataSource: {
                     data: data,
                     pageSize: 20,
                     change: function (e) {
                         setTimeout(function () {
                             var gd = $(""#MilkCC_grid"").data(""kendoGrid"");
                             filter_row(gd);
                             $('.k-i-close').css('display', 'none');
                             $('button.k-button-icon').css('display', 'none');
                             $('#MilkCC_grid .k-input').prop('disabled', false);
");
            WriteLiteral(@"                             $('#MilkCC_grid .k-input').prop('readonly', true);

                         }, 1);
                     },
                 },
                 toolbar: ""<button type='button' id='Exportclick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
                 excelExport: function (e) {
                     var chkall = $('#chkall').is(':checked');
                     var chkfilter = $('#chkfilter').is(':checked');
                     var chktemp = $('#chktemp').is(':checked');
                     var gd = $(""#MilkCC_grid"").data(""kendoGrid"");
                     var len = gd.dataSource._data.length;
                     gd.dataSource.pageSize(len);
                     exportfunction(e, chkall, chkfilter, chktemp);
                     gd.dataSource.pageSize('10');
                 },
                 filterable: {
                     enabled: true,
             ");
            WriteLiteral(@"        delay: 1500,
                     mode: ""menu, row"",
                     height: 200,
                     click: function (e) {
                         var gd = $(""#MilkCC_grid"").data(""kendoGrid"");
                         filter_row(gd);
                     }
                 },
                 filterMenuInit: function (e) {
                     var gd = $(""#MilkCC_grid"").data(""kendoGrid"");
                     filter_row(gd);
                 },
                 dataBound: function (o) {
                     var gd = $(""#MilkCC_grid"").data(""kendoGrid"");
                     for (var i = 0; i < gd.columns.length; i++) {
                         gd.showColumn(i);
                     }
                     $(""div.k-group-indicator"").each(function (i, v) {
                         gd.hideColumn($(v).data(""field""));
                     })
                 },
                 height: 450,
                 sortable: true,
                 selectable: true,
                 //");
            WriteLiteral(@"change: onChangeSelection,
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
                            field: ""correction_id"",
                            title: ""Correction ID"",
                            filterable: {
                                cell: {
                                    operator: ""contains"",
                                    inputWidth: 1500
                                }
                            }
                        },
                     {
                         field: ""correction_date"",
                         title: ""Correction Date"",
                         filterable: {
                             cell: {
                                 ");
            WriteLiteral(@"operator: ""contains"",
                                 inputWidth: 1500
                             }
                         }
                     },


                      {
                          field: ""session_id"",
                          title: ""Session ID "",
                          filterable: {
                              cell: {
                                  operator: ""contains"",
                                  inputWidth: 1500
                              }
                          }
                      },

                 {
                     field: ""Status"",
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
            $(""#M");
            WriteLiteral(@"ilkCC_grid .k-input"").attr('disabled', 'false');
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
            var grid = $(""#MilkCC_grid"").data(""kendoGrid"");
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
        btn_onClick('");
            WriteLiteral(@"Create');
        location.href = ""../MilkCollection/MilkCollectionForm"";
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
                        location.href = ""../MilkCollection/MilkCollectionForm"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
                        location.href = ""../MilkCollection/MilkCollectionForm"";
                    }
                }

            }
        }

        catch (err) {
        }
    }
</script>
<script>
    var menuId = """";
    var permission = """";
    $(document).ready(function () {
        $("".adv_filte");
            WriteLiteral(@"r"").attr(""hdrtitle"", ""Milk Collection Correction List"");
        $("".adv_filter"").attr(""fltid"", ""MilkCollectionCorrection"");
        $("".Export"").attr(""hdrtitle"", ""Milk Collection Correction List"");
        $("".Export"").attr(""SubTreeId"", ""MLKCOLL"");
        list_grid_id = ""MilkCC_grid"";
        listgrid([]);
        listpageloadfetch();

        Screen_Id = ""MLKCOLL"";
        permission = sec_Permission(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        filterhover();
    });
</script>
<script>
    function generate_milkcollection_correction_list(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
                listgrid(data);
            }
            else {
                listgrid([]);
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    function listRefresh() {
        try {
            li");
            WriteLiteral("stpageloadfetch();\r\n        }\r\n        catch (err) {\r\n            javascript_log4j_root(arguments.callee.name, err);\r\n        }\r\n    }\r\n\r\n</script>\r\n\r\n\r\n\r\n\r\n");
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
