#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSProduceCalendar\PAWHSProduceCalendarList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "4b05b0754aeeb59bb4919b0542db3135c602267c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PAWHSProduceCalendar_PAWHSProduceCalendarList), @"mvc.1.0.view", @"/Views/PAWHSProduceCalendar/PAWHSProduceCalendarList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4b05b0754aeeb59bb4919b0542db3135c602267c", @"/Views/PAWHSProduceCalendar/PAWHSProduceCalendarList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_PAWHSProduceCalendar_PAWHSProduceCalendarList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PAWHS_saveProduceCalendar_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PAWHS_getProduceCalendar_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/PAWHS_getProduceCalendarList_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/ProduceCalendar.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Produce_Calendar_PAWHS_getProduceCalendar_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Produce_Calendar_PAWHS_saveProduceCalendar_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Produce_Calendar_PAWHS_getProduceCalendarList_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/ExportExcel.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_9 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/Common_func.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSProduceCalendar\PAWHSProduceCalendarList.cshtml"
  
    ViewBag.List = "Produce Calendar";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <div id=\"produCalendr\"></div>\r\n    </div>\r\n</div>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4b05b0754aeeb59bb4919b0542db3135c602267c7740", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4b05b0754aeeb59bb4919b0542db3135c602267c8779", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4b05b0754aeeb59bb4919b0542db3135c602267c9818", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4b05b0754aeeb59bb4919b0542db3135c602267c10857", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4b05b0754aeeb59bb4919b0542db3135c602267c11897", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4b05b0754aeeb59bb4919b0542db3135c602267c12937", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4b05b0754aeeb59bb4919b0542db3135c602267c13977", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4b05b0754aeeb59bb4919b0542db3135c602267c15017", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4b05b0754aeeb59bb4919b0542db3135c602267c16057", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4b05b0754aeeb59bb4919b0542db3135c602267c17097", async() => {
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
    function ProduceCalendarList(data) {
       
            //var data = [{}];
            $(""#produCalendr"").kendoGrid({
                dataSource: {
                    data: data,
                    pageSize: 20,
                    change: function (e) {
                        setTimeout(function () {
                            var gd = $(""#produCalendr"").data(""kendoGrid"");
                            filter_row(gd);
                            $('.k-i-close').css('display', 'none');
                            $('button.k-button-icon').css('display', 'none');
                            $('#produCalendr .k-input').prop('disabled', false);
                            $('#produCalendr .k-input').prop('readonly', true);

                        }, 1);
                    },
                },
                toolbar: ""<button type= 'button' id = 'Exportclick' class = 'k-grid-excel' style = 'display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &n");
            WriteLiteral(@"bsp Export To Excel</span></button>"",

                excelExport: function (e) {
                    var gd = $(""#produCalendr"").data(""kendoGrid"");
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
                ");
            WriteLiteral(@"    enabled: true,
                    delay: 1500,
                    mode: ""menu, row"",
                    height: 200,
                    click: function (e) {
                        var gd = $(""#produCalendr"").data(""kendoGrid"");
                        filter_row(gd);
                    }
                },
                filterMenuInit: function (e) {
                    var gd = $(""#produCalendr"").data(""kendoGrid"");
                    filter_row(gd);
                },
                dataBound: function (o) {
                 
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
                groupable: false");
            WriteLiteral(@",

                columns: [
                //    {
                //title: ""Action"", width: ""50px"",
                //    },

                {
                        field: ""Out_pac_no"",
                    title: ""PAC No."",
                    width: 100,
                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    },
                },
                {
                    field: ""Out_farmer_code"",
                    title: ""Farmer Code"",
                    width: 100,
                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    },
                },
                {
                    field: ""Out_agg_code"",
                    title: ""Farmer Name"",
                    width: 140");
            WriteLiteral(@",
                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    },
                },
                {
                    field: ""Out_pac_year"",
                    title: ""PAC Year"",
                    width: 100,
                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    },
                },
                 {
                     field: ""Out_item_code"",
                     title: ""Item"",
                     width: 140,
                     filterable: {
                         cell: {
                             operator: ""contains"",
                             inputWidth: 1500
                         }
                     },
                 },
                 {
             ");
            WriteLiteral(@"        field: ""Out_jan"",
                     title: ""Total Quantity"",
                     width: 140,
                     filterable: {
                         cell: {
                             operator: ""contains"",
                             inputWidth: 1500
                         }
                     },
                 },
                  {
                      field: ""Out_producecal_rowid"",
                      title: ""Producecal rowid No."",
                      width: 100,
                      filterable: {
                          cell: {
                              operator: ""contains"",
                              inputWidth: 1500
                          }
                      },
                      hidden: true,
                  },
                 {
                     field: ""Out_pac_date"",
                     title: ""PAC date"",
                     width: 100,
                     filterable: {
                         cell: {
            ");
            WriteLiteral(@"                 operator: ""contains"",
                             inputWidth: 1500
                         }
                     },
                     hidden: true,
                    },
                    {
                        field: ""Out_jan"",
                        title: ""jan"",
                        width: 100,
                        filterable: {
                            cell: {
                                operator: ""contains"",
                                inputWidth: 1500
                            }
                        },
                        hidden: true,
                    },
                  {
                      field: ""Out_feb"",
                      title: ""feb"",
                      width: 100,
                      filterable: {
                          cell: {
                              operator: ""contains"",
                              inputWidth: 1500
                          }
                      },
                 ");
            WriteLiteral(@"     hidden: true,
                  },
                  {
                      field: ""Out_mar"",
                      title: ""mar"",
                      width: 100,
                      filterable: {
                          cell: {
                              operator: ""contains"",
                              inputWidth: 1500
                          }
                      },
                      hidden: true,
                  },
                  {
                      field: ""Out_apr"",
                      title: ""apr"",
                      width: 100,
                      filterable: {
                          cell: {
                              operator: ""contains"",
                              inputWidth: 1500
                          }
                      },
                      hidden: true,
                  },
                  {
                      field: ""Out_may"",
                      title: ""may"",
                      width: 100,
      ");
            WriteLiteral(@"                filterable: {
                          cell: {
                              operator: ""contains"",
                              inputWidth: 1500
                          }
                      },
                      hidden: true,
                  },
                  {
                      field: ""Out_jun"",
                      title: ""jun"",
                      width: 100,
                      filterable: {
                          cell: {
                              operator: ""contains"",
                              inputWidth: 1500
                          }
                      },
                      hidden: true,
                  },
                  {
                      field: ""Out_jul"",
                      title: ""jul"",
                      width: 100,
                      filterable: {
                          cell: {
                              operator: ""contains"",
                              inputWidth: 1500
               ");
            WriteLiteral(@"           }
                      },
                      hidden: true,
                  },
                  {
                      field: ""Out_aug"",
                      title: ""aug"",
                      width: 100,
                      filterable: {
                          cell: {
                              operator: ""contains"",
                              inputWidth: 1500
                          }
                      },
                      hidden: true,
                  },
                  {
                      field: ""Out_sep"",
                      title: ""sep"",
                      width: 100,
                      filterable: {
                          cell: {
                              operator: ""contains"",
                              inputWidth: 1500
                          }
                      },
                      hidden: true,
                  },
                  {
                      field: ""Out_oct"",
                     ");
            WriteLiteral(@" title: ""oct"",
                      width: 100,
                      filterable: {
                          cell: {
                              operator: ""contains"",
                              inputWidth: 1500
                          }
                      },
                      hidden: true,
                  },
                  {
                      field: ""Out_nov"",
                      title: ""nov"",
                      width: 100,
                      filterable: {
                          cell: {
                              operator: ""contains"",
                              inputWidth: 1500
                          }
                      },
                      hidden: true,
                  },
                  {
                      field: ""Out_dec"",
                      title: ""dec"",
                      width: 100,
                      filterable: {
                          cell: {
                              operator: ""contains"",
      ");
            WriteLiteral(@"                        inputWidth: 1500
                          }
                      },
                      hidden: true,
                  },
                  {
                      field: ""Out_status_code"",
                      title: ""status code"",
                      width: 100,
                      filterable: {
                          cell: {
                              operator: ""contains"",
                              inputWidth: 1500
                          }
                      },
                      hidden: true,
                  },
                    {
                        field: ""Out_status_desc"",
                        title: ""status desc"",
                        width: 100,
                        filterable: {
                            cell: {
                                operator: ""contains"",
                                inputWidth: 1500
                            }
                        },
                        hidden: t");
            WriteLiteral(@"rue,
                    },
                    {
                        field: ""Out_row_timestamp"",
                        title: ""row timestamp"",
                        width: 100,
                        filterable: {
                            cell: {
                                operator: ""contains"",
                                inputWidth: 1500
                            }
                        },
                        hidden: true,
                    },


                ],
                
            });
            $("".k-dropdown-operator"").css('display', 'none');
            $(""#produCalendr .k-input"").attr('disabled', 'false');
        }
    function selectRow() {

        try {
            var grid = $(""#produCalendr"").data(""kendoGrid"");
            var selectedItem = grid.dataItem(grid.select());
            setlocalStorage(""ls_pageList"", selectedItem);
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
  ");
            WriteLiteral(@"      }
    }
</script>

<script>
    $(""#btn_Edit"").bind(""click"", function () {
        getSerializedSelectedRows('edit');

        //location.href = ""../PAWHSProduceCalendar/PAWHSProduceCalendarForm"";
    });

    $(""#btn_View"").bind(""click"", function () {
        getSerializedSelectedRows('View');
        
    });

    $(""#btn_new"").bind(""click"", function () {
        btn_onClick('Create');
        location.href = ""../PAWHSProduceCalendar/PAWHSProduceCalendarForm"";
    });
    function getSerializedSelectedRows(mode) {
        try {
            debugger;
            if (getlocalStorage(""ls_pageList"") != undefined) {
                var items = getlocalStorage(""ls_pageList"");
                if (items.length == 0) {
                    kendoAlert(""Please select records"");
                }

                else {
                    if (mode == ""edit"") {
                        btn_onClick('Edit');
                        location.href = ""../PAWHSProduceCalendar/PAWHSProduceC");
            WriteLiteral(@"alendarForm"";
                    }
                    else if (mode == ""View"") {
                        btn_onClick('View');
                        location.href = ""../PAWHSProduceCalendar/PAWHSProduceCalendarForm"";
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
    $(document).ready(function () {
        ProduceCalendarList();
        //$(""#btn_new"").hide();
        $("".adv_filter"").attr(""hdrtitle"", ""Produce Calendar List"");
        $("".adv_filter"").attr(""fltid"", ""prodCal"");
        $("".Export"").attr(""hdrtitle"", ""Produce Calendar List"");


        $("".Export"").attr(""SubTreeId"", ""PWPRODCAL"");
        list_grid_id = ""produCalendr"";
        listpageloadfetch();

        //var data = {};
        //data.context = WebAPIProxy.getContext();
        //   data.context.Filter = """";
        Screen_Id = ""PWPRODCAL"";
        permission = sec_Permissi");
            WriteLiteral(@"on(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        filterhover();
    });

    function listpageloadfetch() {
        debugger;
        try {
            var formval = form_Serialize(""Produce_Calendar"");
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
            data.context = WebAPIProxy.getContext();;
            data.context.Filter = obj_val;
            var Context = data.context;
            $.ajax({
                type: ""POST"",
                url: '/PAWHSProduceCalendar/PAWHSProdu");
            WriteLiteral(@"ceCalendarListfetch',
                dataType: 'json',
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, FilterBy_Option: Context.Filter.FilterBy_Option, FilterBy_Code: Context.Filter.FilterBy_Code, FilterBy_Fromvalue: Context.Filter.FilterBy_FromValue, FilterBy_ToValue: Context.Filter.FilterBy_ToValue }),
                contentType: 'application/json; charset=utf-8',
                success: function (response) {
                    //var list = JSON.parse(response);
                    if (response.context.List != null) {
                        generate_ProduceCal_list(response.context.List);
                    }
                    else {
                        ProduceCalendarList([]);
                    }
                },
                error: function (er) {
                    alert(er)
                    console.log(er)
                }

            });
        
            //retrieve");
            WriteLiteral(@"_Produce_calendar_list(data);
            //setlocalStorage('flt_condition', """");
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    </script>
    <script>
        function generate_ProduceCal_list(res) {
            try {
                if (res != null) {
                    var data = changedataType(res);
                    $(""#Produce_Calendar"").empty();
                    ProduceCalendarList(data);
                }
                else {
                    ProduceCalendarList([]);
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
    
    ");
            WriteLiteral("</script>\r\n");
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
