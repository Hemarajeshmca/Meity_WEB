#pragma checksum "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\UserDefinition\UserMapForm.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b742056e491978e3fe12df9bafe553bacf5f5728"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_UserDefinition_UserMapForm), @"mvc.1.0.view", @"/Views/UserDefinition/UserMapForm.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b742056e491978e3fe12df9bafe553bacf5f5728", @"/Views/UserDefinition/UserMapForm.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c20a4f1b02c18b9db37890379beb6b4e8cd0e608", @"/Views/_ViewImports.cshtml")]
    public class Views_UserDefinition_UserMapForm : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString("usermap_form"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("form-horizontal"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("data-role", new global::Microsoft.AspNetCore.Html.HtmlString("validator"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("novalidate", new global::Microsoft.AspNetCore.Html.HtmlString("novalidate"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\UserDefinition\UserMapForm.cshtml"
  
    ViewBag.Form = "User Map";
    Layout = "~/Views/Shared/FormViewLayout1.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b742056e491978e3fe12df9bafe553bacf5f57285170", async() => {
                WriteLiteral(@"
    <div class=""panel panel-default"">
        <div class=""panel-body"" style=""padding-top:6px;padding-bottom:2px"">
           
            <div class=""row"">
                <div class=""col-lg-3"">
                    <div id=""grid_user_list"">
                    </div>
                </div>
                <div class=""col-lg-9"">
                    <div class=""row"">
                        <div class=""col-xs-4"">
                            <div class=""form-group"">
                                <label for=""cmb_userid"" class="" col-sm-4 control-label required"">User ID:</label>
                                <div class="" col-sm-8"">
                                    <input id=""cmb_userid"" name=""In_user_code"" data-role=""filtercombo"" style=""width:100%"" />
                                </div>
                            </div>
                        </div>
                        <div class=""col-xs-4"">
                            <div class=""form-group"">
                                <l");
                WriteLiteral(@"abel for=""cmb_parentcode"" class="" col-sm-1 control-label required"">FO:</label>
                                <div class="" col-sm-8"" style=""padding-left: 25px;"">
                                    <input id=""cmb_parentcode"" name=""In_parent_code"" data-role=""filtercombo"" style=""width:100%"" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=""row"" style="" display:none"">
                        <div class=""col-xs-4"">
                            <div class=""form-group"">
                                <label for=""cmb_Belong"" class="" col-sm-2 control-label"">Belongs to:</label>
                                <div class="" col-sm-10"" style="" padding-left: 42px;"">
                                    <select id=""cmb_Belong"" name=""In_fpo_code"" multiple=""multiple"" style=""width:100% ;height:50%""></select>
                                    <script id=""tagTemplate"" type=""text/x-kendo-template"">");
                WriteLiteral(@"
                                        <span>
                                            #: desc #
                                        </span>
                                    </script>
                                </div>
                            </div>
                            <div class=""col-xs-4"" style="" display:none"">
                                <div class=""form-group"" style="" display:none"">
                                    <label for=""cmb_parentcode"" class="" col-sm-2 control-label"">FO:</label>
                                    <div class="" col-sm-10"" style="" padding-left: 42px;"">
                                        <input id=""cmb_parentcode"" name=""In_orgn_code"" style=""width:100%"" />
                                        <input id=""org_level"" name=""In_orgn_level"" type=""hidden"" />
                                    </div>
                                </div>
                            </div>
                            <div style="" display:none"">
      ");
                WriteLiteral(@"                          <div class=""form-group"" style="" display:none"">
                                    <label for=""txtMode"" class=""control-label"">Mode Flag</label>
                                    <div>
                                        <input type=""text"" name=""In_mode_flag"" id=""txtMode"" class=""form-control"" readonly>
                                    </div>
                                </div>
                            </div>
                            <div class=""col-sm-5"" style=""display:none"">
                                <div class=""form-group"">
                                    <label for=""txt_timestamp"" class=""col-sm-5 control-label"">Timestamp:</label>
                                    <div class=""col-sm-7"">
                                        <input type=""text"" id=""txt_timestamp"" name=""In_row_timestamp"" class=""form-control"" maxlength=""125"">
                                    </div>
                                </div>
                            </div>");
                WriteLiteral(@"
                            <div class=""col-sm-5"" style=""display:none"">
                                <div class=""form-group"">
                                    <label for=""txt_status_code"" class=""col-sm-5 control-label"">Status Code:</label>
                                    <div class=""col-sm-7"">
                                        <input type=""text"" id=""txt_status_code"" name=""In_status_code"" class=""form-control"" maxlength=""125"">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class=""row"">
                        <div class=""col-md-12 "">
                            <div id=""grid_fpo_list"">
                            </div>
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
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
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
    var permission = """";
    var FinalResultSet = [];
    $(document).ready(function () {
        debugger;
        master_FpoUserNew();
        grid_user([]);
        FPOGrid_details([]);
        menuId = getlocalStorage(""MenuId"");
        Form_validate_Name = $('form.form-horizontal').attr('id');
        var container = $(""#usermap_form"");
        kendo.init(container);
        container.kendoValidator({
        });
       
        $(""#hide_div"").hide();
          var data = {};
            data.userId = getlocalStorage(""User_Id_Value"");
            var user_code = data.userId;

            var data1 = { User_code: user_code };
           $.ajax({
            url: '");
#nullable restore
#line 116 "D:\Live\Meity\Updated\FEB-06-2023\WEB\meity-web-frontend\FFI\Views\UserDefinition\UserMapForm.cshtml"
             Write(Url.Action("GetRIlist", "Login"));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"',
            type: ""post"",
            contentType: 'application/x-www-form-urlencoded',
            data: data1,
            success: function (response1) {
                debugger;
                if (response1 != null) {
                    debugger;
                    var url_path = JSON.parse(response1);
                    var itemArr = [];
                    for (var i = 0; i < url_path.Table.length; i++) {
                        var list = {};
                        list.id = url_path.Table[i].serial_number;
                        list.code = url_path.Table[i].dist_code;
                        list.desc = url_path.Table[i].Member_district_name;
                        itemArr.push(list);
                    }
                    filter_combobox(""cmb_parentcode"", itemArr);
                  
                }
            },
            error: function (er) {
                alert(er)
                console.log(er)
            }
           });
        load_master_code");
            WriteLiteral(@"();
        var list_in = """";
        $(""#cmb_userid"").empty();
        list_in = grid_comboScreen_mastercodes(""USER"");
        filter_combobox(""cmb_userid"", list_in);


       

        Screen_Id = ""USRMAP"";
        permission = sec_Master_Permission(Screen_Id);
        var data = {};
        data.context = getContext();
        var Context = data.context;
        $.ajax({
            type: ""POST"",
            data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId }),
            url: ""/UserDefinition/userMapList"",
            dataType: ""json"",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                debugger;
                if (response.context != null) {
                    generate_userrole_list(response.context.list);
                }
                else {
                    grid_user([]);
                }
            },
            error: func");
            WriteLiteral(@"tion (er) {
                alert(er)
                console.log(er)
            }

        });
        retrieve_userrole_combo();
    });
    function load_master_code() {
        debugger;
        try {
            var data = {};
            data.screen_Id = ""USRMAP"";
            var tab_values = ajaxcall_param(""/Home/screenId_mastercodelist"", JSON.stringify(data));
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }
  
</script>
<script>
    function grid_user(data) {
        $(""#grid_user_list"").kendoGrid({
            dataSource: {
                data: data, //  pageSize: 20
            },
            height: 480,
            sortable: true,
            selectable: true,
            change: onChangeSelection,
            selectable: ""singl"",   //  Grid Row Selection
            navigatable: true,
            columns: [
                {
                    field: ""orgn_code"",
                    title: ""Orgn ");
            WriteLiteral(@"code"",
                    hidden: true,
                    width: 30
                },
                {
                    field: ""orgn_desc"",
                    title: ""Orgn Desc"",
                    hidden: true,
                    width: 30
                },
                {
                    field: ""user_code"",
                    title: ""User Code"",
                    width: 30
                },
                {
                    field: ""user_name"",
                    title: ""User Name"",
                    width: 30
                },
                {
                    field: ""role_code"",
                    title: ""Role Code"",
                    width: 30,
                    hidden: true,
                },
                {
                    field: ""role_name"",
                    title: ""Role Name"",
                    width: 30,
                    hidden: true,
                },
                {
                    field: ""valid_till"",
  ");
            WriteLiteral(@"                  title: ""Valid Till"",
                    width: 30,
                    hidden: true,
                },
                {
                    field: ""contact_no"",
                    title: ""Contact No."",
                    width: 30,
                    hidden: true,
                },
                {
                    field: ""email_id"",
                    title: ""Email id."",
                    hidden: true,
                    width: 30
                },
                {
                    field: ""status_desc"",
                    title: ""Status Desc"",
                    hidden: true,
                    width: 30
                }]
        });
    }

    function onChangeSelection() {
        debugger;
        $('.checkbox').prop('checked', false);
        var grid = $(""#grid_user_list"").data(""kendoGrid"");
        var selectedItem = grid.dataItem(grid.select());
        var formval = form_Serialize(""usermap_form"");
        var obj_val = JSON.pars");
            WriteLiteral(@"e(formval);
        obj_val.user_code = selectedItem.user_code;
        $(""#txtUserId"").val(selectedItem.user_code);
        var data = {};
        data.context = getContext();
        data.context.Header = obj_val;
        var Context = data.context;
        $.ajax({
            type: ""POST"",
            data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, user_code: Context.Header.user_code }),
            url: ""/UserDefinition/UserFPOfetch"",
            dataType: ""json"",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                debugger;
                if (response.context != null) {
                    generate_userrole_header(response.context.Header);
                    generate_userrole_Detail(response.context.Detail);
                }
                else {

                }
            },
            error: function (er) {
                alert(");
            WriteLiteral(@"er)
                console.log(er)
            }

        });
    }
    function generate_userrole_list(res) {
        if (res == null) {
            grid_user([]);
        }
        else {
            var data = changedataType(res);
            grid_user(data);
        }
    }
    function generate_userfpo_detail(res) {
        if (res == null) {
            FPOGrid_details([]);
        }
        else {
            var data = changedataType(res);
            FPOGrid_details(data);
        }
    }
    function generate_userrole_header(res)
    {
        $('#cmb_userid').data(""kendoComboBox"").value(res.user_code);
        $('#cmb_parentcode').data(""kendoComboBox"").value(res.parent_code);
       
    }
    function retrieve_userrole_combo() {
        var formval = form_Serialize(""usermap_form"");
        var obj_val = JSON.parse(formval);
        obj_val.user_id = ""."";


        var data = {};
        data.context = getContext();
        data.context.Header = obj_val;

  ");
            WriteLiteral(@"      var Context = data.context;
        $.ajax({
            type: ""POST"",
            data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId }),
            url: ""/UserDefinition/FPOList"",
            dataType: ""json"",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                debugger;
                if (response.context != null) {
                    generate_userfpo_detail(response.context.List);
                }
                else {
                    grid_user_details([]);
                }
            },
            error: function (er) {
                alert(er)
                console.log(er)
            }

        });

    }
    function generate_userrole_Detail(res)
    {
        var data = changedataType(res);
        var fpogrid = $(""#grid_fpo_list"").data(""kendoGrid"");

        if (data != null || date != """")
        {
            fo");
            WriteLiteral(@"r (var j = 0; j < fpogrid._data.length; j++) {
                var FCODE = fpogrid._data[j].fpo_code;

                for (var i = 0; i < data.length; i++)
                {
                    if (data[i].fpo_code == FCODE)
                    {
                        $(""#"" + data[i].fpo_code + """").prop('checked', true);
                    }
                }

            }

        }

    }
    var status_Priority = [];
    function FPOGrid_details(data) {
        try {
            $.each(data, function (index, value) {
                var flag = false;
                $.each(status_Priority, function (sindex, svalue) {
                    if (svalue == value.status_desc) {
                        flag = true;
                    }
                });
                if (flag == false) {
                    status_Priority.push(value.status_desc);
                }
            });
            gridRowID = -1;
            data = addRandomNum(data);
            $(""#grid_fpo_l");
            WriteLiteral(@"ist"").kendoGrid({
                dataSource: {
                    data: data,
                    // pageSize: 20,
                },

                height: 400,
                sortable: true,
                selectable: true,
                selectable: ""singl"",   //  Grid Row Selection
                navigatable: true,
                groupable: false,
                change: function (e) {
                    $('tr').find('[type=checkbox]').prop('checked', false);
                    $('tr.k-state-selected').find('[type=checkbox]').prop('checked', true);
                },
                columns: [
                    {
                        title: ""Select All"",
                        headerTemplate: ""<input type='checkbox'  id='selectall' class='k-checkbox header-checkbox' ><label class='k-checkbox-label' for='selectall'> Select All</label>"",
                        template: ""<input type='checkbox' id='${fpo_code}' class='checkbox' />"",
                        width: 80,
");
            WriteLiteral(@"
                    },
                  
                    {
                        field: ""fpo_code"",
                        title: ""FPO Code"",
                        width:80
                    },
                
                    {
                        field: ""fpo_desc"",
                        title: ""FPO Name"",
                        width: 200
                    },
                ]

            });
        
            $(""#selectall"").click(function (ev) {
                debugger;
                var checked = ev.target.checked;
                //alert(checked);
                if (checked) {
                    debugger;
                    $('.checkbox').prop('checked', true);
                    //selectRow();
                } else {
                    $('.checkbox').prop('checked', false);
                }
            });
            $("".k-dropdown-operator"").css('display', 'none');
            $(""#grid_fpo_list .k-input"").attr('disabled', 'false');");
            WriteLiteral(@"
        }
        catch (err) {
            javascript_log4j_root(arguments.callee.name, err);
        }
    }

  
    function save() {
        debugger;
        save_user();
    }


    function save_user()
    {
        debugger;
        if ($(""#txtMode"").val() == """") {
            $(""#txtMode"").val('I');
        }
        if ($(""#DocStat"").val() == ""Active"") {
            $(""#txtMode"").val('U');
        }

        var formval = form_Serialize(""usermap_form"");
        var obj_val = JSON.parse(formval);
        var fposelect = """";
        var grid = $(""#grid_fpo_list"").data(""kendoGrid"");
        var selected = [];
        grid.tbody.find(""input:checked"").closest(""tr"").each(function (index) {
            selected.push(grid.dataItem(this));
        });
        console.log(selected);
        var valuesfpo = selected;
        if (valuesfpo.length == 0) {
            kendoAlert(""Please select records"");
        }
        else {
            for (var i = 0; i < valuesfpo.leng");
            WriteLiteral(@"th; i++) {
                if (i == 0) {
                    fposelect += valuesfpo[i].fpo_code;
                }
                else {
                    fposelect += "","" + valuesfpo[i].fpo_code;
                }
                obj_val.In_fpo_code = fposelect;
            }
        }
       
        obj_val.In_orgn_code = $(""#cmb_parentcode"").data(""kendoComboBox"").value();
        obj_val.In_orgn_level = ""ORG_FPO"";
        obj_val.In_status_code = ""A"";

        var data = {};
        data.context = getContext();
        data.context.Header = obj_val;
        var Context = data.context;
        $.ajax({
            type: ""POST"",
            data: JSON.stringify({ userId: Context.userId, orgnId: Context.orgnId, locnId: Context.locnId, localeId: Context.localeId, Header: Context.Header }),
            url: ""/UserDefinition/SaveUserMap"",
            dataType: ""json"",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
             ");
            WriteLiteral(@"   console.log(response)
                var Res = JSON.parse(response);
                if (Res.applicationException.errorDescription == null || Res.applicationException.errorDescription == """") {
                    var mode = $(""#txtMode"").val();
                    if (mode == ""I"") {
                        kendoAlert(""User Map saved successfully"");
                        clear_val();
                    }

                }
                else {
                    kendoAlert(Res.applicationException.errorDescription);
                }
            },
            error: function (er) {
                alert(er)
                console.log(er)
            }

        });
    }
    function clear_val() {
       
        $('#cmb_userid').data(""kendoComboBox"").value('');
        $('#cmb_parentcode').data(""kendoComboBox"").value('');
        grid_user_details([]);
    }
    function generate_fpo_list(res) {
        if (res == null) {
            FPOGrid_details([]);
        }
   ");
            WriteLiteral(@"     else {
            var data = changedataType(res);
            FPOGrid_details(data);
        }
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
</style>");
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
