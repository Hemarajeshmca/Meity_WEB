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

        public DataSet StockPosition(string pro_code, string pro_name, string orgid, string mysqlconn)
        {
            DataSet temp = new DataSet();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("PAWHSREP_StockPosition", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("p_Product_Code", MySqlDbType.VarChar).Value = pro_code;
            cmd.Parameters.Add("p_Product_Name", MySqlDbType.VarChar).Value = pro_name;
            cmd.Parameters.Add("p_orgn_code", MySqlDbType.VarChar).Value = orgid;          

            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataSet StockMovement(string fromdate,string todate, string pro_code, string pro_name, string orgid, string mysqlconn)
        {
            DataSet temp = new DataSet();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("PAWHS_StockMovementReport", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("p_From_Date", MySqlDbType.VarChar).Value = fromdate;
            cmd.Parameters.Add("p_To_Date", MySqlDbType.VarChar).Value = todate;
            cmd.Parameters.Add("p_Product_Name", MySqlDbType.VarChar).Value = pro_name;
            cmd.Parameters.Add("p_Product_Code", MySqlDbType.VarChar).Value = pro_code;
            cmd.Parameters.Add("p_orgn_code", MySqlDbType.VarChar).Value = orgid;

            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataSet ServiceStockPosition(string farmer_code, string farmer_name,  string orgid, string mysqlconn)
        {
            DataSet temp = new DataSet();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("PAWHS_StockPositionReportForService", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("p_Farmer_Code", MySqlDbType.VarChar).Value = farmer_code;
            cmd.Parameters.Add("p_Farmer_Name", MySqlDbType.VarChar).Value = farmer_name;
            cmd.Parameters.Add("p_orgn_code", MySqlDbType.VarChar).Value = orgid;          

            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
    }
}
