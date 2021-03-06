/*
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
describe('AMD loader', function () {
    it('loads the Promise module successfully', function (done) {
        require(['../../promise'], function (Promise) {
            expect(Promise).to.be.a('function');
            expect(Promise.resolve).to.be.a('function');
            expect(Promise.all).to.be.a('function');
            done();
        });
    });
});   
