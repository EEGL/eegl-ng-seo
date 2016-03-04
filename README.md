#eegl-ng-seo

Seo service for Angular 1

## Get Started

Install with `bower`:

```shell
bower install eegl-ng-seo
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/eegl-ng-seo/eegl-ng-seo.js"></script>
```

Set `<title>` and `<meta tags>`:

```html
<title ng-bind="PageTitle.title()"></title>
<meta name="description" content="{{ MetaInformation.getMetaDescription() }}">
<meta name="keywords" content="{{ MetaInformation.getMetaKeywords() }}">
```

In your application config:

```js
angular.module('app')
  .config(config)

  function config(PageTitleProvider) {
    PageTitleProvider.config({
      globalTitle: 'Sitetitle',
      seperator: ' | ',
      position: 'postfix'
    })
  }
```

In your application controller:

```js
// UI router change state
$rootScope.$on('$stateChangeSuccess', function (event, toState) {
  // Update meta tags from states' custom data
  PageTitle.setTitle(toState.data.title)
  MetaInformation.setMetaDescription(toState.data.seoDescription)
  MetaInformation.setMetaKeywords(toState.data.seoKeywords)
})
```
