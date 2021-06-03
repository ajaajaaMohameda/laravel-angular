<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Definition(
 *  definition="Builder",
 *  required={"name", "description", "location"}
 * 
 * @OA\Property(
 *  property="name",
 *  type="string",
 *  description="Builder name",
 *  example="Jesse james"
 * ),
 * @OA\Property(
 *  property="description",
 *  type="string",
 *  description="Famous Motorcycle builder from Texas",
 *  example="Austin Speed Shop"
 * ),
 * @OA\Property(
 *  property="location",
 *  type="string",
 *  description="Texas/Usa",
 *  example="Austin, Texas"
 * )
 * )
 */
class Builder extends Model
{
    //
    protected $table = 'builders';

    protected $fillable = [
        'name',
        'description',
        'location'
    ];

    public function bike() {
        return $this->hasOne('App\Bike');
    }
}
