﻿const { Alert } = required("../lib/bootstrap/dist/js/bootstrap.bundle");

// Javascript log4j root functionality //
var js_filename = "";
js_filename = "DynamicGrid.js";

var hdnSeason = "";

function getCurentForm_FileName() {
    var pagePathName = window.location.pathname;
    return pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
}

function javascript_log4j_root(methodName, errmsg) {
    try {
        var err_data = {};
        err_data.formName = getCurentForm_FileName();
        err_data.filename = js_filename;
        err_data.methodName = methodName.toString();
        err_data.errmsg = errmsg.toString();
        var result = ajaxcall_param('/Home/javascript_log4j', JSON.stringify(err_data));
    }
    catch (err) {
        alert(err);
    }
}


function gettoolbar(add_option) {
    if (add_option == 'Y')
        return "<a class=' k-grid-add'  id = 'btnSave' href=''><span class='fa fa-plus' style='color:Black'></span></a>";
    else
        return "";
}

function getFields(grd_id, grd_col) {
    debugger;
    try {
        var fields = {};
        $.each(grd_col, function (key, value) {
            var select = value.entity_type;

            switch (select) {
                case 'ET_TXT':
                case 'ET_TXTAREA':
                    fields[value.entity_code] = { type: "string", defaultValue: "" };
                    break
                case 'ET_QCD':
                    //alert("++EC_LAND_CROPCAT");

                    fields[value.entity_code + '_code'] = { type: "string", defaultValue: "", hidden: true };
                    fields[value.entity_code] = { type: "string", defaultValue: "" };
                    //console.log(fields);
                    //console.log(fields[value.entity_code] = { type: "string", defaultValue: "" });
                    break;
                case 'ET_NUM':
                    fields[value.entity_code] = { type: "number", defaultValue: "" };
                    break;
                case 'ET_DATE':
                    fields[value.entity_code] = { type: "date", defaultValue: "" };
                    break;
                default:
                    break;
            }
        });
        fields["mode_flag"] = { type: "string", defaultValue: "I" };
        return fields;
    }
    catch (err) {
        //javascript_log4j_root(arguments.callee.name, err);
    }
}
function Uploadview(e, dataItem, grid) {
    debugger
    $("#dialogFileuploadView").kendoWindow();
    var dialog = $("#dialogFileuploadView").data("kendoWindow");
    dialog.open().element.closest(".k-window").css({
        top: 121,
        left: 300, height: 400, width: 500
    });
    dialog.title("Land Photo");
    //dialog.bind("open", serialnoview);
    var imagedata = dataItem.in_photo_kyc
    if (imagedata != "")
        document.getElementById("farmer_Land_img").src = "data:image/png;base64," + imagedata;
    else
        document.getElementById("farmer_Land_img").src = "/images/noimage.png";
}
function getColumns(grd_id, grd_col, add_option) {
    
    //alert(grd_id);
    try {
        var columns = [];
        var i = 0;
        var col = {};
        var col1 = {};
        var cmd;
        var cmd1;
       if (add_option == "Y") {
                debugger;
                cmd = [
                    {
                        name: "Delete",
                        id: "Delete",
                        imageClass: "fa fa-close",
                        click: function (e) {
                            // e.preventDefault();
                            var grid = $("#" + grd_id).data("kendoGrid");
                            var dataItem = $("#" + grd_id).data("kendoGrid").dataItem($(e.target).closest("tr"));
                            DeleteWindowEvent(e, dataItem, grid);
                            e.stopImmediatePropagation()
                        }
                    },

                ];

                col.command = cmd;
                columns.push(col);
            }

        $.each(grd_col, function (key, value) {
           
            col = {};
            col.field = value.entity_code;
            col.title = value.description;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            if (value.entitygrp_code == "EC_ADS")               
            {
                col.width = 130;
            }
            if (add_option == "N")
                col.width = "200px";
            switch (value.entity_type) {
                case 'ET_TXT':
                case 'ET_TXTAREA':
                    {
                        if (value.entity_length != 'MAX')
                            col.editor = function (container, options) { text_editor(container, options.field, value.entity_length, value.mandatory_flag); };
                        else
                            col.editor = function (container, options) { textarea_editor(container, options.field, value.entity_length, value.mandatory_flag); };
                    }
                    break;
                case 'ET_NUM':
                    {
                        var splt = (value.entity_length).split(",");
                        if (splt.length == 1)
                            col.editor = function (container, options) { numeric_editor_dot(container, options.field, splt[0], 0); };
                        else if (splt.length >= 2)
                            col.editor = function (container, options) { numeric_editor_dot(container, options.field, splt[0], splt[1]); };
                    }
                    break;
                case 'ET_DATE':
                    col.editor = function (container, options) { date_editor(container, options); };
                    
                    col.format = "{0:dd/MM/yyyy}";
                    break;
                case 'ET_QCD':
                    {
                             col.editor = function (container, options) {
                         
                            if (options.field == 'EC_LAND_CROPCAT' || options.field == 'EC_LAND_CROPSUB') {
                                if (options.field == 'EC_LAND_CROPCAT') {
                                    var combo_type_list = '';
                                    combo_type_list = master_code_list(value.entity_length);
                                    combo_dependent_man(container, "cmb_" + options.field, combo_type_list, options.field, grd_id, options.field);
                                }
                                else {
                                    var combo_type_list = '';
                                    combo_type_list = master_code_list(value.entity_length);
                                    combo_dependent_man1(container, "cmb_" + options.field, combo_type_list, options.field, grd_id, options.field);
                                }
                            }
                            //else if (options.field == 'EC_OWNED_picture') {
                            //    debugger;
                            //    console.log('Welcome');

                               
                            //}
                            else if (options.field == 'EC_LSD_SUBTYPE') {
                                debugger;
                                var combo_type_list = '';
                                combo_type_list = master_code_list(value.entity_length);
                                combo_dependent_lsdsubtype(container, "cmb_" + options.field, combo_type_list, options.field, grd_id, options.field);
                            }
                            else if (options.field == 'EC_CROP_SOWING_CROPCLASS' ) {
                                debugger; 
                                    var combo_type_list = '';
                                    combo_type_list = master_code_list(value.entity_length);
                                    combo_dependent_sowcropname(container, "cmb_" + options.field, combo_type_list, options.field, grd_id, options.field); 
                                }
                            else if (options.field == 'EC_PROD_CROPCLASS') {
                                debugger;
                                var combo_type_list = '';
                                combo_type_list = master_code_list(value.entity_length);
                                combo_dependent_sowcropname1(container, "cmb_" + options.field, combo_type_list, options.field, grd_id, options.field);
                            }
                            else if (options.field == 'EC_CROP_SOWING_Croptype') {
                                var combo_type_list = '';
                                combo_type_list = master_code_list(value.entity_length);                               
                                combo_dependent_sowclass(container, "cmb_" + options.field, combo_type_list, options.field, grd_id, options.field);
                            }
                            else if (options.field == 'EC_PROD_Croptype') {                               
                                var combo_type_list = '';
                                combo_type_list = master_code_list(value.entity_length);
                                combo_dependent_sowclass1(container, "cmb_" + options.field, combo_type_list, options.field, grd_id, options.field);
                            }
                            else if (options.field == 'EC_CROP_CropType') {
                                var combo_type_list = '';
                                combo_type_list = master_code_list(value.entity_length);
                                combo_dependent_sowclass2(container, "cmb_" + options.field, combo_type_list, options.field, grd_id, options.field);
                            }
                               else if (options.field == 'EC_CROP_SOWING_Vareity') {
                                var combo_type_list = '';
                                combo_type_list = master_code_list(value.entity_length);
                                combo_dependent_sowcroptype(container, "cmb_" + options.field, combo_type_list, options.field, grd_id, options.field);
                            } else if (options.field == 'EC_PROD_Variety') {
                                var combo_type_list = '';
                                combo_type_list = master_code_list(value.entity_length);
                                combo_dependent_sowcroptype1(container, "cmb_" + options.field, combo_type_list, options.field, grd_id, options.field);
                            }
                            else if (options.field == 'EC_CROP_Vareity') {
                                var combo_type_list = '';
                                combo_type_list = master_code_list(value.entity_length);
                                combo_dependent_sowcroptype2(container, "cmb_" + options.field, combo_type_list, options.field, grd_id, options.field);
                            }
                        else if (options.field == 'EC_CROP_SOWING_SEED_NAME') {
                                var combo_type_list = '';
                                combo_type_list = master_code_list(value.entity_length);
                                combo_dependent_sowcropseed(container, "cmb_" + options.field, combo_type_list, options.field, grd_id, options.field);
                            } else if (options.field == 'EC_PROD_SEED_NAME') {
                                var combo_type_list = '';
                                combo_type_list = master_code_list(value.entity_length);
                                combo_dependent_sowcropseed1(container, "cmb_" + options.field, combo_type_list, options.field, grd_id, options.field);
                            }
                            else {
                                var combo_type_list = ''; 
                                combo_type_list = master_code_list(value.entity_length);
                                // combo_editor_man(container, "cmb_" + options.field, combo_type_list, options.field, value.entity_code + '_code', grd_id);     
                                combo_editor_man(container, "cmb_" + options.field, combo_type_list, options.field, grd_id);
                                 
                               
                            }
                           

                        };
                    }
                    break;

                default:
                    break;
            }           
            columns.push(col);


        });
        col = {};
        col.field = "mode_flag";
        col.title = "";
        col.hidden = true;
        //col.width = 200;
       
        columns.push(col);
        if (grd_id == 'EC_OWNEDLAND') {
            cmd1 = [
                {
                    name: "View",
                    id: "View",
                    text: "View",
                    title: "Land Photo",
                    click: function (e) {
                        var grid = $("#" + grd_id).data("kendoGrid");
                        var dataItem = $("#" + grd_id).data("kendoGrid").dataItem($(e.target).closest("tr"));
                        Uploadview(e, dataItem, grid);
                    }
                },
            ];
            col1.command = cmd1;
            columns.push(col1);
        }
        return columns;
    }
    catch (err) {
        //javascript_log4j_root(arguments.callee.name, err);
    }
}
//$("#EC_CROP_SOWING_CROPCLASS").change(function () {
//    alert("hi arul");
//});
function master_code_list(master_code) {
    //alert("test");
    //console.log("arul");
    setlocalStorage('combocrop', master_code);
    var data = {};
    var list = [];
    data.screen_Id = master_code;
    var mst_Dt = ajaxcall_param('/Home/getScreenIDcode', JSON.stringify(data));
    if (mst_Dt.toString() != "null" && mst_Dt != "[]")
        list = getGridComboList(JSON.parse(mst_Dt));//changed as getComboList
    else
        list = getGridComboList([]);
    return list;
}

