var responseDataFormat = "JSON";

function getIncome_ExpenseReportRequest(data)
{
    /**
     * @member {getIncome_ExpenseReportRequestcontext} context
     */
    this['context'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('context') && data['context'] != null)
            this['context'] = new getIncome_ExpenseReportRequestcontext(data['context']);
    }
}

function getIncome_ExpenseReportRequestcontext(data)
{
    /**
     * @member {String} orgnId
     */
    this['orgnId'] = null;
    
    /**
     * @member {String} locnId
     */
    this['locnId'] = null;
    
    /**
     * @member {String} userId
     */
    this['userId'] = null;
    
    /**
     * @member {String} localeId
     */
    this['localeId'] = null;
    
    /**
     * @member {getIncome_ExpenseReportRequestHeader} Header
     */
    this['Header'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('orgnId'))
            this['orgnId'] = data['orgnId'];
        
        if(data.hasOwnProperty('locnId'))
            this['locnId'] = data['locnId'];
        
        if(data.hasOwnProperty('userId'))
            this['userId'] = data['userId'];
        
        if(data.hasOwnProperty('localeId'))
            this['localeId'] = data['localeId'];
        
        if(data.hasOwnProperty('Header') && data['Header'] != null)
            this['Header'] = new getIncome_ExpenseReportRequestHeader(data['Header']);
    }
}

function getIncome_ExpenseReportRequestHeader(data)
{
    /**
     * @member {String} Report_code
     */
    this['Report_code'] = null;
    
    /**
     * @member {String} businessactivity_code
     */
    this['businessactivity_code'] = null;
    
    /**
     * @member {String} Report_date
     */
    this['Report_date'] = null;
    
    /**
     * @member {String} frequency_code
     */
    this['frequency_code'] = null;
    
    /**
     * @member {String} from_date
     */
    this['from_date'] = null;
    
    /**
     * @member {String} to_date
     */
    this['to_date'] = null;
    
    if(data)
    {
        if(data.hasOwnProperty('Report_code'))
            this['Report_code'] = data['Report_code'];
        
        if(data.hasOwnProperty('businessactivity_code'))
            this['businessactivity_code'] = data['businessactivity_code'];
        
        if(data.hasOwnProperty('Report_date'))
            this['Report_date'] = data['Report_date'];
        
        if(data.hasOwnProperty('frequency_code'))
            this['frequency_code'] = data['frequency_code'];
        
        if(data.hasOwnProperty('from_date'))
            this['from_date'] = data['from_date'];
        
        if(data.hasOwnProperty('to_date'))
            this['to_date'] = data['to_date'];
        
    }
}

function getIncome_ExpenseReportResponse(data, format)
{
    /**
     * @member {getIncome_ExpenseReportResponsecontext} context
     */
    this['context'] = null;
    
    /**
     * @member {getIncome_ExpenseReportResponseApplicationException} ApplicationException
     */
    this['ApplicationException'] = null;
    
    if(format)
        responseDataFormat = format;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("context").length > 0)
                this['context'] = new getIncome_ExpenseReportResponsecontext(data.getElementsByTagName("context")[0]);
            
            if(data.getElementsByTagName("ApplicationException").length > 0)
                this['ApplicationException'] = new getIncome_ExpenseReportResponseApplicationException(data.getElementsByTagName("ApplicationException")[0]);
        }
        else {
            if(data.hasOwnProperty('context') && data['context'] != null)
                this['context'] = new getIncome_ExpenseReportResponsecontext(data['context']);
            
            if(data.hasOwnProperty('ApplicationException') && data['ApplicationException'] != null)
                this['ApplicationException'] = new getIncome_ExpenseReportResponseApplicationException(data['ApplicationException']);
        }
    }
}

function getIncome_ExpenseReportResponseApplicationException(data)
{
    /**
    * @member {String} sessionId
    */
    this['errorNumber'] = "";
    
    /**
    * @member {String} sessionId
    */
    this['errorDescription'] = "";
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("errorNumber")[0].lastChild != null)
                this['errorNumber'] = data.getElementsByTagName("errorNumber")[0].lastChild.nodeValue;
            
            if(data.getElementsByTagName("errorDescription")[0].lastChild != null)
                this['errorDescription'] = data.getElementsByTagName("errorDescription")[0].lastChild.nodeValue;
        }
        else {
            this['errorNumber'] = data['errorNumber'];
            this['errorDescription'] = data['errorDescription'];
        }
    }
}

