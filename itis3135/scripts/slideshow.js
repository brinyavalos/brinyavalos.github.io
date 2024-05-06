let slideIndex = 1;

        $(document).ready(function(){
            showSlide(slideIndex);
        });

        function changeSlide(n) {
            showSlide(slideIndex += n);
        }

        function showSlide(n) {
            let slides = $(".slide");
            if (n > slides.length) { slideIndex = 1; }    
            if (n < 1) { slideIndex = slides.length; }
            
            slides.hide();
            slides.eq(slideIndex - 1).show();
        }

        function currentSlide(n) {
            showSlide(slideIndex = n);
        }