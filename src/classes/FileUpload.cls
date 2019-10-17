public with sharing class FileUpload
{
    /*
        Function for upload large file in multipart
    */
    @AuraEnabled
    public static boolean UploadLargeFile(string fileName ,string fileContent,string contentType,string token){
        boolean result=true;
            
            // change the following variables according to your use-case           
            String targetURL = 'https://identityap-dev-ed.my.salesforce.com/services/data/v23.0/sobjects/Document/';
            String boundary = '--WebKitFormBoundaryFa85TJN1xfmLBdlm';
             
            // assemble the body payload
            String header = boundary + '\r\n' +
            + 'Content-Disposition: form-data; name="entity_document";\r\nContent-Type: application/json' +'\r\n\r\n'+
            + '{\r\n "Description" : "Marketing brochure for Q1 2011",\r\n "Keywords" : "update", \r\n "FolderId" : "00l7F000000Ixwe", \r\n "Name" : "testfile",\r\n "Type" : "txt"\r\n }'+'\r\n\r\n'+
            +  boundary + '\r\n' +
            + 'Content-Type: binary/octet-stream\r\n Content-Disposition: form-data; name="Body"; filename="' + fileName + '\r\n\r\n';
            
            String footer = '\r\n\r\n' + boundary + '--';
            
           /*String headerEncoded = EncodingUtil.base64Encode(Blob.valueOf(header+'\r\n\r\n'));
            
           // String footer = '--' + boundary + '--';
            
            while(headerEncoded.endsWith('='))
            {
               header+=' ';
               headerEncoded = EncodingUtil.base64Encode(Blob.valueOf(header+'\r\n\r\n'));
            }
            
            Blob bodyBlob = null;
            
            String last4Bytes = fileContent.substring(fileContent.length()-4,fileContent.length());

            system.debug('last 4 byte'+last4Bytes);
            
            if(last4Bytes.endsWith('==')) {    
                    last4Bytes = last4Bytes.substring(0,2) + '0K';
                    fileContent= fileContent.substring(0,fileContent.length()-4) + last4Bytes;
                    // We have appended the \r\n to the Blob, so leave footer as it is.
                    String footerEncoded = EncodingUtil.base64Encode(Blob.valueOf(footer));
                    bodyBlob = EncodingUtil.base64Decode(headerEncoded+fileContent+footerEncoded);
                  } 
              else if(last4Bytes.endsWith('=')) {
               
                last4Bytes = last4Bytes.substring(0,3) + 'N';
                fileContent= fileContent.substring(0,fileContent.length()-4) + last4Bytes;
                // We have appended the CR e.g. \r, still need to prepend the line feed to the footer
                footer = '\n' + footer;
                String footerEncoded = EncodingUtil.base64Encode(Blob.valueOf(footer));
                bodyBlob = EncodingUtil.base64Decode(headerEncoded+fileContent+footerEncoded);              
              }
               else {
                                    
                    footer = '\r\n' + footer;
                    String footerEncoded = EncodingUtil.base64Encode(Blob.valueOf(footer));
                    bodyBlob = EncodingUtil.base64Decode(headerEncoded+fileContent+footerEncoded);  
                }*/
                
                
             string bodytest=(header+fileContent+footer);
            /* Blob bodyBlob = null;
             string headerEncoded = EncodingUtil.base64Encode(Blob.valueOf(header));
             String footerEncoded = EncodingUtil.base64Encode(Blob.valueOf(footer));
             bodyBlob = EncodingUtil.base64Decode(headerEncoded+fileContent+footerEncoded); */ 
            // send out the request
              HttpRequest req = new HttpRequest();
              req.setHeader('Content-Type','multipart/form-data; boundary='+boundary);
              req.setMethod('POST');
              req.setEndpoint(targetURL);
              //req.setBodyAsBlob(bodyBlob);
              req.setBody(bodytest);
              //req.setTimeout(60000);
               req.setHeader('Authorization','Bearer 00D7F000001vBrg!AQwAQPE6w8b_fTKDBTlVOyAuD7IJvL2ROOJGBo_cYuriEGjtHXlFlMEAS.65LnaC5GkBHxr6CBK4iN0prDVzpZufjy34H0yF');
             // req.setHeader('Authorization','Bearer '+userInfo.getSessionId());
              //req.setHeader('Content-Length',String.valueof(req.getBodyAsBlob().size()));
              Http http = new Http();
              system.debug('---Request'+ req.getBody());
              HTTPResponse res = http.send(req);
            
            system.debug('--response---'+res); 
            
        return result;
    }
    /*
        Function for get current login user session
    */
    @AuraEnabled
    public static string getCurrentLoginUserSession(){
      return userinfo.getSessionId();
    }
}