function getIncome_ExpenseReportResponsecontext(data)
{
    /**
     * @member {String} orgnId
     */
    this['orgnId'] = null;
    
    /**
     * @member {String} locnId
     */
    this['locnId'] = null;
    
    /**
     * @member {getIncome_ExpenseReportResponseHeader} Header
     */
    this['Header'] = null;
    
    /**
     * @member {getIncome_ExpenseReportResponseIncome_expensedtl} Income_expensedtl
     */
    this['Income_expensedtl'] = null;
    
    /**
     * @member {getIncome_ExpenseReportResponseICDemand_prddtl} ICDemand_prddtl
     */
    this['ICDemand_prddtl'] = null;
    
    /**
     * @member {getIncome_ExpenseReportResponseICDemand_fardtl} ICDemand_fardtl
     */
    this['ICDemand_fardtl'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['orgnId'] = (data.getElementsByTagName("orgnId")[0].lastChild != null) ? data.getElementsByTagName("orgnId")[0].lastChild.nodeValue : "";
            
            this['locnId'] = (data.getElementsByTagName("locnId")[0].lastChild != null) ? data.getElementsByTagName("locnId")[0].lastChild.nodeValue : "";
            
            this['Header'] = new getIncome_ExpenseReportResponseHeader(data.getElementsByTagName("Header")[0]);
            
            Income_expensedtl = [];
            for(Income_expensedtlchildi = 0; Income_expensedtlchildi < data.getElementsByTagName("Income_expensedtl").length; Income_expensedtlchildi++)
            {
                Income_expensedtl.push(new getIncome_ExpenseReportResponseIncome_expensedtl(data.getElementsByTagName("Income_expensedtl")[Income_expensedtlchildi]));
            }
            if(data.getElementsByTagName("Income_expensedtl").length > 0)
                this['Income_expensedtl'] = Income_expensedtl;
            
            ICDemand_prddtl = [];
            for(ICDemand_prddtlchildi = 0; ICDemand_prddtlchildi < data.getElementsByTagName("ICDemand_prddtl").length; ICDemand_prddtlchildi++)
            {
                ICDemand_prddtl.push(new getIncome_ExpenseReportResponseICDemand_prddtl(data.getElementsByTagName("ICDemand_prddtl")[ICDemand_prddtlchildi]));
            }
            if(data.getElementsByTagName("ICDemand_prddtl").length > 0)
                this['ICDemand_prddtl'] = ICDemand_prddtl;
            
            ICDemand_fardtl = [];
            for(ICDemand_fardtlchildi = 0; ICDemand_fardtlchildi < data.getElementsByTagName("ICDemand_fardtl").length; ICDemand_fardtlchildi++)
            {
                ICDemand_fardtl.push(new getIncome_ExpenseReportResponseICDemand_fardtl(data.getElementsByTagName("ICDemand_fardtl")[ICDemand_fardtlchildi]));
            }
            if(data.getElementsByTagName("ICDemand_fardtl").length > 0)
                this['ICDemand_fardtl'] = ICDemand_fardtl;
        }
        else {
            this['orgnId'] = data['orgnId'];
            
            this['locnId'] = data['locnId'];
            
            this['Header'] = new getIncome_ExpenseReportResponseHeader(data['Header']);
            
            
            if(data.hasOwnProperty('Income_expensedtl') && data['Income_expensedtl'] != null)
            {
                Income_expensedtl = [];
                for(Income_expensedtlindex = 0; Income_expensedtlindex < data['Income_expensedtl'].length; Income_expensedtlindex++)
                {
                    Income_expensedtl.push(new getIncome_ExpenseReportResponseIncome_expensedtl(data['Income_expensedtl'][Income_expensedtlindex]));
                }
                this['Income_expensedtl'] = Income_expensedtl;
            }
            
            
            if(data.hasOwnProperty('ICDemand_prddtl') && data['ICDemand_prddtl'] != null)
            {
                ICDemand_prddtl = [];
                for(ICDemand_prddtlindex = 0; ICDemand_prddtlindex < data['ICDemand_prddtl'].length; ICDemand_prddtlindex++)
                {
                    ICDemand_prddtl.push(new getIncome_ExpenseReportResponseICDemand_prddtl(data['ICDemand_prddtl'][ICDemand_prddtlindex]));
                }
                this['ICDemand_prddtl'] = ICDemand_prddtl;
            }
            
            
            if(data.hasOwnProperty('ICDemand_fardtl') && data['ICDemand_fardtl'] != null)
            {
                ICDemand_fardtl = [];
                for(ICDemand_fardtlindex = 0; ICDemand_fardtlindex < data['ICDemand_fardtl'].length; ICDemand_fardtlindex++)
                {
                    ICDemand_fardtl.push(new getIncome_ExpenseReportResponseICDemand_fardtl(data['ICDemand_fardtl'][ICDemand_fardtlindex]));
                }
                this['ICDemand_fardtl'] = ICDemand_fardtl;
            }
        }
    }
}

