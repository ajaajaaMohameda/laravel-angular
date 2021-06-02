<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @SWG\Definition(
 * definition="Rating",
 * required={"bike_id", "user_id", "rating"},
 * @SWG\Property(
 * property="biker_id",
 * type="integer",
 * description="Bike id",
 * example="1"
 * ),
 * @SWG\Property(
 * property="user_id",
 * type="integer",
 * description="User id",
 * example="2"
 * ),
 * @SWG\Property(
 * property="rating",
 * type="integer",
 * description="Vote by rating",
 * example="10"
 * )
 * )
 */
class Rating extends Model
{
    //
    protected $fillable = [
        'bike_id',
        'user_id',
        'rating'
    ];

    public function bike()
    {
        return $this->belongsTo('App\Bike');
    }
}
