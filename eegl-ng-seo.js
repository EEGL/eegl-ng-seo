'use strict'

/*
 * eegl-ng-seo
 *

 * Version: 0.1.2
 * License: MIT
 */

angular.module('eegl-ng-seo', [])
  .provider('PageTitle', function PageTitleProvider () {
    var title = 'Loading site...'
    var globalTitle = ''
    var position
    var seperator = ' | '

    this.config = function (settings) {
      if( settings.position )     { position = settings.position }
      if( settings.seperator )    { seperator = settings.seperator }
      if( settings.globalTitle )  { globalTitle = settings.globalTitle }
    }

    this.$get = function PageTitleFactory() {
      return {
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
    }
  })
  .service('MetaInformation', function() {
    var metaDescription = ''
    var metaKeywords = ''

    function reset () {
      metaDescription = ''
      metaKeywords = ''
    }

    function getMetaDescription () {
      return metaDescription
    }

    function getMetaKeywords () {
      return metaKeywords
    }

    function setMetaDescription (newMetaDescription) {
      metaDescription = newMetaDescription
    }

    function setMetaKeywords (newKeywords) {
      metaKeywords = newKeywords
    }

    function appendMetaKeywords (newKeywords) {
      for (var key in newKeywords) {
        if (metaKeywords === '') {
          metaKeywords += newKeywords[key].name
        } else {
          metaKeywords += ', ' + newKeywords[key].name
        }
      }
    }

    return {
      getMetaDescription: getMetaDescription,
      getMetaKeywords: getMetaKeywords,
      reset: reset,
      setMetaDescription: setMetaDescription,
      setMetaKeywords: setMetaKeywords,
      appendMetaKeywords: appendMetaKeywords
    }
  })