function getIncome_ExpenseReportResponseHeader(data)
{
    /**
     * @member {String} Report_code
     */
    this['Report_code'] = null;
    
    /**
     * @member {String} businessactivity_code
     */
    this['businessactivity_code'] = null;
    
    /**
     * @member {String} Report_date
     */
    this['Report_date'] = null;
    
    /**
     * @member {String} frequency_code
     */
    this['frequency_code'] = null;
    
    /**
     * @member {String} from_date
     */
    this['from_date'] = null;
    
    /**
     * @member {String} to_date
     */
    this['to_date'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            if(data.getElementsByTagName("Report_code")[0].attributes.length == 0) //Check NULL value
                this['Report_code'] = (data.getElementsByTagName("Report_code")[0].lastChild != null) ? data.getElementsByTagName("Report_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("businessactivity_code")[0].attributes.length == 0) //Check NULL value
                this['businessactivity_code'] = (data.getElementsByTagName("businessactivity_code")[0].lastChild != null) ? data.getElementsByTagName("businessactivity_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("Report_date")[0].attributes.length == 0) //Check NULL value
                this['Report_date'] = (data.getElementsByTagName("Report_date")[0].lastChild != null) ? data.getElementsByTagName("Report_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("frequency_code")[0].attributes.length == 0) //Check NULL value
                this['frequency_code'] = (data.getElementsByTagName("frequency_code")[0].lastChild != null) ? data.getElementsByTagName("frequency_code")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("from_date")[0].attributes.length == 0) //Check NULL value
                this['from_date'] = (data.getElementsByTagName("from_date")[0].lastChild != null) ? data.getElementsByTagName("from_date")[0].lastChild.nodeValue : "";
            
            if(data.getElementsByTagName("to_date")[0].attributes.length == 0) //Check NULL value
                this['to_date'] = (data.getElementsByTagName("to_date")[0].lastChild != null) ? data.getElementsByTagName("to_date")[0].lastChild.nodeValue : "";
        }
        else {
            this['Report_code'] = data['Report_code'];
            
            this['businessactivity_code'] = data['businessactivity_code'];
            
            this['Report_date'] = data['Report_date'];
            
            this['frequency_code'] = data['frequency_code'];
            
            this['from_date'] = data['from_date'];
            
            this['to_date'] = data['to_date'];
        }
    }
}

function getIncome_ExpenseReportResponseIncome_expensedtl(data)
{
    /**
     * @member {String} businessactivity_code
     */
    this['businessactivity_code'] = null;
    
    /**
     * @member {String} businessactivity_desc
     */
    this['businessactivity_desc'] = null;
    
    /**
     * @member {String} finyear_code
     */
    this['finyear_code'] = null;
    
    /**
     * @member {String} finyear_desc
     */
    this['finyear_desc'] = null;
    
    /**
     * @member {String} bi_annual
     */
    this['bi_annual'] = null;
    
    /**
     * @member {String} Quaters
     */
    this['Quaters'] = null;
    
    /**
     * @member {String} month
     */
    this['month'] = null;
    
    /**
     * @member {String} date
     */
    this['date'] = null;
    
    /**
     * @member {Decimal} income
     */
    this['income'] = null;
    
    /**
     * @member {Decimal} expense
     */
    this['expense'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['businessactivity_code'] = (data.getElementsByTagName("businessactivity_code")[0].lastChild != null) ? data.getElementsByTagName("businessactivity_code")[0].lastChild.nodeValue : "";
            
            this['businessactivity_desc'] = (data.getElementsByTagName("businessactivity_desc")[0].lastChild != null) ? data.getElementsByTagName("businessactivity_desc")[0].lastChild.nodeValue : "";
            
            this['finyear_code'] = (data.getElementsByTagName("finyear_code")[0].lastChild != null) ? data.getElementsByTagName("finyear_code")[0].lastChild.nodeValue : "";
            
            this['finyear_desc'] = (data.getElementsByTagName("finyear_desc")[0].lastChild != null) ? data.getElementsByTagName("finyear_desc")[0].lastChild.nodeValue : "";
            
            this['bi_annual'] = (data.getElementsByTagName("bi_annual")[0].lastChild != null) ? data.getElementsByTagName("bi_annual")[0].lastChild.nodeValue : "";
            
            this['Quaters'] = (data.getElementsByTagName("Quaters")[0].lastChild != null) ? data.getElementsByTagName("Quaters")[0].lastChild.nodeValue : "";
            
            this['month'] = (data.getElementsByTagName("month")[0].lastChild != null) ? data.getElementsByTagName("month")[0].lastChild.nodeValue : "";
            
            this['date'] = (data.getElementsByTagName("date")[0].lastChild != null) ? data.getElementsByTagName("date")[0].lastChild.nodeValue : "";
            
            this['income'] = parseFloat(data.getElementsByTagName("income")[0].lastChild.nodeValue);
            
            this['expense'] = parseFloat(data.getElementsByTagName("expense")[0].lastChild.nodeValue);
        }
        else {
            this['businessactivity_code'] = data['businessactivity_code'];
            
            this['businessactivity_desc'] = data['businessactivity_desc'];
            
            this['finyear_code'] = data['finyear_code'];
            
            this['finyear_desc'] = data['finyear_desc'];
            
            this['bi_annual'] = data['bi_annual'];
            
            this['Quaters'] = data['Quaters'];
            
            this['month'] = data['month'];
            
            this['date'] = data['date'];
            
            this['income'] = data['income'];
            
            this['expense'] = data['expense'];
        }
    }
}

