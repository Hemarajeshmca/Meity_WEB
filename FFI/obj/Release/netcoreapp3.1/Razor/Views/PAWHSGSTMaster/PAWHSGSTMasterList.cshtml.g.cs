#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSGSTMaster\PAWHSGSTMasterList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ea06526ae8ac697bd96df04e8f2e65548bedd050"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PAWHSGSTMaster_PAWHSGSTMasterList), @"mvc.1.0.view", @"/Views/PAWHSGSTMaster/PAWHSGSTMasterList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ea06526ae8ac697bd96df04e8f2e65548bedd050", @"/Views/PAWHSGSTMaster/PAWHSGSTMasterList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_PAWHSGSTMaster_PAWHSGSTMasterList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/HelpFile.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/common.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSGSTMaster\PAWHSGSTMasterList.cshtml"
  
    ViewBag.Form = "GST Master";
    Layout = "~/Views/Shared/FormViewLayout2.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <div id=\"gst_grid\"></div>\r\n    </div>\r\n</div>\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "ea06526ae8ac697bd96df04e8f2e65548bedd0504529", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "ea06526ae8ac697bd96df04e8f2e65548bedd0505568", async() => {
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
            WriteLiteral(@"
<script>
    var data = [{
    }];
    function GstGrid(data) {
        try {
            $(""#gst_grid"").kendoGrid(
                {
                    dataSource: {
                        data: data,
                        schema: {
                            model: {
                                fields: {
                                    action: { type: ""string"" },
                                    state: { type: ""string"" },
                                    hsn_code: { type: ""string"" },
                                    hsn_description: { type: ""string"" },
                                    cgst: { type: ""string"" },
                                    sgst: { type: ""string"" },
                                    ugst: { type: ""string"" },
                                    igst: { type: ""string"" }
                                }
                            }
                        }
                    },
                    toolbar: ""<a class='k-grid-add' id=");
            WriteLiteral(@"'btnSave' href=''><span class='fa fa-plus' style='color:Black'></span></a>"",
                    height: 400,
                    groupable: false,

                    sortable: true,
                    selectable: true,
                    navigatable: true,

                    columns: [
                        {
                            command: [
                                {
                                    name: ""Delete"",
                                    id: ""Delete"",
                                    imageClass: ""fa fa-close"",
                                    click: function (e) {
                                        var grid = $(""#gst_grid"").data(""kendoGrid"");
                                        var dataItem = $(""#gst_grid"").data(""kendoGrid"").dataItem($(e.target).closest(""tr""));
                                        DeleteWindowEvent(e, dataItem, grid);
                                        e.stopImmediatePropagation()
                               ");
            WriteLiteral(@"     }
                                },
                            ], title: ""Action"", width: ""50px"",
                        },
                       {
                           field: ""state"",
                           title: ""State"",
                           filterable: {
                               cell: {
                                   operator: ""contains"",
                                   inputWidth: 1500
                               }
                           },
                           editor: function (container, options) {
                               combo_editor_man(container, ""cmb_"" + options.field, eval(options.field + ""_list""), options.field, """", ""gst_grid"")
                           },
                       },
                       {
                           field: ""hsn_code"",
                           title: ""HSN Code"",
                           filterable: {
                               cell: {
                                   operato");
            WriteLiteral(@"r: ""contains"",
                                   inputWidth: 1500
                               }
                           },
                           editor: '<div class=""input-group input-group-sm""><input type=""text"" readonly name=""hsn_code"" maxlength=""50"" style=""width:100px;color:white""  data-bind=""value:hsn_code""/><span class=""input-group-btn"" style=""padding-right: 150px;""><a class=""HelpWindow fa fa-search fa-lg"" data-toggle=""modal"" href=""/HelpFilter/HelpFilter"" hdrtitle=""Details"" searchid=""S01"" data-target=""#HelpModal"" onclick=transfer(this,""grid"",""gst_grid"",""GstGrid"") title=""Search"" style=""font-size: 15px; padding-left: 10px;""></a> </span> </div>',
                       },
                       {
                           field: ""hsn_description"",
                           title: ""HSN Description"",
                           filterable: {
                               cell: {
                                   operator: ""contains"",
                                   inputWidth: 15");
            WriteLiteral(@"00
                               }
                           }
                       },
                        {
                            field: ""cgst"",
                            title: ""CGST"",
                            filterable: {
                                cell: {
                                    operator: ""contains"",
                                    inputWidth: 1500
                                }
                            },
                            attributes: { style: ""text-align:right;"" },
                            editor: function (container, options) {
                                numeric_editor(container, options.field, '50', '0');
                            }
                        },
                        {
                            field: ""sgst"",
                            title: ""SGST/UGST"",
                            filterable: {
                                cell: {
                                    operator: ""contains"",
");
            WriteLiteral(@"                                    inputWidth: 1500
                                }
                            },
                            attributes: { style: ""text-align:right;"" },
                            editor: function (container, options) {
                                numeric_editor(container, options.field, '50', '0');
                            }
                        },
                         //{
                         //    field: ""ugst"",
                         //    title: ""UGST"",
                         //    filterable: {
                         //        cell: {
                         //            operator: ""contains"",
                         //            inputWidth: 1500
                         //        }
                         //    }
                         //},
                         {
                             field: ""igst"",
                             title: ""IGST"",
                             filterable: {
                  ");
            WriteLiteral(@"               cell: {
                                     operator: ""contains"",
                                     inputWidth: 1500
                                 }
                             },
                             attributes: { style: ""text-align:right;"" },
                             editor: function (container, options) {
                                 numeric_editor(container, options.field, '50', '0');
                             }
                         },
                    ],
                    editable: true
                });
            var combo_data1 = [{ code: 1, description: ""TamilNadu"" }, { code: 2, description: ""Kerala"" },
            { code: 2, description: ""AandraPradesh"" }];
            state_list = getGridComboList(combo_data1);
        }
        catch (err) {
            alert(err);
        }
    }
</script>

<script>
    $(document).ready(function () {
        master_Flmain();
        GstGrid();
        $(""#frmlayerdiv"").hide();
    ");
            WriteLiteral(@"    $("".file_attach"").attr(""hdrtitle"", ""GST Master"");
        $("".notes"").attr(""hdrtitle"", ""GST Master"");
        $(""#lblForm_menuid"").text(""GST Master"");
    });
</script>
<script>
    function grid_control() {
        var control_Name = [

        ];
        return control_Name;
    }

    function form_control() {
        var control_Name = [
            { ""dataCol"": ""ccbill_no"", ""controlId"": ""txt_bill"", ""type"": ""Text"" },

        ];
        return control_Name;

    }
    function trans_input_data() {
        var trans_coll = [
            { ""trasfer"": ""Yes"", ""dataCol"": ""ccbill_no"", ""controlId"": """", ""grid_id"": """", ""grid_row_col"": """" },
            { ""trasfer"": ""No"", ""dataCol"": """", ""controlId"": """", ""grid_id"": """", ""grid_row_col"": """" }
        ];
        return trans_coll;
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
