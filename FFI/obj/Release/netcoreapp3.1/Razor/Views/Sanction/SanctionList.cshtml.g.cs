#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Sanction\SanctionList.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "470036b805743d796b2835f39a1716830f374b3d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Sanction_SanctionList), @"mvc.1.0.view", @"/Views/Sanction/SanctionList.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"470036b805743d796b2835f39a1716830f374b3d", @"/Views/Sanction/SanctionList.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_Sanction_SanctionList : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("SanctionList_form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Farmer_Loan_retrieveSanctionLetterGen_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/Farmer_Loan_saveSanctionLetterGen_APIClient.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/retrieveSanctionLetterGen_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/saveSanctionLetterGen_Model.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/SanctionLetter.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_8 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/report.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\Sanction\SanctionList.cshtml"
  
    ViewBag.Form = "Sanction Letter Generation";
    Layout = "~/Views/Shared/FormViewLayout2.cshtml";

#line default
#line hidden
#nullable disable
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "470036b805743d796b2835f39a1716830f374b3d7251", async() => {
                WriteLiteral(@"
    <div class=""panel panel-default"">
        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
            <div class=""row"" style=""padding-bottom:15px"">
                <div class=""col-sm-12"">
                    <div class=""col-sm-4"">
                        <div class=""form-group"">
                            <label for=""cmb_sanction"" class=""col-sm-4 control-label required"">Select List</label>
                            <div class=""col-sm-6"">
                                <input id=""cmb_sanction"" name=""status_option"" data-role=""filtercombo"" style=""width:100%"" />
                            </div>
                            <button");
                BeginWriteAttribute("title", " title=\"", 840, "\"", 848, 0);
                EndWriteAttribute();
                WriteLiteral(@" data-placement=""top"" data-toggle=""tooltip"" class=""btn btn-info"" type=""button"" data-original-title=""Refresh"" onclick=""fetchSanctionList()""> <span class=""glyphicon glyphicon-refresh""></span></button>
                        </div>
                    </div>
                    <div class=""row"">
                        <div class=""col-xs-12"">
                            <div id=""SanctionList_grid""></div>
                            <input type=""hidden"" id=""fpoorgn_code"" />
                            <input type=""hidden"" id=""status_option"" />
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "470036b805743d796b2835f39a1716830f374b3d10218", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "470036b805743d796b2835f39a1716830f374b3d11258", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "470036b805743d796b2835f39a1716830f374b3d12298", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "470036b805743d796b2835f39a1716830f374b3d13338", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "470036b805743d796b2835f39a1716830f374b3d14378", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "470036b805743d796b2835f39a1716830f374b3d15418", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "470036b805743d796b2835f39a1716830f374b3d16458", async() => {
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
    click_act_name = ""home"";
    click_ctrl_name = ""home"";
    form_list_url = '../' + click_ctrl_name + '/' + click_act_name;

</script>
<script>
    function gridSanctionListDisp(data) {
        try {
            $(""#SanctionList_grid"").kendoGrid({
                dataSource: {
                    data: data,
                    schema: {
                        model: {
                            fields: {
                                //shareapp_no: { type: ""string"", editable: false },
                                fpomember_code: { type: ""string"", editable: false },
                                loanscheme_desc: { type: ""string"", editable: false },
                                loan_amount: { type: ""string"", editable: false },
                                app_date: { type: ""string"", editable: false },
                                loan_no: { type: ""string"", editable: false },
                                sanctioned_date: { type: ""date"", editable: false },");
            WriteLiteral(@"
                                sanctioned_amount: { type: ""string"", editable: false },
                                Status: { type: ""string"" }
                            }
                        }
                    }
                },
                height: 400,
                edit: OnEdit,
                dataBound: onDataBound,
                groupable: false,
                sortable: true,
                selectable: true,
                navigatable: true,
                change: function (e) {
                    $('tr').find('[type=checkbox]').prop('checked', false);
                    $('tr.k-state-selected').find('[type=checkbox]').prop('checked', true);

                },
                columns: [

                    {
                        title: ""Select"", width: 40,
                        template: ""<input type='checkbox' name='Id' class='checkbox' />"",
                        
                    },
                    {
                        field:");
            WriteLiteral(@" ""loanapp_rowid"",
                        title: ""loanapp_rowid"",
                        hidden: true
                    },

                    {
                        field: ""fpoorgn_code"",
                        title: ""fpoorgn_code"",
                        hidden: true
                    },
                    {
                        field: ""loan_no"",
                        title: ""loan_no"",
                        hidden: true
                    },

                    {
                        field: ""fpomember_code"",
                        title: ""Member ID"",
                        width: 100

                    },
                     {
                         field: ""member_name"",
                         title: ""member_name"",
                         hidden: true
                     },
                      {
                          field: ""farmer_code"",
                          title: ""farmer_code"",
                          hidden: true
           ");
            WriteLiteral(@"           },
                      {
                          field: ""farmer_name"",
                          title: ""farmer_name"",
                          hidden: true
                      },
                       {
                           field: ""loanscheme_desc"",
                           title: ""loanscheme_desc"",
                           hidden: true
                       },
                    {
                        field: ""loanscheme_code"",
                        title: ""FL Scheme"",
                        width: 100
                    },
                    {
                        field: ""app_date"",
                        title: ""Application Date"",
                        width: 100
                    },
                    {
                        field: ""loan_amount"",
                        title: ""FL Amount"",
                        width: 100
                    },
                    {
                        field: ""loanapp_no"",
                ");
            WriteLiteral(@"        title: ""Application Ref. No."",
                        width: 100
                    },
                    {
                        field: ""sanctioned_date"",
                        title: ""Sanctioned Date"",
                        width: 100,
                        format: ""{0:dd/MM/yyyy}"",
                    },
                    {
                        field: ""sanctioned_amount"",
                        title: ""Sanctioned Amount"",
                        width: 100
                    },
                     {
                         field: ""app_status_desc"",
                         title: ""app_status"",
                         width: 100,
                         hidden: true
                     },
                     {
                         field: ""app_status"",
                         title: ""app_status_desc"",
                         width: 100,
                         hidden: true
                     },
                      {
                       ");
            WriteLiteral(@"   field: ""status_code"",
                          title: ""status_code"",
                          width: 100,
                          hidden: true
                      },
                      {
                          field: ""status_desc"",
                          title: ""Status"",
                          width: 100,

                      },
                      {
                          field: ""mode_flag"",
                          title: ""mode_flag"",
                          width: 100,
                          hidden: true
                      },
                    {
                        field: ""row_timestamp"",
                        title: ""row_timestamp"",
                        width: 100,
                        hidden: true
                    },
                ],
                editable: false
            });
       
            function onDataBound(e) {
                var selectedItem=[];
                $("".checkbox"").bind(""change"", function (e) ");
            WriteLiteral(@"{
                    $(e.target).closest(""tr"").toggleClass(""k-state-selected"");     
                    //var grid = $(""#SanctionList_grid"").data(""kendoGrid"");
                    //selectedItem.push(grid.dataItem(grid.select()).loanapp_rowid);
                    //localStorage.Gridvalue = selectedItem.toString();                    
                });
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    function OnEdit(e) {
        setDefaultValues(e);
        e.container.find(""input[name='sanctioned_amount']"").attr('maxlength', '12');
        e.container.find(""input[name='sanctioned_amount']"").attr('onkeypress', 'return event.charCode >= 48 && event.charCode <= 57');
        e.container.find(""input[name='sanctioned_amount']"").attr('maxlength', '20');
        e.container.find(""input[name='loan_amount']"").attr('onkeypress', 'return event.charCode >= 48 && event.charCode <= 57');
        var grid_validate_msg = ");
            WriteLiteral(@""""";
        grid_validate_msg = ""Sanctioned Amount should not greater than Loan Amount"";
        e.container.find(""input[name='sanctioned_amount']"").change(function () {
            if (parseFloat($(this).val()) > parseFloat(e.model.loan_amount)) {
                e.model.accepted_qty = 0;
                kendoAlert(grid_validate_msg);
                e.container.find(""input[name='sanctioned_amount']"").value = 0;
                return false;
            }

        });
    }

    var gridRowID = -1;
    function sel_checkbox() {
        gridRowID++;
        return '<input id=""chk_sel_' + gridRowID + '"" class=""checkbox"" type=""checkbox"" />';
    }
</script>

<script>
    var permission = """";
    $(document).ready(function () {
        kendodate_format()
        var data = [];
        gridSanctionListDisp(data);

        Form_validate_Name = $('form.form-horizontal').attr('id');
        var container = $(""#SanctionList_form"");
        kendo.init(container);
        container.kendoVa");
            WriteLiteral(@"lidator({
            rules: {
                checkdate: function (input) {
                    if (input.attr(""data-role"") == ""datepicker"") {
                        var res = isDate(input.val());
                        return res;
                    }
                    else {
                        return true;
                    }
                }
            }
        });
        load_master_code();
        master_applysubvention();
        Screen_Id = ""SANLET"";
        permission = sec_Master_Permission(Screen_Id);
        $("".adv_filter"").attr(""hdrtitle"", """");
        $("".adv_filter"").attr(""fltid"", """");
        $("".Export"").attr(""hdrtitle"", ""Sanction Letter Generration"");
        $("".Export"").attr(""SubTreeId"", ""SANLET"");
        master_applysubvention()
        //select list
        var passdata = """";
        var GetRoleData = ajaxcall_param(""../Sanction/Xmlcmb_Localbind"", JSON.stringify(passdata));
        var GetRoleDatajson = JSON.parse(GetRoleData);
        var i;
");
            WriteLiteral(@"        var combo_sanction = [];
        var items = {};
        for (i = 0; i < GetRoleDatajson.length; i++) {
            items[i] = GetRoleDatajson[i].Orgl
            combo_sanction.push({ code: i, desc: items[i] });
        }

        var dtmap_sanctionstatus = """";
        $(""#cmb_sanction"").empty();
        dtmap_sanctionstatus = grid_comboScreen_mastercodes(""QCD_FL_Sanction"");
        filter_combobox(""cmb_sanction"", dtmap_sanctionstatus);
      
        $(""#btnReport"").click(function () {
         
           var gridvalue = $(""#SanctionList_grid"").data(""kendoGrid"");
            var sel = gridvalue.select();
            var items = [];
            $.each(sel, function (idx, row) {
                var item = gridvalue.dataItem(row).loanapp_rowid;
                items.push(item);
            });
            localStorage.Gridvalue = items.toString();          
            console.log(""selected: "" + JSON.stringify(items));



        });

    });
</script>
<script>
    $(fun");
            WriteLiteral(@"ction () {
        $('#cmb_sanction').change(function () {
            var opt = $(this).val();
            console.log(opt);
        });
    });

</script>
<script>
    function load_master_code() {
        try {
            var data = {};
            data.screen_Id = ""SANLET"";
            var tab_values = ajaxcall_param(""/Home/screenId_mastercodelist"", JSON.stringify(data));
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    function fetchSanctionList() {

        try {

            var mandatory_check = true;

            var grid_validate_msg = """";

            if ($('#cmb_sanction').data(""kendoComboBox"").value() == """") {
                grid_validate_msg += ""Select List cannot be blank <br>"";
                mandatory_check = false;
            }
            if (mandatory_check == false) {
                kendoAlert(grid_validate_msg);
                return false;
            }
            var formval = fo");
            WriteLiteral(@"rm_Serialize(""SanctionList_form"");
            var obj_val = JSON.parse(formval);
            var org_id = getlocalStorage('org_id');
            obj_val.fpoorgn_code = org_id;

            var data = {};
            data.context = WebAPIProxy.getContext();
            data.context.Filter = obj_val;
            retrieve_SanctionList_details(data);
            var colCount = $(""#SanctionList_grid"").find('.k-grid-header colgroup > col').length;

            //If There are no results place an indicator row
            if ($(""#SanctionList_grid"").data(""kendoGrid"").dataSource._view.length == 0) {
                $(""#SanctionList_grid"").find('.k-grid-content tbody')
                    .append('<tr class=""kendo-data-row""><td colspan=""' +
                        colCount +
                   '"" style=""text-align:center; padding-top:10px;background-color:#AFE4FA""><b> No Matching Records Found . </b></td></tr>');
            }

            return false;

        }
        catch (err) {
         ");
            WriteLiteral(@"   javascript_log4j_root(arguments.callee.name, err);
        }
    }

    function save() {
        try {
            var formval = form_Serialize(""SanctionList_form"");
            var obj_val = JSON.parse(formval);
            var obj_val1 = JSON.parse(formval);
            var org_id = getlocalStorage('org_id');
            obj_val1.fpoorgn_code = org_id;
            obj_val1.status_option = ""1"";
            var grid_val = JSON.stringify($(""#SanctionList_grid"").data().kendoGrid._data);
            var Bind = {};
            Bind = grid_val;
            var result = JSON.parse(Bind);
            if (result.length == 0) {
                kendoAlert(""Atleast one record needs to be entered"");
                return false;
            }
            $.each(result, function (index, value) {
                var loanapp_rowid = value.loanapp_rowid;
                if (loanapp_rowid == undefined) {
                    result[index].loanapp_rowid = ""0"";
                }

                var");
            WriteLiteral(@" d = value.sanctioned_date;
                var date = kendo.parseDate(d);
                value = kendo.toString(date, ""MM/dd/yyyy"");
                result[index].sanctioned_date = value;



                var mmode = result[index].mode_flag;
                if (mmode == ""S"") {
                    result[index].mode_flag = ""U"";
                }

            });
            var obj_grid_val = result;
            var data_save = {};
            data_save.context = WebAPIProxy.getContext();
            data_save.context.Header = obj_val;
            data_save.context.Filter = obj_val1;
            data_save.context.Detail = obj_grid_val;
            Save_SanctionLetter_details(data_save);
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    function generate_SanctionLetter_detail(res) {
        try {
            if (res != null) {
                var data = changedataType(res);
                gridSanctionListDisp(data");
            WriteLiteral(@");
            }
            else {
                gridSanctionListDisp([]);
            }
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    function get_Share_dispatch_details() {
        fetchSanctionList();
    }
</script>
<style>
    .k-widget.k-tooltip {
        background-color: #ffe79e;
        color: #6b5100;
    }

    span.k-tooltip {
        white-space: pre-line;
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
