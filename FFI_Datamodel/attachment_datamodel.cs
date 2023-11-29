using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace FFI_Datamodel
{
   public class attachment_datamodel
    {
        private MySqlConnection con;
        public DataSet fetch_list_attach(string in_menu_id, string in_doc_number,int in_doc_rowid,string orgnId,string locnId, string userId, string mysqlconn)
        {
            DataSet temp = new DataSet();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("fetch_doc_attachment", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("in_menu_id", MySqlDbType.VarChar).Value = in_menu_id;
            cmd.Parameters.Add("in_doc_number", MySqlDbType.VarChar).Value = in_doc_number;
            cmd.Parameters.Add("in_doc_rowid", MySqlDbType.Int32).Value = in_doc_rowid;
            cmd.Parameters.Add("orgnId", MySqlDbType.VarChar).Value = orgnId;
            cmd.Parameters.Add("locnId", MySqlDbType.VarChar).Value = locnId;
            cmd.Parameters.Add("userId", MySqlDbType.VarChar).Value = userId;
            cmd.CommandTimeout = 0;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        public DataSet saveDocAttachment(string doc_number, string menu_id, int doc_rowid, string filename, string file_version, string attach_rowid, string file_size, string attach_group_code, string attach_subgroup_code, string notes, string file_path, string mode_flag, string orgnId, string locnId, string userId, string mysqlconn)
        {
            DataSet temp = new DataSet();
            con = new MySqlConnection(mysqlconn);
            con.Open();
            string[] returnvalues = { };
            MySqlCommand cmd = new MySqlCommand("iud_doc_attachment", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("p_menu_id", MySqlDbType.VarChar).Value = menu_id;
            cmd.Parameters.Add("p_doc_number", MySqlDbType.VarChar).Value = doc_number;
            cmd.Parameters.Add("p_doc_rowid", MySqlDbType.Int32).Value = doc_rowid;
            cmd.Parameters.Add("p_attach_rowid", MySqlDbType.Int32).Value = attach_rowid;
            cmd.Parameters.Add("p_filename", MySqlDbType.VarChar).Value = filename;
            cmd.Parameters.Add("p_file_version", MySqlDbType.VarChar).Value = file_version;
            cmd.Parameters.Add("p_attach_group_code", MySqlDbType.VarChar).Value = attach_group_code;
            cmd.Parameters.Add("p_attach_subgroup_code", MySqlDbType.VarChar).Value = attach_subgroup_code;
            cmd.Parameters.Add("p_notes", MySqlDbType.VarChar).Value = notes;
            cmd.Parameters.Add("p_file_size", MySqlDbType.VarChar).Value = file_size;
            cmd.Parameters.Add("p_file_path", MySqlDbType.VarChar).Value = file_path;           
            cmd.Parameters.Add("p_orgnId", MySqlDbType.VarChar).Value = orgnId;
            cmd.Parameters.Add("p_locnId", MySqlDbType.VarChar).Value = locnId;
            cmd.Parameters.Add("p_userId", MySqlDbType.VarChar).Value = userId;
            cmd.Parameters.Add("p_mode_flag", MySqlDbType.VarChar).Value = mode_flag;
            cmd.CommandTimeout = 0;
            MySqlDataAdapter da = new MySqlDataAdapter(cmd);
            da.Fill(temp);
            con.Close();
            return temp;
        }
        
    }
}
