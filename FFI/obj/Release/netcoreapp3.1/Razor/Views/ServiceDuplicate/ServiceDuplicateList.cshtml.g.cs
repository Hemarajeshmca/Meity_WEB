#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\ServiceDuplicate\ServiceDuplicateList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "16a721d08768c22bfb0f32209444199ad02779da"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_ServiceDuplicate_ServiceDuplicateList), @"mvc.1.0.view", @"/Views/ServiceDuplicate/ServiceDuplicateList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"16a721d08768c22bfb0f32209444199ad02779da", @"/Views/ServiceDuplicate/ServiceDuplicateList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_ServiceDuplicate_ServiceDuplicateList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("service_Duplicate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\ServiceDuplicate\ServiceDuplicateList.cshtml"
  
    ViewBag.List = "Duplicate Certificate Request";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "16a721d08768c22bfb0f32209444199ad02779da5757", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"gd_serduplicate\">\r\n                <div id=\"Service_grid_duplicate\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "16a721d08768c22bfb0f32209444199ad02779da7547", async() => {
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
        $("".adv_filter"").attr(""hdrtitle"", ""Sevice Request Duplicate"");
        $("".adv_filter"").attr(""fltid"", ""ServiceDetail"");
        $("".Export"").attr(""hdrtitle"", ""Sevice Request Duplicate List"");
        $("".Export"").attr(""hdrtitle"", ""Sevice Request Duplicate"");
        $("".Export"").attr(""SubTreeId"", ""Duplicate"");
      
        Screen_Id = ""SRVDUP"";
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
        var formval = form_Serialize(""service_Duplicate"");
        var obj_val = JSON.parse(formval);
        obj_val.FilterBy_Option = ""QCD_FPOSERVICE_CERTDUP"";
        obj_val.FilterBy_Code = ""."";
        if (getlocalStorage('flt_condition') != undefined && getloc");
            WriteLiteral(@"alStorage('flt_condition') != """") {
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
            data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, Filter: Context.Filter }),
            url: ""/ServiceDuplicate/ServiceList"",
            dataType: ""json"",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                debugger;
                if (response.context != null) {
                    generate_SerReqDuplicate_list(response.context.List)
                    //listgrid(response.context.List);
                    //SetPag");
            WriteLiteral(@"er(response.context.Filter.out_record_count)
                }
                else {
                    seviceduplicategrid([]);
                }
            },
            error: function (er) {
                alert(er)
                console.log(er)
            }

        });
        //retrieve_SerReqDuplicate_list(data);
        
    }

    var status_Priority = [];
    function seviceduplicategrid(data) {
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
        });
        $(""#Service_grid_duplicate"").kendoGrid(
           {
               dataSource: {
                   data: data,
                   pageSize: 20,
                   change: function (e) {
");
            WriteLiteral(@"                       setTimeout(function () {
                           var gd = $(""#Service_grid_duplicate"").data(""kendoGrid"");
                           filter_row(gd);
                           $('.k-i-close').css('display', 'none');
                           $('button.k-button-icon').css('display', 'none');
                           $('#Service_grid_duplicate .k-input').prop('disabled', false);
                           $('#Service_grid_duplicate .k-input').prop('readonly', true);
                       }, 1);
                   },
               },
               toolbar: ""<button type='button' id='Exportclick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
               excelExport: function (e) {
                   var gd = $(""#Service_grid_duplicate"").data(""kendoGrid"");
                   var len = gd.dataSource._data.length;
                   var chkall = $('#chkall').is(':checke");
            WriteLiteral(@"d');
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
                       var gd = $(""#Service_grid_duplicate"").data(""kendoGrid"");
                       filter_row(gd);");
            WriteLiteral(@"
                   }
               },
               filterMenuInit: function (e) {
                   var gd = $(""#Service_grid_duplicate"").data(""kendoGrid"");
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
                       field: ""Out_servicereq_rowid"",
                title: ""servicereq_rowid"",
                width: 150,
                hidden: true

                   },
                   {
                       field: ""Out_servicereq_no"",
                       title: ""Service Request No"",
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
                       field: ""Out_request_date"",
                       title: ""Request Date"",
                       filterable: {
                           cell: {
                               operator: ""contains"",
                               inputWidth: 1500
                           }
                       },
                       width: 150

                   },
            {
                field: ""Out_farmer_code"",
                title: ""Farmer ID"",
                filterable: {
                    cell: {
                        operator: ""contains"",
                        inputWidth: 1500
                    }
                },
                width: 150

            },
          ");
            WriteLiteral(@"  {
                field: ""Out_fpomember_code"",
                title: ""Member ID"",
                filterable: {
                    cell: {
                        operator: ""contains"",
                        inputWidth: 1500
                    }
                },
                width: 150

            },
            {
                field: ""Out_farmer_name"",
                title: ""Farmer Given Name"",
                filterable: {
                    cell: {
                        operator: ""contains"",
                        inputWidth: 1500
                    }
                },
                width: 150

            },
            {
                field: ""Out_sur_name"",
                title: ""Surname"",
                filterable: {
                    cell: {
                        operator: ""contains"",
                        inputWidth: 1500
                    }
                },
                width: 150

            },
            {
              ");
            WriteLiteral(@"  field: ""Out_certificate_no"",
                title: ""Certificate No"",
                attributes: { style: ""text-align:right;"" },
                filterable: {
                    cell: {
                        operator: ""contains"",
                        inputWidth: 1500
                    }
                },
                width: 150

            },
            {
                field: ""Out_issued_date"",
                title: ""Issued Date"",
                filterable: {
                    cell: {
                        operator: ""contains"",
                        inputWidth: 1500
                    }
                },
                width: 150

            },

               {
                   field: ""Out_dist_from"",
                   title: ""Distinct From"",
                   attributes: { style: ""text-align:right;"" },
                   filterable: {
                       cell: {
                           operator: ""contains"",
                           i");
            WriteLiteral(@"nputWidth: 1500
                       }
                   },
                   width: 150

               },
                {
                    field: ""Out_dist_to"",
                    title: ""Distinct To"",
                    attributes: { style: ""text-align:right;"" },
                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    },
                    width: 150

                },
                 
                {
                    field: ""Out_request_type"",
                    title: ""Request Type"",
                    width: 150,
                    hidden: true

                },
                 {
                     field: ""Out_request_type_desc"",
                     title: ""Request Type"",
                     filterable: {
                         cell: {
                             operator: ""contains"",
      ");
            WriteLiteral(@"                       inputWidth: 1500
                         }
                     },
                     width: 150

                 },

                {
                    field: ""Out_requestsub_type"",
                    title: ""Request Sub Type"",
                    hidden: true,
                    width: 150

                },
                 {
                     field: ""Out_requestsub_type_desc"",
                     title: ""Request Sub Type"",
                     filterable: {
                         cell: {
                             operator: ""contains"",
                             inputWidth: 1500
                         }
                     },
                     hidden: true,
                     width: 150

                 },

                {
                    field: ""Out_chklist_status_flag"",
                    title: ""chklist_status_flag"",
                    width: 150,
                    hidden: true
                },
           ");
            WriteLiteral(@"      {
                     field: ""Out_sr_comments"",
                     title: ""sr_comments"",
                     width: 150,
                     hidden: true
                 },
                  {
                      field: ""Out_status_code"",
                      title: ""status_code"",
                      width: 150,
                      hidden: true
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
                      width: 150,

                  }

            //{
            //    field: ""mode_flag"",
            //    title: ""Mode"",
            //    hidden: true
            //        }
                ],
          
        });
        $("".k-dropdown-operator"").c");
            WriteLiteral(@"ss('display', 'none');
        $(""#Service_grid_duplicate .k-input"").attr('disabled', 'false');
    }
    function statusFilter(element) {    // Dropdown list functionality
        element.kendoDropDownList({
            dataSource: status_Priority,
            optionLabel: ""--Select Value--""
        });
    }

    function selectRow() {
        var grid = $(""#Service_grid_duplicate"").data(""kendoGrid"");
        var selectedItem = grid.dataItem(grid.select());
        setlocalStorage(""ls_pageList"", selectedItem);
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
        location.href = ""../ServiceDuplicate/ServiceDuplicateForm"";
    });
    function getSerializedSelectedRows(mode) {
        try {
            if (getlocalStorage(""ls_pa");
            WriteLiteral(@"geList"") != undefined) {
                var items = getlocalStorage(""ls_pageList"");
                if (items.length == 0) {
                    kendoAlert(""Please select records"");
                }

                else {
                    if (mode == ""edit"") {
                        btn_onClick('Edit');
                        location.href = ""../ServiceDuplicate/ServiceDuplicateForm"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
                        location.href = ""../ServiceDuplicate/ServiceDuplicateForm"";
                    }
                }
            }
        }
        catch (err) {

        }

    }
</script>
<script>
    function generate_SerReqDuplicate_list(res) {
        if (res != null) {
            var data = changedataType(res);
            $(""#gd_serduplicate"").empty();
            $(""#gd_serduplicate"").append(""<div id='Service_grid_duplicate'></div>"");
            seviceduplicateg");
            WriteLiteral("rid(data);\r\n        }\r\n        else {\r\n            seviceduplicategrid([]);\r\n        }\r\n    }\r\n\r\n    function listRefresh() {\r\n        setlocalStorage(\'flt_condition\', \"\");\r\n        listpageloadfetch();\r\n    }\r\n</script>\r\n\r\n\r\n\r\n\r\n");
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
