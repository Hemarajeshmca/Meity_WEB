#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Notification\Notificationlist.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "a5d7b1839952c9149e6f45f4f424a4489bd309a9"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Notification_Notificationlist), @"mvc.1.0.view", @"/Views/Notification/Notificationlist.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a5d7b1839952c9149e6f45f4f424a4489bd309a9", @"/Views/Notification/Notificationlist.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_Notification_Notificationlist : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 2 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Notification\Notificationlist.cshtml"
  
    ViewBag.List = "Notification";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"<div class=""row"">
<div class=""col-xs-12"">
    <div id=""notification_grid""></div>
</div>
</div>

<script>
    click_act_name = ""NotificationForm"";
    click_ctrl_name = ""Notification"";
    form_list_url = '../' + click_ctrl_name + '/' + click_act_name;
</script>


<script>
    var data = [{
        screen_name: ""Localization Definition"", Created_Date: ""04/11/2016"", FY: ""Display"", Doc_Number_preview: """", Status: ""active"",

    }];
    $(""#notification_grid"").kendoGrid(
        {
            dataSource: {
                data: data,
                pageSize: 20,
                change: function (e) {
                    setTimeout(function () {
                        var gd = $(""#notification_grid"").data(""kendoGrid"");
                        filter_row(gd);
                        $('.k-i-close').css('display', 'none');
                        $('button.k-button-icon').css('display', 'none');
                        $('#notification_grid .k-input').prop('disabled', false);
        ");
            WriteLiteral(@"                $('#notification_grid .k-input').prop('readonly', true);

                    }, 1);
                },
            },
            toolbar: ""<button type='button' id='Exportclick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
            excelExport: function (e) {
                var chkall = $('#chkall').is(':checked');
                var chkfilter = $('#chkfilter').is(':checked');
                var chktemp = $('#chktemp').is(':checked');
                var gd = $(""#notification_grid"").data(""kendoGrid"");
                var len = gd.dataSource._data.length;
                gd.dataSource.pageSize(len);
                exportfunction(e, chkall, chkfilter, chktemp);
                gd.dataSource.pageSize('10');
            },
            filterable: {
                enabled: true,
                delay: 1500,
                mode: ""menu, row"",
                height: 200,");
            WriteLiteral(@"
                click: function (e) {
                    var gd = $(""#notification_grid"").data(""kendoGrid"");
                    filter_row(gd);
                }
            },
            filterMenuInit: function (e) {
                var gd = $(""#notification_grid"").data(""kendoGrid"");
                filter_row(gd);
            },
            dataBound: function (o) {
                var gd = $(""#notification_grid"").data(""kendoGrid"");
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
            //change: onChangeSelection,
            selectable: ""singl"",   //  Grid Row Selection
            pageable: {
                refresh: false,
                pageSizes: true,
         ");
            WriteLiteral(@"       buttonCount: 5
            },
            navigatable: true,
            groupable: false,

            columns: [
                   {
                       title: ""Sel"", width: 40,
                       template: '#=sel_checkbox()#'

                   },
                {
                    field: ""type"",
                    title: ""Type"",
                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    }
                },

                 {
                     field: ""code"",
                     title: ""Code"",
                     filterable: {
                         cell: {
                             operator: ""contains"",
                             inputWidth: 1500
                         }
                     }
                 },

                  {
                      field: ""name"",
                     ");
            WriteLiteral(@" title: ""Name"",
                      filterable: {
                          cell: {
                              operator: ""contains"",
                              inputWidth: 1500
                          }
                      }
                  },
                {
                    field: ""description_english"",
                    title: ""Description in English"",
                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    }
                },
                {
                    field: ""description_local"",
                    title: ""Description in Local Lang"",
                    filterable: {
                        cell: {
                            operator: ""contains"",
                            inputWidth: 1500
                        }
                    }
                },

            {
                field:");
            WriteLiteral(@" ""Status"",
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
    $(""#notification_grid .k-input"").attr('disabled', 'false');

    var gridRowID = -1;
    function sel_checkbox() {
        gridRowID++;
        return '<input id=""chk_sel_' + gridRowID + '"" class=""checkbox"" type=""checkbox"" />';
    }


</script>

<script>
    $(""#btn_Edit"").bind(""click"", function () {
        btn_onClick('Edit');
        location.href = ""../Notification/NotificationForm"";
    });

    $(""#btn_View"").bind(""click"", function () {
        btn_onClick('View');
        location.href = ""../Notification/NotificationForm"";
    });

    $(""#btn_new"").bind(""click"", function () {
        btn_onClick('Create');
        location.href = ""../N");
            WriteLiteral(@"otification/NotificationForm"";
    });
</script>
<script>
    $(document).ready(function () {

        $("".adv_filter"").attr(""hdrtitle"", ""Farmer Profile List Record"");
        $("".adv_filter"").attr(""fltid"", """");
        $("".Export"").attr(""hdrtitle"", ""Notification List"");


    });
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
