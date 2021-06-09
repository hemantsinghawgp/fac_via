let step = document.getElementsByClassName('step');
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let submitBtn = document.getElementById('submit-btn');
let form = document.getElementsByTagName('form')[0];
let preloader = document.getElementById('preloader-wrapper');
let bodyElement = document.querySelector('body');
let succcessDiv = document.getElementById('success');

form.onsubmit = () => {
    return false
}
let current_step = 0;
let stepCount = 7
step[current_step].classList.add('d-block');
if (current_step == 0) {
    prevBtn.classList.add('d-none');
    submitBtn.classList.add('d-none');
    nextBtn.classList.add('d-inline-block');
}

const progress = (value) => {
    document.getElementsByClassName('progress-bar')[0].style.width = `${value}%`;
}

nextBtn.addEventListener('click', () => {
    current_step++;
    let previous_step = current_step - 1;
    if ((current_step > 0) && (current_step <= stepCount)) {
        prevBtn.classList.remove('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block');
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step == stepCount) {
            submitBtn.classList.remove('d-none');
            submitBtn.classList.add('d-inline-block');
            nextBtn.classList.remove('d-inline-block');
            nextBtn.classList.add('d-none');
        }
    } else {
        if (current_step > stepCount) {
            form.onsubmit = () => {
                return true
            }
        }
    }
    progress((100 / stepCount) * current_step);
});
 
 
prevBtn.addEventListener('click', () => {
    if (current_step > 0) {
        current_step--;
        let previous_step = current_step + 1;
        prevBtn.classList.add('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block')
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step < stepCount) {
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');
            nextBtn.classList.remove('d-none');
            nextBtn.classList.add('d-inline-block');
            prevBtn.classList.remove('d-none');
            prevBtn.classList.add('d-inline-block');
        }
    }
 
    if (current_step == 0) {
        prevBtn.classList.remove('d-inline-block');
        prevBtn.classList.add('d-none');
    }
    progress((100 / stepCount) * current_step);
});
 
 
submitBtn.addEventListener('click', () => {
    preloader.classList.add('d-block');
 
    const timer = ms => new Promise(res => setTimeout(res, ms));
 
    timer(3000)
        .then(() => {
            bodyElement.classList.add('loaded');
        }).then(() => {
            step[stepCount].classList.remove('d-block');
            step[stepCount].classList.add('d-none');
            prevBtn.classList.remove('d-inline-block');
            prevBtn.classList.add('d-none');
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');
            succcessDiv.classList.remove('d-none');
            succcessDiv.classList.add('d-block');
        })
 
});


