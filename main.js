// Initialize dynamic year
document.addEventListener('DOMContentLoaded', function () {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// jQuery helpers
$(function () {
    // Smooth scroll for internal links
    $(document).on('click', 'a[href^="#"]:not([data-bs-toggle])', function (e) {
        const targetId = $(this).attr('href');
        if (targetId.length > 1 && $(targetId).length) {
            e.preventDefault();
            const offset = 70; // account for fixed navbar
            const top = $(targetId).offset().top - offset;
            $('html, body').animate({ scrollTop: top }, 400);
        }
    });

    // Back-to-top visibility
    const $backToTop = $('.back-to-top');
    const toggleBackToTop = () => {
        if ($(window).scrollTop() > 300) {
            $backToTop.addClass('show');
        } else {
            $backToTop.removeClass('show');
        }
    };
    toggleBackToTop();
    $(window).on('scroll', toggleBackToTop);

    // Basic client-side validation for contact form
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        const form = this;
        let valid = true;
        const $name = $('#name');
        const $email = $('#email');
        const $message = $('#message');
        const $alert = $('#formAlert');

        [$name, $email, $message].forEach(function ($field) {
            if (!$field.val()) {
                $field.addClass('is-invalid');
                valid = false;
            } else {
                $field.removeClass('is-invalid');
            }
        });

        // Basic email pattern
        const emailVal = $email.val();
        const emailOk = /.+@.+\..+/.test(emailVal);
        if (!emailOk) {
            $email.addClass('is-invalid');
            valid = false;
        }

        if (!valid) {
            $alert.removeClass('d-none alert-success').addClass('alert alert-danger').text('Please fill all fields correctly.');
            return;
        }

        // Simulate success
        form.reset();
        $('.is-invalid').removeClass('is-invalid');
        $alert.removeClass('d-none alert-danger').addClass('alert alert-success').text('Thanks! Your message has been sent.');
    });
});


