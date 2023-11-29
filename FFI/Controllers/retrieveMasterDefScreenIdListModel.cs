using System;
using System.Xml;
using System.Xml.Serialization;
using System.Xml.Schema;
using System.Collections.Generic;
using System.Web;

namespace MasterCode.Models
{
    public partial class MasterCodeModels
    {
        #region retrieveMasterDefinitionScreenId CLASSES 
        [XmlTypeAttribute(TypeName="retrieveMasterDefinitionScreenIdRequest", Namespace="/retrieveMasterDefinitionScreenId/Request")]
        public class retrieveMasterDefinitionScreenIdRequest
        {
            private retrieveMasterDefinitionScreenIdRequestcontext contextElement;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public retrieveMasterDefinitionScreenIdRequestcontext context
            {
                get
                {
                    return this.contextElement;
                }
                set
                {
                    this.contextElement = value;
                }
            }
            
        }
        
        [XmlTypeAttribute(TypeName="retrieveMasterDefinitionScreenIdRequestcontext", Namespace="/retrieveMasterDefinitionScreenId/Request")]
        public class retrieveMasterDefinitionScreenIdRequestcontext
        {
            private String orgnIdField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String orgnId
            {
                get
                {
                    return this.orgnIdField;
                }
                set
                {
                    this.orgnIdField = value;
                }
            }
            
            private String locnIdField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String locnId
            {
                get
                {
                    return this.locnIdField;
                }
                set
                {
                    this.locnIdField = value;
                }
            }
            
            private String userIdField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String userId
            {
                get
                {
                    return this.userIdField;
                }
                set
                {
                    this.userIdField = value;
                }
            }
            
            private String localeIdField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String localeId
            {
                get
                {
                    return this.localeIdField;
                }
                set
                {
                    this.localeIdField = value;
                }
            }
            
            public retrieveMasterDefinitionScreenIdRequestcontext() {}
            public retrieveMasterDefinitionScreenIdRequestcontext(String orgnId, String locnId, String userId, String localeId)
            {
                orgnIdField = orgnId;
                locnIdField = locnId;
                userIdField = userId;
                localeIdField = localeId;
            }
            private retrieveMasterDefinitionScreenIdRequestHeader HeaderElement;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public retrieveMasterDefinitionScreenIdRequestHeader Header
            {
                get
                {
                    return this.HeaderElement;
                }
                set
                {
                    this.HeaderElement = value;
                }
            }
            
        }
        
        [XmlTypeAttribute(TypeName="retrieveMasterDefinitionScreenIdRequestHeader", Namespace="/retrieveMasterDefinitionScreenId/Request")]
        public class retrieveMasterDefinitionScreenIdRequestHeader
        {
            private String screen_codeField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String screen_code
            {
                get
                {
                    return this.screen_codeField;
                }
                set
                {
                    this.screen_codeField = value;
                }
            }
            
            public retrieveMasterDefinitionScreenIdRequestHeader() {}
            public retrieveMasterDefinitionScreenIdRequestHeader(String master_code)
            {
                screen_codeField = master_code;
            }
        }
        
        [XmlTypeAttribute(TypeName="retrieveMasterDefinitionScreenIdResponse", Namespace="/retrieveMasterDefinitionScreenId/Response")]
        public class retrieveMasterDefinitionScreenIdResponse
        {
            private retrieveMasterDefinitionScreenIdResponsecontext contextElement;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public retrieveMasterDefinitionScreenIdResponsecontext context
            {
                get
                {
                    return this.contextElement;
                }
                set
                {
                    this.contextElement = value;
                }
            }
            
            private retrieveMasterDefinitionScreenIdResponseApplicationException ApplicationExceptionElement;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public retrieveMasterDefinitionScreenIdResponseApplicationException ApplicationException
            {
                get
                {
                    return this.ApplicationExceptionElement;
                }
                set
                {
                    this.ApplicationExceptionElement = value;
                }
            }
            
        }
        
