#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSProductionMaster\PAWHSProductionmasterList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "732a8f8acc0958b9d8a31484ebfad22f86e1cc10"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PAWHSProductionMaster_PAWHSProductionmasterList), @"mvc.1.0.view", @"/Views/PAWHSProductionMaster/PAWHSProductionmasterList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"732a8f8acc0958b9d8a31484ebfad22f86e1cc10", @"/Views/PAWHSProductionMaster/PAWHSProductionmasterList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_PAWHSProductionMaster_PAWHSProductionmasterList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("production_stage"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSProductionMaster\PAWHSProductionmasterList.cshtml"
  
    ViewBag.List = "Production Stage Setup";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "732a8f8acc0958b9d8a31484ebfad22f86e1cc105844", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"gd_production\">\r\n                <div id=\"production_grid\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            WriteLiteral("\r\n<script>\r\n    click_act_name = \"Productionmasterform\";\r\n    click_ctrl_name = \"PWProductionmaster\";\r\n    form_list_url = \'../\' + click_ctrl_name + \'/\' + click_act_name;\r\n</script>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "732a8f8acc0958b9d8a31484ebfad22f86e1cc107820", async() => {
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
        $("".adv_filter"").attr(""hdrtitle"", ""Production Stage Master List"");
        $("".adv_filter"").attr(""fltid"", ""Produc_Stage"");
        $("".Export"").attr(""hdrtitle"", ""Production Stage Setup List"");
        $("".Export"").attr(""SubTreeId"", ""PRODSTAGSTUP"");
        list_grid_id = ""production_grid"";

        listpageloadfetch();

        Screen_Id = ""PRODSTAGSTUP"";
        permission = sec_Permission(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        filterhover();
    });
</script>

<script>

    function listpageloadfetch() {
        try {
            var formval = form_Serialize(""production_stage"");
            var obj_val = JSON.parse(formval);
            obj_val.FilterBy_Option = ""ALL"";
            obj_val.FilterBy_Code = ""."";
            if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') !=");
            WriteLiteral(@" """") {
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
                url: '/PAWHSProductionMaster/PAWHSProductionListfetch',
                dataType: 'json',
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, FilterBy_Option: Context.Filter.FilterBy_Option, FilterBy_Code: Context.Filter.FilterBy_Code, FilterBy_Fromvalue: Context.Filter.FilterBy_FromValue, FilterBy_ToValue: Context.Filter.FilterBy_ToValue }),
                contentType: 'application/json; charset=utf-8',
                success: function (response) {
   ");
            WriteLiteral(@"                 //var list = JSON.parse(response);
                    if (response.context.List != null) {
                        generate_ProductionStageSetup_list(response.context.List);
                    }
                    else {
                        Productiongrid([]);
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
    function Productiongrid(data) {
        try {
            $.each(data, function (index, value) {
                var flag = false;
                $.each(status_Priority, function (sindex, svalue) {
                    if (svalue == value.status_desc) {
                        flag = true;
                    }
                });
                if (flag == false) {
           ");
            WriteLiteral(@"         status_Priority.push(value.status_desc);
                }
            });
            $(""#production_grid"").kendoGrid(
             {
                 dataSource: {
                     data: data,
                     pageSize: 20,
                     change: function (e) {
                         setTimeout(function () {
                             var gd = $(""#production_grid"").data(""kendoGrid"");
                             filter_row(gd);
                             $('.k-i-close').css('display', 'none');
                             $('button.k-button-icon').css('display', 'none');
                             $('#production_grid .k-input').prop('disabled', false);
                             $('#production_grid .k-input').prop('readonly', true);

                         }, 1);
                     },
                 },
                 toolbar: ""<button type='button' id='Exportclick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' ");
            WriteLiteral(@"style='color: Black;'> &nbsp Export To Excel</span></button>"",
                 excelExport: function (e) {
                     var gd = $(""#CustomerMaster"").data(""kendoGrid"");
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
            WriteLiteral(@"             filterable: {
                     enabled: true,
                     delay: 1500,
                     mode: ""menu, row"",
                     height: 200,
                     click: function (e) {
                         var gd = $(""#production_grid"").data(""kendoGrid"");
                         filter_row(gd);
                     }
                 },
                 filterMenuInit: function (e) {
                     var gd = $(""#production_grid"").data(""kendoGrid"");
                     filter_row(gd);
                 },
                 dataBound: function (o) {
                     //resultData = e.sender._data;
                     //var rows = $('#production_grid').data('kendoGrid').tbody.children();
                     //setColor(rows, resultData);
                 },
                 height: 450,
                 sortable: true,
                 selectable: true,
                 change: selectRow,
                 selectable: ""singl"",   //  Grid Row Selecti");
            WriteLiteral(@"on
                 pageable: {
                     refresh: false,
                     pageSizes: true,
                     buttonCount: 5
                 },
                 navigatable: true,
                 groupable: false,

                 columns: [
                     {
                         field: ""Out_production_rowid"",
                         title: ""production_rowid"",
                         hidden: true,
                     },
                     {
                         field: ""Out_aggregator_code"",
                         title: ""Aggregator Code"",
                         width: 50,
                         filterable: {
                             cell: {
                                 operator: ""contains"",
                                 inputWidth: 1500
                             }
                         }
                     },
                      {
                          field: ""Out_fg_code"",
                          title: ""FG Co");
            WriteLiteral(@"de"",
                          width: 50,
                          filterable: {
                              cell: {
                                  operator: ""contains"",
                                  inputWidth: 1500
                              }
                          }
                      },
                      {
                          field: ""Out_no_of_stage"",
                          title: ""No of stages"",
                          width: 50,
                          filterable: {
                              cell: {
                                  operator: ""contains"",
                                  inputWidth: 1500
                              }
                          }
                      },
                      {
                          field: ""Out_final_output"",
                          title: ""Final Output"",
                          width: 50,
                          filterable: {
                              cell: {
             ");
            WriteLiteral(@"                     operator: ""contains"",
                                  inputWidth: 1500
                              }
                          }
                      },
                      {
                          field: ""Out_status_desc"",
                          title: ""status_desc"",
                          hidden: true,
                      },
                      {
                          field: ""Out_status_code"",
                          title: ""status_code"",
                          hidden: true,
                      },
                      {
                          field: ""Out_row_timestamp"",
                          title: ""row_timestamp"",
                          hidden: true,
                      } 
                 ],

             });
            $("".k-dropdown-operator"").css('display', 'none');
            $(""#production_grid .k-input"").attr('disabled', 'false');
        }
        catch (err) {
            javascript_log4j_root(arguments.c");
            WriteLiteral(@"allee.name, err);
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
            var grid = $(""#production_grid"").data(""kendoGrid"");
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
        location.href = ""../PAWHSProductionMaster/Productionmasterform"";
    });
    function getSerializedSelec");
            WriteLiteral(@"tedRows(mode) {
        try {
            if (getlocalStorage(""ls_pageList"") != undefined) {
                var items = getlocalStorage(""ls_pageList"");
                if (items.length == 0) {
                    kendoAlert(""Please select records"");
                }

                else {
                    if (mode == ""edit"") {
                        btn_onClick('Edit');
                        location.href = ""../PAWHSProductionMaster/Productionmasterform"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
                        location.href = ""../PAWHSProductionMaster/Productionmasterform"";
                    }
                }
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    function generate_ProductionStageSetup_list(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
           ");
            WriteLiteral(@"     $(""#gd_production"").empty();
                $(""#gd_production"").append(""<div id='production_grid'></div>"");
                Productiongrid(data);
            }
            else {
                Productiongrid([]);
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