function getIncome_ExpenseReportResponseICDemand_prddtl(data)
{
    /**
     * @member {String} product_catg_code
     */
    this['product_catg_code'] = null;
    
    /**
     * @member {String} product_catg_desc
     */
    this['product_catg_desc'] = null;
    
    /**
     * @member {String} product_subcatg_code
     */
    this['product_subcatg_code'] = null;
    
    /**
     * @member {String} product_subcatg_desc
     */
    this['product_subcatg_desc'] = null;
    
    /**
     * @member {String} product_name
     */
    this['product_name'] = null;
    
    /**
     * @member {String} product_code
     */
    this['product_code'] = null;
    
    /**
     * @member {String} product_desc
     */
    this['product_desc'] = null;
    
    /**
     * @member {Decimal} qty
     */
    this['qty'] = null;
    
    /**
     * @member {String} month_year
     */
    this['month_year'] = null;
    
    /**
     * @member {String} no_of_farmers
     */
    this['no_of_farmers'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['product_catg_code'] = (data.getElementsByTagName("product_catg_code")[0].lastChild != null) ? data.getElementsByTagName("product_catg_code")[0].lastChild.nodeValue : "";
            
            this['product_catg_desc'] = (data.getElementsByTagName("product_catg_desc")[0].lastChild != null) ? data.getElementsByTagName("product_catg_desc")[0].lastChild.nodeValue : "";
            
            this['product_subcatg_code'] = (data.getElementsByTagName("product_subcatg_code")[0].lastChild != null) ? data.getElementsByTagName("product_subcatg_code")[0].lastChild.nodeValue : "";
            
            this['product_subcatg_desc'] = (data.getElementsByTagName("product_subcatg_desc")[0].lastChild != null) ? data.getElementsByTagName("product_subcatg_desc")[0].lastChild.nodeValue : "";
            
            this['product_name'] = (data.getElementsByTagName("product_name")[0].lastChild != null) ? data.getElementsByTagName("product_name")[0].lastChild.nodeValue : "";
            
            this['product_code'] = (data.getElementsByTagName("product_code")[0].lastChild != null) ? data.getElementsByTagName("product_code")[0].lastChild.nodeValue : "";
            
            this['product_desc'] = (data.getElementsByTagName("product_desc")[0].lastChild != null) ? data.getElementsByTagName("product_desc")[0].lastChild.nodeValue : "";
            
            this['qty'] = parseFloat(data.getElementsByTagName("qty")[0].lastChild.nodeValue);
            
            this['month_year'] = (data.getElementsByTagName("month_year")[0].lastChild != null) ? data.getElementsByTagName("month_year")[0].lastChild.nodeValue : "";
            
            this['no_of_farmers'] = (data.getElementsByTagName("no_of_farmers")[0].lastChild != null) ? data.getElementsByTagName("no_of_farmers")[0].lastChild.nodeValue : "";
        }
        else {
            this['product_catg_code'] = data['product_catg_code'];
            
            this['product_catg_desc'] = data['product_catg_desc'];
            
            this['product_subcatg_code'] = data['product_subcatg_code'];
            
            this['product_subcatg_desc'] = data['product_subcatg_desc'];
            
            this['product_name'] = data['product_name'];
            
            this['product_code'] = data['product_code'];
            
            this['product_desc'] = data['product_desc'];
            
            this['qty'] = data['qty'];
            
            this['month_year'] = data['month_year'];
            
            this['no_of_farmers'] = data['no_of_farmers'];
        }
    }
}