function text_editor(container, field, maxlen, mandatory_flag) {
    if (mandatory_flag == "Y")
        $('<input required data-bind="value:' + field + '" maxlength="' + maxlen + '" style="color:black ; width:100%"  ' + '"  name="' + field + '"/>').appendTo(container);
    else
        $('<input data-bind="value:' + field + '" maxlength="' + maxlen + '" style="color:black ; width:100%"  ' + '"  name="' + field + '"/>').appendTo(container);
}

function textarea_editor(container, field, maxlen, mandatory_flag) {
    if (mandatory_flag == "Y")
        $('<textarea required data-bind="value:' + field + '" maxlength="' + maxlen + '" style="color:black ; width:100%" ' + '"  name="' + field + '"/>').appendTo(container);
    else
        $('<textarea data-bind="value:' + field + '" maxlength="' + maxlen + '" style="color:black ; width:100%" ' + '"  name="' + field + '"/>').appendTo(container);
}


function numeric_editor_dot(container, field, maxlen, no_decimals) {
    var formatStr = "#";
    var dec_str = "######";
    if (no_decimals > 0)
        formatStr = formatStr + "." + dec_str.substr(0, no_decimals);
    $('<input maxlength="' + maxlen + '"  name="' + field + '"/>')
        .appendTo(container)
        .kendoNumericTextBox({
            min: 0,

            format: formatStr,
            decimals: no_decimals,
            spinners: false
        });
}

