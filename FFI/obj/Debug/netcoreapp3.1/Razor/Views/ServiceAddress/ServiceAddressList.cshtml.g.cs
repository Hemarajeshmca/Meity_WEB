#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\ServiceAddress\ServiceAddressList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "c0dbe8f2fe4f80babb425e6e18256b30ff0d734e"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_ServiceAddress_ServiceAddressList), @"mvc.1.0.view", @"/Views/ServiceAddress/ServiceAddressList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c0dbe8f2fe4f80babb425e6e18256b30ff0d734e", @"/Views/ServiceAddress/ServiceAddressList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_ServiceAddress_ServiceAddressList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("service_address"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Service_Request_retrieveServiceRequestAddress_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Service_Request_retrieveServiceRequestList_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/retrieveServiceRequestList_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/retrieveServiceRequestAddress_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_9 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/ServiceReqAddress.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\ServiceAddress\ServiceAddressList.cshtml"
  
    ViewBag.List = "Address Change";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "c0dbe8f2fe4f80babb425e6e18256b30ff0d734e7682", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div id=\"gd_serAddress\">\r\n\r\n            <div class=\"col-xs-12\">\r\n                <div id=\"Service_grid_address\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "c0dbe8f2fe4f80babb425e6e18256b30ff0d734e9468", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "c0dbe8f2fe4f80babb425e6e18256b30ff0d734e10507", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "c0dbe8f2fe4f80babb425e6e18256b30ff0d734e11547", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "c0dbe8f2fe4f80babb425e6e18256b30ff0d734e12587", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "c0dbe8f2fe4f80babb425e6e18256b30ff0d734e13627", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "c0dbe8f2fe4f80babb425e6e18256b30ff0d734e14667", async() => {
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
            WriteLiteral(@"
<script>
    click_act_name = ""ServiceAddressForm"";
    click_ctrl_name = ""ServiceAddress"";
    form_list_url = '../' + click_ctrl_name + '/' + click_act_name;
</script>
<script>
    var menuId = """";
    var permission = """";
    $(document).ready(function () {
        $("".adv_filter"").attr(""hdrtitle"", ""Service Request Address Details"");
        $("".adv_filter"").attr(""fltid"", ""ServiceDetail"");
        $("".Export"").attr(""hdrtitle"", ""Service Request Address Details"");
        $("".Export"").attr(""SubTreeId"", ""Service Request Address"");
        Screen_Id = ""SRVADDR"";
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
            var formval = form_Serialize(""service_address"");
            var obj_val = JSON.parse(formval);
            obj_");
            WriteLiteral(@"val.FilterBy_Option = ""QCD_FPOSERVICE_ADDRCHNG"";
            obj_val.FilterBy_Code = ""."";
            if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') != """") {
                obj_val.FilterBy_Fromvalue = getlocalStorage('flt_condition');
            }
            else {
                obj_val.FilterBy_Fromvalue = ""."";
            }
            obj_val.FilterBy_Tovalue = ""."";

            var data = {};
            data.context = WebAPIProxy.getContext();
            data.context.Filter = obj_val;
            //retrieve_SerReqaddress_list(data);
            //setlocalStorage('flt_condition', """");

            var Context = data.context;
            $.ajax({
                type: ""POST"",
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, Filter: Context.Filter }),
                url: ""/ServiceAddress/ServiceList"",
                dataType: ""json"",
                ");
            WriteLiteral(@"contentType: 'application/json; charset=utf-8',
                success: function (response) {
                    debugger;
                    if (response.context != null) {
                        generate_SerReqAddress_list(response.context.List)
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



        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }

    }
    var status_Priority = [];
    function listgrid(data) {
        try {
            $.each(data, function (index, value) {
                var flag = false;
                $.each(status_Priority, function (sindex, sval");
            WriteLiteral(@"ue) {
                    if (svalue == value.status_desc) {
                        flag = true;
                    }
                });
                if (flag == false) {
                    status_Priority.push(value.status_desc);
                }
            });
            $(""#Service_grid_address"").kendoGrid(
                {
                    dataSource: {
                        data: data,
                        pageSize: 20,
                        change: function (e) {
                            setTimeout(function () {
                                var gd = $(""#Service_grid_address"").data(""kendoGrid"");
                                filter_row(gd);
                                $('.k-i-close').css('display', 'none');
                                $('button.k-button-icon').css('display', 'none');
                                $('#Service_grid_address .k-input').prop('disabled', false);
                                $('#Service_grid_address .k-input').prop(");
            WriteLiteral(@"'readonly', true);
                            }, 1);
                        },
                    },
                    toolbar: ""<button type='button' id='Exportclick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
                    excelExport: function (e) {
                        var gd = $(""#Service_grid_address"").data(""kendoGrid"");
                        var len = gd.dataSource._data.length;
                        var chkall = $('#chkall').is(':checked');
                        var chkfilter = $('#chkfilter').is(':checked');
                        var chktemp = $('#chktemp').is(':checked');
                        var twokendobox = true;
                        gd.dataSource.pageSize(len);
                        if (e.sender.dataSource._data.length == len) {
                            twokendobox = false;
                            exportfunction(e, chkall, chkfilter, chktemp, ");
            WriteLiteral(@"twokendobox, gd);
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
                    //        var gd = $(""#Service_grid_address"").data(""kendoGrid"");
                    //        filter_row(gd);
                    //    }
                    //},
                    filterable: true,
                    resizable: true, 
                    filterMenuInit: function (e) {
                        var gd = $(""#Service_grid_address"").data(""kendoGrid"");
                        filter_row(gd);
               ");
            WriteLiteral(@"     },
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
                            filterable: {
                                extra: false,
                              ");
            WriteLiteral(@"  operators: {
                                    string: {
                                        contains: ""Contains""
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
                        extra: fa");
            WriteLiteral(@"lse,
                        operators: {
                            string: {
                                contains: ""Contains""
                            }
                        }
                    }

                },
                {
                    field: ""Out_fpomember_code"",
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
                                co");
            WriteLiteral(@"ntains: ""Contains""
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
                                contains: ""Contains""
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
           ");
            WriteLiteral(@"             }
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
                       field: ""Out_dist_from"",
                       title: ""Distinct From"",
                       width: 150,
                       attributes: { style: ""text-align:right;"" },
                       filterable: {
                           extra: false,
                           operators: {
                               string: {
                                   contains: ""Contains""
                               }
                           }
         ");
            WriteLiteral(@"              }
                   },
                    {
                        field: ""Out_dist_to"",
                        title: ""Distinct To"",
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
                        field: ""Out_request_type"",
                        title: ""Request Type"",
                        hidden: true

                    },
                     {
                         field: ""Out_request_type_desc"",
                         title: ""Request Type"",
                         width: 150,
                         filterable: {
 ");
            WriteLiteral(@"                            extra: false,
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
                          title: ""chklist_status_flag"",
                          hidden: true
                      },
                       {
                           field: ""Out_");
            WriteLiteral(@"sr_comments"",
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
        catch (err) {
            javascript_log4j_root(argumen");
            WriteLiteral(@"ts.callee.name, err);

        }
    }
    function selectRow() {
        try {
            var grid = $(""#Service_grid_address"").data(""kendoGrid"");
            var selectedItem = grid.dataItem(grid.select());
            setlocalStorage(""ls_pageList"", selectedItem);
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
        location.href = ""../ServiceAddress/ServiceAddressForm"";
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
                        location.href = ""../ServiceAddress/ServiceAddressForm"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
                        location.href = ""../ServiceAddress/ServiceAddressForm"";
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
    function generate_SerReqAddress_list(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
           ");
            WriteLiteral(@"     $(""#gd_serAddress"").empty();
                $(""#gd_serAddress"").append(""<div id='Service_grid_address'></div>"");
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
            setlocalStorage('flt_condition', """");
            listpageloadfetch();
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);

        }
    }
</script>");
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
