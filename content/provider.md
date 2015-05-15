#### Provider

* The parent of both services and factories.
* Extensive implementation.
* You should reuse provider if you want to have it configured before the application starts.


#### Defining Providers

```
app.provider("game", function () {
  var type;
  return {
    setType: function (value) {
      type = value;
    },
    $get: function () {
      return {
        title: type + "Craft"
      };
    }
  };
});
```

#### Injecting a provider

* We have two places to inject the provider
    * in the module config where the provider was loaded
    * in any of the other services, directives, factories, controllers