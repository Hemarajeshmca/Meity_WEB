#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\FLCashReceiptsDeposit\FLCashReceiptsDeposit.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "44995ea74ff8b69f20cd1cb86cfff1cd404297ec"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_FLCashReceiptsDeposit_FLCashReceiptsDeposit), @"mvc.1.0.view", @"/Views/FLCashReceiptsDeposit/FLCashReceiptsDeposit.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"44995ea74ff8b69f20cd1cb86cfff1cd404297ec", @"/Views/FLCashReceiptsDeposit/FLCashReceiptsDeposit.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_FLCashReceiptsDeposit_FLCashReceiptsDeposit : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
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
            WriteLiteral("\r\n");
#nullable restore
#line 2 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\FLCashReceiptsDeposit\FLCashReceiptsDeposit.cshtml"
  
    ViewBag.Form = "FL-Cash Receipts & Deposit Slips";
    Layout = "~/Views/Shared/FormViewLayout2.cshtml";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "44995ea74ff8b69f20cd1cb86cfff1cd404297ec4587", async() => {
                WriteLiteral(@"
    <div class=""panel panel-default"">
        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
            <div class=""row"" style=""padding-bottom:15px"">
                <div class=""col-sm-5"">
                    <div class=""form-group"">
                        <label for=""txtselect_rep"" class=""col-sm-4 control-label "">Receipts</label>
                        <div class=""col-sm-7"">
                            <input id=""cmbselec_rep"" data-role=""filtercombo"" style=""width:100%"">
                        </div>
                    </div>
                </div>
            </div>
            <div class=""row"" style=""padding-bottom:15px"">
                <div class=""col-sm-4"">
                    <div class="" form-group"">
                        <label for=""txtreport_run"" class="" col-sm-5 control-label"">Run Date</label>
                        <div class="" col-sm-4"">
                            <input class=""cusDate"" data-role='datepicker' id=""txtValidity"" data-checkdate-msg=""Ent");
                WriteLiteral(@"er Valid Date"" name=""valid_until"" style=""width:100%"" />
                            <span data-for='valid' class='k-invalid-msg'></span>
                        </div>
                    </div>
                </div>
                <div class=""col-sm-4"">
                    <div class="" form-group"">
                        <label for=""txtins_mon"" class="" col-sm-5 control-label"">Instalment Month</label>
                        <div class="" col-sm-4"">
                            <input class=""cusDate"" data-role='datepicker' id=""txtValidity"" data-checkdate-msg=""Enter Valid Date"" name=""valid_until"" style=""width:100%"" />
                            <span data-for='valid' class='k-invalid-msg'></span>
                        </div>
                    </div>
                </div>
            </div>


            <div class=""panel panel-default"">
                <fieldset>
                    <legend>CASH RECEIPTS</legend>
                    <div class=""row"" style=""padding-bottom:15px"">
    ");
                WriteLiteral(@"                    <div class=""col-sm-12"">
                            <div id=""grid_farmer_Instal""></div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class=""panel panel-default"">
                <fieldset>
                    <legend>DEPOISTS SLIPS</legend>
                    <div class=""row"" style=""padding-bottom:15px"">
                        <div class=""col-sm-12"">
                            <div id=""grid_farmer_pdc""></div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
");
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
    click_act_name = ""HOME"";
    click_ctrl_name = ""HOME"";
    form_list_url = '../' + click_ctrl_name + '/' + click_act_name;
</script>


<script>
    $(document).ready(function () {
        kendodate_format();
        master_sanction();
        $("".file_attach"").attr(""hdrtitle"", ""FL-Instalment Dues Generation"");
        $("".notes"").attr(""hdrtitle"", ""FL-Instalment Dues Generation"");
        $(""#lblForm_menuid"").text(""FARMER_LOANINS"");
        
        var combo_data = [{ code: 1, desc: ""Cash Receipts"" },
                { code: 1, desc: "" Deposit Slips"" }];
        filter_combobox(""cmbselec_rep"", combo_data);
        gridFLnach();
        gridFLLoan();
        gridFLpdc();
    });
</script>
<script>
    //var data = [];
    function gridFLLoan(data) {
        try {
            $(""#grid_farmer_Instal"").kendoGrid({
                dataSource: {
                    data: data,
                    schema: {
                        model: {
                            fi");
            WriteLiteral(@"elds: {

                                member_id: { type: ""string"" },
                                farmer_name: { type: ""string"" },
                                fl_scheme: { type: ""string"" },
                                instalment_no: { type: ""string"" },
                                instalment_amount: { type: ""string"" },
                                instalment_date: { type: ""string"" },
                                paymode: { type: ""string"" },

                                mode_flag: { type: ""string"", defaultValue: ""I"" }
                            }
                        }
                    }
                },

                height: 150,
                groupable: false,
                sortable: true,
                selectable: true,
                navigatable: true,
                columns: [
                    {
                        field: ""member_id"",
                        title: ""Member Id"",
                        width: 100
              ");
            WriteLiteral(@"      },
                {
                    field: ""farmer_name"",
                    title: ""Farmer Name"",
                    width: 100
                },
                                {
                                    field: ""fl_scheme"",
                                    title: ""FL Scheme"",
                                    width: 100
                                },
                  {
                      field: ""instalment_no"",
                      title: ""Instalment No"",
                      width: 100
                  },
                   {
                       field: ""instalment_amount"",
                       title: ""Instalment Amount"",
                       width: 100
                   },
                    {
                        field: ""instalment_date"",
                        title: ""Instalment Date"",
                        width: 100
                    },
                    {
                        field: ""paymode"",
                  ");
            WriteLiteral(@"      title: ""Paymode"",
                        width: 100
                    },
                {
                    field: ""mode_flag"",
                    title: ""Mode"",
                    hidden: true
                }],
                editable: true
            });
        }
        catch (err) {
            alert(err);
        }
    }

</script>
<script>
    //var data = [];
    function gridFLpdc(data) {
        try {
            $(""#grid_farmer_pdc"").kendoGrid({
                dataSource: {
                    data: data,
                    schema: {
                        model: {
                            fields: {
                                member_id: { type: ""string"" },
                                farmer_name: { type: ""string"" },
                               
                                instalment_amount: { type: ""string"" },
                             
                                account_no: { type: ""string"" },
                        ");
            WriteLiteral(@"        bank_name: { type: ""string"" },
                                mode_flag: { type: ""string"", defaultValue: ""I"" }
                            }
                        }
                    }
                },
                height: 150,
                groupable: false,
                sortable: true,
                selectable: true,
                navigatable: true,
                columns: [
                     {
                         field: ""member_id"",
                         title: ""Member Id"",
                         width: 100
                     },
                {
                    field: ""farmer_name"",
                    title: ""Farmer Name"",
                    width: 100
                },
                  
                   {
                       field: ""instalment_amount"",
                       title: ""Instalment Amount"",
                       width: 100
                   },
                    
                    {
                    ");
            WriteLiteral(@"    field: ""bank_name"",
                        title: ""Bank Name"",
                        width: 100
                    },
                    {
                        field: ""account_no"",
                        title: ""Bank_Account_No"",
                        width: 100
                    },
                {
                    field: ""mode_flag"",
                    title: ""Mode"",
                    hidden: true
                }],
                editable: true
            });
        }
        catch (err) {
            alert(err);
        }
    }
</script>
<script>
    //var data = [];
    function gridFLnach(data) {
        try {
            $(""#grid_farmer_nach"").kendoGrid({
                dataSource: {
                    data: data,
                    schema: {
                        model: {
                            fields: {
                                date_prenset: { type: ""string"" },
                                instal_amt: { type: ""string"" },");
            WriteLiteral(@"
                                debit_acc_no: { type: ""string"" },
                                credit_acc: { type: ""string"" },
                                mode_flag: { type: ""string"", defaultValue: ""I"" }
                            }
                        }
                    }
                },

                height: 150,
                groupable: false,
                sortable: true,
                selectable: true,
                navigatable: true,
                columns: [
                    {
                        field: ""date_prenset"",
                        title: ""Date Of Presentation"",
                        width: 100
                    },
                {
                    field: ""instal_amt"",
                    title: ""Instalment Amount"",
                    width: 100
                },
                  {
                      field: ""debit_acc_no"",
                      title: ""Debit Account No"",
                      width: 100
        ");
            WriteLiteral(@"          },

                    {
                        field: ""credit_acc"",
                        title: ""Credit Account"",
                        width: 100
                    },
                 {
                    field: ""mode_flag"",
                    title: ""Mode"",
                    hidden: true
                }],
                editable: true
            });
        }
        catch (err) {
            alert(err);
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
