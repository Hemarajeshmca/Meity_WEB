#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Statutory\Statutory.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "cd6472c04a6e7c72e8f2a154447d4261000b2379"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Statutory_Statutory), @"mvc.1.0.view", @"/Views/Statutory/Statutory.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"cd6472c04a6e7c72e8f2a154447d4261000b2379", @"/Views/Statutory/Statutory.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_Statutory_Statutory : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("Master_form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Statutory\Statutory.cshtml"
  
    ViewBag.Form = "Statutory Reports";
    Layout = "~/Views/Shared/FormViewLayout2.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "cd6472c04a6e7c72e8f2a154447d4261000b23794428", async() => {
                WriteLiteral(@"
    <div class=""panel panel-default"">
        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
            <div class=""row"" style=""padding-bottom:15px"">
                <div class=""col-sm-12"">
                    <div class=""col-sm-4"">
                        <div class=""form-group"">
                            <label for=""txtValidity"" class=""col-md-5 control-label"">From Date:</label>
                            <div class="" col-sm-7"">

                                <input class=""cusDate"" data-role='datepicker' id=""txtValidity"" data-checkdate-msg=""Enter Valid Date"" name=""valid_until"" style=""width:100%"" />
                                <span data-for='valid' class='k-invalid-msg'></span>
                            </div>
                        </div>
                    </div>
                    <div class=""col-sm-4"">
                        <div class=""form-group"">
                            <label for=""txtValidity"" class=""col-md-5 control-label"">To Date:</label>
");
                WriteLiteral(@"                            <div class="" col-sm-7"">

                                <input class=""cusDate"" data-role='datepicker' id=""txtValidity"" data-checkdate-msg=""Enter Valid Date"" name=""valid_until"" style=""width:100%"" />
                                <span data-for='valid' class='k-invalid-msg'></span>
                            </div>
                        </div>
                    </div>
                    <div class=""col-sm-4"">
                        <div class=""form-group"">
                            <label for=""txtValidity"" class=""col-md-5 control-label"">Report Run Date:</label>
                            <div class="" col-sm-7"">

                                <input class=""cusDate"" data-role='datepicker' id=""txtValidity"" data-checkdate-msg=""Enter Valid Date"" name=""valid_until"" style=""width:100%"" />
                                <span data-for='valid' class='k-invalid-msg'></span>
                            </div>
                        </div>
                    </di");
                WriteLiteral(@"v>

                    <div class=""col-sm-4"">
                        <div class=""form-group"">
                            <label for=""cmb_statutory "" class=""col-md-5 control-label "">Select Report To Run</label>
                            <div class=""col-sm-7"">
                                <input id=""cmb_statutory"" name=""Active_id"" data-role=""filtercombo"" style=""width:200%"" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=""row"" style=""padding-bottom:15px"">
                <div class=""col-xs-12"">
                    <div id=""grid_Drop_list"">
                    </div>
                </div>
            </div>
");
                WriteLiteral("        </div>\r\n      </div>\r\n    ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
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
    $(document).ready(function () {

        // $(""#form_design"").css(""padding-top"", ""95px"");
        master_userRoleNew1();
        kendodate_format();
        gridFilter();
        $("".txtValidity"").kendoDatePicker();
        var passdata = """";
        var GetRoleData = ajaxcall_param(""../Statutory/Xmlcmb_Localbind"", JSON.stringify(passdata));
        var GetRoleDatajson = JSON.parse(GetRoleData);
        var i;
        var combo_data = [];
        var items = {};
        for (i = 0; i < GetRoleDatajson.length; i++) {
            items[i] = GetRoleDatajson[i].Orgl
            combo_data.push({ code: i, desc: items[i] });
        }
        filter_combobox(""cmb_statutory"", combo_data);
    });
    </script>
<script>
    var data = [{report_ref_no:""AL-REP-021"",report_name:""Index To Members"",report_date:""11/01/2017"",records_processed:""950""}];
   
            $(""#grid_Drop_list"").kendoGrid({
                dataSource: {
                    data: data,
                    sc");
            WriteLiteral(@"hema: {
                        model: {
                            fields: {

                                report_ref_no: { type: ""string"" },
                                report_name: { type: ""string"" },
                                report_date: { type: ""string"" },
                                records_processed: { type: ""string"" },

                                mode_flag: { type: ""string"", defaultValue: ""I"" }
                            }
                        }
                    }
                },

                height: 400,
                groupable: false,
                dataBinding: setDefaultValues,

                dataBound: function (e) {
                    resultData = e.sender._data;
                    var rows = $('#grid_Drop_list').data('kendoGrid').tbody.children();
                    setColor(rows, resultData);
                },


                sortable: true,
                selectable: true,
                navigatable: true,
       ");
            WriteLiteral(@"         columns: [{
                    command: [
            {
                name: ""View"",
                id: ""View"",
                
            },
                    ], title: ""Action"", width: ""25px"",
                }, {


                    field: ""report_ref_no"",
                    title: ""Report Reference No"",
                    width: 100

                },

                {
                    field: ""report_name"",
                    title: ""Report Name"",
                    width: 100

                },
                 {
                     field: ""report_date"",
                     title: ""Report Date"",
                     width: 100

                 },
                  {
                      field: ""records_processed"",
                      title: ""Records Processed"",
                      width: 100

                  },


                {
                    field: ""mode_flag"",
                    title: ""Mode"",
                    hid");
            WriteLiteral("den: true\r\n                }],\r\n                editable: true\r\n            });\r\n       \r\n</script>\r\n\r\n");
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