        [XmlTypeAttribute(TypeName="retrieveMasterDefinitionScreenIdResponseApplicationException", Namespace="/retrieveMasterDefinitionScreenId/Response")]
        public class retrieveMasterDefinitionScreenIdResponseApplicationException
        {
            private String errorNumberField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String errorNumber
            {
                get
                {
                    return this.errorNumberField;
                }
                set
                {
                    this.errorNumberField = value;
                }
            }
            
            private String errorDescriptionField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String errorDescription
            {
                get
                {
                    return this.errorDescriptionField;
                }
                set
                {
                    this.errorDescriptionField = value;
                }
            }
            
        }
        
        [XmlTypeAttribute(TypeName="retrieveMasterDefinitionScreenIdResponsecontext", Namespace="/retrieveMasterDefinitionScreenId/Response")]
        public class retrieveMasterDefinitionScreenIdResponsecontext
        {
            private String orgnIdField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String orgnId
            {
                get
                {
                    return this.orgnIdField;
                }
                set
                {
                    this.orgnIdField = value;
                }
            }
            
            private String locnIdField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String locnId
            {
                get
                {
                    return this.locnIdField;
                }
                set
                {
                    this.locnIdField = value;
                }
            }
            
            private retrieveMasterDefinitionScreenIdResponseDetail[] DetailElement;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public retrieveMasterDefinitionScreenIdResponseDetail[] Detail
            {
                get
                {
                    return this.DetailElement;
                }
                set
                {
                    this.DetailElement = value;
                }
            }
            
        }
        
        [XmlTypeAttribute(TypeName="retrieveMasterDefinitionScreenIdResponseDetail", Namespace="/retrieveMasterDefinitionScreenId/Response")]
        public class retrieveMasterDefinitionScreenIdResponseDetail
        {
            private int master_rowidField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public int master_rowid
            {
                get
                {
                    return this.master_rowidField;
                }
                set
                {
                    this.master_rowidField = value;
                }
            }



            private int row_slnoField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public int row_slno
            {
                get
                {
                    return this.row_slnoField;
                }
                set
                {
                    this.row_slnoField = value;
                }
            }


            private String parent_codeField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String parent_code
            {
                get
                {
                    return this.parent_codeField;
                }
                set
                {
                    this.parent_codeField = value;
                }
            }

            private String parent_descriptionField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String parent_description
            {
                get
                {
                    return this.parent_descriptionField;
                }
                set
                {
                    this.parent_descriptionField = value;
                }
            }

            private String master_codeField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String master_code
            {
                get
                {
                    return this.master_codeField;
                }
                set
                {
                    this.master_codeField = value;
                }
            }

            private String master_descriptionField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String master_description
            {
                get
                {
                    return this.master_descriptionField;
                }
                set
                {
                    this.master_descriptionField = value;
                }
            }
            
            

            private String master_ll_descriptionField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String master_ll_description
            {
                get
                {
                    return this.master_ll_descriptionField;
                }
                set
                {
                    this.master_ll_descriptionField = value;
                }
            }

            private String depend_codeField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String depend_code
            {
                get
                {
                    return this.depend_codeField;
                }
                set
                {
                    this.depend_codeField = value;
                }
            }

            private String depend_descField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String depend_desc
            {
                get
                {
                    return this.depend_descField;
                }
                set
                {
                    this.depend_descField = value;
                }
            }

            //private String locallang_flag;
            //[XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            //public String locallang_flag 
            //{
            //    get
            //    {
            //        return this.locallang_flagField;
            //    }
            //    set
            //    {
            //        this.locallang_flagField = value;
            //    }
            //}

            private String status_codeField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String status_code
            {
                get
                {
                    return this.status_codeField;
                }
                set
                {
                    this.status_codeField = value;
                }
            }


            private String status_descField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String status_desc
            {
                get
                {
                    return this.status_descField;
                }
                set
                {
                    this.status_descField = value;
                }
            }

            private String row_timestampField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String row_timestamp
            {
                get
                {
                    return this.row_timestampField;
                }
                set
                {
                    this.row_timestampField = value;
                }
            }

            //private String mode_flag;
            //[XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            //public String mode_flag
            //{
            //    get
            //    {
            //        return this.mode_flagField;
            //    }
            //    set
            //    {
            //        this.mode_flagField = value;
            //    }
            //}
        }
        
        #endregion
    }
}
