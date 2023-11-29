using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Text;

namespace FFI_Datamodel
{
    public class ServiceNewmodel
    {
        private MySqlConnection con;
        public DataSet ServiceModel(string pro_code, string fromdate, string todate, string orgid, string mysqlconn)
        {
            DataSet temp = new DataSet();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("Service_View", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("p_From_Date", MySqlDbType.VarChar).Value = fromdate;
            cmd.Parameters.Add("p_To_Date", MySqlDbType.VarChar).Value = todate;
            cmd.Parameters.Add("p_pro_code", MySqlDbType.VarChar).Value = pro_code;
            cmd.Parameters.Add("p_orgid", MySqlDbType.VarChar).Value = orgid;
            
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
    }
}
