using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FFI.Models
{
    public class BulkUploads
    {
    }
    public class SheetData
    {
        public int SheetId { get; set; }
        public string SheetName { get; set; }
    }

    public class getSheetData
    {
        public int row_slno { get; set; }
        public string master_code { get; set; }
        public string parent_code { get; set; }
        public string depend_code { get; set; }
        public string locallang_flag { get; set; }
        #region KendoGrid bind
        public string row_timestamp { get; set; }
        public string Status { get; set; }
        #endregion
    }
}