/* feedreader.js
 *
 * In this it contains jasmine file that will help us
 * to check the different suits we write by providind with some conditions
 */

$(function () {
    /*
     * It is our first test suite , this is about RSS Feeds.
     * We will check all the feeds in the variale allFeeds.
     */
    describe('RSS Feeds', function () {
        /*
         * First we will whether all the variable in the allFeeds  are
         * already defined
         */
        it('already defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*
         * In this we have written test suites to  checked whether allFeeds has a URL defined.
         */
        it('has a URL defined/notblanked', function () {
            var test = 0;
            while (test < allFeeds.length) {
                expect(allFeeds[test].url).not.toBeNull(); // to check the url is not null
                expect(allFeeds[test].url).not.toBe(""); // to check the url is not blank
                test++;
            }
        });


        /*
         * in this we have checked test suite that the name  is defined and is not empty
         */
        it('has name defined/not empty', function () {
            var test = 0;
            while (test < allFeeds.length) {
                expect(allFeeds[test].name).toBeDefined; // to check the name is defined
                expect(allFeeds[test].name).not.toBe(""); // to check the name is not empty
                test++;
            }
        });
    });


    /*  A test suite  named "The menu" */
    describe('The menu', function () {

        /*
          * In this test suite we will check that menu is not hidden
          * by default.

        */

        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


        /*
         * In this we will make test case that menu is visbile when it is click
         * We will check two condition.
         */
        it('visible when being clicked', function () {

            var sideBar = $('.menu-icon-link');

            sideBar.click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true); //this is to display the menu
            sideBar.click();
            expect($('body').hasClass('menu-hidden')).toBe(true); // this is to hide the menu
        });
    });

    /* This is  a new test suite named "Initial Entries" */
    describe('Initial entry', function () {
        /*
         * in this i have written test suites that when the
         * function is called and does it work.I have used beforeEach() and done() function
         * as loadFeed () is asynchronous .
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('Has atleast one  Single Entry', function (done) {
            expect($('.feed .entry').length).not.toBeLessThan(0);
            done();
        });
    });

    /* This is a  new test  suite  "New Feed Selection" */
    describe('New Feed Selection', function () {

        /*
         *this function tells that when the latest feed is loaded by
         *loadFeed function then the content changes
         */
        var checkFeed;

        beforeEach(function (done) {
            loadFeed(0, function () {
                checkFeed = $('.entry').html();
                loadFeed(1, function () {
                    done();
                });
            });
        });

        it('is different', function () {
            expect((('.feed').html) = checkFeed).not.toBe(true);
        });
    });


}());