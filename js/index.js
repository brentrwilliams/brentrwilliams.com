
$(document).ready ( function(){
   
});

$('#aboutLink').on('click',function() {
   $('#resume').hide();
   $('#projects').hide();
   $('#contact').hide();
   $('#about').show();
   return false; // Makes it so the anchor doesn't reload the page
});

$('#projectsLink').on('click',function() {
   $('#about').hide();
   $('#contact').hide();
   $('#resume').hide();
   $('#projects').show();
   return false; // Makes it so the anchor doesn't reload the page
});

$('#resumeLink').on('click',function() {
   $('#about').hide();
   $('#projects').hide();
   $('#contact').hide();
   $('#resume').show();
   return false; // Makes it so the anchor doesn't reload the page
});

$('.contactLink').on('click',function() {
   $('#about').hide();
   $('#projects').hide();
   $('#resume').hide();
   $('#contact').show();
   return false; // Makes it so the anchor doesn't reload the page
});