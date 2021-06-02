<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @SWG\Definition(
 *  definition="Builder",
 *  required={"name", "description", "location"}
 * 
 * @SWG\Property(
 *  property="name",
 *  type="string",
 *  description="Builder name",
 *  example="Jesse james"
 * ),
 * @SWG\Property(
 *  property="description",
 *  type="string",
 *  description="Famous Motorcycle builder from Texas",
 *  example="Austin Speed Shop"
 * ),
 * @SWG\Property(
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
