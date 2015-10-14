'use strict'

/*
 * eegl-ng-seo
 * 

 * Version: 0.1.0
 * License: MIT
 */

angular.module('eegl-ng-seo', [])
  .service('PageTitle', function() {
    var title = 'Loading site...'
    var globalTitle = ''
    var position
    var seperator = ' | '
    return {
      config: function (settings) {
        if( settings.position )    { position = settings.position }
        if( settings.seperator ) { seperator = settings.seperator }
        if( settings.globalTitle ) { globalTitle = settings.globalTitle }
      },
      title: function() { return title; },
      setTitle: function(newTitle) {
        if( position === 'prefix' ) {
          title = globalTitle + seperator + newTitle
        } else {
          title = newTitle + seperator + globalTitle 
        }
      },
      setGlobalTitle: function(title) { globalTitle = title }
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