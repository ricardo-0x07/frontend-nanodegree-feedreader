/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('feed urls are defined', function() {
            allFeeds.forEach(function(feed) {
            expect(feed.url).toBeDefined();
            });
        });

        it('feed urls are not empty', function() {
            allFeeds.forEach(function(feed) {
            expect(feed.url.length).not.toBe(0);
            });
        });

        /* This test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('feed names are defined', function() {
            allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            });
        });

        it('feed names are not empty', function() {
            allFeeds.forEach(function(feed) {
            expect(feed.name.length).not.toBe(0);
            });
        });


    });

    describe('The menu', function() {
    /* TODO: Write a new test suite named "The menu" */

        /* This test ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            expect($('.slide-menu').offset().left).toBe(-192);
            // expect($('.slide-menu').is(":hidden")).toBe(true);
        });


          describe('changes visibility', function() {

            /* This test ensures the menu changes
             * visibility when the menu icon is clicked. This test
             * should have two expectations: does the menu display when
             * clicked and does it hide when clicked again.
             */
                beforeEach(function(done) {
                    menu = $('body > div.header > a').eq(0);
                    menu.trigger('click');
                    setTimeout(function() {
                        done();
                    }, 4000);
                });


                it('when menu icon clicked', function(done) {
                  expect($('.slide-menu').offset().left).toBeGreaterThan(-192);
                  done();
                });

          });



    });

    describe('Initial Entries', function() {

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
       beforeEach(function(done) {
            loadFeed(3,function(){
                done();     
            });
       });


       it('loaded in feed container', function(done) {
         expect($('.entry').length).toBeGreaterThan(1);
         done();
       });
    });
    describe('New Feed Selection', function() {
            /* The test  ensures that when a new feed is loaded
             * by the loadFeed function that the content actually changes.
             * Remember, loadFeed() is asynchronous.
             */
        var originalFirstEntry;
        beforeEach(function(done) {
            loadFeed(0,function(){
                originalFirstEntry = $('.entry').html();
                loadFeed(3,function(){
                    done();     
                });
            });
        });
        it('changes the content.', function(done) {
            var newFirstEntry = $('.entry').html();
            expect(originalFirstEntry).not.toEqual(newFirstEntry);
            done();
        });

    });
}());
