#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\InputCenter\InputCenterList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d72e0015b8f1f4ca7e22183d42f40ea879d431d2"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_InputCenter_InputCenterList), @"mvc.1.0.view", @"/Views/InputCenter/InputCenterList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"d72e0015b8f1f4ca7e22183d42f40ea879d431d2", @"/Views/InputCenter/InputCenterList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_InputCenter_InputCenterList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_input_center"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\InputCenter\InputCenterList.cshtml"
  
    ViewBag.List = "Input Center";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d72e0015b8f1f4ca7e22183d42f40ea879d431d25679", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"gd_ic\">\r\n                <div id=\"IC_grid\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            WriteLiteral("\r\n\r\n<script>\r\n    click_act_name = \"InputCenterForm\";\r\n    click_ctrl_name = \"InputCenter\";\r\n    form_list_url = \'../\' + click_ctrl_name + \'/\' + click_act_name;\r\n</script>\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d72e0015b8f1f4ca7e22183d42f40ea879d431d27635", async() => {
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
        $("".adv_filter"").attr(""hdrtitle"", ""Input Center List Record"");
        $("".adv_filter"").attr(""fltid"", ""ic"");
        $("".Export"").attr(""hdrtitle"", ""Input Center"");
        $("".Export"").attr(""SubTreeId"", ""Input_Center"");
        list_grid_id = ""IC_grid"";
        Screen_Id = ""ICDIC"";
        permission = sec_Permission(Screen_Id);
        //icgrid([]);
        page_load_list_permission(permission);
        listpageloadfetch();
        setlocalStorage(""ls_pageList"", """");
        filterhover();
    });
</script>

<script>
    function listpageloadfetch() {
        try {
            icgrid([]);
            var formval = form_Serialize(""frm_input_center"");
            var obj_val = JSON.parse(formval);
            obj_val.FilterBy_Option = ""ALL"";
            obj_val.FilterBy_Code = ""."";
            if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') != """")");
            WriteLiteral(@" {
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
                url: '/InputCenter/InputListfetch',
                dataType: 'json',
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, FilterBy_Option: Context.Filter.FilterBy_Option, FilterBy_Code: Context.Filter.FilterBy_Code, FilterBy_FromValue: Context.Filter.FilterBy_FromValue, FilterBy_ToValue: Context.Filter.FilterBy_Tovalue }),
                contentType: 'application/json; charset=utf-8',
                success: function (response) {
                    //var list");
            WriteLiteral(@" = JSON.parse(response);
                    if (response.context != null) {
                        generate_InputCenter_list(response.context.List);
                    }
                    else {
                        icgrid([]);
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
    function icgrid(data) {
        try {
            $.each(data, function (index, value) {
                var flag = false;
                $.each(status_Priority, function (sindex, svalue) {
                    if (svalue == value.status_desc) {
                        flag = true;
                    }
                });
                if (flag == false) {
                    status_Priority.push(value.status");
            WriteLiteral(@"_desc);
                }
            });
            $(""#IC_grid"").kendoGrid(
             {
                 dataSource: {
                     data: data,
                     pageSize: 20,
                     change: function (e) {
                         setTimeout(function () {
                             var gd = $(""#IC_grid"").data(""kendoGrid"");
                             filter_row(gd);
                             $('.k-i-close').css('display', 'none');
                             $('button.k-button-icon').css('display', 'none');
                             $('#IC_grid .k-input').prop('disabled', false);
                             $('#IC_grid .k-input').prop('readonly', true);

                         }, 1);
                     },
                 },
                 toolbar: ""<button type= 'button' id = 'Exportclick' class = 'k-grid-excel' style = 'display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
   ");
            WriteLiteral(@"              excelExport: function (e) {
                     debugger;
                     var gd = $(""#IC_grid"").data(""kendoGrid"");
                     var len = gd.dataSource._data.length;
                     var chkall = $('#chkall').is(':checked');
                     var chkfilter = $('#chkfilter').is(':checked');
                     var chktemp = $('#chktemp').is(':checked');
                     var twokendobox = true;
                     gd.dataSource.pageSize(len);
                     if (e.sender.dataSource._data.length == len) {
                         var test = e.sender.dataSource._data;
                         for (i = 0; i < test.length ; i++) {
                             delete test[i][""Out_ic_rowid""];
                             delete test[i][""Out_version_no""];
                             delete test[i][""Out_orgn_cin""];
                             delete test[i][""Out_primary_lang_code""];
                             delete test[i][""Out_status_desc""];
        ");
            WriteLiteral(@"                     delete test[i][""Out_orgn_level""];
                             delete test[i][""Out_orgn_level_desc""];
                             delete test[i][""Out_orgn_subtype""];
                             delete test[i][""Out_orgn_subtype_desc""];
                             delete test[i][""Out_orgn_logo""];
                             delete test[i][""Out_row_timestamp""];
                             delete test[i][""Out_orgn_auth_sign""];
                             delete test[i][""Out_orgn_type""];
                             delete test[i][""Out_status_desc""];
                             delete test[i][""Out_secondary_lang_code""];
                             delete test[i][""Out_orgn_code""];
                             delete test[i][""Out_orgn_type_desc""];
                             delete test[i][""Out_status_code""];
                             
                         }
                         e.sender.dataSource._data = test;
                         twokendobox = false;
 ");
            WriteLiteral(@"                        exportfunction(e, chkall, chkfilter, chktemp, twokendobox, gd);
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
                         var gd = $(""#IC_grid"").data(""kendoGrid"");
                         filter_row(gd);
                     }
                 },
                 filterMenuInit: function (e) {
                     var gd = $(""#IC_grid"").data(""kendoGrid"");
                     filter_row(gd);
                 },
                 change: selectRow,
                 height: 450,
                 sortable: true,
      ");
            WriteLiteral(@"           selectable: true,
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
                         field: ""Out_ic_rowid"",
                           title: ""ic_rowid"",
                           width: 1,
                           hidden: true,
                       },

                     {
                         field: ""Out_ic_code"",
                         title: ""Input Center Code"",
                         filterable: {
                             cell: {
                                 operator: ""contains"",
                                 inputWidth: 1500
                             }
                         }
                     },
                     {
            ");
            WriteLiteral(@"             field: ""Out_orgn_type_desc"",
                         title: ""Input Center Type"",
                         filterable: {
                             cell: {
                                 operator: ""contains"",
                                 inputWidth: 1500
                             }
                         }
                     },
                      {
                          field: ""Out_ic_name"",
                          title: ""Input Center Name"",
                          filterable: {
                              cell: {
                                  operator: ""contains"",
                                  inputWidth: 1500
                              }
                          }
                      },                      
                       
                       {
                           field: ""Out_orgn_ll_name"",
                           title: ""orgn_ll_name"",
                           width: 1,
                           hidden:");
            WriteLiteral(@" true,
                       },
                      {
                          field: ""Out_version_no"",
                          title: ""version_no"",
                          width: 1,
                          hidden: true,
                      },
                      {
                          field: ""Out_orgn_cin"",
                          title: ""orgn_cin"",
                          width: 1,
                          hidden: true,
                      },
                     {
                         field: ""Out_orgn_name"",
                         title: ""Fpo Name"",
                         filterable: {
                             cell: {
                                 operator: ""contains"",
                                 inputWidth: 1500
                             }
                         },
                        
                     },
                     {
                         field: ""Out_parent_code"",
                         title: ""Fpo Name"",");
            WriteLiteral(@"
                         filterable: {
                             cell: {
                                 operator: ""contains"",
                                 inputWidth: 1500
                             }
                         },
                          hidden: true,
                     },
                     {
                         field: ""Out_primary_lang_code"",
                         title: ""primary_lang_code"",
                         width: 1,
                         hidden: true,
                     },

                     {
                         field: ""Out_orgn_level"",
                         title: ""orgn_level"",
                         width: 1,
                         hidden: true,
                     },
              {
                  field: ""Out_orgn_level_desc"",
                  title: ""orgn_level_desc"",
                  width: 1,
                  hidden: true,
              },
              {
                  field: ""Out_orgn_type""");
            WriteLiteral(@",
                  title: ""orgn_type"",
                  width: 1,
                  hidden: true,
              },
              {
                  field: ""Out_orgn_subtype"",
                  title: ""orgn_subtype"",
                  width: 1,
                  hidden: true,
              },
              {
                  field: ""Out_orgn_code"",
                  title: ""orgn_code"",
                  width: 1,
                  hidden: true,
              },
              {
                  field: ""Out_orgn_subtype_desc"",
                  title: ""orgn_subtype_desc"",
                  width: 1,
                  hidden: true,
              },
              {
                  field: ""Out_secondary_lang_code"",
                  title: ""secondary_lang_code"",
                  width: 1,
                  hidden: true,
              },

          {
              field: ""Out_row_timestamp"",
              title: ""row_timestamp"",
              width: 1,
              hidden: ");
            WriteLiteral(@"true,
          }, {
              field: ""Out_orgn_logo"",
              title: ""orgn_logo"",
              width: 1,
              hidden: true,
          },
                        {
                            field: ""Out_orgn_auth_sign"",
                            title: ""orgn_auth_sign"",
                            width: 1,
                            hidden: true,
                        },
                        {
                            field: ""Out_status_code"",
                            title: ""status_code"",
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
                    }
                },
                 ]

      ");
            WriteLiteral(@"       });

            $("".k-dropdown-operator"").css('display', 'none');
            $(""#IC_grid .k-input"").attr('disabled', 'false');
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
            var grid = $(""#IC_grid"").data(""kendoGrid"");
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
        getSerializedSelectedRows('");
            WriteLiteral(@"view');
    });

    $(""#btn_new"").bind(""click"", function () {
        btn_onClick('Create');
        location.href = ""../InputCenter/InputCenterForm"";
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
                        location.href = ""../InputCenter/InputCenterForm"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
                        location.href = ""../InputCenter/InputCenterForm"";
                    }
                }
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
");
            WriteLiteral(@"    }
</script>
<script>
    function generate_InputCenter_list(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
                $(""#gd_ic"").empty();
                $(""#gd_ic"").append(""<div id='IC_grid'></div>"");
                icgrid(data);
            }
            else {
                icgrid([]);
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