function date_editor(container, options) {
    debugger;
    // alert(container);
    //alert(options);
    //this code introducted by Venkat 16-06-2020 Issue No :127 Excel sheet 08-06-2020

    if (options.field == "EC_MATURITY_DATE") {
        
        $('<input  data-text-field="' + options.field + '" data-value-field="' + options.field + '" data-bind="value:' + options.field + '" data-format="' + options.format + '"/>')
            .appendTo(container)
            .kendoDatePicker({
                min: new Date(),
                format: "dd/MM/yyyy"
            });
    }

    //End 
    //this code introducted by Venkat 10-06-2020 Issue No :100 Excel sheet 08-06-2020

    if (options.field == "EC_LD_ENDDATE") {
        $('<input  data-text-field="' + options.field + '" data-value-field="' + options.field + '" data-bind="value:' + options.field + '" data-format="' + options.format + '"/>')
            .appendTo(container)
            .kendoDatePicker({
                min: new Date(),
                format: "dd/MM/yyyy"
            });
    }

    //End 
    else { 

        $('<input  data-text-field="' + options.field + '" data-value-field="' + options.field + '" data-bind="value:' + options.field + '" data-format="' + options.format + '"/>')
        .appendTo(container)
            .kendoDatePicker({
                max: new Date(),// sets max date
                format: "dd/MM/yyyy"
        });
    }
}
function combo_editor_man(container, cmbid, datasource, datafield, grid_id) {
    // dynGrid
    debugger;
    if (cmbid == "cmb_EC_LAND_CROPCAT") {

        $('<input  id="' + cmbid + '" data-text-field="code" data-text-field="desc" data-value-field="desc" data-bind="value:' + datafield + '" name ="' + datafield + '"/>').appendTo(container).kendoComboBox({
             autoBind: false, 
            filter: "contains",
            dataSource: datasource,
            change: function (e) {
                var cmb_value = this.value();

                if (cmb_value && this.selectedIndex == -1) {
                    this.value("");
                }
                //else{
                var cmb_var = $("#" + grid_id).data("kendoGrid");
                var selectedItem = cmb_var.dataItem(cmb_var.select());

                dynGrid();
                var combobox_data = $("#" + cmbid).data("kendoComboBox");
                if (combobox_data != undefined && combobox_data.selectedIndex == -1) {
                    selectedItem[datafield] = "";
                    // selectedItem[code_datafield] = "";
                }
                else {
                    selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc;
                    //selectedItem[code_datafield] = combobox_data.dataItem(combobox_data.selectedIndex).code;
                }
               

                //}
            }
        });
    }
    else {

        $('<input  id="' + cmbid + '" data-text-field="desc" data-value-field="desc" data-bind="value:' + datafield + '" name ="' + datafield + '"/>').appendTo(container).kendoComboBox({
            autoBind: false,
            filter: "contains",
            dataSource: datasource,
            change: function (e) {
                debugger;
                var cmb_value = this.value(); 
                
                if (cmb_value && this.selectedIndex == -1) {
                    this.value("");
                }
                //else{
                var cmb_var = $("#" + grid_id).data("kendoGrid");
                var selectedItem = cmb_var.dataItem(cmb_var.select());
                var combobox_data = $("#" + cmbid).data("kendoComboBox");
                if (combobox_data != undefined && combobox_data.selectedIndex == -1) {
                    selectedItem[datafield] = "";
                    // selectedItem[code_datafield] = "";
                }
                else {
                    selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc;
                    //selectedItem[code_datafield] = combobox_data.dataItem(combobox_data.selectedIndex).code;
                }
               
            }
        });
    }


    $("<span class='k-invalid-msg' data-for='" + datafield + "'></span>").appendTo(container);
}
function combo_dependent_man(container, cmbid, datasource, datafield, grid_id, code_datafield) {
    try {
        debugger;
        var data = datasource;
        $('<input  id="' + cmbid + '" data-text-field="desc" data-value-field="desc" data-bind="value:' + datafield + '" name ="' + datafield + '"/>').appendTo(container).kendoComboBox({
            autoBind: false,
            filter: "contains",
            dataSource: data,
            change: function (e) {
                var cmb_value = this.value();
                if (cmb_value && this.selectedIndex == -1) {
                    this.value("");
                }
                var cmb_var = $("#" + grid_id).data("kendoGrid");
                var selectedItem = cmb_var.dataItem(cmb_var.select());

                var combobox_data = $("#" + cmbid).data("kendoComboBox");
                if (combobox_data != undefined && combobox_data.selectedIndex == -1) {
                    selectedItem[datafield] = "";
                    //selectedItem[code_datafield] = "";
                }
                else {
                    selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc;
                    //selectedItem[code_datafield] = combobox_data.dataItem(combobox_data.selectedIndex).code;
                    selectedItem["selectcode"] = combobox_data.dataItem(combobox_data.selectedIndex).code;
                    selectedItem["EC_LAND_CROPSUB"] = combobox_data.dataItem(combobox_data.selectedIndex).dependent;
                }

                //var model = datafield;
                //model.set("EC_LAND_CROPSUB", model.final_aggr_code);
                //model.set("final_agg", model.final_aggr_code);

            }
        });

        $("<span class='k-invalid-msg' data-for='" + datafield + "'></span>").appendTo(container);

    }
    catch (err) {
        javascript_log4j_root(arguments.callee.name, err);
    }
}

