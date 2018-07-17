document.addEventListener('DOMContentLoaded',function () { 
 $(function(){
    $('#checkPage').click(function(){
        // alert('dgeyrgfuerhby');
        chrome.tabs.getSelected(null,function (tab) {
            var title = tab.url;
            var titleu = tab.url;
            var title1 = $('#headline').val();
            if(title1!='') title=title1;
            $.ajax({
                url : 'https://cors.io/?https://click-bait.herokuapp.com/predict?',
                method : 'GET',
                data : {
                    text : title
                },
                success:function(result){
                    res = JSON.parse(result);
                    console.log(result);
                    console.log(res['click-bait']);
                    console.log("\nUrl : "+title+"\nEntered Headline : "+title1+"\n Click-Bait : "+res['click-bait']+"\n Non-Click-Bait : "+res['non-click-bait']);

                    $('#result').html("<br>\n<b>Url : </b>"+titleu+"<br>\n<b>Entered Headline : </b>"+title1+"<br>\n <b>Click-Bait : </b>"+res['click-bait']+"<br>\n <b>Non-Click-Bait : </b>"+res['non-click-bait']);
                },
                error:function(result){
                    res = JSON.parse(result);
                    console.log(result);
                    console.log("Error in retreiving information.....!!!!!");

                    $('#result').html("<br>\n<b>Couldn't retreive the information.....</b>");
                }
            });
        });
    });
 });
}, false);