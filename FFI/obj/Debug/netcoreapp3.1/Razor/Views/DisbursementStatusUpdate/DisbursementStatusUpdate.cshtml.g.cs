#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\DisbursementStatusUpdate\DisbursementStatusUpdate.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "807e47814434bab6681fda0bc772e7c037c59357"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_DisbursementStatusUpdate_DisbursementStatusUpdate), @"mvc.1.0.view", @"/Views/DisbursementStatusUpdate/DisbursementStatusUpdate.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"807e47814434bab6681fda0bc772e7c037c59357", @"/Views/DisbursementStatusUpdate/DisbursementStatusUpdate.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_DisbursementStatusUpdate_DisbursementStatusUpdate : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_disbursementstatus"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Loan_Disbursement_retrieveFLDisbursementStatusUpdate_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/retrieveFLDisbursementStatusUpdate_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Loan_Disbursement_saveFLDisbursementStatusUpdate_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/saveFLDisbursementStatusUpdate_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Disbursement_StatusUpdate.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/Common_func.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\DisbursementStatusUpdate\DisbursementStatusUpdate.cshtml"
  
    ViewBag.Form = "Disbursement Status Update";
    Layout = "~/Views/Shared/FormViewLayout2.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "807e47814434bab6681fda0bc772e7c037c593577523", async() => {
                WriteLiteral(@"
    <div class=""panel panel-default"">
        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
            <div class=""row"" style=""padding-bottom:15px"">
                <div class=""col-sm-12"">
                    <div class=""col-sm-4"">
                        <div class=""form-group"">
                            <label for=""cmb_sanction"" class=""col-sm-4 control-label required"">Select List</label>
                            <div class=""col-sm-6"">
                                <input id=""cmb_sanction"" name=""Active_id"" data-role=""filtercombo"" style=""width:100%"" />
                            </div>
                            <button");
                BeginWriteAttribute("title", " title=\"", 843, "\"", 851, 0);
                EndWriteAttribute();
                WriteLiteral(@" data-placement=""top"" data-toggle=""tooltip"" class=""btn btn-info"" type=""button""
                                    data-original-title=""Refresh"" onclick=""listLoad()"">
                                <span class=""glyphicon glyphicon-refresh""></span>
                            </button>
                        </div>
                    </div>
                    <div class=""row"">
                        <div class=""col-xs-12"">
                            <div id=""Disbursement_grid""></div>
                        </div>
                    </div>
                </div>
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
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "807e47814434bab6681fda0bc772e7c037c5935710426", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "807e47814434bab6681fda0bc772e7c037c5935711466", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "807e47814434bab6681fda0bc772e7c037c5935712506", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "807e47814434bab6681fda0bc772e7c037c5935713546", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "807e47814434bab6681fda0bc772e7c037c5935714586", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "807e47814434bab6681fda0bc772e7c037c5935715626", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "807e47814434bab6681fda0bc772e7c037c5935716666", async() => {
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
    $(document).ready(function () {
        Form_validate_Name = $('form.form-horizontal').attr('id');
        var container = $(""#frm_disbursementstatus"");
        kendo.init(container);
        container.kendoValidator({
        });
        var org_id = getlocalStorage('org_id');
        $('#aggrorgn_code').val(org_id);
        Screen_Id = ""FLDISSUPD"";
        master_userRoleNew2();
        load_master_code();

        var dtmap_status = """";
        $(""#cmb_sanction"").empty();
        dtmap_status = grid_comboScreen_mastercodes(""QCD_FL_DisbUpdate"");
        filter_combobox(""cmb_sanction"", dtmap_status);
        var data = [];
        gridFilter(data);
    });
</script>


<script>
    function load_master_code() {
        try {
            debugger;
            var data = {};
            var context = WebAPIProxy.getContext();
            data.userId = context.userId
            data.orgnId = context.orgnId
            data.locnId = context.locnId
            da");
            WriteLiteral(@"ta.localeId = context.localeId
            data.screen_Id = ""FLDISSUPD"";
            var tab_values = ajaxcall_param(""/Home/screenId_mastercodelist"", JSON.stringify(data));
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>



<script>
    function gridFilter(data) {


        try {
            $(""#Disbursement_grid"").kendoGrid(
                    {
                        dataSource: {
                            data: data,
                            schema: {
                                model: {
                                    fields: {

                                        fpomember_code: { type: ""string"", editable: false },
                                        farmer_name: { type: ""string"", editable: false },
                                        app_date: { type: ""string"", editable: false },
                                        loanapp_no: { type: ""string"", editable: false },
         ");
            WriteLiteral(@"                               loanscheme_desc: { type: ""string"", editable: false },
                                        loan_no: { type: ""string"", editable: false },
                                        loan_amount: { type: ""string"", editable: false },
                                        disb_advice_no: { type: ""string"", editable: false },
                                        disbursement_date: { type: ""date"" },
                                        disb_bank_ref_no: { type: ""string"" },
                                        status_of_client: { type: ""string"" },
                                        mode_flag: { type: ""string"", defaultValue: ""I"" }
                                    }
                                }
                            }
                        },


                        height: 450,
                        sortable: true,
                        selectable: true,
                        edit: OnEdit,
                        selectable: ""singl");
            WriteLiteral(@""",   //  Grid Row Selection

                        navigatable: true,
                        groupable: false,

                        columns: [
                               {
                                   title: ""Select"", width: 40,
                                   template: '#=sel_checkbox()#'
                               },

                               {
                                   field: ""loanapp_rowid"",
                                   title: ""loanapp_rowid"",
                                   width: 1,
                                   hidden: true,
                              },
                              {
                                field: ""fpoorgn_code"",
                                title: ""loanapp_rowid"",
                                width: 1,
                                hidden: true,
                              },

                              {
                                 field: ""fpomember_code"",
                   ");
            WriteLiteral(@"              title: ""Member ID"",
                                 width: 200,
                             },
                             {
                                  field: ""farmer_name"",
                                  title: ""Farmer Name"",
                                  width: 200,
                             },
                             {
                                  field: ""app_date"",
                                  title: ""Application Date"",
                                  width: 200,
                             },
                             {
                                field: ""loanapp_no"",
                                title: ""Application Ref No"",
                                width: 200,

                             },
                             {
                                  field: ""loanscheme_desc"",
                                  title: ""FL Scheme"",
                                  width: 200,
                             },
");
            WriteLiteral(@"                             {
                                field: ""loan_no"",
                                title: ""Loan Account No."",
                                width: 200,
                            },
                            {
                                field: ""loan_amount"",
                                title: ""LOAN Amount"",
                                width: 200,
                            },
                            {
                                field: ""disb_advice_no"",
                                title: ""Disb.Advice No"",
                                width: 200,

                            },

                            {
                                field: ""disbursement_date"",
                                title: ""Disb. Date"",
                                width: 100,
                                format: ""{0:dd/MM/yyyy}""

                            },

                            {
                                field: ""ba");
            WriteLiteral(@"nk_ref_no"",
                                title: ""Bank. Ref. No."",
                                width: 200,
                            },
                             {
                                 field: ""status_of_client"",
                                 title: ""status_of_client"",
                                 width: 1,
                                 hidden: true,
                             },
                             {
                                 field: ""payment_mode"",
                                 title: ""payment_mode"",
                                 width: 1,
                                 hidden: true,
                             },                            
                             {
                                  field: ""status_of_client"",
                                  title: ""status_of_client"",
                                  width: 1,
                                  hidden: true,
                             },
               ");
            WriteLiteral(@"              {
                                  field: ""status_of_client_desc"",
                                  title: ""Disb.Status"",
                                  editor: function (container, options) {
                                      combo_editor_man(container, ""cmb_"" + options.field, eval(options.field + ""_list""), options.field, ""status_of_client"", ""Disbursement_grid"")
                             },
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
            javascript_log4j_root(arguments.callee.name, err);
        }
    } function check(acc, tf) {
        if (acc >= tf) {
            acc = """";
        }
    }

    load_master_code();");
            WriteLiteral(@"
    status_of_client_desc_list = grid_comboScreen_mastercodes(""QCD_FL_DisbStatus"");
    var gridRowID = -1;
    function sel_checkbox() {
        gridRowID++;
        return '<input id=""chk_sel_' + gridRowID + '"" class=""checkbox"" type=""checkbox"" />';
    }
    function OnEdit(e) {
        setDefaultValues(e);


        e.container.find(""input[name='disb_date']"").kendoDatePicker({
            max: new Date(), // sets max date to Jan 1st, 2013
            format: ""dd/MM/yyyy""
        });
    }
</script>
<script>

    function listLoad() {        
        try {           
            var formval = form_Serialize(""frm_disbursementstatus"");
            var obj_val = JSON.parse(formval);
            var c = $('#cmb_sanction');
            if (c.data('kendoComboBox').value() != """" && c.data('kendoComboBox').value() != undefined) {
                obj_val.status_option = c.data('kendoComboBox').value();
            }
            else {
                obj_val.status_option = ""0"";
        ");
            WriteLiteral(@"    }
            obj_val.fpoorgn_code = getlocalStorage('org_id');
            var data = {};
            data.context = WebAPIProxy.getContext();
            data.context.Filter = obj_val;
            retrieve_FLDisbursementStatusUpdate_List(data);
            var colCount = $(""#Disbursement_grid"").find('.k-grid-header colgroup > col').length;

            //If There are no results place an indicator row
            if ($(""#Disbursement_grid"").data(""kendoGrid"").dataSource._view.length == 0) {
                $(""#Disbursement_grid"").find('.k-grid-content tbody')
                    .append('<tr class=""kendo-data-row""><td colspan=""' +
                        colCount +
                   '"" style=""text-align:center; padding-top:10px;background-color:#AFE4FA""><b>No pending records available for the selected status; please try later!!!</b></td></tr>');
                return false;
            }
            return false;
        }
        catch (err) {
            javascript_log4j_root(argume");
            WriteLiteral(@"nts.callee.name, err);
        }
    }
    function generate_FLDisbursementStatusUpdate_list(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
                gridFilter(data);
            }
            else {
                gridFilter([]);
            }

        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>
<script>
    function save() {
        try {
            var formval = form_Serialize(""frm_disbursementstatus"");
            var obj_formval = JSON.parse(formval);
            var c = $('#cmb_sanction');
            if (c.data('kendoComboBox').value() != """" && c.data('kendoComboBox').value() != undefined) {
                obj_formval.status_option = c.data('kendoComboBox').value();
            }
            else {
                obj_formval.status_option = ""0"";
            }
            obj_formval.fpoorgn_code = getlocalStorage('org_id');

            va");
            WriteLiteral(@"r grid_val = JSON.stringify($(""#Disbursement_grid"").data().kendoGrid._data);
            var Bind = {};
            Bind = grid_val;
            var result = JSON.parse(Bind);
            $.each(result, function (index, value) {
              

                if ((result[index].disbursement_date == null) || (result[index].disbursement_date == """")) {
                    var d1 = new Date();
                    var date1 = kendo.parseDate(d1);
                    value = kendo.toString(date1, ""MM/dd/yyyy"");
                    result[index].disbursement_date = value
                }
                else {
                    var d = value.disbursement_date;
                    var date = kendo.parseDate(d);
                    value = kendo.toString(date, ""MM/dd/yyyy"");
                    result[index].disbursement_date = value;
                }
               
                var mmode = result[index].mode_flag;
                if (mmode == ""S"") {
                    result[index].mod");
            WriteLiteral(@"e_flag = ""U"";
                }
            });
            var obj_val = result;
            var data_save = {};
            data_save.context = WebAPIProxy.getContext();
            data_save.context.Filter = obj_formval;
            data_save.context.List = obj_val;
            save_FLDisbursementStatusUpdate_details(data_save);
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    function get_FLDisbursementStatusUpdate_details() {
        try {         
            var formval = form_Serialize(""frm_disbursementstatus"");
            var obj_val = JSON.parse(formval);
            var c = $('#cmb_sanction');
            if (c.data('kendoComboBox').value() != """" && c.data('kendoComboBox').value() != undefined) {
                obj_val.status_option = c.data('kendoComboBox').value();
            }
            else {
                obj_val.status_option = ""0"";
            }
            obj_val.fpoorgn_code = getlocalStorage");
            WriteLiteral(@"('org_id');
            var data = {};
            data.context = WebAPIProxy.getContext();;
            data.context.Filter = obj_val;
            retrieve_FLDisbursementStatusUpdate_List(data);
            return false;
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
