#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Apply\Applylist.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "dc4d27e0c9eee06dad9461aa74614ee9e75e42ed"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Apply_Applylist), @"mvc.1.0.view", @"/Views/Apply/Applylist.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"dc4d27e0c9eee06dad9461aa74614ee9e75e42ed", @"/Views/Apply/Applylist.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_Apply_Applylist : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_shareapp_form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/Scripts/json2.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/Scripts/jquery.collapse.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/Scripts/jquery.collapse_storage.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/Scripts/jquery.collapse_cookie_storage.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Apply\Applylist.cshtml"
  
    ViewBag.List = "Apply For Shares";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "dc4d27e0c9eee06dad9461aa74614ee9e75e42ed7089", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"gd_shareapp\">\r\n                <div id=\"apply_grid\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "dc4d27e0c9eee06dad9461aa74614ee9e75e42ed8859", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "dc4d27e0c9eee06dad9461aa74614ee9e75e42ed9898", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "dc4d27e0c9eee06dad9461aa74614ee9e75e42ed10937", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "dc4d27e0c9eee06dad9461aa74614ee9e75e42ed11977", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "dc4d27e0c9eee06dad9461aa74614ee9e75e42ed13017", async() => {
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
    click_act_name = ""ApplyNew"";
    click_ctrl_name = ""Apply"";
    form_list_url = '../' + click_ctrl_name + '/' + click_act_name;
</script>

