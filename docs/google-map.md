# Google Map API

## I. Product

- Routes `(Directions, Distance Matrix, Roads)`:
  - Directions API
  - Direction matrix API
  - Roads API - Maps javascript API
  - Maps Javascript API
- Map `(Map,Street View)`:
  - Maps Javascript API
  - Map Static API
  - Street View API
  - Map SDK for Android/IOS
- Places `(Place details,Current place,Find place,Geocoding,Geolocation, Time zone)`:
  - Places Library,Maps Javascript API
  - Places API
  - Geocoding API
  - Geolocation API
  - Time zone API
  - Elevation API

## II. Pricing

- Pricing for our core products is `pay as you go and you only pay for what you use`.
- You also get a recurring `$200 credit on your billing account each month` to offset your usage costs, and you can set usage limits to protect against unexpected cost increases.
- Estimate your monthly bill with [Pricing Calculator](https://mapsplatformtransition.withgoogle.com/calculator)
- [Pricing sheet](https://cloud.google.com/maps-platform/pricing/sheet/)

## III. Directions API

### 1. Direction

- **0–100,000** : 0.005 USD per each (5.00 USD per 1000)
- **100,001–500,000** : 0.004 USD per each (4.00 USD per 1000)
- A request to the Directions API or the Maps JavaScript API’s Directions Service (excludes requests triggering the Directions Advanced billing SKU)

### 2. Directions Advanced

- **0–100,000** :0.01 USD per each (10.00 USD per 1000)
- **100,001–500,000** : 0.008 USD per each (8.00 USD per 1000)
- A request to the Directions API or the Maps JavaScript API’s Directions Service that uses traffic information, more than `10 waypoints, and/or waypoints optimization`.
- A Directions Advanced SKU is `charged` for a Directions API request or a Maps JavaScript API’s Directions Service that uses one or more of the following:
  - **Traffic information**:
    - The travel mode parameter is driving, or is not specified (`driving` is the default travel mode).
    - The request includes a valid `departure_time parameter`. The `departure_time` can be set to the current time or some time in the future. It cannot be in the past.
    - The request does not include stopover `waypoints`. If the request includes waypoints, prefix each waypoint with via: to influence the route but avoid stopovers
  - **More than 10 waypoints** (between 11 and 25).
  - **Waypoints optimization**. The optimize parameter is set to `true` for waypoints

### 3. Traffic Model

- Pessimistic

  - If your application is used for scheduling deliveries, and you want to ensure you’ve allowed enough time between deliveries so your drivers won’t be late, you might want to use the pessimistic travel time estimates.Summary ,it uses historical data but assumes the traffic conditions are bad

- Opstimisc

  - On the other hand, if you’re building a thermostat app, and you want the house to be warm by the time your user arrives home from work, you might want to use the optimistic travel time estimate to calculate when the user is likely to arrive.Summary ,it uses historical data but assumes the traffic conditions are good

- Best guess
  - If you want to give your user an estimate of the most likely travel time to their destination, the default best_guess traffic model will give you the most likely travel time considering both current traffic conditions and historical averages. Summary ,it estimates the best guess drive time based on historical data

## VI. Geocoding API

### 1. Session Tokens

- Session tokens group the query and selection phases of a user autocomplete search into a discrete session for billing purposes.
- The session begins when the user starts typing a query, and concludes when they select a place and `a call to Place Details is made`
- If the user does not make a selection, the session will end after a short time out period
- If you reuse a session token, the session is considered invalid and the requests are charged as if no session token was provided.

### 2. Autocomplete Pricing Rules

- `An Autocomplete without Places Details` – Per Session SKU is charged for an Autocomplete session that does not include a Places Details reques

  - Example:
    - If your application issues the following two calls in a single session:
      - Places Autocomplete Request (input=”par”, sessiontoken=”XYZ”) Places
      - Autocomplete Request (input=”paris”, sessiontoken=”XYZ”)
    - On your bill, you will see the following SKU listed (when viewing your bill by SKU):
      - Autocomplete without Places Details – Per Session (price starting at `0.017 USD per session`)

- `Autocomplete (included with Places Details)` – Per Session is charged for an Autocomplete session that includes a Places Details request

  - Example:

    - If your application issues the following three calls in a single session:

      - Places Autocomplete Request (input=”par”, sessiontoken=”XYZ”)
      - Places Autocomplete Request (input=”paris”, sessiontoken=”XYZ”)
      - Places Details (place_id=”place_id”, sessiontoken=”XYZ”, fields:formatted_address)

    - On your bill, you will see the following SKUs listed (when viewing your bill by SKU):

      - Autocomplete (included with Places Details) – Per Session (billed at 0.00 USD)
      - Places Details (price starting at 0.017 USD per session)
      - Basic Data (billed at 0.00 USD)

### 3. Diffirent between Autocomplete and SearchBox

- Autocomplete:adds a text input field to your web page, and monitors that field for character entries. As the user enters text, autocomplete returns place predictions in the form of a dropdown pick list. When the user selects a place from the list, information about the place is returned to the autocomplete object, and can be retrieved by your application.
- SearchBox: adds a text input field to your web page, in much the same way as Autocomplete.
- The differences are as follows:
  - The main difference lies in the results that appear in the pick list. SearchBox supplies an extended list of predictions, which can include places (as defined by the Places API) plus suggested search terms. For example, if the user enters 'pizza in new', the pick list may include the phrase 'pizza in New York, NY' as well as the names of various pizza outlets.
  - SearchBox offers fewer options than Autocomplete for restricting the search. In the former, you can bias the search towards a given LatLngBounds. In the latter, you can restrict the search to a particular country and particular place types, as well as setting the bounds.

## V. Map API

### 1. Static Maps

- **0–100,000** : 0.002 USD per each (2.00 USD per 1000)
- **100,001–500,000** : 0.0016 USD per each (1.60 USD per 1000)
- A request to the Maps Static API.
- User interactions with the map, such as panning, zooming, or switching map layers, `do not generate additional map loads`.

```csharp
https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=YOUR_API_KEY
```

### 2. Dynamic Maps

- **0–100,000** : 0.007 USD per each (7.00 USD per 1000)
- **100,001–500,000** : 0.0056 USD per each (5.60 USD per 1000)
- A web page or application that displays a map using the **Maps JavaScript API**. A map is created with the google.maps.Map() class.
- User interactions with the map, such as panning, zooming, or switching map layers, do not generate additional map loads.
- With the pay-as-you-go pricing model, the creation of a `Street View` panorama is `no longer charged` as a map load. `It is charged as a Dynamic Street View`

```csharp
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    async defer></script>
```

## VI. Optimize web service usage

### Cache Results

- You can temporarily cache Google Maps data, for a period of up to 30 days, to improve performance of your application
- By caching web service responses, your application can avoid sending duplicate requests over short periods of time
- Ensure your application always caches results for at least the amount of time specified in this header, but no more than the maximum time specified in the Google Maps Platform Terms of Service

```csharp
Cache-Control: public, max-age=86400
```

- To increase cache hit rates, make sure you normalize **latitude/longitude (lat/long)** coordinates by rounding to **6 decimal places**, which provides a precision of about **11** centimeters around the equator
- If you add more decimals, results from web services won’t change but cache hit rates will **decrease**.

### Throttle requests

- To avoid exceeding usage limits, you can configure your application to throttle requests, by placing them in a queue that keeps track of when the requests are sent. If your application receives one additional request beyond the QPS limit, it should check the timestamp of the first request and wait 1 second.
- Configure your application to insert a small delay (20 ms) and try again if it receives such response

### Increase QPS(queries per second) Limit

- To request a QPS increase, contact your Google Maps Platform Sales Account Manager.

## VII. Notes

- The 100,000 daily free requests are shared across all Maps JavaScript API client-side services and Google Maps APIs web services—all requests are subtracted from the same pool of 100,000 free daily requests. Any additional requests are applied against the total number of Maps APIs Credits you purchased for your Premium Plan. Your free daily request pool is reset at 12:00 am Pacific Time. Note that the 100,000 daily free requests do not apply to Location Services license
- Default rate limit, to prevent abuse. Learn how to [optimize web service usage](https://developers.google.com/maps/premium/optimize-web-services#optimize) or request a rate limit (QPS) increase.

## VIII. References

- Algorithm
  - [Travelling salesman problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem)
  - [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
