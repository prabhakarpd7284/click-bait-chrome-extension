document.addEventListener('DOMContentLoaded',function () { 
 $(function(){
    $('#checkPage').click(function(){
        // alert('dgeyrgfuerhby');
        chrome.tabs.getSelected(null,function (tab) {
            var title = tab.url;
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
                    alert("Url : "+title+"\n Click-Bait : "+res['click-bait']+"\n Non-Click-Bait : "+res['non-click-bait']);
                },
                error:function(result){
                    res = JSON.parse(result);
                    console.log(result);
                    alert("Error in retreiving information.....!!!!!")
                    // console.log(res.click-bait);
                    // alert(res.click-bait);
                }
            });
        });
    });
 });
}, false);