#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\FPOReports\PaytmtranRpt.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "e36d70da2e71ad803859cde23f96360e8535cbef"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_FPOReports_PaytmtranRpt), @"mvc.1.0.view", @"/Views/FPOReports/PaytmtranRpt.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e36d70da2e71ad803859cde23f96360e8535cbef", @"/Views/FPOReports/PaytmtranRpt.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0f808a1843a3e01ed807d8e48267df3333a21a91", @"/Views/_ViewImports.cshtml")]
    public class Views_FPOReports_PaytmtranRpt : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("frm_fpoattachreport"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/Common_func.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\FPOReports\PaytmtranRpt.cshtml"
   ViewBag.Form = "Paytm Transaction Report";
    Layout = "~/Views/Shared/FormViewLayout2.cshtml"; 

#line default
#line hidden
#nullable disable
            WriteLiteral(@"<style>
    span.k-widget.k-datepicker.k-header.cusDate.k-input {
        background: #fff;
    }
    #display_loading {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, 50%);
        display: none;
    }
    button#btnExport {
        background-color: #00c0ef;
        border-color: #00acd6;
        margin-top: -6%;
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
        color: #fff;
    }
</style>");
            WriteLiteral("\n\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jszip/2.4.0/jszip.min.js\"></script>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "e36d70da2e71ad803859cde23f96360e8535cbef6000", async() => {
                WriteLiteral(@"
    <div class=""panel panel-default"" style=""padding:15px"">
        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
            <div class=""row"" style=""padding-bottom:15px"">

                <div class=""row"">
                    <div class=""col-sm-4"">
                        <label for=""txt_fromdate"" class=""col-sm-4 control-label required"">From Date</label>
                        <div class=""col-sm-8"">
                            <input class=""cusDate"" data-role='datepicker' id=""txt_fromdate"" onkeypress=""return date_validate(event)"" data-checkdate-msg=""Enter Valid Date"" name=""From_date"" style=""width:100%"" />
                            <span data-for='valid' class='k-invalid-msg'></span>
                            <input type=""hidden"" id=""hdn_inputstring"">
                        </div>
                    </div>
                    <div class=""col-sm-4"">
                        <label for=""txt_todate"" class=""col-sm-4 control-label required"">To Date</label>
              ");
                WriteLiteral(@"          <div class=""col-sm-8"">
                            <input class=""cusDate"" data-role='datepicker' id=""txt_todate"" onkeypress=""return date_validate(event)"" data-checkdate-msg=""Enter Valid Date"" name=""To_date"" style=""width:100%"" />
                            <span data-for='valid' class='k-invalid-msg'></span>
                        </div>
                    </div>
                    <div class=""pull-right"" style=""margin-top: 1px; margin-right: 5px;"">
                        <button id=""refresh""");
                BeginWriteAttribute("title", " title=\"", 2816, "\"", 2824, 0);
                EndWriteAttribute();
                WriteLiteral(@" data-placement=""top"" data-toggle=""tooltip"" class=""btn btn-info"" type=""button""
                                data-original-title=""Refresh"" onclick=""listRefresh()"">
                            <span class=""glyphicon glyphicon-refresh""></span>
                        </button>
                        <div id=""display_loading"" style=""z-index: 999;""><img src=""https://i.stack.imgur.com/rBLb3.gif"" style=""height:100px; width:100px;""></div>
                        <button id=""clear""");
                BeginWriteAttribute("title", " title=\"", 3311, "\"", 3319, 0);
                EndWriteAttribute();
                WriteLiteral(@" data-placement=""top"" data-toggle=""tooltip"" class=""btn btn-info"" type=""button""
                                data-original-title=""clear"" onclick=""listclear()"">
                            clear
                        </button>
                        <button id=""btnExport""");
                BeginWriteAttribute("title", " title=\"", 3600, "\"", 3608, 0);
                EndWriteAttribute();
                WriteLiteral(" data-placement=\"top\" data-toggle=\"tooltip\" class=\"btn btn-info\" type=\"button\" data-original-title=\"Export\" style=\"background-color: #00c0ef ;border-color: #00acd6; margin-top:0%\" ;>\r\n");
                WriteLiteral(@"                            Export to Excel
                        </button>
                    </div>
                </div>
                <div class=""row"">
                    <div id=""paytmtranreport_grid"" style=""width:98%;margin-left:13px;""></div>
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "e36d70da2e71ad803859cde23f96360e8535cbef10877", async() => {
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
            WriteLiteral(@"
<script>
    var menuId = """";
    var permission = """";
    $(document).ready(function () {
        debugger;
        Form_validate_Name = $('form.form-horizontal').attr('id');
        var container = $(""#frm_fpoattachreport"");
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
        $(""#pay_help1farm"").hide();
        $(""#pay_help1code"").hide();
        $(""#pay_help1name"").hide();
        $('#btnExport').hide();

        $("".Export"").attr(""hdrtitle"", ""File Attach Report"");
        $("".Export"").attr(""SubTreeId"", ""ICDPAYTMRPT"");

        var org_id = getlocalStorage('org_id');
        $('#ic_code').v");
            WriteLiteral(@"al(org_id);
        Screen_Id = ""ICDPAYTMRPT"";

        permission = sec_PermissionNew(Screen_Id);
        page_load_list_permission(permission);
        setlocalStorage(""ls_pageList"", """");
        var security = permission;
        console.log(security);
        if (security['print'] == true) {
            $(""#btnExport"").show();
        }
        else {
            $(""#btnExport"").hide();
        }
        $(""#txt_fromdate"").kendoDatePicker({
            max: new Date(),// sets max date
            format: ""dd/MM/yyyy""
        });

        $(""#txt_todate"").kendoDatePicker({
            max: new Date(),// sets max date
            format: ""dd/MM/yyyy""
        });

        $(""#btnExport"").kendoButton({
            click: function () {
                debugger;
                 var InputString = $(""#hdn_inputstring"").val();
            var data = {};
            data.userId = getlocalStorage(""User_Id_Value"");
            var user_code = data.userId;
            var Report_Name = ");
            WriteLiteral("\"Payment Transaction Report\";\r\n            var flag = 1;\r\n            var data = { report_name: Report_Name, input_string: InputString, flag: flag, userid: user_code };\r\n         $.ajax({\r\n            url: \'");
#nullable restore
#line 152 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\FPOReports\PaytmtranRpt.cshtml"
             Write(Url.Action("ExportExcelDownload", "FPOReports"));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"',
            type: ""post"",
            contentType: 'application/x-www-form-urlencoded',
            data: data,
            success: function (response1) {
            debugger;
            if (response1 != null) {
                debugger;

            }

          },
         error: function (er) {
         alert(er)
        console.log(er)
        }
         });
                $(""#grid1"").data(""kendoGrid"").saveAsExcel();
                //ExportButtonClick();
            }
        });
        /*  listinwardsupplier([]);*/
        var org = getlocalStorage('org_id');

        $('#txtagg_code').val(org);


        /*  Prema added for fpo based abd ri user base loading*/
        var role = getlocalStorage(""orgn_level"");
        if (role == ""ORG_FO"") {
            debugger;
            $(""#RIform"").show();
            $(""#FPOform"").show();
            filter_combobox(""cmb_RIBelongform"", getlocalStorage(""rilist""));
            filter_combobox(""cmb_FPOBelongform"", getlocalSt");
            WriteLiteral(@"orage(""fpolist""));
            var cmb_riform3 = $(""#cmb_RIBelongform"").data(""kendoComboBox"");
            cmb_riform3.value(getlocalStorage(""org_id""));
            $(""#cmb_RIBelongform"").data(""kendoComboBox"").enable(false);
            $(""#cmb_FPOBelongform"").data(""kendoComboBox"").value(""All"");
            $(""#cmb_FPOBelongform"").data(""kendoComboBox"").enable(true);
            fpoload();
        }
        if (role == ""ORG_PF"") {
            debugger;
            $(""#RIform"").show();
            $(""#FPOform"").show();
            filter_combobox(""cmb_RIBelongform"", getlocalStorage(""rilist""));
            $(""#cmb_RIBelongform"").data(""kendoComboBox"").value(""ALL"");
            filter_combobox(""cmb_FPOBelongform"", getlocalStorage(""fpolist""));
            $(""#cmb_FPOBelongform"").data(""kendoComboBox"").value(""ALL"");
            $(""#cmb_RIBelongform"").data(""kendoComboBox"").enable(true);
            $(""#cmb_FPOBelongform"").data(""kendoComboBox"").enable(true);
            fpoload();

        }
      ");
            WriteLiteral(@"  if (role == ""ORG_FPO"") {
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
            $(""#cmb_RIBelongform"").change(function () {
        debugger;
             var selected_value = $(this).val();
             var data1 = { RI_Code: selected_value}
            $.ajax({
            url: '");
#nullable restore
#line 225 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\FPOReports\PaytmtranRpt.cshtml"
             Write(Url.Action("GetFPOlistRIBASE", "Login"));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"',
            type: ""post"",
            contentType: 'application/x-www-form-urlencoded',
            data: data1,
            success: function (response1) {
                debugger;
                $(""#cmb_FPOBelongform"").data(""kendoComboBox"").value(""ALL"");
                var url_path = JSON.parse(response1);
                var itemArrFPO = [];
                for (var i = 0; i < url_path.Table.length; i++) {
                    var list = {};
                    list.id = url_path.Table[i].serial_number;
                    list.code = url_path.Table[i].dist_code;
                    list.desc = url_path.Table[i].Member_district_name;
                    itemArrFPO.push(list);
                }
                filter_combobox(""cmb_FPOBelongform"", itemArrFPO);
            },
                error: function (er)
                {
                alert(er)
                console.log(er)
                }
            });

    });
        /*  prema ended*/

        });
 functio");
            WriteLiteral(@"n fpoload() {
        var data = {};
            data.userId = getlocalStorage(""User_Id_Value"");
        var orgnid = $(""#cmb_RIBelongform"").data(""kendoComboBox"").value();
            var user_code = data.userId;
            var data1 = {User_code: user_code, orgn_code: orgnid}
            $.ajax({
            url: '");
#nullable restore
#line 261 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI_Reports\Views\FPOReports\PaytmtranRpt.cshtml"
             Write(Url.Action("GetFPOlist", "Login"));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"',
            type: ""post"",
            contentType: 'application/x-www-form-urlencoded',
            data: data1,
            success: function (response1) {
            debugger;
                var url_path = JSON.parse(response1);
                var itemArrFPO = [];
                for (var i = 0; i < url_path.Table.length; i++) {
                    var list = {};
                    list.id = url_path.Table[i].serial_number;
                    list.code = url_path.Table[i].dist_code;
                    list.desc = url_path.Table[i].Member_district_name;
                    itemArrFPO.push(list);
                }
                filter_combobox(""cmb_FPOBelongform"", itemArrFPO);
            },
                error: function (er)
                {
                alert(er)
                console.log(er)
                }
            });
    }
</script>
<script>function listRefresh() {
        if ($(""#txt_fromdate"").val() == """") {
            kendoAlert('Please Fill From Da");
            WriteLiteral(@"te Field.!!');
            return false;
        }
        if ($(""#txt_todate"").val() == """") {
            kendoAlert('Please Fill To Date Field.!!');
            return false;
        }

        if ($(""#txt_fromdate"").val() != """" && $(""#txt_todate"").val() != """") {
            debugger;
            var from_date1 = $(""#txt_fromdate"").val();
            var to_date1 = $(""#txt_todate"").val();
            var parts = from_date1.split('/');
            var from_date = parts[2] + '-' + parts[1] + '-' + parts[0];
            var parts1 = to_date1.split('/');
            var to_date = parts1[2] + '-' + parts1[1] + '-' + parts1[0];
            var org_id = $(""#cmb_FPOBelongform"").data(""kendoComboBox"").value();
            var parent_code = $(""#cmb_RIBelongform"").data(""kendoComboBox"").value();
            var fpo = $(""#cmb_FPOBelongform"").data(""kendoComboBox"").value();
            var user_code = getlocalStorage(""User_Id_Value"");
            $('#refresh').hide();
            $(""#btnExport"").hide()");
            WriteLiteral(@";
            $(""#clear"").hide();
            $(""#display_loading"").show();
            $("".panel-default"").css(""opacity"", 0.2);
            setTimeout(function () {
                $("".panel-default"").css(""opacity"", 1);
                $(""#display_loading"").css({ ""display"": ""none"" });
            }, 7000);
            var ABC = ""Input"";
            var InputString = ABC.concat("" "", ""{"", from_date, "","", to_date, "","", org_id, "","", fpo, "","", parent_code, "","", user_code, ""}"");
            console.log(InputString);
            $(""#hdn_inputstring"").val(InputString);
            $.ajax({
                type: ""POST"",
                data: '{fromdate:""' + from_date + '"",todate:""' + to_date + '"",orgid:""' + org_id + '"",fpo:""' + fpo + '"",parent_code:""' + parent_code + '"",User:""' + user_code + '""}',
                url: ""/FPOReports/paytmtranReport"",
                dataType: ""json"",
                contentType: 'application/json; charset=utf-8',
                success: function (response) {
       ");
            WriteLiteral(@"             listPurchase(response);
                    $(""#display_loading"").hide();
                    $('#refresh').show();
                    Screen_Id = ""ICDPAYTMRPT"";
                    permission = sec_PermissionNew(Screen_Id);
                    var security = permission;
                    console.log(security);
                    if (security['print'] == true) {
                        $(""#btnExport"").show();
                    }
                    else {
                        $(""#btnExport"").hide();
                    }
                    $(""#clear"").show();
                    if (response.length == 0) {
                        kendoAlert('No Records found');
                    }
                },
                error: function (er) {
                    alert(er)
                    console.log(er)
                }
            });
        }
    }
    function listpageloadfetch() {
        try {
            var formval = form_Serialize(""frm_fpoattachrepo");
            WriteLiteral(@"rt"");
            var obj_val = JSON.parse(formval);
            obj_val.FilterBy_Option = ""ALL"";
            obj_val.FilterBy_Code = ""."";
            if (getlocalStorage('flt_condition') != undefined && getlocalStorage('flt_condition') != """") {
                obj_val.FilterBy_Fromvalue = getlocalStorage('flt_condition');
            }
            else {
                obj_val.FilterBy_Fromvalue = ""."";
            }
            obj_val.FilterBy_Tovalue = ""."";
            if (obj_val.status_option == """" || obj_val.status_option == undefined) {
                obj_val.status_option = ""V"";
            }

            var data = {};
            data.context = getContext();
            data.context.Filter = obj_val;
            var colCount = $(""#paytmtranreport_grid"").find('.k-grid-header colgroup > col').length;
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    function ExportButtonClick() {
        debugger;
        var ");
            WriteLiteral(@"grid = $(""#grid1"").data(""kendoGrid"");
        if (grid.dataSource.total() == 0) {
            kendoAlert('No records available in the Grid to Export!!!');
        }
        else {
            grid.bind(""excelExport"", function (e) {
                debugger;
                e.workbook.fileName = ""PaytmrptReport.xlsx"";
                //var rows = e.workbook.sheets[0];
                var sheet = e.workbook.sheets[0];
                var grid = $(""#grid1"").data(""kendoGrid"");
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

                for (var i = 0;");
            WriteLiteral(@" i < data.length; i++) {
                    var rowCells = [];
                    for (var j = 0; j < gridColumns.length; j++) {
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
    }</script>

<script>
    function listPurchase(Data1) {
        try {
            $('#lblprog').hide();
            $('#refresh').show();
            $(""#exportExcel"").show();
            var columns = [];
            var chkval = Data1;
            var data = Data1;
            var i = 0;

            var entryIndex = ""entries["" + i + ""]"";
            for (var key in data[0]) {
                debugger;
                var propType = typeof data[0][key];

                if");
            WriteLiteral(@" (key == ""FPO Name"" || key == ""ICD Name"" || key == ""Supplier Name"") {
                    columns.push({
                        field: entryIndex,
                        title: key,
                        type: propType,
                        width: 225,
                        attributes: { style: ""text-align: center;"" },
                        filterable: true,
                    });
                }

                if (key != """" && key != ""FPO Name"" && key != ""ICD Name"" && key != ""Supplier Name"") {
                    columns.push({
                        field: entryIndex,
                        title: key,
                        type: propType,
                        width: 140,
                        attributes: { style: ""text-align: center;"" },
                        filterable: true,
                    });
                }

                i = i + 1;
                entryIndex = ""entries["" + i + ""]"";
            }
            debugger;
            var rows = ");
            WriteLiteral(@"[];
            var data1 = Data1;

            $.each(data1, function (i, e) {
                var entryArray = [];
                $.each(e, function (key, val) {
                    entryArray.push(val);
                });
                rows.push(kendo.observable({
                    entries: entryArray
                }));
            });
            var viewModel = kendo.observable({
                gridRows: rows

            });
            var configuration = {
                height: 450,
                navigatable: true,
                groupable: false,
                editable: false,
                sortable: true,
                scrollable: true,
                attributes: { style: ""text-align: center;"" },
                filterable: {
                    extra: false,
                    operators: {
                        string: {
                            contains: ""Contains""
                        }
                    }
                },
        ");
            WriteLiteral(@"        pageable: {
                    refresh: false,
                    pageSize: 100,
                    buttonCount: 5,
                    pageSizes: [100, 200, 500, 2000, ""All""]
                },
                pageSize: 100,
                resizable: true,
                persistSelection: true,
                selectable: ""false"",
                columns: columns,
                excel: {
                    fileName: ""PaytmrptReport.xlsx"",
                    filterable: true,
                    allPages: true

                },
                rows: viewModel
            };
            $(""#example"").remove();
            $('#paytmtranreport_grid').append('<div id=""example"" style=""position:relative;"" class=""k-content""><table id=""grid1""  data-bind=""source: gridRows"" style=""position:relative;overflow:scroll;width:100%""></table></div>');
            var timeEditGrid = $(""#grid1"").kendoGrid(configuration).data(""kendoGrid"");
            kendo.bind($(""#grid1""), viewModel);
  ");
            WriteLiteral(@"      }
        catch (err) {
            alert(err);
        }
    }</script>

<script>function listclear() {
        try {
            listinwardsupplier([]);
            $('#frm_fpoattachreport').find('input:text').val('');

            var org_id = getlocalStorage('org_id');
            $('#ic_code').val(org_id);
            var role = getlocalStorage(""orgn_level"");
            if (role == ""ORG_PF"") {
                $(""#cmb_RIBelongform"").data(""kendoComboBox"").value("""");
                $(""#cmb_FPOBelongform"").data(""kendoComboBox"").value("""");
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }</script>


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