<script>
    var menuId = """";
    var permission = """";
    $(document).ready(function () {
        $("".adv_filter"").attr(""hdrtitle"", ""Share Application Details"");
        $("".adv_filter"").attr(""fltid"", ""shareapp_fltr"");
        $("".Export"").attr(""hdrtitle"", ""Share Application Details"");
        $("".Export"").attr(""SubTreeId"", ""PSHAPP"");
        //$(""#btn_Edit"").hide();
        $(""#RI"").hide();
        $(""#FPO"").hide();       
        Screen_Id = ""PSHAPP"";
        permission = sec_Permission(Screen_Id);
        //page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        listpageloadfetch();
    });
</script>

<script>
    function listpageloadfetch() {
        try {
            var formval = form_Serialize(""frm_shareapp_form"");
            var obj_val = JSON.parse(formval);
            obj_val.Filt");
            WriteLiteral(@"erBy_Option = ""ALL"";
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
            var Context = data.context;
            $.ajax({
                type: ""POST"",
                url: '/Apply/ApplyListfetch',
                dataType: 'json',
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, FilterBy_Option: Context.Filter.FilterBy_Option, FilterBy_Code: Context.Filter.FilterBy_Code, FilterBy_Fromvalue: Context.Filter.FilterBy_FromValue, FilterBy_ToValue: Context.Filter");
            WriteLiteral(@".FilterBy_ToValue }),
                contentType: 'application/json; charset=utf-8',
                success: function (response) {
                    //var list = JSON.parse(response);
                    if (response.context.List != null) {
                        generate_ProcessShareApp_list(response.context.List);
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
                $.each(status_Priority, function (sindex, svalue) {
                    if (svalue == value.status_desc) {
           ");
            WriteLiteral(@"             flag = true;
                    }
                });
                if (flag == false) {
                    status_Priority.push(value.status_desc);
                }
            });
            $(""#apply_grid"").kendoGrid(
                {
                    dataSource: {
                        data: data,
                        pageSize: 20,
                        change: function (e) {
                            setTimeout(function () {
                                var gd = $(""#apply_grid"").data(""kendoGrid"");
                                filter_row(gd);
                                $('.k-i-close').css('display', 'none');
                                $('button.k-button-icon').css('display', 'none');
                                $('#apply_grid .k-input').prop('disabled', false);
                                $('#apply_grid .k-input').prop('readonly', true);

                            }, 1);
                        },
                    },
    ");
            WriteLiteral(@"                toolbar: ""<button type='button' id='Exportclick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
                    excelExport: function (e) {
                        var gd = $(""#apply_grid"").data(""kendoGrid"");
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
                            exportfunction(e");
            WriteLiteral(@", chkall, chkfilter, chktemp, twokendobox, gd);
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
                    //        var gd = $(""#apply_grid"").data(""kendoGrid"");
                    //        filter_row(gd);
                    //    }
                    //},
                    filterable: true,
                    resizable: true, 
                    filterMenuInit: function (e) {
                        var gd = $(""#apply_grid"").data(""kendoGrid"");
                        filter_row(gd);
                    },

                    change: selectRow,
                    height: 450,
                    sortable: true,
                    ");
            WriteLiteral(@"selectable: true,
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
                            field: ""Out_shareapp_rowid"",
                               title: "" Row Id"",                               
                               hidden: true,
                           },


                            {
                                field: ""Out_fpoorgn_code"",
                                title: ""fpoorgn_code"", 
                                hidden: true,
                            },
                             {
                                 field: ""Out_member_name"",
                                 title: ""member_name"", 
                   ");
            WriteLiteral(@"              hidden: true,
                        },
                      
                        {
                            field: ""Out_shareapp_no"",
                            title: ""Application No"",
                            attributes: { style: ""text-align:right;"" },
                            filterable: {
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
                            field: ""Out_applied_on"",
                            title: ""Applied Date"",
                            filterable: {
                                extra: false,
                                operators: {
                                    string: {");
            WriteLiteral(@"
                                        contains: ""Contains""
                                    }
                                }
                            }, 
                            width: 110
                        },
                        {
                            field: ""Out_farmer_code"",
                            title: ""Farmer ID"",
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
                            field: ""Out_fpomember_code"",
                            title: ""Member ID"",
                            filterable: {
                                extra: false,
          ");
            WriteLiteral(@"                      operators: {
                                    string: {
                                        contains: ""Contains""
                                    }
                                }
                            }, 
                            width: 150
                        },

                         {
                             field: ""Out_farmer_name"",
                             title: ""Farmer First Name"",
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
                              field: ""Out_sur_name"",
                              title: ""Surname"",");
            WriteLiteral(@"
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
                             field: ""Out_applied_shares"",
                             title: ""Applied Shares"",
                             attributes: { style: ""text-align:right;"" },
                             filterable: {
                                 extra: false,
                                 operators: {
                                     string: {
                                         contains: ""Contains""
                                     }
                                 }
           ");
            WriteLiteral(@"                  }, 
                             width: 150
                         },

                         {
                             field: ""Out_amount_due"",
                             title: ""Amount Due"",
                             attributes: { style: ""text-align:right;"" },
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
                              field: ""Out_payment_mode"",
                              title: "" payment_mode"",                            
                              hidden: true,
                          },
                           {
                ");
            WriteLiteral(@"               field: ""Out_payment_status"",
                               title: "" payment_status"",                              
                               hidden: true,
                           },
                             {
                                 field: ""Out_status_code"",
                                 title: "" status_code"",                                
                                 hidden: true,
                             },
                                {
                                    field: ""Out_shareapp_remark"",
                                    title: "" shareapp_remark"",                                   
                                    hidden: true,
                                },

                          {
                              field: ""Out_payment_mode_desc"",
                              title: ""Payment Method"",
                              filterable: {
                                  extra: false,
                    ");
            WriteLiteral(@"              operators: {
                                      string: {
                                          contains: ""Contains""
                                      }
                                  }
                              }, 
                              width: 150
                          },
                           {
                               field: ""Out_payment_ref_no"",
                               title: ""Payment Reference"",
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
                                field: ""Out_payment_status_desc"",");
            WriteLiteral(@"
                                title: ""Payment Status"",
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
                                  field: ""Out_status_desc"",
                                  title: ""Application Status"",
                                  filterable: {
                                      extra: false,
                                      operators: {
                                          string: {
                                              contains: ""Contains""
                                          }
                           ");
            WriteLiteral(@"           }
                                  }, 
                                  width: 150
                              },
                    ]

                });



            $("".k-dropdown-operator"").css('display', 'none');
            $(""#apply_grid .k-input"").attr('disabled', 'false');
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    function selectRow() {
        try {
            var grid = $(""#apply_grid"").data(""kendoGrid"");
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
    $(""#btn_Edi");
            WriteLiteral(@"t"").bind(""click"", function () {
        getSerializedSelectedRows('edit');
        //$(""#btn_new"").attr(""disabled"", true);
    });

    $(""#btn_View"").bind(""click"", function () {
        getSerializedSelectedRows('view');
        //$(""#btn_new"").attr(""disabled"", true);
    });

    $(""#btn_new"").bind(""click"", function () {
        btn_onClick('Create');
        location.href = ""../Apply/ApplyNew"";
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
                        location.href = ""../Apply/ApplyNew"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
");
            WriteLiteral(@"                        location.href = ""../Apply/ApplyNew"";
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
    function generate_ProcessShareApp_list(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
                $(""#gd_shareapp"").empty();
                $(""#gd_shareapp"").append(""<div id='apply_grid'></div>"");
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
