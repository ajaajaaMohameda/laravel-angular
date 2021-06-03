<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
/**
* @OA\Definition(
* definition="Item",
* required={"type", "name", "company"},
* @OA\Property(
* property="type",
* type="string",
* description="Item Type",
* example="Exhaust"
* ),
* @OA\Property(
* property="name",
* type="string",
* description="Item name",
* example="2 into 1 Exhaust"
* ),
* @OA\Property(
* property="company",
* type="string",
* description="Produced by: some company",
* example="Vance and Hines"
* )
* )
*/
class Item extends Model
{
    //
    protected $table = 'items';

    protected $fillable = [
        'type',
        'name',
        'company',
        'bike_id'
    ];

    public function bike() {
        return $this->belongsTo('App\Bike');
    }
}
