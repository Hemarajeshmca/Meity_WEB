#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Service\ServiceList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "25b56d4c5035d459ad57261e01d1a2f479d71f42"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Service_ServiceList), @"mvc.1.0.view", @"/Views/Service/ServiceList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"25b56d4c5035d459ad57261e01d1a2f479d71f42", @"/Views/Service/ServiceList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_Service_ServiceList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("service_name"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Service_Request_retrieveServiceRequestList_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Service_Request_saveServiceRequestName_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/retrieveServiceRequestList_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/ServiceReqName.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Service\ServiceList.cshtml"
  
    ViewBag.List = "Name Change";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "25b56d4c5035d459ad57261e01d1a2f479d71f427192", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"gd_serName\">\r\n                <div id=\"name_grid\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "25b56d4c5035d459ad57261e01d1a2f479d71f428964", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "25b56d4c5035d459ad57261e01d1a2f479d71f4210003", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "25b56d4c5035d459ad57261e01d1a2f479d71f4211043", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "25b56d4c5035d459ad57261e01d1a2f479d71f4212083", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "25b56d4c5035d459ad57261e01d1a2f479d71f4213123", async() => {
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
            WriteLiteral(@"
<script>
    var menuId = """";
    var permission = """";
    $(document).ready(function () {
        debugger;
        $("".adv_filter"").attr(""hdrtitle"", ""Sevice Request List"");
        $("".adv_filter"").attr(""fltid"", ""ServiceDetail"");
        $("".Export"").attr(""hdrtitle"", ""Sevice Request List"");
        $("".Export"").attr(""SubTreeId"", ""SRVNAME"");
        //listpageloadfetch();
        Screen_Id = ""SRVNAME"";
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
        debugger;
        var formval = form_Serialize(""service_name"");
        var obj_val = JSON.parse(formval);
        obj_val.FilterBy_Option = ""QCD_FPOSERVICE_NAMECHNG"";
        obj_val.FilterBy_Code = ""."";
        if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition");
            WriteLiteral(@"') != """") {
            obj_val.FilterBy_Fromvalue = getlocalStorage('flt_condition');
        }
        else {
            obj_val.FilterBy_Fromvalue = ""."";
        }
        obj_val.FilterBy_Tovalue = ""."";
        var data = {};
        data.context = WebAPIProxy.getContext();;
        data.context.Filter = obj_val;
        //retrieve_SerReqName_list(data);
        //setlocalStorage('flt_condition', """");

        var Context = data.context;
        $.ajax({
            type: ""POST"",
            data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, Filter: Context.Filter }),
            url: ""/Service/ServiceList"",
            dataType: ""json"",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                debugger;
                if (response.context != null) {
                    generate_SerReqName_list(response.context.List)
                    //listgrid(r");
            WriteLiteral(@"esponse.context.List);
                    //SetPager(response.context.Filter.out_record_count)
                }
                else {
                    SerNamegrid([]);
                }
            },
            error: function (er) {
                alert(er)
                console.log(er)
            }

        });
    }

    var status_Priority = [];
    function SerNamegrid(data) {
        debugger;
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
        $(""#name_grid"").kendoGrid({
            dataSource: {
                data: data,
                pageSize: 20,
                change: function (e) {
                    setTimeout(function (");
            WriteLiteral(@") {
                        var gd = $(""#name_grid"").data(""kendoGrid"");
                        filter_row(gd);
                        $('.k-i-close').css('display', 'none');
                        $('button.k-button-icon').css('display', 'none');
                        $('#name_grid .k-input').prop('disabled', false);
                        $('#name_grid .k-input').prop('readonly', true);
                    }, 1);
                },
            },
            toolbar: ""<button type='button' id='Exportclick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
            excelExport: function (e) {
                var gd = $(""#name_grid"").data(""kendoGrid"");
                var len = gd.dataSource._data.length;
                var chkall = $('#chkall').is(':checked');
                var chkfilter = $('#chkfilter').is(':checked');
                var chktemp = $('#chktemp').is(':checked');
      ");
            WriteLiteral(@"          var twokendobox = true;
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
            //filterable: {
            //    enabled: true,
            //    delay: 1500,
            //    mode: ""menu, row"",
            //    height: 200,
            //    click: function (e) {
            //        var gd = $(""#name_grid"").data(""kendoGrid"");
            //        filter_row(gd);
            //    }
            //},
            filterable: true,
            resizable: true, 
            filterMenuInit: function (e) {
                var gd = $(""#name_grid"").data(""kendoGr");
            WriteLiteral(@"id"");
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
                     hidden: true
                },
                {
                    field: ""Out_servicereq_no"",
                    title: ""Service Request No"",
                    width: 150,
                    attributes: { style: ""text-align:right;"" },
                    filterable: {
                        extra: false,
                        operators: {
                            string: {
                     ");
            WriteLiteral(@"           contains: ""Contains""
                            }
                        }
                    }

                },
                {
                    field: ""Out_request_date"",
                    title: ""Request Date"",
                    width: 150,
                    filterable: {
                        extra: false,
                        operators: {
                            string: {
                                contains: ""Contains""
                            }
                        }
                    }

                },
            {
                field: ""Out_farmer_code"",
                title: ""Farmer ID"",
                width: 150,
                filterable: {
                    extra: false,
                    operators: {
                        string: {
                            contains: ""Contains""
                        }
                    }
                } 

            },
            {
                field: """);
            WriteLiteral(@"Out_fpomember_code"",
                title: ""Member ID"",
                width: 150,
                filterable: {
                    extra: false,
                    operators: {
                        string: {
                            contains: ""Contains""
                        }
                    }
                }

            },
            {
                field: ""Out_farmer_name"",
                title: ""Farmer Given Name"",
                width: 150,
                filterable: {
                    extra: false,
                    operators: {
                        string: {
                            contains: ""Contains""
                        }
                    }
                }

            },
            {
                field: ""Out_sur_name"",
                title: ""Surname"",
                width: 150,
                filterable: {
                    extra: false,
                    operators: {
                        string: {
      ");
            WriteLiteral(@"                      contains: ""Contains""
                        }
                    }
                }

            },
            {
                field: ""Out_certificate_no"",
                title: ""Certificate No"",
                width: 150,
                attributes: { style: ""text-align:right;"" },
                filterable: {
                    extra: false,
                    operators: {
                        string: {
                            contains: ""Contains""
                        }
                    }
                }

            },
            {
                field: ""Out_issued_date"",
                title: ""Issued Date"",
                width: 150,
                filterable: {
                    extra: false,
                    operators: {
                        string: {
                            contains: ""Contains""
                        }
                    }
                }

            },

               {
          ");
            WriteLiteral(@"         field: ""Out_dist_from"",
                   title: ""Distinct From"",
                   width: 150,
                   filterable: {
                       extra: false,
                       operators: {
                           string: {
                               contains: ""Contains""
                           }
                       }
                   }

               },
                {
                    field: ""Out_dist_to"",
                    title: ""Distinct To"",
                    width: 150,
                    filterable: {
                        extra: false,
                        operators: {
                            string: {
                                contains: ""Contains""
                            }
                        }
                    }

                },
                
                {
                    field: ""Out_request_type"",
                    title: ""Request Type"",
                    hidden: true

    ");
            WriteLiteral(@"            },
                 {
                     field: ""Out_request_type_desc"",
                     title: ""Request Type"",
                     width: 150,
                     filterable: {
                         extra: false,
                         operators: {
                             string: {
                                 contains: ""Contains""
                             }
                         }
                     }
                 },

                {
                    field: ""Out_requestsub_type"",
                    title: ""Request Sub Type"",
                    width: 150,
                     
                    hidden: true

                },
                 {
                     field: ""Out_requestsub_type_desc"",
                     title: ""requestsub_type_desc"",
                     hidden: true
                 },
                  {
                      field: ""Out_chklist_status_flag"",
                      title: ""chklist_status");
            WriteLiteral(@"_flag"",
                      hidden: true
                  },
                   {
                       field: ""Out_sr_comments"",
                       title: ""sr_comments"",
                       hidden: true
                   },
                {
                    field: ""Out_status_desc"",
                    title: ""Status"",
                    width: 150,
                    filterable: {
                        extra: false,
                        operators: {
                            string: {
                                contains: ""Contains""
                            }
                        }
                    }

                },


            {
                field: ""Out_status_code"",
                title: ""status_code"",
                hidden: true
            }],

        });
        $("".k-dropdown-operator"").css('display', 'none');
        $(""#name_grid .k-input"").attr('disabled', 'false');
    }
    function statusFilter(element) {    // D");
            WriteLiteral(@"ropdown list functionality
        element.kendoDropDownList({
            dataSource: status_Priority,
            optionLabel: ""--Select Value--""
        });
    }

    function selectRow() {
        var grid = $(""#name_grid"").data(""kendoGrid"");
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
        location.href = ""../Service/ServiceNew"";
    });
    function getSerializedSelectedRows(mode) {
        try {
            if (getlocalStorage(""ls_pageList"") != undefined) {
                var items = getlocalStorage(""ls_pageList"");
                if (items.length == 0) {
                    kendoAlert(""Please select reco");
            WriteLiteral(@"rds"");
                }

                else {
                    if (mode == ""edit"") {
                        btn_onClick('Edit');
                        location.href = ""../Service/ServiceNew"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
                        location.href = ""../Service/ServiceNew"";
                    }
                }
            }
        }
        catch (err) {

        }

    }
</script>
<script>
    function generate_SerReqName_list(res) {
        debugger;
        if (res != null) {
            var data = changedataType(res);
            $(""#gd_serName"").empty();
            $(""#gd_serName"").append(""<div id='name_grid'></div>"");
            SerNamegrid(data);
        }
        else {
            SerNamegrid([]);
        }
    }

    function listRefresh() {
        setlocalStorage('flt_condition', """");
        listpageloadfetch();
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