function combo_dependent_lsdsubtype(container, cmbid, datasource, datafield, grid_id, code_datafield) {
    try {
        debugger;
        //var data = datasource;
        var cmb_var = $("#" + grid_id).data("kendoGrid");
        var selectedItem = cmb_var.dataItem(cmb_var.select());
        //ramya added
        var cropclass = selectedItem.EC_LSD_TYPE;
        var cus_arr = [];
        $.each(datasource, function (key, val) {
            if (datasource[key].dependent == cropclass) {
                cus_arr.push(datasource[key]);
            }
        });

        var data = cus_arr;

        $('<input  id="' + cmbid + '" data-text-field="desc" data-value-field="desc" data-bind="value:' + datafield + '" name ="' + datafield + '"/>').appendTo(container).kendoComboBox({
            autoBind: false,
            filter: "contains",
            dataSource: data,
            change: function (e) {
                var cmb_value = this.value();
                if (cmb_value && this.selectedIndex == -1) {
                    this.value("");
                }
                var cmb_var = $("#" + grid_id).data("kendoGrid");
                var selectedItem = cmb_var.dataItem(cmb_var.select());
                var combobox_data = $("#" + cmbid).data("kendoComboBox");

                if (combobox_data != undefined && combobox_data.selectedIndex == -1) {
                    selectedItem[datafield] = "";
                }
                else {                  
                    selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc;                   
                }

            }
        });

        $("<span class='k-invalid-msg' data-for='" + datafield + "'></span>").appendTo(container);

    }
    catch (err) {
        javascript_log4j_root(arguments.callee.name, err);
    }
}
function combo_dependent_sowclass(container, cmbid, datasource, datafield, grid_id, code_datafield) {
    try {
        debugger;
        //var data = datasource;
        var cmb_var = $("#" + grid_id).data("kendoGrid");
        var selectedItem = cmb_var.dataItem(cmb_var.select());
        //ramya added
        var cropclass = selectedItem.EC_CROP_SOWING_CROPCLASS;
        var cus_arr = []; 
        $.each(datasource, function (key, val) {
            if (datasource[key].dependent == cropclass) {
                cus_arr.push(datasource[key]);
            }
        });

        var data = cus_arr;

        $('<input  id="' + cmbid + '" data-text-field="desc" data-value-field="desc" data-bind="value:' + datafield + '" name ="' + datafield + '"/>').appendTo(container).kendoComboBox({
            autoBind: false,
            filter: "contains",
            dataSource: data,
            change: function (e) {
                var cmb_value = this.value();
                if (cmb_value && this.selectedIndex == -1) {
                    this.value("");
                }
                var cmb_var = $("#" + grid_id).data("kendoGrid");
                var selectedItem = cmb_var.dataItem(cmb_var.select()); 
                var combobox_data = $("#" + cmbid).data("kendoComboBox");
                
                if (combobox_data != undefined && combobox_data.selectedIndex == -1) {
                    selectedItem[datafield] = ""; 
                }
                else {
                    //for (var i = 0; i < (datasource.length); i++) {
                    //    var val = datasource[i].dependent;
                       
                   // }
                    selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc;
                    //if (combobox_data.dataItem(combobox_data.selectedIndex).dependent == cropclass) {
                    //    selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc;
                    //    selectedItem["selectcode"] = combobox_data.dataItem(combobox_data.selectedIndex).code;
                    //}
                    //else {
                    //    selectedItem[datafield] = ""; 
                    //}
                    /*selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc; 
                    selectedItem["selectcode"] = combobox_data.dataItem(combobox_data.selectedIndex).code;
                    selectedItem["EC_CROP_SOWING_Croptype"] = combobox_data.dataItem(combobox_data.selectedIndex).dependent;*/
                }
 
            }
        });

        $("<span class='k-invalid-msg' data-for='" + datafield + "'></span>").appendTo(container);

    }
    catch (err) {
        javascript_log4j_root(arguments.callee.name, err);
    }
}
function combo_dependent_sowclass1(container, cmbid, datasource, datafield, grid_id, code_datafield) {
    try {
        debugger;
        //var data = datasource;
        var cmb_var = $("#" + grid_id).data("kendoGrid");
        var selectedItem = cmb_var.dataItem(cmb_var.select());
        //ramya added
        var cropclass = selectedItem.EC_PROD_CROPCLASS;
        var cus_arr = [];
        $.each(datasource, function (key, val) {
            if (datasource[key].dependent == cropclass) {
                cus_arr.push(datasource[key]);
            }
        });

        var data = cus_arr;

        $('<input  id="' + cmbid + '" data-text-field="desc" data-value-field="desc" data-bind="value:' + datafield + '" name ="' + datafield + '"/>').appendTo(container).kendoComboBox({
            autoBind: false,
            filter: "contains",
            dataSource: data,
            change: function (e) {
                var cmb_value = this.value();
                if (cmb_value && this.selectedIndex == -1) {
                    this.value("");
                }
                var cmb_var = $("#" + grid_id).data("kendoGrid");
                var selectedItem = cmb_var.dataItem(cmb_var.select());
                var combobox_data = $("#" + cmbid).data("kendoComboBox");

                if (combobox_data != undefined && combobox_data.selectedIndex == -1) {
                    selectedItem[datafield] = "";
                }
                else {                   
                    selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc;                    
                }

            }
        });

        $("<span class='k-invalid-msg' data-for='" + datafield + "'></span>").appendTo(container);

    }
    catch (err) {
        javascript_log4j_root(arguments.callee.name, err);
    }
}

