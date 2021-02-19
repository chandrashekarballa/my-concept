import React, {useEffect} from 'react';


const RichTextEditor = ()=>{

    useEffect(()=>{})

    let {rtfClassName} = props;

    return(
       <div className="detail-content">
           <div className="editable" data-allowimage={props.rtfallowimage}>
              <a href={void(0)}
              
              className=""
              data-rtftype={props.rtftype}
              data-maxlength={props.maxlength}
              data-allowimage={props.allowimage}
              data-rtftargetid={props.rtfid}
              data-editrecommend={props.editrecommend}
              data-rtftitle={props.rtftitle}
              data-sectionhiddenfield={props.sectionhiddenfield}
              onClick={props.modelTriggerEvent}
              data-rtfselectedcust={props.rtfselcust}
              >
             </a>
             <div

                 id={props.rtfid}
                 className={`pb-4 overflow  ${rtfClassName}`}
                 >
             </div>
             <i className="material-icons rtfExpandIcon md-16"
                 data-rtftargetid={props.rtfid}
                 onClick={reactHelper.expandCollapseRTFDiv}
             >import_export</i>
          
           </div>

       </div>


    )


}