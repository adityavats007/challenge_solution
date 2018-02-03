
$(function(){
var $orders=$('#orders');
var arrItems = [];
$.ajax({
type: 'GET',
url: 'http://starlord.hackerearth.com/kickstarter',
success:function(orders){
$.each(orders ,function(i,order){
//$orders.append('<ul>'+order.country+'</ul>');
arrItems.push(order.title);
//$orders.append('Project'+i+'<br>'+'     '+'<ul>'+order.country+'</ul>'+'<ul>'+order.currency+'</ul>'+'<ul>'+order.location+'</ul>'+'<ul>'+order.state+'</ul>'+'<br>');
//var t;
//testtttt


//gchjv
//for test






  var currencies = [
    {  data: [{f: 'usaahfjguvkguj',s: 'usee'}]},
    {   data: [{f: 'usaa',s: 'usee'}] },
    {   data: [{f: 'usaa',s: 'usee'}] },
    {  data: [{f: 'usaa',s: 'usee'}] }
	
	];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: arrItems,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Project Name:</strong> ' + suggestion.value[0] ;
      $('#outputcontent').html(thehtml);
    }
  });
	

});

}
});
  

});