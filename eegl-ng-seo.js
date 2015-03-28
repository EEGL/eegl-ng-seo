/*
 * eegl-ng-seo
 * 

 * Version: 0.1.0
 * License: MIT
 */

angular.module('eegl-ng-seo', [])
  .service('PageTitle', function() {
    var title = 'Loading site...'
    var titlePrefix = ''
    return {
      title: function() { return title; },
      setTitle: function(newTitle) { title = titlePrefix + newTitle },
      setGlobalTitle: function(title) { titlePrefix = title }
    }
  })
  .service('MetaInformation', function() {
    var metaDescription = ''
    var metaKeywords = ''
    return {
      metaDescription: function() { return metaDescription },
      metaKeywords: function() { return metaKeywords },
      reset: function() {
        metaDescription = ''
        metaKeywords = ''
      },
      setMetaDescription: function(newMetaDescription) {
        metaDescription = newMetaDescription
      },
      setMetaKeywords: function(newKeywords) {
        metaKeywords = newKeywords
      },
      appendMetaKeywords: function(newKeywords) {
        for (var key in newKeywords) {
          if (metaKeywords === '') {
            metaKeywords += newKeywords[key].name
          } else {
            metaKeywords += ', ' + newKeywords[key].name
          }
        }
      }
    }
  })