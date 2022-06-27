
# BMI Calculations

It is a BMI Calculations backend application which takes users data 
(Gender, Weight, Height) as input and return us BMI category in which the user is lying in.

## Installation

```
npm install 
```


## API Reference

#### Find the BMI category and health risk and count of overweight users;

```http
  POST /bmi/calculate
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `usersData` | `array` | takes array of user objects( Gender, WeightKg, HeightCm)|

## Example 

### Input

```
{
  "usersData": [
    {
      "Gender": "Male",
      "HeightCm": 171,
      "WeightKg": 96
    },
    {
      "Gender": "Male",
      "HeightCm": 161,
      "WeightKg": 35
    },
    {
      "Gender": "Male",
      "HeightCm": 153,
      "WeightKg": 82
    },
    {
      "Gender": "Female",
      "HeightCm": 166,
      "WeightKg": 62
    }
  ]
}
```

### output

```
{
  "data": [
    {
      "Gender": "Male",
      "HeightCm": 171,
      "WeightKg": 96,
      "bmiCategory": "Very severely obese",
      "healthRisk": "Very high risk"
    },
    {
      "Gender": "Male",
      "HeightCm": 161,
      "WeightKg": 35,
      "bmiCategory": "Normal weight",
      "healthRisk": "Low risk"
    },
    {
      "Gender": "Male",
      "HeightCm": 153,
      "WeightKg": 82,
      "bmiCategory": "Very severely obese",
      "healthRisk": "Very high risk"
    },
    {
      "Gender": "Female",
      "HeightCm": 166,
      "WeightKg": 62,
      "bmiCategory": "Severel obese",
      "healthRisk": "High risk"
    }
  ],
  "overWeightCount": 0
}

```

## Tech Stack

**Server:** Node, Express

## Note

There is also a file in the root folder named as *bmi-calculation.js*. It contains all the whole code for calculating the required response.