function combo_dependent_sowclass2(container, cmbid, datasource, datafield, grid_id, code_datafield) {
    try {
        debugger;
        //var data = datasource;
        var cmb_var = $("#" + grid_id).data("kendoGrid");
        var selectedItem = cmb_var.dataItem(cmb_var.select());
        //ramya added
        var cropclass = selectedItem.EC_CROP_Season;
        var test = cropclass.split(" - ");
        var final = test[0].toString();
        var final1 = final.substring(0, 2)
        var final2=final1.toUpperCase();

        var cus_arr = [];
        $.each(datasource, function (key, val) {
            var aa = datasource[key].code;
            var testkey = aa.split("_");
            var test5 = testkey[2].toString();
            if (test5 == final2) {
                cus_arr.push(datasource[key]);
            }
        });

        var data = cus_arr;

        $('<input  id="' + cmbid + '" data-text-field="desc" data-value-field="desc" data-bind="value:' + datafield + '" name ="' + datafield + '"/>').appendTo(container).kendoComboBox({
            autoBind: false,
            filter: "contains",
            dataSource: data,
            change: function (e) {
                var cmb_value = this.value();
                if (cmb_value && this.selectedIndex == -1) {
                    this.value("");
                }
                var cmb_var = $("#" + grid_id).data("kendoGrid");
                var selectedItem = cmb_var.dataItem(cmb_var.select());
                var combobox_data = $("#" + cmbid).data("kendoComboBox");

                if (combobox_data != undefined && combobox_data.selectedIndex == -1) {
                    selectedItem[datafield] = "";
                }
                else {
                    selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc;
                }

            }
        });

        $("<span class='k-invalid-msg' data-for='" + datafield + "'></span>").appendTo(container);

    }
    catch (err) {
        javascript_log4j_root(arguments.callee.name, err);
    }
}

