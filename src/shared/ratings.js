export default {
	"user_ratings": [
		{
			"user_id": 1,
			"ratings": [
				{
					"movie_id": 2,
					"ratings": 4
				},
				{
					"movie_id": 1,
					"ratings": 5
				},
				{
					"movie_id": 3,
					"ratings": 1
				}
			]
		},
		{
			"user_id": 2,
			"ratings": [
				{
					"movie_id": 1,
					"ratings": 4
				},
				{
					"movie_id": 2,
					"ratings": 5 //movie id 3 is not there //still its showing 0 stars for user 2
				}
			]
		},
	]
}
