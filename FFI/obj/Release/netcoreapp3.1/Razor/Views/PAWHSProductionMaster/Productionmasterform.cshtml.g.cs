#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSProductionMaster\Productionmasterform.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b5bcad39558eb24bf17fd282c72d135b49780495"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PAWHSProductionMaster_Productionmasterform), @"mvc.1.0.view", @"/Views/PAWHSProductionMaster/Productionmasterform.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b5bcad39558eb24bf17fd282c72d135b49780495", @"/Views/PAWHSProductionMaster/Productionmasterform.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_PAWHSProductionMaster_Productionmasterform : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("production_masterform"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/API_Scripts/UmoldITWebAPIProxy.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/CommonScripts/HelpFile.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\PAWHSProductionMaster\Productionmasterform.cshtml"
  
    ViewBag.Form = "Production Stage Setup";
    Layout = "~/Views/Shared/FormViewLayout1.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b5bcad39558eb24bf17fd282c72d135b497804956185", async() => {
                WriteLiteral(@"
    <div class=""panel panel-default"">
        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
            <div class=""row"" style=""padding-bottom:15px"">
                <div class=""col-sm-4"">
                    <div class=""form-group"">
                        <label for=""txtagg_code"" class=""col-sm-5 control-label required"">Aggregator Code:</label>
                        <div class=""col-sm-6"">
                            <input id=""txtagg_code"" type=""text""");
                BeginWriteAttribute("value", " value=\"", 702, "\"", 710, 0);
                EndWriteAttribute();
                WriteLiteral(@" name=""IOU_agg_code"" class=""form-control"" style=""width: 100%"">
                        </div>
                    </div>
                </div>
                <div class=""col-sm-4"">
                    <div class=""form-group"">
                        <label for=""txt_fg_code"" class=""col-sm-4 control-label"">FG Code</label>
                        <div class=""col-sm-6"">
                            <input id=""txt_fg_code"" style=""width: 100%"" name=""In_fg_code"" class=""form-control"" type=""text"" readonly>
                        </div>
                    </div>
                </div>
                <div class=""col-sm-4"">
                    <div class=""form-group"">
                        <label for=""txt_final_output"" class=""col-sm-4 control-label "">Final Output</label>
                        <div class=""col-sm-6"">
                            <input id=""txt_final_output"" name=""final_output"" class=""form-control"" type=""text"" readonly>
                            <input type=""hidden"" id=""txt_final_o");
                WriteLiteral(@"utput_code"" name=""In_final_output_code"">
                            <input type=""hidden"" id=""txt_production_rowid"" name=""IOU_production_rowid"">
                        </div>
                        <div id=""pay_help"">
                            <a class=""HelpWindow fa fa-search fa-lg"" role=""button"" id=""pay_help1"" data-toggle=""modal"" href=""/HelpFilter/HelpFilter"" hdrtitle=""Item Search"" searchid=""P01"" data-target=""#HelpModal"" onclick=transfer(this,""form"","""",""form_control""); title=""Search"" style=""font-size: 19px; ""></a>
                        </div>
                    </div>
                </div>
                <div class=""col-sm-6"">
                    <div class=""form-group"" style=""display:none;"">
                        <label for=""status_code"" class=""col-sm-5 control-label"">Status_code</label>
                        <div class=""col-sm-4"">
                            <input type=""text"" value=""A"" id=""txt_status_code"" name=""In_status_code"" class=""form-control"" maxlength=""10"">
              ");
                WriteLiteral(@"          </div>
                    </div>
                </div>

                <div class=""col-sm-6"">
                    <div class=""form-group"" style=""display:none;"">
                        <label for=""txtMode"" class=""col-sm-5 control-label"">Mode</label>
                        <div class=""col-sm-4"">
                            <input type=""text"" id=""txtMode"" name=""In_mode_flag"" class=""form-control"" maxlength=""10"" value=""I"">
                        </div>
                    </div>
                </div>
                <div class=""col-sm-6"">
                    <div class=""form-group"" style=""display:none;"">
                        <label for=""row_timestamp"" class=""col-sm-5 control-label"">Timestamp:</label>
                        <div class=""col-sm-4"">
                            <input type=""text"" id=""txt_row_timestamp"" name=""In_row_timestamp"" class=""form-control"" maxlength=""10"">
                        </div>
                    </div>
                </div>
            </div>
");
                WriteLiteral(@"            <div class=""row"" style=""padding-bottom:15px"">
                <div class=""col-xs-2""></div>
                <div class=""col-xs-8"" style=""padding-bottom:20px"">
                    <div id=""grid_Drop_list"">
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
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n\r\n<script>\r\n    click_act_name = \"PAWHSProductionmasterList\";\r\n    click_ctrl_name = \"PAWHSProductionMaster\";\r\n    form_list_url = \'../\' + click_ctrl_name + \'/\' + click_act_name;\r\n</script>\r\n\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b5bcad39558eb24bf17fd282c72d135b4978049512292", async() => {
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
            WriteLiteral(@"

<script>
    $(document).ready(function () {

        //$(""#divCreate"").hide();
        //$(""#divEdit"").hide();
        //$(""#divView"").hide();
        //$('#frmlayerdiv').show();
        //$('#divUserRole8').show();
        $(""#hide_div"").hide();
        Screen_Id = ""PRODSTAGSTUP"";
        permission = sec_Permission(Screen_Id);

        var org_id = getlocalStorage('org_id');
        $('#txtagg_code').val(org_id);
        var data = [];
        gridFilter(data);
        $(""#bottom_menus"").hide();
        Form_validate_Name = $('form.form-horizontal').attr('id');
        var container = $(""#production_masterform"");
        kendo.init(container);
        container.kendoValidator({
        });
        if (getlocalStorage('btn_clk_val') == ""Create"") {
            Disabled();
            $('#divCreate #review').hide();
            $(""#txtMode"").val(""I"");

            $(""#DocStat"").val(""New"");
        }
        else if (getlocalStorage('btn_clk_val') == ""Edit"" || getlocalStorage('");
            WriteLiteral(@"btn_clk_val') == ""Edit"") {
            //$(""#DocStat"").removeAttr(""readonly"");
            //$(""#DocStat"").attr(""readonly"", true);
            $('#divEdit #reviewEd').hide();
            $('#divEdit #deactivate').hide();
            if (getlocalStorage(""ls_pageList"") != undefined) {

                Enabled();
                var data = getlocalStorage(""ls_pageList"");
                var formval = form_Serialize(""production_masterform"");
                var obj_val = JSON.parse(formval);
                obj_val.fg_code = data.Out_fg_code;
                obj_val.production_rowid = data.Out_production_rowid;
                var data = {};
                data.context = WebAPIProxy.getContext();
                data.context.Header = obj_val;
                var Context = data.context;
                $.ajax({
                    type: ""POST"",
                    data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, productio");
            WriteLiteral(@"n_rowid: Context.Header.production_rowid, agg_code: Context.Header.fg_code }),
                    url: ""/PAWHSProductionMaster/PAWHSProductionfetch"",
                    dataType: ""json"",
                    contentType: 'application/json; charset=utf-8',
                    success: function (response) {
                        debugger;
                        if (response.context != null) {
                            generate_ProductionStageSetup_header(response.context.Header);
                            generate_ProductionStageSetup_Stage(response.context.Stage);
                            $(""#txtMode"").val(""U"");
                            $(""#DocStat"").val(""Active"");
                        }
                        else {

                        }
                    },
                    error: function (er) {
                        alert(er)
                        console.log(er)
                    }
                });
               
            }
        }
       ");
            WriteLiteral(@" else if (getlocalStorage('btn_clk_val') == ""View"") {

            $('#divEdit #reviewEd').hide();
            $('#divEdit #deactivate').hide();
            if (getlocalStorage(""ls_pageList"") != undefined) {
                Enabled();
                var data = getlocalStorage(""ls_pageList"");
                var formval = form_Serialize(""production_masterform"");
                var obj_val = JSON.parse(formval);
                obj_val.fg_code = data.fg_code;
                obj_val.production_rowid = data.production_rowid;
                var data = {};
                data.context = WebAPIProxy.getContext();
                data.context.Header = obj_val;
                var Context = data.context;
                $.ajax({
                    type: ""POST"",
                    data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, production_rowid: Context.Header.production_rowid, agg_code: Context.Header.fg_code }),
       ");
            WriteLiteral(@"             url: ""/PAWHSProductionMaster/PAWHSProductionfetch"",
                    dataType: ""json"",
                    contentType: 'application/json; charset=utf-8',
                    success: function (response) {
                        debugger;
                        if (response.context != null) {
                            generate_ProductionStageSetup_header(response.context.Header);
                            generate_ProductionStageSetup_Stage(response.context.Stage);
                            $(""#txtMode"").val(""U"");
                            $(""#DocStat"").val(""View"");
                        }
                        else {

                        }
                    },
                    error: function (er) {
                        alert(er)
                        console.log(er)
                    }
                });
              
            }
        }
    });
    function get_ProductionStageSetup_details(res) {
        try {
            $(""#txt");
            WriteLiteral(@"_fg_code"").val(res.fg_code);
            var formval = form_Serialize(""production_masterform"");
            var obj_val = JSON.parse(formval);
            obj_val.fg_code = res.IOU_fg_code;
            obj_val.production_rowid = res.In_production_rowid;
            var Context = obj_val.context;
            $.ajax({
                type: ""POST"",
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, production_rowid: Context.Header.production_rowid, agg_code: Context.Header.fg_code }),
                url: ""/PAWHSProductionMaster/PAWHSProductionfetch"",
                dataType: ""json"",
                contentType: 'application/json; charset=utf-8',
                success: function (response) {
                    debugger;
                    if (response.context != null) {
                        generate_ProductionStageSetup_header(response.context.Header);
                        generate_ProductionStageSet");
            WriteLiteral(@"up_Stage(response.context.Stage);
                        $(""#txtMode"").val(""U"");
                        $(""#DocStat"").val(""Active"");
                    }
                    else {

                    }
                },
                error: function (er) {
                    alert(er)
                    console.log(er)
                }
            });
            $(""#txt_fg_code"").val(res.fg_code);
           


        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    function Enabled() {

        $(""#txtagg_code"").removeAttr(""readonly"");
        $(""#txt_fg_code"").removeAttr(""readonly"");
        $(""#txt_final_output"").removeAttr(""readonly"");
    }

    function Disabled() {

        $(""#txtagg_code"").attr(""readonly"", true);
        $(""#txt_fg_code"").attr(""readonly"", true);
        $(""#txt_final_output"").attr(""readonly"", true);

    }
    function load_master_code() {
        try {
            debugger;");
            WriteLiteral(@"
            var data = {};
            var context = WebAPIProxy.getContext();
            data.userId = context.userId
            data.orgnId = context.orgnId
            data.locnId = context.locnId
            data.localeId = context.localeId
            data.screen_Id = ""PRODSTAGSTUP"";
            var tab_values = ajaxcall_param(""/Home/screenId_mastercodelist"", JSON.stringify(data));
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
    //var data = [];
    function gridFilter(data) {
        try {
            $(""#grid_Drop_list"").kendoGrid({
                dataSource: {
                    data: data,
                    schema: {
                        model: {
                            fields: {
                                In_stage_rowid: { type: ""string"" },
                                In_stage_code: { type: ""string"" },
                                In_stage_desc: { type: ""string"" },
                 ");
            WriteLiteral(@"               In_seq_no: { type: ""string"" },
                                In_mode_flag: { type: ""string"", defaultValue: ""I"" }
                            }
                        }
                    }
                },
                toolbar: ""<a class='k-grid-add' id='btnSave' href=''><span class='fa fa-plus' style='color:Black'></span></a>"",
                height: 300,
                groupable: false,
                dataBound: function (e) {
                    resultData = e.sender._data;
                    var rows = $('#grid_Drop_list').data('kendoGrid').tbody.children();
                    setColor(rows, resultData);
                },
                sortable: true,
                selectable: true,
                navigatable: true,
                columns: [{
                    command: [
            {
                name: ""Delete"",
                id: ""Delete"",
                imageClass: ""fa fa-close"",
                click: function (e) {
                   ");
            WriteLiteral(@" // e.preventDefault();
                    var grid = $(""#grid_Drop_list"").data(""kendoGrid"");
                    var dataItem = $(""#grid_Drop_list"").data(""kendoGrid"").dataItem($(e.target).closest(""tr""));
                    DeleteWindowEvent(e, dataItem, grid);
                    e.stopImmediatePropagation();

                }
            },
                    ], title: ""&nbsp;"", width: ""15px"",
                },

                {
                    field: ""In_stage_rowid"",
                    title: ""stage_rowid"",
                    hidden: true,
                    width: 100,
                },
                {
                    field: ""In_stage_code"",
                    title: ""stage_code"",
                    hidden: true,
                    width: 100,
                },
                {
                    field: ""In_stage_desc"",
                    title: ""Stage Descripition"",
                    editor: function (container, options) {
                        c");
            WriteLiteral(@"ombo_editor_man(container, ""cmb_"" + options.field, eval(options.field + ""_list""), options.field, ""In_stage_code"", ""grid_Drop_list"")
                    },
                    editable: true,
                    width: 100,
                },
                {
                    field: ""In_seq_no"",
                    title: ""Seq. No."",
                    width: 40,
                    attributes: { style: ""text-align:right;"" },
                    editor: function (container, options) {
                        numeric_editor(container, options.field, '50', '0');

                    },
                },
                {
                    field: ""In_status_code"",
                    title: ""status_code"",
                    hidden: true,
                    width: 100,
                },
                {
                    field: ""In_status_desc"",
                    title: ""status_desc"",
                    hidden: true,
                    width: 100,
                },
   ");
            WriteLiteral(@"             {
                    field: ""In_mode_flag"",
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
    load_master_code();
    In_stage_desc_list = grid_comboScreen_mastercodes(""QCD_PAWHS_STAGE"");

    function grid_control() {
        try {
            var control_Name = [];
            return control_Name;
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    function form_control() {
        var control_Name = [
        { ""dataCol"": ""item_name"", ""controlId"": ""txt_final_output"", ""type"": ""Text"" },
         { ""dataCol"": ""item_code"", ""controlId"": ""txt_final_output_code"", ""type"": ""Text"" },

          //{ ""dataCol"": ""item_type"", ""controlId"": """", ""type"": ""Text"" },

        ];
        return control_Name;

    }

    function controlName() {
        try");
            WriteLiteral(@" {
            var control_Name = [
            ];
            return control_Name
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    function trans_input_data() {
        try {
            var trans_coll = [
                { ""trasfer"": ""Yes"", ""dataCol"": ""item_code "", ""controlId"": ""txt_final_output"", ""grid_id"": """", ""grid_row_col"": ""item_code"" },
             { ""trasfer"": ""Yes"", ""dataCol"": ""agg_code"", ""controlId"": ""txtagg_code"", ""grid_id"": """", ""grid_row_col"": ""agg_code"" }

            ]
            return trans_coll;
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    function save() {
        try {
            debugger;
            var entityGrid = $(""#grid_Drop_list"").data(""kendoGrid"");

            var data = entityGrid.dataSource.data();
            var totalNumber = data.length;
            var totalnumber_1 = data.length;
            if (data.le");
            WriteLiteral(@"ngth == 0) {
                kendoAlert(""Kindly select the StageDescription"");
                return false;
            }

            for (var i = 1; i <= totalNumber; i++) {
                var matchFlag = 0;

                for (var j = totalnumber_1 - 1; j <= totalnumber_1; j--) {
                    {
                        totalnumber_1 = totalnumber_1 - 1;
                        var nextval = data[j];
                        var seq_2 = nextval.In_seq_no;
                        if (i == seq_2) {
                            matchFlag = 0;
                            break;
                        }
                        else {
                            matchFlag = 1;
                        }
                    }
                    if (matchFlag == 1) {
                        kendoAlert(""Sequence is not right"");
                        return;
                    }
                }
            }

            for (var i = 0; i < totalNumber; i++) {
              ");
            WriteLiteral(@"  var currentDataItem = data[i];
                var stage1 = currentDataItem.In_stage_desc;
                var seq1 = currentDataItem.In_seq_no;
                //var k = 1;
                //var h = k + i;
                //if (seq1==i)
                //{
                for (var j = i + 1; j < totalNumber; j++) {
                    var nextDataItem = data[j];
                    var stage2 = nextDataItem.In_stage_desc;
                    var seq2 = nextDataItem.In_seq_no;
                    if (stage1 == stage2) {
                        kendoAlert(""StageDescription should be unique"");
                        return false;
                    }
                    if (seq1 == seq2) {
                        kendoAlert(""Seq.No should be unique"");
                        return false;
                    }
                }
                //}
                //else {
                //    kendoAlert(""SeqNo should be starts with 1"");
                //    return false;
          ");
            WriteLiteral(@"      //}
            }

            if ($(""#txt_fg_code"").val() == """") {
                $(""#txt_fg_code"").val('0');
            }
            if ($(""#txt_production_rowid"").val() == """") {
                $(""#txt_production_rowid"").val('0');
            }
            if ($(""#txt_final_output"").val() == """") {
                kendoAlert(""Final output Cannot Be Blank"");
                return false;
            }
            Enabled();
            var formval = form_Serialize(""production_masterform"");
            var obj_val = JSON.parse(formval);
            Disabled();
            var grid_val = JSON.stringify($(""#grid_Drop_list"").data().kendoGrid._data);
            var Bind = {};
            Bind = grid_val;
            var result = JSON.parse(Bind);
            $.each(result, function (index, value) {
                var row_id = value.In_stage_rowid;
                if (row_id == undefined || row_id == """") {
                    result[index].In_stage_rowid = ""0"";
                }");
            WriteLiteral(@"
                var status_code = value.In_status_code;
                if (status_code == undefined) {
                    result[index].In_status_code = ""A"";
                }
                var mmode = result[index].In_mode_flag;
                if (mmode == ""S"") {
                    result[index].In_mode_flag = ""U"";
                }
                var stageCode = value.In_stage_code;
                if (stageCode == """" || stageCode == undefined) {
                    result[index].In_stage_code = result[index].In_stage_desc;
                }
            });
            var obj_grid_val = result;
            var data = {};
            Disabled();
            data.context = WebAPIProxy.getContext();
            data.context.Header = obj_val;
            data.context.Stage = obj_grid_val;
            var Context = data.context;
            $.ajax({
                type: ""POST"",
                data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.");
            WriteLiteral(@"locnId, localeId: Context.localeId, Header: Context.Header, Stage: Context.Stage }),
                url: ""/PAWHSProductionMaster/PAWHSProductionSave"",
                dataType: ""json"",
                contentType: 'application/json; charset=utf-8',
                success: function (response) {
                    console.log(response)
                    var Res = response;
                    if (Res.context != null) {
                        var mode = $(""#txtMode"").val();
                        if (mode == ""I"") {
                            kendoAlert(""Production Stage Setup  Details saved successfully"");
                            get_ProductionStageSetup_details(Res.context.Header);
                        }
                        else if (mode == ""D"") {
                            kendoAlert(""Production Stage Setup Details inactivate successfully"");
                            get_ProductionStageSetup_details(Res.context.Header);

                        }
                        ");
            WriteLiteral(@"else {
                            kendoAlert(""Production Stage Setup Details Updated successfully"");
                            // retrieve_ProductionStageSetup_list();
                            get_ProductionStageSetup_details(Res.context.Header);
                        }
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

    function generate_ProductionStageSetup_header(res) {

        try {
            $(""#txt_production_rowid"").val(res.IOU_production_rowid);
            $(""#txt_fg_code"").val(res.In_fg_code);
            $(""#txt_final_output_code"").val(res.In_final_output_code);
            $(""#txt");
            WriteLiteral(@"_final_output"").val(res.In_final_output);
            $(""#DocStat"").val(res.In_status_desc);
            $(""#txtMode"").val(res.In_mode_flag);
            $(""#txt_row_timestamp"").val(res.In_row_timestamp);
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

    function generate_ProductionStageSetup_Stage(res) {
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
<style>
    .k-grid-header th.k-header, .k-filter-row th {
        text-align: left;
    }

    .k-widget.k-tooltip {
        background-color: #ffe79e;
        color: #6b5100;
    }

    span.k-tooltip {
        white-space: pre-line;
    }
</style>


");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b5bcad39558eb24bf17fd282c72d135b4978049534749", async() => {
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
            WriteLiteral("\r\n\r\n");
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