function combo_dependent_sowcroptype(container, cmbid, datasource, datafield, grid_id, code_datafield) {
    try {
        //var data = datasource;
        var cmb_var = $("#" + grid_id).data("kendoGrid");
        var selectedItem = cmb_var.dataItem(cmb_var.select());
        //ramya added
        var cropclass = selectedItem.EC_CROP_SOWING_Croptype;
        var cus_arr = [];
        $.each(datasource, function (key, val) {
            if (datasource[key].dependent == cropclass) {
                cus_arr.push(datasource[key]);
            }
        });

        var data = cus_arr;

        $('<input  id="' + cmbid + '" data-text-field="desc" data-value-field="desc" data-bind="value:' + datafield + '" name ="' + datafield + '"/>').appendTo(container).kendoComboBox({
             autoBind: false,
            filter: "contains",
            dataSource: data,
            change: function (e) {
                var cmb_value = this.value();
                if (cmb_value && this.selectedIndex == -1) {
                    this.value("");
                }
                var cmb_var = $("#" + grid_id).data("kendoGrid");
                var selectedItem = cmb_var.dataItem(cmb_var.select());
                var combobox_data = $("#" + cmbid).data("kendoComboBox");

                if (combobox_data != undefined && combobox_data.selectedIndex == -1) {
                    selectedItem[datafield] = "";
                }
                else { 
                    selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc; 
                }

            }
        });

        $("<span class='k-invalid-msg' data-for='" + datafield + "'></span>").appendTo(container);

    }
    catch (err) {
        javascript_log4j_root(arguments.callee.name, err);
    }
}
function combo_dependent_sowcroptype1(container, cmbid, datasource, datafield, grid_id, code_datafield) {
    try {
        //var data = datasource;
        var cmb_var = $("#" + grid_id).data("kendoGrid");
        var selectedItem = cmb_var.dataItem(cmb_var.select());
        //ramya added
        var cropclass = selectedItem.EC_PROD_Croptype;
        var cus_arr = [];
        $.each(datasource, function (key, val) {
            if (datasource[key].dependent == cropclass) {
                cus_arr.push(datasource[key]);
            }
        });

        var data = cus_arr;

        $('<input  id="' + cmbid + '" data-text-field="desc" data-value-field="desc" data-bind="value:' + datafield + '" name ="' + datafield + '"/>').appendTo(container).kendoComboBox({
            autoBind: false,
            filter: "contains",
            dataSource: data,
            change: function (e) {
                var cmb_value = this.value();
                if (cmb_value && this.selectedIndex == -1) {
                    this.value("");
                }
                var cmb_var = $("#" + grid_id).data("kendoGrid");
                var selectedItem = cmb_var.dataItem(cmb_var.select());
                var combobox_data = $("#" + cmbid).data("kendoComboBox");

                if (combobox_data != undefined && combobox_data.selectedIndex == -1) {
                    selectedItem[datafield] = "";
                }
                else {
                    selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc;
                }

            }
        });

        $("<span class='k-invalid-msg' data-for='" + datafield + "'></span>").appendTo(container);

    }
    catch (err) {
        javascript_log4j_root(arguments.callee.name, err);
    }
}
function combo_dependent_sowcroptype2(container, cmbid, datasource, datafield, grid_id, code_datafield) {
    try {
        //var data = datasource;
        var cmb_var = $("#" + grid_id).data("kendoGrid");
        var selectedItem = cmb_var.dataItem(cmb_var.select());
        //ramya added
        var cropclass = selectedItem.EC_CROP_CropType;
        var cus_arr = [];
        $.each(datasource, function (key, val) {
            if (datasource[key].dependent == cropclass) {
                cus_arr.push(datasource[key]);
            }
        });

        var data = cus_arr;

        $('<input  id="' + cmbid + '" data-text-field="desc" data-value-field="desc" data-bind="value:' + datafield + '" name ="' + datafield + '"/>').appendTo(container).kendoComboBox({
            autoBind: false,
            filter: "contains",
            dataSource: data,
            change: function (e) {
                var cmb_value = this.value();
                if (cmb_value && this.selectedIndex == -1) {
                    this.value("");
                }
                var cmb_var = $("#" + grid_id).data("kendoGrid");
                var selectedItem = cmb_var.dataItem(cmb_var.select());
                var combobox_data = $("#" + cmbid).data("kendoComboBox");

                if (combobox_data != undefined && combobox_data.selectedIndex == -1) {
                    selectedItem[datafield] = "";
                }
                else {
                    selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc;
                }

            }
        });

        $("<span class='k-invalid-msg' data-for='" + datafield + "'></span>").appendTo(container);

    }
    catch (err) {
        javascript_log4j_root(arguments.callee.name, err);
    }
}
function combo_dependent_sowcropseed(container, cmbid, datasource, datafield, grid_id, code_datafield) {
    try {
        //var data = datasource;
        var cmb_var = $("#" + grid_id).data("kendoGrid");
        var selectedItem = cmb_var.dataItem(cmb_var.select());
        //ramya added
        var cropclass = selectedItem.EC_CROP_SOWING_Vareity;
        var cus_arr = [];
        $.each(datasource, function (key, val) {
            if (datasource[key].dependent == cropclass) {
                cus_arr.push(datasource[key]);
            }
        });

        var data = cus_arr;

        $('<input  id="' + cmbid + '" data-text-field="desc" data-value-field="desc" data-bind="value:' + datafield + '" name ="' + datafield + '"/>').appendTo(container).kendoComboBox({
             autoBind: false,
            filter: "contains",
            dataSource: data,
            change: function (e) {
                var cmb_value = this.value();
                if (cmb_value && this.selectedIndex == -1) {
                    this.value("");
                }
                var cmb_var = $("#" + grid_id).data("kendoGrid");
                var selectedItem = cmb_var.dataItem(cmb_var.select());
                var combobox_data = $("#" + cmbid).data("kendoComboBox");

                if (combobox_data != undefined && combobox_data.selectedIndex == -1) {
                    selectedItem[datafield] = "";
                }
                else {
                    selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc;
                }

            }
        });

        $("<span class='k-invalid-msg' data-for='" + datafield + "'></span>").appendTo(container);

    }
    catch (err) {
        javascript_log4j_root(arguments.callee.name, err);
    }
}
function combo_dependent_sowcropseed1(container, cmbid, datasource, datafield, grid_id, code_datafield) {
    try {
        //var data = datasource;
        var cmb_var = $("#" + grid_id).data("kendoGrid");
        var selectedItem = cmb_var.dataItem(cmb_var.select());
        //ramya added
        var cropclass = selectedItem.EC_PROD_Variety;
        var cus_arr = [];
        $.each(datasource, function (key, val) {
            if (datasource[key].dependent == cropclass) {
                cus_arr.push(datasource[key]);
            }
        });

        var data = cus_arr;

        $('<input  id="' + cmbid + '" data-text-field="desc" data-value-field="desc" data-bind="value:' + datafield + '" name ="' + datafield + '"/>').appendTo(container).kendoComboBox({
            autoBind: false,
            filter: "contains",
            dataSource: data,
            change: function (e) {
                var cmb_value = this.value();
                if (cmb_value && this.selectedIndex == -1) {
                    this.value("");
                }
                var cmb_var = $("#" + grid_id).data("kendoGrid");
                var selectedItem = cmb_var.dataItem(cmb_var.select());
                var combobox_data = $("#" + cmbid).data("kendoComboBox");

                if (combobox_data != undefined && combobox_data.selectedIndex == -1) {
                    selectedItem[datafield] = "";
                }
                else {
                    selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc;
                }

            }
        });

        $("<span class='k-invalid-msg' data-for='" + datafield + "'></span>").appendTo(container);

    }
    catch (err) {
        javascript_log4j_root(arguments.callee.name, err);
    }
}
function combo_dependent_man1(container, cmbid, datasource, datafield, grid_id, code_datafield) {
    try {
        var cus_arr = [];
        var grid = $("#" + grid_id).data("kendoGrid");
        var selectedItem = grid.dataItem(grid.select());
        $.each(datasource, function (key, val) {
            if (datasource[key].dependent == selectedItem.selectcode) {
                cus_arr.push(datasource[key]);
            }
        });

        var data = cus_arr;

        $('<input  id="' + cmbid + '" data-text-field="desc" data-value-field="desc" data-bind="value:' + datafield + '" name ="' + datafield + '"/>').appendTo(container).kendoComboBox({
             autoBind: false,
            filter: "contains",
            dataSource: data,
            change: function (e) {
                var cmb_value = this.value();
                if (cmb_value && this.selectedIndex == -1) {
                    this.value("");
                }
                var cmb_var = $("#" + grid_id).data("kendoGrid");
                var selectedItem = cmb_var.dataItem(cmb_var.select());
                var combobox_data = $("#cmb_EC_LAND_CROPSUB").data("kendoComboBox");
                if (combobox_data != undefined && combobox_data.selectedIndex == -1) {
                    selectedItem[datafield] = "";
                    //selectedItem[code_datafield] = "";
                }
                else {
                    selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc;
                    //selectedItem[code_datafield] = combobox_data.dataItem(combobox_data.selectedIndex).code;
                }
            }
        });
        $("<span class='k-invalid-msg' data-for='" + datafield + "'></span>").appendTo(container);
    }
    catch (err) {
        javascript_log4j_root(arguments.callee.name, err);
    }
}
function combo_dependent_sowcropname(container, cmbid, datasource, datafield, grid_id, code_datafield) {
    try {
        var cus_arr = [];
        var grid = $("#" + grid_id).data("kendoGrid");
        var selectedItem = grid.dataItem(grid.select());
        var SowingDate = selectedItem.EC_CROP_SOWING_SOWDATE;
        var SowMonth = convertdate(SowingDate);
        //var SowMonth = newDateTime[1]; 
        if (selectedItem.EC_CROP_SOWING_Season.toUpperCase() == "KHARIF" )  {
            if (SowMonth != "Jun" && SowMonth != "Jul")
            {
                kendoAlert('Ensure Valid Sowing Date for KHARIF Season');
                return false;
            }
        }
        else if (selectedItem.EC_CROP_SOWING_Season.toUpperCase() == "RABI") {
            if (SowMonth != "Dec" && SowMonth != "Jan") {
                kendoAlert('Ensure Valid Sowing Date for RABI Season');
                return false;
            }
        }
        else if (selectedItem.EC_CROP_SOWING_Season.toUpperCase() == "ZAID") {
            if (SowMonth != "Apr") {
                kendoAlert('Ensure Valid Sowing Date for ZAID Season');
                return false;
            }
        } 
         

        var crop = selectedItem.EC_CROP_SOWING_Season;
         
            $.each(datasource, function (key, val) {
                if (datasource[key].dependent == crop) {
                    cus_arr.push(datasource[key]);
                }
            });
        
        var data = cus_arr;

        $('<input  id="' + cmbid + '" data-text-field="desc" data-value-field="desc" data-bind="value:' + datafield + '" name ="' + datafield + '"/>').appendTo(container).kendoComboBox({
            autoBind: false,
            filter: "contains",
            dataSource: data,
            change: function (e) {
                var cmb_value = this.value();
                if (cmb_value && this.selectedIndex == -1) {
                    this.value("");
                }
                var cmb_var = $("#" + grid_id).data("kendoGrid");
                var selectedItem = cmb_var.dataItem(cmb_var.select());
                var combobox_data = $("#cmb_EC_CROP_SOWING_CROPCLASS").data("kendoComboBox");
                if (combobox_data != undefined && combobox_data.selectedIndex == -1) {
                    selectedItem[datafield] = "";
                    //selectedItem[code_datafield] = "";
                }
                else {
                    selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc;
                    //selectedItem[code_datafield] = combobox_data.dataItem(combobox_data.selectedIndex).code;
                }
            }
        });
        $("<span class='k-invalid-msg' data-for='" + datafield + "'></span>").appendTo(container);
    }
    catch (err) {
        javascript_log4j_root(arguments.callee.name, err);
    }
}
function combo_dependent_sowcropname1(container, cmbid, datasource, datafield, grid_id, code_datafield) {
    try {
        var cus_arr = [];
        var grid = $("#" + grid_id).data("kendoGrid");
        var selectedItem = grid.dataItem(grid.select());
        var crop = selectedItem.EC_PROD_Season;

        $.each(datasource, function (key, val) {
            if (datasource[key].dependent == crop) {
                cus_arr.push(datasource[key]);
            }
        });

        var data = cus_arr;

        $('<input  id="' + cmbid + '" data-text-field="desc" data-value-field="desc" data-bind="value:' + datafield + '" name ="' + datafield + '"/>').appendTo(container).kendoComboBox({
            autoBind: false,
            filter: "contains",
            dataSource: data,
            change: function (e) {
                var cmb_value = this.value();
                if (cmb_value && this.selectedIndex == -1) {
                    this.value("");
                }
                var cmb_var = $("#" + grid_id).data("kendoGrid");
                var selectedItem = cmb_var.dataItem(cmb_var.select());
                var combobox_data = $("#cmb_EC_PROD_CROPCLASS").data("kendoComboBox");
                if (combobox_data != undefined && combobox_data.selectedIndex == -1) {
                    selectedItem[datafield] = "";
                    //selectedItem[code_datafield] = "";
                }
                else {
                    selectedItem[datafield] = combobox_data.dataItem(combobox_data.selectedIndex).desc;
                    //selectedItem[code_datafield] = combobox_data.dataItem(combobox_data.selectedIndex).code;
                }
            }
        });
        $("<span class='k-invalid-msg' data-for='" + datafield + "'></span>").appendTo(container);
    }
    catch (err) {
        javascript_log4j_root(arguments.callee.name, err);
    }
}
function removeSpaces(sKey) {
    try {
        if (sKey.indexOf(" ") > -1) {
            var spt = sKey.split(" ");
            var sptResult = "";
            $.each(spt, function (key, value) {
                sptResult += value;
            });
            return sptResult;
        } else {
            return sKey;
        }
    }
    catch (err) {
        //javascript_log4j_root(arguments.callee.name, err);
    }
}

function formatData(data) {
    try {
        var arr = [];
        $.each(data, function (key, value) {
            var obj = {};
            $.each(value, function (sKey, sValue) {
                sKey = removeSpaces(sKey);
                obj[sKey] = sValue;
            });
            arr.push(obj);
        });
        return arr;
    }
    catch (err) {
        // javascript_log4j_root(arguments.callee.name, err);
    }
}


function convertdate(str) {
    var mnths = {
        Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
        Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12"
    },
        //var returnValue ="08"
        dateArr = str.toString().split(" ");
    return  dateArr[1];
   // return [mnths[date[1]], date[2], date[3]].join("/");
}

 