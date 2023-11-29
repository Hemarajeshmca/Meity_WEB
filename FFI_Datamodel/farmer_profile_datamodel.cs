using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Text;

namespace FFI_Datamodel
{
    public class farmer_profile_datamodel
    {
        private MySqlConnection con;
        public DataSet profile_dtl(string orgnid, string locnid, string userid, string localeid, string activity_code, int farmer_rowid, string farmer_code, int version_no, string mysqlconn)
        {
            DataSet temp = new DataSet();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("fetch_farmer_profile_xml", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("in_orgnId", MySqlDbType.VarChar).Value = orgnid;
            cmd.Parameters.Add("in_locnId", MySqlDbType.VarChar).Value = locnid;
            cmd.Parameters.Add("in_userId", MySqlDbType.VarChar).Value = userid;
            cmd.Parameters.Add("in_localeId", MySqlDbType.VarChar).Value = localeid;
            cmd.Parameters.Add("in_activity_code", MySqlDbType.VarChar).Value = activity_code;
            cmd.Parameters.Add("in_farmer_rowid", MySqlDbType.Int32).Value = farmer_rowid;
            cmd.Parameters.Add("in_farmer_code", MySqlDbType.VarChar).Value = farmer_code;
            cmd.Parameters.Add("in_version_no", MySqlDbType.Int32).Value = version_no;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataSet tab_create(string orgnid, string locnid, string userid, string localeid, string activity_code,string mysqlconn)
        {
            DataSet temp = new DataSet();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("fetch_farmer_profile_tab_xml", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("in_orgnId", MySqlDbType.VarChar).Value = orgnid;
            cmd.Parameters.Add("in_locnId", MySqlDbType.VarChar).Value = locnid;
            cmd.Parameters.Add("in_userId", MySqlDbType.VarChar).Value = userid;
            cmd.Parameters.Add("in_localeId", MySqlDbType.VarChar).Value = localeid;
            cmd.Parameters.Add("in_activity_code", MySqlDbType.VarChar).Value = activity_code;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataSet grid_create(string orgnid, string locnid, string userid, string localeid, string activity_code, string mysqlconn)
        {
            DataSet temp = new DataSet();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("fetch_farmer_profile_grid_xml", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("in_orgnId", MySqlDbType.VarChar).Value = orgnid;
            cmd.Parameters.Add("in_locnId", MySqlDbType.VarChar).Value = locnid;
            cmd.Parameters.Add("in_userId", MySqlDbType.VarChar).Value = userid;
            cmd.Parameters.Add("in_localeId", MySqlDbType.VarChar).Value = localeid;
            cmd.Parameters.Add("in_activity_code", MySqlDbType.VarChar).Value = activity_code;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataSet grid_locale(string orgnid, string locnid, string userid, string localeid, string activity_code, string mysqlconn)
        {
            DataSet temp = new DataSet();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("fetch_farmer_profile_locale_xml", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("in_orgnId", MySqlDbType.VarChar).Value = orgnid;
            cmd.Parameters.Add("in_locnId", MySqlDbType.VarChar).Value = locnid;
            cmd.Parameters.Add("in_userId", MySqlDbType.VarChar).Value = userid;
            cmd.Parameters.Add("in_localeId", MySqlDbType.VarChar).Value = localeid;
            cmd.Parameters.Add("in_activity_code", MySqlDbType.VarChar).Value = activity_code;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
    }
}
