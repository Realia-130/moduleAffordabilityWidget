// GET '/homes/:id'
//Returns a JSON object containing all the data on one Home

{
  "id": 1,
    "price": 1250000
}

//POST '/homes'
//Create a new home in the db
//Returns created home

//DELETE '/homes/:id'
//DELETE a specific home
//Returns the data on deleted home

//PUT '/homes/:id'
//UPDATE the data for a specific home
//Returns the updated data for updated home

//GET '/lenders': Returns an array of data on all the lenders

[
  {
    "id": 27,
    "name": "Memorial Lenders",
    "phone": "925-962-1111",
    "zip_code": 94117,
    "favorite": false,
    "mortgage_offerings": [
      {
        "terms": '30 year fixed',
        "rate": 2.4,
        "fees": 1.2,
      },
      {
        "terms": '15 year fixed',
        "rate": 2.2,
        "fees": 2,
      }
    ],
    "reviews": [
      {
        "user_id": 1,
        "rating": 3
      },
      {
        "user_id": 12,
        "rating": 4
      }
    ]
  }
]

//GET '/lenders/:id' Get data for a specific lender.
//Returns a JSON obj.

{
  "id": 27,
    "name": "Memorial Lenders",
      "phone": "925-962-1111",
        "zip_code": 94117,
          "favorite": false,
            "mortgage_offerings": [
              {
                "terms": '30 year fixed',
                "rate": 2.4,
                "fees": 1.2,
              },
              {
                "terms": '15 year fixed',
                "rate": 2.2,
                "fees": 2,
              }
            ],
              "reviews": [
                {
                  "user_id": 1,
                  "rating": 3
                },
                {
                  "user_id": 12,
                  "rating": 4
                }
              ]
}

//Post '/lenders' Create a lender in the data base
  //Returns the created lender

//PUT '/lenders/:id' Update data for a speific lender, mainly to updated whether lender has been favorited.
  //Returns the updated data for specific lender

//DELETE '/lenders/:id' Delete a specific Lender
  //Returns the deleted lender data



