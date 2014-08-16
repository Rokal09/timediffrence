
        "use strict";

$(document).ready(function () {
     var data = "TimeIN",hour=0;
    data += "<select style='width:200px' class='cal' id='inp'>";
     var hour=0;
             
             for(var i=0;i<24;i++){
                    for(var j=0;j<60;j+=15,min+=15){
                        i=i < 10 ? ("0" + i).slice(-2) : i;
                        j=j < 10 ? ("0" + j).slice(-2) : j;
                        if(j==15)
                            j=parseInt(j.slice(-2));
                        data+="<option value='"+i+j+"'>"+i+":"+j+"</option>";
                    }
                }
                data+=" </select>&nbsp&nbsp";
               data+="TimeOut&nbsp&nbsp";
                data+="<select style='width:200px'class='cal' id='out' >";   
                for(var i=0;i<24;i++,hour++){
                    var min=0;
                    for(var j=0;j<60;j+=15,min+=15){
                        
                        i=i < 10 ? ("0" + i).slice(-2) : i;
                        j=j < 10 ? ("0" + j).slice(-2) : j;
                        if(j==15)
                            j=parseInt(j.slice(-2));
                         hour=hour < 10 ? ("0" + hour).slice(-2) : hour;
                        min=min < 10 ? ("0" + min).slice(-2) : min;
                        if(min==15)
                            min=parseInt(min.slice(-2));
                        data+="<option value='"+i+j+"'>"+i+":"+j+"&nbsp&nbspTime diff:&nbsp"+hour+":"+min+"</option>";
                    }
                }
                data+=" </select>&nbsp&nbsp";
            // console.log(data);
             $("#in").html(data);
            
               $('#inp').select2()
        .on("change", function(e) {
          // alert(  "change val=" + e.val);
            var inpmin=parseInt(e.val.substring(2, 4),10);
            var inphour=parseInt(e.val.substring(0, 2),10);
            var time=inphour*60+inpmin;
            var firstval=24*60;
            var diff=firstval-time;
            var hour=parseInt(diff/60,10);
            var min=parseInt(diff%60,10);
            alert("value:"+e.val+"min"+min+"hour: "+hour);
           $('#out')[0].options.length = 0;
            
            
            for(var i=0;i<24;i++){
                   
                    for(var j=0;j<60;j+=15){
                        i=i < 10 ? ("0" + i).slice(-2) : i;
                        j=j < 10 ? ("0" + j).slice(-2) : j;
                        if(j==15)
                            j=parseInt(j.slice(-2)); 
                        hour=hour < 10 ? ("0" + hour).slice(-2) : hour;
                        min=min < 10 ? ("0" + min).slice(-2) : min;
                        if(min==15)
                            min=parseInt(min.slice(-2));
            $("<option value='"+i+j+"'>"+i+":"+j+"&nbsp&nbspTime diff:&nbsp"+hour+":"+min+"</option>").appendTo('#out');
                    min+=15;
                        if(min==60){
                        hour++;
                        min=0;
                        }
                        if(hour==24)
                            hour=0;
                    
                    }
                
            }
                        
                           
            
                        
                        
// $('#out').select2('val',0000); // select the new term
  $("#out").select2('close');
            
        })  ; 
     $('#out').select2();
            
});
     