function hideCollapse(){
  $('.collapse').collapse('hide');
}

document.querySelector('.next-faq').addEventListener('click', hideCollapse);
document.querySelector('.prev-faq').addEventListener('click', hideCollapse);

var $faqContainer = $('#faq-container');
$faqContainer.on('show.bs.collapse','.collapse', function() {
    $faqContainer.find('.collapse.in').collapse('hide');
});