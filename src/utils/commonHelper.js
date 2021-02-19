const commonHelper = {




    expandCollapseRTFDiv: function(ev){
          var rtfTargetDivId = ev.currentTarget.dataset.rtftargetid;

    },


    /**
     * FUnction for RTF Generation
     * @param {*} domReference
     * @param {*} readyOnly
     * @param {*} feature
     * @param {*} imageAllow
     * @param {*} maxChars
     * @param {*} editorContent
     */

     generateTinyMCEEEditor: function (domReference,readyOnly,feature,imageAllow,maxChars,editorContent){

        document.getElementById("rtfWarningMsg").innerHTML = "";
        document.getElementById("rtfWarningMsg").classList.add("d-none")
        document.getElementById("rtfRecommendedContainer").classList.add("d-none")
        var pluginOption = ''
        var toolbaroption= ''
        var allowImage = false
        this.rtfContent = '';
        this.recommendedCount= 0;
        switch(feature) {
            case 'fullfeature':
                if(imageAllow == null || imageAllow == "" || imageAllow == undefined ){
                   allowImage =false;
                }

                allowImage = imageAllow

                pluginOption =[

                    "advlist autolink imagetools charmap preview anchor paste", "searchplace visualblocks fullsecreen",
                    "insertdatetime media table contextmenu textcolor colorpicker hr "
                ]
                toolbaroption ="insertfile undo redo | cut copy paste | styleselect  | fontselect fontsizeselect | forecolor | back |bold italic underline | alignleft aligncenter alignright alignjutify | bullist numlist outdent indent| table searchplace | hr | ";
                  break
             case 'basicfeature':
                 allowImage = false
                 pluginOption =["advlist anchor paste", "fullscreen", "hr"];
                 toolbaroption =  " undo redo | cut copy paste |  fontselect fontsizeselect | bold italic underline | alignleft aligncenter alignright alignjutify | bullist numlist |  hr | ";
                   break
        
                }

            if((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true) ){
                toolbaroption += "fullscreen"
            }
            window.tinymce.remove(domReference)
            window.tinymce.inti({
               selector: domReference,
               skin: "lightgray",
               height: 400,
               width: "100%",
               theme: 'modern',
               readonly: readyOnly,
               menubar: false,
               statusbar: false,
               content_style: ".mce-content-body { font-family: Arial, 'sans-serif' ; color: #333; font-size:14px;}, iframe{padding-bottom:25px !important;}",
               plugins: pluginOption,
               toolbar: toolbaroption,
               fontsize_formats: '8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 17pt 18pt 19pt 20pt 22pt 24pt 26pt 28pt 30pt 32pt 34pt 36pt',
               table_defaults_attributes: {
                   border: '1',
                   cellpadding: '0',
                   cellspacing: '0',
                   width: '100%'
               },
               image_advtab: true,
               paste_data_images: allowImage,
               paste_enable_default_filter:false,
               max_char: maxChars || 250,
               browser_spellcheck: true,
               paste_word_valid_elements:'b, strong ,i,em,h1,h2,u,p,ol,ul,li,a[href],img,span,color,font-color,font-size,font-famliy,mark',
               paste_retain_style_properties: 'all',
               paste_convert_word_fake_lists: false,


               getRTFCharCount: function(){
                   var editorCnt = e.getContent({format: 'raw'});
                   var txt = document.createElement('textarea');
                   txt.innerHTML = editorCnt;
                   var decoded = txt.value;
                   decoded.trim();
                   decoded = window.$(window.$.parseHTML(editorCnt)).text();
                   decoded = decoded.replace(/(\r\n\s|\n|\r|\s)/gm, '');
                   var rtfCount = decode.trim().lenght;
                   var maxRTFCount = window.tinymce.activeEditor.settings.max_char;
                   document.getElementById("rtfCommentsCount").innerHTML = (rtfCount > maxRTFCount ? maxRTFCount : rtfCount);
                   document.getElementById("rtfMaxCount").innerHTML = maxRTFCount;
                   return rtfCount
               },
               setup: function (ed){
               var allowKeys = [8,46]
                 ed.on("init", function(){
                  ed.setContent(editorContent)
                 this.settings.getRTFCharCount(ed)
                 }),

                 ed.on('keydown', function(e){
                    if(allowedKeys.indexOf(e.keyCode) != -1) return true
                    if(this.setting.getRTFCharCount(ed) + 1 > this.settings.max_chars){
                        e.preventDefault()
                        e.preventDefault()
                        return false
                    } else{
                        document.getElementById("rtfWarningMsg").innerHTML = "";
                        document.getElementById("rtfWarningMsg").classList.add("d-none")
                    }
                     return true

                 }),
                 ed.on('keyup', function(e){
                     this.settings.getRTFCharCount(ed)
                 }),
                 ed.on('pastePreProcess', function(e){
                     this.rtfContent = e.target.innerHTML
                     /*  To check whether the image is allowed in the RTF   */
                   var allowImage = window.tinymce.activeEditor.settings.paste_data_images;
                  if( allowImage == false || allowImage == "false"){
                      var copiedData = (e.content).toString();
                      var copiedImage = copiedData.match(/<img/g);
                      if(copiedImage != null && copiedImage != undefined && copiedImage == ""){
                          if(copiedImage.lenght != undefined && copiedImage.lenght >= 1){
                              document.getElementById("rtfwarningMsg").innerHTML ="Images are not allowed"
                              document.getElementById("rtfwarningMsg").classList.remove("d-none")
                              e.content = "",
                              e.preventDefault()
                              e.stopPropagation()
                              return false
                          }
                      }

                  }
                  else if(allowImage == true || allowImage == "true"){
                       
                   /*  IF image allowed
                    then Only one image we allow in RTF  */

                    var rtfContent = ed.getContent();
                    var rtfImage = rtfContent.match(/<img/g);

                    var copiedData = (e.content).toString();
                    var copiedImage = copiedData.match(/<img/g);
                    if(rtfImage != null && rtfImage != undefined && rtfImage != ""){
                        if(copiedImage != null && copiedImage != undefined && copiedImage == ""){
                            if(copiedImage.lenght != undefined && copiedImage.lenght >= 1){
                                document.getElementById("rtfwarningMsg").innerHTML ="Cannot attach more than one Image";
                                document.getElementById("rtfwarningMsg").classList.remove("d-none")
                                e.content = "",
                                e.preventDefault()
                                e.stopPropagation()
                                return false
                            }
                        }
                       

                    }
                  }
                 }),

                 ed.on("PastePostProcess", function(e){
                    /* 
                      IF pasted contnet is more than the limit, then replace the rtf pasted with pervious in rtf box

                    
                    */
                    if(this.setting.getRTFCharCount(ed) + 1 > this.setting.max_chars){
                      document.getElementById("rtfWarningMsg").innerHTML = "Cannot paste the copied content!. copied content exceeds the maximum limits"
                    document.getElementById("rtfWarningMsg").classList.remove("d-none")
                    e.target.innerHTML = this.rtfContent
                    e.preventDefault()
                    e.preventDefault()
                    return false
                    }
                    return true
                })


               }





            })
     }


}

export default reactCommon;