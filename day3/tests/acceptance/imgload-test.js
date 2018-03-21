import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
 
moduleForAcceptance('Waits for image to be loaded');
 
test('/', function(assert) {
  visit('/');
 
  andThen(function() {
    assert.equal(currentURL(), '/');
      
  });
 
});
 
test('image loaded', function(assert) {
    visit('/');
   
    andThen(function() {
      assert.equal(find('#image-loaded-text').text(), 'image loaded');
        
    });
});