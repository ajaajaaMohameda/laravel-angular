<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Definition(
 * definition="Bike",
 * required={"make", "model", "year", "mods"},
 * @OA\Property(
 * property="make",
 * type="string",
 * description="Company name",
 * example="Harley Davidson, Honda, Yamaha"
 * ),
 * @OA\Property(
 * property="model",
 * type="string",
 * description="Motorcycle model",
 * example="Xl1200, Shadow ACE, V-Star"
 * ),
 * @OA\Property(
 * property="year",
 * type="string",
 * description="Fabrication year",
 * example="2009, 2008, 2007"
 * ),
 * @OA\Property(
 * property="mods",
 * type="string",
 * description="Motorcycle description of modifications",
 * example="New exhaust system"
 * ),
 * @OA\Property(
 * property="picture",
 * type="string",
 * description="Bike image URL",
 * example="http://www.sample.com/my.bike.jpg"
 * )
 * )
 */
class Bike extends Model
{
    //
    protected $fillable = [
        'make',
        'model',
        'year',
        'mods',
        'picture'
    ];

    public function builder()
    {
        return $this->belongsTo('App\Builder');
    }

    public function items() {
        return $this->hasMany('App\Item');
    }

    public function garages()
    {
        return $this->belongsTo('App\Garage');
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function ratings() {
        return $this->hasMany(Rating::class);
    }
}
