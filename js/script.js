
    $(document).ready(function(){
        $("#mycarousel").carousel( {
             interval: 1000 
            } ); //time of change
            
        $("#carouselButton").click(function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
            }
        });

    });

    
    $('#Login').on('click', function () {
        $('#LoginModal').modal('show')
    });


    $('#Reserve').on('click', function () {
        $('#ReserveModal').modal('show')
    });