document.querySelector('.customFile').addEventListener('change', function (e) {
    var name = document.getElementById("customFile").files[0].name;
    var nextSibling = e.target.nextElementSibling
    nextSibling.innerText = name
  })




 var $myGroup = $('#myGroup');
      $myGroup.on('show.bs.collapse','.collapse', function() {
          $myGroup.find('.collapse.in').collapse('hide');          
      });
      $('.nominee_cancel').click(function(){
          //alert('ddd');
      });   
        
      function validatePhotoExtension(fld){          
        if(fld.files[0].size > 204800) {
            alert("Please upload file less than 200 KB. Thanks!!");
            $('#sig_photo').val('');
            fld.focus();        
            return false;
        }  
        if(!/(\.png|\.gif|\.jpg|\.jpeg)$/i.test(fld.value)) {
            alert("File must be Jpg, Gif or Png");              
            $('#sig_photo').val('');
            fld.focus();        
            return false;   
        }  
      }
      function validateProjectExtension(fld){
    
        if(!/(\.pdf)$/i.test(fld.value)) {
            alert("File must be Pdf");      
            $('#project_upload').val('');
            fld.focus();        
            return false;   
        }  
      }   
      function validateFileExtension(fld){
    
        if(!/(\.pdf)$/i.test(fld.value)) {
            alert("File must be Pdf");      
            $('#file_upload').val('');
            $('#file2_upload').val('');
            $('#file3_upload').val('');
            $('#file4_upload').val('');
            $('#file5_upload').val('');
            $('#file6_upload').val('');
            $('#file7_upload').val('');
            $('#file8_upload').val('');
            // $('#file6_upload').val('');
            fld.focus();        
            return false;   
        }  
      }
      function validateResumeExtension2(fld){
        if(!/(\.pdf)$/i.test(fld.value)) {
            alert("File must be Pdf");      
            $('#nominee_career_award_file').val('');
            fld.focus();        
            return false;   
        }  
      }
      function validateResumeExtension3(fld){
        if(!/(\.pdf)$/i.test(fld.value)) {
            alert("File must be Pdf");      
            $('#nominee_summary_file').val('');
            fld.focus();        
            return false;   
        }  
      }
      function countChar(val) {
        var len = val.value.length;
        if (len > 1500) {
            val.value = val.value.substring(0, 1500);
        } else {
            $('#charNum').text(1500 - len);
        }
      }   
     
      function contribute(val) {
        var len = val.value.length;
        if (len > 10000) {
            val.value = val.value.substring(0, 10000);
        } else {
            $('#contributeNum').text(10000 - len);
        }
      } 
      function blinker() {
        $('.blink_me').fadeOut(1000);
        $('.blink_me').fadeIn(1000);
      }
      setInterval(blinker, 2000);


        $(document).ready(function () {
            var counter = 1;
            $("#addrow").on("click", function () {
                var newRow = $("<tr>");
                var cols = "";                
                cols += '<td><input type="text" class="form-control" name="mem_name[' + counter + ']" /></td>';
                cols += '<td><input type="text" class="form-control" name="mem_mail[' + counter + ']"/></td>';                
                cols += '<td><input type="text" class="form-control" name="mem_phone[' + counter + ']"/></td>';
                cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
                
                newRow.append(cols);
                $("table.order-list").append(newRow);
                counter++;
               
            });
            $("table.order-list").on("click", ".ibtnDel", function (event) {
                $(this).closest("tr").remove();       
                counter -= 1
            });

        });
        

            $('#nominee_career_award_file').hide();
            $('#nominee_career_award_txt').attr("required", "true");
            $('.nominee_career_file').click(function(){
                $('#nominee_career_award_file').show();
                $('#nominee_career_award').hide();                 
                $('#nominee_career_award_file').attr("required", "true");  
                $('#nominee_career_award_txt').attr("required", "false"); 
            });
            $('.nominee_career_text').click(function(){
                $('#nominee_career_award_file').hide();
                $('#nominee_career_award').show(); 
                $('#nominee_career_award_file').attr("required", "false");  
                $('#nominee_career_award_txt').attr("required", "true");             
            });

            $('#nominee_summary_file').hide();
            $('#nominee_summary_txt').attr("required", "true");
            $('.nominee_summary_file').click(function(){
                $('#nominee_summary_file').show();
                $('#nominee_summary').hide();                 
                $('#nominee_summary_file').attr("required", "true");  
                $('#nominee_summary_txt').attr("required", "false"); 
            });
            $('.nominee_summary_text').click(function(){
                $('#nominee_summary_file').hide();
                $('#nominee_summary').show(); 
                $('#nominee_summary_file').attr("required", "false");  
                $('#nominee_summary_txt').attr("required", "true");             
            });



        $(".datepicker1").datetimepicker({
            format: 'DD-MM-YYYY'
        });
        $("#nominee_photo").on('change', function() {
            if (typeof(FileReader) == "undefined") {
                alert("Your browser doesn't support HTML5, Please upgrade your browser");
            } else {
                var container = $("#image-container");            
                container.empty();
                //create instance of FileReader
                var reader = new FileReader();
                reader.onload = function(e) {
                    $("<img />", {  
                    "src": e.target.result,
                    "width": '70px',
                    }).appendTo(container);
                }                
                reader.readAsDataURL($(this)[0].files[0]);
            }
        });

     


        function statusChange(){            
            if ($('#status').is(':checked')) {                
                $('#status').val('1');
                $('.sub').text('Submit');
            }else{
                $('#status').val('0');
                $('.sub').text('Save');
            }    

        }

         $(document).ready(function(){
             var start_year = $('#start_year').val();
            if(start_year=='2' || start_year=='3' || start_year=='4'  || start_year=='5'){
                $('.jee').hide(); 
                $('.cgpa').show();
            }else if(start_year=='1'){
                $('.jee').show(); 
                $('.cgpa').hide();
            }
            var start_year = $('.start_year').val();
            if(start_year!=''){               
                $('.start_year').attr('readonly','true');
            }
        });

        $('.jee').hide(); 
        $('.cgpa').hide();
        $(".start_year").change(function(){            
            var val = this.value;
            if(val=='1'){
                $('.jee').show(); 
                $('.cgpa').hide();
            }else if(val=='2' || val=='3' || val=='4' || val=='5'){
                $('.jee').hide(); 
                $('.cgpa').show();
            }else{
                $('.jee').hide(); 
                $('.cgpa').hide();
            }
        });

         $(document).ready(function() {
    $("#writeup").on('keyup', function() {
        var words = this.value.match(/\S+/g).length;
        if (words > 200) {
            // Split the string on first 200 words and rejoin on spaces
            var trimmed = $(this).val().split(/\s+/, 200).join(" ");
            // Add a space at the end to keep new typing making new words
            $(this).val(trimmed + " ");
        }
        else {
            $('#display_count').text(words);
            $('#word_left').text(200-words);
        }
    });
 }); 

          function show_data(){
    


        
        
        var empcode = document.getElementById("empcode").value; 
        var s_date = document.getElementById("s_date").value;   
        var e_date = document.getElementById("e_date").value;

        //var empcode = 55555;
        var dataString = 'empcode=' + empcode + '&s_date=' +s_date + '&e_date=' +e_date;
        jQuery.ajax({
            url: "register_via.php",
            data: dataString,
            type: "POST",
            success: function(data){ 
                alert(empcode);         
                             $("[style]").removeAttr("style");
        $("#upload_div").html(data);
                $('#show_d').remove();
                //$("#form_shw").visibility.remove();
                $('p').remove();
                $('#psd').show();   
            },
            error: function (){}

        });
    return true;
    

    }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var generatePDF = function() {
  kendo.drawing.drawDOM($("#formConfirmation")).then(function(group) {
    kendo.drawing.pdf.saveAs(group, "http://awards.iitr.ac.in/alumni/awards.php");
  });
}