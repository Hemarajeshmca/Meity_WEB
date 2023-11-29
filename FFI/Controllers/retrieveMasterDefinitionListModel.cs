using System;
using System.Xml;
using System.Xml.Serialization;
using System.Xml.Schema;
using System.Collections.Generic;
using System.Web;

namespace MasterCodes.Models
{
    public partial class MasterCodesModels
    {
        #region retrieveMasterDefinitionList CLASSES 
        [XmlTypeAttribute(TypeName="retrieveMasterDefinitionListRequest", Namespace="/retrieveMasterDefinitionList/Request")]
        public class retrieveMasterDefinitionListRequest
        {
            private retrieveMasterDefinitionListRequestcontext contextElement;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public retrieveMasterDefinitionListRequestcontext context
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
        
        [XmlTypeAttribute(TypeName="retrieveMasterDefinitionListRequestcontext", Namespace="/retrieveMasterDefinitionList/Request")]
        public class retrieveMasterDefinitionListRequestcontext
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
            
            public retrieveMasterDefinitionListRequestcontext() {}
            public retrieveMasterDefinitionListRequestcontext(String orgnId, String locnId, String userId, String localeId)
            {
                orgnIdField = orgnId;
                locnIdField = locnId;
                userIdField = userId;
                localeIdField = localeId;
            }
            private retrieveMasterDefinitionListRequestHeader HeaderElement;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public retrieveMasterDefinitionListRequestHeader Header
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
        
        [XmlTypeAttribute(TypeName="retrieveMasterDefinitionListRequestHeader", Namespace="/retrieveMasterDefinitionList/Request")]
        public class retrieveMasterDefinitionListRequestHeader
        {
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
            
            public retrieveMasterDefinitionListRequestHeader() {}
            public retrieveMasterDefinitionListRequestHeader(String master_code)
            {
                parent_codeField = master_code;
            }
        }
        
        [XmlTypeAttribute(TypeName="retrieveMasterDefinitionListResponse", Namespace="/retrieveMasterDefinitionList/Response")]
        public class retrieveMasterDefinitionListResponse
        {
            private retrieveMasterDefinitionListResponsecontext contextElement;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public retrieveMasterDefinitionListResponsecontext context
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
            
            private retrieveMasterDefinitionListResponseApplicationException ApplicationExceptionElement;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public retrieveMasterDefinitionListResponseApplicationException ApplicationException
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
        
        [XmlTypeAttribute(TypeName="retrieveMasterDefinitionListResponseApplicationException", Namespace="/retrieveMasterDefinitionList/Response")]
        public class retrieveMasterDefinitionListResponseApplicationException
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
        
        [XmlTypeAttribute(TypeName="retrieveMasterDefinitionListResponsecontext", Namespace="/retrieveMasterDefinitionList/Response")]
        public class retrieveMasterDefinitionListResponsecontext
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
            
            private retrieveMasterDefinitionListResponseDetail[] DetailElement;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public retrieveMasterDefinitionListResponseDetail[] Detail
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
        
        [XmlTypeAttribute(TypeName="retrieveMasterDefinitionListResponseDetail", Namespace="/retrieveMasterDefinitionList/Response")]
        public class retrieveMasterDefinitionListResponseDetail
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

         


            private String parent_descriptonField;
            [XmlElementAttribute(Form = XmlSchemaForm.Unqualified)]
            public String parent_descripton
            {
                get
                {
                    return this.parent_descriptonField;
                }
                set
                {
                    this.parent_descriptonField = value;
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
            
        }
        
        #endregion
    }
}
