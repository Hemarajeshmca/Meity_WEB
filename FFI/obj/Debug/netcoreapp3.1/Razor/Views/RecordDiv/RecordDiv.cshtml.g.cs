#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\RecordDiv\RecordDiv.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "602fe48799c4fdef1588319f4cf23329950ec012"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_RecordDiv_RecordDiv), @"mvc.1.0.view", @"/Views/RecordDiv/RecordDiv.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"602fe48799c4fdef1588319f4cf23329950ec012", @"/Views/RecordDiv/RecordDiv.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_RecordDiv_RecordDiv : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("UpdateStatus_form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Dividend_Management_retrieveDividendUpdateStatus_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Dividend_Management_saveDividendUpdateStatus_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/retrieveDividendUpdateStatus_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/saveDividendUpdateStatus_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/DividendUpdateStatus.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\RecordDiv\RecordDiv.cshtml"
  
    ViewBag.Form = "Dividend Paid";
    Layout = "~/Views/Shared/FormViewLayout2.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "602fe48799c4fdef1588319f4cf23329950ec0126932", async() => {
                WriteLiteral(@"
    <div class=""panel panel-default"">
        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
            <div class=""row"" style=""padding-bottom:15px"">
                <div class=""col-sm-12"">
                    <div class=""col-sm-6"">
                        <div class=""form-group"">
");
                WriteLiteral(@"                            <label for=""cmb_despatchstatus"" class=""col-sm-4 control-label required"">Dividend Status</label>
                            <div class=""col-sm-7"">
                                <input id=""cmb_despatchstatus"" name=""In_despatch_status"" data-role=""filtercombo"" style=""width:100%"" />
                            </div>
                            <button");
                BeginWriteAttribute("title", " title=\"", 979, "\"", 987, 0);
                EndWriteAttribute();
                WriteLiteral(@" data-placement=""top"" data-toggle=""tooltip"" class=""btn btn-info"" type=""button"" data-original-title=""Refresh"" onclick=""mandatory()""> <span class=""glyphicon glyphicon-refresh""></span></button>
                        </div>
                    </div>
                    <div class=""col-xs-6"">
                        <div class=""form-group"">
");
                WriteLiteral(@"                            <label for=""despatchdate"" class="" col-md-4 control-label"">Dividend Date:</label>
                            <div class="" col-sm-4"">
                                <input class=""cusDate"" data-role='datepicker' id=""despatchdate"" data-checkdate-msg=""Enter Valid Date"" name=""In_despatch_date"" style=""width:100%"" onkeypress=""return date_validate(event)"" />
                                <span data-for='valid' class='k-invalid-msg'></span>
                            </div>
                            <div class="" col-sm-4"">
                                <input type=""checkbox"" id=""apply_all"" checked> Apply to all
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class=""col-xs-12"">
                <div id=""grid_Div_Status_Up_list"">
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "602fe48799c4fdef1588319f4cf23329950ec01210627", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "602fe48799c4fdef1588319f4cf23329950ec01211667", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "602fe48799c4fdef1588319f4cf23329950ec01212707", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "602fe48799c4fdef1588319f4cf23329950ec01213747", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "602fe48799c4fdef1588319f4cf23329950ec01214787", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "602fe48799c4fdef1588319f4cf23329950ec01215827", async() => {
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
            WriteLiteral(@"

<script>
    $(document).ready(function () {     
        master_userRoleNew2();
        kendodate_format();
        Form_validate_Name = $('form.form-horizontal').attr('id');
        var container = $(""#UpdateStatus_form"");
        kendo.init(container);
        container.kendoValidator({
        });
        var data = [];
        gridDivReg(data);
        setlocalStorage(""status"", ""Active"");
        $("".file_attach"").attr(""hdrtitle"", ""Update status"");
        $("".notes"").attr(""hdrtitle"", ""Update status"");
        $(""#lblForm_menuid"").text(""Update status"");
        Screen_Id = ""DIVSTATUS"";
        permission = sec_Master_Permission(Screen_Id);

        load_master_code();
        var FY = """";
        $(""#cmb_despatchstatus"").empty();
        FY = grid_comboScreen_mastercodes(""QCD_SHA_CERT_DESP_STAT"");
        filter_combobox(""cmb_despatchstatus"", FY);

        $(""#despatchdate"").kendoDatePicker({
            max: new Date(),// sets max date to Jan 1st, 2013
            format: """);
            WriteLiteral(@"dd/MM/yyyy""
        });
        $(""#RIform"").hide();
        $(""#FPOform"").hide();
    });
</script>

<script>
    function load_master_code() {
        try {
            var data = {};
            data.screen_Id = ""DIVSTATUS"";
            var tab_values = ajaxcall_param(""/Home/screenId_mastercodelist"", JSON.stringify(data));
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
</script>
<script>  
    function gridDivReg(data) {
        try {
            $(""#grid_Div_Status_Up_list"").kendoGrid({
                dataSource: {
                    data: data,
                    schema: {
                        model: {
                            fields: {
                                shareholder_name: { type: ""string"" },
                                share_cer_no: { type: ""string"" },
                                distinct_from: { type: ""string"" },
                                dividend_amount: { type: ""string"" }");
            WriteLiteral(@",
                                paymode: { type: ""string"" },
                                despatch_date: { type: ""date"" },
                                AWB: { type: ""string"" },
                                despetch_status: { type: ""string"" },
                                remarks: { type: ""string"" },
                                mode_flag: { type: ""string"", defaultValue: ""I"" }
                            }
                        }
                    }
                },

                height: 400,
                groupable: false,
                sortable: true,
                selectable: true,
                navigatable: true,
                columns: [
                    {
                        field: ""In_dividend_rowids"",
                        title: ""dividend_rowid"",
                        hidden: true
                    },
                    {
                        field: ""In_share_holder_name"",
                        title: ""Shareholder Name"",
 ");
            WriteLiteral(@"                       width: 100
                    },
                    {
                        field: ""In_certificate_no"",
                        title: ""Share Certificate No"",
                        width: 100
                    },
                    {
                        field: ""In_ditinct_from_to"",
                        title: ""Distinct(From-To)"",
                        width: 100
                    },
                    {
                        field: ""In_dividend_amount"",
                        title: ""Dividend Amount"",
                        width: 100
                    },
                    {
                        field: ""In_payment_mode"",
                        title: ""Paymode"",
                        hidden: true,
                        width: 1
                    },
                    {
                        field: ""In_payment_mode_desc"",
                        title: ""Paymode"",
                        editor: function (container, option");
            WriteLiteral(@"s) {
                            combo_editor_man(container, ""cmb_"" + options.field, eval(options.field + ""_list""), options.field, ""In_payment_mode"", ""grid_Div_Status_Up_list"")
                        },
                        width: 100
                    },
                    {
                        field: ""In_despatch_date"",
                        title: ""Dividend Date"",
                        width: 100,
                        format: ""{0:dd/MM/yyyy}""
                    },
                    {
                        field: ""In_bank_ref_no"",
                        title: ""Bank Reference No"",
                        width: 100
                    },
                    {
                        field: ""In_despatch_status"",
                        title: ""Despatch Status"",
                        hidden: true
                    },
                    {
                        field: ""In_despatch_status_desc"",
                        title: ""Dividend Status"",
             ");
            WriteLiteral(@"           editor: function (container, options) {
                            combo_editor_man(container, ""cmb_"" + options.field, eval(options.field + ""_list""), options.field, ""In_despatch_status"", ""grid_Div_Status_Up_list"")
                        },
                        width: 100
                    },
                    {
                        field: ""In_despatch_remark"",
                        title: ""Remarks"",
                        width: 100
                    },
                    {
                        field: ""In_status_code"",
                        title: ""status_code"",
                        hidden: true
                    },
                    {
                        field: ""In_status_desc"",
                        title: ""Status"",
                        width: 100
                    },
                    {
                        field: ""In_mode_flag"",
                        title: ""Mode"",
                        hidden: true
                    },");
            WriteLiteral(@"
                    {
                        field: ""In_row_timestamp"",
                        title: ""row_timestamp"",
                        hidden: true
                    }
                ],
                editable: true
            });
        }
        catch (err) {
            alert(err);
        }
        load_master_code();
        In_payment_mode_desc_list = grid_comboScreen_mastercodes(""QCD_AEPS_PAYMENT_MODE"");
        In_despatch_status_desc_list = grid_comboScreen_mastercodes(""QCD_SHA_CERT_DESP_STAT""); 
        In_status_desc_list = grid_comboScreen_mastercodes(""STATUS"");
    }    
</script>
<script>
    function fetch_details() {
        
        var formval = form_Serialize(""UpdateStatus_form"");
        var obj_val = JSON.parse(formval);
        var org_id = getlocalStorage('org_id');
        obj_val.In_fpoorgn_code = org_id;
        if (obj_val.In_despatch_date == """" || obj_val.In_despatch_date == undefined)
            obj_val.In_despatch_date = '0';
        ");
            WriteLiteral(@"else
            obj_val.In_despatch_date = getFormated_StringDate(obj_val.In_despatch_date);
        var data = {};
        data.context = WebAPIProxy.getContext();
        data.context.Header = obj_val;
        var Context = data.context;
        $.ajax({
            type: ""POST"",
            data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, In_fpoorgn_code: Context.Header.In_fpoorgn_code, In_despatch_status: Context.Header.In_despatch_status, In_despatch_date: Context.Header.In_despatch_date }),
            url: ""/RecordDiv/ServiceList"",
            dataType: ""json"",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                debugger;
                if (response.context.Header != null) {
                    generate_DividendRegister_header(response.context.Header)
                    //listgrid(response.context.List);
                    //SetPager(response.");
            WriteLiteral(@"context.Filter.out_record_count)
                }
                if (response.context.Detail != null) {
                    generate_Dividend_StatusUpdateStatus_detail(response.context.Detail)
                }
               
                else {
                    gridDivReg([]);
                }
                if (response.ApplicationException != null) {
                    kendoAlert(response.ApplicationException.errorDescription);
                }
            },
            error: function (er) {
                alert(er)
                console.log(er)
            }
        });
        //retrieve_DividendUpdateStatus_details(data);
        var colCount = $(""#grid_Div_Status_Up_list"").find('.k-grid-header colgroup > col').length;

        //If There are no results place an indicator row
        if ($(""#grid_Div_Status_Up_list"").data(""kendoGrid"").dataSource._view.length == 0) {
            $(""#grid_Div_Status_Up_list"").find('.k-grid-content tbody')
                .append('");
            WriteLiteral(@"<tr class=""kendo-data-row""><td colspan=""' +
                    colCount +
               '"" style=""text-align:center; padding-top:10px;background-color:#AFE4FA""><b> No records match the provided criteria for Dividend payment update </b></td></tr>');
        }
    }

    function save() {
        debugger;
        var formval = form_Serialize(""UpdateStatus_form"");
        var obj_val = JSON.parse(formval);
        var org_id = getlocalStorage('org_id');
        obj_val.In_fpoorgn_code = org_id;

        var grid_val1 = JSON.stringify($(""#grid_Div_Status_Up_list"").data().kendoGrid._data);



        var Bind1 = {};
        Bind1 = grid_val1;
        var result1 = JSON.parse(Bind1);
        $.each(result1, function (index, value) {
            var dividend_rowid = value.In_dividend_rowid;
            var despatchdate = value.In_despatch_date;         
            if (dividend_rowid == undefined) {
                result1[index].In_dividend_rowid = ""0"";
            }       
            ");
            WriteLiteral(@"var date = kendo.parseDate(despatchdate);
            value = kendo.toString(date, ""MM/dd/yyyy"");
            result1[index].In_despatch_date = value;
            var mmode = result1[index].In_mode_flag;
            if (mmode == ""S"") {
                result1[index].In_mode_flag = ""U"";
            }
            if (result1[index].In_despatch_date == undefined || result1[index].In_despatch_date == """") {
                result1[index].In_despatch_date = ""0"";
            }
        });
        var obj_grid_val1 = result1;
        var data = {};

        data.context = WebAPIProxy.getContext();
        data.context.Header = obj_val;
        data.context.Detail = obj_grid_val1;
        var Context = data.context;

        $.ajax({
            type: ""POST"",
            data: JSON.stringify({ orgnId: Context.orgnId, locnId: Context.locnId, userId: Context.userId, localeId: Context.localeId, Header: Context.Header, Detail: Context.Detail }),
            url: ""/RecordDiv/SaveDividendUpdate"",
    ");
            WriteLiteral(@"        dataType: ""json"",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                debugger;
              //  var Res = JSON.parse(response);
                var Res = response;
                if (Res.document.context.Header.In_despatch_status != null) {
                    kendoAlert(""Dividend update status details saved successfully"");
                    ////   var msg = Res.ApplicationException;
                    //   //retrive_SingleFetch_Details(Res.context);
                    //   if (Res.ApplicationException == null || Res.ApplicationException == """") {

                    //       //get_Div_Reg__details(Res)
                    //   }
                    //   else {
                    //       kendoAlert(Res.ApplicationException.errorDescription);
                    //   }
                }
                else {
                    kendoAlert(""Dividend update status details failed"");
                }
        ");
            WriteLiteral(@"    },
            error: function (er) {
                alert(er)
                console.log(er)
            }

        });
        //save_DividendUpdateStatus_details(data);
    }

    function generate_Dividend_StatusUpdateStatus_detail(res) {       
        if ($(""#despatchdate"").val() != """") {
            var date = $(""#despatchdate"").val();
            var code = date.split(""/"");
            var applydate = code[1] + '/' + code[0] + '/' + code[2];
        }
        if (res != null) {
            var data = changedataType(res);
            gridDivReg(data);
            if ($('#apply_all').is(':checked')) {
                if (applydate != """" && applydate != undefined) {

                    var grid_val = JSON.stringify($(""#grid_Div_Status_Up_list"").data().kendoGrid._data);
                    var Bind = {};
                    Bind = grid_val;
                    var result = JSON.parse(Bind);
                    $.each(result, function (index, value) {

                   ");
            WriteLiteral(@"     var date = kendo.parseDate(applydate);
                        value = kendo.toString(date, ""MM/dd/yyyy"");
                        result[index].In_despatch_date = value;

                    });
                    gridDivReg(result);
                }
                else {
                    var data = changedataType(res);
                    gridDivReg(data);
                }
            }
            else {
                var data = changedataType(res);
                gridDivReg(data);
            }
        }
        else {
            gridDivReg([]);
        }
    }
    function get_UpdateStatus_details() {
        fetch_details();
    }
    function mandatory() {
        try {
            var mandatory_check = true;

            var grid_validate_msg = """";

            if ($('#cmb_despatchstatus').data(""kendoComboBox"").value() == """") {
                grid_validate_msg += ""Despatch status cannot be blank <br>"";
                mandatory_check = false;
         ");
            WriteLiteral(@"   }

            if (mandatory_check == false) {
                kendoAlert(grid_validate_msg);
                return false;
            }
            else {
                return fetch_details();
            }
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
