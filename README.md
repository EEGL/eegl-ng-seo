#eegl-ng-seo

Seo service for Angular 1.3.x

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
<meta name="description" content="{{ MetaInformation.metaDescription() }}">
<meta name="keywords" content="{{ MetaInformation.metaKeywords() }}">
```

In your application controller:

```js
PageTitle.setGlobalTitle( 'Sitetitle | ' )
$scope.PageTitle = PageTitle
$scope.MetaInformation = MetaInformation

// UI router change state
$rootScope.$on('$stateChangeSuccess', function (event, toState) {
  // Update meta tags from states' custom data
  PageTitle.setTitle(toState.data.title)
  MetaInformation.setMetaDescription(toState.data.seoDescription)
  MetaInformation.setMetaKeywords(toState.data.seoKeywords)
})
```