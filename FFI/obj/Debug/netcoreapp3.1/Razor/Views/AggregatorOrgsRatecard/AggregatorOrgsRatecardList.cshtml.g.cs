#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\AggregatorOrgsRatecard\AggregatorOrgsRatecardList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "de7f9dc28df24465ee6ba9f8ae0c090ee4c6c71a"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_AggregatorOrgsRatecard_AggregatorOrgsRatecardList), @"mvc.1.0.view", @"/Views/AggregatorOrgsRatecard/AggregatorOrgsRatecardList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"de7f9dc28df24465ee6ba9f8ae0c090ee4c6c71a", @"/Views/AggregatorOrgsRatecard/AggregatorOrgsRatecardList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_AggregatorOrgsRatecard_AggregatorOrgsRatecardList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_RateCard"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Rate_Card_saveRateCard_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Rate_Card_retrieveRateCard_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Rate_Card_retrieveRateCardList_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/RateCard.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/retrieveRateCard_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_9 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/retrieveRateCardList_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_10 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/saveRateCard_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\AggregatorOrgsRatecard\AggregatorOrgsRatecardList.cshtml"
  
    ViewBag.List = "Rate Card ";
    Layout = "~/Views/Shared/ListViewLayout.cshtml";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "de7f9dc28df24465ee6ba9f8ae0c090ee4c6c71a8474", async() => {
                WriteLiteral("\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div id=\"gd_ratecard\">\r\n                <div id=\"Ratecard_grid\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n");
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "de7f9dc28df24465ee6ba9f8ae0c090ee4c6c71a10251", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "de7f9dc28df24465ee6ba9f8ae0c090ee4c6c71a11291", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "de7f9dc28df24465ee6ba9f8ae0c090ee4c6c71a12331", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "de7f9dc28df24465ee6ba9f8ae0c090ee4c6c71a13371", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "de7f9dc28df24465ee6ba9f8ae0c090ee4c6c71a14411", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "de7f9dc28df24465ee6ba9f8ae0c090ee4c6c71a15451", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "de7f9dc28df24465ee6ba9f8ae0c090ee4c6c71a16491", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "de7f9dc28df24465ee6ba9f8ae0c090ee4c6c71a17532", async() => {
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

        $("".adv_filter"").attr(""hdrtitle"", ""Rate Card List Record"");
        $("".adv_filter"").attr(""fltid"", ""RateCard"");
        $("".Export"").attr(""hdrtitle"", ""Rate Card List"");
        $("".Export"").attr(""SubTreeId"", ""AGGR_RATE"");
        list_grid_id = ""Ratecard_grid"";

        Screen_Id = ""MAPRC"";
        permission = sec_Permission(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        listpageloadfetch();
        filterhover();
    });
</script>

<script>
    function listpageloadfetch() {
        try{
        var formval = form_Serialize(""frm_RateCard"");
        var obj_val = JSON.parse(formval);
        obj_val.FilterBy_Option = ""ALL"";
        obj_val.FilterBy_Code = ""."";
        if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') != """") {
            obj_val.FilterBy_FromValue = getlocalStorag");
            WriteLiteral(@"e('flt_condition');
        }
        else {
            obj_val.FilterBy_FromValue = ""."";
        }
        obj_val.FilterBy_ToValue = ""."";
        var data = {};
        data.context = WebAPIProxy.getContext();;
        data.context.Filter = obj_val;
        retrieve_RateCard_list(data);
       // setlocalStorage('flt_condition', """");
    }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    var status_Priority = [];
    function Ratecardgrid(data) {
        try{
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
        $(""#Ratecard_grid"").kendoGrid(
         {
             dataSource: {
                ");
            WriteLiteral(@" data: data,
                 pageSize: 20,
                 change: function (e) {
                     setTimeout(function () {
                         var gd = $(""#Ratecard_grid"").data(""kendoGrid"");
                         filter_row(gd);
                         $('.k-i-close').css('display', 'none');
                         $('button.k-button-icon').css('display', 'none');
                         $('#Ratecard_grid .k-input').prop('disabled', false);
                         $('#Ratecard_grid .k-input').prop('readonly', true);

                     }, 1);
                 },
             },
             toolbar: ""<button type='button' id='Exportclick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
             excelExport: function (e) {
                 var gd = $(""#Ratecard_grid"").data(""kendoGrid"");
                 var len = gd.dataSource._data.length;
                 var chkall = $");
            WriteLiteral(@"('#chkall').is(':checked');
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
                     var gd = $(""#Ratecard_grid"").data(""kendoGrid"");
                     filter_row(gd);
                 }
        ");
            WriteLiteral(@"     },
             filterMenuInit: function (e) {
                 var gd = $(""#Ratecard_grid"").data(""kendoGrid"");
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
                       field: ""ratecard_rowid"",
                       title: ""ratecard_rowid"",
                       width: 1,
                       hidden: true,
                   },
                     {
                         field: ""ratecard_code"",
                         title: ""Rate Card ID"",
                         width: 175,
                         filterable: {
                    ");
            WriteLiteral(@"         cell: {
                                 operator: ""contains"",
                                 inputWidth: 1500
                             }
                         }
                     },
                      {
                          field: ""aggrorgn_type"",
                          title: ""aggrorgn_type"",
                          width: 1,
                          hidden: true,
                      },
                      {
                          field: ""aggrorgn_desc"",
                          title: ""aggrorgn_code"",
                          width: 1,
                          hidden: true,
                      },
                     {
                         field: ""aggrorgn_code"",
                        
                         title: ""Aggregator Org.Name"",
                         width: 175,
                         filterable: {
                             cell: {
                                 operator: ""contains"",
                        ");
            WriteLiteral(@"         inputWidth: 1500
                             }
                         }
                     },
                 {
                     field: ""aggrorgn_type_desc"",
                     title: ""Aggregator Org.Type"",
                     width: 175,
                     filterable: {
                         cell: {
                             operator: ""contains"",
                             inputWidth: 1500
                         }
                     }
                 },

                  {
                      field: ""buy_sell_flag"",
                      title: ""Buying/Selling"",
                      values: [{ text: 'Buying', value: 'B' }, { text: 'Selling', value: 'S' }, { text: 'Analyer', value: 'R' }],
                      width: 175,
                      filterable: {
                          cell: {
                              operator: ""contains"",
                              inputWidth: 1500
                          }
                      }
  ");
            WriteLiteral(@"                },
                   {
                       field: ""buy_from"",
                       title: ""buy_from"",
                       width: 1,
                       hidden: true,
                   },

                 {
                     field: ""buy_from_desc"",
                     title: ""Buying From"",
                     width: 175,
                     filterable: {
                         cell: {
                             operator: ""contains"",
                             inputWidth: 1500
                         }
                     }
                 },
                  {
                      field: ""buy_orgn_code"",
                      title: ""buy_orgn_code"",
                      width: 1,
                      hidden: true,
                  },
                  {
                      field: ""sell_to"",
                      title: ""sell_to"",
                      width: 1,
                      hidden: true,
                  },
           ");
            WriteLiteral(@"      {
                     field: ""sell_to_desc"",
                     title: ""Selling To"",
                     width: 175,
                     filterable: {
                         cell: {
                             operator: ""contains"",
                             inputWidth: 1500
                         }
                     }
                 },

                 {
                     field: ""sell_orgn_code"",
                     title: ""Selling To (Name)"",
                     width: 150,
                     filterable: {
                         cell: {
                             operator: ""contains"",
                             inputWidth: 1500
                         }
                     }

                 },

                 {
                     field: ""period_from"",
                     title: ""Effective From"",
                     width: 175,
                     filterable: {
                         cell: {
                             operator");
            WriteLiteral(@": ""contains"",
                             inputWidth: 1500
                         }
                     }
                 },
                 {
                     field: ""period_to"",
                     title: ""Effective To"",
                     width: 175,
                     filterable: {
                         cell: {
                             operator: ""contains"",
                             inputWidth: 1500
                         }
                     }
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
                 width: 175,
                 filterable: {
                     cell: {
                         operator: ""contains"",
                         inputWidth: 1500
                     ");
            WriteLiteral(@"}
                 }
             },
              {
                  field: ""mode_flag"",
                  title: ""mode_flag"",
                  width: 1,
                  hidden: true,
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
        $(""#Ratecard_grid .k-input"").attr('disabled', 'false');
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
        var grid = $(""#Ratecard_grid"").data(""kendoGrid"");
        var selectedItem = gri");
            WriteLiteral(@"d.dataItem(grid.select());
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
        location.href = ""../AggregatorOrgsRatecard/AggregatorOrgRatecardForm"";
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
       ");
            WriteLiteral(@"                 location.href = ""../AggregatorOrgsRatecard/AggregatorOrgRatecardForm"";
                    }
                    else if (mode == ""view"") {
                        btn_onClick('View');
                        location.href = ""../AggregatorOrgsRatecard/AggregatorOrgRatecardForm"";
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
    function generate_RateCard_list(res) {
        try {
        if (res != null) {
            var data = changedataType(res);
            $(""#gd_ratecard"").empty();
            $(""#gd_ratecard"").append(""<div id='Ratecard_grid'></div>"");
            Ratecardgrid(data);
        }
        else {
            Ratecardgrid([]);
        }
    }
    catch (err) {
        javascript_log4j_root(arguments.callee.name, err);

    }
    }
    function listRefresh() {
        try{
        setlocalStorage('flt_co");
            WriteLiteral("ndition\', \"\");\r\n        listpageloadfetch();\r\n    }\r\n    catch (err) {\r\n        javascript_log4j_root(arguments.callee.name, err);\r\n\r\n    }\r\n    }\r\n</script>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");
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
