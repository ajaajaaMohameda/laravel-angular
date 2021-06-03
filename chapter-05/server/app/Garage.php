<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
* @OA\Definition(
* definition="Garage",
* required={"name", "custumer_level"},
* @OA\Property(
* property="name",
* type="string",
* description="Jhonny Garage",
* example="Exhaust"
* ),
* @OA\Property(
* property="customer_level",
* type="integer",
* description="Whats the garage level",
* example="10"
* )
* )
*/
class Garage extends Model
{
    //
    protected $table = 'garages';

    protected function bikes() {
        return $this->belongsToMany('App\Bike', 'bike_garage', 'bike_id', 'garage_id');
    }
}
