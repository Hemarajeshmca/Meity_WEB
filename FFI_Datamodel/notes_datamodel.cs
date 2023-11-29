using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace FFI_Datamodel
{
   public class notes_datamodel
    {
        private MySqlConnection con;
        public DataSet saveNotes(string in_menu_id, string in_doc_rowid, string in_doc_number,  string notes,string mode_flag,string orgnId, string locnId, string userId, string mysqlconn)
        {
            DataSet temp = new DataSet();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("ins_upd_notes", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("in_menu_id", MySqlDbType.VarChar).Value = in_menu_id;
            cmd.Parameters.Add("in_doc_rowid", MySqlDbType.Int32).Value = in_doc_rowid;
            cmd.Parameters.Add("in_doc_number", MySqlDbType.VarChar).Value = in_doc_number;
            cmd.Parameters.Add("in_notes", MySqlDbType.VarChar).Value = notes;
            cmd.Parameters.Add("in_mode_flag", MySqlDbType.VarChar).Value = mode_flag;
            cmd.Parameters.Add("in_orgnId", MySqlDbType.VarChar).Value = orgnId;
            cmd.Parameters.Add("in_locnId", MySqlDbType.VarChar).Value = locnId;
            cmd.Parameters.Add("in_userId", MySqlDbType.VarChar).Value = userId;
            cmd.CommandTimeout = 0;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataSet fetch_notes(string in_menu_id, string in_doc_number, string in_doc_rowid,string orgnId, string locnId, string userId, string mysqlconn)
        {
            DataSet temp = new DataSet();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("fetch_notes", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("in_menu_id", MySqlDbType.VarChar).Value = in_menu_id;
            cmd.Parameters.Add("in_doc_rowid", MySqlDbType.Int32).Value = in_doc_rowid;
            cmd.Parameters.Add("in_doc_number", MySqlDbType.VarChar).Value = in_doc_number;          
            cmd.Parameters.Add("in_orgnId", MySqlDbType.VarChar).Value = orgnId;
            cmd.Parameters.Add("in_locnId", MySqlDbType.VarChar).Value = locnId;
            cmd.Parameters.Add("in_userId", MySqlDbType.VarChar).Value = userId;
            cmd.Parameters.Add("in_notes", MySqlDbType.VarChar).Direction = ParameterDirection.Output;
            cmd.CommandTimeout = 0;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
    }
}
