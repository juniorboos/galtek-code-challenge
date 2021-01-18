## GraphQL Query

```
{
   query {
      weathers {
         id
         city
         coordinates {
            longitude
            latitude
         }
         currentWeather {
            status
            description
            icon
            temp
            feelsLike
            tempMin
            tempMax
            pressure
            humidity
            windSpeed
         }
      }
   }
}
```
