#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\ICDReports\InvoiceReportold.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b727716702b653a925ef8e01403500c6ce5e2500"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_ICDReports_InvoiceReportold), @"mvc.1.0.view", @"/Views/ICDReports/InvoiceReportold.cshtml")]
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\_ViewImports.cshtml"
using FFI_Reports;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\_ViewImports.cshtml"
using FFI_Reports.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b727716702b653a925ef8e01403500c6ce5e2500", @"/Views/ICDReports/InvoiceReportold.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0f808a1843a3e01ed807d8e48267df3333a21a91", @"/Views/_ViewImports.cshtml")]
    public class Views_ICDReports_InvoiceReportold : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_invoicereport"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/Common_func.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/HelpFile.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\ICDReports\InvoiceReportold.cshtml"
  
    ViewBag.Form = "Invoice Report";
    Layout = "~/Views/Shared/FormViewLayout2.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jszip/2.4.0/jszip.min.js\"></script>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b727716702b653a925ef8e01403500c6ce5e25005323", async() => {
                WriteLiteral("\r\n    <div class=\"panel panel-default\">\r\n");
                WriteLiteral(@"        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
            <div class=""row"" style=""padding-bottom:15px"">
                <div class=""col-xs-4"" style=""display:none"">
                    <div class="" form-group"">
                        <label for=""ic_code"" class="" col-sm-5 control-label"">Input Centre Name</label>
                        <div class="" col-sm-6"">
                            <input type=""text"" id=""ic_code"" name=""ic_code"" class=""form-control"" maxlength=""50"" disabled>
                        </div>
                    </div>
                </div>
                <div class=""col-sm-12"">
                    <div class=""row"">
                        <div class=""col-sm-3"">

                            <label for=""txt_fromdate"" class=""col-sm-4 control-label required"">From Date</label>
                            <div class=""col-sm-8"">
                                <input class=""cusDate"" data-role='datepicker' id=""txt_fromdate"" onkeypress=""return date_valida");
                WriteLiteral(@"te(event)"" data-checkdate-msg=""Enter Valid Date"" name=""From_date"" style=""width:100%"" />
                                <span data-for='valid' class='k-invalid-msg'></span>
                            </div>
                        </div>
                        <div class=""col-sm-3"">
                            <label for=""txt_todate"" class=""col-sm-3 control-label required"">To Date</label>
                            <div class=""col-sm-8"">
                                <input class=""cusDate"" data-role='datepicker' id=""txt_todate"" onkeypress=""return date_validate(event)"" data-checkdate-msg=""Enter Valid Date"" name=""To_date"" style=""width:100%"" />
                                <span data-for='valid' class='k-invalid-msg'></span>
                            </div>
                        </div>
                        <button id=""refresh""");
                BeginWriteAttribute("title", " title=\"", 2328, "\"", 2336, 0);
                EndWriteAttribute();
                WriteLiteral(@" data-placement=""top"" data-toggle=""tooltip"" class=""btn btn-info"" type=""button""
                                data-original-title=""Refresh"" onclick=""listRefresh()"">
                            <span class=""glyphicon glyphicon-refresh""></span>
                        </button>
                        <button id=""clear""");
                BeginWriteAttribute("title", " title=\"", 2661, "\"", 2669, 0);
                EndWriteAttribute();
                WriteLiteral(@" data-placement=""top"" data-toggle=""tooltip"" class=""btn btn-info"" type=""button""
                                data-original-title=""clear"" onclick=""listclear()"">
                            clear
                        </button>
                        <button type=""button"" id=""btnExport"" style=""background-color:skyblue"" class=""Export btn btn-sm btn-info""><span class=""glyphicon glyphicon-export""></span></button>
                    </div>
                </div>

                <div class=""row"">
                    <div class=""col-xs-12"">

                        <div id=""gd_loanDisbursementgen"">
                            <div id=""invoicereport_grid""></div>
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b727716702b653a925ef8e01403500c6ce5e250010292", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b727716702b653a925ef8e01403500c6ce5e250011332", async() => {
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
            WriteLiteral(@"
<script>
    click_act_name = ""home "";
    click_ctrl_name = ""home"";
    form_list_url = '../' + click_ctrl_name + '/' + click_act_name;

</script>
<script>
    var menuId = """";
    var permission = """";
    $(document).ready(function () {
        debugger;
        Form_validate_Name = $('form.form-horizontal').attr('id');
        var container = $(""#frm_invoicereport"");
        kendo.init(container);
        container.kendoValidator({
        });
        $(""#Topsubheader"").show();
        $(""#bottomFooter"").show();
        $(""#bottom_menus"").hide();
        $(""#btndiv"").show();
        $(""#frmlayerdiv"").hide();
        $(""#divCreate"").hide();
        $(""#divEdit"").hide();
        $(""#divView"").show();
        $(""#DocStat"").show();
        $("".edtviw_item"").show();
        $("".create_item"").hide();
        //$('#btnExport').hide();

        $("".Export"").attr(""hdrtitle"", ""Invoice Report List"");
        $("".Export"").attr(""SubTreeId"", ""ICDINRPT"");
        var org_id = getlocalStor");
            WriteLiteral(@"age('org_id');
        $('#ic_code').val(org_id);
        Screen_Id = ""ICDINRPT"";
        //load_master_code();
        permission = sec_Permission(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        $(""#txt_fromdate"").kendoDatePicker({
            max: new Date(),// sets max date
            format: ""dd/MM/yyyy""
        });

        $(""#txt_todate"").kendoDatePicker({
            max: new Date(),// sets max date
            format: ""dd/MM/yyyy""
        });
        /*  Prema added for fpo based abd ri user base loading*/
        var role = getlocalStorage(""orgn_level"");
        if (role == ""ORG_FO"") {
            debugger;
            $(""#RIform"").show();
            $(""#FPOform"").show();
            filter_combobox(""cmb_RIBelongform"", getlocalStorage(""rilist""));
            filter_combobox(""cmb_FPOBelongform"", getlocalStorage(""fpolist""));
            var cmb_riform3 = $(""#cmb_RIBelongform"").data(""kendoComboBox"");
            c");
            WriteLiteral(@"mb_riform3.value(getlocalStorage(""org_id""));
            $(""#cmb_RIBelongform"").data(""kendoComboBox"").enable(false);
            $(""#cmb_FPOBelongform"").data(""kendoComboBox"").value(""All"");
            $(""#cmb_FPOBelongform"").data(""kendoComboBox"").enable(true);
            //var cmap_inselform = $(""#cmb_FPOBelongform"").data(""kendoComboBox"");
            //cmap_inselform.value(getlocalStorage(""org""));
        }
        if (role == ""ORG_PF"") {
            debugger;
            $(""#RIform"").show();
            $(""#FPOform"").show();
            filter_combobox(""cmb_RIBelongform"", getlocalStorage(""rilist""));
            filter_combobox(""cmb_FPOBelongform"", getlocalStorage(""fpolist""));
            $(""#cmb_RIBelongform"").data(""kendoComboBox"").value(""All"");
            $(""#cmb_FPOBelongform"").data(""kendoComboBox"").value(""All"");
            $(""#cmb_RIBelongform"").data(""kendoComboBox"").enable(true);
            $(""#cmb_FPOBelongform"").data(""kendoComboBox"").enable(true);

        }
        if (role == ");
            WriteLiteral(@"""ORG_FPO"") {
            debugger;
            $(""#RIform"").show();
            $(""#FPOform"").show();
            filter_combobox(""cmb_RIBelongform"", getlocalStorage(""rilist""));
            filter_combobox(""cmb_FPOBelongform"", getlocalStorage(""fpolist""));
            var cmb_riform3 = $(""#cmb_RIBelongform"").data(""kendoComboBox"");
            cmb_riform3.value(getlocalStorage(""parent_code""));
            $(""#cmb_RIBelongform"").data(""kendoComboBox"").enable(false);
            $(""#cmb_FPOBelongform"").data(""kendoComboBox"").enable(false);
            var cmap_inselform = $(""#cmb_FPOBelongform"").data(""kendoComboBox"");
            cmap_inselform.value(getlocalStorage(""org_code""));
        }
        /*  prema ended*/
        listgrid([]);
        $(""#btnExport"").kendoButton({
            click: function () {
                debugger;
                //$(""#salesreport_grid"").data(""kendoGrid"").saveAsExcel();
                ExportButtonClick();
            }
        })
    });

    $(function ()");
            WriteLiteral(@" {
        $('#refresh').click(function () {
            debugger;
            if ($(""#txt_fromdate"").val() != """" || $(""#txt_todate"").val() != """") {
                var from_date1 = $(""#txt_fromdate"").val();
                var to_date1 = $(""#txt_todate"").val();
                var parts = from_date1.split('/');
                var from_date = parts[2] + '-' + parts[1] + '-' + parts[0];
                var parts1 = to_date1.split('/');
                var to_date = parts1[2] + '-' + parts1[1] + '-' + parts1[0];
                var org_id = getlocalStorage('org_id');
                $.ajax({
                    type: ""POST"",
                    data: '{fromdate:""' + from_date + '"",todate:""' + to_date + '"",orgid:""' + org_id + '""}',
                    url: ""/ICDReports/Inv_Stkadjustment"",
                    dataType: ""json"",
                    contentType: 'application/json; charset=utf-8',
                    success: function (response) {
                        console.log(response)
    ");
            WriteLiteral(@"                    listgrid(response);
                    },
                    error: function (er) {
                        alert(er)
                        console.log(er)
                    }
                });
            }
            else {
                kendoAlert('Please Select Any One Field');
            }

            return false;
        });
    });
</script>
<script>
    function load_master_code() {
        debugger;
        var data = {};
        var context = WebAPIProxy.getContext();
        data.userId = context.userId
        data.orgnId = context.orgnId
        data.locnId = context.locnId
        data.localeId = context.localeId
        data.screen_Id = ""ICDSLRPT"";
        var tab_values = ajaxcall_param(""/Home/screenId_mastercodelist"", JSON.stringify(data));
    }
    function ExportButtonClick() {
        debugger
        var grid = $(""#invoicereport_grid"").data(""kendoGrid"");
        if (grid.dataSource.total() == 0) {
            kendoAlert('N");
            WriteLiteral(@"o records available in the Grid to Export!!!');
        }
        else {
            grid.bind(""excelExport"", function (e) {
                debugger;
                e.workbook.fileName = ""InvoiceReport.xlsx"";
                var rows1 = e.workbook.sheets[0];
                var sheet = e.workbook.sheets[0];
                var grid = $(""#invoicereport_grid"").data(""kendoGrid"");
                var data = grid.dataSource.data();
                var gridColumns = grid.columns;
                var columns = gridColumns.map(function (col) {
                    return {
                        value: col.title ? col.title : col.field,
                        autoWidth: true,
                        background: ""#7a7a7a"",
                        color: ""#fff""
                    };
                });
                var rows = [{ cells: columns, type: ""header"" }];

                for (var i = 0; i < data.length; i++) {
                    var rowCells = [];
                    for (var j =");
            WriteLiteral(@" 0; j < gridColumns.length; j++) {
                        var cellValue = data[i][gridColumns[j].field];
                        rowCells.push({ value: cellValue });
                    }
                    rows.push({ cells: rowCells, type: ""data"" });
                }
                sheet.rows = rows;
            });

            grid.saveAsExcel();
            kendoAlert('Exported Sucessfully');
        }
    }
</script>

<script>
    function listpageloadfetch() {
        try {

            var formval = form_Serialize(""frm_invoicereport"");
            var obj_val = JSON.parse(formval);
            obj_val.FilterBy_Option = ""ALL"";
            obj_val.FilterBy_Code = ""."";
            if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') != """") {
                obj_val.FilterBy_Fromvalue = getlocalStorage('flt_condition');
            }
            else {
                obj_val.FilterBy_Fromvalue = ""."";
            }
            obj_val.Filte");
            WriteLiteral(@"rBy_Tovalue = ""."";
            if (obj_val.status_option == """" || obj_val.status_option == undefined) {
                obj_val.status_option = ""V"";
            }

            var data = {};
            data.context = WebAPIProxy.getContext();
            data.context.Filter = obj_val;
            var colCount = $(""#invoicereport_grid"").find('.k-grid-header colgroup > col').length;
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    var status_Priority = [];
    function listgrid(data) {
        try {
            $(""#invoicereport_grid"").kendoGrid({
                dataSource: {
                    data: data,
                    schema: {
                        model: {
                            fields: {
                                /*Customer_Name: { type: ""string"" },
                                Customer_No: { type: ""string"" },
                                Invoice_No: { type: ""string"" },
                ");
            WriteLiteral(@"                Invoice_Date: { type: ""string"" },
                                Without_TaxAmount: { type: ""number"", defaultValue: ""0"" },
                                DiscountAmount: { type: ""number"", defaultValue: 0.00 },
                                TransportAmount: { type: ""number"", defaultValue: ""0"" },
                                Others: { type: ""number"", defaultValue: ""0"" },
                                cgst_amount: { type: ""number"", defaultValue: ""0"" },
                                sgst_amount: { type: ""number"", defaultValue: ""0"" },
                                igst_amount: { type: ""number"", defaultValue: ""0"" },
                                Total_InvoiceAmount: { type: ""number"", defaultValue: ""0"" },
                                Stock_AdjustmentAmount: { type: ""number"", defaultValue: ""0"" },
                                Payment_Received: { type: ""number"", defaultValue: ""0"" },
                                BalanceAmount: { type: ""number"", defaultValue: ""0"" }
    ");
            WriteLiteral(@"                            */
                                customer_type: { type: ""string"" },
                                invoice_no: { type: ""string"" },
                                invoice_date: { type: ""string"" },
                                farmer_code: { type: ""string"" },
                                customer_name: { type: ""string"" },
                                customer_no: { type: ""string"" },
                                qty: { type: ""number"", defaultValue: ""0"" },
                                product_amount: { type: ""number"", defaultValue: ""0"" },
                                discount_amount: { type: ""number"", defaultValue: ""0"" },
                                transport_amount: { type: ""number"", defaultValue: ""0"" },
                                others: { type: ""number"", defaultValue: ""0"" },
                                tax_amount: { type: ""number"", defaultValue: ""0"" },
                                totalinvoice_amout: { type: ""number"", defaultValue: ");
            WriteLiteral(@"""0"" },

                            }
                        }
                    },
                    aggregate: [{ field: ""totalinvoice_amout"", aggregate: ""sum"" }],
                    pageSize: 15

                },

                height: 450,
                scrollable: true,
                sortable: true,
                resizable: true, 
                pageable: {
                    refresh: false,
                    pageSizes: true,
                    previousNext: false,
                    buttonCount: 8
                },

                /* columns: [
 
                     {
                         field: ""Customer_Name"",
                         title: ""Customer Name"",
                         width: 60,
                     },
 
                     {
                         field: ""Customer_No"",
                         title: ""Customer Mobile No"",
                         width: 60
                     },
 
 
                     {
           ");
            WriteLiteral(@"              field: ""Invoice_No"",
                         title: ""Invoice No"",
                         width: 40,
 
                     },
 
                     {
                         field: ""Invoice_Date"",
                         title: ""Invoice Date"",
                         width: 40,
                         template: '#= kendo.toString(kendo.parseDate(Invoice_Date), ""dd/MM/yyyy"")#'
 
                     },
 
                     {
                         field: ""Without_TaxAmount"",
                         title: ""Without Tax Amount"",
                         template: '#= kendo.toString(Without_TaxAmount, ""n2"") #',
                         width: 60,
                         attributes: { style: ""text-align:right;"" },
                        
                     },
                     {
                         field: ""DiscountAmount"",
                         title: ""Discount"",
                         template: '#= kendo.toString(DiscountAmount, ""n2"") #',
     ");
            WriteLiteral(@"                    width: 60,
                         attributes: { style: ""text-align:right;"" },
                         
                     },
                     {
                         field: ""TransportAmount"",
                         title: ""Transport"",
                         width: 60,
                         template: '#= kendo.toString(TransportAmount, ""n2"") #',
                         attributes: { style: ""text-align:right;"" },
 
 
                     },
                     {
                         field: ""Others"",
                         title: ""Others Amount"",
                         width: 60,
                         template: '#= kendo.toString(Others, ""n2"") #',
                         attributes: { style: ""text-align:right;"" }
 
                     },
                     {
                         field: ""cgst_amount"",
                         title: ""CGST"",
                         width: 30,
                         template: '#= kendo.toString(");
            WriteLiteral(@"cgst_amount, ""n2"") #',
                         attributes: { style: ""text-align:right;"" }
 
                     },
 
                     {
                         field: ""sgst_amount"",
                         title: ""SGST"",
                         width: 30,
                         template: '#= kendo.toString(sgst_amount, ""n2"") #',
                         attributes: { style: ""text-align:right;"" }
 
                     },
 
                     {
                         field: ""igst_amount"",
                         title: ""IGST"",
                         width: 30,
                         template: '#= kendo.toString(igst_amount, ""n2"") #',
                         attributes: { style: ""text-align:right;"" }
 
                     },
 
                     {
                         field: ""Total_InvoiceAmount"",
                         title: ""Total Invoice Amount"",
                         width: 60,
                         template: '#= kendo.toString(Total_InvoiceAmo");
            WriteLiteral(@"unt, ""n2"") #',
                         //    footerTemplate: ""Total"",
                         attributes: { style: ""text-align:right;"" }
                     },
 
                     {
                         field: ""Stock_AdjustmentAmount"",
                         title: ""Stock Adjustment Amount"",
                         width: 80,
                         template: '#= kendo.toString(Stock_AdjustmentAmount, ""n2"") #',
                         attributes: { style: ""text-align:right;"" }
 
                     },
                     {
                         field: ""Payment_Received"",
                         title: ""Payment Received"",
                         width: 80,
                         template: '#= kendo.toString(Payment_Received, ""n2"") #',
                         attributes: { style: ""text-align:right;"" }
 
                     },
                     {
                         field: ""BalanceAmount"",
                         title: ""Balance Amount"",
                ");
            WriteLiteral(@"         width: 80,
                         template: '#= kendo.toString(BalanceAmount, ""n2"") #',
                         attributes: { style: ""text-align:right;"" }
 
                     }],*/
                columns :[
                    {
                        field: ""customer_type"",
                        title: ""Member Type"",
                        width: 110,

                    },
                    {
                        field: ""customer_name"",
                        title: ""Customer Name"",
                        width: 80,

                    },
                    {
                        field: ""customer_no"",
                        title: ""Mobile No"",
                        width: 80,

                    },
                    {
                        field: ""invoice_no"",
                        title: ""Invoice #"",
                        width: 60
                    },
                    {
                        field: ""invoice_date"",
         ");
            WriteLiteral(@"               title: ""Invoice Date"",
                        width: 60
                        //template: '#= kendo.toString(kendo.parseDate(invoice_date), ""dd/MM/yyyy"")#'

                    },
                    {
                        field: ""qty"",
                        title: ""Quantity"",
                        width: 80,
                        template: '#= kendo.toString(qty, ""n2"") #',
                        attributes: { style: ""text-align:right;"" }
                    },

                    {
                        field: ""product_amount"",
                        title: ""Amount"",
                        width: 80,
                        // groupFooterTemplate: ""<div>Total: #=sum#</div>"",
                        template: '#= kendo.toString(product_amount, ""n2"") #',
                        attributes: { style: ""text-align:right;"" }

                    },
                    {
                        field: ""discount_amount"",
                        title: ""Discount");
            WriteLiteral(@""",
                        width: 80,
                        template: '#= kendo.toString(discount_amount, ""n2"") #',
                        attributes: { style: ""text-align:right;"" }
                    },
                    {
                        field: ""transport_amount"",
                        title: ""Transport Amount"",
                        width: 110,
                        template: '#= kendo.toString(transport_amount, ""n2"") #',
                        attributes: { style: ""text-align:right;"" }
                    },
                    {
                        field: ""others"",
                        title: ""Others Amount"",
                        width: 80,
                        template: '#= kendo.toString(others, ""n2"") #',
                       // footerTemplate: ""Total"",
                        attributes: { style: ""text-align:right;"" }
                    },
                    {
                        field: ""tax_amount"",
                        title: ""Tax Am");
            WriteLiteral(@"ount"",
                        width: 80,
                        template: '#= kendo.toString(tax_amount, ""n2"") #',
                        footerTemplate: ""Total"",
                        attributes: { style: ""text-align:right;"" }
                    },
                    {
                        field: ""totalinvoice_amout"",
                        title: ""Total Invoice Amount"",
                        width: 110,
                        template: '#= kendo.toString(totalinvoice_amout, ""n2"") #',
                        format: ""{0:0.##}"",
                        footerTemplate: ""<div style='text-align:right'>#= kendo.toString(sum, '0.00') # </div>"",
                        //footerTemplate: ""#=sum#"",
                        //footerTemplate: ""<div style='text-align:right'> #=sum# </div>"",
                        attributes: { style: ""text-align:right;"" }
                    }


                ],
                editable: false,

            });
        }
        catch (err) {
   ");
            WriteLiteral(@"         alert(err);
        }
    }



   
    


</script>

<script>

    function listRefresh() {
        debugger;
        try {
            setlocalStorage('flt_condition', """");
            listpageloadfetch();
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }



    function listclear() {
        try {

            listgrid([]);
            $('#frm_invoicereport').find('input:text').val('');
            //  location.reload();
            var org_id = getlocalStorage('org_id');
            $('#ic_code').val(org_id);

        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    function form_control() {
        var control_Name = [

            { ""dataCol"": ""ProductCode"", ""controlId"": ""cmb_prdtcode"", ""type"": ""Text"" },
            { ""dataCol"": ""ProductName"", ""controlId"": ""cmb_prdtname"", ""type"": ""Text"" },

            { ""dataCol"": ""farmer_code"", ");
            WriteLiteral(@"""controlId"": ""cmb_frmcode"", ""type"": ""Text"" },
            { ""dataCol"": ""farmer_name"", ""controlId"": ""cmb_frmname"", ""type"": ""Text"" }

        ];
        return control_Name;
    }
    function trans_input_data() {
        var trans_coll = [
            { ""trasfer"": ""Yes"", ""dataCol"": ""ic_code"", ""controlId"": ""ic_code"", ""grid_id"": """", ""grid_row_col"": """" },
            { ""trasfer"": ""Yes"", ""dataCol"": ""ProductCode"", ""controlId"": ""cmb_prdtcode"", ""grid_id"": """", ""grid_row_col"": ""ProductCode"" },
            { ""trasfer"": ""Yes"", ""dataCol"": ""ProductName"", ""controlId"": ""cmb_prdtname"", ""grid_id"": """", ""grid_row_col"": ""ProductName"" },
            { ""trasfer"": ""Yes"", ""dataCol"": ""farmer_code"", ""controlId"": ""cmb_frmcode"", ""grid_id"": """", ""grid_row_col"": ""farmer_code"" },
            { ""trasfer"": ""Yes"", ""dataCol"": ""farmer_name"", ""controlId"": ""cmb_frmname"", ""grid_id"": """", ""grid_row_col"": ""farmer_name"" }
        ];
        return trans_coll;
    }
    function generate_Invoiceproduct_list(res) {
        var dataItem = ");
            WriteLiteral(@"$(""#invoicereport_grid"").data(""kendoGrid"").dataSource.data()[0];

        dataItem.set(""ProductCode"", res[0].ProductCode);
        dataItem.set(""ProductName"", res[0].ProductName);




    }
</script>

<style>
    .k-footerTemplate {
        text-align: right;
    }
</style>
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
