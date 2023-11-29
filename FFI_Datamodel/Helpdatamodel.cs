using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace FFI_Datamodel
{
    public class Helpdatamodel
    {
        private MySqlConnection con;
        public DataSet search(string query,string Where_condition, string mysqlconn)
        {
            DataSet temp = new DataSet();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("fetch_Search_help", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("linequery", MySqlDbType.VarChar).Value = query;
            cmd.Parameters.Add("Where_condition", MySqlDbType.VarChar).Value = Where_condition;
            cmd.CommandTimeout = 0;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataTable posearch(string In_buyer_code, string In_agg_code, string mysqlconn)
        {
            DataTable temp = new DataTable();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("new_PAWHS_POSEARCH", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("In_agg_code", MySqlDbType.VarChar).Value = In_agg_code;
            cmd.Parameters.Add("In_buyer_code", MySqlDbType.VarChar).Value = In_buyer_code;
            cmd.CommandTimeout = 0;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataTable locationsearch(string In_buyer_code, string In_agg_code, string mysqlconn)
        {
            DataTable temp = new DataTable();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("New_PAWHS_Locationsearch", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("In_agg_code", MySqlDbType.VarChar).Value = In_agg_code;
            cmd.Parameters.Add("In_buyer_code", MySqlDbType.VarChar).Value = In_buyer_code;
            cmd.CommandTimeout = 0;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataTable lcdcentersearch(string In_agg_code,string module, string mysqlconn)
        {
            DataTable temp = new DataTable();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("FPO_COM_search", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("In_agg_code", MySqlDbType.VarChar).Value = In_agg_code;
            cmd.Parameters.Add("In_fpo", MySqlDbType.VarChar).Value = module;          
            cmd.CommandTimeout = 0;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataTable lcdcentersearchrpt(string In_agg_code, string parent_code, string module, string mysqlconn)
        {
            DataTable temp = new DataTable();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("FPO_COM_search_rpt", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("In_agg_code", MySqlDbType.VarChar).Value = In_agg_code;
            cmd.Parameters.Add("In_fpo", MySqlDbType.VarChar).Value = module;
            cmd.Parameters.Add("In_parent_code", MySqlDbType.VarChar).Value = parent_code;

            cmd.CommandTimeout = 0;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataTable locationsearchPO(string In_buyer_code, string In_agg_code, string mysqlconn)
        {
            DataTable temp = new DataTable();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("New_PAWHS_LocationsearchPO", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("In_agg_code", MySqlDbType.VarChar).Value = In_agg_code;
            cmd.Parameters.Add("In_buyer_code", MySqlDbType.VarChar).Value = In_buyer_code;
            cmd.CommandTimeout = 0;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataTable batchsearch(string In_buyer_code, string In_agg_code, string mysqlconn)
        {
            DataTable temp = new DataTable();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("new_PAWHS_BatchSeach", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("In_agg_code", MySqlDbType.VarChar).Value = In_agg_code;
            cmd.Parameters.Add("In_buyer_code", MySqlDbType.VarChar).Value = In_buyer_code;
            cmd.CommandTimeout = 0;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataTable lcdcentersearchinv(string In_agg_code, string module, string mysqlconn)
        {
            DataTable temp = new DataTable();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("FPO_COM_orgn_search", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("In_agg_code", MySqlDbType.VarChar).Value = In_agg_code;
            cmd.Parameters.Add("In_fpo", MySqlDbType.VarChar).Value = module;
            cmd.CommandTimeout = 0;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataTable pawhsproductsearchrpt(string In_agg_code, string parent_code, string module, string mysqlconn)
        {
            DataTable temp = new DataTable();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("pawhspro_search_rpt", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("In_agg_code", MySqlDbType.VarChar).Value = In_agg_code;
            cmd.Parameters.Add("In_fpo", MySqlDbType.VarChar).Value = module;
            cmd.Parameters.Add("In_parent_code", MySqlDbType.VarChar).Value = parent_code;

            cmd.CommandTimeout = 0;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataTable searchlocal(string screenid, string langcode, string mysqlconn)
        {
            try
            {
                DataTable temp = new DataTable();
                con = new MySqlConnection(mysqlconn);
                con.Open();
                string[] returnvalues = { };
                MySqlCommand cmd = new MySqlCommand("fetch_lang", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("screen_id", MySqlDbType.VarChar).Value = screenid;
                cmd.Parameters.Add("langcode", MySqlDbType.VarChar).Value = langcode;
                MySqlDataAdapter da = new MySqlDataAdapter(cmd);
                da.Fill(temp);
                con.Close();
                return temp;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public DataTable seasonsearchrpt(string season, string mysqlconn)
        {
            DataTable temp = new DataTable();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("pr_Season_search_rpt", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("In_season", MySqlDbType.VarChar).Value = season; 
            cmd.CommandTimeout = 0;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataTable seasonsearchrptALL(string season, string parent, string mysqlconn)
        {
            DataTable temp = new DataTable();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("pr_Season_search_rptALL", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("In_season", MySqlDbType.VarChar).Value = season;
            cmd.Parameters.Add("In_parent", MySqlDbType.VarChar).Value = parent;
            cmd.CommandTimeout = 0;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataTable DownloadExcelExport(string report_name, string input_string, string flag, string userid, string mysqlconn)
        {
            DataTable temp = new DataTable();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("Exportexcel_insupd_flag", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("in_report_name", MySqlDbType.VarChar).Value = report_name;
            cmd.Parameters.Add("in_input_string", MySqlDbType.VarChar).Value = input_string;
            cmd.Parameters.Add("in_type_flag", MySqlDbType.VarChar).Value = flag;
            cmd.Parameters.Add("in_userId", MySqlDbType.VarChar).Value = userid;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
    }
}
