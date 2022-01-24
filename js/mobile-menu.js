  (function($) {
            'use strict';

            // call our plugin
            var Nav = new hcOffcanvasNav('#main-nav', {
                disableAt: false,
                customToggle: '.toggle',
                levelSpacing: 40,
                levelTitles: false,
                levelTitleAsBack: false,
                pushContent: '#container',
                labelClose: false
            });

           

            // demo settings update

            const update = function(settings) {
                if (Nav.isOpen()) {
                    Nav.on('close.once', function() {
                        Nav.update(settings);
                        Nav.open();
                    });

                    Nav.close();
                } else {
                    Nav.update(settings);
                }
            };

            $('.actions').find('a').on('click', function(e) {
                e.preventDefault();

                var $this = $(this).addClass('active');
                var $siblings = $this.parent().siblings().children('a').removeClass('active');
                var settings = eval('(' + $this.data('demo') + ')');

                if ('theme' in settings) {
                    $('body').removeClass().addClass('theme-' + settings['theme']);
                } else {
                    update(settings);
                }
            });

            $('.actions').find('input').on('change', function() {
                var $this = $(this);
                var settings = eval('(' + $this.data('demo') + ')');

                if ($this.is(':checked')) {
                    update(settings);
                } else {
                    var removeData = {};
                    $.each(settings, function(index, value) {
                        removeData[index] = false;
                    });

                    update(removeData);
                }
            });
        })(jQuery);