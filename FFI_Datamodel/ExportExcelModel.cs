using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Text;
namespace FFI_Datamodel
{
    public class ExportExcelModel
    {
        private MySqlConnection con;
        public DataSet DownloadExcelTemplate(string orgnid, string locnid, string typecode, string menuid, string userid, string mysqlconn)
        {
            DataSet temp = new DataSet();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("fetch_download_template", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("in_orgnId", MySqlDbType.VarChar).Value = orgnid;
            cmd.Parameters.Add("in_locnId", MySqlDbType.VarChar).Value = locnid;
            cmd.Parameters.Add("in_type_code", MySqlDbType.VarChar).Value = typecode;
            cmd.Parameters.Add("in_menu_id", MySqlDbType.VarChar).Value = menuid;
            cmd.Parameters.Add("in_userId", MySqlDbType.VarChar).Value = userid;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
    }
}
