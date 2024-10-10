ServerEvents.recipes(event => {


event.custom({
    "type": "tfmg:advanced_distillation",
    "ingredients": [
  
      {
        "fluid": "ad_astra:oil",
        "nbt": {},
        "amount": 180
      }
    ],
    "results": [
      {
        "fluid": "tfmg:heavy_oil",
        "amount": 40
      },
      {
        "fluid": "tfmg:diesel",
        "amount": 30
      },
      {
        "fluid": "tfmg:kerosene",
        "amount": 20
      },
      {
        "fluid": "tfmg:naphtha",
        "amount": 20
      },
      {
        "fluid": "tfmg:gasoline",
        "amount": 40
      },
      {
        "fluid": "tfmg:lpg",
        "amount": 30
      }
    ]
  
  
  }
  );

})