using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FFI.Controllers
{
    public class Invoice_model
    {
        public class SItestHeader
        {
            public int IOU_invoice_rowid { get; set; }
            public string In_orgn_code { get; set; }
            public string In_invoice_no { get; set; }
            public string In_ic_code { get; set; }
            public string In_invoice_date { get; set; }
            public string In_customer_type { get; set; }
            public string In_customer_name { get; set; }
            public string In_customer_address { get; set; }
            public string In_farmer_code { get; set; }
            public string In_provider_location { get; set; }
            public string In_reciver_location { get; set; }
            public double In_totalinvoice_amount { get; set; }
            public double In_balance_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_process_status { get; set; }
            public string In_row_timestamp { get; set; }
            public string In_mode_flag { get; set; }
            public int In_transport_amount { get; set; }
            public int In_others { get; set; }
            public string In_phone_no { get; set; }

        }
        public class SItestInvoiceDetail
        {
            public int In_invoicedtl_rowid { get; set; }
            public string In_product_catg_code { get; set; }
            public string In_product_subcatg_code { get; set; }
            public string In_product_code { get; set; }
            public string In_hsn_code { get; set; }
            public double In_qty { get; set; }
            public double In_base_price { get; set; }
            public double In_product_amount { get; set; }
            public double In_discount_amount { get; set; }
            public double In_tax_amount { get; set; }
            public double In_net_amount { get; set; }
            public string In_status_code { get; set; }
            public string In_mode_flag { get; set; }

        }
        public class SItestSerialno
        {
            public int In_slno_row_id { get; set; }
            public string In_slno { get; set; }
            public string In_no_of_bags { get; set; }
            public string In_invoice_no { get; set; }
            public string In_product_code { get; set; }
            public string In_product_name { get; set; }
            public string In_mode_flag { get; set; }
        }
        public class SItestContext
        {
            public string orgnId { get; set; }
            public string locnId { get; set; }
            public string userId { get; set; }
            public string localeId { get; set; }
            public SItestHeader Header { get; set; }
            public IList<SItestInvoiceDetail> InvoiceDetail { get; set; }
            public IList<SItestSerialno> Serialno { get; set; }

        }
        public class SItestDocument
        {
            public SItestContext context { get; set; }

        }
        public class SItestApplication
        {
            public SItestDocument document { get; set; }

        }
    }
}
