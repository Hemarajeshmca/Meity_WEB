#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\GenerateSharecertificates\GenerateSharecertificatesForm.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "2af8d80312474f003679cb2695dafcc31cc68781"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_GenerateSharecertificates_GenerateSharecertificatesForm), @"mvc.1.0.view", @"/Views/GenerateSharecertificates/GenerateSharecertificatesForm.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2af8d80312474f003679cb2695dafcc31cc68781", @"/Views/GenerateSharecertificates/GenerateSharecertificatesForm.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_GenerateSharecertificates_GenerateSharecertificatesForm : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("GenerateShareCertificate_Form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\GenerateSharecertificates\GenerateSharecertificatesForm.cshtml"
  
    ViewBag.Form = "Generate Share certificates";
    Layout = "~/Views/Shared/FormViewLayout1.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jszip/2.4.0/jszip.min.js\"></script>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2af8d80312474f003679cb2695dafcc31cc687815296", async() => {
                WriteLiteral(@"
    <div class=""panel panel-default"">
        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
            <div class=""row"" style=""padding-bottom:15px"">
                <div class=""col-sm-12"">
                    <div class=""col-sm-5"">
                        <div class=""form-group"">
                            <label for=""cmb_share"" class=""col-sm-4 control-label required"">Register Name</label>
                            <div class=""col-sm-7"">
                                <input type=""text"" id=""cmb_share"" name=""In_register_type"" style=""width:100%"" class=""form-control"" maxlength=""50"" />
                            </div>
                            <input type=""hidden"" id=""In_register_rowid"" name=""register_rowid"" />
                            <input type=""hidden"" id=""In_register_no"" />
                            <input type=""hidden"" id=""In_register_type_desc"" />
                            <input type=""hidden"" id=""In_fpoorgn_code"" />
                            <input t");
                WriteLiteral(@"ype=""hidden"" id=""In_status_code"" />
                            <input type=""hidden"" id=""In_mode_flag"" />
                            <input type=""hidden"" id=""In_row_timestamp"" />
                            <input type=""hidden"" id=""In_chklist_status_flag"" />
                            
                        </div>
                    </div>
                    <div class=""col-xs-6"">
                        <div class=""form-group"">
                            <label for=""txtValidity"" class=""col-sm-5 control-label required"">Report Date:</label>
                            <div class="" col-sm-4"">

                                <input class=""cusDate"" data-role='datepicker' id=""txtValidity"" data-checkdate-msg=""Enter Valid Date"" name=""In_register_date"" style=""width:100%"" onkeypress=""return date_validate(event)"" />
                                <span data-for='valid' class='k-invalid-msg'></span>
                            </div>
                            <div class=""col-sm-1"">
           ");
                WriteLiteral("                     <button id=\"btnReferesh\"");
                BeginWriteAttribute("title", " title=\"", 2364, "\"", 2372, 0);
                EndWriteAttribute();
                WriteLiteral(@" data-placement=""top"" data-toggle=""tooltip"" class=""btn btn-info"" type=""submit"" data-original-title=""Refresh"" onclick=""return  listLoad()""> <span class=""glyphicon glyphicon-refresh""></span></button>

                                </div>
                                </div>
                        <div class=""pull-right"" style=""margin-top: -30px;"">
                            <button type=""button"" id=""btnExport"" style=""background-color:skyblue"" class=""Export btn btn-sm btn-info""><span class=""glyphicon glyphicon-export""></span></button>
");
                WriteLiteral(@"                        </div>
                    </div>

                    <div class=""row"" style=""padding-top:15px;padding-bottom:15px"">


                        <div class=""col-xs-12"">
                            <div id=""grid_GenerateShareCertificate_list"">
                            </div>
                        </div>

                    </div>
                    <div class=""col-xs-12"">
                        <div class=""form-group"" style=""display:none;"">
                            <label for=""txtregister_rowid"" class=""col-sm-5 control-label"">register_rowid</label>
                            <div class=""col-sm-7"">
                                <input id=""txtregister_rowid"" name=""In_register_rowid"" type=""text"" class=""form-control"" data-toggle=""tooltip"" data-placement=""bottom"" value=""I"">
                            </div>
                        </div>
                    </div>
                </div>
                <div class=""col-sm-12"">
                    <div class");
                WriteLiteral(@"=""form-group"" style=""display:none;"">
                        <label for=""txtMode"" class=""col-sm-5 control-label"">Mode</label>
                        <div class=""col-sm-7"">
                            <input id=""txtMode"" name=""In_mode_flag"" type=""text"" class=""form-control"" data-toggle=""tooltip"" data-placement=""bottom"" value=""I"">
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2af8d80312474f003679cb2695dafcc31cc6878111306", async() => {
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
    $(document).ready(function () {
        Form_validate_Name = $('form.form-horizontal').attr('id');
        var container = $(""#GenerateShareCertificate_Form"");
        kendo.init(container);
        container.kendoValidator({
        });
        load_master_code();
        var share_cert = """";
        $(""#cmb_menu"").empty();
        share_cert = grid_comboScreen_mastercodes(""QCD_SHA_CERT_TYPE"");
        filter_combobox(""cmb_share"", share_cert);

        Screen_Id = ""SHRGEN"";
        permission = sec_Permission(Screen_Id);
        grid_GenerateShareCertificate_details();
        $(""#common_id"").text(""Document ID"");
        $(""#btnReferesh"").attr(""disabled"", false);
        $(""#txtValidity"").attr(""disabled"", false);
        $("".Export"").attr(""hdrtitle"", ""Generate ShareCertificate List"");
        $("".Export"").attr(""SubTreeId"", ""SHRGEN"");

        $(""#lblForm_menuid"").text(""SHRGEN"");


        if (getlocalStorage('btn_clk_val') == ""Create"") {
            $('#divCreate #r");
            WriteLiteral(@"eview').hide();
            $(""#txtMode"").val(""I"");
            $(""#bottom_menus"").hide();
            $(""#DocStat"").val(""New"");
            $(""#status_code"").val(""A"");
            //$(""#mode_flag"").val('I');
            //load_master_code();

        }
        else if (getlocalStorage('btn_clk_val') == ""View"" || getlocalStorage('btn_clk_val') == ""Edit"") {
            $('#divEdit #reviewEd').hide();
            if (getlocalStorage(""ls_pageList"") != undefined) {
                var data1 = getlocalStorage(""ls_pageList"");
                var formval = form_Serialize(""GenerateShareCertificate_Form"");
                $(""#btnReferesh"").attr(""disabled"", true);
                $(""#txtValidity"").attr(""disabled"", true);
                var obj_val = JSON.parse(formval);
                obj_val.register_no = data1.Out_register_no;
                obj_val.register_rowid = data1.Out_register_rowid;
                obj_val.fpoorgn_code = data1.Out_fpoorgn_code;
                obj_val.register_type = d");
            WriteLiteral(@"ata1.Out_register_type_code
                var data = {};
                data.context = getContext();
                data.context.Header = obj_val;
                var Context = data.context;
                $.ajax({
                    type: ""POST"",
                    data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, register_rowid: Context.Header.register_rowid, register_type: Context.Header.register_type, fpoorgn_code: Context.Header.fpoorgn_code }),
                    url: ""/GenerateSharecertificates/GenerateSharecertificatesfetch"",
                    dataType: ""json"",
                    contentType: 'application/json; charset=utf-8',
                    success: function (response) {
                        debugger;
                        if (response.context != null) {
                            generate_GenerateShareCertificate_header(data1);
                            generate_GenerateShareCertificate_de");
            WriteLiteral(@"tail(response.context.Detail);
                        }
                        else {

                        }
                    },
                    error: function (er) {
                        alert(er)
                        console.log(er)
                    }

                });
                $(""#txtregister_rowid"").val(obj_val.register_rowid);
                //$(""#txt_bank_rowid"").val(data.bank_rowid);
                $(""#txtMode"").val(""U"");
                setlocalStorage('doc_no', $(""#txtcommon_id"").val());
                setlocalStorage('doc_row_id', $(""#txtregister_rowid"").val());
            }
        }
        $(""#btnExport"").kendoButton({
            click: function () {
                $(""#grid_GenerateShareCertificate_list"").data(""kendoGrid"").saveAsExcel();
            }
        })

        $(""#txtValidity"").kendoDatePicker({
            max: new Date(), // sets max date to Jan 1st, 2013
            format: ""dd/MM/yyyy""
        });
        setlocalS");
            WriteLiteral(@"torage(""status"", ""Active"");
        setlocalStorage('status_code', ""A"");

    });

    function listLoad() {
        try {
            var mandatory_check = true;

            var grid_validate_msg = """";

            if ($('#cmb_share').data(""kendoComboBox"").value() == """") {
                grid_validate_msg += ""Register Name cannot be blank <br>"";
                mandatory_check = false;
            }
             
            if (mandatory_check == false) {
                kendoAlert(grid_validate_msg);
                return false;
            }
            var formval = form_Serialize(""GenerateShareCertificate_Form"");
            var obj_val = JSON.parse(formval);
            obj_val.register_rowid = 0;
            obj_val.fpoorgn_code = getlocalStorage('org_id');
            // obj_val.register_type = ""SHRGEN"";
            var c = $('#cmb_share');
            console.log(c.data('kendoComboBox').value());
            obj_val.register_type = c.data('kendoComboBox').value();
    ");
            WriteLiteral(@"        //obj_val.cc_aggrloc_code = c.data('kendoComboBox').value();
            obj_val.register_date = $(""#txtValidity"").val();

            if (obj_val.hasOwnProperty('register_date')) {
                if (obj_val.register_date != '')
                    obj_val.register_date = getFormated_StringDate(obj_val.register_date);
            }
            var data = {};
            data.context = WebAPIProxy.getContext();;
            data.context.Header = obj_val;
            var Context = data.context;
            $.ajax({
                type: ""POST"",
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, register_rowid: Context.Header.register_rowid, register_type: Context.Header.register_type , fpoorgn_code: Context.Header.fpoorgn_code }),
                url: ""/GenerateSharecertificates/GenerateSharecertificatesfetch"",
                dataType: ""json"",
                contentType: 'application/json; charset");
            WriteLiteral(@"=utf-8',
                success: function (response) {
                    debugger;
                    if (response.context != null) {
                        generate_GenerateShareCertificate_header(response.context.Header);
                        generate_GenerateShareCertificate_detail(response.context.Detail);                        
                    }
                    else {

                    }
                },
                error: function (er) {
                    alert(er)
                    console.log(er)
                }

            });
            var colCount = $(""#grid_GenerateShareCertificate_list"").find('.k-grid-header colgroup > col').length;

            //If There are no results place an indicator row
            if ($(""#grid_GenerateShareCertificate_list"").data(""kendoGrid"").dataSource._view.length == 0) {
                grid_GenerateShareCertificate_details([]);
                $(""#grid_GenerateShareCertificate_list"").find('.k-grid-content tbody'");
            WriteLiteral(@")
                    .append('<tr class=""kendo-data-row""><td colspan=""' +
                        colCount +
                        '"" style=""text-align:center; padding-top:10px;background-color:#AFE4FA""><b>No approved applications available to generate share certificate; kindly try later</b></td></tr>');
            }

            return false;
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }


    function get_GenerateShareCertificate_details(res) {
        //clear_val();
        try {
            var formval = form_Serialize(""GenerateShareCertificate_Form"");
            var obj_val = JSON.parse(formval);
            obj_val.register_rowid = ""0"";
            obj_val.fpoorgn_code = getlocalStorage('org_id');
            var c = $('#cmb_share');
            console.log(c.data('kendoComboBox').value());
            obj_val.register_type = c.data('kendoComboBox').value();
            //obj_val.cc_aggrloc_code = c.data('kendo");
            WriteLiteral(@"ComboBox').value();
            obj_val.register_date = $(""#txtValidity"").val();

            if (obj_val.hasOwnProperty('register_date')) {
                if (obj_val.register_date != '')
                    obj_val.register_date = getFormated_StringDate(obj_val.register_date);
            }
            var data = {};
            data.context = WebAPIProxy.getContext();;
            data.context.Header = obj_val;
            var Context = data.context;
            $.ajax({
                type: ""POST"",
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, register_rowid: Context.Header.register_rowid, register_type: Context.Header.register_type, fpoorgn_code: Context.Header.fpoorgn_code }),
                url: ""/GenerateSharecertificates/GenerateSharecertificatesfetch"",
                dataType: ""json"",
                contentType: 'application/json; charset=utf-8',
                success: function (respo");
            WriteLiteral(@"nse) {
                    debugger;
                    if (response.context != null) {
                        generate_GenerateShareCertificate_header(response.context.Header);
                        generate_GenerateShareCertificate_detail(response.context.Detail);
                    }
                    else {

                    }
                },
                error: function (er) {
                    alert(er)
                    console.log(er)
                }

            });
            return false;
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

</script>
<script>
    click_act_name = ""GenerateSharecertificates"";
    click_ctrl_name = ""GenerateSharecertificates"";
    form_list_url = '../' + click_ctrl_name + '/' + click_act_name;
</script>

<script>
    function grid_GenerateShareCertificate_details(data) {
        try {
            $(""#grid_GenerateShareCertificate_list"").kendoGrid(
     ");
            WriteLiteral(@"           {
                    excel: {
                        fileName: ""Generate Share Certificate.xlsx"",
                        filterable: true,
                        allPages: false
                    },
                dataSource: {
                    data: data,
                    schema: {
                        model: {
                            fields: {
                                In_shareapp_no: { type: ""string"" },
                                In_fpomember_code: { type: ""string"" },
                                In_member_name: { type: ""string"" },
                                In_member_sur_name: { type: ""string"" },
                                In_applied_shares: { type: ""string"" },
                                In_status_desc: { type: ""string"" },
                                In_mode_flag: { type: ""string"", defaultValue: ""I"" }
                            }
                        }
                    }
                },
                //toolba");
            WriteLiteral(@"r: ""<a class='k-grid-add' id='btnSave' href=''><span class='fa fa-plus' style='color:Black'></span></a>"",

                toolbar: ""<button type='button' id='Exportclick' class='k-grid-excel' style='display:none' href=''><span class='fa fa-file-excel-o' style='color: Black;'> &nbsp Export To Excel</span></button>"",
               
                height: 400,
                groupable: false,
                dataBinding: setDefaultValues,

                dataBound: function (e) {
                    resultData = e.sender._data;
                    var rows = $('#grid_GenerateShareCertificate_list').data('kendoGrid').tbody.children();
                    setColor(rows, resultData);
                },
                sortable: true,
                selectable: true,
                navigatable: true,
                columns: [
                     {
                        field: ""In_shareapp_rowid"",
                         title: ""shareapp_rowid"",
                         width: 100,
  ");
            WriteLiteral(@"                       hidden: true,
                     },

                     {
                         field: ""In_shareapp_no"",
                         title: ""Application No"",
                         width: 100,

                     },
                      {
                          field: ""In_farmer_code"",
                          title: ""farmer_code"",
                          width: 100,
                          hidden: true,
                      },
                   {
                       field: ""In_fpomember_code"",
                       title: ""Member ID"",
                       width: 100,

                   },
                    {
                        field: ""In_member_name"",
                        title: ""Applicant Name"",
                        width: 100,

                    },

                        {
                            field: ""In_member_sur_name"",
                            title: ""Applicant Surname"",
                           ");
            WriteLiteral(@" width: 100,

                        },


                  {
                      field: ""In_applied_shares"",
                      title: ""Shares Applied"",
                      width: 100,

                  },
                   {
                       field: ""In_approved_shares"",
                       title: ""Shares Approved"",
                       width: 100,

                   },
                    {
                        field: ""In_rejected_shares"",
                        title: ""Shares Rejected"",
                        width: 100,

                    },
                   {
                       field: ""In_shareapp_remark"",
                       title: ""shareapp_remark"",
                       hidden: true,
                       width: 100
                   },
                    {
                        field: ""In_status_code"",
                        title: ""status_code"",
                        hidden: true,
                        width: 100
    ");
            WriteLiteral(@"                },
                 {
                     field: ""In_status_desc"",
                     title: ""Status"",
                     width: 100,
                 },

                   {
                       field: ""In_row_timestamp"",
                       title: ""Timestamp"",
                       hidden: true
                   },

                {
                    field: ""In_mode_flag"",
                    title: ""Mode"",
                    hidden: true
                }
                ],
                editable: false,

            });

        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    function save(mode) {

        try {

            if ($(""#txtMode"").val() == """") {
                $(""#txtMode"").val('I');
            }
            if ($(""#DocStat"").val() == ""Active"") {
                $(""#txtMode"").val('U');
            }

            if (mode != undefined) {
                $(""#t");
            WriteLiteral(@"xtMode"").val('D');
            }
            var formval = form_Serialize(""GenerateShareCertificate_Form"");
            var obj_val = JSON.parse(formval);

            if ($(""#txtcommon_id"").val() == undefined || $(""#txtcommon_id"").val() == """") {
                obj_val.In_register_no = ""0"";
            }
            else {
                obj_val.In_register_no = $(""#txtcommon_id"").val();
            }

            obj_val.In_fpoorgn_code = getlocalStorage('org_id');
            // obj_val.register_type = ""SHRGEN"";
            var c = $('#cmb_share');
            obj_val.In_register_type = c.data('kendoComboBox').value();

            if (obj_val.In_status_code == undefined) {
                obj_val.In_status_code = ""A"";
            }
          
            if (getlocalStorage('btn_clk_val') == ""Create"") {
                obj_val.In_mode_flag = ""I"";
            }
            else if (getlocalStorage('btn_clk_val') == ""Edit"") {
                obj_val.In_mode_flag = ""U"";
           ");
            WriteLiteral(@" }
            if (obj_val.In_row_timestamp == null || obj_val.In_row_timestamp == """" || obj_val.In_row_timestamp == undefined) {
                obj_val.In_row_timestamp = ""2000-01-01"";
            }
            var grid_val = JSON.stringify($(""#grid_GenerateShareCertificate_list"").data().kendoGrid._data);
            var Bind = {};
            Bind = grid_val;
            var result = JSON.parse(Bind);

            if ($(""#register_rowid"").val() == undefined || $(""#register_rowid"").val() == """") {
                obj_val.In_register_rowid = ""0"";
            }
            else {
                obj_val.In_register_rowid = $(""#register_rowid"").val();
            }
            //  result.entity_rowid = ""0"";
            if (result.length == 0) {
                kendoAlert(""Atleast one record needs to be entered"");
                //mandatory_check = false;
                return false;
            }
            $.each(result, function (index, value) {
                var row_id = value.In_r");
            WriteLiteral(@"egister_rowid;
                if (row_id == undefined || row_id == """") {
                    result[index].In_register_rowid = ""0"";
                }

                var mode = value.In_mode_flag;
                if (mode == ""S"") {
                    result[index].In_mode_flag = ""I"";
                }
                result[index].In_row_timestamp = ""2000-01-01"";
              
            });
            var obj_grid_val = result;
            var data = {};
            data.context = WebAPIProxy.getContext();
            data.context.Header = obj_val;
            data.context.Detail = obj_grid_val;
            var Context = data.context;
            $.ajax({
                type: ""POST"",
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, Header: Context.Header, Detail: Context.Detail }),
                url: ""/GenerateSharecertificates/GenerateSharecertificatesSave"",
                dataType: ""jso");
            WriteLiteral(@"n"",
                contentType: 'application/json; charset=utf-8',
                success: function (response) {
                    console.log(response)
                    var Res = JSON.parse(response);
                    if (Res.context != null) {
                        var mode = $(""#txtMode"").val();
                        if (mode == ""I"") {
                            kendoAlert(""Generate Share Certificate saved successfully"");
                            get_GenerateShareCertificate_details(Res.context.Header);                           
                        }
                        else if (mode == ""D"") {
                            kendoAlert(""Generate Share Certificate inactivate successfully"");
                        }
                        else {
                            kendoAlert(""Generate Share Certificate Updated successfully"");
                            get_GenerateShareCertificate_details(Res.context.Header);                           
                     ");
            WriteLiteral(@"   }
                    }
                    else {
                        kendoAlert(Res.ApplicationException.errorDescription);
                    }
                },
                error: function (er) {
                    alert(er)
                    console.log(er)
                }

            });
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

</script>

<script>
    function generate_GenerateShareCertificate_header(res) {
        try {
            if (res != null && getlocalStorage('btn_clk_val') != ""Create"") {
                $('#cmb_share').data(""kendoComboBox"").value(res.Out_register_type_desc);
                $(""#txtcommon_id"").val(res.Out_register_no);
                $(""#txtValidity"").val(res.Out_register_date);
                $(""#DocStat"").val(res.Out_status_desc);
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }");
            WriteLiteral(@"

    function generate_GenerateShareCertificate_detail(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
                grid_GenerateShareCertificate_details(data);
            }
            else {
                grid_GenerateShareCertificate_details([]);
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

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
            data.localeId = context.localeId
            data.screen_Id = ""SHRGEN"";
            var tab_values = ajaxcall_param(""/Home/screenId_mastercodelist"", JSON.stringify(data));
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.");
            WriteLiteral("name, err);\r\n        }\r\n    }\r\n\r\n</script>\r\n\r\n<style>\r\n    .k-widget.k-tooltip {\r\n        background-color: #ffe79e;\r\n        color: #6b5100;\r\n    }\r\n\r\n    span.k-tooltip {\r\n        white-space: pre-line;\r\n    }\r\n</style>");
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