function getIncome_ExpenseReportResponseICDemand_fardtl(data)
{
    /**
     * @member {String} farmer_code
     */
    this['farmer_code'] = null;
    
    /**
     * @member {String} farmer_desc
     */
    this['farmer_desc'] = null;
    
    /**
     * @member {String} farmer_name
     */
    this['farmer_name'] = null;
    
    /**
     * @member {String} product_name
     */
    this['product_name'] = null;
    
    /**
     * @member {String} product_code
     */
    this['product_code'] = null;
    
    /**
     * @member {String} product_desc
     */
    this['product_desc'] = null;
    
    /**
     * @member {String} product_catg_code
     */
    this['product_catg_code'] = null;
    
    /**
     * @member {String} product_catg_desc
     */
    this['product_catg_desc'] = null;
    
    /**
     * @member {String} product_subcatg_code
     */
    this['product_subcatg_code'] = null;
    
    /**
     * @member {String} product_subcatg_desc
     */
    this['product_subcatg_desc'] = null;
    
    /**
     * @member {Decimal} qty
     */
    this['qty'] = null;
    
    /**
     * @member {String} month_year
     */
    this['month_year'] = null;
    
    /**
     * @member {String} remarks
     */
    this['remarks'] = null;
    
    if(data)
    {
        if (responseDataFormat == "XML") {
            this['farmer_code'] = (data.getElementsByTagName("farmer_code")[0].lastChild != null) ? data.getElementsByTagName("farmer_code")[0].lastChild.nodeValue : "";
            
            this['farmer_desc'] = (data.getElementsByTagName("farmer_desc")[0].lastChild != null) ? data.getElementsByTagName("farmer_desc")[0].lastChild.nodeValue : "";
            
            this['farmer_name'] = (data.getElementsByTagName("farmer_name")[0].lastChild != null) ? data.getElementsByTagName("farmer_name")[0].lastChild.nodeValue : "";
            
            this['product_name'] = (data.getElementsByTagName("product_name")[0].lastChild != null) ? data.getElementsByTagName("product_name")[0].lastChild.nodeValue : "";
            
            this['product_code'] = (data.getElementsByTagName("product_code")[0].lastChild != null) ? data.getElementsByTagName("product_code")[0].lastChild.nodeValue : "";
            
            this['product_desc'] = (data.getElementsByTagName("product_desc")[0].lastChild != null) ? data.getElementsByTagName("product_desc")[0].lastChild.nodeValue : "";
            
            this['product_catg_code'] = (data.getElementsByTagName("product_catg_code")[0].lastChild != null) ? data.getElementsByTagName("product_catg_code")[0].lastChild.nodeValue : "";
            
            this['product_catg_desc'] = (data.getElementsByTagName("product_catg_desc")[0].lastChild != null) ? data.getElementsByTagName("product_catg_desc")[0].lastChild.nodeValue : "";
            
            this['product_subcatg_code'] = (data.getElementsByTagName("product_subcatg_code")[0].lastChild != null) ? data.getElementsByTagName("product_subcatg_code")[0].lastChild.nodeValue : "";
            
            this['product_subcatg_desc'] = (data.getElementsByTagName("product_subcatg_desc")[0].lastChild != null) ? data.getElementsByTagName("product_subcatg_desc")[0].lastChild.nodeValue : "";
            
            this['qty'] = parseFloat(data.getElementsByTagName("qty")[0].lastChild.nodeValue);
            
            this['month_year'] = (data.getElementsByTagName("month_year")[0].lastChild != null) ? data.getElementsByTagName("month_year")[0].lastChild.nodeValue : "";
            
            this['remarks'] = (data.getElementsByTagName("remarks")[0].lastChild != null) ? data.getElementsByTagName("remarks")[0].lastChild.nodeValue : "";
        }
        else {
            this['farmer_code'] = data['farmer_code'];
            
            this['farmer_desc'] = data['farmer_desc'];
            
            this['farmer_name'] = data['farmer_name'];
            
            this['product_name'] = data['product_name'];
            
            this['product_code'] = data['product_code'];
            
            this['product_desc'] = data['product_desc'];
            
            this['product_catg_code'] = data['product_catg_code'];
            
            this['product_catg_desc'] = data['product_catg_desc'];
            
            this['product_subcatg_code'] = data['product_subcatg_code'];
            
            this['product_subcatg_desc'] = data['product_subcatg_desc'];
            
            this['qty'] = data['qty'];
            
            this['month_year'] = data['month_year'];
            
            this['remarks'] = data['remarks'];
        }
    }
}

